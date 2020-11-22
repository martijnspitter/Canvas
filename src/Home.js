import React from 'react';

import Canvas from './canvas/Canvas';
import LeftSideBar from './leftSideBar/LeftSideBar';
import RightSideBar from './rightSideBar/RightSideBar';

export default function Home() {
	return (
		<div className="container">
			<LeftSideBar />
			<Canvas />
			<RightSideBar />
		</div>
	);
}
