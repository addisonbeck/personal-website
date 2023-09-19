import type Email from "$lib/types/Email"
const email: Email = {
  username: "hello",
  domain: "addisonbeck.com",
  get full(): string {
    return `${email.username}@${email.domain}`;
  }
}
export default email;

