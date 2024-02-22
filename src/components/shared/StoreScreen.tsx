import Button from '../ui/Button';

interface Props {
  showStores: boolean;
}
const StoreScreen = ({ showStores }: Props) => {
  return (
    <div
      className={`position-absolute border-top border-2 border-secondary bg-white z-3 container-fluid ${
        showStores ? 'd-auto' : 'd-none'
      }`}
    >
      <div className="row" style={{ minHeight: '89vh' }}>
        <div className="col-md-3 border-2 border-md-0 border-end border-secondary d-md-block d-none">
          <div className="d-flex flex-column px-4 pt-5">
            <form action="">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control bg-transparent rounded-0 border-top-0 border-start-0 border-end-0 border-2 border-dark"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="email-input"
                />
                <button
                  className="btn rounded-0 border-dark border-top-0 border-start-0 border-end-0 border-bottom border-2"
                  type="button"
                  id="button-addon2"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </form>
            <h5 className="fs-5 text-secondary mb-3">District</h5>
            <p className="fs-6 text-secondary mb-2">New York</p>
            <p className="fs-6 text-secondary mb-2">California</p>
            <p className="fs-6 text-secondary mb-2">Texas</p>
            <p className="fs-6 text-secondary mb-2">Kansas</p>
          </div>
        </div>
        <div className="col-md-5 d-flex flex-column gap-4 p-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <div className="d-flex flex-column">
              <label
                className="form-check-label fw-bold"
                htmlFor="flexRadioDefault1"
              >
                St. Spring Valley
              </label>
              <p className="fs-6 mb-0">
                8823 Sycamore St.Spring Valley, NY 10977
              </p>
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <div className="d-flex flex-column">
              <label
                className="form-check-label fw-bold"
                htmlFor="flexRadioDefault2"
              >
                Westbury
              </label>
              <p className="fs-6 mb-0">8471 Depot Ave Westbury, NY 11590</p>
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <div className="d-flex flex-column">
              <label
                className="form-check-label fw-bold"
                htmlFor="flexRadioDefault3"
              >
                Brooklyn
              </label>
              <p className="fs-6 mb-0">480 Second St.Brooklyn, NY 11224</p>
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault4"
            />
            <div className="d-flex flex-column">
              <label
                className="form-check-label fw-bold"
                htmlFor="flexRadioDefault4"
              >
                Buffalo
              </label>
              <p className="fs-6 mb-0">444 NE. Old York St.Buffalo, NY 14221</p>
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault5"
            />
            <div className="d-flex flex-column">
              <label
                className="form-check-label fw-bold"
                htmlFor="flexRadioDefault5"
              >
                Webster
              </label>
              <p className="fs-6 mb-0">613 Cemetery Ave Webster, NY 14580</p>
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault6"
            />
            <div className="d-flex flex-column">
              <label
                className="form-check-label fw-bold"
                htmlFor="flexRadioDefault6"
              >
                Brooklyn
              </label>
              <p className="fs-6 mb-0">419 Schoolhouse St.Brooklyn, NY 11236</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex flex-column flex-fill px-0">
          <img
            src="/img/store-map.png"
            alt="Store Map"
            className="w-100 flex-grow-1 object-fit-cover"
          />
          <div className="d-flex flex-column  bg-snow-drift px-3 py-5">
            <p className="fs-6 fw-semibold mb-0">St. Spring Valley</p>
            <p className="fs-6 mb-0">
              8823 Sycamore St.Spring Valley, NY 10977
            </p>
            <p className="fs-6 mb-0">(214) 579-0909</p>
            <p className="fs-6 mb-0">st.springvalley@cein.com</p>
          </div>
          <Button>Take me there</Button>
        </div>
      </div>
    </div>
  );
};

export default StoreScreen;
