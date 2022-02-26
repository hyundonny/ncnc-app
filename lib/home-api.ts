import axios from 'axios';
import { SaleItemType } from '@/types/saleItem';
import { CategoryType } from '@/types/category';

const API = axios.create({ baseURL: 'https://api2.ncnc.app' });

export const getSaleItem = () =>
  API.get<{ conItems: SaleItemType }>(`con-items/soon`);

export const getCategory = () =>
  API.get<{ category: CategoryType }>(`con-category1s`);
