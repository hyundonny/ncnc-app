import axios from 'axios';
import { SaleItemResponse } from '@/types/saleItem';

export const getSaleItems = async () => {
  const SALE_ITEMS_URL = 'https://api2.ncnc.app/con-items/soon';

  const {
    data: { conItems },
  } = await axios.get<{ conItems: SaleItemResponse[] }>(SALE_ITEMS_URL);

  return conItems.map(item => {
    return {
      id: item.id,
      name: item.name,
      brand: item.conCategory2.name,
      discountRate: item.discountRate,
      sellingPrice: item.ncSellingPrice,
      originalPrice: item.originalPrice,
      imageSrc: item.imageUrl,
    };
  });
};
