import { GetServerSideProps } from 'next';
import { useState } from 'react';

import DefaultHeader from '@/components/headers/default-header';
import FaqHeader from '@/components/contacts/faq-header';
import TabToggle from '@/components/contacts/tab-toggle';
import FaqDropdown from '@/components/contacts/faq-dropdown';

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

export const getServerSideProps: GetServerSideProps = async () => {
  const types = await getFaqCategories();
  const items = await getFaqItems(types);

  return {
    props: { types, items },
  };
};

export default Contacts;
