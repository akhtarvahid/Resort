import styled from "styled-components";

export const MyFooter = styled.div`
  padding: 10px;
  background: #626d6f;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 800;
  font-family: cursive;
  a {
    img {
      height: 50px;
      border-radius: 50%;
      margin: 3px;
    }
  }
  a:nth-child(2) img,
  a:nth-child(3) img,
  a:nth-child(4) img {
    height: 50px;
  }
`;
