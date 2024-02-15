const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-4">
            <div className="footer-social">
              <img src="/img/Logo.svg" alt="Cein" className="mb-4" />
              <p>Follow Us</p>
              <div>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-3">
                <h4>Products</h4>
                <p>Inner Care</p>
                <p>Skin Care</p>
                <p>Calp Care</p>
              </div>
              <div className="col-3">
                <h4>Guides</h4>
                <p>News</p>
                <p>Vision</p>
                <p>Q&A</p>
              </div>
              <div className="col-3">
                <h4>Service</h4>
                <p>About Concierge</p>
                <p>Online Consultation</p>
                <p>Market</p>
              </div>
              <div className="col-3">
                <h4>Contact</h4>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 text-secondary">
          <div className="col-4">
            <small>CEIN. 2019 KINS All rights reserved.</small>
          </div>
          <div className="col-8">
            <small className="me-4">Company Profile</small>
            <small className="me-4">Privacy policy</small>
            <small className="me-4">Cancellation policy</small>
            <small className="me-4">Terms of service</small>
            <small className="me-4">Refund/Return Policy</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
