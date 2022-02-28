import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/slider/slider/styles.module.scss';

const cx = classNames.bind(styles);

const Slider = ({ children }: { children: JSX.Element }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseStartX, setMouseStartX] = useState(0);
  const [scrollStartX, setScrollStartX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setMouseDown(prev => !prev);
    if (sliderRef.current) {
      const slider = sliderRef.current as HTMLDivElement;
      slider.style.cursor = 'grabbing';
      setScrollStartX(slider.scrollLeft);
      setMouseStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setMouseDown(prev => !prev);

    if (sliderRef.current) {
      const slider = sliderRef.current as HTMLDivElement;
      slider.style.cursor = 'pointer';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mouseDown || !sliderRef.current) return;
    e.preventDefault();
    const dx = mouseStartX - e.clientX;
    sliderRef.current.scrollLeft = scrollStartX + dx;
  };

  const handleMouseLeave = () => {
    setMouseDown(false);
  };

  return (
    <div
      className={cx('slider')}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}>
      {children}
    </div>
  );
};

export default Slider;
