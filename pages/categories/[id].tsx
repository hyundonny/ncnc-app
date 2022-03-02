import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import DefaultHeader from '@/components/headers/default-header';
import Slider from '@/components/slider/slider';
import SliderItem from '@/components/slider/slider-item';
import GridItem from '@/components/grid/grid-item';
import GridContainer from '@/components/grid/grid-container';

import { getCategories, getBrandsPerCategory } from '@/lib/categories';
import { ConCategory1 } from '@/types/brandList';
import { CategoryType } from '@/types/category';

interface BrandMainProps {
  brands: ConCategory1[];
  categories: CategoryType;
  params: number;
}

const Categories = ({ brands, categories, params }: BrandMainProps) => {
  const router = useRouter();

  const routerItem = brands.map(store => {
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
    <>
      <DefaultHeader
        title={categories.conCategory1s.find(item => item.id === params)?.name}
      />
      <Slider>
        {categories.conCategory1s.map(cat => {
          return (
            <SliderItem
              key={cat.id}
              name={cat.name}
              id={cat.id}
              params={params}
            />
          );
        })}
      </Slider>

      <GridContainer>
        {brands.map((store, idx) => (
          <GridItem
            key={store.id}
            name={store.name}
            url={store.imageUrl}
            handleClick={() =>
              router.push(routerItem[idx], `/brands/${store.id}`)
            }
          />
        ))}
      </GridContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const [brandsResponse, categoriesResponse] = await Promise.all([
    getBrandsPerCategory(Number(query.id)),
    getCategories(),
  ]);

  return {
    props: {
      brands: brandsResponse.data.conCategory1.conCategory2s,
      categories: categoriesResponse,
      params: Number(query.id),
    },
  };
};

export default Categories;
