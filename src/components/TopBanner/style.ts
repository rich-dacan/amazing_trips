import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 70vh;
  /* background: linear-gradient(170deg, #075949 0%, #fff 97%); */
  background: url('https://images.unsplash.com/photo-1671415366359-393861a1f57e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* filter: blur(1px); */
  /* filter: brightness(42%); */
  border-bottom: 10px solid var(--color-primary);

`
export const Salutation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  color: var(--color-pure-white);
  filter: brightness(100%);
  
  > h1 {
    width: 100%;
    text-align: center;
    padding-bottom: 50px;
    color: var(--color-primary);
    filter: drop-shadow(0px 10px 15px #000);
  } 

  .Typewriter__wrapper {
    font-size: 3rem;
    font-weight: 600;
    filter: drop-shadow(0px 10px 5px #000);

    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  > label {
    background-color: var(--color-pure-white);
    padding: 10px 18px;
    border-radius: 8px;
    display: flex;

    > input {
    }

    > button {
      cursor: pointer;
    }
  }

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
