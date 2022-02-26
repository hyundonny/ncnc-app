import classNames from 'classnames/bind';
import styles from '@/components/faq/faq-header/styles.module.scss';

const cx = classNames.bind(styles);

const FaqHeader = () => {
  return (
    <div className={cx('faq-time')}>
      <h1 className={cx('title')}>상담 시간 안내</h1>
      <p className={cx('content')}>평일 10:00 - 18:00</p>
      <p className={cx('subcontent')}>
        점심시간 12:30 - 13:30 / 토 ・ 일 ・ 공휴일 휴무
      </p>
    </div>
  );
};

export default FaqHeader;
