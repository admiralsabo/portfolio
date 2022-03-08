import styled from "styled-components";

export const Nav = styled.nav`
  overflow: hidden;
  padding: 0 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.primary};
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Menu = styled.div`
  margin-right: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    margin-top: 50px;
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;

export const MenuLinks = styled.a`
  text-transform: uppercase;
  color: ${(props) => props.theme.secondary};
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;
export const Humburger = styled.div`
  flex-direction: column;
  display: none;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background-color: ${(props) => props.theme.secondary};
    margin-bottom: 5px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
    padding: 1rem 0;
    position: fixed;
    top: 0;
    right: 30px;
  }
`;
