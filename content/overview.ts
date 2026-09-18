export const eventMeta = {
  name: "Grok Bot Galaxy",
  dates: "Sep 15–17, 2026",
  venue: "The Howard SF + livestream",
  filter:
    "Ship workflows, one-person/builder ops (AZMDR / flatter), sales/support/SDR steals, features/limits/gotchas. Hype skipped.",
  builders: [
    { name: "Matt Palmer", handle: "@mattyp" },
    { name: "Lauren Tan", handle: "@poteto" },
    { name: "Roshan Sadanani", handle: "@roshan_s" },
  ],
  company: {
    name: "Ship by Thursday → Thursday Arena",
    pitch:
      "Pop-up OS / Grok Pot killed day two → Cupcake TCG → Thursday Arena live game",
    site: "thursdayarena.com",
    siteUrl: "https://thursdayarena.com/",
    siteNote:
      "Live — Draft 3 → Lineup → Auto battle → Result/share. Launched ~10:18 AM PT Sep 17 via @thursdayarena + @poteto.",
    dogfood:
      "Physical Grok Pot food doors not confirmed; grokpot.ai says pop-up killed day two.",
    legacyDomain: "shipbythurs.day still 404",
    lateKpis: "Practice 4,884 · X users 1,902 · public matches 6,546 (~4:15pm PT)",
  },
};

export const dayCards = [
  {
    href: "/day-1",
    label: "Day 1",
    date: "Sep 15",
    blurb:
      "Eng / PM / Founders · blank GitHub → Ship by Thursday / pop-up OS · Eggbot → CoS · maturity ladder.",
    depth: "Substantive",
  },
  {
    href: "/day-2",
    label: "Day 2",
    date: "Sep 16",
    blurb:
      "Sales Eng / Sales / SDR / Support · Army Huddle · Cupcake shareable-bot/TCG pivot · draft-only outbound.",
    depth: "Partial (slide-first)",
  },
  {
    href: "/day-3",
    label: "Day 3",
    date: "Sep 17",
    blurb:
      "MarOps / Post-Sales / Marketing · Thursday Arena live ~10:18 AM PT · late KPIs 4,884 / 1,902 / 6,546 · lobby ad auction from $1.",
    depth: "Roenel + live product",
  },
];
