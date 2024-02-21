import HeroWindow from '../../components/shared/HeroWindow';
import ButtonWithIcon from '../../components/ui/ButtonWithIcon';
import JournalCard from '../../components/ui/JournalCard';
import RootLayout from '../RootLayout';

const BlogListing = () => {
  const journal = Array.from({ length: 5 }, (_, index) => (
    <JournalCard key={index} />
  ));
  return (
    <RootLayout>
      <HeroWindow textStart={false} />
      <section className="container-fluid carousel">
        <p className="fs-6">Insights into Health and Well-being</p>
        <h1 className="fs-1 mb-5">Our Journal</h1>
        <div className="media-scroller snaps-inline">{journal}</div>
      </section>
      <section className="container-fluid">
        <div className="row mb-5">
          <div className="col-md-6 about-us-img d-flex flex-column justify-content-center align-items-center">
            <img
              src="/img/blog/blog-listing-1.png"
              alt="Journal Image"
              className="w-100 h-100"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center pe-md-5 ps-md-0 px-4">
            <p className="fs-6 text-secondary text-uppercase mb-0">
              Knowledge Treasures
            </p>
            <p className="fs-6 fw-bold">Mastering The Art of Well Aging</p>
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
            <div className="col-md-3 col-12">
              <ButtonWithIcon
                href={'/journal'}
                dark={false}
                border={false}
                children={'Read More'}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid carousel">
        <div className="media-scroller snaps-inline">{journal}</div>
      </section>
      <section className="container-fluid">
        <div className="row mb-5">
          <div className="col-md-6 about-us-img d-flex flex-column justify-content-center align-items-center">
            <img
              src="/img/blog/blog-listing-2.png"
              alt="Journal Image"
              className="w-100 h-100"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center pe-md-5 ps-md-0 px-4">
            <p className="fs-6 text-secondary text-uppercase mb-0">
              Knowledge Treasures
            </p>
            <p className="fs-6 fw-bold">Mastering The Art of Well Aging</p>
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
            <div className="col-md-3 col-12">
              <ButtonWithIcon
                href={'/journal'}
                dark={false}
                border={false}
                children={'Read More'}
              />
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default BlogListing;
