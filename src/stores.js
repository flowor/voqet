import { readable, derived } from 'svelte/store';

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

const endDate = new Date('September 11, 2024 00:00:00');

export const countDown = derived(
	time,
	// @ts-ignore
	($time) => Math.abs((endDate - $time) / 1000)
);
