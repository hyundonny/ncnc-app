import axios from 'axios';
import { Category } from '@/types/brandList';
import { ProductCategory } from '@/types/category';

export const getBrandsPerCategory = async (categoryId: number) => {
  const URL = `https://api2.ncnc.app/con-category1s/${categoryId}/nested`;
  const { data } = await axios.get<{ conCategory1: Category }>(URL);
  return data.conCategory1.conCategory2s;
};

export const getCategories = async () => {
  const CATEGORIES_URL = 'https://api2.ncnc.app/con-category1s';
  const {
    data: { conCategory1s },
  } = await axios.get<{
    conCategory1s: ProductCategory[];
  }>(CATEGORIES_URL);

  return conCategory1s;
};
