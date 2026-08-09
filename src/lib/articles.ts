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
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
