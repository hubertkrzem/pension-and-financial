// ─── Shared / Global ────────────────────────────────────────

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

export const NAVBAR_QUERY = `*[_type == "navbar"][0]{
  title,
  button {
    label,
    link
  }
}`;

export const FOOTER_QUERY = `*[_type == "footer"][0]{
  regulatoryDisclosures,
  privacyPolicy {
    asset-> { url }
  },
  termsOfService {
    asset-> { url }
  },
  legalDisclaimers
}`;

// ─── Page queries ───────────────────────────────────────────

export const HOME_PAGE_QUERY = `*[_type == "homePage"][0]{
  title,
  hero {
    heading,
    headingLine2,
    body,
    image {
      asset-> { url },
      alt
    }
  },
  services {
    heading,
    box1 {
      heading,
      list,
      link {
        linkLabel,
        linkAddress
      }
    },
    box2 {
      heading,
      list,
      link {
        linkLabel,
        linkAddress
      }
    }
  },
  articleSection {
    header,
    featuredArticle-> {
      featureCardTitle,
      featureCardBlurb,
      featureCardLinkLabel,
      slug
    }
  }
}`;

export const ABOUT_PAGE_QUERY = `*[_type == "aboutPage"][0]{
  title,
  hero {
    heading,
    body,
    image {
      asset-> { url },
      alt
    }
  },
  mission {
    heading,
    subheading,
    quotes,
    author,
    body
  },
  ourTeam[] {
    name,
    role,
    bio,
    qualifications,
    headshot {
      asset-> { url },
      alt
    }
  },
  whyUs1 {
    heading,
    body
  }
}`;

export const RISK_PAGE_QUERY = `*[_type == "riskPage"][0]{
  title,
  hero {
    heading,
    body,
    image {
      asset-> { url },
      alt
    }
  },
  riskAppetite {
    heading,
    body
  },
  riskLevels[] {
    name,
    description,
    profile
  },
  body
}`;

export const FAQ_PAGE_QUERY = `*[_type == "faqPage"][0]{
  title,
  hero {
    heading,
    body,
    image {
      asset-> { url },
      alt
    }
  },
  contents {
    heading,
    body
  },
  faqs[] {
    heading,
    items[] {
      heading,
      body
    }
  },
  moreInfo {
    heading,
    body
  }
}`;

export const PERSONAL_PAGE_QUERY = `*[_type == "personalPage"][0]{
  title,
  hero {
    heading,
    body,
    image {
      asset-> { url },
      alt
    }
  },
  services {
    heading,
    items[] {
      heading,
      body
    }
  }
}`;

export const CORPORATE_PAGE_QUERY = `*[_type == "corporate"][0]{
  title,
  hero {
    heading,
    body,
    image {
      asset-> { url },
      alt
    }
  },
  services {
    heading,
    items[] {
      heading,
      body
    }
  }
}`;

export const ARTICLE_BY_SLUG_QUERY = `*[_type == "article" && slug.current == $slug][0]{
  title,
  slug,
  hero {
    heading,
    body,
    image {
      asset-> { url },
      alt
    }
  },
  content[] {
    ...,
    _type == "image" => {
      asset-> { url },
      alt
    }
  }
}`;

export const LEGAL_QUERY = `*[_type == "legal"][0]{
  heading,
  content[] {
    heading,
    body
  }
}`;
