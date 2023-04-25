export interface Product {
  id: number;
  name: string;
  price: number;
  image: {
    url: string;
    alt: string;
  };
}
