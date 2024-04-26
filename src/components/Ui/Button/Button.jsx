import {Buttons} from './Button.style'

const Button = () => {
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
      <a href="https://drive.google.com/file/d/1JobNqtQ2zYMtAp7PTsltzerLhpMJMRNT/view?usp=sharing" target="_blank" rel="noreferrer">Curriculo</a>
      <a onClick={handleMenuItemClick} href="#about">Sobre</a>
    </Buttons>
  )
}

export default Button
