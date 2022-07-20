import { FC, useMemo } from 'react';

import clsx from 'clsx';

import { range } from '../../utils/range';

import styles from './index.module.css';

type Props = {
  className?: string;
  activePage: number;
  totalPageSize: number;
  onChange: (page: number) => void;
};

const START_PAGE = 1;
const DIFFERENCE = 1;
const DISPLAY_PAGE_SIZE = 10;
const STATIC_POSITION_NUMBER = 6;

export const Pagination: FC<Props> = ({ className, activePage, totalPageSize, onChange }) => {
  const min = useMemo(() => {
    let minPage: number;
    if (activePage < STATIC_POSITION_NUMBER) minPage = START_PAGE;

    if (totalPageSize - activePage < DISPLAY_PAGE_SIZE - STATIC_POSITION_NUMBER) {
      minPage = totalPageSize - DISPLAY_PAGE_SIZE + 1;
    }

    minPage = activePage - STATIC_POSITION_NUMBER + 1;

    return Math.max(Math.min(minPage, totalPageSize), START_PAGE);
  }, [activePage, totalPageSize]);

  const max = useMemo(() => {
    return Math.min(min + DISPLAY_PAGE_SIZE - 1, totalPageSize);
  }, [min, totalPageSize]);

  const displayLength = useMemo(() => max - min + 1, [max, min]);

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.buttonContainer}>
        <button type="button" className={styles.arrowIcon} onClick={() => onChange(START_PAGE)}>
          <img src="/images/arrow-right-double-gray.svg" alt="top" height={22} width={22} />
        </button>
        <button
          type="button"
          className={styles.arrowIcon}
          onClick={() => onChange(Math.max(activePage - DIFFERENCE, START_PAGE))}
        >
          <img src="/images/arrow-right-gray.svg" alt="prev" height={20} width={20} />
        </button>
      </div>
      {range(displayLength, min).map((num) => (
        <button type="button" key={num} onClick={() => onChange(num)}>
          {num}
        </button>
      ))}
      <div className={styles.buttonContainer}>
        <button
          type="button"
          onClick={() => onChange(Math.min(activePage + DIFFERENCE, totalPageSize))}
        >
          <img src="/images/arrow-right-gray.svg" alt="next" height={20} width={20} />
        </button>
        <button type="button" onClick={() => onChange(totalPageSize)}>
          <img src="/images/arrow-right-double-gray.svg" alt="last" height={20} width={20} />
        </button>
      </div>
    </div>
  );
};
