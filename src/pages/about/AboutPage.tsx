import Quotes from '../../components/shared/Quotes';
import ButtonWithIcon from '../../components/ui/ButtonWithIcon';
import RootLayout from '../RootLayout';

const AboutPage = () => {
  return (
    <RootLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 about-us-img d-flex flex-column justify-content-center align-items-center">
            <img
              src="/img/about-us/about-us-1.png"
              alt="Journal Image"
              className="w-100 h-100"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center pe-5">
            <h3 className="fs-3">Our Story</h3>
            <p className="fs-6">
              Our line features meticulous skin, hair, and body care
              formulations, crafted with both efficacy and sensory delight in
              focus.
            </p>
            <p className="fs-6">
              We are dedicated to creating top-quality skin, hair, and body care
              products. We extensively research plant-based and lab-made
              ingredients, selecting only those with proven safety and
              effectiveness. At our distinctive stores, knowledgeable
              consultants are eager to introduce you to the Aesop range and
              assist with your choices.
            </p>
            <div className="w-50">
              <ButtonWithIcon
                href={'/journal'}
                dark={false}
                children={'Our Approach To Products'}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center ps-5">
            <h2 className="fs-2">
              Countless solutions have been discovered in nature. We simply need
              to observe and tap into its inherent brilliance.
            </h2>
            <div className="w-50">
              <ButtonWithIcon
                href={'/shop/skin-care'}
                dark={false}
                children={'Discover Products'}
              />
            </div>
          </div>
          <div className="col-md-6 about-us-img d-flex flex-column justify-content-center align-items-center">
            <img
              src="/img/about-us/about-us-1.png"
              alt="Journal Image"
              className="w-100 h-100"
            />
          </div>
        </div>
        <div className="row px-5 mb-5">
          <img
            src="/img/about-us/about-us-large.png"
            alt="About Us Large"
            className="w-100 h-100"
          />
        </div>
        <Quotes subtext="THE FUTURE OF NATURAL SKINCARE">
          Our formulations are rooted in nature's most valuable raw materials,
          enhanced with modern technologies to ensure optimal results for your
          skin.
        </Quotes>
        <div className="row">
          <div className="col-md-6 col-12 p-0 d-flex flex-column justify-content-center position-relative">
            <img
              src="/img/journal/journal-1.png"
              alt="Background"
              className="w-100 h-100 object-fit-cover z-n1"
              style={{ filter: 'brightness(60%)' }}
            />
            <div
              className="text-white position-absolute top-50 translate-middle"
              id="about-us-last-content"
              style={{ left: '40%' }}
            >
              <p className="fs-6">Our Credo</p>
              <h2 className="fs-2">Quality & Efficacy</h2>
              <div className="col-8 d-md-block d-none">
                <p className="fs-6">
                  For those serious about skin health, trust someone dedicated
                  since 1986. With over 35 years of crafting certified natural
                  cosmetics, we leverage extensive experience. Our missions to
                  create products beneficial for both body and planet.
                </p>
              </div>
              <div className="col-md-6 col-12">
                <ButtonWithIcon
                  href={'/shop/skin-care'}
                  dark={true}
                  children={'Our Best Sellers'}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 p-0 d-flex flex-column justify-content-center position-relative">
            <img
              src="/img/journal/journal-1.png"
              alt="Background"
              className="w-100 h-100 object-fit-cover z-n1"
              style={{ filter: 'brightness(60%)' }}
            />
            <div
              className="text-white position-absolute top-50 translate-middle"
              id="about-us-last-content"
              style={{ left: '40%' }}
            >
              <p className="fs-6">Modern Science, Your Skins's Perfection</p>
              <h2 className="fs-2">High Tech Natural Skin Care</h2>
              <div className="col-8 d-md-block d-none">
                <p className="fs-6">
                  We build our formulas on nature's most precious raw materials,
                  refined with modern technologies to guarantee the best results
                  for, your skin.
                </p>
              </div>
              <div className="col-md-6 col-12">
                <ButtonWithIcon
                  href={'/shop/skin-care'}
                  dark={true}
                  children={'Discover More'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default AboutPage;
