import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import ChevronDownIcon from '@/components/icons/ChevronDownIcon';

import styles from '@/components/faq/faq-dropdown-item/styles.module.scss';

const cx = classNames.bind(styles);

const FaqDropdownItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setOpen(prev => !prev);
  };

  const questionIconClassName = cx({
    'question-icon': true,
    open,
  });

  const answerClassName = cx({
    answer: true,
    open,
  });

  useEffect(() => {
    return () => setOpen(false);
  }, []);

  return (
    <li className={cx('dropdown-item')}>
      <h2 className={cx('question')} onClick={toggleDropdown}>
        <span className={cx('question-bullet')}>Q.</span>
        <p className={cx('question-text')}>{question}</p>
        <ChevronDownIcon className={questionIconClassName} />
      </h2>
      <p className={answerClassName}>{answer}</p>
    </li>
  );
};

export default FaqDropdownItem;
