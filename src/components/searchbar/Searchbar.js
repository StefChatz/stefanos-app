import React from 'react';
import './Sidebar.css';

export const Searchbar = ({setSearchText}) => (
		<div className='Searchbar'>
			<input
				onChange={
					event =>
						setSearchText(event.target.value)
				}
			/>
		</div>
	);

