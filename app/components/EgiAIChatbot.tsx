"use client";

import Link from "next/link";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";

type ProjectKey = "speakeasy" | "minutex" | "lulladreams";

type Message = {
  role: "user" | "assistant";
  content: string;
  projects?: ProjectKey[];
  followUps?: string[];
};

const PROJECTS: Record<
  ProjectKey,
  { name: string; category: string; tagline: string; thumb: string; href: string }
> = {
  speakeasy: {
    name: "Speakeasy",
    category: "Mobile App · Language Learning",
    tagline: "AI-powered language app · +24% retention",
    thumb: "/images/speakeasy-thumb.webp",
    href: "/case-study/speakeasy",
  },
  minutex: {
    name: "MinuteX",
    category: "Web · Mobile · Device",
    tagline: "3-in-1 AI meeting assistant ecosystem",
    thumb: "/images/minutex-thumb.webp",
    href: "/case-study/minutex",
  },
  lulladreams: {
    name: "LullaDreams",
    category: "Mobile App · Storytelling",
    tagline: "AI bedtime storytelling for $3.1B market",
    thumb: "/images/lulladreams-thumb.webp",
    href: "/case-study/lulladreams",
  },
};

const PROJECT_KEYS: ProjectKey[] = ["speakeasy", "minutex", "lulladreams"];

const SUGGESTED_QUESTIONS = [
  "What do you do?",
  "Tell me about your projects",
  "What tools do you use daily?",
  "How can I contact you?",
];

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi! I'm Egi — ask me anything about my work, projects, process, or how to get in touch.",
};

function detectProjects(text: string): ProjectKey[] {
  const lower = text.toLowerCase();
  return PROJECT_KEYS.filter((k) => lower.includes(k));
}

// Inline renderer: convert plain-text URLs / emails / bare domains into <a> tags.
// Matches https://… , mailto-style emails, and bare domains with safe TLDs.
const TLD_ALLOWLIST = new Set([
  "com",
  "org",
  "net",
  "io",
  "ai",
  "app",
  "dev",
  "co",
  "me",
  "mobi",
  "so",
  "tech",
  "studio",
  "cloud",
  "design",
  "work",
  "run",
  "build",
  "page",
  "site",
  "xyz",
  "tv",
  "fm",
]);

const LINK_REGEX =
  /(https?:\/\/[^\s)]+)|([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})|((?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[^\s)]*)?)/gi;
const TRAILING_PUNCT = /[.,!?;:)\]'"]+$/;
const CV_URL =
  "https://docs.google.com/document/d/15mDZqVJ1gNEh_KjaWpdZXIhVH0B_JMts/edit?usp=sharing&ouid=100324465092423050866&rtpof=true&sd=true";
const CV_PHRASE_REGEX = /Download\s+CV/gi;

// Pass 2: within a plain-text segment, turn "Download CV" into a link.
function linkifyCvPhrase(text: string, basePrefix: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let last = 0;
  let k = 0;
  let m: RegExpExecArray | null;
  CV_PHRASE_REGEX.lastIndex = 0;

  while ((m = CV_PHRASE_REGEX.exec(text)) !== null) {
    if (m.index > last) {
      out.push(
        <Fragment key={`${basePrefix}-pre-${k}`}>
          {text.slice(last, m.index)}
        </Fragment>,
      );
    }
    out.push(
      <a
        key={`${basePrefix}-cv-${k++}`}
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="egiai-msg-link"
      >
        {m[0]}
      </a>,
    );
    last = m.index + m[0].length;
  }

  if (last < text.length) {
    out.push(
      <Fragment key={`${basePrefix}-tail-${k}`}>{text.slice(last)}</Fragment>,
    );
  } else if (out.length === 0) {
    out.push(<Fragment key={`${basePrefix}-empty`}>{text}</Fragment>);
  }

  return out;
}

function renderInline(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  LINK_REGEX.lastIndex = 0;

  const pushPlain = (chunk: string) => {
    if (!chunk) return;
    out.push(...linkifyCvPhrase(chunk, `pl-${key++}`));
  };

  while ((m = LINK_REGEX.exec(text)) !== null) {
    const [, url, email, bareDomain] = m;
    const start = m.index;

    if (start > lastIndex) {
      pushPlain(text.slice(lastIndex, start));
    }

    let match = m[0];
    let trail = "";
    const trailMatch = match.match(TRAILING_PUNCT);
    if (trailMatch) {
      trail = trailMatch[0];
      match = match.slice(0, -trail.length);
    }

    if (url) {
      out.push(
        <a
          key={`l-${key++}`}
          href={match}
          target="_blank"
          rel="noopener noreferrer"
          className="egiai-msg-link"
        >
          {match}
        </a>,
      );
    } else if (email) {
      out.push(
        <a
          key={`l-${key++}`}
          href={`mailto:${match}`}
          className="egiai-msg-link"
        >
          {match}
        </a>,
      );
    } else if (bareDomain) {
      const tldMatch = match.match(/\.([a-z]{2,})(?:\/|$)/i);
      const tld = tldMatch?.[1].toLowerCase();
      if (tld && TLD_ALLOWLIST.has(tld)) {
        out.push(
          <a
            key={`l-${key++}`}
            href={`https://${match}`}
            target="_blank"
            rel="noopener noreferrer"
            className="egiai-msg-link"
          >
            {match}
          </a>,
        );
      } else {
        pushPlain(match);
      }
    }

    if (trail) {
      out.push(<Fragment key={`p-${key++}`}>{trail}</Fragment>);
    }

    lastIndex = start + m[0].length;
  }

  if (lastIndex < text.length) {
    pushPlain(text.slice(lastIndex));
  }

  return out;
}

function buildFollowUps(reply: string, mentioned: ProjectKey[]): string[] {
  const followUps: string[] = [];
  const notMentioned = PROJECT_KEYS.filter((k) => !mentioned.includes(k));
  const lower = reply.toLowerCase();

  if (mentioned.length === 1 && notMentioned.length > 0) {
    followUps.push(`Tell me about ${PROJECTS[notMentioned[0]].name}`);
    if (notMentioned[1]) {
      followUps.push(`What's ${PROJECTS[notMentioned[1]].name}?`);
    }
  } else if (notMentioned.length === PROJECT_KEYS.length) {
    followUps.push("Tell me about your projects");
  } else if (notMentioned.length > 0) {
    followUps.push(`Tell me about ${PROJECTS[notMentioned[0]].name}`);
  }

  if (!lower.includes("workflow") && !lower.includes("process")) {
    followUps.push("What's your design workflow?");
  }
  if (!lower.includes("tool")) {
    followUps.push("What tools do you use?");
  }
  if (!lower.includes("contact") && !lower.includes("email") && !lower.includes("hire")) {
    followUps.push("How can I hire you?");
  }

  return followUps.slice(0, 3);
}

export default function EgiAIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("egiai:open", handler);
    return () => window.removeEventListener("egiai:open", handler);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      const next: Message[] = [...messages, { role: "user", content: trimmed }];
      setMessages(next);
      setInput("");
      setLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: next.map(({ role, content }) => ({ role, content })),
          }),
        });
        const data = await res.json();
        const reply: string =
          typeof data?.reply === "string"
            ? data.reply
            : "Sorry, something went wrong. Please try again in a moment.";
        const projects = detectProjects(reply);
        const followUps = buildFollowUps(reply, projects);
        setMessages((curr) => [
          ...curr,
          { role: "assistant", content: reply, projects, followUps },
        ]);
      } catch {
        setMessages((curr) => [
          ...curr,
          {
            role: "assistant",
            content:
              "Hmm, I couldn't reach the network. Please check your connection and try again.",
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [messages, loading],
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const showSuggestions = messages.length <= 1;
  const lastIndex = messages.length - 1;

  return (
    <>
      <button
        type="button"
        className={`egiai-fab ${open ? "is-hidden" : ""}`}
        onClick={() => setOpen(true)}
        aria-label="Open EgiAI chat assistant"
      >
        <span className="egiai-fab-avatar" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/egi-photo-circle.png" alt="" />
          <span className="egiai-fab-dot" />
        </span>
        <span className="egiai-fab-label">EgiAI</span>
      </button>

      <div
        className={`egiai-backdrop ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <aside
        className={`egiai-panel ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        aria-label="EgiAI chat assistant"
      >
        <header className="egiai-header">
          <div className="egiai-header-left">
            <div className="egiai-avatar" aria-hidden>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/egi-photo-circle.png" alt="Egi Ghaniyyu" />
            </div>
            <div>
              <div className="egiai-title-row">
                <span className="egiai-title">EgiAI</span>
                <span className="egiai-info-tip" tabIndex={0} aria-label="About EgiAI">
                  <span className="egiai-info-icon" aria-hidden>i</span>
                  <span className="egiai-info-tooltip" role="tooltip">
                    EgiAI is an AI chatbot. May contain hallucinations.
                    Responses are logged for research and development purposes.
                  </span>
                </span>
              </div>
              <div className="egiai-subtitle">
                <span className="egiai-status-dot" aria-hidden /> Online
              </div>
            </div>
          </div>
          <button
            type="button"
            className="egiai-close"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            ✕
          </button>
        </header>

        <div className="egiai-body" ref={scrollRef}>
          {messages.map((m, i) => {
            const isLatestBot = i === lastIndex && m.role === "assistant";
            return (
              <div key={i} className="egiai-msg-group">
                <div
                  className={`egiai-msg ${
                    m.role === "user" ? "egiai-msg-user" : "egiai-msg-bot"
                  }`}
                >
                  {renderInline(m.content)}
                </div>

                {m.role === "assistant" && m.projects && m.projects.length > 0 && (
                  <div className="egiai-cards">
                    {m.projects.map((key) => {
                      const p = PROJECTS[key];
                      return (
                        <Link
                          key={key}
                          href={p.href}
                          className="egiai-card"
                          onClick={() => setOpen(false)}
                        >
                          <div className="egiai-card-thumb">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={p.thumb} alt={p.name} />
                          </div>
                          <div className="egiai-card-body">
                            <div className="egiai-card-category">
                              {p.category}
                            </div>
                            <div className="egiai-card-title">{p.name}</div>
                            <div className="egiai-card-tagline">{p.tagline}</div>
                          </div>
                          <div className="egiai-card-arrow" aria-hidden>
                            →
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}

                {isLatestBot &&
                  !loading &&
                  m.followUps &&
                  m.followUps.length > 0 && (
                    <div className="egiai-followups">
                      {m.followUps.map((q) => (
                        <button
                          key={q}
                          type="button"
                          className="egiai-followup"
                          onClick={() => sendMessage(q)}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
              </div>
            );
          })}

          {loading && (
            <div className="egiai-msg egiai-msg-bot egiai-typing" aria-live="polite">
              <span />
              <span />
              <span />
            </div>
          )}

          {showSuggestions && !loading && (
            <div className="egiai-suggestions">
              <div className="egiai-suggestions-label">Suggested questions</div>
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  className="egiai-suggestion"
                  onClick={() => sendMessage(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>

        <form className="egiai-input-row" onSubmit={onSubmit}>
          <input
            ref={inputRef}
            type="text"
            className="egiai-input"
            placeholder="Ask me anything…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            maxLength={500}
          />
          <button
            type="submit"
            className="egiai-send"
            disabled={loading || !input.trim()}
            aria-label="Send message"
          >
            ↑
          </button>
        </form>
      </aside>
    </>
  );
}
