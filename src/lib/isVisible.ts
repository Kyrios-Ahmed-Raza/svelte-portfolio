import { readable } from 'svelte/store';

export const matches = readable(true, (set) => {
	if (typeof window === 'undefined') return () => {};

	const query = window.matchMedia('(max-width: 768)');
	set(query.matches);
	const update = (match: any) => {
		set(match.matches);
	};
	query.addListener(update);

	return () => {
		query.removeListener(update);
	};
});
