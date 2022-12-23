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
import Footer from '../components/Footer';

import { useFirstPrismicDocument } from '@prismicio/react';

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {

  const [document] = useFirstPrismicDocument()

  console.log(document);

  return (
    <>
      <Navbar />

      <TopBanner />

      <main>
        <Container>
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
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default Home;
