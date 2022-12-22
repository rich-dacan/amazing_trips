import type { AppProps } from 'next/app';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { amazingTrip } from '../services/prismic';

import GlobalStyle from '../styles/global';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { client } from '../services/prismic';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>    
      <PrismicProvider client={client} internalLinkComponent={(props) => <Link {...props} />}>
        <PrismicPreview repositoryName={amazingTrip}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
      <GlobalStyle />
    </>
  )
};
