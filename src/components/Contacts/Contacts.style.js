import styled from "styled-components";

export const Footer = styled.footer`

`

export const Container = styled.div`
  padding: 6rem 2rem 2rem;

  @media(max-width: 768px){
    padding: 6rem 1rem 2rem;
    max-width: 100rem;
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

export const ContainerAll = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 2rem;

  @media(max-width:768px){
    display: block;
  }

`

export const Content = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc(50% - 30px);
  margin-right: 30px;

  & p{
    color: #ffffffd9;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6;
  }

  & a{
    display: inline-block;
    border:2px solid #00cf5d ;
    background-color:#00cf5d;
    padding: 15px 18px;
    font-size: 18px;
    text-decoration: none;
    border-radius: 4px;
    margin-top: 25px;
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
` 

export const Contact = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc(50% - 300px);
  margin-left: 30px;

  @media(max-width:768px) {
    margin-left: 0;
    margin-top: 25px ;
  }
`

export const Ul = styled.ul`
  padding: 0;
  margin: 0;
`

export const Li = styled.li`
  margin-bottom:15px;
`

export const Social = styled.h5`
  font-weight: 900;
  line-height: 1.1;
  color: #fff;
  font-size: 25px;

  @media(max-width: 468px){
    font-size: 22px;
  }
`

export const SocialLink = styled.a`
  font-weight: 400;
  line-height: 26px;
  color:#ffffffd9;
  font-size: 18px;
  color:#00cf5d;
  transition:.3s all ease;

  &:hover {
    color: #33E07D;
  }
`
