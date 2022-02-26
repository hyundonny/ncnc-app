import { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames/bind';

import TabToggleButton from '@/components/faq/tab-toggle-button';

import { Category } from '@/types/contacts';
import styles from '@/components/faq/tab-toggle/styles.module.scss';

const cx = classNames.bind(styles);

const TabToggle = ({
  tabs,
  activeTab,
  setTab,
}: {
  tabs: Category[];
  activeTab: string;
  setTab: Dispatch<SetStateAction<string>>;
}) => {
  const renderedButtons = tabs.map(tab => (
    <TabToggleButton
      key={tab.key}
      tab={tab}
      activeTab={activeTab}
      handleClick={() => setTab(tab.key)}
    />
  ));

  return (
    <section className={cx('faq-header')}>
      <h1 className={cx('faq-header-title')}>자주 묻는 질문</h1>
      <div className={cx('faq-toggle-buttons')}>{renderedButtons}</div>
    </section>
  );
};

export default TabToggle;
