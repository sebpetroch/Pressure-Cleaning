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
    driveway: unsplash("1600585154340-be6161a56a0c"),
    walkway: unsplash("1600566752355-35792bedcfea"),
    houseWash: unsplash("1600607687939-ce8a6c25118c"),
    gutter: unsplash("1560184897-ae75f418493e"),
  },

  beforeAfter: {
    driveway: {
      before: unsplash("1615529182904-14819c35db37"),
      after: unsplash("1558618666-fcd25c85cd64"),
    },
    walkway: {
      before: "/images/walkway-before.jpg",
      after: "/images/walkway-after.jpg",
    },
    houseWash: {
      before: unsplash("1585421514738-01798e348b17"),
      after: unsplash("1502005229762-cf1b2da7c5d6"),
    },
    concrete: {
      before: unsplash("1521783988139-89397d761dce"),
      after: unsplash("1512917774080-9991f1c4c750"),
    },
  },
};
