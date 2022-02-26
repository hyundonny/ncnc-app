import classNames from 'classnames/bind';

import styles from '@/components/item-box/styles.module.scss';
import { addComma } from 'utils/addComma';

interface ItemBoxProps {
  name: string;
  store?: string;
  discount: number;
  price: number;
  original: number;
  image: string;
}

const cx = classNames.bind(styles);

const ItemBox = (props: ItemBoxProps): JSX.Element => {
  const { name, store, discount, price, original, image } = props;

  const ProductNameStyle = cx({
    product: true,
    noneStore: store ? false : true,
  });

  return (
    <div className={cx('box')}>
      <img className={cx('img')} src={image} alt="discount_product" />
      <div className={cx('info')}>
        {store && <div className={cx('store')}>{store}</div>}
        <div className={ProductNameStyle}>{name}</div>
        <div className={cx('price')}>
          <div className={cx('discount-rate')}>{discount}%</div>
          <div className={cx('selling-price')}>{addComma(price)}원</div>
          <div className={cx('original-price')}>{addComma(original)}원</div>
        </div>
      </div>
    </div>
  );
};

export default ItemBox;
