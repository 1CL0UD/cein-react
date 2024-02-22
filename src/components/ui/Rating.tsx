interface Props {
  ratings: number;
}
const Rating = ({ ratings: ratings }: Props) => {
  if (ratings > 5) ratings = 5;
  if (ratings < 0) ratings = 0;
  return (
    <div className="d-flex flex-row gap-1">
      <i className={`bi ${ratings >= 1 ? 'bi-star-fill' : 'bi-star'}`}></i>
      <i className={`bi ${ratings >= 2 ? 'bi-star-fill' : 'bi-star'}`}></i>
      <i className={`bi ${ratings >= 3 ? 'bi-star-fill' : 'bi-star'}`}></i>
      <i className={`bi ${ratings >= 4 ? 'bi-star-fill' : 'bi-star'}`}></i>
      <i className={`bi ${ratings >= 5 ? 'bi-star-fill' : 'bi-star'}`}></i>
    </div>
  );
};

export default Rating;
