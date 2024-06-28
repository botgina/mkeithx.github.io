import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { link } from "fs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  mySidebar: [
    "keyword",
    {
      label: "Getting started",
      type: "category",
      link: {
        type: "generated-index",
        slug: 'getting-started',
        description: 'This section covers the following:'
      },
      collapsed: false,
      items: [
        'installation',
        'configuration',
        'deployment',
        'algolia',
      ],
    },
    {
      type: "category",
      label: "Guides",
      collapsed: true,
      collapsible: true,
      link: {
        type: 'generated-index',
        title: 'Guides',
        slug: '/guides',
        description:
          "This section is not going to be very structured, but will cover the following topics:",
        keywords: ['guides'],
      },
      items: [
        {
          type: "autogenerated",
          dirName: "guides",
        },
      ],
    },
    // repo
    {
      type: "category",
      label: "Examples",
      collapsed: true,
      collapsible: true,
      link: {
        type: 'doc',
        id: 'repo/index'
      },
      items: [
        "repo/python-starters",
        "repo/flask-tutorials",
        "repo/django-custom-user",
      ],
    },

    {
      type: "category",
      label: "Cheat Sheets",
      collapsed: true,
      collapsible: true,
      link: {
        type: 'generated-index',
        slug: '/cheat-sheets',
        description: "Gists, references and more."
      },
      items: [
        "cheat-sheets/windows",
        "cheat-sheets/git",
        "cheat-sheets/conda",
        "cheat-sheets/batch",
        "cheat-sheets/mdx-react",
        // "cheat-sheets/django",
      ],
    },
  ],

  devops: [
    'devops/index',
    {
      type: 'category',
      label: 'Microsoft 365',
      link: {
        type: 'doc',
        id: 'devops/admin-center/index',
      },
      items: [
        'devops/admin-center/aka-ms',
        'devops/admin-center/management-and-guidelines',
        'devops/admin-center/portal-links'
      ]
    },

    {
      type: 'category',
      label: "Guides & Workarounds",
      collapsed: true,
      link: {
        type: 'generated-index',
        slug: '/devops/guides-and-workarounds',
        description: "Basic troubleshooting guide and workarounds.",

      },
      items: [
        'devops/troubleshoot/windows-hardware-issues',
        'devops/troubleshoot/windows-utilities'
      ]

    },
    'devops/glossary'
  ]

};

export default sidebars;
