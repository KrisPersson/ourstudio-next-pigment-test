import Header from "./components/Header/Header";
import { css } from "@pigment-css/react";

export const containerClass = css({
  minHeight: "inherit",
  padding: "var(--container-gutter-block) var(--container-gutter-inline)",
  position: "relative",
  boxSizing: "border-box",
});

export default function Home() {
  return (
    <div className={containerClass}>
      <Header />
      <main></main>
    </div>
  );
}
