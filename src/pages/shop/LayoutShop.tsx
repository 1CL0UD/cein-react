import { ReactNode } from 'react';
import Footer from '../../components/shared/Footer';
import Header from '../../components/shared/Header';

interface Props {
  children: ReactNode;
}
const LayoutShop = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutShop;
