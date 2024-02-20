interface Props {
  type: boolean;
}

const AuthInputField = ({ type }: Props) => {
  return (
    <form action="">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control bg-transparent rounded-0 border-top-0 border-start-0 border-end-0 border-2 border-dark"
          placeholder="Email Address"
          aria-label="Email Address"
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
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control bg-transparent rounded-0 border-top-0 border-start-0 border-end-0 border-2 border-dark"
          placeholder="Password"
          aria-label="Password"
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
      {type === true && (
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control bg-transparent rounded-0 border-top-0 border-start-0 border-end-0 border-2 border-dark"
            placeholder="Confirm Password"
            aria-label="Confirm Password"
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
      )}

      <small>Forgotten Password?</small>
    </form>
  );
};

export default AuthInputField;
