import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
  
  & a{
    display: inline-block;
    border:2px solid #00cf5d ;
    background-color:#00cf5d;
    padding: 15px 30px;
    font-size: 18px;
    text-decoration: none;
    border-radius: 4px;
    margin-right: 15px;
    color: #fff;
    font-weight: 500;
    transition:.3s all ease;

    &:hover {
      background-color: #33E07D;
    }

    @media(max-width:468px){
      padding: 12px 25px;
    }
  }

  & a:last-of-type {
    background-color: transparent;

    &:hover {
      border-color: #33E07D;
    }
  }

`