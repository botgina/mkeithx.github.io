"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3340],{9189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=t(4848),r=t(8453),a=(t(988),t(1470)),l=t(9365);const i={title:"Deployment",description:"Custom deployment configuration.",sidebar_label:"\ufe0fDeployment",sidebar_position:2},o=void 0,c={id:"deployment",title:"Deployment",description:"Custom deployment configuration.",source:"@site/docs/deployment.mdx",sourceDirName:".",slug:"/deployment",permalink:"/docs/deployment",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715835031e3,sidebarPosition:2,frontMatter:{title:"Deployment",description:"Custom deployment configuration.",sidebar_label:"\ufe0fDeployment",sidebar_position:2},sidebar:"mySidebar",previous:{title:"Configuration",permalink:"/docs/website-configuration"},next:{title:"Custom Styling",permalink:"/docs/custom-styling"}},d={},u=[{value:"Get started",id:"get-started",level:2},{value:"Test locally",id:"test-locally",level:3},{value:"CLI",id:"cli",level:2},{value:"SSH Deployment",id:"ssh-deployment",level:3},{value:"GitHub Actions",id:"github-actions",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{title:"Take Note",type:"warning",children:(0,s.jsxs)(n.p,{children:["This website is currently being served through ",(0,s.jsx)(n.strong,{children:"GitHub Pages"}),". Read ",(0,s.jsx)(n.a,{href:"https://docusaurus.io/docs/deployment",children:(0,s.jsx)(n.strong,{children:"the docs"})})," to learn more."]})}),"\n",(0,s.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,s.jsx)(n.p,{children:"In this article, I'll be pointing our the two common methods for deployment. Using CLI and GitHub Actions."}),"\n",(0,s.jsx)(n.h3,{id:"test-locally",children:"Test locally"}),"\n",(0,s.jsx)(n.p,{children:"To ensure smooth deployment, let's build the static files for production. Run either of the following:"}),"\n",(0,s.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,s.jsx)(l.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})})}),(0,s.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn build\n"})})}),(0,s.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run build\n"})})})]}),"\n",(0,s.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,s.jsx)(l.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run build && npm run serve\n"})})}),(0,s.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn build&& yarn serve\n"})})}),(0,s.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run build&& pnpm run serve\n"})})})]}),"\n",(0,s.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,s.jsx)(l.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run build && npm run serve -- --build --port 80 --host 0.0.0.0\n"})})}),(0,s.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn build&& yarn serve --build --port 80 --host 0.0.0.0\n"})})}),(0,s.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run build&& pnpm run serve --build --port 80 --host 0.0.0.0\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,s.jsxs)(n.p,{children:["Using the ",(0,s.jsx)(n.code,{children:"docusaurus build"})," command is a convenient way to build the website and push to the gh-pages branch. Note that the following configuration is ",(0,s.jsx)(n.strong,{children:"REQUIRED"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="docusaurus.config.ts"',children:"const config: Config =  {\n  // ...\n  url: 'https://your-website-url.com',\n  baseUrl: '/',\n  projectName: 'you-project-name.github.io',\n  organizationName: 'your-organization-name',\n  deploymentBranch: 'gh-pages',\n  trailingSlash: false,\n  // ...\n};\n"})}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(l.A,{value:"bash",label:"Bash",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"GIT_USER=<GITHUB_USERNAME> yarn deploy\n"})})}),(0,s.jsx)(l.A,{value:"win",label:"Windows",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"\n'})})}),(0,s.jsx)(l.A,{value:"pwsh",label:"Powershell",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cmd /C 'set \"GIT_USER=<GITHUB_USERNAME>\" && yarn deploy'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"ssh-deployment",children:"SSH Deployment"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(l.A,{value:"ssh",label:"Using SSH",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"USE_SSH=true yarn deploy\n"})})}),(0,s.jsx)(l.A,{value:"no_ssh",label:"Not using SSH",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"GIT_USER=<Your GitHub username> yarn deploy\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"github-actions",children:"GitHub Actions"}),"\n",(0,s.jsxs)(n.p,{children:["This configuration assumes that your main directory is ",(0,s.jsx)(n.code,{children:"./website"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",metastring:'title=".github/workflows/deploy.yml"',children:"\nname: Deploy to GitHub Pages\n\non:\n  push:\n    branches:\n      - main\n\n\npermissions:\n  contents: write\n\njobs:\n  deploy:\n    name: Deploy to GitHub Pages\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 18\n\n      - name: Install dependencies\n        run: |\n        // highlight-start\n          cd website\n          npm install\n          npm run build\n// highlight-end\n\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n\n          publish_dir: website/build\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var s=t(4164);const r={tabItem:"tabItem_Ymn6"};var a=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>A});var s=t(6540),r=t(4164),a=t(3104),l=t(6347),i=t(205),o=t(7485),c=t(1682),d=t(9466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,u]=p({queryString:t,groupId:r}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),f=(()=>{const e=c??b;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function j(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),r=i[t].value;r!==s&&(c(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(y,{...n,...e})]})}function A(e){const n=(0,g.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},988:(e,n,t)=>{t.d(n,{A:()=>D});t(6540);var s=t(8473),r=t(4164),a=t(1312),l=t(4882),i=t(3550),o=t(4848);const c={icon:(0,o.jsx)(i.A,{}),title:(0,o.jsx)(a.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function d(e){return(0,o.jsx)(l.A,{...c,...e,className:(0,r.A)("alert alert--secondary",e.className),children:e.children})}var u=t(3069);const h={icon:(0,o.jsx)(u.A,{}),title:(0,o.jsx)(a.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function m(e){return(0,o.jsx)(l.A,{...h,...e,className:(0,r.A)("alert alert--success",e.className),children:e.children})}var p=t(2382);const b={icon:(0,o.jsx)(p.A,{}),title:(0,o.jsx)(a.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function g(e){return(0,o.jsx)(l.A,{...b,...e,className:(0,r.A)("alert alert--info",e.className),children:e.children})}var f=t(804);const x={icon:(0,o.jsx)(f.A,{}),title:(0,o.jsx)(a.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var j=t(633);const y={icon:(0,o.jsx)(j.A,{}),title:(0,o.jsx)(a.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function v(e){return(0,o.jsx)(l.A,{...y,...e,className:(0,r.A)("alert alert--danger",e.className),children:e.children})}var A=t(6784),N=t(7875);const w={icon:(0,o.jsx)(A.g,{icon:N._2G}),title:(0,o.jsx)(a.A,{id:"theme.admonition.discord",description:"The default label used for the Discord admonition (:::discord)",children:"discord"})};var T=t(6188);const I={icon:(0,o.jsx)(A.g,{icon:T.fLc}),title:(0,o.jsx)(a.A,{id:"theme.admonition.security",description:"The default label used for the Security admonition (:::security)",children:"security"})};const S={icon:(0,o.jsx)(A.g,{icon:T.KMJ}),title:(0,o.jsx)(a.A,{id:"theme.admonition.release",description:"The default label used for the Release admonition (:::release)",children:"release"})};const E={icon:(0,o.jsx)(A.g,{icon:T.Wcv}),title:(0,o.jsx)(a.A,{id:"theme.admonition.credit",description:"The default label used for the Credit admonition (:::credit)",children:"credit"})};const _={icon:(0,o.jsx)(A.g,{icon:T.rC2}),title:(0,o.jsx)(a.A,{id:"theme.admonition.docusaurus",description:"The default label used for the Docusaurus admonition (:::docusaurus)",children:"Did you know..."})};const k={...{note:d,tip:m,info:g,caution:function(e){return(0,o.jsx)(l.A,{...x,...e,className:(0,r.A)("alert alert--warning",e.className),children:e.children})},danger:v,security:function(e){return(0,o.jsx)(l.A,{...I,...e,className:(0,r.A)("alert alert--security",e.className),children:e.children})},release:function(e){return(0,o.jsx)(l.A,{...S,...e,className:(0,r.A)("alert alert--release",e.className),children:e.children})},credit:function(e){return(0,o.jsx)(l.A,{...E,...e,className:(0,r.A)("alert alert--credit",e.className),children:e.children})},docusaurus:function(e){return(0,o.jsx)(l.A,{..._,...e,className:(0,r.A)("alert alert--docusaurus",e.className),children:e.children})},discord:function(e){return(0,o.jsx)(l.A,{...w,...e,className:(0,r.A)("alert alert--discord",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(d,{title:"secondary",...e}),important:e=>(0,o.jsx)(g,{title:"important",...e}),success:e=>(0,o.jsx)(m,{title:"success",...e}),warning:e=>(0,o.jsx)(v,{title:"warning",...e})}};function D(e){const n=(0,s.c)(e),t=(r=n.type,k[r]||(console.warn(`No admonition component found for admonition type "${r}". Using Info as fallback.`),k.info));var r;return(0,o.jsx)(t,{...n})}}}]);