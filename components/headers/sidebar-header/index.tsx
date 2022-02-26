import classNames from 'classnames/bind';

import CloseIcon from '@/components/icons/CloseIcon';

import styles from '@/components/headers/sidebar-header/styles.module.scss';
import { useDrawer } from '@/context/DrawerContext';

const cx = classNames.bind(styles);

function SidebarHeader({ title }: { title: string }) {
  const { toggleDrawer } = useDrawer();

  return (
    <header className={cx('header')}>
      {title}
      <button type="button" onClick={toggleDrawer}>
        <CloseIcon className={cx('close-icon')} />
      </button>
    </header>
  );
}

export default SidebarHeader;
