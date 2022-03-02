export interface SaleItemResponse {
  id: number;
  name: string;
  originalPrice: number;
  ncSellingPrice: number;
  discountRate: number;
  conCategory2Id: number;
  imageUrl: string;
  conCategory2: SaleItemBrand;
}

interface SaleItemBrand {
  id: number;
  name: string;
  conCategory1: SaleItemCategory;
}

interface SaleItemCategory {
  id: number;
  name: string;
}

export interface ModifiedSaleItem {
  id: number;
  name: string;
  brand: string;
  discountRate: number;
  sellingPrice: number;
  originalPrice: number;
  imageSrc: string;
}
