import React, { useState } from "react";
import styled from "styled-components";
import Room from "./Room";
import Section from "../common/Section";
import Title from "../common/Title";
import { roomsData } from "../../utils/rooms-data";
import { setColor, media, setRem } from "../../styles";

const Rooms = () => {
  const [rooms] = useState(roomsData || []);
  return (
    <Section color={setColor.lightGrey}>
      <Title title="our rooms" center />
      <RoomsCenter>
        {rooms.map((room) => {
          return <Room key={room.id} room={room} />;
        })}
      </RoomsCenter>
    </Section>
  );
};

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  ${media.tablet`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap:${setRem(32)};
  `};
  ${media.desktop`
  width:100vw;
  max-width:1170px;
  `};
  ${media.large`
    grid-template-columns:repeat(3,1fr);
  `};
`;
export default Rooms;
