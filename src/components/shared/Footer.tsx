const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-4 row order-md-1 order-2">
            <div className="footer-social">
              <img
                src="/img/Logo.svg"
                alt="Cein"
                className="mb-4 d-none d-sm-block"
              />
              <p>Follow Us</p>
              <div className="d-flex flex-row gap-3">
                <i className="bi bi-twitter"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
              </div>
            </div>
          </div>
          <div className="col-md-8 row d-md-grid d-none order-md-2 order-1">
            <div className="row">
              <div className="col-3">
                <h4 className="fs-4">Products</h4>
                <p>Inner Care</p>
                <p>Skin Care</p>
                <p>Calp Care</p>
              </div>
              <div className="col-3">
                <h4 className="fs-4">Guides</h4>
                <p>News</p>
                <p>Vision</p>
                <p>Q&A</p>
              </div>
              <div className="col-3">
                <h4 className="fs-4">Service</h4>
                <p>About Concierge</p>
                <p>Online Consultation</p>
                <p>Market</p>
              </div>
              <div className="col-3">
                <h4 className="fs-4">Contact</h4>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
          <div className="col-md-8 row d-md-none d-grid order-md-2 mb-4 order-1">
            <div
              className="accordion border-0"
              id="accordionPanelsStayOpenExample"
            >
              <div className="accordion-item bg-dark text-light">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button bg-dark text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Products
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body d-flex flex-column gap-2">
                    <a href="#" className="nav-link">
                      Inner Care
                    </a>
                    <a href="#" className="nav-link">
                      Skin Care
                    </a>
                    <a href="#" className="nav-link">
                      Calp Care
                    </a>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-dark text-light">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button bg-dark text-light collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Guides
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body d-flex flex-column gap-2">
                    <a href="#" className="nav-link">
                      News
                    </a>
                    <a href="#" className="nav-link">
                      Vision
                    </a>
                    <a href="#" className="nav-link">
                      Q&A
                    </a>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-dark text-light">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button bg-dark text-light collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Service
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body d-flex flex-column gap-2">
                    <a href="#" className="nav-link">
                      About Concierge
                    </a>
                    <a href="#" className="nav-link">
                      Online Consultation
                    </a>
                    <a href="#" className="nav-link">
                      Market
                    </a>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-dark text-light">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button bg-dark text-light collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    Contacts
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body d-flex flex-column gap-2">
                    <a href="#" className="nav-link">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 text-secondary">
          <div className="col-md-4 row order-2 order-md-1">
            <small>CEIN. 2019 KINS All rights reserved.</small>
          </div>
          <div className="col-md-8 order-1 order-md-2 mb-4">
            <small className="me-4">Company Profile</small>
            <small className="me-4">Privacy policy</small>
            <small className="me-4">Cancellation policy</small>
            <small className="me-4">Terms of service</small>
            <small className="">Refund/Return Policy</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
