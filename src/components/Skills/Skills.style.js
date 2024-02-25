import styled from "styled-components";

export const ContainerAll = styled.div`

`

export const Container = styled.div`
  padding: 6rem 2rem 6rem;

  @media(max-width: 768px){
    padding: 7rem 1rem;
  }
`

export const Title = styled.h2`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content:center;
  font-size: 3rem;

  @media(max-width: 468px) {
    font-size: 2.5rem;
  }
`

export const Content = styled.p`
    margin-top: 2rem;
  font-size: 18px;
  line-height: 1.5;
  color: #fff;
`