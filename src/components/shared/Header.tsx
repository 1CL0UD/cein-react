import { useState } from 'react';
import LanguageSelector from '../ui/LanguageSelector';
import SearchScreen from './SearchScreen';
import NavDropdown from './NavDropdown';
import MobileNav from './MobileNav';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearchScreen, setShowSearchScreen] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const toggleDropdown = () => setShowDropdown((prevState) => !prevState);
  const toggleSearchScreen = () =>
    setShowSearchScreen((prevState) => !prevState);
  const toggleMobileNav = () => setShowMobileNav((prevState) => !prevState);
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow bg-body-tertiary px-3 py-0">
        <div className="container-fluid justify-content-between">
          <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="nav-link" onClick={toggleDropdown}>
                  Shop
                </button>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Journal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Stores
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-row d-lg-none d-block align-items-center gap-sm-4 gap-3">
            <button
              className="navbar-toggler border-0"
              type="button"
              onClick={toggleMobileNav}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <button type="button" className="btn border-0 p-0">
              <i
                className="bi bi-search d-md-none d-block"
                onClick={toggleSearchScreen}
              ></i>
            </button>
          </div>

          <a className="navbar-brand m-0" href="/">
            <img src="/img/Logo.svg" alt="Cein" width="80" height="64" />
          </a>
          <div className="d-flex flex-row align-items-center justify-content-center gap-sm-4 gap-3">
            <button
              type="button"
              className="btn border-0 p-0"
              onClick={toggleSearchScreen}
            >
              <i className="bi bi-search d-md-block d-none"></i>
            </button>
            <LanguageSelector />
            <i className="bi bi-heart"></i>
            <a href="/login">
              <i className="bi bi-person d-md-block d-none"></i>
            </a>
            <a href="/cart">
              <i className="bi bi-cart"></i>
            </a>
          </div>
        </div>
      </nav>
      <NavDropdown showDropdown={showDropdown} />
      <SearchScreen
        showSearchScreen={showSearchScreen}
        toggleSearchScreen={toggleSearchScreen}
      />
      <MobileNav showMobileNav={showMobileNav} />
    </>
  );
};

export default Header;
