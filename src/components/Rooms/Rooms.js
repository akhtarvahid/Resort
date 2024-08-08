import React, { useState } from "react";
import Room from "./Room/Room.styled";
import Section from "../common/Section";
import Title from "../common/Title";
import { roomsData } from "../../utils/rooms-data";
import { setColor } from "../../styles";
import { RoomsCenter } from "./Room.styled";

const Rooms = () => {
  const [rooms] = useState(roomsData || []);
  return (
    <Section color={setColor.lightGrey}>
      <Title title="Luxurious rooms" center />
      <RoomsCenter>
        {rooms.map((room) => {
          return <Room key={room.id} room={room} />;
        })}
      </RoomsCenter>
    </Section>
  );
};

export default Rooms;
