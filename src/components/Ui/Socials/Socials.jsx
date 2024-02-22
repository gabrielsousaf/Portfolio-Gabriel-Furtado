import {Social, SocialLinks} from './Socials.style'

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Socials = () => {
  return(
    <Social>
      <SocialLinks href="https://github.com/gabrielsousaf" target="_blank" rel="noreferrer">
        <FaGithub className="social-icon" />
      </SocialLinks>
      <SocialLinks href="https://www.linkedin.com/in/gabriel-furtado-souza/" target="_blank" rel="noreferrer">
        <FaLinkedin className="social-icon" />
      </SocialLinks>
      <SocialLinks href="https://www.instagram.com/gabriel.dev.tech/" target="_blank" rel="noreferrer">
        <FaInstagram className="social-icon" />
      </SocialLinks>
      <SocialLinks href="mailto:gabriell.furtado2002@gmail.com">
        <MdEmail className="social-icon" />
      </SocialLinks>
    </Social>
  )
}

export default Socials