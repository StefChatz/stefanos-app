import React from 'react';
import './Header.scss';
import AppleIcon from '@material-ui/icons/Apple';

export const Header = () => (
	<div className='Header'>
		<div className='Search'>
			<div className='Logo'><AppleIcon className='Icon'/></div>
			<div className='SearchBar'></div>
		</div>
		<div className='Carousel'></div>
		<div className='Settings'></div>
	</div>
	);
