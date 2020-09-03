import styled from "styled-components";
import { variant } from "styled-system";

const Button = styled("button")(
  {
    appearance: "none",
    fontFamily: "inherit",
  },
  variant({
    variants: {
      primary: {
        color: "#fff",
        bg: "#a259ff",
        px: "40px",
        py: "20px",
        fontSize: "16px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
      },
      secondary: {
        color: "#a259ff",
        bg: "#fff",
        px: "40px",
        py: "20px",
        fontSize: "16px",
        fontWeight: "bold",
        border: "1px solid #a259ff",
        borderRadius: "12px",
        cursor: "pointer",
      },
    },
  })
);

export default Button;
