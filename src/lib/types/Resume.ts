export type Profiles = {
  network: string,
  username: string,
  url: string
}[]

export type Basics = {    
  name: string,
  email: string,
  phone: string,
  url: string,
  summary: string,
  location: {
    city: string,
    countryCode: string,
    region: string
  },
  profiles: Profiles
}

export type Education = {
  institution: string,
  url: string,
  area: string,
  studyType: string,
  endDate: string
}[]

export type Work = {
  name: string,
  position: string,
  url: string,
  startDate: string,
  endDate: string,
  summary: string,
  highlights: string[]
}[]

export type Skills = {
    name: string
}[]

export type ResumeProperties = {
  basics: Basics,
  education: Education,
  work: Work,
  skills: Skills,
}

export type Resume = {
  properties: ResumeProperties,
  toJson: () => string
}
