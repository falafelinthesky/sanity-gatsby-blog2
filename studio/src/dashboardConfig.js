export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb3e7daaccaca2a9dcff418',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog2-studio-vc6f1ete',
                  apiId: 'd055f82c-5d4b-4da0-854a-56d9bf502357'
                },
                {
                  buildHookId: '5eb3e7dabcf4b66632731c20',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog2-web-9st6q9vs',
                  apiId: '1bdbc56d-e90a-467c-9d62-33ee5a7c702a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/falafelinthesky/sanity-gatsby-blog2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog2-web-9st6q9vs.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
