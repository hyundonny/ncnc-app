import { Product } from '@/types/brandList';
import { calcDiscountRate } from '@/utils/calcDiscountRate';

export const modifyItem = (item: Product) => {
  return {
    id: item.id,
    name: item.name,
    brand: '',
    originalPrice: item.originalPrice,
    sellingPrice: item.minSellingPrice,
    imageSrc: item.imageUrl,
    discountRate: calcDiscountRate(item.originalPrice, item.minSellingPrice),
  };
};
