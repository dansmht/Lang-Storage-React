import React, { memo, useMemo } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { LIMIT_PAGES_TO_SHOW, TOPICS_PER_PAGE } from '../../../utils/constants';
import { setCurrentPage } from '../../../redux/slices/topicsSlice';

import classes from './Pagination.module.scss';

const Pagination = memo(() => {
  console.log('RENDER PAGINATION');
  const currentPage = useSelector(state => state.topics.currentPage);
  const totalTopics = useSelector(state => state.topics.totalTopics);

  if (!totalTopics) return null;

  const dispatch = useDispatch();

  const totalPages = useMemo(() => Math.ceil(totalTopics / TOPICS_PER_PAGE), [totalTopics]);

  const pagesToShow = useMemo(() => {
    const halfPagesToShow = Math.floor(LIMIT_PAGES_TO_SHOW / 2);

    let startingPageToShow;

    if (currentPage - halfPagesToShow <= 0) {
      startingPageToShow = 1;
    } else if (currentPage + halfPagesToShow > totalPages) {
      startingPageToShow = currentPage - (currentPage + halfPagesToShow - totalPages) - halfPagesToShow;
    } else {
      startingPageToShow = currentPage - halfPagesToShow;
    }

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
