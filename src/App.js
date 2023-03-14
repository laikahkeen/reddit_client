import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Header } from './features/header/Header';
import { Counter } from './features/counter/Counter';
import { Footer } from './features/footer/Footer';
import ROUTES from './app/routes';
import './App.css';

export default function App() {
	return (
		<BrowserRouter>
			<nav>
				<ul>
					<li>
						<NavLink
							to={ROUTES.index()}
							className={(navData) => (navData.isActive ? 'active' : '')}>
							Index
						</NavLink>
					</li>
					<li>
						<NavLink
							to={ROUTES.header()}
							className={(navData) => (navData.isActive ? 'active' : '')}>
							Header
						</NavLink>
					</li>
					<li>
						<NavLink
							to={ROUTES.counter()}
							className={(navData) => (navData.isActive ? 'active' : '')}>
							Counter
						</NavLink>
					</li>
					<li>
						<NavLink
							to={ROUTES.footer()}
							className={(navData) => (navData.isActive ? 'active' : '')}>
							Footer
						</NavLink>
					</li>
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
