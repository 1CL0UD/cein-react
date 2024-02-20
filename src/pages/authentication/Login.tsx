import Button from '../../components/ui/Button';
import ButtonWithIcon from '../../components/ui/ButtonWithIcon';
import RootLayout from '../RootLayout';

const Login = () => {
  return (
    <RootLayout>
      <div className="container-fluid">
        <div className="row min-vh-100">
          <div className="col-6 d-md-block d-none ps-0">
            <img
              src="/img/products/product-1.png"
              alt="Login Image"
              className="object-fit-cover w-100 h-100"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center gap-4 px-4 px-md-5">
            <h1 className="fs-1">Log in to your account</h1>
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
              <small>Forgotten Password?</small>
            </form>
            <Button>Login</Button>
            <div className="d-flex flex-column gap-2 mt-4">
              <h1 className="fs-1">New to CEIN.?</h1>
              <p className="fs-6">
                With an account, you can save products to your cabinet, view
                your order history and swiftly checkout using saved details.
              </p>
              <ButtonWithIcon href="/register" dark={false}>
                Create Account
              </ButtonWithIcon>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Login;
