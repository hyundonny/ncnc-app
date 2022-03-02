/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import classNames from 'classnames/bind';

import { ModifiedSaleItem } from '@/types/saleItem';
import styles from '@/components/item-box/styles.module.scss';
import { addComma } from 'utils/addComma';

const cx = classNames.bind(styles);

const ItemBox = ({ item }: { item: ModifiedSaleItem }): JSX.Element => {
  const {
    id,
    name,
    brand,
    discountRate,
    sellingPrice,
    originalPrice,
    imageSrc,
  } = item;

  return (
    <Link href={`/items/${id}`}>
      <a className={cx('item-box')}>
        <img className={cx('item-image')} src={imageSrc} alt="gifticon item" />

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
      </a>
    </Link>
  );
};

export default ItemBox;
