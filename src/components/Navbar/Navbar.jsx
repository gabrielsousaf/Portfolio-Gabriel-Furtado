import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiAlignJustify, BiX } from 'react-icons/bi';
import Logo from '../../assets/logo.png';
import { Header, HeaderButton } from './Navbar.style';

import useActiveSection from '../../hooks/UseActiveSection';
import useScrollStatus from '../../hooks/UseScrollStatus';
import NavMenu from './NavMenu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isScrolled = useScrollStatus(() => {
    if (showMenu) setShowMenu(false);
  });

  const activeSection = useActiveSection();

  const handleMenuToggle = () => {
    setShowMenu((prev) => !prev);
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

      <NavMenu 
        showMenu={showMenu} 
        activeSection={activeSection} 
        handleMenuItemClick={handleMenuItemClick} 
      />

    </Header>
  );
};

export default Navbar;
