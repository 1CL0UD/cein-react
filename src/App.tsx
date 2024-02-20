import './App.css';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Quotes from './components/shared/Quotes';
import Snackbar from './components/shared/Snackbar';
import JournalCard from './components/ui/JournalCard';
import ProductCard from './components/ui/ProductCard';
import skinCare from './data/shop/skin-care';
// import Carousel from './components/ui/Carousel';

function App() {
  // const heroContent = [
  //   { imgUrl: '/img/hero.svg', alt: 'Hero 1', key: 1 },
  //   { imgUrl: '/img/hero-2.png', alt: 'Hero 2', key: 2 },
  // ];
  const products = skinCare.data;
  const journal = Array.from({ length: 5 }, (_, index) => (
    <JournalCard key={index} />
  ));
  return (
    <>
      <Snackbar text="Click and Collect is now available. Complimentary shipping over $400." />
      <Header />
      {/* <Carousel image={heroContent} /> */}
      <section className="container-fluid hero hero-top">
        <div className="hero-content">
          <small>Treat Your Body Like Your Face</small>
          <h1 className="fs-1">Highly Effective Body Care</h1>
          <p className="fs-5">
            A combination of nature and advanced technology. Vegan, natural,
            skin-friendly and rich in effective biotechnological ingredients.
          </p>
          <button className="btn btn-outline-light py-3 px-4">
            Discover
            <i className="bi bi-chevron-right ms-3"></i>
          </button>
        </div>
      </section>
      <section className="container-fluid product-highlight">
        <div className="col-md row m-auto py-4">
          <div className="row col-md-6 my-auto">
            <img
              src="/img/skin-care.png"
              alt=""
              className="w-100 object-fit-cover"
            />
          </div>
          <div className="row col-md-6 my-auto">
            <div className="product-highlight-content">
              <small>Skin Care</small>
              <h1 className="fs-1">Potent Solution for Demanding Skins</h1>
              <p>
                Discover products tailored for mature skin and urban lifestyles,
                offering daily hydration and the added advantage of powerful
                vitamins and antioxidants.
              </p>
              <button className="btn btn-outline-dark py-3 px-4">
                Read More
                <i className="bi bi-chevron-right ms-3"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid carousel">
        <p>Parsley Seed Skin Care</p>
        <h1>Supreme Skin Fortification</h1>
        <p>
          Discover our potent antioxidant-rich Parsley Seed Skin Care, perfect
          for all skin types.
        </p>
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
      </section>
      <section className="container-fluid hero hero-2nd">
        <div className="hero-content">
          <small>Revitalize Your Body</small>
          <h1 className="fs-1">Effective Ingredients for Visible Results</h1>
          <p className="fs-6">
            Our body products are rich in highly effective ingredients, achieve
            visible results, firm the skin and leave it feeling soft and supple.
            Fine textures that are quickly absorbed, non-greasy and in no way
            inferior to facial care. It’s time to give our body the same
            attention as our face.
          </p>

          <button className="btn btn-outline-light px-4 py-3">
            Discover <i className="bi bi-chevron-right ms-2"></i>
          </button>
        </div>
      </section>
      <section className="container-fluid carousel">
        <p>Pure Radiance</p>
        <h1>Natural Face Care for Visible Transformation</h1>
        <p>
          Our natural face care is based on pure ingredients and
          biotechnological plant power, designed to transform your skin and
          provide visible results —naturally.
        </p>
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
      </section>
      <section className="container-fluid">
        <Quotes subtext={'THE FUTURE OF NATURAL SKINCARE'}>
          Countless answers lie within nature's genius, awaiting our exploration
          and engagement.
        </Quotes>
      </section>

      <section className="container-fluid user-voice">
        <h1>User Voice</h1>
        <div className="user-voice-grid">
          <img src="/img/hero-2.png" alt="" />
          <img src="/img/user-voice/Ig.png" alt="" />
          <img src="/img/user-voice/Ig.png" alt="" />
          <img src="/img/user-voice/Ig.png" alt="" />
          <img src="/img/user-voice/Ig.png" alt="" />
          <img src="/img/user-voice/Ig.png" alt="" />
        </div>
        <button className="user-voice-more">Read More</button>
      </section>
      <section className="container-fluid carousel">
        <p>Insights into Health and Well-being</p>
        <h1>Our Journal</h1>
        <div className="media-scroller snaps-inline">{journal}</div>
      </section>
      <Footer />
    </>
  );
}

export default App;
