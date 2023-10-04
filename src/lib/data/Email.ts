import Email from '$lib/types/Email';
import urls from '$lib/data/Urls';

const potentialUsernames = [
  'hello',
  'hi',
  'olleh',
  'howdy',
  '您好',
  'salut',
  'gutentag',
  'السلام عليكم',
  '0100100001101001',
  'oi',
  'こんにちは',
  'please-work-here',
  'or-pretty-much-anything'
]

export const allEmails: Email[] = potentialUsernames.map(username => {
  return new Email(username, urls.website.domain)
});

const defaultEmail: Email = allEmails[0];
export default defaultEmail;
