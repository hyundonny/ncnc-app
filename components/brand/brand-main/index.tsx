import { useRouter } from 'next/router';

import GridItem from '@/components/grid/grid-item';
import GridContainer from '@/components/grid/grid-container';
import Slider from '@/components/slider/slider';
import SliderItem from '@/components/slider/slider-item';

import { ConCategory1 } from '@/types/brandList';
import { CategoryType } from '@/types/category';

interface BrandMainProps {
  conCategory1: ConCategory1[];
  category: CategoryType;
  params: number;
}

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
      <Slider>
        <>
          {category.conCategory1s.map(cat => {
            return (
              <SliderItem
                key={cat.id}
                name={cat.name}
                id={cat.id}
                params={params}
              />
            );
          })}
        </>
      </Slider>

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
