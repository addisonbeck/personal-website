import Url from "$lib/types/Url";
import type UrlList from "$lib/types/UrlList";

const urls: UrlList = {
  website: new Url("My Personal Website","addisonbeck.com","https://"),
  github: new Url("My Github Profile","github.com/addisonbeck","https://"),
  skykick: new Url("Skykick", "skykick.com","https://"),
  bitwarden: new Url("Bitwarden","bitwarden.com","https://"),
  ssi: new Url("SSI","thessigroup.com","https://"),
  pilot: new Url("Pilot Catastrophe Services","pilotcat.com","https://www."),
  rsi: new Url("RSI (now called SPARQ)","teamsparq.com","https://www."),
  usa: new Url("University of South Alabama Website", "southalabama.edu", "https://www."),
};

export default urls;
