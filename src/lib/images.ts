// Central image registry. Swap any URL below to update the image across the site.
// To use your own photos instead: drop files into /public/images and change the
// value here to a local path such as "/images/hero.jpg".

function unsplash(id: string, w = 1600) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
}

export const images = {
  hero: unsplash("1584622650111-993a426fbf0a", 1920),
  about: unsplash("1600585154340-be6161a56a0c"),
  quoteForm: unsplash("1600607687939-ce8a6c25118c"),
  finalCta: unsplash("1560184897-ae75f418493e", 1920),

  services: {
    driveway: "/images/service-driveway.jpg",
    walkway: "/images/service-walkway.jpg",
    houseWash: "/images/service-housewash.png",
    roof: "/images/service-roof.webp",
    solarPanels: "/images/service-solar.jpg",
    gutter: "/images/service-gutter.jpg",
  },

  // Article cover images — each one is unique so no two articles share a photo.
  articles: {
    streetAppeal: unsplash("1592928302636-c83cf1e1c887"),
    mould: unsplash("1524758631624-e2822e304c36"),
    concrete: unsplash("1580587771525-78b9dba3b914"),
    commercial: unsplash("1519974719765-e6559eac2575"),
    ecoFriendly: unsplash("1600607687920-4e2a09cf159d"),
    summerEntertaining: unsplash("1518481612222-68bbe828ecd1"),
    landlordChecklist: unsplash("1509316975850-ff9c5deb0cd9"),
    weather: unsplash("1600607687644-c7171b42498f"),
  },

  beforeAfter: {
    driveway: {
      before: "/images/beforeafter-driveway-before.jpg",
      after: "/images/beforeafter-driveway-after.jpg",
    },
    walkway: {
      before: "/images/walkway-before.jpg",
      after: "/images/walkway-after.jpg",
    },
    houseWash: {
      before: "/images/beforeafter-housewash-before.jpg",
      after: "/images/beforeafter-housewash-after.jpg",
    },
    roof: {
      before: "/images/beforeafter-roof-before.jpg",
      after: "/images/beforeafter-roof-after.jpg",
    },
  },
};
