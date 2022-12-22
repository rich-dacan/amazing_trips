import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { NextPage } from 'next';

import { Inter } from '@next/font/google';
import { Carousel } from '../components/Carousels';
import { Container, Content, Section } from '../styles/Home';
import { Navbar } from '../components/Navbar';
import { TopBanner } from '../components/TopBanner';
import CardSlider from '../components/Carousels/CardCarousel';

import { data } from '../utils';

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {

  return (
    <>
      <Navbar />
      
      <TopBanner />
      {/* <Container>

        <Section>
          <Content>
          </Content>
        </Section>

      </Container> */}

      <Section>
        <Content>
          {data && <Carousel data={data} />}
        </Content>
      </Section>

      <Section>
        <Content>
        {data && <CardSlider data={data} />}
        </Content>
      </Section>

    </>
  );
};

export default Home;
