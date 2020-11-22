import React from 'react';

import styled from 'styled-components';

import logo from './images/logo.svg';

const Nav = styled.nav`
	width: 100%;
	height: 4rem;
	display: flex;
	justify-content: flex-start;
	background-color: #dee2e6;
	position: relative;
	top: 0;
	left: 0;
`;

export default function NavBar({ setShow }) {
	return (
		<Nav>
			<a href="http://martijnspitter.nl">
				<img
					src={logo}
					alt="martijnspitter.nl logo"
					className="cvlogo"
					style={{ width: '3rem', height: '3rem', marginLeft: '1rem' }}
				/>
			</a>
			<div onClick={() => setShow(true)} style={{ marginLeft: '2rem', cursor: 'pointer', color: '#2274A5' }}>
				Documentation
			</div>
		</Nav>
	);
}
