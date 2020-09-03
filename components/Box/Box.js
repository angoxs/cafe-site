import styled from "styled-components";
import { space, color, layout } from "styled-system";

const Box = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0,
    borderRadius: 12,
    s,
  },
  space,
  color,
  layout
);

export default Box;
