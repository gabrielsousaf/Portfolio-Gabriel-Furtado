import { Nav } from "./Navbar.style";
import PropTypes from "prop-types";

const NavMenu = ({ showMenu, activeSection, handleMenuItemClick }) => (
  <Nav id="navbar" className={showMenu ? 'show' : ''}>
    <h2>
      <a onClick={handleMenuItemClick} href="#home" className={activeSection === '#home' ? 'active' : ''}>Home</a>
    </h2>
    <h2>
      <a onClick={handleMenuItemClick} href="#about" className={activeSection === '#about' ? 'active' : ''}>Sobre</a>
    </h2>
    <h2>
      <a onClick={handleMenuItemClick} href="#experience" className={activeSection === '#experience' ? 'active' : ''}>Experiência</a>
    </h2>
    <h2>
      <a onClick={handleMenuItemClick} href="#skills" className={activeSection === '#skills' ? 'active' : ''}>Skills</a>
    </h2>
    <h2>
      <a onClick={handleMenuItemClick} href="#projects" className={activeSection === '#projects' ? 'active' : ''}>Projetos</a>
    </h2>
    <h2>
      <a onClick={handleMenuItemClick} href="#contacts" className={activeSection === '#contacts' ? 'active' : ''}>Contatos</a>
    </h2>
    <h2>
      <a href="https://drive.google.com/file/d/1iulKy2t-IBpeYlThASFmRlmJxdvxDbCj/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
    </h2>
  </Nav>
);

NavMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  activeSection: PropTypes.string.isRequired,
  handleMenuItemClick: PropTypes.func.isRequired,
};

export default NavMenu;
