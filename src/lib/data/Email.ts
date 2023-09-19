import type Email from "$lib/types/Email"
import urls from "$lib/data/Urls"

const email: Email = {
  username: "hello",
  domain: urls.website.domain,
  get full(): string {
    return `${email.username}@${email.domain}`;
  }
}
export default email;

