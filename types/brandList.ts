export type Category = {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
  conCategory2s: Brand[];
};

export interface Brand {
  id: number;
  name: string;
  conCategory1Id: number;
  imageUrl: string;
  conItems: Product[];
}

export interface Product {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  count: number;
  imageUrl: string;
}
