import classNames from 'classnames/bind';

import styles from '@/components/item-options/item-option/styles.module.scss';

const cx = classNames.bind(styles);

const ItemOption = () => {
  return (
    <li className={cx('item-option')}>
      <button className={cx('item-option-grid')}>
        <p className={cx('item-expiry-label')}>유효기간</p>
        <p className={cx('item-price-label')}>할인가</p>
        <p className={cx('item-expiry-text')}>2021.08.06 까지</p>
        <p className={cx('item-price-text')}>3,520원</p>
        <p className={cx('item-dc-rate')}>14%</p>
      </button>
    </li>
  );
};

export default ItemOption;
