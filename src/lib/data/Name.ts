import type { Name }  from '$lib/types/Name';

const name: Name = {
  first: "Addison",
  last: "Beck",
  get full(): string {
    return `${name.first} ${name.last}`;
  }
}

export default name;

