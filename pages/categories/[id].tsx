import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import DefaultHeader from '@/components/headers/default-header';
import Slider from '@/components/slider/slider';
import SliderItem from '@/components/slider/slider-item';
import GridItem from '@/components/grid/grid-item';
import GridContainer from '@/components/grid/grid-container';

import { getCategories, getBrandsPerCategory } from '@/lib/categories';
import { Brand } from '@/types/brandList';
import { ProductCategory } from '@/types/category';

interface BrandMainProps {
  brands: Brand[];
  categories: ProductCategory[];
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
        title={categories.find(item => item.id === params)?.name}
      />
      <Slider>
        {categories.map(cat => {
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
        {brands.map((brand, idx) => (
          <GridItem
            key={brand.id}
            name={brand.name}
            url={brand.imageUrl}
            handleClick={() =>
              router.push(
                routerItem[idx],
                `/brands/${brand.conCategory1Id}/${brand.id}`,
              )
            }
          />
        ))}
      </GridContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const [brands, categories] = await Promise.all([
    getBrandsPerCategory(Number(query.id)),
    getCategories(),
  ]);

  return {
    props: {
      brands,
      categories,
      params: Number(query.id),
    },
  };
};

export default Categories;
