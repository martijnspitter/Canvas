import { atom, atomFamily } from 'recoil';

export const itemIDsAtom = atom({
	key: 'itemIDs',
	default: []
});

export const selectedAtom = atom({
	key: 'selected',
	default: null
});

export const itemWithIDAtom = atomFamily({
	key: `item`,
	default: (type, style, text) => ({
		type: type,
		style: style,
		text: text
	})
});
