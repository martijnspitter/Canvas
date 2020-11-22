import React from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';
import { itemIDsAtom, selectedAtom } from '../state/atoms';
import { itemDetailsSelector } from '../state/selectors';

import styled from 'styled-components';
import { SideBar, Title } from '../defaultStyles';

import { useSetRecoilState } from 'recoil';

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 100%;
	padding: 2rem 2rem;
	flex: 1;
`;

const FlexRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 2rem;
	width: 100%;
`;

const Value = styled.input`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5rem;
	background-color: inherit;
	:focus {
		outline: none;
	}
`;

const Button = styled.button`
	width: 10rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ced4da;
	align-self: flex-end;
	padding: 1rem 0;
	border-radius: 3px;
	cursor: pointer;
	margin-bottom: 3rem;
`;

export default function PropertiesPanel() {
	const selected = useRecoilValue(selectedAtom);
	const [ selectedItem, setSelectedItem ] = useRecoilState(itemDetailsSelector);
	const setIds = useSetRecoilState(itemIDsAtom);

	const updateAttr = (e) => {
		let value = e.target.value;
		if (e.target.name === 'x' || e.target.name === 'y' || e.target.name === 'width' || e.target.name === 'height') {
			value = parseInt(e.target.value);
		}
		setSelectedItem({
			...selectedItem,
			style: {
				...selectedItem.style,
				[e.target.name]: value
			}
		});
	};

	const resetCanvas = () => {
		setIds([]);

		window.location.hash = '#';
	};

	return (
		<SideBar>
			<Title>Properties</Title>
			<FlexColumn>
				{selected ? (
					<React.Fragment>
						<FlexRow>
							Type <span className="value">{selectedItem.type}</span>
						</FlexRow>

						<FlexRow>
							Stroke <Value name="stroke" type="color" value={selectedItem.style.stroke} onChange={updateAttr} />
						</FlexRow>

						<FlexRow>
							Fill <Value name="fill" type="color" value={selectedItem.style.fill} onChange={updateAttr} />
						</FlexRow>
						<FlexRow>
							Position X <Value name="x" type="number" value={selectedItem.style.x} onChange={updateAttr} />
						</FlexRow>
						<FlexRow>
							Position Y <Value name="y" type="number" value={selectedItem.style.y} onChange={updateAttr} />
						</FlexRow>

						<FlexRow>
							Width <Value name="width" type="number" value={selectedItem.style.width} onChange={updateAttr} />
						</FlexRow>
						<FlexRow>
							Height <Value name="height" type="number" value={selectedItem.style.height} onChange={updateAttr} />
						</FlexRow>
					</React.Fragment>
				) : (
					<div className="no-data">Nothing is selected</div>
				)}
			</FlexColumn>
			<Button onClick={() => resetCanvas()}>Clear Canvas</Button>
		</SideBar>
	);
}
