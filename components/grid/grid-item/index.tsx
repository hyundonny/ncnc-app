/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import classNames from 'classnames/bind';

import styles from '@/components/grid/grid-item/styles.module.scss';
import Link from 'next/link';

interface GridItemProps {
  name: string;
  url: string;
  href: string;
}

const cx = classNames.bind(styles);

const GridItem = ({ name, url, href }: GridItemProps) => {
  return (
    <Link href={href}>
      <a className={cx('grid--link')}>
        <figure className={cx('grid--item')}>
          <Image
            className={cx('grid--image')}
            alt={name}
            src={url}
            width={45}
            height={45}
          />
          <figcaption>{name}</figcaption>
        </figure>
      </a>
    </Link>
  );
};

export default GridItem;
