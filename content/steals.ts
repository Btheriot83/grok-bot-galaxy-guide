import type { Steal } from "./types";

export const steals: Steal[] = [
  {
    title: "Roster pattern",
    detail:
      "CoS + named specialists (Eng / Customer Expert / Echo / Competitive Intel; SDR Shakespeare + Soldiers; Support Build/Reply/Alert/Tune; MarOps OP-1/Fisher/Juno/Ondes; Marketing six-bot campaign team; Post-Sales Dream Team). One-person ops: CoS orchestrates, specialists own inbox / research / ship / support.",
    days: ["Day 1", "Day 2", "Day 3"],
  },
  {
    title: "Draft-only outbound + human approve",
    detail:
      "Army Huddle (Day 2) and Harbor post-call (Day 3): “Drafts only. Nothing sent.” Safe default for any client-facing brand.",
    days: ["Day 2", "Day 3"],
  },
  {
    title: "Governed agency",
    detail:
      "MarOps: free bots to act while you’re away, with guardrails on messages/CRM writes. Governed agency beats each-time approval or YOLO.",
    days: ["Day 3"],
  },
  {
    title: "Lead Deck / swipe CRM",
    detail:
      "Juno “dating app for leads”: swipe reject/accept → CRM writeback + sequences. Fast human triage of bot-sourced leads; CRM as source of truth.",
    days: ["Day 3"],
  },
  {
    title: "Marketing handoff chain",
    detail:
      "Researcher → Product Marketer → Website Ops (Open in Cursor) → Performance Marketer → Analyst ROAS scorecard. Scope each bot like a job description.",
    days: ["Day 3"],
  },
  {
    title: "Voice dump → CoS front door → living system",
    detail:
      "Post-Sales: start with a voice dump of energizers/frustrators/handoffs; put one CoS bot in front as router; corrections + weekly review keep it alive.",
    days: ["Day 3"],
  },
  {
    title: "Policy bots with adult supervision",
    detail:
      "Support refund traces (Carter/Damon/Elena): approve when policy clear; deny when outside window; handoff when FAQ/policy gap — don’t invent policy.",
    days: ["Day 2"],
  },
  {
    title: "Eggbot (or equivalent) for bot design + health",
    detail:
      "Bot that creates/modifies other bots; weekly routine health + daily friction skim. Day 2 audit: bottleneck was coordination / human merge, not bot count.",
    days: ["Day 1", "Day 2"],
  },
  {
    title: "Board-first / humans merge",
    detail:
      "All code via cloud agents; humans own every merge. One cloud agent per PR stream. Don’t treat bots as security boundary on shared computer.",
    days: ["Day 1"],
  },
  {
    title: "Connectors first; browser second",
    detail:
      "Prefer connectors over browser use (cost/reliability). Day 3: Cerebro + Clay / Amplemarket.",
    days: ["Day 1", "Day 3"],
  },
  {
    title: "Ship a real dogfood loop — pivot when needed",
    detail:
      "Day 3 lesson: pop-up OS / Grok Pot killed day two → Cupcake → Thursday Arena still shipped Thursday. Live feedback→bot triage while product is buggy in public.",
    days: ["Day 1", "Day 3"],
  },
  {
    title: "Meta-ops note-taker",
    detail:
      "Bot that watches your stream/meeting and files notes (XFreeze pattern).",
    days: ["Day 1"],
  },
  {
    title: "SE maturity + staff a function",
    detail:
      "Ask → Do → Delegate → Staff function (team of bots). Founders demo crew: Close / Prod / Stalk / Proto.",
    days: ["Day 1", "Day 2"],
  },
  {
    title: "Outcome + Friday check-in",
    detail:
      "One annoying daily job → one bot → recurring status. If you unblock the same thing twice, automate one level further.",
    days: ["Day 1"],
  },
  {
    title: "GTM playbook (product)",
    detail:
      "Krista Letz guide: CoS + overnight prospecting + per-account Customer Expert + on-call eng bot + forecast bot; teach-once→skill; anti-slop; draft-only.",
    days: ["Product"],
  },
];

export const topStealsForHome = [
  steals[0],
  steals[1],
  steals[2],
  steals[3],
  steals[4],
  steals[10],
];
