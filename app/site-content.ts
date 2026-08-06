export type NavItem = {
  href: string;
  label: string;
  slug: string;
};

export type Action = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export type Panel = {
  title: string;
  body: string;
};

export type Section = {
  title: string;
  body: string;
  bullets?: string[];
  cards?: Panel[];
};

export type PageContent = {
  title: string;
  eyebrow: string;
  lead: string;
  actions: Action[];
  panels: Panel[];
  sections: Section[];
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home", slug: "home" },
  { href: "/visit", label: "Visit", slug: "visit" },
  { href: "/prayer", label: "Prayer", slug: "prayer" },
  { href: "/learn", label: "Learn", slug: "learn" },
  { href: "/about", label: "Leadership", slug: "about" },
  { href: "/media", label: "Media", slug: "media" },
  { href: "/contact", label: "Contact", slug: "contact" },
  { href: "/donate", label: "Donate", slug: "donate" },
];

export const prayerSchedule = [
  { name: "Fajr", time: "05:25" },
  { name: "Dhuhr", time: "12:56" },
  { name: "Asr", time: "15:48" },
  { name: "Maghrib", time: "19:10" },
  { name: "Isha", time: "20:28" },
];

export const homeScreens = [
  {
    href: "/visitors",
    title: "Visitor guide",
    body: "First-time visitor guidance, parking, dress, and what to expect.",
  },
  {
    href: "/family",
    title: "Family space",
    body: "A calm welcome for children, parents, and elders.",
  },
  {
    href: "/schedule",
    title: "Weekly schedule",
    body: "Prayer, classes, events, and recurring programming in one view.",
  },
  {
    href: "/learn",
    title: "Learning hub",
    body: "Arabic, Quran, Farsi, and beginner-friendly learning paths.",
  },
  {
    href: "/support",
    title: "Support and contact",
    body: "Office, donations, help requests, and follow-up paths.",
  },
  {
    href: "/donate",
    title: "Donate",
    body: "Simple giving options for the people who want to help.",
  },
  {
    href: "/faq",
    title: "FAQ",
    body: "Practical answers to the questions visitors usually ask.",
  },
  {
    href: "/youth",
    title: "Youth",
    body: "Programming, mentorship, and service for the next generation.",
  },
  {
    href: "/login",
    title: "Login",
    body: "A quieter entry point with the grainy motion treatment.",
  },
];

export const routePages: Record<string, PageContent> = {
  about: {
    title: "A real home for prayer, learning, and community.",
    eyebrow: "About ACIC",
    lead:
      "Founded in 1994 and rooted in San Diego since 2008, ACIC serves Afghan families and the wider Ummah with a warm, direct, and dignified experience.",
    actions: [
      { href: "/prayer", label: "See prayer times", variant: "primary" },
      { href: "/contact", label: "Visit the mosque", variant: "secondary" },
    ],
    panels: [
      { title: "1994", body: "The community begins with a clear purpose and a shared home." },
      { title: "2008", body: "The mosque settles into its permanent San Diego location." },
      { title: "Open to all", body: "Afghan hospitality, welcoming to the entire Ummah." },
    ],
    sections: [
      {
        title: "What the site should communicate",
        body:
          "Clarity, warmth, and trust. The pages should feel intentional enough for regular members and simple enough for first-time visitors.",
        bullets: ["No maze of links", "No vague language", "No dead-end screens"],
      },
      {
        title: "What belongs here",
        body:
          "The story of the masjid, its purpose, and the basic facts people need before they arrive.",
        cards: [
          { title: "Heritage", body: "Afghan-rooted, community-centered, and spiritually grounded." },
          { title: "Location", body: "San Diego presence with a neighborhood-first welcome." },
          { title: "Tone", body: "Calm, clear, and unmistakably respectful." },
        ],
      },
    ],
  },
  events: {
    title: "Events that feel like community, not announcements.",
    eyebrow: "Events",
    lead:
      "Friday reminders, Ramadan nights, Eid gatherings, dinners, and community updates should live in a proper rhythm.",
    actions: [
      { href: "/schedule", label: "Weekly schedule", variant: "primary" },
      { href: "/contact", label: "Send an update", variant: "secondary" },
    ],
    panels: [
      { title: "Friday", body: "A clear Jummah rhythm with a visible reminder for the week." },
      { title: "Ramadan", body: "Night programming, iftars, and communal momentum." },
      { title: "Eid", body: "Family-forward gatherings with simple, obvious details." },
    ],
    sections: [
      {
        title: "Event structure",
        body: "Each event should answer the same three questions fast: what, when, and where.",
        bullets: ["Time", "Audience", "How to follow up"],
      },
    ],
  },
  classes: {
    title: "Classes that are easy to find and easy to join.",
    eyebrow: "Classes",
    lead:
      "Arabic, Quran, Farsi, family learning, and beginner support should all feel organized, not buried.",
    actions: [
      { href: "/learn", label: "Learning hub", variant: "primary" },
      { href: "/faq", label: "Common questions", variant: "secondary" },
    ],
    panels: [
      { title: "Arabic", body: "A steady path from basics into confidence." },
      { title: "Quran", body: "Recitation, memorization, and meaning side by side." },
      { title: "Family", body: "Children and parents learning together should feel natural." },
    ],
    sections: [
      {
        title: "Why this matters",
        body:
          "Good learning pages reduce hesitation. When a class is easy to understand, more people will actually show up.",
        cards: [
          { title: "Beginner friendly", body: "No one should feel behind before they even arrive." },
          { title: "Family centered", body: "Parents need to see where their kids fit in." },
          { title: "Clear cadence", body: "Weekly rhythm beats a pile of flyers." },
        ],
      },
    ],
  },
  resources: {
    title: "Resources that make the next step obvious.",
    eyebrow: "Resources",
    lead:
      "Quran links, books, forms, guidance, and support notes should feel like a real library, not a scavenger hunt.",
    actions: [
      { href: "/support", label: "Get help", variant: "primary" },
      { href: "/contact", label: "Reach the office", variant: "secondary" },
    ],
    panels: [
      { title: "Guidance", body: "Quick answers for visitors and new Muslims." },
      { title: "Forms", body: "Simple access to the forms people actually need." },
      { title: "Reading", body: "A small library feel with room for growth." },
    ],
    sections: [
      {
        title: "The resource standard",
        body: "Useful content should be sorted by intent: learn, visit, ask, support, and donate.",
        bullets: ["New Muslim help", "Marriage support", "Community referrals"],
      },
    ],
  },
  gallery: {
    title: "Images should keep the warmth of the space.",
    eyebrow: "Gallery",
    lead:
      "Photos should show the mosque as lived-in, welcoming, and dignified. The layout should frame the images instead of flattening them.",
    actions: [
      { href: "/about", label: "See the story", variant: "primary" },
      { href: "/contact", label: "Share media", variant: "secondary" },
    ],
    panels: [
      { title: "Community", body: "Children, brothers, sisters, and elders all belong in the frame." },
      { title: "Architecture", body: "Let the geometry and texture of the space breathe." },
      { title: "Events", body: "Keep the moments clear and the treatment calm." },
    ],
    sections: [
      {
        title: "Presentation rule",
        body: "The gallery should never overpower the photographs. It should disappear and let the place speak.",
        cards: [
          { title: "Simple captions", body: "State the moment without overexplaining it." },
          { title: "No clutter", body: "Use breathing room around every image." },
          { title: "Respectful crop", body: "Keep faces and scenes intact." },
        ],
      },
    ],
  },
  contact: {
    title: "Make the next step obvious.",
    eyebrow: "Contact",
    lead:
      "Office info, donations, directions, and a short form should make it easy for people to reach the mosque.",
    actions: [
      { href: "/donate", label: "Donate", variant: "primary" },
      { href: "/visitors", label: "First-time visit", variant: "secondary" },
    ],
    panels: [
      { title: "Office", body: "Keep the mosque reachable during the hours people actually ask for help." },
      { title: "Directions", body: "Arrival guidance should remove uncertainty before the trip starts." },
      { title: "Follow-up", body: "Clear channels build trust and reduce friction." },
    ],
    sections: [
      {
        title: "What belongs on the page",
        body: "Phone, email, address, and a short message form with a human tone.",
        bullets: ["Visible contact options", "One obvious form", "A calm confirmation message"],
      },
    ],
  },
  visitors: {
    title: "Your first visit should feel easy.",
    eyebrow: "Visitors",
    lead:
      "No one should have to know mosque etiquette before they arrive. The page should be reassuring, plain, and practical.",
    actions: [
      { href: "/prayer", label: "Prayer board", variant: "primary" },
      { href: "/contact", label: "Ask a question", variant: "secondary" },
    ],
    panels: [
      { title: "What to wear", body: "Modest clothing is enough. The tone should be gentle, not corrective." },
      { title: "What to expect", body: "A greeting, a path to prayer, and a simple way to ask for help." },
      { title: "Who is welcome", body: "Everyone coming in good faith should feel invited." },
    ],
    sections: [
      {
        title: "First visit checklist",
        body: "Parking, entry, prayer time, and a contact person are the only essentials people need right away.",
        bullets: ["Parking guidance", "Entrance location", "Prayer time", "Who to ask for help"],
      },
    ],
  },
  family: {
    title: "A mosque where your family can grow.",
    eyebrow: "Family",
    lead:
      "Children, parents, and elders need a space that feels calm, dignified, and easy to join together.",
    actions: [
      { href: "/classes", label: "See classes", variant: "primary" },
      { href: "/youth", label: "Youth space", variant: "secondary" },
    ],
    panels: [
      { title: "Children", body: "Kids should be welcome and seen as part of the community." },
      { title: "Parents", body: "Parents need clarity, not extra work, when they show up." },
      { title: "Elders", body: "The page should move at a respectful, comfortable pace." },
    ],
    sections: [
      {
        title: "Family promise",
        body: "Clear space, calm guidance, and room for all ages is what a real family page should communicate.",
        cards: [
          { title: "Open welcome", body: "Families should know they belong before they arrive." },
          { title: "Shared learning", body: "Make it easy to see where children fit in." },
          { title: "Gentle pacing", body: "Never make people feel rushed." },
        ],
      },
    ],
  },
  learn: {
    title: "Learning should feel open and doable.",
    eyebrow: "Learning",
    lead:
      "Arabic, Quran, Farsi, and open masjid study should be presented as a path, not a pile of links.",
    actions: [
      { href: "/classes", label: "Class schedule", variant: "primary" },
      { href: "/faq", label: "New learner FAQ", variant: "secondary" },
    ],
    panels: [
      { title: "Open masjid", body: "Come by for questions, reading, and direct access to teachers." },
      { title: "Quran", body: "A place to start if you are brand new or returning after a pause." },
      { title: "Languages", body: "Arabic and Farsi should both feel like normal paths here." },
    ],
    sections: [
      {
        title: "Learning flow",
        body: "Start small, keep it clear, and make the next lesson obvious.",
        cards: [
          { title: "Basics", body: "First steps that do not overwhelm people." },
          { title: "Practice", body: "Steady repetition with human support." },
          { title: "Growth", body: "Move into deeper study when people are ready." },
        ],
      },
    ],
  },
  schedule: {
    title: "The weekly rhythm should be visible at a glance.",
    eyebrow: "Schedule",
    lead:
      "Prayer, classes, events, and recurring programming should all live in one clean view that actually helps planning.",
    actions: [
      { href: "/prayer", label: "Live prayer clock", variant: "primary" },
      { href: "/events", label: "Upcoming events", variant: "secondary" },
    ],
    panels: [
      { title: "Prayer", body: "Daily rhythm should never be buried." },
      { title: "Classes", body: "Weekly learning blocks should be obvious." },
      { title: "Events", body: "Community cadence should feel predictable." },
    ],
    sections: [
      {
        title: "A good schedule does three things",
        body: "It tells people what is happening, when it happens, and who it is for.",
        bullets: ["No hidden dates", "No vague times", "No mystery audience"],
      },
    ],
  },
  support: {
    title: "Support should be straightforward and human.",
    eyebrow: "Support",
    lead:
      "People ask for help with food, prayer, family matters, and follow-up. The site should make that easy to route.",
    actions: [
      { href: "/contact", label: "Contact the office", variant: "primary" },
      { href: "/donate", label: "Give support", variant: "secondary" },
    ],
    panels: [
      { title: "Community care", body: "A clear help path reduces stress for the people who need it most." },
      { title: "Direct response", body: "A real person should be able to take the next step." },
      { title: "Trust", body: "Clarity makes support feel safer." },
    ],
    sections: [
      {
        title: "Support lanes",
        body: "Use one page to separate donations, office help, and personal requests.",
        cards: [
          { title: "Financial help", body: "A clear lane for giving and aid." },
          { title: "Family matters", body: "Private issues should be routed carefully." },
          { title: "Volunteer", body: "People should know how to help back." },
        ],
      },
    ],
  },
  donate: {
    title: "Give the support a clear home.",
    eyebrow: "Donate",
    lead:
      "Donation methods should be verified and easy to trust before they go live. Once approved, the giving experience should be simple.",
    actions: [
      { href: "/support", label: "Support the masjid", variant: "primary" },
      { href: "/contact", label: "Ask about giving", variant: "secondary" },
    ],
    panels: [
      { title: "Recurring support", body: "Make it easy for steady donors to keep the masjid strong." },
      { title: "One-time gifts", body: "People should be able to contribute without friction." },
      { title: "Transparency", body: "Trust comes from clear methods and clear follow-up." },
    ],
    sections: [
      {
        title: "Give with confidence",
        body: "Show the methods, show the purpose, and avoid clutter.",
        bullets: ["Apple Pay", "Card", "PayPal", "Zelle"],
      },
    ],
  },
  faq: {
    title: "Questions first-time visitors actually ask.",
    eyebrow: "FAQ",
    lead:
      "Dress, parking, prayer etiquette, children, and how to get help should be answered plainly.",
    actions: [
      { href: "/visitors", label: "Visitor guide", variant: "primary" },
      { href: "/contact", label: "Ask a question", variant: "secondary" },
    ],
    panels: [
      { title: "Dress", body: "Simple guidance with no shame and no confusion." },
      { title: "Arrival", body: "Where to park, where to enter, and where to ask for help." },
      { title: "Prayer", body: "How to join and what to expect.", },
    ],
    sections: [
      {
        title: "The right FAQ tone",
        body: "Short answers. Clear language. No extra ceremony.",
        cards: [
          { title: "Plain words", body: "People read better when the copy is direct." },
          { title: "Visible answers", body: "Put the useful stuff first." },
          { title: "Friendly tone", body: "Leave people feeling welcome." },
        ],
      },
    ],
  },
  youth: {
    title: "A real lane for the next generation.",
    eyebrow: "Youth",
    lead:
      "Youth nights, service, mentorship, and learning should feel like part of the mosque, not an afterthought.",
    actions: [
      { href: "/classes", label: "Learning opportunities", variant: "primary" },
      { href: "/events", label: "See events", variant: "secondary" },
    ],
    panels: [
      { title: "Belonging", body: "Young people need to see themselves in the space." },
      { title: "Mentorship", body: "Clear pathways into service and guidance." },
      { title: "Momentum", body: "Keep the page active and hopeful." },
    ],
    sections: [
      {
        title: "Youth page goals",
        body: "The page should show invitation, purpose, and a path into real involvement.",
        bullets: ["Youth nights", "Volunteer service", "Study support"],
      },
    ],
  },
  login: {
    title: "A quieter entry point for members and admins.",
    eyebrow: "Login",
    lead:
      "This is where the grainy motion treatment belongs: soft, warm, and unmistakably ACIC.",
    actions: [
      { href: "/contact", label: "Need help?", variant: "primary" },
      { href: "/", label: "Back home", variant: "secondary" },
    ],
    panels: [
      { title: "Member access", body: "A calm, simple screen for trusted users." },
      { title: "Secure entry", body: "Keep the experience quiet and focused." },
      { title: "Warm motion", body: "Soft texture and moving light make the screen feel alive." },
    ],
    sections: [
      {
        title: "Design note",
        body: "This page should feel intimate and still remain clearly part of the same visual system.",
        cards: [
          { title: "Low contrast texture", body: "Let the motion sit in the background." },
          { title: "Clear form", body: "Do not bury the input fields." },
          { title: "Soft edges", body: "Keep it calm and focused." },
        ],
      },
    ],
  },
};
