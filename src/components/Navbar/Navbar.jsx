import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiAlignJustify, BiX } from 'react-icons/bi';
import Logo from '../../assets/logo.png';
import { Header, HeaderButton, Nav } from './Navbar.style';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

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

  useEffect(() => {
  const sections = document.querySelectorAll('div[id], section[id], main[id]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    },
    {
      threshold: 0.7,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);


  const handleMenuToggle = () => {
    setShowMenu((prevState) => !prevState);
  };

  const handleMenuItemClick = (e) => {
    setShowMenu(false);
    e.preventDefault()
    const hash = e.target.hash
    setShowMenu(false);
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
          <a onClick={handleMenuItemClick} href='#home' className={activeSection === '#home' ? 'active' : ''} >Home</a>
        </h2>
        <h2>
          <a onClick={handleMenuItemClick} href='#about' className={activeSection === '#about' ? 'active' : ''}>Sobre</a>
        </h2>
        <h2>
          <a onClick={handleMenuItemClick} href='#skills' className={activeSection === '#skills' ? 'active' : ''}>Skills</a>
        </h2>
        <h2>
          <a onClick={handleMenuItemClick} href="#projects" className={activeSection === '#projects' ? 'active' : ''}>Projetos</a>
        </h2>
        <h2>
          <a onClick={handleMenuItemClick} href="#contacts" className={activeSection === '#contacts' ? 'active' : ''}>Contatos</a>
        </h2>
        <h2>
          <a href="https://drive.google.com/file/d/1JobNqtQ2zYMtAp7PTsltzerLhpMJMRNT/view?usp=sharing" target='_blank' rel="noreferrer">Resume</a>
        </h2>
      </Nav>
    </Header>
  );
};

export default Navbar;
