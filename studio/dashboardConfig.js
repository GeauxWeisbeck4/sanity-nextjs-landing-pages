export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '62a3e5a3cf7d9c3923511d9b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rxc45qvf',
                  apiId: '8989f341-0a0b-4b6e-a9d6-c520a7b19fe1'
                },
                {
                  buildHookId: '62a3e5a431930f399f78dea3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jvdfeh2u',
                  apiId: 'eefa1d13-d492-4efb-a4b6-77b01cf7b332'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GeauxWeisbeck4/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jvdfeh2u.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
