import './App.css';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import Snackbar from './components/shared/Snackbar';
// import Carousel from './components/ui/Carousel';

function App() {
  // const heroContent = [
  //   { imgUrl: '/img/hero.svg', alt: 'Hero 1', key: 1 },
  //   { imgUrl: '/img/hero-2.png', alt: 'Hero 2', key: 2 },
  // ];
  return (
    <>
      <Snackbar text="Click and Collect is now available. Complimentary shipping over $400." />
      <Navbar />
      {/* <Carousel image={heroContent} /> */}
      <section className="hero hero-top">
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
      <section className="product-highlight">
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
      <section className="carousel">
        <p>Parsley Seed Skin Care</p>
        <h1>Supreme Skin Fortification</h1>
        <p>
          Discover our potent antioxidant-rich Parsley Seed Skin Care, perfect
          for all skin types.
        </p>
        <div className="media-scroller snaps-inline">
          <div className="media-element">
            <img src="/img/skin-carousel/product-1.png" alt="product-1" />
            <p className="product-name">Lucent Facial Concentrate</p>
            <p>A Vitamin C-rich layering serum</p>
            <p>60 ml</p>
            <p>$94</p>
            <button className="atc-button">Add to your cart</button>
          </div>
          <div className="media-element">
            <img src="/img/skin-carousel/product-1.png" alt="product-1" />
            <p className="product-name">Lucent Facial Concentrate</p>
            <p>A Vitamin C-rich layering serum</p>
            <p>60 ml</p>
            <p>$94</p>
            <button className="atc-button">Add to your cart</button>
          </div>
          <div className="media-element">
            <img src="/img/skin-carousel/product-1.png" alt="product-1" />
            <p className="product-name">Lucent Facial Concentrate</p>
            <p>A Vitamin C-rich layering serum</p>
            <p>60 ml</p>
            <p>$94</p>
            <button className="atc-button">Add to your cart</button>
          </div>
          <div className="media-element">
            <img src="/img/skin-carousel/product-1.png" alt="product-1" />
            <p className="product-name">Lucent Facial Concentrate</p>
            <p>A Vitamin C-rich layering serum</p>
            <p>60 ml</p>
            <p>$94</p>
            <button className="atc-button">Add to your cart</button>
          </div>
          <div className="media-element">
            <img src="/img/skin-carousel/product-1.png" alt="product-1" />
            <p className="product-name">Lucent Facial Concentrate</p>
            <p>A Vitamin C-rich layering serum</p>
            <p>60 ml</p>
            <p>$94</p>
            <button className="atc-button">Add to your cart</button>
          </div>
        </div>
      </section>
      <section className="hero hero-2nd">
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
      <section className="carousel">
        <p>Pure Radiance</p>
        <h1>Natural Face Care for Visible Transformation</h1>
        <p>
          Our natural face care is based on pure ingredients and
          biotechnological plant power, designed to transform your skin and
          provide visible results —naturally.
        </p>
        <div className="media-scroller snaps-inline">
          <div className="media-element">
            <img src="/img/skin-carousel/product-2.png" alt="product-2" />
            <p className="product-name">Lucent Facial Concentrate</p>
            <p>A Vitamin C-rich layering serum</p>
            <p>60 ml</p>
            <p>$94</p>
            <button className="atc-button">Add to your cart</button>
          </div>
          <div className="media-element">
            <img src="/img/skin-carousel/product-2.png" alt="product-2" />
            <p className="product-name">Lucent Facial Concentrate</p>
            <p>A Vitamin C-rich layering serum</p>
            <p>60 ml</p>
            <p>$94</p>
            <button className="atc-button">Add to your cart</button>
          </div>
          <div className="media-element">
            <img src="/img/skin-carousel/product-2.png" alt="product-2" />
            <p className="product-name">Lucent Facial Concentrate</p>
            <p>A Vitamin C-rich layering serum</p>
            <p>60 ml</p>
            <p>$94</p>
            <button className="atc-button">Add to your cart</button>
          </div>
          <div className="media-element">
            <img src="/img/skin-carousel/product-2.png" alt="product-2" />
            <p className="product-name">Lucent Facial Concentrate</p>
            <p>A Vitamin C-rich layering serum</p>
            <p>60 ml</p>
            <p>$94</p>
            <button className="atc-button">Add to your cart</button>
          </div>
          <div className="media-element">
            <img src="/img/skin-carousel/product-2.png" alt="product-2" />
            <p className="product-name">Lucent Facial Concentrate</p>
            <p>A Vitamin C-rich layering serum</p>
            <p>60 ml</p>
            <p>$94</p>
            <button className="atc-button">Add to your cart</button>
          </div>
        </div>
      </section>
      <section className="quotes">
        <h2 className="fs-2">
          Countless answers lie within nature's genius, awaiting our exploration
          and engagement.
        </h2>
        <h3 className="fs-3">THE FUTURE OF NATURAL SKINCARE</h3>
      </section>
      <section className="user-voice">
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
      <section className="carousel">
        <p>Insights into Health and Well-being</p>
        <h1>Our Journal</h1>
        <div className="media-scroller snaps-inline">
          <div className="media-element journal">
            <img src="/img/journal/journal-1.png" alt="product-2" />
            <p>SKIN CONCIERGE</p>
            <h4>Distinguishing Mineral Sunscreens from Chemical Sunscreens</h4>
            <button className="read-more-btn">
              Read More
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          <div className="media-element journal">
            <img src="/img/journal/journal-1.png" alt="product-2" />
            <p>SKIN CONCIERGE</p>
            <h4>Distinguishing Mineral Sunscreens from Chemical Sunscreens</h4>
            <button className="read-more-btn">
              Read More
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          <div className="media-element journal">
            <img src="/img/journal/journal-1.png" alt="product-2" />
            <p>SKIN CONCIERGE</p>
            <h4>Distinguishing Mineral Sunscreens from Chemical Sunscreens</h4>
            <button className="read-more-btn">
              Read More
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          <div className="media-element journal">
            <img src="/img/journal/journal-1.png" alt="product-2" />
            <p>SKIN CONCIERGE</p>
            <h4>Distinguishing Mineral Sunscreens from Chemical Sunscreens</h4>
            <button className="read-more-btn">
              Read More
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          <div className="media-element journal">
            <img src="/img/journal/journal-1.png" alt="product-2" />
            <p>SKIN CONCIERGE</p>
            <h4>Distinguishing Mineral Sunscreens from Chemical Sunscreens</h4>
            <button className="read-more-btn">
              Read More
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          <div className="media-element journal">
            <img src="/img/journal/journal-1.png" alt="product-2" />
            <p>SKIN CONCIERGE</p>
            <h4>Distinguishing Mineral Sunscreens from Chemical Sunscreens</h4>
            <button className="read-more-btn">
              Read More
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
