import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 70vh;
  /* background-color: var(--color-primary); */
  background: linear-gradient(170deg, #075949 0%, #fff 97%);

  > h1 {
    width: 100%;
    text-align: center;
    padding-top: 20px;
    color: var(--color-pure-white);
  }

`
export const Salutation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30vh;
  margin-top: 50px;
  color: var(--color-pure-white);
  font-size: 2rem;

  > img {
    margin-top: 20px;
    border-radius: 10px;
    filter: drop-shadow(5px 5px 10px #000);

    @media (max-width: 800px) {
      width: 70vw;
      height: auto;
    }
  }
`

export const Content = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;

  > label {
    background-color: var(--color-pure-white);
    padding: 12px 8px;
    border-radius: 8px;

    > button {
      cursor: pointer;
    }
  }


`