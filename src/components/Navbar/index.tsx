import React from 'react';
import { Container } from './styles'
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { SiYourtraveldottv } from 'react-icons/si';

export const Navbar:React.FC = () => {
  return (
    <Container>
      <AiOutlineMenuUnfold />
      <span>
        <SiYourtraveldottv />
      </span>
    </Container>
  );
};
