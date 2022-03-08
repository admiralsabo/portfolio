import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${(props) => props.theme.primary};
  }
  h2 {
    margin-top: -30px;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
  }
  p {
    margin-top: -20px;
    color: ${(props) => props.theme.primary};
    padding-left: 370px;
    padding-right: 370px;
    text-align: center;
  }
  @media (max-width: 768px) {
    p {
      padding-left: 0;
      padding-right: 0;
    }
  }
  @media (max-width: 1024px) {
    p {
      padding-left: 30px;
      padding-right: 30px;
    }
  }
`;
