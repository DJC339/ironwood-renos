// stackbit.config.cjs
module.exports = {
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "custom",
  contentSources: [
    {
      name: "git",
      type: "git",
      rootPath: "C:\\Users\\boome\\OneDrive\\Documents\\Portfolio Projects\\Ironwood Renos",
      contentDirs: ["content"],
      models: [
        {
          name: "siteSettings",
          label: "Site Content",
          type: "data",
          filePath: "content/site.json",
          fields: [
            { name: "hero_title", type: "string", label: "Hero Title" },
            { name: "hero_tagline", type: "string", label: "Hero Tagline" },
            { name: "cta_label", type: "string", label: "CTA Button Text" },
            {
              name: "services",
              type: "list",
              label: "Services",
              items: {
                type: "object",
                fields: [
                  { name: "title", type: "string", label: "Title", required: true },
                  { name: "description", type: "string", label: "Description" }
                ]
              }
            },
            {
              name: "projects",
              type: "list",
              label: "Projects",
              items: {
                type: "object",
                fields: [
                  { name: "title", type: "string", label: "Title", required: true },
                  { name: "description", type: "string", label: "Description" },
                  { name: "image", type: "string", label: "Image Path" },
                  { name: "url", type: "string", label: "Project URL" }
                ]
              }
            },
            {
              name: "testimonials",
              type: "list",
              label: "Testimonials",
              items: {
                type: "object",
                fields: [
                  { name: "client_name", type: "string", label: "Client Name" },
                  { name: "testimonial", type: "string", label: "Testimonial" }
                ]
              }
            },
            { name: "footer_note", type: "string", label: "Footer Note" }
          ]
        }
      ]
    }
  ],
  // 🔑 This section tells Stackbit how to map your JSON to index.html
  pages: [
    {
      urlPath: "/",
      // homepage
      filePath: "index.html",
      model: "siteSettings"
    }
  ]
};
//# sourceMappingURL=stackbit.config.WD5V6QI2.cjs.map
