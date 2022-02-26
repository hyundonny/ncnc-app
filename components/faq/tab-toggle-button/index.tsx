import classNames from 'classnames/bind';

import { Category } from '@/types/contacts';

import styles from '@/components/faq/tab-toggle-button/styles.module.scss';

const cx = classNames.bind(styles);

const TabToggleButton = ({
  tab,
  activeTab,
  handleClick,
}: {
  tab: Category;
  activeTab: string;
  handleClick: () => void;
}) => {
  const { key, name } = tab;

  const className = cx({
    'toggle-button': true,
    active: key === activeTab,
  });

  return (
    <button className={className} onClick={handleClick}>
      {name}
    </button>
  );
};

export default TabToggleButton;
