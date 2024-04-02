import { css } from "@pigment-css/react";
import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { size } from "../../helpers/index";

export default function Nav({ navType }: { navType: "Primary" | "Secondary" }) {
  const navClassPrimary = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  });

  const navClassSecondary = css({
    display: "none",
    justifyContent: "space-between",
    "@media (min-width: 1000px)": {
      display: "flex",
    },
  });

  const ulClass = css({
    paddingLeft: 0,
    margin: 0,
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: size(5),
  });

  const ulClassPrimary = css({
    flexDirection: "column",
    fontSize: "1.5rem",
    minHeight: "100%",
    alignItems: "flex-start",
    gap: size(2),
  });

  const aClass = css({
    textDecoration: "none",
    color: "var(--c-primary-light)",
    fontSize: "1rem",
    fontFamily: "var(--font-dmsans)",
  });

  const aClassPrimary = css({
    fontSize: "1.5rem",
    width: "fit-content",
  });

  const navLinks = NavLinks.map((link) => {
    return (
      <li key={link.title}>
        <Link
          href={link.url}
          className={`${aClass} ${navType === "Primary" && aClassPrimary}`}
        >
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <nav
      className={navType === "Secondary" ? navClassSecondary : navClassPrimary}
      aria-label={navType}
    >
      {navLinks.length > 0 ? (
        <ul className={`${ulClass} ${navType === "Primary" && ulClassPrimary}`}>
          {navLinks}
        </ul>
      ) : (
        <p>No links found :(</p>
      )}
    </nav>
  );
}
