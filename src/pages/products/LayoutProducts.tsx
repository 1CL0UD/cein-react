import { ReactNode } from 'react';
import RootLayout from '../RootLayout';

interface Props {
  children: ReactNode;
}

const LayoutProducts = ({ children }: Props) => {
  return <RootLayout>{children}</RootLayout>;
};

export default LayoutProducts;
