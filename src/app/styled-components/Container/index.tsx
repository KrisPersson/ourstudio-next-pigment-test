import { styled } from "@pigment-css/react";

export const Container = styled("div")(({ theme }) => ({
  minHeight: "inherit",
  padding: `${theme.spacing.gutter.container.block.mobile} ${theme.spacing.gutter.container.inline.mobile}`,
  position: "relative",
  boxSizing: "border-box",
  "@media (min-width: 768px)": {
    padding: `${theme.spacing.gutter.container.block.desktop} ${theme.spacing.gutter.container.inline.desktop}`,
  },
}));
