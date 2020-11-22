import React, { useRef, useState } from 'react';

import { Item } from './Item';

import { selectedAtom, itemIDsAtom } from '../state/atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { itemDetailsSelector } from '../state/selectors';

import { useInsertItem } from '../leftSideBar/useInsertItem';

import styled from 'styled-components';

const StyledCanvas = styled.div`
	height: 100%;

	flex: 1 1 auto;
	position: relative;
	background-color: #fff;
	:focus {
		outline: none;
	}
`;

export default function Canvas() {
	const itemIDs = useRecoilValue(itemIDsAtom);
	const setSelected = useSetRecoilState(selectedAtom);
	const selected = useRecoilValue(itemDetailsSelector);
	const [ itemToCopy, setItemToCopy ] = useState(undefined);
	const inserItem = useInsertItem();

	const ref = useRef(null);

	const clearSelection = (e) => {
		if (e.currentTarget === e.target) setSelected(null);
	};

	const handleDragOver = (event) => event.preventDefault();

	const handleDrop = (event) => {
		const draggedData = event.nativeEvent.dataTransfer.getData('__drag_data_payload__');

		if (draggedData) {
			const { type } = JSON.parse(draggedData);

			const pos = { x: event.nativeEvent.offsetX - 50, y: event.nativeEvent.offsetY - 25 };

			inserItem(type, pos);
		}
	};

	const copyPaste = (e) => {
		if (e.ctrlKey && e.key === 'c' && selected) {
			setItemToCopy({
				type: selected.type,
				pos: { x: selected.style.x + 20, y: selected.style.y + 20 },
				text: selected.text,
				style: {
					width: selected.style.width,
					height: selected.style.height,
					stroke: selected.style.stroke,
					fill: selected.style.fill
				}
			});
		}
		if (e.ctrlKey && e.key === 'v' && itemToCopy) {
			inserItem(itemToCopy.type, itemToCopy.pos, itemToCopy.style, itemToCopy.text);
		}
	};

	return (
		<StyledCanvas
			className="canvas"
			ref={ref}
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			onClick={(e) => clearSelection(e)}
			onKeyDown={(e) => copyPaste(e)}
			tabIndex="0"
		>
			{itemIDs.map((id) => <Item key={id} id={id} />)}
		</StyledCanvas>
	);
}
