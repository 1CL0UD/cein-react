const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-toggle">
        <i className="bi bi-list"></i>
      </div>
      <div className="nav-sidebar">
        <img src="/img/Logo.svg" alt="Cein Logo" />

        <div className="nav-items">
          <a href="#" className="nav-linkss">
            Shop
          </a>
          <a href="#" className="nav-linkss">
            About Us
          </a>
          <a href="#" className="nav-linkss">
            Journal
          </a>
          <a href="#" className="nav-linkss">
            Stores
          </a>
        </div>
      </div>
      <div className="nav-logo">
        <img src="/img/Logo.svg" alt="" />
      </div>
      <div className="nav-end">
        <i className="bi bi-search"></i>
        <a href="nav-lang">EN</a>
        <i className="bi bi-heart"></i>
        <i className="bi bi-person"></i>
        <i className="bi bi-cart"></i>
      </div>
    </nav>
  );
};

export default Navbar;
