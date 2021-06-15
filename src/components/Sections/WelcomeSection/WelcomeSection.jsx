import React from 'react';

import starSrc from '../../../assets/images/star.svg';

import classes from './WelcomeSection.module.scss';

const WelcomeSection = () => {
  return (
    <section className={classes.welcome}>
      <h1 className={classes.appTitle}>Lang Storage</h1>

      <p className={classes.prettyText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cumque dolor earum eligendi, inventore natus
          nemo, praesentium quia recusandae soluta sunt temporibus? Atque consequatur illo itaque laboriosam libero modi
          reiciendis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aperiam architecto aut,
          commodi consectetur culpa cupiditate dolore dolorem dolorum ea, est impedit inventore modi necessitatibus
          perferendis possimus quae rem repellendus rerum tempora ut voluptate, voluptatum.
      </p>

      <div className={classes.figures}>
        <div className={classes.ellipse} />
        <div className={classes.squares}>
          <div className={classes.square} />
          <div className={classes.square} />
          <div className={classes.square} />
        </div>
        <img src={starSrc} alt='Star' className={classes.star} />
      </div>
    </section>
  );
};

export default WelcomeSection;
