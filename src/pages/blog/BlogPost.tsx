import Quotes from '../../components/shared/Quotes';
import RootLayout from '../RootLayout';

const BlogPost = () => {
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
    </RootLayout>
  );
};

export default BlogPost;
