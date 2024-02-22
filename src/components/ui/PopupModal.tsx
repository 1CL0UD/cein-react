import Button from './Button';

const PopupModal = () => {
  return (
    <div
      className="modal fade"
      id="popupModal"
      tabIndex={-1}
      aria-labelledby="popupModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bg-transparent border-0">
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 p-5 py-3 bg-snow-drift order-md-0 order-1">
                  <h1 className="fs-1">A Gift Is Waiting For You</h1>
                  <p className="fs-6">
                    Sign up for our newsletter and get a free travel size worth
                    $10 for your next order over $60.
                  </p>
                  <form action="">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control bg-white p-3
                             rounded-0 border-2 border-dark"
                        placeholder="Your Email"
                        aria-label="Your Email"
                        aria-describedby="email-input"
                      />
                    </div>
                  </form>
                  <Button>Subscribe Newsletter</Button>
                  <p className="fs-6 mt-2 mb-0">
                    I have acknowledged the Data Protection Notice and I consent
                    to the processing of my data for receiving the newsletter
                    and relevant analysis.
                  </p>
                </div>
                <div className="col-md-6 p-0 position-relative d-flex order-md-1 order-0 justify-content-end">
                  <button
                    type="button"
                    className="btn-close m-3 position-absolute z-3"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <img
                    src="/img/pop-up/pop-up-1.png"
                    alt="Modal Image"
                    className="w-100 object-fit-cover z-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
