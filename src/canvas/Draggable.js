import React, { useState } from 'react';
import { DraggableCore } from 'react-draggable';
import { useRecoilState } from 'recoil';

import { itemWithIDAtom } from '../state/atoms';

export default function UseDraggable({ id, children }) {
	const [ item, setItem ] = useRecoilState(itemWithIDAtom(id));
	const [ offset, setOffset ] = useState({ x: 0, y: 0 });

	const moveItems = (movementX, movementY) => {
		setItem({
			...item,
			style: {
				...item.style,
				x: movementX,
				y: movementY
			}
		});
	};

	return (
		<DraggableCore
			bounds=".canvas"
			position={{ x: item.style.x, y: item.style.y }}
			onStart={(e) => {
				// record offset of mouse inside draggable item to stop jumping of item on drag start
				setOffset({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
			}}
			onDrag={(e) => {
				// record position minus left sidebar and navbar

				moveItems(e.x - 250 - offset.x, e.y - 30 - offset.y);
			}}
		>
			{children}
		</DraggableCore>
	);
}
