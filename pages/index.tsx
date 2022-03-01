import { useRouter } from 'next/router';

import HomeHeader from '@/components/headers/home-header';
import Carousel from '@/components/carousel';
import GridItem from '@/components/grid/grid-item';
import GridContainer from '@/components/grid/grid-container';
import SectionTitle from '@/components/section-title';
import ItemBox from '@/components/item-box';
import Footer from '@/components/footer';

import { useDrawer } from '@/context/DrawerContext';
import { getSaleItems } from '@/lib/home-api';
import { getCategories } from '@/lib/categories';
import { CategoryType } from '@/types/category';
import { SaleItemType } from '@/types/saleItem';
import { GetServerSideProps, NextPage } from 'next';

interface SaleItemProps {
  saleItems: SaleItemType;
  categories: CategoryType;
}

const Home: NextPage<SaleItemProps> = ({
  saleItems,
  categories,
}: SaleItemProps) => {
  const { toggleDrawer } = useDrawer();
  const router = useRouter();

  return (
    <>
      <HomeHeader toggleDrawer={toggleDrawer} />
      <Carousel />
      <GridContainer>
        <>
          {categories.conCategory1s.map(item => (
            <GridItem
              key={item.id}
              name={item.name}
              url={item.imageUrl}
              handleClick={() => router.push(`/categories/${item.id}`)}
            />
          ))}
        </>
      </GridContainer>
      <SectionTitle highlight="놓치지 마세요" title="오늘의 땡처리콘!" />
      {saleItems.conItems.map(item => (
        <ItemBox
          key={item.id}
          name={item.name}
          store={item.conCategory2.name}
          discount={item.discountRate}
          price={item.ncSellingPrice}
          original={item.originalPrice}
          image={item.imageUrl}
        />
      ))}
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [saleItems, categories] = await Promise.all([
    getSaleItems(),
    getCategories(),
  ]);

  return {
    props: {
      saleItems: saleItems.data,
      categories: categories.data,
    },
  };
};

export default Home;
