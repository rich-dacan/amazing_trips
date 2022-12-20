import Image from "next/image";
import React from "react";
import { Container } from "./styles";

interface Props {
  data: {
    title: string;
    url: string;
  }[];
}


export const Card: React.FC<Props> = props => {

  return (
    <>
      {props.data.map((info, index) => (
        <div key={index}>
          <h2>{info.title}</h2>
          <Image
            src={info.url}
            alt={info.title}
            height={250}
            width={250}
          />
        </div>
      ))}
    </>
  );
};