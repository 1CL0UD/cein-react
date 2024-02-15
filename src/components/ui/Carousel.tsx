interface Props {
  image: ImageData[];
}

interface ImageData {
  imgUrl: string;
  alt: string;
  key: number;
}

const Carousel = ({ image }: Props) => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide p-0">
      <div className="carousel-indicators">
        {image.map((item, index) => (
          <button
            key={item.key}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index.toString()}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {image.map((item, index) => (
          <div
            className={index === 0 ? 'carousel-item active' : 'carousel-item'}
            key={item.key}
          >
            <section className="hero hero-top">
              <div className="hero-content">
                <small>Treat Your Body Like Your Face</small>
                <h1 className="fs-1">Highly Effective Body Care</h1>
                <p className="fs-5">
                  A combination of nature and advanced technology. Vegan,
                  natural, skin-friendly and rich in effective biotechnological
                  ingredients.
                </p>
                <button className="btn btn-outline-light py-3 px-4">
                  Discover
                  <i className="bi bi-chevron-right ms-3"></i>
                </button>
              </div>
            </section>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
