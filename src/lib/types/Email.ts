class Email {
	public full: string;

	constructor(
		public username: string,
		public domain: string,
	) {
		this.full = `${username}@${domain}`;
	}
};
export default Email;
