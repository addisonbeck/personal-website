import type Location from '$lib/types/Location';

const location: Location = {
	country: 'US',
	state: 'Alabama',
	city: 'Mobile',
	get toString(): string {
		return `${location.city}, ${location.state}`;
	}
};

export default location;
