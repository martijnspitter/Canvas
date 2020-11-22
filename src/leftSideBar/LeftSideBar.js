import React from 'react';

import styled from 'styled-components';
import { SideBar, Title } from '../defaultStyles';

import { useInsertItem } from './useInsertItem';
import ItemDetails from './ItemDetails';

const handleDragStart = (event) => {
	const type = event.target.dataset.shape;

	if (type) {
		// x,y coordinates of the mouse pointer relative to the position of the padding edge of the target node
		const offsetX = event.nativeEvent.offsetX;
		const offsetY = event.nativeEvent.offsetY;

		// dimensions of the node on the browser
		const clientWidth = event.target.clientWidth;
		const clientHeight = event.target.clientHeight;

		const dragPayload = JSON.stringify({
			type,
			offsetX,
			offsetY,
			clientWidth,
			clientHeight
		});

		event.nativeEvent.dataTransfer.setData('__drag_data_payload__', dragPayload);
	}
};

const IconGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	flex-wrap: wrap;
	/* border: 1px solid #333;
	border-radius: 6px; */
	margin: 2rem 0;
`;

const Rectangle = styled.div`
	width: 60px;
	height: 30px;
	border: 2px solid black;
	background-color: white;
`;

const RounderRect = styled.div`
	width: 60px;
	height: 30px;
	border: 2px solid black;
	border-radius: 10px;
	background-color: white;
`;

const Ellipse = styled.div`
	width: 60px;
	height: 30px;
	border: 2px solid black;
	border-radius: 50%;
	background-color: white;
`;

const ItemDetailsGroup = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 1rem;
	width: 100%;
`;

export default function Palette() {
	const insertItem = useInsertItem();
	return (
		<SideBar>
			<Title>Shapes</Title>
			<IconGroup>
				<Rectangle
					data-shape="rectangle"
					onClick={() => insertItem('rectangle')}
					draggable
					onDragStart={handleDragStart}
				/>
				<RounderRect
					data-shape="roundedRect"
					onClick={() => insertItem('roundedRect')}
					draggable
					onDragStart={handleDragStart}
				/>
				<Ellipse data-shape="ellipse" onClick={() => insertItem('ellipse')} draggable onDragStart={handleDragStart} />
			</IconGroup>
			<ItemDetailsGroup>
				<ItemDetails />
			</ItemDetailsGroup>
		</SideBar>
	);
}
