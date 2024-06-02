"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9249],{1263:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=n(4848),i=n(8453);const a={title:"Crawlers",description:"Algolia Crawlers"},l=void 0,s={id:"api/algolia/crawlers",title:"Crawlers",description:"Algolia Crawlers",source:"@site/docs/api/algolia/crawlers.mdx",sourceDirName:"api/algolia",slug:"/api/algolia/crawlers",permalink:"/docs/api/algolia/crawlers",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1716261236e3,frontMatter:{title:"Crawlers",description:"Algolia Crawlers"},sidebar:"mySidebar",previous:{title:"Algolia DocSearch",permalink:"/docs/api/algolia/docsearch"},next:{title:"Guides",permalink:"/docs/guides"}},o={},c=[];function h(r){const e={code:"code",pre:"pre",...(0,i.R)(),...r.components};return(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yml",children:'new Crawler({\r\n  // highlight-start\r\n  appId: "<YOUR-APP-ID>",\r\n  apiKey: "<YOU-API-KEY>",\r\n   // highlight-end\r\n  rateLimit: 8,\r\n  maxDepth: 10,\r\n  maxUrls: 5000,\r\n  renderJavaScript: false,\r\n  startUrls: ["https://YOUR_WEBSITE_URL"],\r\n  sitemaps: ["https://YOUR_WEBSITE_URL/sitemap.xml"],\r\n  ignoreCanonicalTo: true,\r\n  discoveryPatterns: ["https://YOUR_WEBSITE_URL/**"],\r\n# Optional\r\n      // highlight-start\r\n  exclusionPatterns: [\r\n    "https://YOUR_WEBSITE_URL/FOO",\r\n    "https://YOUR_WEBSITE_URL/BAR",\r\n  ],\r\n      // highlight-end\r\n  schedule: "every 2 day at 6:00 am",\r\n  actions: [\r\n    {\r\n      indexName: "<YOUR_INDEX_NAME>",\r\n      pathsToMatch: ["https://YOUR_WEBSITE_URL/**"],\r\n      recordExtractor: ({ $, helpers }) => {\r\n        // priority order: deepest active sub list header -> navbar active item -> \'Documentation\'\r\n        const lvl0 =\r\n          $(\r\n            ".menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active",\r\n          )\r\n            .last()\r\n            .text() || "Documentation";\r\n\r\n        return helpers.docsearch({\r\n          recordProps: {\r\n            lvl0: {\r\n              selectors: "",\r\n              defaultValue: lvl0,\r\n            },\r\n            lvl1: ["header h1", "article h1"],\r\n            lvl2: "article h2",\r\n            lvl3: "article h3",\r\n            lvl4: "article h4",\r\n            lvl5: "article h5, article td:first-child",\r\n            lvl6: "article h6",\r\n            content: "article p, article li, article td:last-child",\r\n          },\r\n          indexHeadings: true,\r\n          aggregateContent: true,\r\n          recordVersion: "v3",\r\n        });\r\n      },\r\n    },\r\n  ],\r\n  safetyChecks: { beforeIndexPublishing: { maxLostRecordsPercentage: 30 } },\r\n  initialIndexSettings: {\r\n    YOUR_INDEX_NAME: {\r\n      attributesForFaceting: ["type", "lang"],\r\n      attributesToRetrieve: [\r\n        "hierarchy",\r\n        "content",\r\n        "anchor",\r\n        "url",\r\n        "url_without_anchor",\r\n        "type",\r\n      ],\r\n      attributesToHighlight: ["hierarchy", "content"],\r\n      attributesToSnippet: ["content:10"],\r\n      camelCaseAttributes: ["hierarchy", "content"],\r\n      searchableAttributes: [\r\n        "unordered(hierarchy.lvl0)",\r\n        "unordered(hierarchy.lvl1)",\r\n        "unordered(hierarchy.lvl2)",\r\n        "unordered(hierarchy.lvl3)",\r\n        "unordered(hierarchy.lvl4)",\r\n        "unordered(hierarchy.lvl5)",\r\n        "unordered(hierarchy.lvl6)",\r\n        "content",\r\n      ],\r\n      distinct: true,\r\n      attributeForDistinct: "url",\r\n      customRanking: [\r\n        "desc(weight.pageRank)",\r\n        "desc(weight.level)",\r\n        "asc(weight.position)",\r\n      ],\r\n      ranking: [\r\n        "words",\r\n        "filters",\r\n        "typo",\r\n        "attribute",\r\n        "proximity",\r\n        "exact",\r\n        "custom",\r\n      ],\r\n      highlightPreTag: \'<span class="algolia-docsearch-suggestion--highlight">\',\r\n      highlightPostTag: "</span>",\r\n      minWordSizefor1Typo: 3,\r\n      minWordSizefor2Typos: 7,\r\n      allowTyposOnNumericTokens: false,\r\n      minProximity: 1,\r\n      ignorePlurals: true,\r\n      advancedSyntax: true,\r\n      attributeCriteriaComputedByMinProximity: true,\r\n      removeWordsIfNoResults: "allOptional",\r\n      separatorsToIndex: "_",\r\n    },\r\n  },\r\n});\n'})})}function d(r={}){const{wrapper:e}={...(0,i.R)(),...r.components};return e?(0,t.jsx)(e,{...r,children:(0,t.jsx)(h,{...r})}):h(r)}},8453:(r,e,n)=>{n.d(e,{R:()=>l,x:()=>s});var t=n(6540);const i={},a=t.createContext(i);function l(r){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function s(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(i):r.components||i:l(r.components),t.createElement(a.Provider,{value:e},r.children)}}}]);