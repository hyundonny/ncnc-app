import { GetStaticProps } from 'next';
import { useState } from 'react';

import DefaultHeader from '@/components/headers/default-header';
import FaqHeader from '@/components/faq/faq-header';
import TabToggle from '@/components/faq/tab-toggle';
import FaqDropdown from '@/components/faq/faq-dropdown';

import { Category, ItemsObject } from '@/types/contacts';
import { getFaqCategories, getFaqItems } from '@/lib/faq-api';

function Contacts({ types, items }: { types: Category[]; items: ItemsObject }) {
  const [tab, setTab] = useState(types[0].key);

  return (
    <>
      <DefaultHeader title="고객센터" />
      <FaqHeader />
      <TabToggle tabs={types} activeTab={tab} setTab={setTab} />
      <FaqDropdown activeTab={tab} items={items} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const types = await getFaqCategories();
  const items = await getFaqItems(types);

  return {
    props: { types, items },
  };
};

export default Contacts;
