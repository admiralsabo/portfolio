import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.primary};
  flex: 1;
  padding: 1rem 1rem;
  h1 {
    color: ${(props) => props.theme.secondary};
    padding-left: 180px;
  }
  p {
    padding-left: 180px;
    margin-top: -20px;
    color: ${(props) => props.theme.secondary};
  }
  button {
    margin-left: 180px;
    background-color: ${(props) => props.theme.primary};
    border-color: ${(props) => props.theme.secondary};
    width: 285px;
    height: 60px;
    border: 3px solid ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.secondary};
  }
  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    img {
      width: 250px;
      height: 250px;
    }
    h1 {
      padding-left: 50px;
    }
    p {
      padding-left: 50px;
    }
    button {
      margin-left: 50px;
    }
  }
  img {
    width: 250px;
    height: 250px;
    align-self: center;
    border-radius: 100%;
  }
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    img {
      width: 250px;
      height: 250px;
      margin-left: 0px;
    }
    h1 {
      padding-left: 0;
    }
    p {
      padding-left: 0;
    }
    button {
      margin-left: 0;
    }
  }
`;
