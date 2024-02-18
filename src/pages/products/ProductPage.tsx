import Accordion from '../../components/ui/Accordion';
import AddToCartButton from '../../components/ui/AddToCartButton';
import ProductDescription from '../../components/ui/ProductDescription';
import LayoutProducts from './LayoutProducts';

const ProductPage = () => {
  return (
    <LayoutProducts>
      <div className="container-fluid pe-5">
        <div className="row min-vh-100">
          <div className="col-8 ps-0">
            <img
              src="/img/products/product-1.png"
              className="object-fit-cover w-100"
              alt="Product Name"
            />
          </div>
          <div className="col-4 my-auto">
            <div className="d-flex flex-row">
              <p className="fs-6">Skin Care</p>
              <i className="bi bi-dot"></i>
              <p className="fs-6">Toner</p>
            </div>
            <h1 className="fs-1">Gentle Balancing Toner</h1>
            <p className="fs-6">
              This light, balancing face toner with witch hazel and moisturizing
              active ingredients like prickly pear refreshes and tones the skin
              and optimally prepares it for further care steps. Ideal for dry,
              normal, sensitive, or mature skin.
            </p>
            <h3 className="fs-3">$32</h3>
            <AddToCartButton />
            <div className="d-flex flex-row gap-2 my-4">
              <i className="bi bi-heart"></i>
              <p className="fs-6">Save to Cabinet</p>
            </div>
            <div
              className="w-100 bg-black rounded-5"
              style={{ height: '3px' }}
            ></div>
            <ProductDescription />
          </div>
        </div>
        <div className="row text-center py-5">
          <p className="fs-5 fw-lighter mb-1">Skin Routine</p>
          <p className="fs-4 fw-semibold">Gentle Care for Delicate Skin</p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 bg-snow-drift p-0">
            <Accordion />
          </div>
          <div className="col-6 p-0">
            <img
              src="/img/products/product-acc.png"
              className="w-100 object-fit-cover"
              alt="Product Accordion"
            />
          </div>
        </div>
      </div>
    </LayoutProducts>
  );
};

export default ProductPage;
