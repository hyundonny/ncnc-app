import classNames from 'classnames/bind';

import { OptionType } from '@/types/productDetail';
import { addComma } from '@/utils/addComma';
import { calcDiscountRate } from '@/utils/calcDiscountRate';
import styles from '@/components/item-options/item-option/styles.module.scss';
import { modifyDate } from '@/utils/modifyDate';

const cx = classNames.bind(styles);

const ItemOption = ({
  originalPrice,
  option,
  selectOption,
}: {
  originalPrice: number;
  option: OptionType;
  selectOption: (option: OptionType) => void;
}) => {
  const { expireAt, sellingPrice } = option;

  return (
    <li className={cx('item-option')} onClick={() => selectOption(option)}>
      <button className={cx('item-option-grid')}>
        <p className={cx('item-expiry-label')}>유효기간</p>
        <p className={cx('item-price-label')}>할인가</p>
        <p className={cx('item-expiry-text')}>{modifyDate(expireAt)}</p>
        <p className={cx('item-price-text')}>{addComma(sellingPrice)}</p>
        <p className={cx('item-dc-rate')}>
          {calcDiscountRate(originalPrice, sellingPrice)} %
        </p>
      </button>
    </li>
  );
};

export default ItemOption;
