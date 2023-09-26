import type Job from '$lib/types/Job';
import urls from '../Urls';
const pilot: Job = {
	name: 'Pilot Catastrophe Services',
	position: 'Software Engineer',
	url: urls.pilot,
	startDate: '2017-08',
	endDate: '2019-11',
	summary: 'As a software engineer at Pilot I was responsible for:',
	highlights: [
		"Building interal software to support Pilot's business efforts using C#, jquery, .NET MVC, and MSSQL.",
		'Helping Pilot transition away from .NET MVC to modern Angular2+ front ends with WebApi back ends.'
	]
};
export default pilot;
