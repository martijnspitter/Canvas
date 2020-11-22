import { useSetRecoilState, useRecoilCallback, useRecoilValue } from 'recoil';
import { itemIDsAtom, itemWithIDAtom } from '../state/atoms';
import { stateToString } from '../state/selectors';

import { nanoid } from 'nanoid';

export function useInsertItem() {
	const setItemIDs = useSetRecoilState(itemIDsAtom);
	const url = useRecoilValue(stateToString);

	const defaultPos = {
		x: 20,
		y: 20
	};

	const defaultStyleRect = {
		width: 100,
		height: 50,
		fill: '#efefef',
		stroke: '#000000'
	};

	const defaultStyleEllipse = {
		width: 100,
		height: 50,
		fill: '#efefef',
		stroke: '#000000'
	};

	// const defaultStyleTriangle = {
	// 	width: 50,
	// 	height: 50,
	// 	fill: '#efefef',
	// 	stroke: '#000000'
	// };

	// since we don't know the type and position beforehand we use useRecoilCallback (see docs)
	return useRecoilCallback(({ set }) => {
		return (type, pos, urlStyle, urlText) => {
			// generate random id
			const id = nanoid();
			// set id in array of ids
			setItemIDs((itemIDs) => [ ...itemIDs, id ]);
			// position default or given from drop in Canvas.js
			const position = pos ? pos : defaultPos;
			// text default or from url in App.js
			const text = urlText ? urlText : '';

			if (type === 'rectangle') {
				// urlStyle comes from url. see useEffect in App.js
				const style = urlStyle ? urlStyle : defaultStyleRect;
				set(itemWithIDAtom(id), {
					type: type,
					style: { ...style, x: position.x, y: position.y },
					text: text
				});
			}
			if (type === 'roundedRect') {
				// urlStyle comes from url. see useEffect in App.js
				const style = urlStyle ? urlStyle : defaultStyleRect;
				set(itemWithIDAtom(id), {
					type: type,
					style: { ...style, x: position.x, y: position.y },
					text: text
				});
			}
			if (type === 'ellipse') {
				// urlStyle comes from url. see useEffect in App.js
				const style = urlStyle ? urlStyle : defaultStyleEllipse;
				set(itemWithIDAtom(id), {
					type: type,
					style: { ...style, x: position.x, y: position.y },
					text: text
				});
			}
		};
	});
}
