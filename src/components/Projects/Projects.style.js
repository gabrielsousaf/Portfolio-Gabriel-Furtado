import styled from "styled-components";

export const ContainerAll = styled.section`

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
`

export const ContainerProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`

export const ContainerProject = styled.div`
  background-color: #1d293a;
  border-radius: 4px;
  color: #ffffffd9;
  margin: 15px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc(33.33333% - 30px);

  @media(max-width: 768px){
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: calc(50% - 30px);
  }

  @media(max-width: 468px){
    flex-basis: 100%;
    margin: 0 0 30px;
  }
`

export const ContainerImage = styled.div`
  position: relative;

  & img{
    border-radius: 4px;
    max-width: 100%;
  }
`

export const Details = styled.div`
  padding: 25px;

  & p{
   line-height:26px;
   font-size: 18px;
   font-weight: 400;
  }
`

export const NameProject = styled.h4`
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 15px;
`

export const Description = styled.p`
  color: #ffffffd9;
  margin: 0;
`

export const ContainerLinks = styled.div`
  margin-top: 15px;
`

export const Ul = styled.ul`
  display: flex;
  font-size: 22px;
`

export const Li = styled.li`
  margin-right: 10px;

  & a{
    color: #ffffffd9;
    transition: .3s all ease;
    margin-right: 10px;

    &:hover{
      color: #33E07D;
    }
  }
`
export const Tools = styled.ul`
  display: flex;
  margin-top: 15px;

  & li{
    margin-right: 15px;
    text-decoration: none;
    font-weight: 300;
    font-size: 16px;
    color: #ffffffa6;
  }
`
