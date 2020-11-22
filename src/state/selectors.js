import { selector } from 'recoil';
import { itemIDsAtom, itemWithIDAtom, selectedAtom } from './atoms';

//left sidebar text and position details for each item
export const itemTextAndPosSelector = selector({
	key: 'itemTextAndPos',
	get: ({ get }) => {
		const ids = get(itemIDsAtom);
		const items = ids.map((id) => {
			const item = get(itemWithIDAtom(id));
			return { text: item.text, x: item.style.x, y: item.style.y };
		});

		return items;
	}
});

// all details from selected item
// (refactor to id[0] to facillitate multiple selected)
export const itemDetailsSelector = selector({
	key: 'itemDetails',
	get: ({ get }) => {
		const id = get(selectedAtom);
		if (id) return get(itemWithIDAtom(id));
	},
	set: ({ set, get }, newState) => {
		const id = get(selectedAtom);
		if (!id) return;
		set(itemWithIDAtom(id), newState);
	}
});

export const stateToString = selector({
	key: 'stateToString',
	get: ({ get }) => {
		let urlString = '';
		const ids = get(itemIDsAtom);
		if (ids.length === 0) return null;
		//urlString = urlString.concat('/');
		ids.map((id) => {
			const item = get(itemWithIDAtom(id));

			urlString = urlString.concat(
				'&',
				item.type[0] + item.type[1],
				'+',
				item.text,
				'+',
				item.style.fill.substring(1),
				'+',
				item.style.stroke.substring(1),
				'+',
				item.style.x,
				'+',
				item.style.y,
				'+',
				item.style.width,
				'+',
				item.style.height
			);
		});
		window.location.hash = urlString;

		return urlString;
	}
});
