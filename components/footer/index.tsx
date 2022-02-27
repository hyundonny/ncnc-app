import classNames from 'classnames/bind';

import styles from '@/components/footer/styles.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('footer')}>
      <Link href="/">
        <a className={cx('footer-link')}>회사소개서</a>
      </Link>
      <Link href="/">
        <a className={cx('footer-link')}>사업/제휴 문의</a>
      </Link>
      <Link href="/">
        <a className={cx('footer-link')}>개인정보처리방침</a>
      </Link>

      <div className={cx('footer-title')}>(주) 더블엔씨</div>
    </div>
  );
};

export default Footer;
