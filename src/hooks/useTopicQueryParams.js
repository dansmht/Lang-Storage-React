import { useState } from 'react';
import { useSelector } from 'react-redux';
import history from '../utils/history';

export const useTopicQueryParams = () => {
  // const currentPage = useSelector((state) => state => state.topics.currentPage);
  const queryParams = new URLSearchParams(history.location.search);
  const currentPage = queryParams.get('page');
  return {
    currentPage,
  };
};
