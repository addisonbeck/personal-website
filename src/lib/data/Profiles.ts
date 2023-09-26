import type ProfileList from '$lib/types/ProfileList';
import urls from './Urls';
import name from '$lib/data/Name';

const profiles: ProfileList = {
	github: {
		network: 'github',
		url: urls.githubProfile,
		username: name.asUsername
	}
};

export default profiles;
