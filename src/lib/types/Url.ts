import type UrlProtocolKey from "./UrlProtocolKey";

class Url {
  public full: string;
  constructor(public name: string, public domain: string, public protocol: UrlProtocolKey) {
    this.full = `${protocol}${domain}`;
  }
}
export default Url;
