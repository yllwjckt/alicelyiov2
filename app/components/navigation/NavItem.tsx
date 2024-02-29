import * as React from "react";
import Link from "next/link";

const links = [
  {
    url: "/work",
    title: "My Work"
  },
  {
    url: "/about",
    title: "About Me"
  },
  {
    url: "/contact",
    title: "Contact Me"
  }
]

export const NavItem = ({ i, onClick }: any) => {
  const linkRef = links[i];

  return (
    <Link onClick={onClick} href={linkRef.url}>{linkRef.title}</Link>
  );
};