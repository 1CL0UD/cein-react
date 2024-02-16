const LanguageSelector = () => {
  return (
    <div className="dropdown d-md-block d-none">
      <a
        className="btn btn-secondary border-0 bg-transparent text-black dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        EN
      </a>

      <ul className="dropdown-menu border-0 bg-white-50">
        <li>
          <a className="dropdown-item" href="#">
            ID
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            MY
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            FR
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
