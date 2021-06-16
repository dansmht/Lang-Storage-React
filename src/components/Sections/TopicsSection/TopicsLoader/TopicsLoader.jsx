import React from 'react';
import ContentLoader from 'react-content-loader';

import classes from './TopicsLoader.module.scss';

const TopicsLoader = () => {
  let loadersNumber = 1;

  if (innerWidth > 1260) {
    loadersNumber = 4;
  } else if (innerWidth > 970) {
    loadersNumber = 3;
  } else if (innerWidth > 666) {
    loadersNumber = 2;
  }

  if (innerHeight > 900) {
    loadersNumber *= 2;
  }

  return (
    <ul className={classes.TopicsLoader}>
      {
        Array(loadersNumber).fill(null).map((_, i) => (
          <li key={i}>
            <ContentLoader
              speed={2}
              width={280}
              height={411}
              viewBox='0 0 280 411'
              backgroundColor='#f3f3f3'
              foregroundColor='#ecebeb'
            >
              <rect x='30' y='20' rx='3' ry='3' width='220' height='25' />
              <rect x='30' y='55' rx='3' ry='3' width='220' height='132' />
              <rect x='30' y='202' rx='3' ry='3' width='72' height='16' />
              <rect x='30' y='233' rx='3' ry='3' width='220' height='127' />
              <rect x='30' y='375' rx='3' ry='3' width='121' height='16' />
              <rect x='192' y='375' rx='3' ry='3' width='68' height='16' />
            </ContentLoader>
          </li>
        ))
      }
    </ul>
  );
};

export default TopicsLoader;
