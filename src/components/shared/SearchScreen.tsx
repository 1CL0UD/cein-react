// import Header from './Header';

const SearchScreen = () => {
  return (
    <div
      className="modal fade search-modal"
      id="searchModal"
      aria-labelledby="searchModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog m-0">
        <div className="modal-content min-vh-80 min-vw-100 border-0 rounded-0">
          {/* <Header /> */}
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="searchModalLabel">
              Modal title
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
