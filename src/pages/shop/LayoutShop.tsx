import { ReactNode } from 'react';
import ShopHero from '../../components/shared/ShopHero';
import UnderlineTabs from '../../components/shared/UnderlineTabs';
import RootLayout from '../RootLayout';

interface Props {
  children: ReactNode;
}
const LayoutShop = ({ children }: Props) => {
  const skinCareTabsList = [
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
    <RootLayout>
      <ShopHero />
      <div className="container-fluid">
        <UnderlineTabs tabsList={skinCareTabsList} />
      </div>
      {children}
    </RootLayout>
  );
};

export default LayoutShop;
