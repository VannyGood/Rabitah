export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'rabitah-site',
    title: 'Rabitah Studio Website',
    category: 'WebApp',
    summary: 'Marketing site and lead funnel for Rabitah, built with React and liquid ether backgrounds.',
    image: '/projects/rabitah-site.png',
  },
  {
    id: 'ecommerce-ui',
    title: 'E‑commerce Experience',
    category: 'WebApp',
    summary: 'Conversion‑focused storefront with product discovery, filters and check‑out flows.',
    image: '/projects/ecommerce-ui.png',
  },
  {
    id: 'mobile-app',
    title: 'Mobile Companion App',
    category: 'App',
    summary: 'Cross‑platform app for tracking campaigns, metrics and user engagement on the go.',
    image: '/projects/mobile-app.png',
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    category: 'WebApp',
    summary: 'Interactive dashboard with real‑time charts and reporting for marketing teams.',
    image: '/projects/saas-dashboard.png',
  },
  {
    id: 'brand-campaign',
    title: 'Brand Campaign Microsite',
    category: 'Marketing',
    summary: 'Story‑driven launch microsite with scroll‑based animations and motion graphics.',
    image: '/projects/brand-campaign.png',
  },
];

