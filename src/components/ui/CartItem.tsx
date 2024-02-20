const CartItem = () => {
  return (
    <div className="d-flex flex-row align-items-center gap-4">
      <img
        src="/img/products/product-1.png"
        alt="Product Image"
        style={{ maxHeight: '15vh' }}
      />
      <div className="container">
        <p className="fs-6 fw-semibold m-0">Reverence Aromatique Hand Balm</p>
        <p className="fs-6 m-0">75ml</p>
        <p className="fs-6 m-0 d-md-none d-block">$25</p>
      </div>
    </div>
  );
};

export default CartItem;
