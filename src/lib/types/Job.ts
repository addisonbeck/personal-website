import type Url from "./Url";

type Job = {
  name: string,
  position: string,
  url: Url,
  startDate: string,
  endDate: string,
  summary: string,
  highlights: string[]
}
export default Job;
