import Accordion from '../../components/ui/Accordion';
import ButtonWithIcon from '../../components/ui/ButtonWithIcon';
import RootLayout from '../RootLayout';

const FAQPage = () => {
  const accordionData = [
    {
      title: 'Services',
      content: 'How can I obtain personalised product advice?',
    },
    {
      title: 'General Product Information',
      content: 'How can I obtain personalised product advice?',
    },
    {
      title: 'Product Ingredients',
      content: 'How can I obtain personalised product advice?',
    },
  ];
  return (
    <RootLayout>
      <section className="container px-md-3 px-4 mt-5">
        <div className="row">
          <div className="col-md-4 d-flex flex-column gap-3">
            <h2 className="fs-2">Topics</h2>
            <div className="d-flex flex-row gap-3 align-items-center">
              <i className="bi bi-box2"></i>
              <p className="fs-6 mb-0">Product and Services</p>
            </div>
            <div className="d-flex flex-row gap-3 align-items-center">
              <i className="bi bi-truck"></i>
              <p className="fs-6 mb-0">Orders and Shipping</p>
            </div>
            <div className="d-flex flex-row gap-3 align-items-center">
              <i className="bi bi-credit-card"></i>
              <p className="fs-6 mb-0">Payments and My Account</p>
            </div>
            <div className="d-flex flex-row gap-3 align-items-center">
              <i className="bi bi-display"></i>
              <p className="fs-6 mb-0">Website Assistance</p>
            </div>
            <div className="d-flex flex-row gap-3 align-items-center">
              <i className="bi bi-tree"></i>
              <p className="fs-6 mb-0">Sustainability</p>
            </div>
          </div>
          <div className="col-md-8">
            <Accordion
              transparent={true}
              data={accordionData}
              hrefContent={false}
              darkBg={false}
            />
            <div className="row my-5">
              <h2 className="fs-2">
                Cannot find what you are looking for? We warmly invite you to
                contact us.
              </h2>
              <div className="col-md-4 col-12 my-5">
                <ButtonWithIcon
                  href={''}
                  dark={false}
                  border={true}
                  children={'Contact Us'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default FAQPage;
