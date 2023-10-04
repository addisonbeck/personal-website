import name from '$lib/data/Name'

const headerConfig: HeaderConfig = {
  title: {
    large: name.full.toLocaleUpperCase(),
    small: `${name.initials.toLocaleUpperCase()}:`,
    href: "/" 
  },
  sections: [
    // { title: "about", href: "/about" },
    { title: "resume", href: "/resume" },
    { title: "contact", href: "/contact" },
  ]
}

export default headerConfig;
