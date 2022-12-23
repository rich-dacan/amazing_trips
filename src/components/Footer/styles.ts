import styled from 'styled-components';

export const ContainerDesktop = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #1a1b1c;
  color: #ffffff;
  padding: 2rem;
  position: relative;
  bottom: 0;
  border-top: 10px solid var(--color-primary);

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const FooterGridDesktop = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: grid;
  width: 100%;
  padding: 2rem 3rem 0 3rem;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas:
    'telephones attendance'
    'assessoria assessoria';
  grid-row-gap: 3rem;

  footer {
    grid-area: assessoria;
    justify-self: center;
    font-size: 0.88rem;
    font-weight: 500;

    a {
      color: #3e7fc4;
      transition: all 0.25s ease-in-out;

      &:hover {
        color: #1d70bf;
      }
    }
  }
`;

export const ContactsColumn = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: telephones;
  margin-right: 4rem;

  img {
    width: max-content;
    height: max-content;
    border-radius: 10px;
    /* margin: 0 auto; */
  }

  h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  h4 {
    margin-top: 1rem;
  }

  img:last-child {
    margin-top: 3rem;
  }

  & > div:first-of-type {
    margin: 2.5rem 0 1.5rem 0;
    width: max-content;
    text-align: center;
    font-weight: bold;
    font-size: 0.9rem;
  }

  div > p {
    font-size: 0.9rem;
    line-height: 1.5rem;
    color: #fff;

    a {
      color: #fff;
      transition: 0.2s ease-in-out;

      &:hover {
        color: #6f7e86;
      }
    }
  }
`;

export const LinksColumn = styled.div`
  margin-left: 1rem;
`;

export const AttendanceRow = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 6.25rem;
  justify-content: space-between;
  padding-top: 2rem;
  margin-bottom: 3rem;

  border-bottom: 0.0625rem solid gray;
  height: 20rem;

  grid-area: attendance;

  div {
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0 0 0.5rem 0;
    border-bottom: 0.125rem solid #c1c2c3;
    width: max-content;
    padding-bottom: 0.25rem;
  }

  p {
    line-height: 1.5rem;

    a {
      color: #bec6c6;
      font-weight: 600;
      transition: all 0.25s ease-in-out;

      &:hover {
        color: #6f7e86;
      }
    }
  }

  @media screen and (max-width: 1030px) {
    column-gap: 3.125rem;
  }

  @media screen and (max-width: 959px) {
    height: 23rem;
  }
`;

export const SocialMediaSection = styled.div`
  /* display: grid;
  grid-template-columns: auto auto; */
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 1rem;

  div {
    h3 {
      margin-bottom: 1em;
    }

    a {
      margin-right: 1rem;
    }

    div {
      display: flex;
    }

    img {
      margin-right: 0.5rem;
      cursor: pointer;
    }
  }
`;

export const IconBackground = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #1a1b1c;
  color: #ffffff;
  border: 0.125rem solid #ffffff;
  margin: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: var(--color-pure-white);
  font-size: 1.5rem;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: var(--color-primary);
    /* border-color: #a3a4a4; */
    /* color: #1a1b1c; */
    /* color: var(--color-primary); */
  }

  @media screen and (max-width: 900px) {
    border-radius: 10%;
    width: 50px;

    &:hover {
    }
  }
`;

export const ContainerMobile = styled.div`
  width: 100%;
  overflow-x: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #1a1b1c;
  color: #ffffff;

  position: relative;
  bottom: 0;

  @media screen and (min-width: 901px) {
    display: none;
  }
`;

export const FooterGridMobile = styled.div`
  display: grid;
  width: 100%;
  padding-top: 1rem;

  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas:
    'social-media social-media'
    'disclaimer endeavor';
  grid-row-gap: 3rem;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    grid-area: social-media;

    border-bottom: 1px solid #313233;

    img {
      width: max-content;
      height: max-content;
      border-radius: 10px;
      /* margin: 0 auto; */
    }

    div {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }
  }

  & > div:nth-child(2) {
    a {
      font-size: 0.8rem;
      font-weight: bold;
      color: #bec6c6;

      &:hover {
        color: #6f7e86;
      }
    }
  }

  .copyright__block {
    display: flex;
    justify-content: space-around;
    width: 100vw;
    padding-bottom: 70px;

    > div {
      p {
        color: #fff;
      }

      a {
        margin-top: 100px;
      }
    }
  }

  & > div {
    text-align: center;
    width: 100%;
    padding: 0rem 0.5rem 0rem 0.5rem;
  }
`;

export const ImageEndeavorContainer = styled.div`
  position: relative;
  width: max-content;
  height: max-content;

  margin-top: 3rem;
`;

export const DownloadOurAppMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  margin-top: 25px !important;
  margin-bottom: 20px;

  p {
    font-family: 'Inter';
   font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: white;
    margin: 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (max-width: 335px) {
    flex-direction: column;
  }
`;
