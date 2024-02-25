import styled from "styled-components";

export const Container =  styled.section`
  display: flex;
  flex-wrap:wrap;
  margin-top: 2rem;
  justify-content: center;
`

export const Content = styled.div`
  background-color: #1d293a;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  width: 150px;
  border-radius: 20px;
  margin: 20px;
  cursor: pointer;
  transition: .3s all ease;
  box-shadow: 0 0 20px rgba(48, 46, 77, 0.15);
  opacity: 1;

  @media(max-width: 468px){
    height: 100px;
    width: 100px;
  }

  &:hover{
    box-shadow: -6px 6px 0 0 #00CF5D;
  }
  
  & img{
    max-width: 70px;
    min-width: 70px;
    width: 100%;

    @media(max-width: 468px){
      max-width: 40px;
      min-width: 40px;
    } 
  }
`

export const Title = styled.h4`
  color: #fff;
  font-weight: 600;
  margin-top: 10px;
  text-transform:uppercase;

  @media(max-width: 468px){
    font-size: 12px;
  }
`