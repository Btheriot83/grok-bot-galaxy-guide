import type { DayPage } from "./types";

export const day2: DayPage = {
  slug: "day-2",
  title: "Day 2",
  date: "Sep 16, 2026",
  subtitle: "Partial but usable — Sales Eng / Sales / SDR / Support + Cupcake pivot",
  honesty:
    "CellCog update log stops at Day 1. Best Day 2 primary notes = Roenel TIMELINE-day2.md + notes/day2/* (slide/DVR, no CC). Build narrative pivoted into Cupcake (shareable bots as game characters / TCG) while classroom blocks ran.",
  schedule: [
    { time: "8:30", session: "Livestream starts" },
    { time: "9:00–10:30", session: "Sales Engineering", host: "Amrita Venkatraman" },
    { time: "12:30–14:00", session: "Sales", host: "SpaceXAI Sales Team" },
    { time: "14:30–15:30", session: "SDRs", host: "Simon Lackowski" },
    { time: "16:00–17:00", session: "Customer Support", host: "David Gan" },
    { time: "18:00", session: "Day 2 ends (Roenel: player ~8:23)" },
  ],
  sections: [
    {
      id: "ship",
      title: "How they use Grok Bot to ship (build + ops)",
      bullets: [
        {
          text: "Shareable bots reframed as game characters (CHA/DEX/INT, rarity tiers, head-to-head). Product-needs whiteboard: ads, marketing, team, interns?, seed?, distribution. Slack #all-shipbythursday.",
          day: "Day 2",
          sources: [
            "https://github.com/Roenel/Grok-Bot-Galaxy-Notes/blob/main/README.md",
            "TIMELINE-day2",
          ],
        },
        {
          text: "Cupcake pivot: shareable-bot / TCG framing for the Day 2 build spectacle (alongside classroom Sales blocks).",
          day: "Day 2",
          sources: ["Roenel README", "DIGEST Day 2"],
        },
        {
          text: "Chief of Staff roster for Cupcake: Ops / Creative Director / Image Gen / Cupcake Eng / Founding Eng. Potato-mode prototypes; Remotion ads via Cursor cloud agents.",
          day: "Day 2",
          sources: ["Roenel README"],
        },
        {
          text: "dr eggbot on Day 2: watches repo/Slack; Cupcake roster audit — bottleneck is coordination / human merge / Lauren as interrupt bus, not “need more bots.” Create-bot modal hit invalid_body on stream.",
          day: "Day 2",
          sources: ["Roenel README", "remainder28"],
        },
        {
          text: "Free-month promo on stream: duplicate via dr eggbot; first 1,000; framed as ~$200 value.",
          day: "Day 2",
          sources: ["Roenel remainder25 / end card"],
        },
      ],
    },
    {
      id: "se",
      title: "Sales Engineering (Amrita) — steal this",
      intro: "Source: Roenel remainder2–4 · TIMELINE-day2.md",
      bullets: [
        {
          text: "Maturity curve: Ask (chatbots) → Do a task (copilots) → Delegate (autopilot) → Staff function (team of bots).",
          day: "Day 2",
        },
        {
          text: "Why Grok Bot panels: Easy as iMessage · Always-on 24/7 · Uses your tools · Shareable templates · Finishes the work.",
          day: "Day 2",
        },
        {
          text: "SE use-case cards: Engineer (technical resource) · Customer Expert · Echo · Competitive Intel.",
          day: "Day 2",
        },
        {
          text: "Demos: Starlink/SpaceX deck build; Flyto (“quiet way to fly”); bot intake UI; Serena Williams labeled Competitive Intel; Sherlock asking awkward competitor questions (“key differentiator… significantly lower effort to build?”).",
          day: "Day 2",
        },
        {
          text: "Coverage mandate slide claim: legacy repos under-covered → Cursor AI test gen → “Coverage got 85% faster.” (on-screen claim).",
          day: "Day 2",
        },
        {
          text: "Battle Card Blair / AI Radar settings panels; Salesforce follow-ups on stage.",
          day: "Day 2",
        },
      ],
    },
    {
      id: "sales-setup",
      title: "Sales setup tips",
      bullets: [
        {
          text: "Setup tips slide: install/connect bots · route day-to-day to specialists · recurring tasks · bots talk to each other.",
          day: "Day 2",
          sources: ["Roenel remainder15"],
        },
      ],
    },
    {
      id: "sdr",
      title: "SDR (Simon Lackowski) — Army Huddle pattern",
      intro: "Source: Roenel remainder21–22",
      table: {
        headers: ["Use case", "On-screen claim"],
        rows: [
          {
            cells: [
              "Prospecting",
              "After ICP, find titles via web search + enrichment",
            ],
          },
          {
            cells: [
              "Sequencing",
              "Ongoing prospect list (CSV/XLSX) through custom sequence",
            ],
          },
          {
            cells: [
              "Account research",
              "Fundraising / job posts / messaging fit",
            ],
          },
          {
            cells: ["Drafting copy", "Sync email; match your writing voice"],
          },
        ],
      },
      bullets: [
        {
          text: "Bot roster: Simon Bot (CoS), Shakespeare (Email), Web Search, Customer Bot (Gong), Simon Soldier (army).",
          day: "Day 2",
        },
        {
          text: "Connectors in huddle: Sumble, Gong, Enrich, Salesforce, Usage (Databricks), Exa.",
          day: "Day 2",
        },
        {
          text: "Draft-only discipline: 25 Director+ FlyLo prospects; unique email + LI connect/DM copy; nothing sent; “Review Gmail draft… do not send until you approve”; 170-row today queue.",
          day: "Day 2",
        },
        {
          text: "Routines visible: 50 Daily Prospects 8am · Inbox Manager · Accounts Signal Scan · Sequencer Daily · Sequencer SE Triggers (webhook).",
          day: "Day 2",
        },
        {
          text: "Sequence steps: LI connect → email → LI engage → LI DM → email angles → breakup.",
          day: "Day 2",
        },
        {
          text: "What we learned slide: Go End to End · Be Intentional (bots talk to each other) · Think Systematically.",
          day: "Day 2",
        },
      ],
    },
    {
      id: "support",
      title: "Customer Support",
      intro: "Source: Roenel remainder25 + remainder27",
      bullets: [
        {
          text: "Use cases: Answer tickets · Pre-investigation · Alerting · Internal answers · Improve the system.",
          day: "Day 2",
        },
        {
          text: "Meet the team: Build / Reply / Alert / Tune.",
          day: "Day 2",
        },
        {
          text: "Plain connector; human-in-the-loop refunds: Carter day-0 $20 approved; Damon 20-day denial; Elena blocked until Pass Sharing FAQ restored (policy gap → handoff, don’t invent FAQ).",
          day: "Day 2",
        },
      ],
    },
    {
      id: "gotchas",
      title: "Features / limits / gotchas",
      bullets: [
        {
          text: "No captions → notes are slide-first; guest interviews (Karen X. Cheng, Matthew Berman) thin on verbatim quotes.",
          day: "Day 2",
          sources: ["Roenel"],
        },
        {
          text: "Promo/QR free month via Eggbot clone — first 1k only.",
          day: "Day 2",
          sources: ["Roenel"],
        },
        {
          text: "Create-bot UI can fail (invalid_body).",
          day: "Day 2",
          sources: ["Roenel"],
        },
        {
          text: "Coordination bottleneck > bot count (Eggbot audit).",
          day: "Day 2",
          sources: ["Roenel"],
        },
      ],
    },
  ],
  demos: [
    {
      text: "SE maturity + use-case cards; Serena/Sherlock competitive intel.",
      day: "Day 2",
      sources: ["Roenel d2_3822_*", "d2_4913_*"],
    },
    {
      text: "Coverage 85% faster slide.",
      day: "Day 2",
      sources: ["d2_11008_coverage-mandate.png"],
    },
    {
      text: "Army Huddle 25/25 locked + “do not send” sheet.",
      day: "Day 2",
      sources: ["remainder21–22 shots"],
    },
    {
      text: "Plain refund approval thread (Carter/Damon/Elena).",
      day: "Day 2",
      sources: ["remainder27"],
    },
    {
      text: "Cupcake leaderboard / captain picker (builder spectacle).",
      day: "Day 2",
      sources: ["Roenel README"],
    },
  ],
  gaps: [
    "Restream Day 2 Galaxy tips thread — only found Restreamio schedule post (Sep 15). No Day 2 tips/takeaways thread located.",
    "Branko Trcek sales-engineering notes — account exists; no Galaxy/SE notes post surfaced.",
    "CellCog Day 2 article (if published after scrape).",
    "Verbatim Sales Team midday deck beyond setup-tips bullets (Roenel remainder15 is thin).",
  ],
};
