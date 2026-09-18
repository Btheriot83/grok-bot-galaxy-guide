import type { DayPage } from "./types";

export const day1: DayPage = {
  slug: "day-1",
  title: "Day 1",
  date: "Sep 15, 2026",
  subtitle: "Substantive — Eng / PM / Founders + blank-slate company start",
  honesty:
    "Day 1 is the deepest public coverage (CellCog writeup + Roenel slide notes). Facts tagged with sources.",
  schedule: [
    { time: "8:30", session: "Livestream starts" },
    { time: "9:00–10:00", session: "Grok Bot 101", host: "Roman Ugarte (+ Amrita)" },
    { time: "12:30–14:00", session: "Engineering", host: "Lingxi Li" },
    { time: "14:30–15:30", session: "PMs", host: "Kevin Niparko" },
    { time: "16:00–17:30", session: "Founders", host: "Shub Gaur" },
    { time: "18:00", session: "Day 1 ends (actual ~later per Roenel)" },
  ],
  sections: [
    {
      id: "ship",
      title: "How they use Grok Bot to ship",
      bullets: [
        {
          text: "Blank slate → company in 3 working days (not 72 continuous hours). Builders: Matt Palmer (@mattyp), Lauren Tan (@poteto), Roshan Sadanani (@roshan_s). Bots as employees; humans stay at the core.",
          day: "Day 1",
          sources: [
            "https://cellcog.ai/blog/grok-bot-galaxy/",
            "https://luma.com/3ifrgttw",
            "https://x.com/bot/status/2099883726444610030",
          ],
        },
        {
          text: "Working company name: Ship by Thursday (deadline-as-brand). Blank GitHub org called out ~22 min into stream (“No repositories yet”).",
          day: "Day 1",
          sources: ["https://cellcog.ai/blog/grok-bot-galaxy/"],
        },
        {
          text: "Product direction: “pop-up OS for restaurants” — platform to help a chef spin up a limited-run pop-up; dogfood via a real SF pop-up. Research bot pointed at X reply suggestions; restaurant thread won.",
          day: "Day 1",
          sources: ["https://cellcog.ai/blog/grok-bot-galaxy/"],
        },
        {
          text: "JP Polymarket summary (same arc, more ops detail): Ship by Thursday connects chefs / venues / operators; Day 1 stood up GitHub (Ship-by-Thursday), domain shipbythurs.day, Slack, Notion; live test pop-up branded Grok Pot; aim doors ~Sep 17 18:00 PT. Multiple bots split research / plan / build / sales / support. Note: shipbythurs.day returned 404 at scrape time (Sep 17 PT) — treat domain claim as stream-reported, not currently live.",
          day: "Day 1→2",
          sources: [
            "https://rakuraku.grandjete.work/archives/613004",
            "https://kasemato.net/archives/97787942.html",
          ],
        },
        {
          text: "Landing-page-first: Get a page in front of chefs/diners before event workflow, signup store, or payments. By Day 1 cut: name + direction + Slack + bot roster; no product yet.",
          day: "Day 1",
          sources: ["https://cellcog.ai/blog/grok-bot-galaxy/"],
        },
        {
          text: "Dr. Eggbot (@poteto): Bot that creates/modifies other bots → used to turn a general assistant into a chief of staff and draft first landing page.",
          day: "Day 1",
          sources: [
            "https://cellcog.ai/blog/grok-bot-galaxy/",
            "https://x.ai/bot/marketplace/bots/dr-eggbot-v2",
          ],
        },
        {
          text: "101 mindset (Roman / Amrita, as captured): One bot per job; outcome-first; bots have cloud computers (“I can shut my laptop and it will still work”); teacher task → skill; marketplace; editable memory; multiplayer group chat “coming soon.” Approval/Auto-review for outbound.",
          day: "Day 1",
          sources: [
            "https://cellcog.ai/blog/grok-bot-galaxy/",
            "https://github.com/Roenel/Grok-Bot-Galaxy-Notes/blob/main/TAKEAWAYS.md",
          ],
        },
        {
          text: "Eng (Lingxi) — stealable ops: Maturity ladder Autocomplete → Ask/Edit → Agentic → Cloud Agent automations → Autonomous. Use cases on stage: Nightly Code Cleanup, TestFlight Seat Management, Auto-Fix Everything. Rules: all code via cloud agents; humans own every merge; board-first; one cloud agent per PR stream; treat bots like interns; if you unblock the same thing twice, automate one level further.",
          day: "Day 1",
          sources: [
            "https://github.com/Roenel/Grok-Bot-Galaxy-Notes/blob/main/TAKEAWAYS.md",
          ],
        },
        {
          text: "PM (Kevin): Virtual org by role (CoS, EM, ICs…); Attention List + customer-context research + shipping via cloud agents; named agents + separate memory; stay quiet unless needed.",
          day: "Day 1",
          sources: [
            "https://github.com/Roenel/Grok-Bot-Galaxy-Notes/blob/main/TAKEAWAYS.md",
          ],
        },
        {
          text: "Founders (Shub): Staff a function (team of bots). Demo crew: Close / Prod / Stalk / Proto. Prefer connectors over browser use (browser = powerful + expensive). Audit routines; exception-only pings.",
          day: "Day 1",
          sources: [
            "https://github.com/Roenel/Grok-Bot-Galaxy-Notes/blob/main/TAKEAWAYS.md",
            "https://github.com/Roenel/Grok-Bot-Galaxy-Notes/blob/main/README.md",
          ],
        },
        {
          text: "Stack split (Lauren TLDR): Grok Bot = lightweight product speed; serious eng → Cursor cloud agents. Prompt habit: voice-yap then “Restate what I said in your own words.”",
          day: "Day 1",
          sources: [
            "https://github.com/Roenel/Grok-Bot-Galaxy-Notes/blob/main/TAKEAWAYS.md",
          ],
        },
        {
          text: "Distribution (Codie TLDR): Sell to three real people before building; distribution > clever product; proof vault from day one.",
          day: "Day 1",
          sources: [
            "https://github.com/Roenel/Grok-Bot-Galaxy-Notes/blob/main/TAKEAWAYS.md",
          ],
        },
      ],
    },
    {
      id: "azmdr",
      title: "Reusable for AZMDR / flatter / one-person builder ops",
      numbered: [
        {
          text: "Chief-of-staff + specialists (Eggbot → CoS; Founders four-bot heist; Eng fleet board). Steal for one-person ops: CoS orchestrates, specialists own inbox / research / ship / support.",
          day: "Day 1",
          sources: ["CellCog", "Roenel TAKEAWAYS"],
        },
        {
          text: "Outcome + computer + Friday check-in — one annoying daily job → one bot → recurring status.",
          day: "Day 1",
          sources: ["TAKEAWAYS action checklist"],
        },
        {
          text: "Landing → dogfood → expand — Ship by Thursday’s pop-up-first path mirrors “ship the thinnest real loop.”",
          day: "Day 1",
          sources: ["CellCog"],
        },
        {
          text: "Connectors > browser when you care about cost/reliability.",
          day: "Day 1",
          sources: ["Founders tips (Roenel)"],
        },
        {
          text: "Human owns merge / approvals — don’t treat bots as security boundary on shared computer (CellCog flags stage line vs docs).",
          day: "Day 1",
          sources: ["https://cellcog.ai/blog/grok-bot-galaxy/"],
        },
      ],
    },
    {
      id: "sales-context",
      title: "Sales / support / SDR (Day 1 adjacent + product context)",
      bullets: [
        {
          text: "Day 1 classroom = Eng / PM / Founders only. Sales block is Day 2. Pre-event sales stack that lands before Galaxy: Salesforce, HubSpot, Gong, Clay, Granola connectors + installable sales-team bot templates.",
          day: "Pre",
          sources: [
            "https://teslanorth.com/2026/09/11/grok-bot-salesforce-hubspot-sales/",
            "https://www.bighatgroup.com/blog/xai-weekly-2026-09-13/",
          ],
        },
        {
          text: "Official GTM playbook (Krista Letz, Aug 16): CoS + prospecting overnight + per-account Customer Expert + “10x engineer” on-call bot + forecast bot updating SFDC from Gong/Granola/Slack/email; teach-once→skill; anti-slop skill; draft-only discipline.",
          day: "Product",
          sources: ["https://x.ai/bot/guides/grok-bot-for-gtm"],
        },
      ],
    },
    {
      id: "features",
      title: "Features / limits / pricing / gotchas",
      table: {
        headers: ["Item", "Detail", "Source"],
        rows: [
          {
            cells: [
              "Own computer / 24/7",
              "Stage claim: shut laptop, bots keep working",
              "CellCog Day 1",
            ],
          },
          {
            cells: [
              "Shared computer gotcha",
              "Docs: computer per user, not per Bot; don’t treat bots as security boundary",
              "CellCog Day 1",
            ],
          },
          {
            cells: [
              "Teacher → skill",
              "Watch you once, save workflow",
              "CellCog + Introducing Grok Bot",
            ],
          },
          {
            cells: [
              "Memory",
              "User-editable; can ask bot to forget",
              "CellCog",
            ],
          },
          {
            cells: [
              "Multiplayer group chat",
              "“Coming soon” on Day 1 stage",
              "CellCog",
            ],
          },
          {
            cells: [
              "Access",
              "Bundled with Cursor / SuperGrok plans; own usage pool separate from Grok/Cursor",
              "x.ai/news/introducing-grok-bot · CellCog",
            ],
          },
          {
            cells: [
              "Day 1 stream cut",
              "~100+ min then “technical difficulties” cut",
              "CellCog",
            ],
          },
          {
            cells: [
              "No official CC",
              "Roenel notes are slide/UI-first; Q&A visual-only",
              "Roenel TIMELINE",
            ],
          },
          {
            cells: [
              "Eggbot update friction",
              "v0.2.0 requires reinstall; copy state then delete old",
              "unrollnow status/2094967827019243547",
            ],
          },
          {
            cells: [
              "$120/seat",
              "Appears in AInvest commentary only — not confirmed on x.ai pages fetched",
              "ainvest.com",
            ],
          },
        ],
      },
    },
  ],
  demos: [
    {
      text: "Blank Ship by Thursday GitHub org.",
      day: "Day 1",
      sources: ["CellCog"],
    },
    {
      text: "Bot-sourced line “pop-up OS for restaurants.”",
      day: "Day 1",
      sources: ["CellCog"],
    },
    {
      text: "Dr. Eggbot → CoS + landing page.",
      day: "Day 1",
      sources: ["CellCog"],
    },
    {
      text: "Eng maturity curve + Nightly Cleanup / Auto-Fix slides.",
      day: "Day 1",
      sources: ["Roenel shots/eng-04-maturity.png"],
    },
    {
      text: "Founders Close/Prod/Stalk/Proto share cards.",
      day: "Day 1",
      sources: ["Roenel founders shots"],
    },
    {
      text: "Meta-demo: @XFreeze’s Bot watching the Galaxy stream and note-taking live (2 screenshots).",
      day: "Day 1",
      sources: ["https://x.com/XFreeze/status/2099904422977413501"],
    },
  ],
};
