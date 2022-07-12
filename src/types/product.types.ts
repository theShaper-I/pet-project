export enum ProductType {
  Phone = 'Phone',
  Laptop = 'Laptop',
  Headphones = 'Headphones',
  Watch = 'Watch',
}

export interface Product {
  productId: number;
  productTitle: string;
  productSubTitle: string;
  fullDescription: string;
  shortDescription: string;
  price: number;
  photoPath: string;
  quantity: number;
  onClick?: () => void;
  type: ProductType;
}
