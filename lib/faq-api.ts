import axios from 'axios';
import {
  Category,
  CategoryResponse,
  ItemsResponse,
  ItemsObject,
} from '@/types/contacts';

export const getFaqCategories = async () => {
  const FAQ_CATEGORIES_URL = 'https://api2.ncnc.app/qa-types';
  const {
    data: { qaTypes },
  } = await axios.get<CategoryResponse>(FAQ_CATEGORIES_URL);

  return qaTypes;
};

export const getFaqItems = async (types: Category[]) => {
  const FAQ_ITEMS_URL = 'https://api2.ncnc.app/qas?qaTypeId=';

  const promises = [];

  for (let { id } of types) {
    promises.push(axios.get<ItemsResponse>(FAQ_ITEMS_URL + id));
  }

  const responses = await Promise.all(promises);
  const items: ItemsObject = {};

  for (let i = 0; i < responses.length; i++) {
    const { key } = types[i];
    items[key] = responses[i].data.qas;
  }

  return items;
};
