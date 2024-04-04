import { styled } from "@pigment-css/react";

export const Tagline = styled("p")(({ theme }) => ({
    color: theme.colors.secondaryDefault,
  fontSize: "0.75rem",
  "@media (min-width: 768px)": {
    fontSize: "1.25rem",
  },
});
