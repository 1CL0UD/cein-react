import { useState } from 'react';
import LanguageSelector from '../ui/LanguageSelector';
import SearchScreen from './SearchScreen';
import NavDropdown from './NavDropdown';
import MobileNav from './MobileNav';
import StoreScreen from './StoreScreen';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearchScreen, setShowSearchScreen] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showStores, setShowStores] = useState(false);
  const toggleDropdown = () => {
    setShowSearchScreen(false);
    setShowMobileNav(false);
    setShowStores(false);
    setShowDropdown((prevState) => !prevState);
  };
  const toggleSearchScreen = () => {
    setShowDropdown(false);
    setShowMobileNav(false);
    setShowStores(false);
    setShowSearchScreen((prevState) => !prevState);
  };
  const toggleMobileNav = () => {
    setShowDropdown(false);
    setShowSearchScreen(false);
    setShowStores(false);
    setShowMobileNav((prevState) => !prevState);
  };
  const toggleStores = () => {
    setShowDropdown(false);
    setShowSearchScreen(false);
    setShowMobileNav(false);
    setShowStores((prevState) => !prevState);
  };
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
                <button className="nav-link" onClick={toggleStores}>
                  Stores
                </button>
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
      <MobileNav showMobileNav={showMobileNav} toggleStores={toggleStores} />
      <StoreScreen showStores={showStores} />
    </>
  );
};

export default Header;
