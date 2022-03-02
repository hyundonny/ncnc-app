import classNames from 'classnames/bind';

import styles from '@/components/grid/grid-container/styles.module.scss';

const cx = classNames.bind(styles);

const GridContainer = ({ children }: { children: JSX.Element[] }) => {
  return <div className={cx('grid')}>{children}</div>;
};

export default GridContainer;
