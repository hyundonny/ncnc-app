import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/item-options/item-options-container/styles.module.scss';
import CloseIcon from '@/components/icons/CloseIcon';
const cx = classNames.bind(styles);

const ItemOptionsContainer = ({
  open,
  toggle,
  children,
}: {
  open: boolean;
  toggle: () => void;
  children: JSX.Element[];
}) => {
  const optionsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (optionsContainerRef.current) {
      const height = optionsContainerRef.current.clientHeight;
      if (optionsContainerRef.current.className.includes('open')) {
        optionsContainerRef.current.style.bottom = '100%';
      } else {
        optionsContainerRef.current.style.bottom = '-' + height + 'px';
      }
    }
  });

  return (
    <div
      className={cx({ 'item-options': true, open })}
      ref={optionsContainerRef}>
      <div className={cx('item-options-title')}>
        <span>옵션 선택하기</span>
        <button type="button" onClick={toggle}>
          <CloseIcon className={cx('close-icon')} />
        </button>
      </div>
      <ul className={cx('item-options-list')}>{children}</ul>
    </div>
  );
};

export default ItemOptionsContainer;
