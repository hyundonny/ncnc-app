import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import classNames from 'classnames/bind';

import DefaultHeader from '@/components/headers/default-header';
import ItemBox from '@/components/item-box';
import WarningItem from '@/components/warning-item';
import ItemOptionsContainer from '@/components/item-options/item-options-container';

import { getProductDetail } from '@/lib/api';
import { modifyWarning } from '@/utils/modifyWarning';
import { ItemDetailType, OptionType } from '@/types/productDetail';

import styles from '@/styles/pages/items/styles.module.scss';
import ItemOption from '@/components/item-options/item-option';
import PencilIcon from '@/components/icons/PencilIcon';
import { modifyDate } from '@/utils/modifyDate';

const cx = classNames.bind(styles);

const ItemDetailPage = ({ conItem }: { conItem: ItemDetailType }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    setSelectedOption(null);
  };

  const selectOption = ({ expireAt, count, sellingPrice }: OptionType) => {
    setSelectedOption({ expireAt, count, sellingPrice });
    setMenuOpen(false);
  };

  const router = useRouter();

  const buyItem = () => {
    if (!selectedOption) return;

    alert('로그인 해주세요!');
    router.push('/');
  };

  const handleButtonClick = () => {
    toggleMenu();
  };

  const item = {
    id: conItem.id,
    name: conItem.name,
    brand: conItem.conCategory2.name,
    discountRate: conItem.discountRate,
    sellingPrice: conItem.ncSellingPrice,
    originalPrice: conItem.originalPrice,
    imageSrc: conItem.imageUrl,
  };

  return (
    <>
      <DefaultHeader />
      <div className={cx('item-info-container')}>
        <ItemBox item={item} isAnchorElement={false} />
        <div className={cx('main-container')}>
          <div className={cx('warning-container')}>
            {conItem.warning &&
              modifyWarning(conItem.warning).map(warning => (
                <WarningItem key={warning.title} warning={warning} />
              ))}
          </div>
          <div
            className={cx({ overlay: true, closed: !menuOpen })}
            onClick={toggleMenu}></div>
        </div>
        {selectedOption && (
          <div className={cx('selected-option-container')}>
            <p className={cx('selected-option')} onClick={toggleMenu}>
              <span>
                {modifyDate(selectedOption.expireAt)} /{' '}
                {selectedOption.sellingPrice}원
              </span>
              <PencilIcon className={cx('pencil-icon')} />
            </p>
          </div>
        )}
        <div className={cx('sub-container')}>
          <button
            type="button"
            className={cx('item-toggle-button')}
            disabled={menuOpen}
            onClick={selectedOption ? buyItem : toggleMenu}>
            {selectedOption ? '구매하기' : '옵션 선택하기'}
          </button>
          <ItemOptionsContainer open={menuOpen} toggle={toggleMenu}>
            {conItem.options.map((option, idx) => {
              return (
                <ItemOption
                  option={option}
                  originalPrice={conItem.originalPrice}
                  selectOption={selectOption}
                  key={idx}
                />
              );
            })}
          </ItemOptionsContainer>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { data } = await getProductDetail(Number(query.id));
    return {
      props: { conItem: data.conItem },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default ItemDetailPage;
