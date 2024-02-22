interface Props {
  showDropdown: boolean;
}
const NavDropdown = ({ showDropdown }: Props) => {
  return (
    <div
      className={`position-absolute bg-snow-drift z-3 container-fluid ${
        showDropdown ? 'd-auto' : 'd-none'
      }`}
    >
      <div className="row" style={{ height: '89vh' }}>
        <div className="col-md-9">
          <div className="row p-5">
            <div className="col">
              <h5 className="fs-5 fw-semibold">Category</h5>
              <div className="d-flex flex-column gap-3">
                <a href="/shop/skin-care" className="fs-6 fw-lighter">
                  Shop All
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Cleanse
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Exfoliate
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Treat & Masque
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Tone
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Hydrate
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Eyes & Lips
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Sun Care
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Shave
                </a>
              </div>
            </div>
            <div className="col">
              <h5 className="fs-5 fw-semibold">Skin Type</h5>
              <div className="d-flex flex-column gap-3">
                <a href="#" className="fs-6 fw-lighter">
                  Normal
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Dry
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Oily
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Combination
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Sensitive
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Mature
                </a>
              </div>
            </div>
            <div className="col">
              <h5 className="fs-5 fw-semibold">Body</h5>
              <div className="d-flex flex-column gap-3">
                <a href="/shop/skin-care" className="fs-6 fw-lighter">
                  Shop All
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Body Cream, Oils, Scrubs
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Shower-gel, Shampoo, Soap
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Balms
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Hands & Feet
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Sun Protection
                </a>
              </div>
            </div>
            <div className="col">
              <h5 className="fs-5 fw-semibold">Fragrances</h5>
              <div className="d-flex flex-column gap-3">
                <a href="/shop/skin-care" className="fs-6 fw-lighter">
                  Shop All
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Sauna
                </a>
                <a href="#" className="fs-6 fw-lighter">
                  Essential Oils
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 d-md-block d-none">
          <img
            src="/img/products/product-1.png"
            alt="Product Image"
            className="w-100 h-100 object-fit-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
