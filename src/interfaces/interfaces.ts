import { IProductButtonsProps } from '../components/ProductButtons';
import { IProductCardProps } from '../components/ProductCard';
import { IProductImageProps } from '../components/ProductImage';
import { IProductTitleProps } from '../components/ProductTitle';

export interface IProduct {
  id: string;
  title: string;
  img?: string;
}

export interface IProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  maxCount?: number;
  product: IProduct;
}

export interface IProductCardHOCProps {
  ({ children, product }: IProductCardProps): JSX.Element;
  Title: (Props: IProductTitleProps) => JSX.Element;
  Image: (Props: IProductImageProps) => JSX.Element;
  Buttons: (Props: IProductButtonsProps) => JSX.Element;
  onChange?: () => void;
}

export interface IOnChangeArgs {
  product: IProduct;
  count: number;
}

export interface IInitialValues {
  count?: number;
  maxCount?: number;
}

export interface IProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: IProduct;

  increaseBy: (value: number) => void;
  reset: () => void;
}
