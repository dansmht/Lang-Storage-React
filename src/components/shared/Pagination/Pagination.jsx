import React, { memo, useMemo } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage } from '../../../redux/slices/topicsSlice';

import classes from './Pagination.module.scss';

const LIMIT_PAGES_TO_SHOW = 5;

const Pagination = memo(() => {
  console.log('RENDER PAGINATION');
  const currentPage = useSelector(state => state.topics.currentPage);
  const totalTopics = useSelector(state => state.topics.totalTopics);

  if (!totalTopics) return null;

  const dispatch = useDispatch();

  const totalPages = useMemo(() => Math.ceil(totalTopics / 12), [totalTopics]);

  const pagesToShow = useMemo(() => {
    const estimatedStartingPage = currentPage - (Math.floor(LIMIT_PAGES_TO_SHOW / 2));
    const startingPageToShow = estimatedStartingPage <= 0 ? 1 : estimatedStartingPage;

    return [...Array(totalPages >= LIMIT_PAGES_TO_SHOW ? LIMIT_PAGES_TO_SHOW : totalPages)]
      .map((_, index) => startingPageToShow + index);
  }, [currentPage]);

  const chooseActivePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const chooseFirstPage = () => {
    chooseFirstPage(1);
  };

  const chooseLastPage = () => {
    chooseFirstPage(totalPages);
  };

  return (
    <ul className={classes.Pagination}>
      <li className={classes.PaginationItem}>
        <button
          onClick={chooseFirstPage}
          disabled={currentPage === 1}
        >
          First page
        </button>
      </li>

      {pagesToShow.map((page) => (
        <li key={page} className={classes.PaginationItem}>
          <button
            className={classNames(classes.PageButton, {
              [`${classes.ActivePage}`]: page === currentPage,
            })}
            onClick={() => chooseActivePage(page)}
            disabled={page === currentPage}
          >
            { page }
          </button>
        </li>
      ))}

      <li className={classes.PaginationItem}>
        <button
          onClick={chooseLastPage}
          disabled={currentPage === totalPages}
        >
          Last page
        </button>
      </li>
    </ul>
  );
});

export default Pagination;
