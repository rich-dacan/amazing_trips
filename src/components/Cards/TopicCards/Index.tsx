import Image from "next/image";
import React from "react";
import { Container } from "./styles";
import { CardType } from "./types";

interface Props {
  data: CardType;
}

export const TopicCard: React.FC<Props> = ({ data }) => {

  return (
    <Container>
        <Image
          src={data.url}
          alt={data.title}
          height={150}
          width={250}
        />
        <h2>{data.title}</h2>
    </Container>
  );
};