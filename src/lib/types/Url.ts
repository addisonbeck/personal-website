class Url {
  public full: string;
  constructor(public name: string, public domain: string, public protocol: string) {
    this.full = `${protocol}${domain}`;
  }
}
export default Url;
