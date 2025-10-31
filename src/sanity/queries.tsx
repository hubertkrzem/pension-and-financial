export const CONTACT_QUERY = `*[_type == "contact"][0]{
  title,
  subtitle,
  phone,
  hours,
  emailLink {
    label,
    url
  },
  officeAddress
}`;

export const LEGAL_QUERY = `*[_type == "legal"][0]{
  heading,
  content[]{
      heading,
      body
    },
}`;