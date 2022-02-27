import Link from 'next/link';
import classNames from 'classnames/bind';

import styles from '@/pages/404/styles.module.scss';

const cx = classNames.bind(styles);

const Custom404Page = () => {
  return (
    <div className={cx('four-o-four')}>
      <h1 className={cx('title')}>404</h1>
      <Link href="/">
        <a className={cx('button')}>홈으로 돌아가기</a>
      </Link>
    </div>
  );
};

export default Custom404Page;
