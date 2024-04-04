"use client";

import Image from "next/image";
import { css, styled } from "@pigment-css/react";
import { useState } from "react";
import { size } from "../../helpers/index";
import Nav from "../Nav/index";
import MenuModal from "../MenuModal/index";
import { MenuToggleButton } from "../../styled-components/MenuToggleButton/index";

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

  const menuBtnClass = css({
    maxWidth: "fit-content",
    alignSelf: "center",
    fontFamily: "var(--font-dmsans)",
    fontSize: "17px",
    alignItems: "center",
    gap: size(1),

    background: "transparent",
    border: "none",
    color: "var(--c-primary-light)",
    cursor: "pointer",
    padding: 0,

    display: "flex",
    "@media (min-width: 1000px)": {
      display: "none",
    },
  });

  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <header className={headerClass}>
      <div className={logoContainer}>
        <Image src="/logo/logo-white.svg" fill alt="OurStudio logo" />
      </div>
      <Nav navType="Secondary" />
      <button
        title="Show menu"
        className={menuBtnClass}
        onClick={() => setShowHamburgerMenu((prev) => !prev)}
      >
        <Image
          src="/icons/hamburger-menu-white.svg"
          width={32}
          height={18}
          alt="Show menu"
          aria-hidden={true}
        />
      </button>
      <MenuToggleButton
        onClick={() => setShowHamburgerMenu((prev) => !prev)}
        title="Hide/Show menu"
      >
        <Image
          src="/logo/logo-o.svg"
          width={34}
          height={26}
          alt="OurStudio logo"
        />
        <Image
          src="/icons/hamburger-menu-black.svg"
          width={34}
          height={26}
          alt="OurStudio logo"
        />
      </MenuToggleButton>
      <MenuModal
        showHamburgerMenu={showHamburgerMenu}
        setShowHamburgerMenu={setShowHamburgerMenu}
      />
    </header>
  );
}
