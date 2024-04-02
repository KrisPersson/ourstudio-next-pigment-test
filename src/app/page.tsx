import Header from "./components/Header/Header";
import { css } from "@pigment-css/react";

export const containerClass = css({
  minHeight: "inherit",
  padding: "var(--gutter-block) var(--gutter-inline)",
});

export default function Home() {
  return (
    <div className={containerClass}>
      <Header />
      <main></main>
    </div>
  );
}
