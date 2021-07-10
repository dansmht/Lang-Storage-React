import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import history from '../../../utils/history';
import { setCurrentPage } from '../../../redux/slices/topicsSlice';
import { fetchOtherTopics } from '../../../redux/actions/topicsActions';
import TopicCard from './TopicCard/TopicCard';
import SortButton from '../../shared/SortButton/SortButton';
import TopicsLoader from './TopicsLoader/TopicsLoader';

import classes from './TopicsSection.module.scss';

const TopicsSection = () => {
  const dispatch = useDispatch();

  const { topics, isLoading, currentPage, totalTopics } = useSelector(state => state.topics);
  console.log('topics', topics, 'isLoading', isLoading);

  useEffect(() => {
    if (currentPage) return;

    const queryParams = new URLSearchParams(history.location.search);
    const page = +queryParams.get('page');

    if (page) {
      dispatch(setCurrentPage(page));
    } else {
      history.replace('/topics');
      dispatch(setCurrentPage(1));
    }
  }, []);

  useEffect(() => {
    if (currentPage) {
      dispatch(fetchOtherTopics());
    }
  }, [currentPage]);

  return (
    <section className={classes.TopicsSection}>
      <header className={classes.TopicHeader}>
        <p className={classes.Title}>Other people&apos;s topics</p>
        <SortButton />
      </header>
      {
        topics?.length
          ? (
            <ul className={classes.TopicList}>
              {topics.map((topic) => (
                <TopicCard key={topic.id} topicData={topic} />
              ))}
            </ul>
          )
          : isLoading
            ? (
              <TopicsLoader />
            )
            : <div>There are no topics yet. Be the first add your own topic!</div>
      }
    </section>
  );
};

export default TopicsSection;
