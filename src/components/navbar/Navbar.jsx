"use client";

import Link from "next/link";
import style from "./navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={style.container}>
      <Link href="/" className={style.logo}>
        bahafa
      </Link>
      <div className={style.links}>
        {links.map((link) => {
          return (
            <Link className={style.link} key={link.id} href={link.url}>
              {link.title}
            </Link>
          );
        })}
        <button
          className={style.logout}
          onClick={() => {
            console.log("logout");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
