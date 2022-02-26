import { useRouter } from 'next/router';

import classNames from 'classnames/bind';

import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon';

import sharedStyles from '@/components/headers/shared-styles.module.scss';

const cx = classNames.bind(sharedStyles);

function DefaultHeader({ title }: { title?: string }) {
  const router = useRouter();

  return (
    <header className={cx('header', 'page')}>
      {title && title}
      <button onClick={() => router.back()}>
        <ChevronLeftIcon className={cx('icon', 'page')} />
      </button>
    </header>
  );
}

export default DefaultHeader;
