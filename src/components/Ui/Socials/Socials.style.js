import styled from "styled-components";

export const Social = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

export const SocialLinks = styled.a`
  display: flex;
  color: #FFFFFF;
  transition: .3s all ease;

  &:hover {
    color: #00CF5D;
  }

  & .social-icon{
    font-size: 35px;
    margin-right: 20px;

    @media(max-width: 468px){
      font-size: 25px;
    }
  }
`