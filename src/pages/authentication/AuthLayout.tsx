import AuthInputField from '../../components/shared/AuthInputField';
import Button from '../../components/ui/Button';
import ButtonWithIcon from '../../components/ui/ButtonWithIcon';
import RootLayout from '../RootLayout';

interface Props {
  type: boolean;
}

const AuthLayout = ({ type }: Props) => {
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
            <h1 className="fs-1">
              {type ? 'Register an account' : 'Log in to your account'}
            </h1>
            <AuthInputField type={type} />
            <Button>Login</Button>
            <div className="d-flex flex-column gap-2 mt-4">
              <h1 className="fs-1">
                {type ? 'Already have an account?' : 'New to CEIN.?'}
              </h1>
              <p className="fs-6">
                {type
                  ? 'Login to your existing account here.'
                  : 'With an account, you can save products to your cabinet, view your order history and swiftly checkout using saved details.'}
              </p>
              <ButtonWithIcon href={type ? '/login' : '/register'} dark={false}>
                {type ? 'Login' : 'Create Account'}
              </ButtonWithIcon>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default AuthLayout;
