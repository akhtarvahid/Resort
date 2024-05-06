import styled from "styled-components";
import {
  setRem,
  setColor,
  setFont,
  setBorder,
  setLetterSpacing,
  setTransition,
} from "./../../styles";

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFont.main};
  padding: ${setRem(17)} ${setRem(36)};
  ${setBorder({ color: setColor.primaryColor })}
  ${setLetterSpacing(2)}
  ${setTransition({ time: "2s" })};
  border: 1px solid ${setColor.primaryColor};
  &:hover {
        background: #d45b2f;
        color: ${setColor.mainWhite};
        box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
        transition: all 0.5s ease-in-out;
  }
  ${(props) =>
   `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`};
  text-decoration: none;
  cursor: pointer;
`;

export const SmallBtn = styled(PrimaryBtn)`
  padding: ${setRem(9)} ${setRem(12)};
`;
