// @ts-nocheck
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "custom",
  postInstallCommand: "npm i --no-save @stackbit/types",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "siteSettings",
          label: "Site Content",
          type: "data",
          filePath: "content/site.json",
          fields: [
            { name: "hero_title",   type: "string", label: "Hero Title" },
            { name: "hero_tagline", type: "string", label: "Hero Tagline" },
            { name: "cta_label",    type: "string", label: "CTA Button Text" },
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
                  { name: "image", type: "string", label: "Image Path (e.g., images/project1.jpg)" },
                  { name: "url", type: "string", label: "Project URL", required: false }
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
    })
  ]
});
