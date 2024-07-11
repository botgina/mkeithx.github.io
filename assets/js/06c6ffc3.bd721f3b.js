"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3340],{6779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(4848),a=t(8453),r=(t(7319),t(9489)),l=t(7227);const i={title:"Deployment",description:"Managing deployments."},o=void 0,c={id:"deployment",title:"Deployment",description:"Managing deployments.",source:"@site/docs/deployment.mdx",sourceDirName:".",slug:"/deployment",permalink:"/docs/deployment",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:1720689008e3,frontMatter:{title:"Deployment",description:"Managing deployments."},sidebar:"mySidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Algolia",permalink:"/docs/algolia"}},u={},d=[{value:"Get started",id:"get-started",level:2},{value:"CLI",id:"cli",level:2},{value:"SSH Deployment",id:"ssh-deployment",level:2},{value:"GitHub Actions",id:"github-actions",level:2}];function h(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This article outlines deployment configuration of this website."}),"\n",(0,s.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,s.jsx)(n.p,{children:"To ensure smooth deployment, let's build the static files for production. Run either of the following:"}),"\n",(0,s.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,s.jsx)(l.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})})}),(0,s.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn build\n"})})}),(0,s.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run build\n"})})})]}),"\n",(0,s.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,s.jsx)(l.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run build && npm run serve\n"})})}),(0,s.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn build&& yarn serve\n"})})}),(0,s.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run build&& pnpm run serve\n"})})})]}),"\n",(0,s.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,s.jsx)(l.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run build && npm run serve -- --build --port 80 --host 0.0.0.0\n"})})}),(0,s.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn build&& yarn serve --build --port 80 --host 0.0.0.0\n"})})}),(0,s.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run build&& pnpm run serve --build --port 80 --host 0.0.0.0\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,s.jsxs)(n.p,{children:["Using the ",(0,s.jsx)(n.code,{children:"docusaurus build"})," command is a convenient way to build the website and push to the gh-pages branch. Note that the following configuration is ",(0,s.jsx)(n.strong,{children:"REQUIRED"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="docusaurus.config.ts" showLineNumbers',children:"const config: Config =  {\n  // ...\n  url: 'https://your-website-url.com',\n  baseUrl: '/',\n  projectName: 'you-project-name.github.io',\n  organizationName: 'your-organization-name',\n  deploymentBranch: 'gh-pages',\n  trailingSlash: false,\n  // ...\n};\n"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(l.A,{value:"bash",label:"Bash",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"GIT_USER=<GITHUB_USERNAME> yarn deploy\n"})})}),(0,s.jsx)(l.A,{value:"win",label:"Windows",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"\n'})})}),(0,s.jsx)(l.A,{value:"pwsh",label:"Powershell",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cmd /C 'set \"GIT_USER=<GITHUB_USERNAME>\" && npm run deploy'\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"ssh-deployment",children:"SSH Deployment"}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(l.A,{value:"ssh",label:"Using SSH",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"USE_SSH=true yarn deploy\n"})})}),(0,s.jsx)(l.A,{value:"no_ssh",label:"Not using SSH",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"GIT_USER=<Your GitHub username> yarn deploy\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"github-actions",children:"GitHub Actions"}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(l.A,{value:"depOne",label:"Template 1",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",metastring:'title=".github/workflows/deploy.yml" {35} showLineNumbers',children:"name: Deploy to GitHub Pages\n\non:\n  push:\n    branches:\n      - main\n\n\npermissions:\n  contents: write\n\njobs:\n  deploy:\n    name: Deploy to GitHub Pages\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n\n      - name: Install dependencies\n        run: |\n          cd website\n          npm install\n          npm run build\n\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v4\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          publish_dir: website/build\n          cname: yourapp.pages.dev # Optional: For Cloudflare deployment\n"})})}),(0,s.jsx)(l.A,{value:"depTwo",label:"Template 2",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",metastring:'title=".github/workflows/deploy.yml" showLineNumbers',children:"name: GitHub Pages\n\non:\n  push:\n    branches:\n      - main\n    paths:\n      - '.github/workflows/deploy.yml'\n      - 'website/**'\n  pull_request:\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    permissions:\n      contents: write\n    concurrency:\n      group: ${{ github.workflow }}-${{ github.ref }}\n    defaults:\n      run:\n        working-directory: website\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Setup Node\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n\n      - name: Cache dependencies\n        uses: actions/cache@v4\n        with:\n          path: ~/.npm\n          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}\n          restore-keys: |\n            ${{ runner.os }}-node-\n\n      - run: npm ci\n      - run: npm run build\n\n      - name: Deploy\n        uses: peaceiris/actions-gh-pages@v4\n        if: github.ref == 'refs/heads/main'\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./website/build\n      \n"})})}),(0,s.jsx)(l.A,{value:"testDep",label:"Test Deployment",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",metastring:'title=".github/workflows/test-deploy.yml" showLineNumbers',children:"name: Test deployment\n\non:\n  pull_request:\n    branches:\n      - main\n    # Review gh actions docs if you want to further define triggers, paths, etc\n    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on\n\njobs:\n  test-deploy:\n    name: Test deployment\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n\n      - name: Install dependencies\n        run: |\n          cd website\n          npm install\n          npm run build\n\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7227:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var s=t(4164);const a={tabItem:"tabItem_Ymn6"};var r=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,l),hidden:t,children:n})}},9489:(e,n,t)=>{t.d(n,{A:()=>A});var s=t(6540),a=t(4164),r=t(4245),l=t(6347),i=t(6494),o=t(2814),c=t(5167),u=t(9900);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=h(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,d]=m({queryString:t,groupId:a}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,u.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),f=(()=>{const e=c??b;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=t(1062);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function j(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==s&&(c(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...r,className:(0,a.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(y,{...n,...e})]})}function A(e){const n=(0,g.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(n))}},7319:(e,n,t)=>{t.d(n,{A:()=>D});t(6540);var s=t(1348),a=t(4164),r=t(3230),l=t(9204),i=t(9059),o=t(4848);const c={icon:(0,o.jsx)(i.A,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function u(e){return(0,o.jsx)(l.A,{...c,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}var d=t(7950);const h={icon:(0,o.jsx)(d.A,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function p(e){return(0,o.jsx)(l.A,{...h,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}var m=t(6699);const b={icon:(0,o.jsx)(m.A,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function g(e){return(0,o.jsx)(l.A,{...b,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}var f=t(667);const x={icon:(0,o.jsx)(f.A,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var j=t(6616);const y={icon:(0,o.jsx)(j.A,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function v(e){return(0,o.jsx)(l.A,{...y,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}var A=t(6784),w=t(7875);const N={icon:(0,o.jsx)(A.g,{icon:w._2G}),title:(0,o.jsx)(r.A,{id:"theme.admonition.discord",description:"The default label used for the Discord admonition (:::discord)",children:"discord"})};var T=t(6188);const k={icon:(0,o.jsx)(A.g,{icon:T.fLc}),title:(0,o.jsx)(r.A,{id:"theme.admonition.security",description:"The default label used for the Security admonition (:::security)",children:"security"})};const I={icon:(0,o.jsx)(A.g,{icon:T.Lb_}),title:(0,o.jsx)(r.A,{id:"theme.admonition.release",description:"The default label used for the Release admonition (:::release)",children:"release"})};const S={icon:(0,o.jsx)(A.g,{icon:T.Wcv}),title:(0,o.jsx)(r.A,{id:"theme.admonition.credit",description:"The default label used for the Credit admonition (:::credit)",children:"credit"})};const E={icon:(0,o.jsx)(A.g,{icon:T.rC2}),title:(0,o.jsx)(r.A,{id:"theme.admonition.docusaurus",description:"The default label used for the Docusaurus admonition (:::docusaurus)",children:"Did you know..."})};const _={...{note:u,tip:p,info:g,caution:function(e){return(0,o.jsx)(l.A,{...x,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:v,security:function(e){return(0,o.jsx)(l.A,{...k,...e,className:(0,a.A)("alert alert--security",e.className),children:e.children})},release:function(e){return(0,o.jsx)(l.A,{...I,...e,className:(0,a.A)("alert alert--release",e.className),children:e.children})},credit:function(e){return(0,o.jsx)(l.A,{...S,...e,className:(0,a.A)("alert alert--credit",e.className),children:e.children})},docusaurus:function(e){return(0,o.jsx)(l.A,{...E,...e,className:(0,a.A)("alert alert--docusaurus",e.className),children:e.children})},discord:function(e){return(0,o.jsx)(l.A,{...N,...e,className:(0,a.A)("alert alert--discord",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(u,{title:"secondary",...e}),important:e=>(0,o.jsx)(g,{title:"important",...e}),success:e=>(0,o.jsx)(p,{title:"success",...e}),warning:e=>(0,o.jsx)(v,{title:"warning",...e})}};function D(e){const n=(0,s.c)(e),t=(a=n.type,_[a]||(console.warn(`No admonition component found for admonition type "${a}". Using Info as fallback.`),_.info));var a;return(0,o.jsx)(t,{...n})}}}]);