import ShopProducts from '../../../components/shared/ShopProducts';
import skinCare from '../../../data/shop/skin-care';
import LayoutShop from '../LayoutShop';

const SkinCarePage = () => {
  return (
    <LayoutShop>
      <>
        <div className="container px-md-0 px-4">
          <p className="fs-6">Revered Formulations</p>
          <h4 className="fs-4">Essentials For Every Skincare</h4>
          <ShopProducts products={skinCare.data} />
        </div>
      </>
    </LayoutShop>
  );
};

export default SkinCarePage;
