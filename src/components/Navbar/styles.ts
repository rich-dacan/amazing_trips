import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #111;
  color: #FFF;
  font-size: 2rem;
  position: sticky;
  /* top: 0; */

  > svg {
    margin-left: 20px;
    cursor: pointer;
  }

  > span {
    display: flex;
    justify-content: center;
    width: 100%;


    > p {
      color: #FFF;
    }
  }
`