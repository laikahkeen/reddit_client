import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Header } from './features/header/Header';
import { Counter } from './features/counter/Counter';
import { Footer } from './features/footer/Footer';
import ROUTES from './app/routes';
import './App.css';

export default function App() {
	const routes = [
		{ route: ROUTES.index(), label: 'Index' },
		{ route: ROUTES.header(), label: 'Header' },
		{ route: ROUTES.counter(), label: 'Counter' },
		{ route: ROUTES.footer(), label: 'Footer' },
	];

	return (
		<BrowserRouter>
			<nav>
				<ul>
					{routes.map((route, index) => (
						<li key={index}>
							<NavLink
								to={route.route}
								activeClassName='active'>
								{route.label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<Routes>
				<Route
					path='header'
					element={<Header />}>
					<Route
						path='counter'
						element={<Counter />}>
						<Route
							path='footer'
							element={<Footer />}></Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
