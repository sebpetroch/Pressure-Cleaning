"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, ComponentProps } from "react";

type Props = ComponentProps<typeof Link>;

// Wraps next/link so that clicking a same-page "/#section" link always
// scrolls, even if the URL already has that hash (the browser only scrolls
// on a hash *change*, so clicking the same nav item twice in a row would
// otherwise silently do nothing).
export default function SectionLink({ href, onClick, ...props }: Props) {
  const pathname = usePathname();
  const hrefStr = href.toString();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (hrefStr.startsWith("/#") && pathname === "/") {
      const id = hrefStr.slice(2);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        if (window.location.hash !== `#${id}`) {
          window.history.pushState(null, "", hrefStr);
        }
      }
    }
    onClick?.(e);
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
