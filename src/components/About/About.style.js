import styled from "styled-components";

export const Section = styled.div`
  color: white;
`

export const Container = styled.div`
  padding: 6rem 2rem 6rem;

  @media(max-width: 768px){
    padding: 6rem 1rem;
  }
`

export const Title = styled.h2`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  font-size: 3rem;

  @media(max-width: 468px){
    font-size: 2.5rem;
  }
`

export const Text = styled.p`
  margin-top: 2rem;
  font-size: 18px;
  line-height: 1.5;

  & span{
    color: #00cf5d;
  }
`
