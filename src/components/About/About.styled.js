import styled from "styled-components";
import {
  media,
  setBorder,
  setColor,
  setLetterSpacing,
  setRem,
} from "../../styles";

export const AboutCenter = styled.div`
  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }
  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }
  .about-info {
    p {
      ${setLetterSpacing(2)};
    }
  }
  width: 90vw;
  margin: 0 auto;
  ${media.desktop`
.about-img, .about-info {
    padding: ${setRem(0)}
}
width: 100vw;
max-width: 1170px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-column-gap: ${setRem(32)};
.about-img, .about-info {
    align-self: center;
}
.about-info {
    p{
        width: 80%;
    }
}
`}
`;

export const InnerZoomBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: black;
    z-index:1;
    border: 5px solid;
`;

export const CrossMark = styled.div`
    position: absolute;
    right: -22px;
    top: -22px;
    color: red;
    background: white;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`