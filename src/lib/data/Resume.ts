import type {
	Education as ResumeEducation,
	Profiles as ResumeProfiles,
	Resume,
	ResumeProperties,
	Skills as ResumeSkills,
	Work as ResumeJobs
} from '$lib/types/Resume';

import type DegreeKey from '$lib/types/DegreeKey';
import type JobKey from '$lib/types/JobKey';
import type ProfileKey from '$lib/types/ProfileKey';

import degrees from './Degrees';
import email from './Email';
import jobs from './Jobs';
import location from './Location';
import name from './Name';
import phone from './PhoneNumber';
import profiles from './Profiles';
import skillList from './Skills';
import urls from './Urls';

const resumeSummary =
	"I have spent 8 years working on a diverse array of engineering teams. Most of my professional experience has been in the Microsoft ecosystem writing C#, building for Azure cloud services using industry best practices like infrastructure as code and Kubernetes, and using modern front in technologies like Angular to deliver great user experiences. I love to pioneer new process and technology adoption at the places I work, and have a reputation for being someone that can be valuably innovative. I've been working remotely since early 2020, and have spent a good deal of time helping organizations successfully manage that evolution in how engineering teams do work. I have experience working on all sorts of team sizes from the smallest startup to large corporations, and enjoy the unique aspects of each shade.";

// TODO: This pattern could probably be improved
function buildProfiles() {
	const obj: ResumeProfiles = [];
	for (const key in profiles) {
		obj.push({
			...profiles[<ProfileKey>key],
			url: profiles[<ProfileKey>key].url.full
		});
	}
	return obj;
}

function buildWork() {
	const obj: ResumeJobs = [];
	for (const key in jobs) {
		obj.push({
			...jobs[<JobKey>key],
			url: jobs[<JobKey>key].url.full
		});
	}
	return obj;
}

function buildEducation() {
	const obj: ResumeEducation = [];
	for (const key in degrees) {
		obj.push({
			...degrees[<DegreeKey>key],
			url: degrees[<DegreeKey>key].url.full
		});
	}
	return obj;
}

function buildSkills() {
	const obj: ResumeSkills = [];
	for (const s in skillList) {
		obj.push({
			name: skillList[s]
		});
	}
	return obj;
}

const props: ResumeProperties = {
	basics: {
		name: name.full,
		email: email.full,
		phone: phone,
		url: urls.website.full,
		summary: resumeSummary,
		location: {
			city: location.city,
			countryCode: location.country,
			region: location.state
		},
		profiles: buildProfiles()
	},
	skills: buildSkills(),
	work: buildWork(),
	education: buildEducation()
};

const resume: Resume = {
	properties: props,
	toJson: () => {
		return JSON.stringify(properties, undefined, 2);
	}
};

export default resume;
export const properties = resume.properties;
export const basics = resume.properties.basics;
export const education = resume.properties.education;
export const skills = resume.properties.skills;
export const work = resume.properties.work;
export const json = resume.toJson();
