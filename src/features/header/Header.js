import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../logo.svg';

export function Header() {
	return (
		<div className='App-header'>
			<img
				src={logo}
				className='App-logo'
				alt='logo'
			/>
			<Outlet />
		</div>
	);
}
