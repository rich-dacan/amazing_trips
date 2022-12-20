import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw !important;
  padding: 0 120px;

  &::-webkit-scrollbar {
    width: 0px;
  }
  @media screen and (max-width: 375px) {
    margin-top: 3.2rem !important;
  }
  
`;

interface SectionProps {
  background?: string;
  inset?: boolean;
  inPage?: boolean;
  minHeight?: number;
  first?: boolean;
}

export const Section = styled.div<SectionProps>`
  width: 100%;
  height: 100%;
  background: ${props => (props.background ? props.background : '#fff')};

  margin-top: ${props => (props.inPage ? '2rem' : '0')};
  ${props => props.minHeight && `min-height: ${props.minHeight}rem;`}
  ${props =>
    props.inset &&
    `-webkit-box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.3);`
  }
`;

interface ContentProps {
  padding?: string;
  mobileFlex?: boolean;
}

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 5rem;
  padding: ${props => (props.padding ? props.padding : '1rem 5rem')};

  @media screen and (max-width: 600px) {
    padding: ${props => (props.mobileFlex ? '0' : '1rem')};
  }
`;

export const ContentPage = styled(Content)`
  flex-direction: column;
  gap: 2rem;
`;
