import styled from "styled-components";

export const Container = styled.div`

  .swiper {
    padding: 1.5rem;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--color-primary);
    border-radius: 50px;
    width: 30px;
  }

  .swiper-button-prev {
    color: var(--color-primary);
    padding-right: 15px;
  }

  .swiper-button-next {
    color: var(--color-primary);
    padding-left: 15px;
  }

`

