import ProductCard from '../ui/ProductCard';

interface Props {
  products: Products[];
}

interface Products {
  id: number;
  brand: string;
  name: string;
  capacity: string;
  price: number;
  price_sign: string;
  currency: string;
  description: string;
  category: string;
  image_link: string;
}

const ShopProducts = ({ products }: Props) => {
  return (
    <div className="container-fluid carousel p-0">
      <div className="row">
        {products.map((item) => (
          <div className="col-lg-3 col-md-4 col-6">
            <ProductCard
              id={item.id}
              name={item.name}
              capacity={item.capacity}
              price={item.price}
              price_sign={item.price_sign}
              image_link={item.image_link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopProducts;
