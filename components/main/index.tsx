import classNames from 'classnames/bind';

import ItemBox from '@/components/item-box';
import Carousel from '@/components/main/carousel';

import styles from '@/components/main/styles.module.scss';
import { SaleItemType } from '@/types/saleItem';
import { CategoryType } from '@/types/category';
import BrandGrid from '@/components/brand/brand-grid';
import Link from 'next/link';

interface HomeProps {
  saleItem: SaleItemType;
  category: CategoryType;
}

const cx = classNames.bind(styles);

const Main = ({ saleItem, category }: HomeProps): JSX.Element => {
  return (
    <div>
      <Carousel />
      <div className={cx('category')}>
        {category.conCategory1s.map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: `/categories/${item.id}`,
            }}>
            <a className={cx('link')}>
              <BrandGrid name={item.name} imageUrl={item.imageUrl} />
            </a>
          </Link>
        ))}
      </div>
      <div>
        <div className={cx('text-box')}>
          <div className={cx('highlight')}>놓치지 마세요</div>
          <div className={cx('title')}>오늘의 땡처리콘!</div>
        </div>
        {saleItem.conItems.map((item, idx) => (
          <ItemBox
            key={idx}
            name={item.name}
            store={item.conCategory2.name}
            discount={item.discountRate}
            price={item.ncSellingPrice}
            original={item.originalPrice}
            image={item.imageUrl}
          />
        ))}
      </div>
      <div className={cx('footer')}>
        회사소개서
        <br />
        사업/제휴 문의
        <br />
        개인정보처리방침
        <div className={cx('footer-title')}>(주) 더블엔씨</div>
      </div>
    </div>
  );
};

export default Main;
