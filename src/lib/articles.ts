// Article content for the /articles blog section.
// Add a new object to this array to publish a new article — no other wiring needed,
// the listing page, individual article pages and sitemap all read from here.

import { images } from "./images";

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date, e.g. "2026-01-15"
  readTime: string;
  coverImage: string;
  content: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: "how-often-should-you-pressure-wash-your-driveway",
    title: "How Often Should You Pressure Wash Your Driveway in Adelaide?",
    excerpt:
      "Adelaide's climate means driveways build up dirt, mould and oil stains faster than most people expect. Here's how often you should really be cleaning yours.",
    publishedAt: "2026-01-15",
    readTime: "4 min read",
    coverImage: images.services.driveway,
    content: [
      {
        type: "paragraph",
        text: "A clean driveway does more than lift the look of your home — it protects the concrete or paving underneath from long-term staining and deterioration. But how often does it actually need a proper pressure clean?",
      },
      { type: "heading", text: "The short answer" },
      {
        type: "paragraph",
        text: "For most Adelaide homes, a professional driveway pressure clean once every 12 to 18 months keeps things looking sharp and prevents dirt, oil and mould from becoming permanently embedded in the surface.",
      },
      { type: "heading", text: "What affects the timeline" },
      {
        type: "list",
        items: [
          "Shaded driveways under trees tend to develop moss and mould faster and may need cleaning closer to every 6–12 months.",
          "Driveways with regular car use build up oil and rubber staining more quickly.",
          "Exposed, sunny driveways with good drainage often go longer between cleans.",
          "Older or unsealed concrete tends to absorb staining faster than sealed surfaces.",
        ],
      },
      { type: "heading", text: "Signs it's time for a clean" },
      {
        type: "paragraph",
        text: "If you're noticing dark patches, a slippery green tinge in shaded areas, or general dullness compared to when it was laid, that's your driveway telling you it's overdue. Leaving it too long makes staining harder to fully remove.",
      },
      {
        type: "paragraph",
        text: "If you're not sure whether your driveway needs a clean, send us a few photos and we'll let you know honestly — sometimes a light clean now saves a much bigger job later.",
      },
    ],
  },
  {
    slug: "signs-your-roof-needs-a-clean",
    title: "5 Signs Your Roof Needs a Professional Clean",
    excerpt:
      "Moss, lichen and grime don't just look bad — left long enough, they can affect your roof's condition. Here's what to look out for.",
    publishedAt: "2026-02-03",
    readTime: "3 min read",
    coverImage: images.services.roof,
    content: [
      {
        type: "paragraph",
        text: "Your roof takes the brunt of Adelaide's weather all year round, so it's easy to forget about until something looks visibly wrong. Here are five signs it's time to get it cleaned.",
      },
      {
        type: "list",
        items: [
          "Visible moss or lichen growth, especially on shaded or south-facing sections.",
          "Dark streaking or staining across tiles or roof sheeting.",
          "A dull, chalky appearance compared to neighbouring roofs.",
          "Gutters filling up faster than usual with roof debris.",
          "It's been more than a couple of years since your last professional clean.",
        ],
      },
      { type: "heading", text: "Why it matters beyond appearance" },
      {
        type: "paragraph",
        text: "Moss and organic growth can hold moisture against roofing materials for longer periods, which over time isn't doing your roof any favours. A proper clean removes the buildup safely without damaging tiles or coatings.",
      },
      {
        type: "paragraph",
        text: "If your roof is overdue, get in touch for a free quote — we'll talk you through the process and what to expect before any work begins.",
      },
    ],
  },
  {
    slug: "is-diy-pressure-washing-safe-for-your-house",
    title: "Is DIY Pressure Washing Safe for Your House Exterior?",
    excerpt:
      "A hired pressure washer from the hardware store seems like an easy weekend job — until it isn't. Here's what to know before attempting it yourself.",
    publishedAt: "2026-02-20",
    readTime: "5 min read",
    coverImage: images.services.houseWash,
    content: [
      {
        type: "paragraph",
        text: "House washing looks simple enough — point, spray, done. In practice, the wrong pressure, angle or technique can damage render, timber cladding, mortar joints and paint finishes, sometimes permanently.",
      },
      { type: "heading", text: "Common DIY mistakes" },
      {
        type: "list",
        items: [
          "Using too much pressure on soft surfaces like weatherboard or old render.",
          "Holding the nozzle too close, which can strip paint or etch surfaces.",
          "Forcing water behind cladding or into window and door seals.",
          "Missing mould rather than actually removing it, so it returns within weeks.",
          "Not accounting for runoff, drainage or nearby plants and garden beds.",
        ],
      },
      { type: "heading", text: "When it makes sense to call a professional" },
      {
        type: "paragraph",
        text: "If your home has render, older paintwork, timber features or you're simply not confident with pressure equipment, it's worth getting a professional opinion first. We use commercial-grade equipment calibrated for each surface type, so you get a thorough clean without the risk.",
      },
    ],
  },
  {
    slug: "solar-panel-cleaning-why-it-matters-for-efficiency",
    title: "Solar Panel Cleaning: Why It Matters for Efficiency",
    excerpt:
      "Dust and grime on solar panels can quietly reduce how much power your system generates. Here's how much of a difference a clean can actually make.",
    publishedAt: "2026-03-08",
    readTime: "4 min read",
    coverImage: images.services.solarPanels,
    content: [
      {
        type: "paragraph",
        text: "Solar panels are designed to sit outside in the elements, but that also means they collect dust, pollen, bird droppings and general grime over time — all of which can block sunlight from reaching the cells underneath.",
      },
      { type: "heading", text: "How much does dirt actually cost you?" },
      {
        type: "paragraph",
        text: "The exact drop in output depends on how dirty the panels are and where you live, but a build-up of grime can meaningfully reduce generation, particularly on panels that sit at a low angle or are exposed to nearby trees, roads or agricultural dust.",
      },
      { type: "heading", text: "Why professional cleaning is worth it" },
      {
        type: "list",
        items: [
          "Panels are cleaned with the right water pressure and technique to avoid damaging the glass or seals.",
          "We can safely access roof-mounted systems without risking the panels or your roof.",
          "Combining a solar clean with a roof wash means one visit instead of two.",
        ],
      },
      {
        type: "paragraph",
        text: "If it's been a while since your panels were cleaned, it's worth getting a quote — especially before the peak of summer when every bit of generation counts.",
      },
    ],
  },
  {
    slug: "gutter-cleaning-how-often-and-why-it-matters",
    title: "Gutter Cleaning: How Often and Why It Matters",
    excerpt:
      "Blocked gutters are one of the most overlooked maintenance issues on Australian homes. Here's why regular cleaning is worth staying on top of.",
    publishedAt: "2026-03-22",
    readTime: "4 min read",
    coverImage: images.services.gutter,
    content: [
      {
        type: "paragraph",
        text: "Gutters do a simple but important job — moving water away from your roof and foundations. When they're blocked with leaves and debris, that water has nowhere to go, which can lead to problems well beyond a messy roofline.",
      },
      { type: "heading", text: "How often should gutters be cleaned?" },
      {
        type: "paragraph",
        text: "As a general rule, once or twice a year is enough for most homes — more often if you've got overhanging trees nearby. Autumn is usually the biggest culprit for leaf litter, so a clean heading into the wetter months is a good habit.",
      },
      { type: "heading", text: "What can happen if they're left too long" },
      {
        type: "list",
        items: [
          "Water overflowing and running down walls or into eaves.",
          "Increased risk of water pooling near foundations.",
          "Rust and corrosion in metal gutters from sitting water and debris.",
          "Pest and vermin activity in built-up organic matter.",
        ],
      },
      {
        type: "paragraph",
        text: "A gutter clean is a small job that prevents much bigger ones down the line. Get in touch and we'll take care of it.",
      },
    ],
  },
  {
    slug: "walkway-and-paver-cleaning-restoring-slippery-mould-covered-paths",
    title: "Walkway and Paver Cleaning: Restoring Slippery, Mould-Covered Paths",
    excerpt:
      "Shaded walkways and paved courtyards are some of the worst spots for mould buildup — and some of the most dangerous when they get slippery.",
    publishedAt: "2026-04-05",
    readTime: "3 min read",
    coverImage: images.services.walkway,
    content: [
      {
        type: "paragraph",
        text: "Walkways, courtyards and paved entertaining areas often sit in shade for large parts of the day, which makes them one of the fastest surfaces on a property to develop mould, algae and general grime.",
      },
      { type: "heading", text: "Why it's more than a cosmetic issue" },
      {
        type: "paragraph",
        text: "A green or black film on pavers isn't just unattractive — it can become genuinely slippery when wet, especially on smooth-finished pavers or tiled outdoor areas. That's a real trip hazard for family, guests or customers walking through.",
      },
      { type: "heading", text: "What a professional clean involves" },
      {
        type: "list",
        items: [
          "Removing built-up mould, algae and organic staining from the paver surface.",
          "Cleaning between joints and grout lines, not just the paver tops.",
          "Adjusting pressure and technique for softer or older pavers to avoid damage.",
          "Leaving the area safe and presentable for immediate use.",
        ],
      },
      {
        type: "paragraph",
        text: "If your walkway, courtyard or entrance is looking tired or feels slippery underfoot, it's worth getting a free quote — it's often a quicker and more affordable fix than people expect.",
      },
    ],
  },
  {
    slug: "boosting-your-homes-street-appeal-before-selling",
    title: "Boosting Your Home's Street Appeal Before Selling",
    excerpt:
      "First impressions matter when selling a property. Here's why exterior cleaning is one of the highest-return, lowest-cost improvements before listing.",
    publishedAt: "2026-04-18",
    readTime: "4 min read",
    coverImage: images.services.houseWash,
    content: [
      {
        type: "paragraph",
        text: "Buyers form an opinion about a property before they even step through the front door. Driveways, walkways and exterior walls covered in dirt, mould or staining can quietly undercut an otherwise well-presented home.",
      },
      { type: "heading", text: "Where to focus first" },
      {
        type: "list",
        items: [
          "The driveway and front pathway — the very first thing buyers see and walk across.",
          "House exterior walls, especially render or cladding facing the street.",
          "Entryways, porches and any tiled or paved outdoor areas.",
          "Gutters and fascias, which are easy to overlook but noticeable up close.",
        ],
      },
      { type: "heading", text: "A low-cost improvement with a strong payoff" },
      {
        type: "paragraph",
        text: "Compared to renovations or landscaping, a full exterior pressure clean is inexpensive and can be completed in a single visit — often making a bigger visual difference than people expect for the price.",
      },
      {
        type: "paragraph",
        text: "If you're preparing to list your property, get in touch for a free quote and we'll help you prioritise what will make the biggest difference before your first open inspection.",
      },
    ],
  },
  {
    slug: "5-questions-to-ask-before-hiring-a-pressure-cleaner",
    title: "5 Questions to Ask Before Hiring a Pressure Cleaner",
    excerpt:
      "Not all pressure cleaning services are the same. Here's what to ask before booking someone to work on your property.",
    publishedAt: "2026-05-02",
    readTime: "4 min read",
    coverImage: images.hero,
    content: [
      {
        type: "paragraph",
        text: "Pressure cleaning looks like a simple service from the outside, but the quality, care and equipment used can vary a lot between providers. A few quick questions can save you from a disappointing result — or worse, damage to your property.",
      },
      { type: "heading", text: "1. Are you insured?" },
      {
        type: "paragraph",
        text: "Any reputable operator should be able to confirm they carry insurance. This protects you in the unlikely event something goes wrong during the job.",
      },
      { type: "heading", text: "2. What equipment do you use?" },
      {
        type: "paragraph",
        text: "Commercial-grade equipment, calibrated to the surface being cleaned, gives a far more consistent result than a hardware store hire unit.",
      },
      { type: "heading", text: "3. Is the quote clear and upfront?" },
      {
        type: "paragraph",
        text: "You should know roughly what you're paying before the work starts, based on the size and condition of the area — not be surprised on the day.",
      },
      { type: "heading", text: "4. How do they handle different surfaces?" },
      {
        type: "paragraph",
        text: "Concrete, pavers, render, timber and roofing all need different pressure levels and techniques. A good operator will be able to explain this without prompting.",
      },
      { type: "heading", text: "5. Can they show examples of previous work?" },
      {
        type: "paragraph",
        text: "Photos or reviews from real customers are a good sign you're dealing with an established, reliable service rather than a one-off job.",
      },
    ],
  },
  {
    slug: "understanding-mould-and-mildew-why-it-keeps-coming-back",
    title: "Understanding Mould and Mildew: Why It Keeps Coming Back",
    excerpt:
      "Cleaned it once and it's already back? Here's why mould and mildew return so quickly on outdoor surfaces — and what actually helps slow it down.",
    publishedAt: "2026-05-20",
    readTime: "4 min read",
    coverImage: images.services.roof,
    content: [
      {
        type: "paragraph",
        text: "It's a common frustration — a surface gets cleaned, looks great for a while, then mould or mildew starts creeping back within months. Understanding why it happens helps explain what actually works long term.",
      },
      { type: "heading", text: "Why mould comes back so easily" },
      {
        type: "list",
        items: [
          "Shaded, damp areas provide the perfect environment for spores to resettle and regrow.",
          "Surface scrubbing alone often leaves roots or spores embedded below the surface.",
          "Poor drainage or overhanging trees keep surfaces damp for longer after rain.",
          "Porous surfaces like unsealed concrete and render hold moisture longer than sealed ones.",
        ],
      },
      { type: "heading", text: "What actually helps" },
      {
        type: "paragraph",
        text: "A proper pressure clean removes far more of the embedded growth than surface scrubbing or a basic hose-down. Sealing surfaces after cleaning, improving airflow where possible, and staying on a regular cleaning schedule all help slow regrowth significantly.",
      },
      {
        type: "paragraph",
        text: "If mould keeps returning faster than you'd expect, get in touch — we can talk through what's likely causing it and how to keep it under control for longer.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
