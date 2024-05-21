"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6626],{1986:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(4848),a=t(8453);const i={title:"Git",description:"Version Control - Git",sidebar_position:1},r="Setup",o={id:"guides/git",title:"Git",description:"Version Control - Git",source:"@site/docs/guides/git.mdx",sourceDirName:"guides",slug:"/guides/git",permalink:"/docs/guides/git",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:171631251e4,sidebarPosition:1,frontMatter:{title:"Git",description:"Version Control - Git",sidebar_position:1},sidebar:"mySidebar",previous:{title:"Guides",permalink:"/docs/guides"},next:{title:"Batch",permalink:"/docs/guides/batch-sample"}},c={},l=[{value:"Basic workflow",id:"basic-workflow",level:2},{value:"Create a local branch",id:"create-a-local-branch",level:3},{value:"Make changes",id:"make-changes",level:3},{value:"Push changes",id:"push-changes",level:3}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title=".gitconfig"',children:'# ~/.gitconfig\n\n# First things first, always set up your user info.\n// highlight-start\n\n[user]\nname = my_username\nemail = my_email@example.com\n\n// highlight-end\n\n# Display colours in the console\n[color]\nui = auto\nbranch = auto\nstatus = auto\n\n# Always rebase when using `git pull`, except for `main, master, develop` branches.\n[branch]\nautosetuprebase = always\n\n[branch "main"]\nrebase = false\n\n[branch "master"]\nrebase = false\n\n[branch "develop"]\nrebase = false\n\n\n\n# Automatically set up remote tracking branches for all new local branches.\n\n\n\n[push]\nautoSetupRemote = true\n\n# Important setting in windows that allows working on both Windows and cross-platform projects\n[core]\neol = native\nautocrlf = input\n\n# Common typos and aliases for long commands\n[alias]\nchekcout = checkout\nocmmit = commit\nstatsu = status\nsttaus = status\nfa = fetch --all\npushf = push --force-with-lease\nstsah = stash\n\n# Common LFS Settings\n[filter "lfs"]\nsmudge = git-lfs smudge -- %f\nprocess = git-lfs filter-process\nrequired = true\nclean = git-lfs clean -- %f\n\n# How private registries are handled\n[credential "https://my_company_vcs.example.com"]\nprovider = generic\n'})}),"\n",(0,s.jsx)(n.h2,{id:"basic-workflow",children:"Basic workflow"}),"\n",(0,s.jsx)(n.h3,{id:"create-a-local-branch",children:"Create a local branch"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git checkout -b my-feature\n"})}),"\n",(0,s.jsx)(n.h3,{id:"make-changes",children:"Make changes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'git commit -m "feat: my feature description"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"push-changes",children:"Push changes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git push\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git push -u origin my-feature\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);