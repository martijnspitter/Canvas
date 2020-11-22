import React from 'react';

import styled from 'styled-components';

const Value = styled.input`
	text-align: center;
	width: 80%;
	max-width: 20rem;
	background-color: transparent !important;

	:focus {
		outline: none;
	}
`;

export default function ItemRender({ item, textInput }) {
	if (item.type === 'rectangle')
		return (
			<div
				style={{
					width: `100%`,
					height: `100%`,
					border: `2px solid ${item.style.stroke}`,
					backgroundColor: `${item.style.fill}`
				}}
			>
				<div
					style={{
						width: '100%',
						height: '100%',
						position: 'absolute',
						top: 0,
						left: 0,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Value
						onMouseDown={(e) => {
							if (e.currentTarget === e.target) {
								//e.stopPropagation();
							}
						}}
						onKeyDown={(e) => {
							if (e.currentTarget === e.target) {
								//e.stopPropagation();
							}
						}}
						className="fuckingAutofillInput"
						autocomplete="new password"
						name="text"
						type="text"
						value={item.text}
						onChange={textInput}
					/>
				</div>
			</div>
		);
	if (item.type === 'roundedRect')
		return (
			<div
				style={{
					width: `100%`,
					height: `100%`,
					border: `2px solid ${item.style.stroke}`,
					backgroundColor: `${item.style.fill}`,
					borderRadius: '10px'
				}}
			>
				<div
					style={{
						width: '100%',
						height: '100%',
						position: 'absolute',
						top: 0,
						left: 0,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Value
						onMouseDown={(e) => {
							if (e.currentTarget === e.target) {
								//e.stopPropagation();
							}
						}}
						onKeyDown={(e) => {
							if (e.currentTarget === e.target) {
								//e.stopPropagation();
							}
						}}
						autocomplete="new password"
						name="text"
						type="text"
						value={item.text}
						onChange={textInput}
					/>
				</div>
			</div>
		);
	if (item.type === 'ellipse')
		return (
			<div
				style={{
					width: '100%',
					height: '100%',
					border: `2px solid ${item.style.stroke}`,
					backgroundColor: `${item.style.fill}`,
					borderRadius: '50%'
				}}
			>
				<div
					style={{
						width: '100%',
						height: '100%',
						position: 'absolute',
						top: 0,
						left: 0,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Value
						onMouseDown={(e) => {
							if (e.currentTarget === e.target) {
								//e.stopPropagation();
							}
						}}
						onKeyDown={(e) => {
							if (e.currentTarget === e.target) {
								//e.stopPropagation();
							}
						}}
						autocomplete="new password"
						name="text"
						type="text"
						value={item.text}
						onChange={textInput}
					/>
				</div>
			</div>
		);
}
