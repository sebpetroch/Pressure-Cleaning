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
    coverImage: "/images/article-gutter.jpg",
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
    coverImage: images.articles.streetAppeal,
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
    coverImage: images.articles.mould,
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
  {
    slug: "concrete-cleaning-removing-stubborn-oil-rust-and-tyre-marks",
    title: "Concrete Cleaning: Removing Stubborn Oil, Rust and Tyre Marks",
    excerpt:
      "Oil stains, rust marks and tyre scuffs are some of the toughest marks to shift from concrete. Here's what actually works.",
    publishedAt: "2026-06-04",
    readTime: "4 min read",
    coverImage: images.articles.concrete,
    content: [
      {
        type: "paragraph",
        text: "Concrete is porous, which means oil, rust and rubber marks don't just sit on the surface — they soak in. That's why a quick hose down or a bit of scrubbing rarely gets rid of them completely.",
      },
      { type: "heading", text: "Why these stains are so stubborn" },
      {
        type: "list",
        items: [
          "Oil and grease penetrate below the surface, especially on unsealed concrete.",
          "Rust marks from garden furniture or tools bond chemically with the concrete.",
          "Tyre marks combine rubber residue with ground-in dirt from repeated parking.",
          "UV exposure can bake stains in further over time, making them harder to shift.",
        ],
      },
      { type: "heading", text: "What helps" },
      {
        type: "paragraph",
        text: "Commercial-grade pressure cleaning combined with the right technique lifts embedded staining far more effectively than surface cleaning alone. For older or heavier stains, sometimes a couple of passes are needed to get the best result — and sealing afterwards helps prevent future marks from soaking in as deeply.",
      },
      {
        type: "paragraph",
        text: "If your driveway, garage floor or path has stubborn staining you've given up on, send us a photo — it's often more fixable than people expect.",
      },
    ],
  },
  {
    slug: "pressure-cleaning-for-commercial-and-retail-properties",
    title: "Pressure Cleaning for Commercial and Retail Properties",
    excerpt:
      "First impressions count for businesses too. Here's why regular exterior cleaning matters for commercial and retail properties.",
    publishedAt: "2026-06-18",
    readTime: "3 min read",
    coverImage: images.articles.commercial,
    content: [
      {
        type: "paragraph",
        text: "For a business, the exterior of your building is effectively your storefront advertising — whether that's a shopfront entrance, car park, or the walkway customers use every day.",
      },
      { type: "heading", text: "Why it matters commercially" },
      {
        type: "list",
        items: [
          "A clean entrance and car park creates a stronger first impression for customers and clients.",
          "Slippery, mould-covered walkways or ramps can become a liability risk.",
          "Regular cleaning protects the long-term condition of paving, signage and building exteriors.",
          "Well-maintained premises reflect on how customers perceive the business itself.",
        ],
      },
      { type: "heading", text: "Working around your business" },
      {
        type: "paragraph",
        text: "We schedule commercial jobs around opening hours where possible, so cleaning doesn't get in the way of customers or day-to-day operations.",
      },
      {
        type: "paragraph",
        text: "If you manage a shopfront, office or commercial property in Adelaide, get in touch for a quote — we can talk through a one-off clean or a regular maintenance schedule.",
      },
    ],
  },
  {
    slug: "eco-friendly-pressure-cleaning-what-happens-to-the-water",
    title: "Eco-Friendly Pressure Cleaning: What Happens to the Water?",
    excerpt:
      "A common question we get asked — where does all that water and dirt actually go, and is pressure cleaning environmentally friendly?",
    publishedAt: "2026-07-02",
    readTime: "3 min read",
    coverImage: images.articles.ecoFriendly,
    content: [
      {
        type: "paragraph",
        text: "Pressure cleaning uses water more efficiently than most people assume — high-pressure equipment does more with less volume compared to a standard hose, and the process itself doesn't rely on harsh chemicals for most jobs.",
      },
      { type: "heading", text: "Where does the runoff go?" },
      {
        type: "paragraph",
        text: "We're mindful of drainage and runoff on every job, particularly around stormwater drains, garden beds and any areas where runoff could affect plants or waterways. Where needed, we can contain or redirect runoff away from sensitive areas.",
      },
      { type: "heading", text: "Do you need to use chemicals?" },
      {
        type: "paragraph",
        text: "Most dirt, grime and mould can be removed through pressure and technique alone. Where a treatment is needed for stubborn mould or organic growth, we use products chosen to be as safe as possible for surrounding gardens and pets.",
      },
      {
        type: "paragraph",
        text: "If you have questions about how a specific job will be handled around pets, plants or waterways, just ask when you request your quote — we're happy to talk through it.",
      },
    ],
  },
  {
    slug: "preparing-your-property-for-summer-entertaining",
    title: "Preparing Your Property for Summer Entertaining",
    excerpt:
      "Before the entertaining season kicks off, here's what's worth cleaning first to get your outdoor areas guest-ready.",
    publishedAt: "2026-07-20",
    readTime: "3 min read",
    coverImage: images.articles.summerEntertaining,
    content: [
      {
        type: "paragraph",
        text: "Outdoor entertaining areas take a bit of a beating over the cooler months — leaves, grime and mould build up while they're not getting as much use. A clean before summer makes a noticeable difference.",
      },
      { type: "heading", text: "Where to focus" },
      {
        type: "list",
        items: [
          "Alfresco areas, patios and decking that will get the most foot traffic.",
          "Pool surrounds, which can get slippery if mould has built up over winter.",
          "Driveways and walkways guests will actually walk across.",
          "Gutters, especially before storm season, to avoid overflow during summer rain.",
        ],
      },
      { type: "heading", text: "Book ahead of the rush" },
      {
        type: "paragraph",
        text: "Spring and early summer tend to be our busiest time of year as everyone has the same idea at once. Booking a little earlier means your property is ready well before the first barbecue of the season.",
      },
      {
        type: "paragraph",
        text: "Get in touch for a free quote and we'll help you prioritise what to clean first.",
      },
    ],
  },
  {
    slug: "investment-property-cleaning-a-checklist-for-landlords",
    title: "Investment Property Cleaning: A Checklist for Landlords",
    excerpt:
      "Between tenants is the easiest time to get exterior cleaning done. Here's a simple checklist for landlords and property managers.",
    publishedAt: "2026-08-05",
    readTime: "4 min read",
    coverImage: images.articles.landlordChecklist,
    content: [
      {
        type: "paragraph",
        text: "Exterior presentation plays a real role in how quickly a rental property leases and the calibre of tenant it attracts. Vacancy periods between tenants are usually the easiest time to get cleaning done without working around anyone living there.",
      },
      { type: "heading", text: "A simple pre-listing checklist" },
      {
        type: "list",
        items: [
          "Driveway and any paved areas — first impression for prospective tenants.",
          "Walkways and entrances leading to the front door.",
          "Exterior walls, especially render or cladding facing the street.",
          "Gutters, to catch any issues before a new tenant moves in.",
        ],
      },
      { type: "heading", text: "Managing multiple properties" },
      {
        type: "paragraph",
        text: "If you manage several properties, we can work with you or your property manager to schedule cleaning around vacancy periods and keep a consistent standard across your portfolio.",
      },
      {
        type: "paragraph",
        text: "Get in touch for a quote — we're happy to work directly with property managers and can provide invoices suited to rental management needs.",
      },
    ],
  },
  {
    slug: "how-weather-affects-when-you-should-book-a-pressure-clean",
    title: "How Weather Affects When You Should Book a Pressure Clean",
    excerpt:
      "Adelaide's seasons each bring their own buildup of dirt, mould and debris. Here's how weather patterns affect the best time to clean.",
    publishedAt: "2026-08-22",
    readTime: "3 min read",
    coverImage: images.articles.weather,
    content: [
      {
        type: "paragraph",
        text: "Adelaide's mix of dry summers, wet winters and windy periods in between each affect exterior surfaces differently. Timing your cleaning around the seasons can help you get more value out of each clean.",
      },
      { type: "heading", text: "Autumn and winter" },
      {
        type: "paragraph",
        text: "Falling leaves and increased rainfall make this the peak season for blocked gutters and mould growth in shaded areas. It's a good time to book gutter cleaning and address any mould before it spreads further.",
      },
      { type: "heading", text: "Spring" },
      {
        type: "paragraph",
        text: "As things dry out, pollen and dust settle on driveways, roofs and solar panels. A spring clean ahead of summer keeps everything looking sharp and performing well.",
      },
      { type: "heading", text: "Summer" },
      {
        type: "paragraph",
        text: "Dust storms and dry conditions can leave a fine layer of grime across exterior surfaces, while UV exposure makes existing staining more noticeable. It's also entertaining season, so outdoor areas get the most use.",
      },
      {
        type: "paragraph",
        text: "Not sure what season is best for your job? Send us a message and we'll advise based on what needs cleaning and your property's specific conditions.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
