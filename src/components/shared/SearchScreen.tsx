import skinCare from '../../data/shop/skin-care';
import ProductCard from '../ui/ProductCard';

interface Props {
  showSearchScreen: boolean;
  toggleSearchScreen: () => void;
}

const SearchScreen = ({ showSearchScreen, toggleSearchScreen }: Props) => {
  return (
    <div
      className={`position-absolute border-top border-2 border-secondary bg-snow-drift z-3 container-fluid ${
        showSearchScreen ? 'd-auto' : 'd-none'
      }`}
    >
      <div className="row" style={{ minHeight: '89vh' }}>
        <div className="col-md-3 border-2 border-md-end border-secondary">
          <div className="d-flex flex-column px-4 pt-5">
            <form action="">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control bg-transparent rounded-0 border-top-0 border-start-0 border-end-0 border-2 border-dark"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="email-input"
                />
                <button
                  className="btn rounded-0 border-dark border-top-0 border-start-0 border-end-0 border-bottom border-2"
                  type="button"
                  id="button-addon2"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </form>
            <h5 className="fs-5 text-secondary mb-3">Suggested</h5>
            <p className="fs-6 text-secondary mb-2">Cleansor</p>
            <p className="fs-6 text-secondary mb-2">Hydrator</p>
            <p className="fs-6 text-secondary mb-2">Parsley Seed</p>
          </div>
        </div>
        <div className="col-md-9 py-4" id="searchResult">
          <i
            className="bi bi-x-lg fs-4 mb-2 d-md-block d-none"
            onClick={toggleSearchScreen}
          ></i>
          <h2 className="fs-2 text-secondary px-4 d-none">Search Result</h2>
          <div className="container-fluid carousel p-2">
            <div className="media-scroller snaps-inline">
              {skinCare.data.map((item) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
