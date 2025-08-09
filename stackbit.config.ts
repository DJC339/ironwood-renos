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
          name: "home",
          label: "Home Page",
          type: "page",
          filePath: "content/pages/home.md",
          urlPath: "/",
          fields: [
            { name: "title", type: "string", default: "Home" },
            { name: "heroTitle", type: "string", label: "Hero Title", default: "Ironwood Renos", required: true },
            { name: "heroTagline", type: "string", label: "Hero Tagline", default: "Quality Renovations Built to Last" },
            { name: "ctaLabel", type: "string", label: "CTA Button Text", default: "Request a Quote" },
            {
              name: "services",
              type: "list",
              label: "Services",
              items: {
                type: "object",
                fields: [
                  { name: "title", type: "string", required: true },
                  { name: "description", type: "string" }
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
                  { name: "title", type: "string", required: true },
                  { name: "description", type: "string" },
                  { name: "image", type: "string", label: "Image Path (e.g., images/project1.jpg)" },
                  { name: "url", type: "string", required: false }
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
                  { name: "client_name", type: "string" },
                  { name: "testimonial", type: "string" }
                ]
              }
            },
            { name: "footerNote", type: "string", default: "© 2025 Ironwood Renos. Portfolio project by Code Forged Digital." },
            { name: "body", type: "markdown", default: "" }
          ]
        }
      ]
    })
  ]
});
