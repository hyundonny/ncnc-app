import classNames from 'classnames/bind';

import HamburgerIcon from '@/components/icons/HamburgerIcon';

import sharedStyles from '@/components/headers/shared-styles.module.scss';

const cx = classNames.bind(sharedStyles);

function HomeHeader({ toggleDrawer }: { toggleDrawer: () => void }) {
  return (
    <header className={cx('header', 'page')}>
      <button
        type='button'
        onClick={toggleDrawer}
        className={cx('icon', 'page')}
        id='sidebar-button'
      >
        <HamburgerIcon />
      </button>
      니콘내콘
    </header>
  );
}

export default HomeHeader;
