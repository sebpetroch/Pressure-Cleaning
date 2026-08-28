"use client";

import { useEffect } from "react";

// When arriving on the homepage from another page via a "/#section" link,
// the browser lands with that hash in the address bar. This scrolls to the
// target (in case the browser didn't) and then strips the hash so the URL
// settles back to a clean "/".
export default function HashCleanup() {
  useEffect(() => {
    if (!window.location.hash) return;

    const id = window.location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ block: "start" });
    }
    window.history.replaceState(null, "", window.location.pathname);
  }, []);

  return null;
}
