const projects = [

  {
    id: "pxgx",
    title: "Phoenix Graphics",
    summary: "A custom WordPress block theme and Gutenberg block plugin for Phoenix Graphics.",
    description: [
      "Developed a fully custom WordPress block theme paired with a bespoke Gutenberg block plugin for Phoenix Graphics. The project included a dynamic portfolio feed built on a custom post type, with category filtering to help visitors find relevant information.",
      "To streamline client onboarding, I built a custom inquiry form system with dynamic fields that adapt based on prior selections, making it simple for new clients to submit the right information upfront. Interactive blocks were built with React, delivering a smooth, app-like experience within the WordPress ecosystem.",
    ],
    thumbnail: "/img/projects/thumbnails/pxgx.webp",
    images: [
      "/img/projects/portfolio/pxgx-01.webp", 
      "/img/projects/portfolio/pxgx-02.webp", 
      "/img/projects/portfolio/pxgx-03.webp"
    ],
    url: "https://pxgx.com/",
    github: "",
    tags: ["React", "HTML",  "PHP", "SCSS"],
    category: ["block", "theme", "wordpress"],
  },

  {
    id: "tms-calc",
    title: "TMS Cost Calculator",
    summary: "An interactive Transportation Management System cost calculator built as a custom Gutenberg block with React.",
    description: [
      "Developed an interactive cost calculator for Descartes' Transportation Management System, built as a custom Gutenberg block powered by React. The tool features range sliders that allow users to estimate their monthly service fee and per-shipment cost savings, giving potential customers a tangible sense of ROI before committing.",
      "The block was designed for use inside a Drupal site that usedsthe Gutenberg page builder. To maintain brand integrity, editor controls were deliberately scoped and content editors can update text and links as needed, but layout and styling remain locked, ensuring the block stays consistent and on-brand across the site.",
    ],
    thumbnail: "/img/projects/thumbnails/dsg-tm-calc.webp",
    images: [
      "/img/projects/portfolio/tms-calc-01.webp", 
      "/img/projects/portfolio/tms-calc-02.webp", 
    ],
    url: "https://www.descartes.com/tms-cost-calculator",
    github: "",
    tags: ["React", "HTML",  "PHP", "SCSS"],
    category: ["drupal", "block"],
  },

  {
    id: "dsg-menu",
    title: "Descartes Mega Menu",
    summary: "A fully custom mega menu for descartes.com, built without Drupal modules using a unique YAML-based data architecture with multilingual support.",
    description: [
      "Overhauled the existing navigation with a fully custom mega menu solution for descartes.com — no Drupal contrib modules, just a bespoke theme implementation paired with a custom module built specifically to manage YAML data files. Using YAML for the menu data was a deliberate architectural choice that made it straightforward to maintain separate configurations per language, keeping the multilingual experience clean and editor-friendly.",
      "A key new feature is a context-aware second-tier menu that surfaces on pillar pages based on tagging. This pulls in relevant navigation dynamically, guiding users deeper into the pillar of the business they're already engaging with — increasing discovery and driving stronger user journeys across the site. Accessibility was a primary focus throughout, with the entire navigation rebuilt to meet modern standards from the ground up.",
    ],
    thumbnail: "/img/projects/thumbnails/dsg-menu.webp",
    images: [
      "/img/projects/portfolio/dsg-menu-01.webp", 
      "/img/projects/portfolio/dsg-menu-02.webp", 
      "/img/projects/portfolio/dsg-menu-03.webp"
    ],
    url: "https://www.descartes.com/",
    github: "",
    tags: ["YAML", "TWIG", "JS", "SCSS"],
    category: ["drupal", "theme"],
  },

  {
    id: "lgg",
    title: "Let Go & Grow",
    summary: "A custom WordPress block theme and Gutenberg block plugin for Let Go & Grow, a holistic health resource with courses, a blog, and a WooCommerce shop.",
    description: [
      "Built a custom WordPress block theme and Gutenberg block plugin from scratch for Let Go & Grow, a holistic health platform offering courses, books, and merchandise. The site is designed to be fully manageable by the client, with content-rich areas driven by custom post types and purpose-built blocks that keep the editing experience simple and consistent.",
      "A standout feature of the build is a custom WooCommerce plugin that automatically emails book orders directly to the printer upon purchase — streamlining fulfillment without any manual intervention. Additional features include a header and footer that combine the felxibility of custom block controls with the streamlined design and build of a bespoke plugin.",
    ],
    thumbnail: "/img/projects/thumbnails/lgg.webp",
    images: [
      "/img/projects/portfolio/lgg-01.webp", 
      "/img/projects/portfolio/lgg-03.webp"
    ],
    url: "https://letgoandgrow.com",
    github: "https://github.com/shelaine/lgg-theme",
    tags: ["React", "HTML",  "PHP", "SCSS"],
    category: ["theme", "wordpress", "block"],

  },

  {
    id: "peppol",
    title: "Peppol Map Block",
    summary: "An interactive European map block for descartes.com, built with SVG and CSS, allowing users to explore Peppol network availability by country.",
    description: [
      "Built a fully interactive European map as a custom Gutenberg block, allowing frontend users to click individual countries and view relevant Peppol network information. The map is rendered as an SVG, keeping it lightweight, scalable, and fully responsive across screen sizes.",
      "The block's editor experience is where it really shines — each country is fully customizable from the Gutenberg backend, from the country name down to individual bullet points of content. This makes it straightforward to manage translated content across different language versions of the page, giving the content team full control.",
    ],
    thumbnail: "/img/projects/thumbnails/peppol-map.webp",
    images: [
      "/img/projects/portfolio/peppol-map-01.webp", 
      "/img/projects/portfolio/peppol-map-02.webp"
    ],
    url: "",
    github: "",
    tags: ["React", "SCSS"],
    category: ["drupal", "block"],
  },

  {
    id: "sr-calc",
    title: "ShipRush Rate Calculator",
    summary: "A custom WordPress plugin integrating the ShipRush API to let users preview real-time USPS shipping savings directly on the website.",
    description: [
      "Built a custom WordPress plugin for Descartes ShipRush, that connects to the ShipRush API and returns real-time USPS shipping rate comparisons based on user-provided shipment details such as package weight, dimensions, and origin and destination zip codes. The calculator gives prospective customers a concrete, personalized look at how much they could save before signing up.",
      "The plugin was architected for flexibility, deployed into an existing Divi-built site via shortcode. This approach made it straightforward to drop the calculator into any page, keeping the integration clean and the content team fully in control of placement.",
    ],
    thumbnail: "/img/projects/thumbnails/sr-calc.webp",
    images: [
      "/img/projects/portfolio/sr-calc-01.webp",
      "/img/projects/portfolio/sr-calc-02.webp",
    ],
    url: "https://shiprush.com/shipping-rate-calculator/",
    github: "",
    tags: ["PHP", "HTML", "JS", "SCSS"],
    category: ["plugin", 'API', "wordpress"],
  },

/*
{
  id: "slug,
  title: "Project Title",
  summary: "Summary for homepage",
  description: [
    "Project Description",
  ],
  thumbnail: "/img/projects/thumbnails/dsg-tm-calc.webp",
  images: [
    "/img/projects/portfolio/tms-calc-01.webp", 
    "/img/projects/portfolio/tms-calc-02.webp", 
  ],
  url: "https://www.descartes.com/tms-cost-calculator",
  github: "",
  tags: ["React", "HTML",  "PHP", "SCSS"],
  category: ["drupal", "block"],
  impact: [
    { title: "conversions", value: "+20%" },
    { title: "interactivty", value: "+45%" },
  ],
}
*/

];

export default projects;