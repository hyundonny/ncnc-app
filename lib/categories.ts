import axios from 'axios';
import { ConCategory1 } from '@/types/brandList';
import { CategoryType } from '@/types/category';
const API = axios.create({ baseURL: 'https://api2.ncnc.app' });

export const getBrandsPerCategory = (categoryId: number) =>
  API.get<{ conCategory1: ConCategory1 }>(
    `con-category1s/${categoryId}/nested`,
  );

export const getCategories = () =>
  API.get<{ category: CategoryType }>(`con-category1s`);
