import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiAlignJustify, BiX } from 'react-icons/bi';
import Logo from '../../assets/logo.png';
import { Header, HeaderButton, Nav } from './Navbar.style';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (showMenu) {
        setShowMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showMenu]);

  const handleMenuToggle = () => {
    setShowMenu((prevState) => !prevState);
  };

  const handleMenuItemClick = (e) => {
    setShowMenu(false);
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
    <Header className={isScrolled ? 'scrolled' : ''}>
      <Link>
        <img src={Logo} alt="Logo" />
      </Link>
      <HeaderButton className={`hamburguer ${showMenu ? 'active' : ''}`} onClick={handleMenuToggle}>
        {showMenu ? <BiX className="hamburguer-line" /> : <BiAlignJustify className="hamburguer-line" />}
      </HeaderButton>

      <Nav id="navbar" className={showMenu ? 'show' : ''}>
      <h2>
          <a onClick={handleMenuItemClick} href='#home'>Home</a>
        </h2>
        <h2>
          <a onClick={handleMenuItemClick} href='#about'>Sobre</a>
        </h2>
        <h2>
          <a onClick={handleMenuItemClick} href='#skills'>Skills</a>
        </h2>
        <h2>
          <a onClick={handleMenuItemClick} href="#projects">Projetos</a>
        </h2>
        <h2>
          <a onClick={handleMenuItemClick} href="#contacts">Contatos</a>
        </h2>
        <h2>
          <a href="https://drive.google.com/file/d/1JobNqtQ2zYMtAp7PTsltzerLhpMJMRNT/view?usp=sharing" target='_blank' rel="noreferrer">Resume</a>
        </h2>
      </Nav>
    </Header>
  );
};

export default Navbar;
