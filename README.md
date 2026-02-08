# Pension & Financial Website

A [Next.js](https://nextjs.org) website with [Sanity CMS](https://www.sanity.io/) for content management.

All page content is managed through Sanity Studio. Employees can edit text, headings, images, and other content without touching any code.

---

## Getting Started (Development)

```bash
# Install dependencies
npm install

# Start the Next.js dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Running Tests

```bash
npm test
```

### Production Build

```bash
npm run build
```

---

## Sanity Studio (Content Editing)

Sanity Studio is the admin interface where employees edit all website content. It lives in the `studio/` folder.

### Running the Studio Locally

```bash
cd studio
npm install
npm run dev
```

This starts the studio at [http://localhost:3333](http://localhost:3333).

### Deploying the Studio (Recommended for Employees)

To host the studio so employees can access it from any browser:

```bash
cd studio
npm run deploy
```

This deploys to a URL like `https://pension-financial.sanity.studio`. Share this URL with the team.

### Managing Team Access

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select the **pension-financial** project (ID: `38eus8fk`)
3. Navigate to **Members**
4. Invite team members by email and assign a role:
   - **Editor** - can create and edit content (recommended for most employees)
   - **Viewer** - read-only access
   - **Administrator** - full access including settings

---

## What Can Be Edited in Sanity

Every page on the website pulls its content from Sanity. Below is a guide to what each document type controls.

### Global Elements

| Document in Studio | What it controls |
|---|---|
| **Navbar** | Site title, navigation links, CTA button label and link |
| **Contact** | The contact section that appears at the bottom of most pages (title, subtitle, phone, email, office address) |
| **Footer** | Footer text, links to privacy policy, cookie policy, and other documents |

### Pages

| Document in Studio | Website page | Editable fields |
|---|---|---|
| **Home** | `/` (homepage) | Hero heading and body, "Our Services" boxes, Auto-Enrolment article preview |
| **About** | `/about` | Hero, mission statement (heading, quotes, body), team members (name, role, photo, bio), "Why Choose Us" section |
| **Risk** | `/risk` | Hero, risk appetite introduction text |
| **FAQ** | `/faq` | Hero, table of contents heading, FAQ sections (each with heading + accordion items), "More Info" section |
| **Personal Services** | `/services/personal` | Hero, services accordion (heading + expandable items with rich text) |
| **Corporate Services** | `/services/corporate` | Hero, services accordion (heading + expandable items with rich text) |
| **Article** | `/auto-enrolment` | Hero heading and body, article content sections (headings, rich text, images) |
| **Legal** | `/legal` | Page heading, disclaimer sections (heading + body each) |

### How Content Fields Work

- **Hero sections**: Each page has a hero with a heading and rich text body
- **Rich text fields** (body, bio, etc.): Support bold, italic, links, bullet lists, and other formatting through the Sanity editor
- **Accordion items**: FAQ and Services pages use collapsible sections. Each item has a heading (shown when collapsed) and a body (shown when expanded)
- **Team members**: Each member has a name, role, headshot image, and rich text bio
- **Images**: Upload directly through Sanity. They are served from Sanity's CDN

### Editing Workflow

1. Log in to Sanity Studio (hosted URL or `localhost:3333`)
2. Select the document you want to edit from the left sidebar (e.g., "Home", "About", "FAQ")
3. Make your changes in the editor
4. Click **Publish** in the bottom-right corner
5. Changes appear on the live website immediately (no rebuild needed)

---

## Project Structure

```
pension-and-financial/
  src/
    app/                    # Next.js pages (each page fetches from Sanity)
      _components/          # Home page sub-components
      about/                # About page
      auto-enrolment/       # Auto-enrolment article page
      faq/                  # FAQ page
      legal/                # Legal disclaimers page
      risk/                 # Risk scale page
      services/
        personal/           # Personal services page
        corporate/          # Corporate services page
    components/             # Shared components (navbar, footer, contact, hero, etc.)
    sanity/
      client.ts             # Sanity client configuration
      queries.tsx           # All GROQ queries (one per page/component)
    __tests__/              # Vitest test files
  studio/                   # Sanity Studio (CMS admin interface)
    schemaTypes/            # Content schemas (defines what fields appear in Studio)
  public/                   # Static assets (logo, etc.)
```

### Key Files

- `src/sanity/queries.tsx` - All GROQ queries that fetch content from Sanity
- `src/sanity/client.ts` - Sanity client config (project ID, dataset)
- `studio/schemaTypes/` - Schema definitions that control what editors see in Studio
- `next.config.ts` - Next.js config (includes Sanity CDN for image optimization)

---

## Deployment

The website is a standard Next.js app and can be deployed to any platform that supports it (Vercel, Netlify, etc.).

The Sanity Studio is deployed separately using `sanity deploy` from the `studio/` directory.
