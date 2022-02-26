import classNames from 'classnames/bind';
import FaqDropdownItem from '@/components/faq/faq-dropdown-item';

import { ItemsObject } from '@/types/contacts';
import styles from '@/components/faq/faq-dropdown/styles.module.scss';

const cx = classNames.bind(styles);

const FaqDropdown = ({
  activeTab,
  items,
}: {
  activeTab: string;
  items: ItemsObject;
}) => {
  const itemsToShow = items[activeTab];

  const renderedItems = itemsToShow.map(({ id, question, answer }) => (
    <FaqDropdownItem key={id} question={question} answer={answer} />
  ));

  return <ul className={cx('faq-dropdown')}>{renderedItems}</ul>;
};

export default FaqDropdown;
