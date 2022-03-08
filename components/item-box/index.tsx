/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';

import { ModifiedSaleItem } from '@/types/saleItem';
import styles from '@/components/item-box/styles.module.scss';
import { addComma } from 'utils/addComma';

const cx = classNames.bind(styles);

interface ItemBoxProps {
  item: ModifiedSaleItem;
  isAnchorElement: boolean;
}

const ItemBox = ({ item, isAnchorElement }: ItemBoxProps): JSX.Element => {
  const {
    id,
    name,
    brand,
    discountRate,
    sellingPrice,
    originalPrice,
    imageSrc,
  } = item;

  const boxContents = (
    <>
      <Image
        className={cx('item-image')}
        alt={'gifticon item'}
        src={imageSrc}
        width={80}
        height={80}
      />
      <div>
        <p className={cx('item-brand')}>{brand}</p>
        <p className={cx('item-name')}>{name}</p>
        <div className={cx('item-price-info')}>
          <span className={cx('item-discount-rate')}>{discountRate}%</span>
          <span className={cx('item-selling-price')}>
            {addComma(sellingPrice)}원
          </span>
          <span className={cx('item-original-price')}>
            {addComma(originalPrice)}원
          </span>
        </div>
      </div>
    </>
  );

  if (isAnchorElement) {
    return (
      <Link href={`/items/${id}`}>
        <a className={cx('item-box')}>{boxContents}</a>
      </Link>
    );
  }

  return <div className={cx('item-box')}>{boxContents}</div>;
};

export default ItemBox;
