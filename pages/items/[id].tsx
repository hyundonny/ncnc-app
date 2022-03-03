import { GetServerSideProps } from 'next';
import classNames from 'classnames/bind';

import DefaultHeader from '@/components/headers/default-header';
import ItemDetail from '@/components/item-detail';
import ItemBox from '@/components/item-box';
import WarningItem from '@/components/warning-item';

import { getProductDetail } from '@/lib/api';
import { ItemDetailType } from '@/types/productDetail';
import { modifyWarning } from '@/utils/modifyWarning';
import styles from '@/styles/pages/items/styles.module.scss';

const cx = classNames.bind(styles);

const ItemDetailPage = ({ conItem }: { conItem: ItemDetailType }) => {
  const item = {
    id: conItem.id,
    name: conItem.name,
    brand: conItem.conCategory2.name,
    discountRate: conItem.discountRate,
    sellingPrice: conItem.ncSellingPrice,
    originalPrice: conItem.originalPrice,
    imageSrc: conItem.imageUrl,
  };

  return (
    <>
      <DefaultHeader />
      <div className={cx('item-info-container')}>
        <ItemBox item={item} isAnchorElement={false} />
        <div className={cx('warning-container')}>
          {conItem.warning &&
            modifyWarning(conItem.warning).map(warning => (
              <WarningItem key={warning.title} warning={warning} />
            ))}
        </div>
        <ItemDetail conItem={conItem} />
      </div>
    </>
  );
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
