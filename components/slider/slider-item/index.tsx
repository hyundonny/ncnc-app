import classNames from 'classnames/bind';
import styles from '@/components/slider/slider-item/styles.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);

interface SliderItemProps {
  name: string;
  id: number;
  params: number;
}

const SliderItem = ({ name, id, params }: SliderItemProps) => {
  return (
    <Link href={`/categories/${id}`}>
      <a
        className={cx({
          'slider-item': true,
          active: params === id,
        })}>
        {name}
      </a>
    </Link>
  );
};

export default SliderItem;
