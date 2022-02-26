import { useState } from 'react';
import classNames from 'classnames/bind';

import DefaultHeader from '@/components/headers/default-header';
import CloseIcon from '@/components/icons/CloseIcon';
import PencilIcon from '@/components/icons/PencilIcon';
import ItemBox from '@/components/item-box';

import { ItemDetailType, OptionType } from '@/types/productDetail';
import { calcDiscountRate } from '@/utils/calcDiscountRate';
import { addComma } from '@/utils/addComma';
import styles from '@/components/item-detail/styles.module.scss';
import { useRouter } from 'next/router';

interface ItemDetailProps {
  conItem: ItemDetailType;
}

const cx = classNames.bind(styles);

const ItemDetail = ({ conItem }: ItemDetailProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const router = useRouter();
  const openOption = () => {
    setIsActive(true);
    setSelectedOption(null);
  };

  const closeOption = () => {
    setIsActive(false);
    setSelectedOption(null);
  };

  const chooseOption = ({ expireAt, count, sellingPrice }: OptionType) => {
    setSelectedOption({ expireAt, count, sellingPrice });
    setIsActive(false);
  };

  const buyItem = () => {
    alert('로그인을 해주세요!');
    router.push('/');
  };

  const newOptions = conItem.options.map((option, idx) => {
    return (option = {
      ...option,
      id: idx,
      expireAt: `${new Intl.DateTimeFormat('ko-KR').format(
        new Date(option.expireAt),
      )} 까지`,
      sellingPrice: option.sellingPrice,
    });
  });
  const warningArray = conItem.warning?.split('\n\n');
  const splitWarningArray = warningArray
    ?.map(strings => strings.split(']\n'))
    ?.map(
      strings =>
        (strings = [
          strings[0].replace('[', ''),
          strings[1]?.replace(/-/g, '·'),
        ]),
    );

  return (
    <div className={cx('container')}>
      <DefaultHeader />
      <main className={cx('content-wrapper')}>
        <ItemBox
          name={conItem.name}
          store={conItem.conCategory2.name}
          discount={conItem.discountRate}
          price={conItem.minSellingPrice}
          original={conItem.originalPrice}
          image={conItem.imageUrl}
        />
        <div className={cx('content-box')}>
          {splitWarningArray &&
            splitWarningArray.map(warning => {
              return (
                <div key={warning[0]}>
                  <div className={cx('content-title')}>{warning[0]}</div>
                  <div className={cx('content-paragraph')}>{warning[1]}</div>
                </div>
              );
            })}
        </div>
      </main>
      <section className={cx('option-section', { hide: !isActive })}>
        <div className={cx('option-box')}>
          <div className={cx('option-header')}>
            옵션 선택하기
            <button type="button" onClick={closeOption}>
              <CloseIcon className={cx('close-icon')} />
            </button>
          </div>
          <ul>
            {newOptions.map(option => (
              <li key={option.id}>
                <button
                  type="button"
                  className={cx('option-each')}
                  onClick={() => {
                    chooseOption({
                      expireAt: option.expireAt,
                      count: option.count,
                      sellingPrice: option.sellingPrice,
                    });
                  }}>
                  <div className={cx('option-contents')}>
                    <div className={cx('option-content')}>
                      <p className={cx('option-content-title')}>유효기간</p>
                      <p className={cx('option-content-title')}>할인가</p>
                    </div>
                    <div className={cx('option-content')}>
                      <p className={cx('option-content-detail')}>
                        {option.expireAt}
                      </p>
                      <p className={cx('option-content-detail')}>
                        {addComma(option.sellingPrice)}
                      </p>
                    </div>
                  </div>
                  <p className={cx('option-discount')}>
                    {calcDiscountRate(
                      conItem.originalPrice,
                      option.sellingPrice,
                    )}{' '}
                    %
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <button
        onClick={buyItem}
        type="button"
        className={cx('select-button', 'purchase-button')}>
        {PURCHASE_MESSAGE}
      </button>
      <section
        className={cx('option-selected-box', { 'ready-buy': selectedOption })}>
        <button type="button" onClick={openOption} className={cx('re-select')}>
          {selectedOption &&
            `${selectedOption.expireAt} / ${selectedOption.sellingPrice}원`}
          <PencilIcon className={cx('pencil-icon')} />
        </button>
      </section>
      <button
        type="button"
        onClick={openOption}
        className={cx('select-button', {
          'cant-buy': isActive,
          hide: selectedOption,
        })}>
        {isActive ? PURCHASE_MESSAGE : SELECT_OPTION_MESSAGE}
      </button>
      <section className={cx('option-background', { hide: !isActive })}>
        <button
          className={cx('close-button')}
          type="button"
          onClick={closeOption}></button>
      </section>
    </div>
  );
};

const PURCHASE_MESSAGE = '구매하기';
const SELECT_OPTION_MESSAGE = '옵션 선택하기';

export default ItemDetail;
