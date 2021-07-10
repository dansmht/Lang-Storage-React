import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { formatDate } from '../../../../utils/formatDate';
import CustomButton from '../../../shared/CustomButton/CustomButton';

import classes from './TopicCard.module.scss';

const TopicCard = ({ topicData }) => {
  return (
    <li className={classes.TopicCard}>
      <div className={classes.ContentWrapper}>
        <h4 className={classes.TopicTitle}>
          { topicData.name }
        </h4>
        <p className={classes.ExampleText}>
          { topicData.items[0].targetText }
        </p>
        <div className={classNames(classes.Dull, classes.Divider)}>
          translates as
        </div>
        <p className={classes.ExampleText}>
          { topicData.items[0].nativeText }
        </p>
        <div className={classes.InfoWrapper}>
          <div className={classes.Dull}>
            { topicData.user.name }
          </div>
          <div className={classes.Dull}>
            { formatDate(topicData.updatedDate) }
          </div>
        </div>
      </div>
      <CustomButton
        className={classes.AddButton}
        label='Add to my collection'
        orange
      />
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
