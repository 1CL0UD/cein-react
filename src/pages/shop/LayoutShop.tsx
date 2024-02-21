import { ReactNode } from 'react';
import HeroWindow from '../../components/shared/HeroWindow';
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
      <HeroWindow textStart={true} />
      <div className="container-fluid">
        <UnderlineTabs tabsList={skinCareTabsList} />
      </div>
      {children}
    </RootLayout>
  );
};

export default LayoutShop;
