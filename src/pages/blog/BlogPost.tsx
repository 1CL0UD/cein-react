import Quotes from '../../components/shared/Quotes';
import JournalCard from '../../components/ui/JournalCard';
import RootLayout from '../RootLayout';

const BlogPost = () => {
  const journal = Array.from({ length: 5 }, (_, index) => (
    <JournalCard key={index} />
  ));
  return (
    <RootLayout>
      <section className="container-fluid">
        <Quotes
          subtext={
            'Countless solutions have been discovered in nature. We simply need to observe and tap into its inherent brilliance.'
          }
          bg={false}
          smallSubText={true}
        >
          Countless solutions have been discovered in nature. We simply need to
          observe and tap into its inherent brilliance.
        </Quotes>
      </section>
      <section className="container-fluid">
        <div className="row d-flex justify-content-center aspect-ratio-square px-md-4 px-2 mb-5">
          <img
            src="/img/blog/blog-post-1.png"
            alt="About Us Large"
            className="w-100 h-100 object-fit-cover"
          />
        </div>
      </section>
      <section className="container-fluid">
        <Quotes
          subtext={
            'Countless solutions have been discovered in nature. We simply need to observe and tap into its inherent brilliance.'
          }
          bg={false}
          smallSubText={true}
        >
          Countless solutions have been discovered in nature. We simply need to
          observe and tap into its inherent brilliance.
        </Quotes>
      </section>
      <section className="container-fluid">
        <div className="row px-md-4 px-2 mb-5">
          <div className="col-sm-8 mb-4">
            <img
              src="/img/products/product-1.png"
              alt="Product Image"
              className="w-100 h-100 object-fit-cover"
            />
          </div>
          <div className="col-sm-4 d-flex flex-column justify-content-between">
            <img
              src="/img/products/product-1.png"
              alt="Product Image"
              className="w-100 object-fit-cover mb-4"
            />
            <img
              src="/img/products/product-1.png"
              alt="Product Image"
              className="w-100 object-fit-cover mb-4"
            />
          </div>
        </div>
      </section>
      <section className="container-fluid carousel">
        <p className="fs-6">Insights into Health and Well-being</p>
        <h1 className="fs-1 mb-5">Our Journal</h1>
        <div className="media-scroller snaps-inline">{journal}</div>
      </section>
    </RootLayout>
  );
};

export default BlogPost;
