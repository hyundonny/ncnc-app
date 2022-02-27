import classNames from 'classnames/bind';
import { ConCategory1 } from '@/types/brandList';

import styles from './styles.module.scss';
import BrandCategory from '@/components/brand/brand-category';
import { CategoryType } from '@/types/category';

import { useRouter } from 'next/router';
import GridItem from '@/components/grid/grid-item';
import GridContainer from '@/components/grid/grid-container';

interface BrandMainProps {
  conCategory1: ConCategory1[];
  category: CategoryType;
  params: number;
}

const cx = classNames.bind(styles);

const Brand = ({
  conCategory1,
  category,
  params,
}: BrandMainProps): JSX.Element => {
  const router = useRouter();

  const routerItem = conCategory1.map(store => {
    return {
      pathname: `/brands/${store.id}`,
      query: {
        id: store.id,
        categoryId: params,
        brandItem: JSON.stringify(store),
      },
    };
  });

  return (
    <div>
      <div className={cx('nav-bar')}>
        {category.conCategory1s.map((sort, sortIdx) => {
          return (
            <BrandCategory
              key={sortIdx}
              name={sort.name}
              id={sort.id}
              params={params}
            />
          );
        })}
      </div>

      <GridContainer>
        <>
          {conCategory1.map((store, idx) => (
            <GridItem
              key={store.id}
              name={store.name}
              url={store.imageUrl}
              handleClick={() =>
                router.push(routerItem[idx], `/brands/${store.id}`)
              }
            />
          ))}
        </>
      </GridContainer>
    </div>
  );
};

export default Brand;
