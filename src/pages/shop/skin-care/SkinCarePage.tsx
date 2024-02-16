import ShopHero from '../../../components/shared/ShopHero';
import UnderlineTabs from '../../../components/shared/UnderlineTabs';
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
        <div className="container">
          <p className="fs-6">Revered Formulations</p>
          <h4 className="fs-4">Essentials For Every Skincare</h4>
        </div>
      </>
    </LayoutShop>
  );
};

export default SkinCarePage;
