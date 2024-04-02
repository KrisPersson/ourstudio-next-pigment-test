"use client";

import Image from "next/image";
import { css, styled } from "@pigment-css/react";
import { containerClass } from "../../page";

import Nav from "../Nav/Nav";
import Link from "next/link";

import { useState } from "react";
import { size } from "@/app/helpers/index";

export default function Header() {
  const headerClass = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const logoContainer = css({
    position: "relative",
    minWidth: "139px",
    minHeight: "25px",
    "@media (min-width: 768px)": {
      minWidth: "161px",
      minHeight: "29px",
    },
  });

  const hamburgerIcon = css({
    display: "block",
    "@media (min-width: 1000px)": {
      display: "none",
    },
    cursor: "pointer",
  });

  const modalClass = css({
    background: "green",
    display: "block",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    gap: size(2),
  });

  const mailtoClass = css({
    paddingBlock: size(2),
  });

  const addressBoxClass = css({
    position: "relative",
  });

  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <header className={headerClass}>
      <div className={logoContainer}>
        <Image src="/logo/logo-white.svg" fill alt="OurStudio logo" />
      </div>
      <Nav navType="Secondary" />
      <Image
        className={hamburgerIcon}
        src="/icons/hamburger-menu-white.svg"
        width={32}
        height={18}
        alt="Show Hamburger Menu"
      />

      <div className={modalClass} aria-label="Modal">
        <div className={containerClass}>
          <Nav navType="Primary" />
          <div className={addressBoxClass}>
            <Link className={mailtoClass} href="mailto:hello@ourstudio.se">
              hello@ourstudio.se
            </Link>
            <p>Our Studio</p>
            <p>Kungsgatan 57</p>
            <p>411 15 Göteborg</p>
          </div>
        </div>
      </div>
    </header>
  );
}
