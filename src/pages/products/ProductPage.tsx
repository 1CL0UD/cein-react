import Accordion from '../../components/ui/Accordion';
import Button from '../../components/ui/Button';
import Comments from '../../components/ui/Comments';
import ProductCard from '../../components/ui/ProductCard';
import ProductDescription from '../../components/ui/ProductDescription';
import LayoutProducts from './LayoutProducts';
import skinCare from '../../data/shop/skin-care';
import ButtonWithIcon from '../../components/ui/ButtonWithIcon';
import Rating from '../../components/ui/Rating';
import ProgressBar from '../../components/ui/ProgressBar';

const ProductPage = () => {
  const products = skinCare.data;
  const accordionData = [
    {
      title: 'Benefits',
      content:
        'Pure Micellar Cleansing Water: All in one: make-up removal, cleansing and toning Ideal for removing make-up from eyelash extensions. Suitable for the delicate eye area Cleanses particularly gently, ideal also for sensitive skin Has a toning and moisturizing effect Ideal for quick and deep cleansing of male skin. The multifunctional travel companion Hydrating Eye Cream: Gentle care for the sensitive eye area',
    },
    {
      title: 'How To Use',
      content:
        'Pure Micellar Cleansing Water: All in one: make-up removal, cleansing and toning Ideal for removing make-up from eyelash extensions. Suitable for the delicate eye area Cleanses particularly gently, ideal also for sensitive skin Has a toning and moisturizing effect Ideal for quick and deep cleansing of male skin. The multifunctional travel companion Hydrating Eye Cream: Gentle care for the sensitive eye area',
    },
    {
      title: 'Ingredient',
      content:
        'Pure Micellar Cleansing Water: All in one: make-up removal, cleansing and toning Ideal for removing make-up from eyelash extensions. Suitable for the delicate eye area Cleanses particularly gently, ideal also for sensitive skin Has a toning and moisturizing effect Ideal for quick and deep cleansing of male skin. The multifunctional travel companion Hydrating Eye Cream: Gentle care for the sensitive eye area',
    },
  ];
  return (
    <LayoutProducts>
      <div className="container-fluid">
        <div className="row min-vh-100">
          <div className="col-md-8 px-0">
            <img
              src="/img/products/product-1.png"
              className="object-fit-contain w-100 p-0"
              alt="Product Name"
            />
          </div>
          <div className="col-md-4 p-4 m-auto">
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
            <Button>Add to Cart</Button>
            <div className="d-flex flex-row gap-2 my-4">
              <i className="bi bi-heart"></i>
              <p className="fs-6">Save to Cabinet</p>
            </div>
            <div
              className="w-100 bg-black rounded-5"
              style={{ height: '3px' }}
            ></div>
            <ProductDescription />
            <ProductDescription />
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
          <div className="col-md-6 bg-snow-drift">
            <Accordion
              transparent={false}
              data={accordionData}
              hrefContent={false}
              darkBg={false}
            />
          </div>
          <div className="col-md-6 m-0 p-0">
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
          <div className="col-md-6 d-flex flex-column gap-2 px-4">
            <p className="fs-6 text-secondary">Reviews</p>
            <div className="d-flex flex-row gap-2 align-items-center mb-2">
              <h2 className="fs-2 mb-0">5/5</h2>
              <Rating ratings={5} />
            </div>
            <p className="fs-6">
              This product has been reviewed by 12 customers
            </p>
            <div className="col-8">
              <div className="d-flex align-items-center gap-2">
                <Rating ratings={5} />
                <ProgressBar progress={95} showNumber={true} />
              </div>
            </div>
            <div className="col-8">
              <div className="d-flex align-items-center gap-2">
                <Rating ratings={4} />
                <ProgressBar progress={62} showNumber={true} />
              </div>
            </div>
            <div className="col-8">
              <div className="d-flex align-items-center gap-2">
                <Rating ratings={3} />
                <ProgressBar progress={13} showNumber={true} />
              </div>
            </div>
            <div className="col-8">
              <div className="d-flex align-items-center gap-2">
                <Rating ratings={2} />
                <ProgressBar progress={5} showNumber={true} />
              </div>
            </div>
            <div className="col-8 mb-4">
              <div className="d-flex align-items-center gap-2">
                <Rating ratings={1} />
                <ProgressBar progress={2} showNumber={true} />
              </div>
            </div>
            <div className="col-4">
              <ButtonWithIcon
                href={'#'}
                dark={false}
                border={true}
                children={'Write a review'}
              />
            </div>
          </div>
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
