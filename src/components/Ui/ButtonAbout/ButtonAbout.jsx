import {Buttons} from './ButtonAbout.style'

const ButtonAbout = () => {
  const handleMenuItemClick = (e) => {
    e.preventDefault()
    const hash = e.target.hash
    const element = document.querySelector(hash);
    const offsetTop = element.offsetTop
    if (typeof window !== `undefined`) {
      window.scrollTo({
        top: offsetTop,
        left: 0,
        behavior: "smooth",
      })
    }
  };

  return (
    <Buttons>
      <a href="https://drive.google.com/file/d/1eUOin6BFkSClpazqolH1f74n1LlyrXgU/view?usp=sharing" target="_blank" rel="noreferrer">Curriculo</a>
      <a onClick={handleMenuItemClick} href="#skills">Skills</a>
    </Buttons>
  )
}

export default ButtonAbout