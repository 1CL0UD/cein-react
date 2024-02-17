import AddToCartButton from './AddToCartButton';

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
    <div className="media-element p-3 rounded-3" key={id}>
      <img src={image_link} alt="product-1" />
      <p className="product-name">{name}</p>
      <p>A Vitamin C-rich layering serum</p>
      <p>{capacity}</p>
      <p>
        {price_sign}
        {price}
      </p>
      <AddToCartButton />
    </div>
  );
};

export default ProductCard;
