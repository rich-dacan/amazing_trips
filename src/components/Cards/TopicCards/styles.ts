import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transition: all ease-in-out 0.25s;
  background-color: #ccc;
  filter: drop-shadow(0px 5px 10px #000) brightness(1.3);
  border-radius: 8px;

  &:hover {
    transform: scale(1.03);
  }

  > h2 {
    width: 100%;
    margin-top: 20px;
    text-align: center;
    /* color: var(--color-pure-white); */
    font-size: 1rem;
  }
` 