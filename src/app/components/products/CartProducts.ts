import { StaticImageData } from "next/image";
import { createContext } from "react";
export type productData = {
  id: number;
  image: StaticImageData;
  productName: string;
  companyName: string;
  category: string[];
  desctiprion: string;
  price: number;
  rating: number;
  count: number;
  frontPage: boolean;
};
export const CartProductsContext = createContext<
  [productData[], (product: productData, decrease: boolean) => void]
>([[], (product: productData, decrease: boolean) => {}]);
