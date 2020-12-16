import React from 'react';
import './ListOfItems.scss';
import PropTypes from 'prop-types';
export const ListOfItems = ({data}) => {
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
          data.map((i) => {
            console.log('i', i);
            // eslint-disable-next-line max-len
            return <li key={i._id}>{i.name}</li>;
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
