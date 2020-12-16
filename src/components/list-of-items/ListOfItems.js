import {Card} from '../card';
import React from 'react';
import './ListOfItems.scss';
import PropTypes from 'prop-types';

export const ListOfItems = ({listOfGames}) => {
  // const filteredData = (data) => data.
  //     filter((item) => item.state === 'Virginia');
  //
  // const sortedDataById = (data) => sortBy(data, ['id']);
  //
  // const funcComp = flow([filteredData, sortedDataById]);

  return (
    <div className='ListOfItems'>
      <ul>
        {
          listOfGames.map((game) => {
            console.log('game', game);
            // eslint-disable-next-line max-len
            return <Card game={game}/>;
          })
        }
      </ul>
    </div>
  );
};

ListOfItems.propTypes = {
  data: PropTypes.object,
};

ListOfItems.defaultProps = {
  data: {},
};
