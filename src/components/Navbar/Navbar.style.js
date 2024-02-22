import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 35px;
  z-index: 100;
  transition: all ease 0.35s ease;

  &.scrolled{
    background-color: #1d293a;
  }

  & img{
    max-width: 100%;
    width: 85px;
    height:auto;
    margin-left: 2vw ;
  }

  @media (max-width: 1024px) {
    padding: 25px 25px;
  }
`;

export const HeaderButton = styled.button`
  display: none;
  cursor: pointer;
  background-color: #00CF5D;
  border: none;
  padding: 6px;
  border-radius: 5px;

  @media (max-width: 1024px) {
    display: block;
  }

  & .hamburguer-line {
    width: 100%;
    font-size: 30px;
    height: 30px;
    color: #111A28;
    transition: all 0.3s ease;
  }

  &.active {
    @media (max-width: 1024px) {
      display: block;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    background-color: #1d293a;
    padding: 25px;
    position: absolute;
    top: -500px;
    left: 0;
    right: 0;
    transition: all 0.4s ease;
    border-radius: 4px;
    margin: 0 25px;
  }

  &.show {
    @media (max-width: 1024px) {
      top: 100%;
    }
  }

  & h2{
    margin: 0 16px;

    @media(max-width: 1024px) {
      margin: 5px 0;
      padding: 5px 0;
    }
  }

  & h2 a {
    font-family: "Lato", sans-serif;
    font-weight: 400; 
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    transition: 300ms all ease;
    color: #fff;
    background-color: none;
    cursor: pointer;

    &:hover {
      color: #00CF5D;
    }

    &.active {
      color: #00CF5D;
    }
  }

  & h2:last-of-type {
    a {
      font-family: "Lato", sans-serif;
      font-weight: 400;
      color: #fff;
      display: inline-block;
      border: 2px solid #00cf5d;
      padding: 8px 15px;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 400;
      text-transform: uppercase;
      transition: 300ms all ease;

      &:hover {
      color: #00CF5D;
    }
    }
  }

  
`;
