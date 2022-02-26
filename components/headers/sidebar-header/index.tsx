import classNames from 'classnames/bind';

import CloseIcon from '@/components/icons/CloseIcon';

import sharedStyles from '@/components/headers/shared-styles.module.scss';

import { useDrawer } from '@/context/DrawerContext';

const cx = classNames.bind(sharedStyles);

function SidebarHeader({ title }: { title: string }) {
  const { toggleDrawer } = useDrawer();

  return (
    <header className={cx('header', 'sidebar')}>
      {title}
      <button type="button" onClick={toggleDrawer}>
        <CloseIcon className={cx('icon', 'sidebar')} />
      </button>
    </header>
  );
}

export default SidebarHeader;
