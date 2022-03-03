import classNames from 'classnames/bind';

import styles from '@/components/warning-item/styles.module.scss';

const cx = classNames.bind(styles);

interface Warning {
  title: string;
  contents: string[];
}

const WarningItem = ({ warning }: { warning: Warning }) => {
  return (
    <div className={cx('warning-item')}>
      <p className={cx('warning-item-title')}>{warning.title}</p>
      {warning.contents.map((text, idx) => (
        <p key={idx} className={cx('warning-item-content')}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default WarningItem;
