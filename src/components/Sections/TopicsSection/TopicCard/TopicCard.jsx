import React from 'react';
import PropTypes from 'prop-types';

import classes from './TopicCard.module.scss';

const TopicCard = ({ topicData }) => {
  return (
    <li className={classes.TopicCard}>
      {JSON.stringify(topicData)}
    </li>
  );
};

TopicCard.propTypes = {
  topicData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isPrivate: PropTypes.bool.isRequired,
    position: PropTypes.string.isRequired,
    isCopied: PropTypes.bool.isRequired,
    copiedTimes: PropTypes.number.isRequired,
    originalTopicId: PropTypes.number,
    updatedDate: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.number.isRequired,
      nativeLocale: PropTypes.string.isRequired,
      nativeText: PropTypes.string.isRequired,
      targetLocale: PropTypes.string.isRequired,
      targetText: PropTypes.string.isRequired,
      examples: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
    copied: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default TopicCard;
