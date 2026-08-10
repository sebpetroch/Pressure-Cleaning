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
      { type: "heading", text: "Why DIY often falls short" },
      {
        type: "paragraph",
        text: "A hired pressure washer can shift surface dirt, but most consumer-grade units don't have the pressure or hot-water capability to fully lift embedded oil, mould roots or years of ground-in grime. It's common for a DIY clean to look good for a few weeks before the staining reappears, because only the surface layer was actually removed.",
      },
      { type: "heading", text: "What a professional clean actually does differently" },
      {
        type: "list",
        items: [
          "Commercial-grade equipment reaches pressure and flow rates well beyond hire units, lifting embedded staining rather than just surface dust.",
          "Pre-treatment for oil, rust or mould means the clean lasts longer instead of the stains creeping back within weeks.",
          "Even, consistent technique across the whole surface avoids the patchy, streaky result common with DIY attempts.",
          "No risk to garden beds, pets or nearby surfaces from over-spraying or incorrect chemical use.",
        ],
      },
      { type: "heading", text: "Cost of leaving it too long" },
      {
        type: "paragraph",
        text: "The longer staining sits on concrete, the deeper it penetrates — especially on unsealed or older driveways. A drive that's gone three or four years without a clean often needs a longer, more intensive job than one on a regular 12 to 18 month cycle, which usually means a higher price for the same result. Staying on top of it is almost always the cheaper option over time.",
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
      { type: "heading", text: "How often roofs actually need cleaning" },
      {
        type: "paragraph",
        text: "Most Adelaide homes benefit from a professional roof clean every 2 to 3 years, though roofs under overhanging trees or in shaded, damp positions can need attention sooner. Tiled roofs tend to show moss and lichen growth faster than metal roofing, which is generally more resistant but can still develop staining and dirt build-up over time.",
      },
      { type: "heading", text: "What the cleaning process involves" },
      {
        type: "list",
        items: [
          "An assessment of the roof material and condition to determine the right pressure and technique.",
          "Careful removal of moss, lichen and organic growth without dislodging or cracking tiles.",
          "Clearing debris from valleys and gutter lines while we're up there.",
          "A final check to make sure nothing has been missed and the roof is left safe to walk away from.",
        ],
      },
      { type: "heading", text: "Is it safe for older or fragile roofs?" },
      {
        type: "paragraph",
        text: "This is one of the most common concerns we hear, and it's a fair one — the wrong pressure on brittle or ageing tiles can cause damage. That's why pressure and technique are adjusted to the specific roof rather than using a one-size-fits-all approach. If a roof is in poor condition, we'll tell you honestly before starting rather than risk making things worse.",
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
      { type: "heading", text: "The real cost of getting it wrong" },
      {
        type: "paragraph",
        text: "Stripped paint, cracked render or water forced behind cladding aren't always obvious straight away — sometimes the damage shows up weeks later as bubbling paint, damp patches or mould growth behind the wall. Repairing that kind of damage typically costs far more than a professional clean would have in the first place.",
      },
      { type: "heading", text: "What professional house washing looks like" },
      {
        type: "list",
        items: [
          "Pressure and nozzle selection matched to the specific wall material — render, brick, weatherboard or cladding all need different handling.",
          "Pre-treatment for mould and organic growth so it's actually removed, not just rinsed off the surface.",
          "Careful attention around windows, vents and roof lines to avoid forcing water where it shouldn't go.",
          "A methodical, even pass across the whole exterior for a consistent finish rather than obvious streaking.",
        ],
      },
      {
        type: "paragraph",
        text: "If you've already attempted a DIY clean and you're not happy with the result, or you're just not confident tackling it yourself, get in touch for a free quote — we're happy to assess the property and explain what's involved before any work starts.",
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
      { type: "heading", text: "Signs your panels need cleaning" },
      {
        type: "list",
        items: [
          "A visible layer of dust, pollen or grime across the panel surface.",
          "Bird droppings or leaf debris sitting on individual cells.",
          "A noticeable drop in your system's generation compared to previous months on similar weather days.",
          "It's been over 12 months since the panels were last cleaned.",
        ],
      },
      { type: "heading", text: "Best time of year to clean your panels" },
      {
        type: "paragraph",
        text: "Late winter or early spring is a great time to book a clean — it clears off the buildup from the wetter, windier months and gets your system performing at its best right as daylight hours and summer demand start increasing. Cleaning again before the height of summer can help squeeze out extra performance during the months your system matters most.",
      },
      { type: "heading", text: "DIY solar panel cleaning risks" },
      {
        type: "paragraph",
        text: "Solar panels are more delicate than they look — the wrong pressure, tools or detergent can scratch the glass or damage seals, which affects both performance and warranty. Working on a roof also carries obvious safety risks without the right equipment. It's one of those jobs where the cost of a professional clean is small compared to the cost of getting it wrong.",
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
      { type: "heading", text: "Why DIY gutter cleaning is riskier than it looks" },
      {
        type: "paragraph",
        text: "Ladder falls are one of the most common causes of home DIY injuries, and gutters are rarely at a convenient, safe height. Beyond the safety risk, it's easy to miss debris in valleys, downpipe entrances or hard-to-reach sections, which means the job doesn't actually solve the problem it was meant to fix.",
      },
      { type: "heading", text: "What's included in a professional gutter clean" },
      {
        type: "list",
        items: [
          "Full clearing of leaves, twigs and sediment from gutters and valleys.",
          "Checking that downpipes are flowing freely, not just the gutters themselves.",
          "A visual check for early signs of rust, sagging or damage worth knowing about.",
          "Debris removed from the property, not just tipped onto the ground below.",
        ],
      },
      {
        type: "paragraph",
        text: "Gutter cleaning pairs well with a roof wash if it's due around the same time — we can quote both together and save you a second visit.",
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
      { type: "heading", text: "How often should walkways be cleaned?" },
      {
        type: "paragraph",
        text: "Shaded, high-traffic walkways often need attention every 6 to 12 months, while sunnier, well-drained paths can go longer. Courtyards enclosed by fences or dense planting tend to hold moisture longest and are usually the first area to show mould again after a clean.",
      },
      { type: "heading", text: "Different paver types need different care" },
      {
        type: "list",
          items: [
          "Concrete pavers can generally handle higher pressure than natural stone or older, worn pavers.",
          "Sandstone and limestone are softer and need lower pressure to avoid surface erosion.",
          "Joints and grout lines often hold more grime than the paver surface itself and need specific attention.",
          "Sealed pavers respond differently to cleaning than unsealed ones, so it pays to know which you have.",
        ],
      },
      {
        type: "paragraph",
        text: "Not sure what your pavers can handle? Send us a photo when you request your quote and we'll factor it into how the job is approached.",
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
      { type: "heading", text: "Timing it around your campaign" },
      {
        type: "paragraph",
        text: "Ideally, exterior cleaning happens a week or two before photos are taken, giving surfaces time to fully dry and any nearby plants time to settle after cleaning. Booking too close to your first open inspection risks a rushed job — booking early in your selling timeline gives you the most flexibility.",
      },
      { type: "heading", text: "What agents notice" },
      {
        type: "paragraph",
        text: "Real estate agents consistently point to street appeal as one of the easiest wins before a campaign. A tired, stained exterior can make buyers question what else hasn't been maintained, even if the inside of the home is presented beautifully. A clean exterior sets the tone before anyone's even walked through the front door.",
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
      { type: "heading", text: "Red flags to watch for" },
      {
        type: "list",
        items: [
          "Vague or reluctant answers about insurance or experience.",
          "No willingness to provide a quote before turning up on the day.",
          "Pressure to pay a large deposit upfront for a small residential job.",
          "No fixed business details, phone number or way to follow up after the job.",
        ],
      },
      {
        type: "paragraph",
        text: "Taking a few minutes to ask these questions upfront makes it far more likely you'll end up happy with the result — and avoids the cost and hassle of a job that needs to be redone.",
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
      { type: "heading", text: "Is mould on exterior surfaces a health concern?" },
      {
        type: "paragraph",
        text: "While outdoor mould is generally less of a direct health concern than indoor mould, it can still trigger allergies or respiratory irritation for sensitive individuals, and it's not something you want tracked inside on shoes or paws. Beyond health, ongoing organic growth can also gradually degrade porous surfaces like render, grout and unsealed concrete.",
      },
      { type: "heading", text: "Keeping mould away for longer after a clean" },
      {
        type: "list",
        items: [
          "Trim back overhanging branches and dense plants to improve airflow and sunlight to affected areas.",
          "Address drainage issues that leave water sitting on surfaces after rain.",
          "Consider sealing porous surfaces after cleaning to reduce how much moisture they absorb.",
          "Stick to a regular cleaning schedule rather than waiting until growth is heavy again.",
        ],
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
      { type: "heading", text: "Setting realistic expectations" },
      {
        type: "paragraph",
        text: "Some very old or deeply set stains may lighten significantly rather than disappear completely, particularly on unsealed concrete that's absorbed staining over many years. We'll always give you an honest assessment of what's realistically achievable before starting, rather than promising a result we can't deliver.",
      },
      { type: "heading", text: "Protecting concrete after cleaning" },
      {
        type: "paragraph",
        text: "Once stains are removed, sealing the concrete is one of the best ways to keep it looking clean for longer. A sealed surface is far more resistant to oil, rust and general staining, which means less frequent cleaning and an easier job each time it's due.",
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
      { type: "heading", text: "Safety and compliance considerations" },
      {
        type: "paragraph",
        text: "Commercial property owners and managers can carry liability for slips and falls on their premises. Regularly cleaning entrances, ramps and car parks isn't just about presentation — it's a practical part of managing risk, particularly for walkways that get wet or shaded areas prone to mould buildup.",
      },
      { type: "heading", text: "How often commercial properties should be cleaned" },
      {
        type: "paragraph",
        text: "This varies with foot traffic and location, but many commercial and retail properties benefit from a clean every 3 to 6 months for high-traffic entrances, with a full exterior clean annually. Properties in shaded arcades or near garden beds often need more frequent attention than free-standing, sun-exposed premises.",
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
      { type: "heading", text: "How it compares to a garden hose" },
      {
        type: "paragraph",
        text: "It seems counterintuitive, but professional pressure cleaning often uses less total water than a homeowner scrubbing away with a hose over an hour or more. Higher pressure means the job gets done faster and more thoroughly, so less water runs continuously while someone works out how to shift a stubborn stain.",
      },
      { type: "heading", text: "Choosing an environmentally considerate provider" },
      {
        type: "list",
        items: [
          "Ask how they manage runoff near stormwater drains and garden beds.",
          "Check whether they default to pressure and technique before reaching for chemical treatments.",
          "Ask what products are used if treatment is required, and whether they're pet and plant safe.",
        ],
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
      { type: "heading", text: "Areas people often forget" },
      {
        type: "list",
        items: [
          "Outdoor furniture areas and the pavers or decking underneath them.",
          "Side pathways and gates that guests use but aren't always front of mind.",
          "BBQ areas, which build up grease and grime alongside general dirt.",
          "Fence lines and boundary walls bordering the entertaining area.",
        ],
      },
      {
        type: "paragraph",
        text: "A little planning goes a long way — working through these areas a few weeks out means everything has time to dry and settle before your first gathering of the season.",
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
      { type: "heading", text: "The return on investment for landlords" },
      {
        type: "paragraph",
        text: "A clean, well-presented exterior tends to attract stronger rental applications and can support a higher achievable rent, particularly in a competitive market. Compared to the cost of an extended vacancy, a pre-listing exterior clean is a relatively small expense with a clear payoff.",
      },
      { type: "heading", text: "End of lease vs new tenant preparation" },
      {
        type: "paragraph",
        text: "Some landlords prefer to clean at the end of a lease so the property is ready to list immediately, while others wait until a new tenant is confirmed to time it closer to move-in. Either approach works — the main thing is building it into your standard turnover process rather than treating it as optional.",
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
      { type: "heading", text: "Why timing can affect the outcome" },
      {
        type: "paragraph",
        text: "Cleaning right before a run of wet weather can mean pollen, dust and airborne debris settle back onto surfaces faster than usual, shortening how long the result lasts. Where possible, we'll factor the forecast into scheduling so you get the most value from the clean rather than seeing it undone within days.",
      },
      { type: "heading", text: "Planning cleans around the whole year" },
      {
        type: "paragraph",
        text: "Rather than reacting once something looks visibly dirty, many Adelaide homeowners find it easier to plan exterior cleaning around the seasons — gutters and roof before winter, driveways and walkways heading into spring, and solar panels ahead of summer. A little planning spreads the cost out and keeps the property looking after itself year-round.",
      },
    ],
  },
  {
    slug: "driveway-pressure-washing-adelaide",
    title: "Driveway Pressure Washing Adelaide: The Complete Guide",
    excerpt:
      "Everything you need to know about professional driveway pressure washing in Adelaide — what's included, our process, and what it costs.",
    publishedAt: "2026-09-05",
    readTime: "5 min read",
    coverImage: images.articles.pillarDriveway,
    content: [
      {
        type: "paragraph",
        text: "Your driveway is one of the largest and most visible surfaces on your property, and it takes a constant beating from car traffic, oil drips, tree sap, mould and Adelaide's mix of hot dry summers and wet winters. Driveway pressure washing is our most requested service, and for good reason — it's one of the fastest ways to lift the whole look of a property.",
      },
      { type: "heading", text: "What's included in a driveway clean" },
      {
        type: "list",
        items: [
          "Full surface clean across concrete, exposed aggregate, pavers or brick driveways.",
          "Targeted treatment for oil stains, rust marks, tyre scuffs and general grime.",
          "Removal of moss, algae and mould, particularly in shaded areas.",
          "A final rinse to leave the surface clean and safe to walk and drive on.",
        ],
      },
      { type: "heading", text: "Our process" },
      {
        type: "paragraph",
        text: "We start by assessing the surface type and condition to work out the right pressure and technique — concrete, pavers and exposed aggregate all respond differently. Stubborn stains get pre-treated before the main clean, then we work methodically across the full driveway for an even, consistent finish rather than obvious patchy sections.",
      },
      { type: "heading", text: "How much does it cost?" },
      {
        type: "paragraph",
        text: "Driveway pressure washing starts from $199, with the final price depending on the size of the driveway, the surface type and how much staining needs to be removed. We provide a clear quote before any work begins, based on your description or photos.",
      },
      { type: "heading", text: "How often should it be done?" },
      {
        type: "paragraph",
        text: "Most Adelaide homes benefit from a driveway clean every 12 to 18 months, though shaded driveways under trees or those with heavy car use may need attention closer to every 6 to 12 months to stay on top of staining before it sets in.",
      },
      {
        type: "paragraph",
        text: "Ready to see the difference on your own driveway? Request a free quote and we'll get back to you with pricing and availability.",
      },
    ],
  },
  {
    slug: "walkway-pressure-washing-adelaide",
    title: "Walkway Pressure Washing Adelaide: The Complete Guide",
    excerpt:
      "A full breakdown of our walkway and paver pressure washing service in Adelaide, including process, pricing and how often it's needed.",
    publishedAt: "2026-09-12",
    readTime: "4 min read",
    coverImage: images.articles.pillarWalkway,
    content: [
      {
        type: "paragraph",
        text: "Walkways, entrances and courtyards see constant foot traffic, and because they're often shaded by fences, plants or the house itself, they're some of the fastest surfaces on a property to develop mould and become slippery. Professional walkway pressure washing restores both the look and the safety of these areas.",
      },
      { type: "heading", text: "What's included" },
      {
        type: "list",
        items: [
          "Cleaning of pathways, entrances, courtyards and paved outdoor areas.",
          "Removal of mould, algae and organic staining from the surface and joints.",
          "Pressure and technique adjusted for pavers, concrete, tiles or natural stone.",
          "A safe, presentable finish suitable for immediate use.",
        ],
      },
      { type: "heading", text: "Our process" },
      {
        type: "paragraph",
        text: "Walkways often combine multiple surface types in a small area — pavers leading to tiled entryways, for example — so we adjust pressure across the job rather than treating it as one uniform surface. Joints and grout lines get specific attention since they typically hold more grime than the paver tops themselves.",
      },
      { type: "heading", text: "How much does it cost?" },
      {
        type: "paragraph",
        text: "Walkway pressure washing starts from $199, depending on the length and condition of the area and the surface type involved. Get in touch with a few details or photos and we'll provide an accurate quote.",
      },
      { type: "heading", text: "Why it matters beyond appearance" },
      {
        type: "paragraph",
        text: "A mould-covered walkway isn't just unsightly — it becomes genuinely slippery when wet, which is a real trip hazard for family, guests or customers. Regular cleaning keeps these high-traffic areas both safe and presentable.",
      },
      {
        type: "paragraph",
        text: "Request a free quote today and we'll help you prioritise which areas need attention first.",
      },
    ],
  },
  {
    slug: "house-wash-adelaide",
    title: "House Wash Adelaide: The Complete Guide to Exterior House Washing",
    excerpt:
      "How professional house washing works in Adelaide, what surfaces are safe to clean, and what a full exterior wash costs.",
    publishedAt: "2026-09-19",
    readTime: "5 min read",
    coverImage: images.articles.pillarHouseWash,
    content: [
      {
        type: "paragraph",
        text: "A full house wash is one of the most effective ways to lift your home's street appeal — removing years of dirt, grime, mould and general weathering from exterior walls. It's also one of the easiest services to get wrong with DIY equipment, which is why it's worth understanding what a professional clean actually involves.",
      },
      { type: "heading", text: "What's included" },
      {
        type: "list",
        items: [
          "A full exterior clean covering render, brick, weatherboard or cladding.",
          "Mould and organic growth treatment, not just a surface rinse.",
          "Careful pressure and technique matched to your specific wall material.",
          "Attention around windows, vents and roof lines to avoid forcing water where it shouldn't go.",
        ],
      },
      { type: "heading", text: "Our process" },
      {
        type: "paragraph",
        text: "We start by identifying the wall material and its condition — older render, weatherboard and painted surfaces all need a gentler approach than solid brick or modern cladding. Pre-treatment handles mould and organic staining before the main wash, and we work methodically across the whole exterior for a consistent, even result.",
      },
      { type: "heading", text: "How much does it cost?" },
      {
        type: "paragraph",
        text: "A full house wash starts from $399, depending on the size of the home, the number of storeys and the current condition of the exterior. We're happy to provide a firm quote once we know a bit more about the property.",
      },
      { type: "heading", text: "Is it safe for older homes?" },
      {
        type: "paragraph",
        text: "This is one of the most common questions we get, and it's an important one — the wrong pressure on brittle or ageing render, paint or timber can cause real damage. We adjust pressure and technique to the specific home rather than using a one-size-fits-all approach, and we'll always be upfront if a property needs a gentler method.",
      },
      {
        type: "paragraph",
        text: "Get in touch for a free quote and we'll talk you through what's involved for your specific home.",
      },
    ],
  },
  {
    slug: "roof-washing-adelaide",
    title: "Roof Washing Adelaide: The Complete Guide",
    excerpt:
      "What's involved in professional roof washing in Adelaide, how it's done safely, and what it typically costs.",
    publishedAt: "2026-09-26",
    readTime: "5 min read",
    coverImage: images.articles.pillarRoof,
    content: [
      {
        type: "paragraph",
        text: "Roof washing is one of the more specialised services we offer — it involves working at height, on a surface that can be fragile or slippery, and safely removing moss, lichen and grime without damaging tiles or coatings. Done properly, it makes a dramatic difference to how a home looks from the street.",
      },
      { type: "heading", text: "What's included" },
      {
        type: "list",
        items: [
          "Assessment of roof material and condition to determine safe pressure and technique.",
          "Careful removal of moss, lichen and organic growth from tiled or metal roofing.",
          "Clearing of debris from valleys and gutter lines while we're up there.",
          "A final check to make sure the roof is left safe and nothing has been missed.",
        ],
      },
      { type: "heading", text: "Our process" },
      {
        type: "paragraph",
        text: "Tiled roofs and metal roofing need different handling, and older or more fragile tiles need a gentler approach than newer, more resilient ones. We assess the roof before starting and adjust pressure accordingly — the goal is a thorough clean without dislodging or cracking anything in the process.",
      },
      { type: "heading", text: "How much does it cost?" },
      {
        type: "paragraph",
        text: "Roof washing starts from $349, with pricing depending on the size of the roof, its pitch and how much moss or grime buildup needs to be removed. Send us a few photos and we'll come back with an accurate quote.",
      },
      { type: "heading", text: "How often should roofs be cleaned?" },
      {
        type: "paragraph",
        text: "Most Adelaide homes benefit from a professional roof clean every 2 to 3 years, though roofs under overhanging trees or in shaded, damp positions can need attention sooner. Pairing a roof clean with gutter cleaning or solar panel cleaning is common, since we're already up there.",
      },
      {
        type: "paragraph",
        text: "Request a free quote and we'll assess what's realistic for your roof before any work begins.",
      },
    ],
  },
  {
    slug: "solar-panel-cleaning-adelaide",
    title: "Solar Panel Cleaning Adelaide: The Complete Guide",
    excerpt:
      "Why solar panel cleaning matters for system performance, how it's done safely, and what to expect from a professional clean in Adelaide.",
    publishedAt: "2026-10-03",
    readTime: "4 min read",
    coverImage: images.articles.pillarSolar,
    content: [
      {
        type: "paragraph",
        text: "Solar panels sit outside in the elements year-round, collecting dust, pollen, bird droppings and general grime that can quietly reduce how much power your system generates. A professional clean is a small job that helps you get the most out of a significant investment.",
      },
      { type: "heading", text: "What's included" },
      {
        type: "list",
        items: [
          "A full clean of the panel surface using the right pressure and technique.",
          "Careful handling to avoid any risk to the glass, frames or seals.",
          "Safe roof access without putting your panels or roof at risk.",
          "An option to combine with a roof or gutter clean in the same visit.",
        ],
      },
      { type: "heading", text: "Our process" },
      {
        type: "paragraph",
        text: "Solar panels are more delicate than they look, so we use appropriately low pressure and soft technique rather than treating them like a driveway or roof. The goal is a thorough clean that doesn't put your system's performance or warranty at risk.",
      },
      { type: "heading", text: "How much does it cost?" },
      {
        type: "paragraph",
        text: "Solar panel cleaning starts from $249, depending on the number of panels, their accessibility and how long it's been since they were last cleaned. Get in touch for a free quote.",
      },
      { type: "heading", text: "Best time of year to clean" },
      {
        type: "paragraph",
        text: "Late winter or early spring is a great time to book — it clears off the buildup from the wetter months and gets your system performing at its best right as daylight hours and summer demand start increasing.",
      },
      {
        type: "paragraph",
        text: "Request a free quote and we'll help you time it to get the most value from the clean.",
      },
    ],
  },
  {
    slug: "exterior-wall-cleaning-adelaide",
    title: "Exterior Wall Cleaning Adelaide: The Complete Guide",
    excerpt:
      "How professional exterior wall cleaning works for brick, render and cladding, and what it costs in Adelaide.",
    publishedAt: "2026-10-10",
    readTime: "4 min read",
    coverImage: images.services.exteriorWalls,
    content: [
      {
        type: "paragraph",
        text: "Exterior walls take on dirt, grime, mould and general staining over time, particularly in shaded or south-facing areas that don't get much direct sun. Whether it's brick, render or cladding, a professional clean can dramatically lift the appearance of a property without the cost of repainting.",
      },
      { type: "heading", text: "What's included" },
      {
        type: "list",
        items: [
          "Cleaning of brick, render, cladding and other exterior wall surfaces.",
          "Mould and organic staining treatment, not just a surface rinse.",
          "Pressure and technique matched to the specific wall material.",
          "Careful attention around windows, brick joints and trims.",
        ],
      },
      { type: "heading", text: "Our process" },
      {
        type: "paragraph",
        text: "Different wall materials need different handling — render is generally softer than solid brick, and older or painted surfaces need a gentler approach again. We assess the wall material and condition first, then work section by section for an even, consistent result across the full exterior.",
      },
      { type: "heading", text: "How much does it cost?" },
      {
        type: "paragraph",
        text: "Exterior wall cleaning starts from $149, depending on the area involved, the wall material and how much staining needs to be removed. Send us a few photos and we'll come back with a clear quote.",
      },
      { type: "heading", text: "Brick, render or cladding?" },
      {
        type: "paragraph",
        text: "Not sure what your exterior walls are made of, or what pressure they can handle? That's fine — just describe the property or send a photo when you request a quote, and we'll factor it into how the job is approached.",
      },
      {
        type: "paragraph",
        text: "Request a free quote today and bring your exterior walls back to life.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
