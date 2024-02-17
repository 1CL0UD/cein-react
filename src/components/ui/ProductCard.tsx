export interface Props {
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
const ProductCard = ({
  id,
  brand,
  name,
  capacity,
  price,
  price_sign,
  currency,
  description,
  category,
  image_link,
}: Props) => {
  return (
    <div className="media-element p-3 rounded-3">
      <img src={image_link} alt="product-1" />
      <p className="product-name">{name}</p>
      <p>A Vitamin C-rich layering serum</p>
      <p>{capacity}</p>
      <p>
        {price_sign}
        {price}
      </p>
      <button className="atc-button">Add to your cart</button>
    </div>
  );
};

export default ProductCard;
