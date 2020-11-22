import React, { useEffect, useState } from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import NavBar from './NavBar';
import Modal from './Modal';

import { useInsertItem } from './leftSideBar/useInsertItem';

import './App.scss';

function App() {
	const insertItem = useInsertItem();
	const [ show, setShow ] = useState(false);

	const onHide = () => {
		setShow(false);
	};

	const onShow = () => {
		setShow(true);
	};

	useEffect(() => {
		const string = window.location.hash;

		const splitString = string.substring(3).split('&');

		if (splitString[0] === '') return;

		splitString.map((itemState) => {
			const splitState = itemState.split('+');

			let type = null;
			if (splitState[0] === 're') type = 'rectangle';
			if (splitState[0] === 'el') type = 'ellipse';
			if (splitState[0] === 'ro') type = 'roundedRect';

			const pos = {
				x: parseInt(splitState[4]),
				y: parseInt(splitState[5])
			};

			const style = {
				width: parseInt(splitState[6]),
				height: parseInt(splitState[7]),
				fill: '#'.concat(splitState[2]),
				stroke: '#'.concat(splitState[3])
			};

			const string = splitState[1];
			const text = string.replace(/%20/g, ' ');

			return insertItem(type, pos, style, text);
		});
	}, []);

	return (
		<div className="app">
			<NavBar setShow={onShow} />
			<Modal show={show} onHide={onHide} />
			<HashRouter basename="">
				<Switch>
					<Route path="*" component={Home} />
				</Switch>
			</HashRouter>
		</div>
	);
}

export default App;
