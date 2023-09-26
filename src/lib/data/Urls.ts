import Url from '$lib/types/Url';
import type UrlList from '$lib/types/UrlList';
import name from '$lib/data/Name';

const urls: UrlList = {
	website: new Url('My Personal Website', `${name.asUsername}.com`, 'https://'),
	githubProfile: new Url('My Github Profile', `github.com/${name.asUsername}`, 'https://'),
	githubProjectRepo: new Url(
		'The Github Repo For This Project',
		`github.com/${name.asUsername}/personal-website`,
		'https://'
	),
	skykick: new Url('Skykick', 'skykick.com', 'https://'),
	bitwarden: new Url('Bitwarden', 'bitwarden.com', 'https://'),
	ssi: new Url('SSI', 'thessigroup.com', 'https://'),
	pilot: new Url('Pilot Catastrophe Services', 'pilotcat.com', 'https://www.'),
	rsi: new Url('RSI (now called SPARQ)', 'teamsparq.com', 'https://www.'),
	usa: new Url('University of South Alabama Website', 'southalabama.edu', 'https://www.')
};

export default urls;
