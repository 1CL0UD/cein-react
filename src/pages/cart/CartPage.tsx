import Button from '../../components/ui/Button';
import CartItem from '../../components/ui/CartItem';
import QuantitySelector from '../../components/ui/QuantitySelector';
import RootLayout from '../RootLayout';

const CartPage = () => {
  return (
    <RootLayout>
      <div className="container py-5">
        <h2 className="fs-2 text-center">Cart</h2>
        <p className="fs-6 text-center mb-5 p-3 px-md-0">
          Purchase one more item of the sale products and receive free shipping!{' '}
          <br />
          *Automatically applied on the next page
        </p>
        <div className="row d-md-flex d-none" id="Cart Items Header">
          <div className="col-6">
            <p className="fs-6 text-uppercase">Cart</p>
          </div>
          <div className="col-2">
            <p className="fs-6 text-uppercase">Price</p>
          </div>
          <div className="col-2">
            <p className="fs-6 text-uppercase">Quantity</p>
          </div>
          <div className="col-2">
            <p className="fs-6 text-uppercase">Subtotal</p>
          </div>
        </div>
        <div className="row mb-5" id="Cart Items">
          <div className="col-md-6 col-9">
            <CartItem />
          </div>
          <div className="col-2 my-auto d-md-grid d-none">
            <p className="fs-6">$25</p>
          </div>
          <div className="col-md-2 col-3 my-auto ">
            <QuantitySelector />
          </div>
          <div className="col-2 my-auto d-md-grid d-none">
            <p className="fs-6">$25</p>
          </div>
        </div>
        <div className="row">
          <div className="col-8"></div>
          <div className="col-md-4 col-12">
            <div className="d-flex flex-row justify-content-between">
              <h3 className="fs-3">Total</h3>
              <h3 className="fs-3">$25</h3>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <small className="text-secondary my-2">
                Shipping fee will be calculated at the time of purchase
              </small>
              <Button>Checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default CartPage;
