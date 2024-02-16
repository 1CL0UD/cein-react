import LanguageSelector from '../ui/LanguageSelector';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-3 py-0">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
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

        <a className="navbar-brand justify-item m-0" href="#">
          <img src="/img/Logo.svg" alt="Cein" width="80" height="64" />
        </a>
        <div className="d-flex flex-row align-items-center justify-content-center gap-4">
          <i className="bi bi-search d-md-block d-none"></i>
          <LanguageSelector />
          <i className="bi bi-heart"></i>
          <i className="bi bi-person d-md-block d-none"></i>
          <i className="bi bi-cart"></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
