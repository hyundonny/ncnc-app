import { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';

import styles from '@/components/carousel/styles.module.scss';
import CarouselBtn from '@/components/carousel/carousel-btn';

import banner1 from 'assets/images/compressed-banner1.png';
import banner2 from 'assets/images/compressed-banner2.png';
import banner3 from 'assets/images/compressed-banner3.png';

const bannerList = [banner1, banner2, banner3];

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
          transform: `translateX(-${bannerActive * 100}%)`,
          transitionDuration: `${speed}ms`,
        }}>
        {[...bannerList, bannerList[0]].map((item, idx) => (
          <div key={idx} className={cx('banner')}>
            <Image
              className={cx('img')}
              src={item}
              layout="fill"
              objectFit="cover"
              priority={idx === 0}
              alt="banner"
              placeholder="blur"
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
