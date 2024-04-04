import Image from "next/image";
import Link from "next/link";

import { css } from "@pigment-css/react";
import { useState } from "react";
import { size } from "../../helpers/index";
import Nav from "../Nav/index";
import { MenuToggleButton } from "../../styled-components/MenuToggleButton/index";
import { Container } from "../../styled-components/Container/index";

export default function MenuModal({
  showHamburgerMenu,
  setShowHamburgerMenu,
}: {
  showHamburgerMenu: boolean;
  setShowHamburgerMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const modalClass = css({
    fontFamily: "var(--font-dmsans)",
    backgroundColor: "var(--c-primary-default)",
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    gap: size(2),
  });

  const mailtoClass = css({
    paddingBlock: size(2),
    maxWidth: "fit-content",
    color: "var(--c-primary-light)",
    "@media (min-width: 768px)": {
      textAlign: "right",
      fontSize: "1.75rem",
      lineHeight: "140%",
    },
  });

  const addressBoxClass = css({
    position: "relative",
    lineHeight: size(3),
    fontSize: "1rem",
    gridRow: "3 / -1",
    display: "flex",
    flexDirection: "column",
    gap: size(1),
    zIndex: 2,
    "@media (min-width: 768px)": {
      alignItems: "flex-end",
    },
  });

  const modalContentWrapper = css({
    position: "relative",
    display: "grid",
    height: `calc(100vh - (${size(4)} * 2))`,
    gridTemplateRows: `${size(18)} 1fr auto`,
    "@media (min-width: 768px)": {
      height: `calc(100vh - (${size(5)} * 2))`,
      gridTemplateRows: `${size(34)} 1fr auto`,
    },
  });

  const closeBtnClass = css({
    maxWidth: "fit-content",
    alignSelf: "center",
    fontFamily: "var(--font-dmsans)",
    fontSize: "17px",
    display: "flex",
    alignItems: "center",
    gap: size(1),
    position: "absolute",
    top: 0,
    right: 0,
    background: "transparent",
    border: "none",
    color: "var(--c-primary-light)",
    cursor: "pointer",
    padding: 0,
    "@media (min-width: 768px)": {
      display: "none",
    },
  });

  const addressClass = css({
    margin: 0,
    maxWidth: "fit-content",
    "@media (min-width: 768px)": {
      textAlign: "right",
      fontSize: "1.75rem",
      lineHeight: "140%",
    },
  });

  const blackLogoClass = css({
    position: "absolute",
    right: 0,
    bottom: 0,
    "@media (min-width: 768px)": {
      bottom: "unset",
      top: 0,
      width: size(10.5),
      height: size(58.5),
    },
  });

  const displayValue = showHamburgerMenu ? "block" : "none";

  return (
    <div
      className={`${modalClass}`}
      style={{ display: displayValue }}
      aria-label="Menu"
    >
      <Container>
        <div className={modalContentWrapper}>
          <MenuToggleButton
            onClick={() => setShowHamburgerMenu((prev) => !prev)}
            title="Hide/Show menu"
            style={{ top: "var(--container-gutter-block)" }}
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
          <button
            title="Close menu"
            className={closeBtnClass}
            onClick={() => setShowHamburgerMenu((prev) => !prev)}
          >
            Stäng
            <Image
              src="/icons/x-close-white.svg"
              width={28}
              height={28}
              aria-hidden={true}
            />
          </button>
          <Nav navType="Primary" />
          <div className={addressBoxClass}>
            <Link
              className={mailtoClass}
              href="mailto:hello@ourstudio.se?subject=Hello Our Studio!"
              title="Send us an e-mail"
            >
              hello@ourstudio.se
            </Link>
            <p aria-label="Address" className={addressClass}>
              Our Studio <br />
              Kungsgatan 57 <br />
              411 15 Göteborg
            </p>
          </div>
          <Image
            className={blackLogoClass}
            src="/logo/logo-black.svg"
            width={69}
            height={384}
            aria-hidden={true}
          />
        </div>
      </Container>
    </div>
  );
}
