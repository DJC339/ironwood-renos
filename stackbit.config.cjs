// stackbit.config.cjs — CommonJS, programmatic Git content source

const GitCMS = require('@stackbit/cms-git');

// Be tolerant of ESM/CJS shapes across versions:
const GitContentSource =
  (GitCMS && GitCMS.GitContentSource) ||
  (GitCMS && GitCMS.default && GitCMS.default.GitContentSource) ||
  GitCMS;

module.exports = {
  stackbitVersion: '~0.6.0',
  nodeVersion: '18',
  ssgName: 'custom',

  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [
        {
          name: 'siteSettings',
          label: 'Site Content',
          type: 'data',
          filePath: 'content/site.json',
          fields: [
            { name: 'hero_title',   type: 'string', label: 'Hero Title' },
            { name: 'hero_tagline', type: 'string', label: 'Hero Tagline' },
            { name: 'cta_label',    type: 'string', label: 'CTA Button Text' },
            {
              name: 'services',
              type: 'list',
              label: 'Services',
              items: {
                type: 'object',
                fields: [
                  { name: 'title', type: 'string', label: 'Title', required: true },
                  { name: 'description', type: 'string', label: 'Description' }
                ]
              }
            },
            {
              name: 'projects',
              type: 'list',
              label: 'Projects',
              items: {
                type: 'object',
                fields: [
                  { name: 'title', type: 'string', label: 'Title', required: true },
                  { name: 'description', type: 'string', label: 'Description' },
                  { name: 'image', type: 'string', label: 'Image Path (e.g., images/project1.jpg)' },
                  { name: 'url', type: 'string', label: 'Project URL' }
                ]
              }
            },
            {
              name: 'testimonials',
              type: 'list',
              label: 'Testimonials',
              items: {
                type: 'object',
                fields: [
                  { name: 'client_name', type: 'string', label: 'Client Name' },
                  { name: 'testimonial', type: 'string', label: 'Testimonial' }
                ]
              }
            },
            { name: 'footer_note', type: 'string', label: 'Footer Note' }
          ]
        }
      ]
    })
  ]
};
