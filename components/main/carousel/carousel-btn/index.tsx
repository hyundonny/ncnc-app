import classNames from 'classnames/bind';
import styles from '@/components/main/carousel/carousel-btn/styles.module.scss';

interface CarouselBtnProps {
  bannerLen: number;
  active: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const cx = classNames.bind(styles);

const CarouselBtn = (props: CarouselBtnProps): JSX.Element => {
  const { bannerLen, active, onClick } = props;

  return (
    <div>
      {Array.from(Array(bannerLen).keys()).map(idx => (
        <button
          key={idx}
          className={cx({ btn: true, active: active === idx })}
          type="button"
          onClick={onClick}
          value={idx}
          style={{ right: `${7 - idx * 2}rem` }}
        />
      ))}
    </div>
  );
};

export default CarouselBtn;
