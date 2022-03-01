import axios from 'axios';
import { SaleItemType } from '@/types/saleItem';

const API = axios.create({ baseURL: 'https://api2.ncnc.app' });

export const getSaleItems = () =>
  API.get<{ conItems: SaleItemType }>(`con-items/soon`);
