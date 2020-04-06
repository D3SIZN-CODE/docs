module.exports = {
  title: "Cronhub Docs",
  description: "Cron Jobs, With X-Ray Vision",
  //   base: "/docs/",
  themeConfig: {
    lastUpdated: "Last Updated",
    editLinks: true,
    docsDir: "docs",
    head: [
      ["link", { rel: "icon", sizes: "32x32", href: `/favicon-32x32.png` }],
      ["link", { rel: "manifest", href: "/manifest.json" }]
    ],
    nav: [
      { text: "Home", link: "/" },
      { text: "cronhub.io", link: "https://cronhub.io?ref=docs" }
    ],
    sidebar: {
      "/": genSidebarConfig("Guide")
    },
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // }
    // Assumes GitHub. Can also be a full GitLab url.
    repo: "cronhub-app/docs",
    repoLabel: "Contribute on Github",
    docsRepo: "cronhub-app/docs",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!"
  },
  extendMarkdown(md) {
    lineNumbers: true;
  },
  plugins: [
    ["@vuepress/google-analytics", { ga: "UA-120470331-1" }],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ]
};

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        "",
        "getting-started",
        "how-to-ping",
        "monitor-states",
        "integrations",
        "public-api",
        "cronhub-cli",
        "community"
      ]
    }
  ];
}
