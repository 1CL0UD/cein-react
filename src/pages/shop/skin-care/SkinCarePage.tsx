import ShopHero from '../../../components/shared/ShopHero';
import ShopProducts from '../../../components/shared/ShopProducts';
import UnderlineTabs from '../../../components/shared/UnderlineTabs';
import skinCare from '../../../data/shop/skin-care';
import LayoutShop from '../LayoutShop';

const SkinCarePage = () => {
  const tabsList = [
    'Cleanse',
    'Exfoliate',
    'Treat & Masque',
    'Tone',
    'Hydrate',
    'Eyes & Ups',
    'Sun Care',
    'Shave',
  ];
  return (
    <LayoutShop>
      <>
        <ShopHero />
        <div className="container-fluid">
          <UnderlineTabs tabsList={tabsList} />
        </div>
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
