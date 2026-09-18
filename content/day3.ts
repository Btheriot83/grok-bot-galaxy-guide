import type { DayPage } from "./types";

export const day3: DayPage = {
  slug: "day-3",
  title: "Day 3",
  date: "Sep 17, 2026",
  subtitle:
    "Marketing Ops / Post-Sales / Marketing + Thursday Arena launch & wrap",
  honesty:
    "CellCog still has no Day 3 writeup. Best public Day 3 record = Roenel TIMELINE-day3.md + notes/day3/* (slide/UI-first; no CC) + live thursdayarena.com + verified X launch posts. Q&A visual-only — do not invent spoken claims.",
  schedule: [
    { time: "8:30", session: "Day 3 livestream starts" },
    {
      time: "9:00–10:30",
      session: "Grok Bot for Marketing Operations",
      host: "Matthew Silberman, Teresa Hsu",
    },
    {
      time: "12:30–13:30",
      session: "Grok Bot for Post-Sales",
      host: "Blake Schuller",
    },
    {
      time: "14:30–16:00",
      session: "Grok Bot for Marketing",
      host: "Josh Kim",
    },
    { time: "16:30–17:30", session: "Livestream wrap and final showcase" },
    {
      time: "~18:00",
      session: "Stream ends (Roenel DVR ~07:58 player ≈ end card)",
    },
  ],
  sections: [
    {
      id: "shipped",
      title: "What actually shipped / showcased",
      bullets: [
        {
          text: "Product pivot confirmed: Day 1 pop-up OS / food pop-up (“Grok Pot”) → Day 2–3 pivoted hard into Cupcake → Thursday Arena (shareable bots as TCG/game characters). On-stream Slack (#steve) comic brief: “pop-up os → pivot cupcake → ship live.” grokpot.ai (live): “they started on a pop-up, killed it on day two, and pivoted” → browser game shipping Thu Sep 17 18:00 PT.",
          day: "Day 3",
          sources: [
            "https://www.grokpot.ai/",
            "Roenel remainder27",
          ],
        },
        {
          text: "What launched publicly: Thursday Arena at https://thursdayarena.com/ — tagline “Pick a captain. Take two mystery teammates. Fight three rounds.” Live cards observed include Haggle Bot, Researchy, dr eggbot. Studio @thursdayarena by @mattyp / @poteto / @roshan_s (account created Wed Sep 16).",
          day: "Day 3",
          sources: [
            "https://thursdayarena.com/",
            "site fetch Sep 18 PT",
            "Roenel remainder11+",
          ],
        },
        {
          text: "X launch: @thursdayarena “We’re live at thursdayarena.com!” — Thu Sep 17 10:18 AM PT. @poteto “our game is live!! help us play test it!” — 10:19 AM PT; fair warning buggy/hard to play; Grok Bot team on stream reading in-game feedback for bugfixes/UI.",
          day: "Day 3",
          sources: [
            "https://x.com/thursdayarena/status/2100635485731516706",
            "https://x.com/poteto/status/2100635838363349026",
            "https://www.unrollnow.com/status/2100635838363349026",
          ],
        },
        {
          text: "Core loop locked (whiteboard): Draft 3 → Lineup → Auto battle → Result / share. MVP factory (bugfix live): Chief chaos → Bake Rx PR → Play test → Review/approve → Land main.",
          day: "Day 3",
          sources: ["Roenel remainder27"],
        },
        {
          text: "Rules page (on-screen): best-of-three; shop (10 tokens); auto battles; ghost opponents; Elo/tiers/seasons; team up to 3 bots.",
          day: "Day 3",
          sources: ["Roenel remainder26"],
        },
        {
          text: "Ad auction / sponsor lobby: “NEXT WEEK’S BILLBOARD — ONE AD SLOT, OPEN AUCTION” / “BUY AN AD — FROM $1”; sponsor form for Sep 24–Oct 1 lobby billboard (min $1 bid). Product UI, not a verified purchase.",
          day: "Day 3",
          sources: ["Roenel remainder15 / 25 / 27"],
        },
        {
          text: "Broadcast (Day 3 / hub): https://x.com/i/broadcasts/1YGNrbXEeazGw — title on X: “Building a company in 3 days - launching today!”",
          day: "Day 3",
          sources: ["https://x.com/i/broadcasts/1YGNrbXEeazGw"],
        },
      ],
    },
    {
      id: "kpis",
      title: "Launch-day KPIs (on-screen claims)",
      intro:
        "Charts on stream — treat as on-screen claims. Hourly chart claimed “10am was the Rocket” (practice starts + X signups spike).",
      table: {
        headers: [
          "Snapshot",
          "Practice",
          "X users",
          "Public matches",
          "Other",
        ],
        rows: [
          {
            cells: [
              "~1:15pm PT",
              "3,550",
              "1,240",
              "3,491",
              "Feedback 253; Practice X 305",
            ],
          },
          {
            cells: [
              "Public WR earlier",
              "—",
              "—",
              "n=1,154 → 41.8% WR (482W/672L)",
              "—",
            ],
          },
          {
            cells: [
              "~4:15pm PT (late)",
              "4,884",
              "1,902 cumulative",
              "6,546",
              "map matches ~1,794",
            ],
          },
        ],
      },
      bullets: [
        {
          text: "Late KPIs (~4:15pm PT): Practice 4,884 · X users 1,902 · public matches 6,546.",
          day: "Day 3",
          sources: ["Roenel remainder27"],
        },
      ],
    },
    {
      id: "marops",
      title: "Marketing Operations (Matthew Silberman, Teresa Hsu)",
      intro: "Official slot 9:00–10:30 AM PT. Source: Roenel remainder2–3 · 13–15.",
      table: {
        headers: ["Bot", "Role"],
        rows: [
          { cells: ["OP-1", "Chief of Staff"] },
          { cells: ["Fisher", "Executive Assistant"] },
          { cells: ["Juno", "Product Manager"] },
          { cells: ["Ondes", "Engineer"] },
        ],
      },
      bullets: [
        {
          text: "RevOps/MarOps use-case slide: Create a self-completing to-do list · Build tools, not just rules · Perfect the marketing-sales handoff · Make your GTM data truly self-serve · Get help with territory planning · Keep your CRM clean, once and for all.",
          day: "Day 3",
          sources: ["remainder2"],
        },
        {
          text: "Juno “dating app for leads” / Lead Deck: swipe left = reject/end lead in CRM with end reason; swipe right = accept → follow-up sequence; skip + notifications; CRM as source of truth; write back to proper CRM fields. Demo card: “Sofia Reyes / Staff Software Engineer…”. Lead Deck v1 spec locked → handed to Ondes.",
          day: "Day 3",
          sources: ["remainder3"],
        },
        {
          text: "OP-1: meetings / path progress / territory planner actions. Fisher: EA workspace / message cards.",
          day: "Day 3",
          sources: ["remainder3"],
        },
        {
          text: "What we learned: (1) Staff your dream team like an exec — unlimited specialists with right context/access. (2) Give your Bots agency, and guardrails — act while you’re away; nothing sensitive (messages, CRM writes) ships without you; governed agency beats each-time or YOLO. (3) You are a product manager. Your product is revenue — end-to-end GTM machine.",
          day: "Day 3",
          sources: ["remainder3"],
        },
        {
          text: "Cerebro MarOps bot (“by Matthew”): install plugins/memories; connectors Clay (enrich people/companies, AI research agents) and Amplemarket (search/enrich/sequences). City-search install prompt: “Add the City connector?” / “Yes, install Clay”. Segments, qualification & scoring, signal recipes; Season 1 Data analysis beside Cupcake Eng.",
          day: "Day 3",
          sources: ["remainder13–15"],
        },
      ],
    },
    {
      id: "postsales",
      title: "Post-Sales (Blake Schuller)",
      intro: "Official slot 12:30–1:30 PM PT. Source: Roenel remainder15–16.",
      bullets: [
        {
          text: "Use cases (six-card): Morning Status Board · Call Prep · Follow-up Date · People Keeper · Ask Watch · Account Reset.",
          day: "Day 3",
          sources: ["remainder15"],
        },
        {
          text: "Dream Team UI: Franny Form, Wally Writer, Truly Truth, Frankie Follow Up, Scout, plus Harbor, Gus. Harbor: “post-call prep ready. Drafts only. Nothing sent.” Franny Form: ROI form for Northwind; Context / Blockers / action list.",
          day: "Day 3",
          sources: ["remainder16"],
        },
        {
          text: "Routines: Daily brief weekdays 8:30 AM · Call prep · Unfinished promises · Ask watch. Staff-meeting pattern: human asks CoS to run a staff meeting for “only free hour”; CoS convenes specialists and watches their tab.",
          day: "Day 3",
          sources: ["remainder16"],
        },
        {
          text: "What we learned: (1) Start with a voice dump — energizers / frustrators / handoffs → shape the stack. (2) Put one bot in front — Chief of Staff as front door/router. (3) Make it a living system — corrections + weekly review improve over time.",
          day: "Day 3",
          sources: ["remainder16"],
        },
      ],
    },
    {
      id: "marketing",
      title: "Marketing (Josh Kim)",
      intro: "Official slot 2:30–4:00 PM PT. Source: Roenel remainder21–23.",
      bullets: [
        {
          text: "Campaign pipeline slide: Market Research · Ideate and vet positioning · Update website · Tactics / ads / monitor ads · Analyze & monitor performance · Automate the process.",
          day: "Day 3",
          sources: ["remainder21–22"],
        },
        {
          text: "Six marketing bots: Market Researcher · Product Marketer · Website Ops · Performance Marketer · Marketing Analyst · Project Manager.",
          day: "Day 3",
          sources: ["remainder22"],
        },
        {
          text: "Handoff chain: (1) Market Researcher/Analyst → competitor table → “Gaps — learn here”. (2) Product Marketer → positioning/ICP brief + GTM + one-liners. (3) Performance Marketer → campaign plan + spreadsheet. (4) Website Ops → landing update; “Open in Cursor” / build from UI outline. (5) Marketing Analyst → Scorecard (Spent / CTR / CPC/CPA / ROAS) + Strategy + assets. (6) Project Manager orchestration. Example mock: “Make distance feel smaller.”",
          day: "Day 3",
          sources: ["remainder22"],
        },
        {
          text: "What we learned: (1) Scope Bots properly — bloated context slows you; scope like a job description. (2) Then, trust your Bots — proactive teammate; hand tools/access/context. (3) Invest in your Bots and copy others’ — feedback like a teammate; leverage marketplace (QR → https://x.ai/bot/marketplace).",
          day: "Day 3",
          sources: ["remainder23"],
        },
      ],
    },
    {
      id: "build-ops",
      title: "Build stream ops (how they ship with bots)",
      bullets: [
        {
          text: "Bot/workspace names visible: Bake, tater, crumb/crumble, steve, bento, ping, Cupcake Eng, Cupcake Kanban, Image Gen, Chief, Cerebro, Data, Remotion Ads, In-Game Ads, Lead Capture, Slack Mentions.",
          day: "Day 3",
          sources: ["remainder8–15"],
        },
        {
          text: "Live gotchas: WAF / edge 403 holding crumb/crumble (“hold — leave WAF”); Clerk / live client keys for thursdayarena.com still on @roshan; sponsor-page / mobile layout PRs; feedback phone blank-call bugfix.",
          day: "Day 3",
          sources: ["remainder8–9 · 15"],
        },
        {
          text: "Matt Palmer bookmark→agent pattern: daily Grok Bot scans bookmarks → Cursor Agent builds demo → validates with screenshots/video → branch + send link.",
          day: "Day 3",
          sources: ["remainder15"],
        },
        {
          text: "Projects Manager (byline “By Eric Zarkasson”): Notion projects → channel per project → specialist bots claim tasks; Import Bot.",
          day: "Day 3",
          sources: ["remainder25"],
        },
      ],
    },
    {
      id: "gotchas",
      title: "Features / limits / gotchas",
      table: {
        headers: ["Item", "Detail", "Source"],
        rows: [
          {
            cells: [
              "No CC",
              "Entire Day 3 notes are slide/UI-first; Q&A not transcribed",
              "Roenel TIMELINE-day3",
            ],
          },
          {
            cells: [
              "Draft-only discipline",
              "Harbor “Drafts only. Nothing sent.” (post-sales)",
              "remainder16",
            ],
          },
          {
            cells: [
              "Governed agency",
              "MarOps: guardrails on messages/CRM writes",
              "remainder3",
            ],
          },
          {
            cells: [
              "Scope like a JD",
              "Marketing lesson — bloated context hurts",
              "remainder23",
            ],
          },
          {
            cells: [
              "Live game bugs",
              "@poteto: buggy/hard to play; bots triage feedback live",
              "UnrollNow 2100635838363349026",
            ],
          },
          {
            cells: [
              "WAF blocks agents",
              "crumb parked until edge clears",
              "remainder9",
            ],
          },
          {
            cells: [
              "Credits promo (screen text)",
              "“Grok Bot Credits” slate: post ‘credits’ in chat → credits by EOD (~$200 value); livestream viewers only — flagged as screen text, not verified fulfillment",
              "remainder26",
            ],
          },
          {
            cells: [
              "Forkast article",
              "Claims Voice Agent API $0.08/min, Voice Agent Builder, Agent Tools API, Haggle Bot $100k+ savings — third-party Day 3 wrap; not verified against x.ai docs. Treat separately from Cupcake ship.",
              "forkast.news",
            ],
          },
        ],
      },
    },
    {
      id: "enterprise-news",
      title: "Enterprise product news same day (third-party; not classroom)",
      intro:
        "Forkast (Sep 17): alongside Galaxy Day 3, claimed enterprise launches. Mark as launch news — not stream-verified here.",
      bullets: [
        {
          text: "Voice Agent API — $0.08/min speech-to-speech; Voice Agent Builder (no-code, beta ~Jul 1); Agent Tools API; Haggle Bot procurement claimed $100k+ internal savings.",
          day: "Product news",
          sources: [
            "https://forkast.news/xai-ships-three-grokbot-enterprise-products-as-galaxy-day-3-demonstrates-full-business-automation/",
          ],
        },
      ],
    },
  ],
  demos: [
    {
      text: "Cupcake / Thursday Arena WIN + global leaderboard (@roshan_s / @poteto).",
      day: "Day 3",
      sources: ["remainder2"],
    },
    {
      text: "RevOps/MarOps use-case grid + OP-1/Fisher/Juno/Ondes meet-the-team.",
      day: "Day 3",
      sources: ["remainder2–3"],
    },
    {
      text: "Lead Deck swipe card (Sofia Reyes).",
      day: "Day 3",
      sources: ["remainder3"],
    },
    {
      text: "Cupcake KPI charts (41.8% WR; 1:15pm and 4:15pm PT snapshots).",
      day: "Day 3",
      sources: ["remainder8 · 18 · 27"],
    },
    {
      text: "Cerebro + Clay connector install.",
      day: "Day 3",
      sources: ["remainder13–15"],
    },
    {
      text: "Post-sales Dream Team / staff meeting / What we learned.",
      day: "Day 3",
      sources: ["remainder16"],
    },
    {
      text: "Marketing six-bot campaign pipeline + scorecard.",
      day: "Day 3",
      sources: ["remainder22–23"],
    },
    {
      text: "Ship-by-Thursday roadmap whiteboard (core loop locked + MVP factory) + end card “Follow @bot”.",
      day: "Day 3",
      sources: ["remainder27"],
    },
  ],
  gaps: [
    "shipbythurs.day still 404 DEPLOYMENT_NOT_FOUND.",
    "Physical Grok Pot SF food pop-up doors ~6pm PT — not confirmed; grokpot.ai says pop-up was killed on day two. Treat food-doors as Day 1–2 plan, not Day 3 confirmed outcome.",
    "CellCog Day 3 article — not published as of scrape.",
    "Verbatim Q&A (Post-Sales / Marketing) — no CC.",
    "Restream Day 3 tips thread — not found.",
    "Verify Forkast Voice Agent API / Builder / Tools API claims against official x.ai docs.",
  ],
};
