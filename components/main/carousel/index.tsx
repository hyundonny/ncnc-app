import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';

import styles from '@/components/main/carousel/styles.module.scss';
import bannerList, { fakeBanner } from 'constants/banner';
import CarouselBtn from './carousel-btn';

const cx = classNames.bind(styles);

const Carousel = (): JSX.Element => {
  const [bannerActive, setBannerActive] = useState(0);
  const [speed, setSpeed] = useState(300);

  const moveBannerBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSpeed(300);
    setBannerActive(Number(e.currentTarget.value));
  };

  const moveBannerRight = () => {
    if (bannerActive + 1 >= bannerList.length) {
      setBannerActive(bannerList.length);

      setTimeout(() => {
        setSpeed(0);
        setBannerActive(0);
      }, 200);
    } else {
      setSpeed(300);
      setBannerActive(bannerActive + 1);
    }
  };

  useEffect(() => {
    const loop = setInterval(() => {
      moveBannerRight();
    }, 4000);

    return () => clearInterval(loop);
  });

  return (
    <div className={cx('box')}>
      <div
        className={cx('carousel')}
        style={{
          transform: `translateX(-${
            bannerActive * (100 / (bannerList.length + 1))
          }%)`,
          transitionDuration: `${speed}ms`,
        }}>
        {[...bannerList, fakeBanner].map((item, idx) => (
          <div key={idx} className={cx('banner')}>
            <Image
              className={cx('img')}
              src={item}
              layout="fill"
              objectFit="cover"
              priority={true}
              alt="banner"
            />
          </div>
        ))}
      </div>
      <CarouselBtn
        bannerLen={bannerList.length}
        active={bannerActive}
        onClick={moveBannerBtn}
      />
    </div>
  );
};

export default Carousel;
