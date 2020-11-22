import React from 'react';

import styled from 'styled-components';
import { Title } from './defaultStyles';
import { MdClose } from 'react-icons/md';

const BackGround = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

const ModalWrapper = styled.div`
	width: 800px;
	height: 500px;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #f8f9fa;
	color: #333;
	/* display: grid;
	grid-template-columns: 1fr 1fr; */
	position: relative;
	z-index: 1001;
	border-radius: 10px;
	overflow-y: auto;

	--scrollbarBG: #f8f9fa;
	--thumbBG: #adb5bd;

	::-webkit-scrollbar {
		width: 11px;
	}

	scrollbar-width: thin;
	scrollbar-color: var(--thumbBG) var(--scrollbarBG);

	::-webkit-scrollbar-track {
		background: var(--scrollbarBG);
		border-radius: 10px;
	}
	::-webkit-scrollbar-thumb {
		background-color: var(--thumbBG);
		border-radius: 6px;
		border: 3px solid var(--scrollbarBG);
	}
`;

const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 2rem 5rem;

	p {
		margin-top: 3rem;
		align-self: flex-start;
	}

	div {
		margin-top: 3rem;
		align-self: flex-start;
	}
`;

const CloseButton = styled(MdClose)`
	position: absolute;
	top: 20px;
	right: 20px;
	width: 20px;
	height: 20px;
	padding: 0;
	z-index: 10;
	cursor: pointer;

`;

export default function Modal({ show, onHide }) {
	const backGroundClose = (e) => {
		if (e.target === e.currentTarget) onHide();
	};
	return (
		<React.Fragment>
			{show ? (
				<BackGround onClick={(e) => backGroundClose(e)}>
					<ModalWrapper show={show}>
						<ModalContent>
							<Title>Documentation</Title>
							<p>
								Proof of concept is complete. State of the app is transferable via the url. <br />On each state change
								the hash url is updated. When a page (re-)load takes place the hash url gets processed and the state is
								recalculated based on the url.
							</p>
							<p>
								<b>Current functionality: </b>
								<br />
								Left sidebar shows the shapes that can be created. It also shows an overview of all created shapes with
								their current position and text if that is set. Shapes are droppable on the canvas. Shapes can also be
								clicked and then they are created on a fixed position. The right sidebar shows the details (height,
								width, color, position) of the selected shape. These details can also be updated.
							</p>
							<div>
								<b>Yet to implement:</b>
								<br />
								<ul style={{ marginLeft: '2rem' }}>
									<li>Drawing of arrows between items to show relationships</li>
									<li>Selecting items from list on left sidebar</li>
									<li>Setting background color of canvas</li>
									<li>Change text via right sidebar</li>
								</ul>
							</div>
							<p>
								<b>Performance:</b>
								<br />
								Performance is hindered by the setting of the url when +20 items are present. Current idea as a solution
								/ workaround would be to add a share button which gives a link. Never set the url. On page load take url
								and get state from it and then reset url back to baseUrl. And only get state if hash url is present.
							</p>
						</ModalContent>
						<CloseButton aria-label="close button" onClick={() => onHide()} />
					</ModalWrapper>
				</BackGround>
			) : null}
		</React.Fragment>
	);
}
