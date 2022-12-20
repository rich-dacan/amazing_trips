import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Carousel } from '../components/Carousels'
import { Container, Content, Section } from '../styles/Home'
import { Navbar } from '../components/Navbar'
import { data } from '../utils'
import { TopBanner } from '../components/TopBanner'

const inter = Inter({ subsets: ['latin'] })
// const inter = Roboto({weight: '500'})

export default function Home() {
  return (
    <>
      <Navbar />
        <TopBanner />
      <Container>


        <Section>
          <Content>
            {/* <h1>Amazing Trips</h1> */}
          </Content>
        </Section>

        <Section>
          <Content>
            <Carousel data={data} />
          </Content>
        </Section>
      </Container>

    </>
  )
}
