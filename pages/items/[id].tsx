import { GetServerSideProps, NextPage } from 'next';

import ItemDetail from '@/components/item-detail';

import { getProductDetail } from '@/lib/api';
import { ItemDetailType } from '@/types/productDetail';

const ItemDetailPage = ({ conItem }: { conItem: ItemDetailType }) => {
  return <ItemDetail conItem={conItem} />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { data } = await getProductDetail(Number(query.id));
    return {
      props: { conItem: data.conItem },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default ItemDetailPage;
