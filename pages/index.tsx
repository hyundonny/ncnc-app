import HomeHeader from '@/components/headers/home-header';
import Main from '@/components/main';

import { useDrawer } from '@/context/DrawerContext';
import { getCategory, getSaleItem } from '@/lib/home-api';
import { CategoryType } from '@/types/category';
import { SaleItemType } from '@/types/saleItem';
import { GetServerSideProps, NextPage } from 'next';

interface SaleItemProps {
  saleItem: SaleItemType;
  category: CategoryType;
}

const Home: NextPage<SaleItemProps> = ({
  saleItem,
  category,
}: SaleItemProps) => {
  const { toggleDrawer } = useDrawer();
  return (
    <>
      <HomeHeader toggleDrawer={toggleDrawer} />
      <Main saleItem={saleItem} category={category} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const saleItem = await getSaleItem();
  const category = await getCategory();

  return {
    props: {
      saleItem: saleItem.data,
      category: category.data,
    },
  };
};

export default Home;
