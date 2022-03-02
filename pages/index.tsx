import { GetServerSideProps, NextPage } from 'next';
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
import { ProductCategory } from '@/types/category';
import { ModifiedSaleItem } from '@/types/saleItem';

interface SaleItemProps {
  saleItems: ModifiedSaleItem[];
  categories: ProductCategory[];
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
        {categories.map(item => (
          <GridItem
            key={item.id}
            name={item.name}
            url={item.imageUrl}
            handleClick={() => router.push(`/categories/${item.id}`)}
          />
        ))}
      </GridContainer>

      <SectionTitle highlight="놓치지 마세요" title="오늘의 땡처리콘!" />

      {saleItems.map(item => (
        <ItemBox key={item.id} item={item} />
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
      saleItems,
      categories,
    },
  };
};

export default Home;
