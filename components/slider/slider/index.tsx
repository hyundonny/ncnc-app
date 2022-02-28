import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/slider/slider/styles.module.scss';

const cx = classNames.bind(styles);

const Slider = ({ children }: { children: JSX.Element }) => {
  return <div className={cx('slider')}>{children}</div>;
};

export default Slider;
