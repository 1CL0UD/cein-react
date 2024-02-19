import ShopProducts from '../../../components/shared/ShopProducts';
import JournalCard from '../../../components/ui/JournalCard';
import skinCare from '../../../data/shop/skin-care';
import LayoutShop from '../LayoutShop';

const SkinCarePage = () => {
  const journal = Array.from({ length: 7 }, (_, index) => (
    <JournalCard key={index} />
  ));
  return (
    <LayoutShop>
      <>
        <div className="container px-md-0 px-4">
          <p className="fs-6">Revered Formulations</p>
          <h4 className="fs-4">Essentials For Every Skincare</h4>
          <ShopProducts products={skinCare.data} />
        </div>
        <section className="container-fluid carousel">
          <p>Insights into Health and Well-being</p>
          <h1>Our Journal</h1>
          <div className="media-scroller snaps-inline">{journal}</div>
          <a href="/blog" className="btn mt-4">
            All Blog Posts <i className="bi bi-chevron-right"></i>
          </a>
        </section>
      </>
    </LayoutShop>
  );
};

export default SkinCarePage;
