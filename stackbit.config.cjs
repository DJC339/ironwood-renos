// CommonJS + class-based GitContentSource
const { GitContentSource } = require('@stackbit/cms-git');

module.exports = {
  stackbitVersion: '~0.6.0',
  nodeVersion: '18',
  ssgName: 'custom',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [
        // site-wide data
        {
          name: 'siteSettings',
          type: 'data',
          filePath: 'content/site.json',
          fields: [
            { name: 'hero_title', type: 'string' },
            { name: 'hero_tagline', type: 'string' },
            { name: 'cta_label', type: 'string' },
            { name: 'services', type: 'list', items: { type: 'object', fields: [
              { name: 'title', type: 'string', required: true },
              { name: 'description', type: 'string' }
            ]}},
            { name: 'projects', type: 'list', items: { type: 'object', fields: [
              { name: 'title', type: 'string', required: true },
              { name: 'description', type: 'string' },
              { name: 'image', type: 'string' },
              { name: 'url', type: 'string' }
            ]}},
            { name: 'testimonials', type: 'list', items: { type: 'object', fields: [
              { name: 'client_name', type: 'string' },
              { name: 'testimonial', type: 'string' }
            ]}},
            { name: 'footer_note', type: 'string' }
          ]
        },
        // a single “homepage” page model
        {
          name: 'Page',
          label: 'Pages',
          type: 'page',
          urlPath: '/',                      // this page renders at /
          filePath: 'content/pages/home.json',
          fields: [{ name: 'title', type: 'string', required: true }]
        }
      ]
    })
  ]
};
