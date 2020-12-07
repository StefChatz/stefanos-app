import {flow, sortBy} from 'lodash';
import React from 'react';
import './ListOfItems.scss';

export const ListOfItems = ({data}) => {

	const filteredData = (data) => data.filter(item => item.state === "Virginia");

	const sortedDataById = (data) => sortBy(data, ['id'])

	const funcComp = flow([filteredData, sortedDataById])

	return(
		<div className='ListOfItems'>
			<ul>
				{funcComp(data).map(({name, id, state}) =>
					<li key={id} className='itemName'>{`${id} ${name} / ${state}`}</li>,
				)}
			</ul>
		</div>
	);
}
