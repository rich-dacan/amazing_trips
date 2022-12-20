import { createGlobalStyle } from 'styled-components';

const GlobalStyled:any = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: var(--fonts);
  }

  @media(max-width: 899px){
    div#__next{
      min-width: 100vw;
    }
  }

  html, body, #root {
    width: 100%;
    background: var(--color-background);
    font-family: var(--fonts);
    scroll-behavior: smooth;
  }

  button, input, a {
    font-family: var(--fonts) ;
    text-decoration: none;
  }

  p {
    color: var(--color-text);
  }

  a {
    -webkit-tap-highlight-color: transparent;
  }

  &::-webkit-scrollbar {
      width: 8px;
      background: #000;
    }              
  &::-webkit-scrollbar-thumb{
    background: var(--color-primary);
    border-radius: 2px;
  }  
  ::-webkit-scrollbar-track {
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
    background-color: var(--color-primary);
  }

  :root {
    font-size: 16px;
    --color-pure-white: #FFFFFF;
    --color-shimmer: #f6f7f8;
    --color-primary: #075949;
    --color-primary-dark: #f26202;
    --color-grey: #545454;
    --color-agile: #ae0c08;
    --color-excel: #00ad2e;
    --color-power: #c9bf03;
    --color-lider: #14235e;
    --color-gestao: #667fcc;
    --color-financas: #124f07;
    --color-empreendedorismo: #000;
    --color-tech: #da7804;
    --color-career: #3c0348;
    --color-dark: #191919;
    --color-secondary: #000;
    --color-title: rgba(0, 0, 0, 0.7);
    --color-text:  rgba(0, 0, 0, 0.8);

    --border-radius: 5px;
    --big-border-radius: 20px;
    --transition: .2s ease-in-out;

    --fonts: 'Montserrat' , 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --font-big-title-size: 48px;
    --font-title-size: 2rem;
    --font-subtitle-size: 1.2rem;
    --font-text-size: 1rem;
    --font-description-size: 0.9rem;
    --font-final-note: 12px;

    @media screen and (max-width: 600px) {
      --font-big-title-size: 32px;
      --font-title-size: 1.5rem;
      --font-subtitle-size: 1rem;
      --font-description-size: 0.8rem;
      --font-text-size: 1rem;
    }
  }

  @-webkit-keyframes shimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }

  @-webkit-keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default GlobalStyled;
