import Link from 'next/link';
import classNames from 'classnames/bind';

import SidebarHeader from '@/components/headers/sidebar-header';

import { useDrawer } from '@/context/DrawerContext';
import styles from '@/components/drawer-menu/styles.module.scss';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';

const cx = classNames.bind(styles);

function DrawerMenu() {
  const { drawerOpen, toggleDrawer } = useDrawer();

  const drawerClassName = cx({
    drawer: true,
    open: drawerOpen,
  });

  return (
    <aside className={drawerClassName}>
      <SidebarHeader title="마이 페이지" />
      <section className={cx('drawer-contents')}>
        <Link href="/contacts">
          <a className={cx('customer-center-button')} onClick={toggleDrawer}>
            <span>고객 센터</span>
            <ChevronRightIcon />
          </a>
        </Link>
        <div className={cx('empty')}></div>
      </section>
    </aside>
  );
}

export default DrawerMenu;
