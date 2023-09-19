import type JobList from "$lib/types/JobList";
import bitwarden from "./jobs/Bitwarden";
import pilot from "./jobs/Pilot";
import rsi from "./jobs/Rsi";
import skykick from "./jobs/Skykick";
import ssi from "./jobs/Ssi";

const jobs: JobList = {
  skykick: skykick,
  bitwarden: bitwarden,
  ssi: ssi,
  pilot: pilot,
  rsi: rsi
};

export default jobs;
