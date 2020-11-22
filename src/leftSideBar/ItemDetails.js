import React from 'react';

import { useRecoilValue } from 'recoil';

import { itemTextAndPosSelector } from '../state/selectors';

export default function ItemDetails() {
	const items = useRecoilValue(itemTextAndPosSelector);

	return (
		<React.Fragment>
			{items.map((item, index) => {
				return (
					<div key={index} style={{ width: '100%', display: 'flex', flexDirection: 'column', marginBottom: '.5rem' }}>
						<div>{item.text}</div>
						<div>
							Position: x: {item.x}, y: {item.y}
						</div>
					</div>
				);
			})}
		</React.Fragment>
	);
}
