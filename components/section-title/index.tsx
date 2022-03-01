import classNames from 'classnames/bind';

import styles from '@/components/section-title/styles.module.scss';

const cx = classNames.bind(styles);

interface SectionTitleProps {
  highlight: string;
  title: string;
}

const SectionTitle = ({ highlight, title }: SectionTitleProps) => {
  return (
    <section className={cx('section-title')}>
      <p className={cx('highlight')}>{highlight}</p>
      <h2 className={cx('title')}>{title}!</h2>
    </section>
  );
};

export default SectionTitle;
