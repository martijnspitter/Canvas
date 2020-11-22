import React from 'react';
import { Resizable as ReactResizable } from 'react-resizable';
import { useRecoilState } from 'recoil';
import { itemWithIDAtom } from '../state/atoms';

import styled, { css } from 'styled-components';

export default function Resizable({ id, children, isSelected }) {
	const [ item, setItem ] = useRecoilState(itemWithIDAtom(id));

	return (
		<ReactResizable
			width={item.style.width}
			height={item.style.height}
			onResize={(_, { size }) => {
				setItem((item) => ({
					...item,
					style: {
						...item.style,
						width: Math.round(size.width),
						height: Math.round(size.height)
					}
				}));
			}}
			resizeHandles={[ 'sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's' ]}
			handle={(h) => <Handle className={`handle-${h}`} isVisible={isSelected} />}
		>
			{children}
		</ReactResizable>
	);
}

const Handle = styled.span`
	position: absolute;
	width: 7px;
	height: 7px;
	background-color: #89c5e2;
	border-radius: 1px;
	opacity: 0;
	pointer-events: none;
	transition: 0.1s opacity ease-in-out;
	${(props) =>
		props.isVisible &&
		css`
			opacity: 1;
			pointer-events: initial;
		`} &.handle-sw {
		bottom: -9px;
		left: -9px;
		cursor: sw-resize;
	}
	&.handle-se {
		bottom: -9px;
		right: -9px;
		cursor: se-resize;
	}
	&.handle-nw {
		top: -9px;
		left: -9px;
		cursor: nw-resize;
	}
	&.handle-ne {
		top: -9px;
		right: -9px;
		cursor: ne-resize;
	}
	&.handle-w,
	&.handle-e {
		top: calc(50% -5px);

		cursor: ew-resize;
	}
	&.handle-w {
		left: -10px;
	}
	&.handle-e {
		right: -10px;
	}
	&.handle-n,
	&.handle-s {
		left: calc(50% -5px);

		cursor: ns-resize;
	}
	&.handle-n {
		top: -10px;
	}
	&.handle-s {
		bottom: -10px;
	}
`;
