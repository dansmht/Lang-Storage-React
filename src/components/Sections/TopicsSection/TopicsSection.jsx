import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchOtherTopics } from '../../../redux/actions/topicsActions';
import SortButton from '../../shared/SortButton/SortButton';
import TopicsLoader from './TopicsLoader/TopicsLoader';

import classes from './TopicsSection.module.scss';

const TopicsSection = () => {
  const { topics, isLoading } = useSelector(state => state.topics);
  console.log('topics', topics, 'isLoading', isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOtherTopics());
  }, []);

  return (
    <section className={classes.TopicsSection}>
      <header className={classes.TopicHeader}>
        <p className={classes.title}>Other people&apos;s topics</p>
        <SortButton />
      </header>
      {
        isLoading
          ? (
            <TopicsLoader />
          )
          : topics?.length
            ? (
              <ul className={classes.TopicList}>
                Topics
              </ul>
            )
            : <div>There are no topics yet. Be the first add your own topic!</div>
      }
    </section>
  );
};

export default TopicsSection;
