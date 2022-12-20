import styled from 'styled-components';

export const Container = styled.div`

  /* background-color: var(--color-grey); */
  height: 500px;

  > h2 {
    width: 100%;
    text-align: center;
    /* color: var(--color-pure-white); */
    font-size: var(--font-title-size);
    padding-bottom: 30px;
  }

  .test {
    /* background-color: red; */
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    /* filter: drop-shadow(5px 5px 10px #000); */
    /* -webkit-box-shadow: 0px 10px 62px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 10px 62px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 10px 62px -10px rgba(0,0,0,0.75); */
    transition: all ease-in-out .25s;
    cursor: pointer;

    &:hover {
      transform: scale(1.03);
    }

    > h3 {
      width: 100%;
      text-align: center;
      margin-top: 20px;
    }

    > img {
      /* filter: drop-shadow(5px 5px 10px #000); */
    }
  }
` 