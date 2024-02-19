import Accordion from '../../components/ui/Accordion';
import AddToCartButton from '../../components/ui/AddToCartButton';
import Comments from '../../components/ui/Comments';
import ProductCard from '../../components/ui/ProductCard';
import ProductDescription from '../../components/ui/ProductDescription';
import LayoutProducts from './LayoutProducts';
import skinCare from '../../data/shop/skin-care';

const ProductPage = () => {
  const products = skinCare.data;
  return (
    <LayoutProducts>
      <div className="container-fluid">
        <div className="row min-vh-100">
          <div className="col-md-8 row px-0">
            <img
              src="/img/products/product-1.png"
              className="object-fit-contain w-100 p-0"
              alt="Product Name"
            />
          </div>
          <div className="col-md-4 p-4 row m-auto">
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
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-md-6 row bg-snow-drift">
            <Accordion />
          </div>
          <div className="col-md-6 row m-0 p-0">
            <img
              src="/img/products/product-acc.png"
              className="object-fit-cover w-100 p-0"
              alt="Product Accordion"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-6">Reviews</div>
          <div className="col-md-6">
            <Comments />
            <Comments />
            <Comments />
          </div>
        </div>
      </div>
      <section className="container-fluid carousel">
        <p className="fs-6">Suggested</p>
        <h1 className="fs-1">Combine with...</h1>
        <p className="fs-6">You might also like the following products</p>
        <div className="media-scroller snaps-inline">
          {products.map((item) => (
            <ProductCard
              id={item.id}
              name={item.name}
              capacity={item.capacity}
              price={item.price}
              price_sign={item.price_sign}
              image_link={item.image_link}
            />
          ))}
        </div>
        <a href="/shop/skin-care" className="btn mt-4">
          All Products <i className="bi bi-chevron-right"></i>
        </a>
      </section>
    </LayoutProducts>
  );
};

export default ProductPage;
