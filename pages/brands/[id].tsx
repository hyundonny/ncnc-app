import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import DefaultHeader from '@/components/headers/default-header';
import ItemList from '@/components/item-list';

const BrandsItem: NextPage = () => {
  const router = useRouter();
  const object = router.query.brandItem as string;

  return (
    <>
      {object && (
        <>
          <DefaultHeader title={JSON.parse(object).name} />
          <ItemList brandItem={JSON.parse(object)} />
        </>
      )}
    </>
  );
};

export default BrandsItem;
