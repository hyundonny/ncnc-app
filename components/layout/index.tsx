import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import DrawerMenu from '@/components/drawer-menu';

import { useDrawer } from '@/context/DrawerContext';
import styles from '@/components/layout/styles.module.scss';

const cx = classNames.bind(styles);

function Layout({ children }: { children: React.ReactNode }) {
  const { drawerOpen } = useDrawer();
  const { pathname } = useRouter();
  const mainRef = useRef<HTMLElement>(null);

  const className = cx({
    'inner-container': true,
    hide: drawerOpen,
  });

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      <Head>
        <title>니콘내콘</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={cx('outer-container')}>
        <main className={className} ref={mainRef}>
          {children}
        </main>
        <DrawerMenu />
      </main>
    </>
  );
}

export default Layout;
