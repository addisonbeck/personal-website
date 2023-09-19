import type { Name }  from '$lib/types/Name';

const name: Name = {
  first: "Addison",
  last: "Beck",
  get full(): string {
    return `${name.first} ${name.last}`;
  },
  get asUsername() {
    return `${name.first}${name.last}`.toLocaleLowerCase(); 
  },
  get initials(): string {
    return `${name.first.charAt(0)}${name.last.charAt(0)}`
  }
}

export default name;

