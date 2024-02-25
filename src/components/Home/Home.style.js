import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
  padding: 0px 2rem;

  @media(max-width:768px){
    padding: 0px 1rem;
    margin-top: 10px;
  }
`

export const Container = styled.div`

`

export const Name = styled.h2`
  font-family: "Lato";
  color: #00cf5d;

  @media(max-width:768px){
    font-size: 21px;
  }

  & span{
    font-size: 60px;
    font-weight: 900;
    margin-bottom: 25px;
    color: #fff;

    @media(max-width:768px){
      font-size: 45px;
    }

    @media(max-width: 481px){
      font-size: 36px;
    }
  }
`
export const Title = styled.h3`
  font-size: 36px ;

  @media(max-width:768px){
    font-size: 26px;
  }

  & span{
    color: #00cf5d;
  }
`

export const Content = styled.p`
  font-weight: 400;
  margin-top: 1.25rem;
  font-size: 1.3rem ;
  max-width:800px;

  @media(max-width: 468px){
    font-size: 1.2rem ;
  }

  & span {
    color: #00cf5d;
    font-weight: 600;
  }
`
