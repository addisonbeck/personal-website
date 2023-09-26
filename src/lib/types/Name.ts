export type Name = {
	first: string;
	last: string;
	get full(): string;
	get initials(): string;
	get asUsername(): string;
};
