import axios from 'axios';
import { ConCategory1 } from '@/types/brandList';
import { ProductCategory } from '@/types/category';
const API = axios.create({ baseURL: 'https://api2.ncnc.app' });

export const getBrandsPerCategory = (categoryId: number) =>
  API.get<{ conCategory1: ConCategory1 }>(
    `con-category1s/${categoryId}/nested`,
  );

export const getCategories = async () => {
  const CATEGORIES_URL = 'https://api2.ncnc.app/con-category1s';
  const {
    data: { conCategory1s },
  } = await axios.get<{
    conCategory1s: ProductCategory[];
  }>(CATEGORIES_URL);

  return conCategory1s;
};
