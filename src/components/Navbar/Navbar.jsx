import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { BiAlignJustify, BiX } from "react-icons/bi"
import Logo from '../../assets/logo.png'
import { Header, HeaderButton, Nav } from './Navbar.style'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScrollToClose = () => {
      if (showMenu) {
        setShowMenu(false);
      }
    }
    window.addEventListener('scroll', handleScrollToClose);

    return () => {
      window.removeEventListener('scroll', handleScrollToClose);
    }
  }, [showMenu]);


  const handleMenuToggle = () => {
    setShowMenu((prevState) => !prevState)
  }

  const handleMenuItemClick = () => {
    setShowMenu(false);
  };

  return (
    <Header>
      <Link>
        <img src={Logo}/>
      </Link>
      <HeaderButton className={`hamburguer ${showMenu ? 'active' : ''}`} onClick={handleMenuToggle}>
        {showMenu ? <BiX className="hamburguer-line" /> : <BiAlignJustify className="hamburguer-line" />}
      </HeaderButton>

      <Nav id='navbar' className={showMenu ? 'show': ''}>
        <h2>
          <Link
          activeClassName="active"
          onClick={handleMenuItemClick}>
          Home
          </Link>
        </h2>
        <h2>
          <Link
            activeClassName="active"
            onClick={handleMenuItemClick}>
            Sobre
          </Link>
        </h2>
        <h2>
          <Link            
            activeClassName="active"
            onClick={handleMenuItemClick}>
            Skills
          </Link>
        </h2>
        <h2>
          <Link            
            activeClassName="active"
            onClick={handleMenuItemClick}>
            Projetos
          </Link>
        </h2>
        <h2>
          <Link            
            activeClassName="active"
            onClick={handleMenuItemClick}>
            Contatos
          </Link>
        </h2>

        <h2><Link>Resume</Link></h2>
      </Nav>
    </Header>
  )
}

export default Navbar