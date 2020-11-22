import React, { useRef } from 'react';

import { selectedAtom, itemWithIDAtom, itemIDsAtom } from '../state/atoms';
import { useRecoilState } from 'recoil';

import UseDraggable from './Draggable';
import Resizable from './Resizable';
import ItemRender from './ItemRender';

import styled from 'styled-components';

import _ from 'lodash';

const Container = styled.div`
	position: absolute;

	display: flex;
	align-items: center;
	justify-content: center;

	transition: 0.1s transform ease-out;
	outline: 3px solid ${(props) => (props.isSelected ? '#89c5e2' : 'transparent')};
	outline-offset: 5px;
`;

const InnerContainer = styled.div`
	width: 100% !important;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	:focus {
		outline: none !important;
	}
`;

export const Item = ({ id }) => {
	const [ item, setItem ] = useRecoilState(itemWithIDAtom(id));
	const [ selected, setSelected ] = useRecoilState(selectedAtom);
	const [ ids, setIds ] = useRecoilState(itemIDsAtom);

	const ref = useRef();

	const isSelected = () => {
		return selected === id;
	};

	const style = {
		...item.style,
		top: item.style.y,
		left: item.style.x
	};

	const textInput = (e) => {
		setItem({
			...item,
			text: e.target.value
		});
	};

	const handleDelete = (e) => {
		if (e.key === 'Delete') {
			const idIndex = ids.findIndex((idInIds) => idInIds === id);
			const idsCopy = _.cloneDeep(ids);
			idsCopy.splice(idIndex, 1);
			setIds(idsCopy);
		}
	};

	return (
		<Resizable id={id} isSelected={isSelected()}>
			<Container
				style={{
					...style
				}}
				isSelected={isSelected()}
				onMouseDown={() => {
					setSelected(id);
				}}
			>
				<UseDraggable id={id} nodeRef={ref}>
					<InnerContainer onKeyDown={(e) => handleDelete(e)} tabIndex={0} id="ItemDraggable" ref={ref}>
						<ItemRender item={item} id={id} setSelected={setSelected} textInput={textInput} />
					</InnerContainer>
				</UseDraggable>
			</Container>
		</Resizable>
	);
};
