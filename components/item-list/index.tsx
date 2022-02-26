import classNames from 'classnames/bind';

import ItemBox from '@/components/item-box';

import styles from '@/components/item-list/styles.module.scss';
import { calcDiscountRate } from 'utils/calcDiscountRate';
import { ConCategory2 } from '@/types/brand';
import Link from 'next/link';

interface ItemListProps {
  brandItem: ConCategory2;
}

const cx = classNames.bind(styles);

const ItemList = (props: ItemListProps): JSX.Element => {
  const { brandItem } = props;
  return (
    <div>
      <div className={cx('top')}>
        <span className={cx('count')}>{brandItem.conItems.length}</span>개의
        상품
      </div>

      {brandItem.conItems.map((item, idx) => (
        <Link key={idx} href={`/items/${item.id}`}>
          <a>
            <ItemBox
              name={item.name}
              discount={calcDiscountRate(
                item.originalPrice,
                item.minSellingPrice,
              )}
              price={item.minSellingPrice}
              original={item.originalPrice}
              image={item.imageUrl}
            />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
