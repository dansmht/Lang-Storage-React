import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchOtherTopics } from '../../../redux/actions/topicsActions';
import SortButton from '../../shared/SortButton/SortButton';

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
      <ul className={classes.TopicList}>
        Topics
      </ul>
    </section>
  );
};

export default TopicsSection;
