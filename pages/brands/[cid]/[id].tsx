import { GetServerSideProps, NextPage } from 'next';
import classNames from 'classnames/bind';

import DefaultHeader from '@/components/headers/default-header';
import ItemBox from '@/components/item-box';

import { getBrandsPerCategory } from '@/lib/categories';
import { ModifiedSaleItem } from '@/types/saleItem';
import { modifyItem } from '@/utils/modifyItem';
import styles from '@/styles/pages/brands/styles.module.scss';

const cx = classNames.bind(styles);

interface BrandsProps {
  brand: { id: string; name: string };
  items: ModifiedSaleItem[];
}

const BrandsItem: NextPage<BrandsProps> = ({ brand, items }: BrandsProps) => {
  return (
    <>
      <DefaultHeader title={brand.name} />

      <div className={cx('item-count')}>
        <span>{items.length}</span>개의 상품
      </div>

      {items.map(item => (
        <ItemBox key={item.id} item={item} />
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { cid, id } = query;

  if (!cid || !id || Array.isArray(cid) || Array.isArray(id)) {
    return {
      notFound: true,
    };
  }

  const brands = await getBrandsPerCategory(parseInt(cid));
  const targetBrand = brands.find(brand => brand.id === parseInt(id));

  if (!targetBrand) {
    return {
      notFound: true,
    };
  }

  const modifiedItems = targetBrand.conItems.map(modifyItem);

  return {
    props: {
      brand: {
        id: targetBrand.id,
        name: targetBrand.name,
      },
      items: modifiedItems,
    },
  };
};

export default BrandsItem;
