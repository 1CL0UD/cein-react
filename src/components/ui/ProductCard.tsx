import Button from './Button';

export interface Props {
  id: number;
  name: string;
  capacity: string;
  price: number;
  price_sign: string;
  image_link: string;
}
const ProductCard = ({
  id,
  name,
  capacity,
  price,
  price_sign,
  image_link,
}: Props) => {
  return (
    <a
      className="media-element text-black p-3 rounded-3"
      href="/products/product-1"
      key={id}
    >
      <img src={image_link} alt="product-1" />
      <p className="product-name">{name}</p>
      <i className="bi bi-heart text-end"></i>
      <p>A Vitamin C-rich layering serum</p>
      <p>{capacity}</p>
      <p>
        {price_sign}
        {price}
      </p>
      <Button>Add to Cart</Button>
    </a>
  );
};

export default ProductCard;
