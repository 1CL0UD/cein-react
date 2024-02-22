import ButtonWithIcon from './ButtonWithIcon';

const PopupComment = () => {
  return (
    <div
      className="modal fade"
      id="commentModal"
      tabIndex={-1}
      aria-labelledby="commentModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bg-transparent border-0">
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 p-0">
                  <img
                    src="/img/products/product-1.png"
                    alt="Modal Image"
                    className="w-100 h-100
                     object-fit-cover z-1"
                  />
                </div>
                <div className="col-md-6 bg-white position-relative d-flex flex-column justify-content-end">
                  <button
                    type="button"
                    className="btn-close mt-3 me-3 end-0 top-0 position-absolute"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <div className="p-4">
                    <h4 className="fs-4 fw-semibold">_ayumi122_</h4>
                    <p className="fs-6">@cein_official</p>
                    <p className="fs-6">
                      Excellent, using it morning and evening is a real
                      pleasure. Gently cleanses, light but creamy. Also
                      effective for removing make-up from the eyes (I use
                      non-waterproof make-up). Really good product,
                    </p>
                    <p className="fs-6">
                      #CEIN #skinare #ceincare #beautyproduct
                    </p>
                    <ButtonWithIcon href={'#'} dark={false} border={false}>
                      View on Instagram
                    </ButtonWithIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupComment;
