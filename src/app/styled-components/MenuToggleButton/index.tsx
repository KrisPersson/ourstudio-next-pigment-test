import { size } from "../../helpers/index";
import { styled } from "@pigment-css/react";

export const MenuToggleButton = styled("button")({
  position: "fixed",
  left: "var(--container-gutter-inline)",
  top: size(14.75),
  backgroundColor: "var(--c-secondary-default)",
  display: "none",
  alignSelf: "center",
  maxWidth: "fit-content",
  border: "none",
  padding: `${size(2.5)} ${size(3.25)}`,
  gap: size(2.75),
  cursor: "pointer",
  borderRadius: "max(100vh, 100vw)",
  "@media (min-width: 768px)": {
    display: "flex",
  },
});
