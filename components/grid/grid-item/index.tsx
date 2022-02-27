import classNames from 'classnames/bind';

import styles from '@/components/grid/grid-item/styles.module.scss';

interface GridItemProps {
  name: string;
  url: string;
  handleClick: () => void;
}

const cx = classNames.bind(styles);

const GridItem = ({ name, url, handleClick }: GridItemProps) => {
  return (
    <button className={cx('grid--link')} onClick={handleClick}>
      <div className={cx('grid--item')}>
        <img src={url} alt={name} className={cx('grid--image')} />
        <p>{name}</p>
      </div>
    </button>
  );
};

export default GridItem;
