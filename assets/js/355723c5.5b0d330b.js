"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1270],{7006:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=a(4848),r=a(8453),l=(a(988),a(1470)),s=a(9365);const i={title:"CLI",sidebar_label:"CLI"},o=void 0,c={id:"api/deployment/cli",title:"CLI",description:"Get started",source:"@site/docs/api/deployment/cli.mdx",sourceDirName:"api/deployment",slug:"/api/deployment/cli",permalink:"/docs/api/deployment/cli",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:171655973e4,frontMatter:{title:"CLI",sidebar_label:"CLI"},sidebar:"mySidebar",previous:{title:"Deployment",permalink:"/docs/api/deployment"},next:{title:"GitHub Actions",permalink:"/docs/api/deployment/github-actions"}},d={},u=[{value:"Get started",id:"get-started",level:2},{value:"Test locally",id:"test-locally",level:2},{value:"CLI",id:"cli",level:2},{value:"SSH Deployment",id:"ssh-deployment",level:2}];function h(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,t.jsx)(n.h2,{id:"test-locally",children:"Test locally"}),"\n",(0,t.jsx)(n.p,{children:"To ensure smooth deployment, let's build the static files for production. Run either of the following:"}),"\n",(0,t.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,t.jsx)(s.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})})}),(0,t.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn build\n"})})}),(0,t.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run build\n"})})})]}),"\n",(0,t.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,t.jsx)(s.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run build && npm run serve\n"})})}),(0,t.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn build&& yarn serve\n"})})}),(0,t.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run build&& pnpm run serve\n"})})})]}),"\n",(0,t.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,t.jsx)(s.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run build && npm run serve -- --build --port 80 --host 0.0.0.0\n"})})}),(0,t.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn build&& yarn serve --build --port 80 --host 0.0.0.0\n"})})}),(0,t.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run build&& pnpm run serve --build --port 80 --host 0.0.0.0\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,t.jsxs)(n.p,{children:["Using the ",(0,t.jsx)(n.code,{children:"docusaurus build"})," command is a convenient way to build the website and push to the gh-pages branch. Note that the following configuration is ",(0,t.jsx)(n.strong,{children:"REQUIRED"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="docusaurus.config.ts"',children:"const config: Config =  {\n  // ...\n  url: 'https://your-website-url.com',\n  baseUrl: '/',\n  projectName: 'you-project-name.github.io',\n  organizationName: 'your-organization-name',\n  deploymentBranch: 'gh-pages',\n  trailingSlash: false,\n  // ...\n};\n"})}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(s.A,{value:"bash",label:"Bash",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"GIT_USER=<GITHUB_USERNAME> yarn deploy\n"})})}),(0,t.jsx)(s.A,{value:"win",label:"Windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"\n'})})}),(0,t.jsx)(s.A,{value:"pwsh",label:"Powershell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cmd /C 'set \"GIT_USER=<GITHUB_USERNAME>\" && yarn deploy'\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"ssh-deployment",children:"SSH Deployment"}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(s.A,{value:"ssh",label:"Using SSH",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"USE_SSH=true yarn deploy\n"})})}),(0,t.jsx)(s.A,{value:"no_ssh",label:"Not using SSH",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"GIT_USER=<Your GitHub username> yarn deploy\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,a)=>{a.d(n,{A:()=>s});a(6540);var t=a(4164);const r={tabItem:"tabItem_Ymn6"};var l=a(4848);function s(e){let{children:n,hidden:a,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,s),hidden:a,children:n})}},1470:(e,n,a)=>{a.d(n,{A:()=>A});var t=a(6540),r=a(4164),l=a(3104),s=a(6347),i=a(205),o=a(7485),c=a(1682),d=a(9466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const r=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function b(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,l=h(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,u]=p({queryString:a,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,d.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),x=(()=>{const e=c??b;return m({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=a(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(4848);function g(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,a=o.indexOf(n),r=i[a].value;r!==t&&(c(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,r.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function A(e){const n=(0,f.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},988:(e,n,a)=>{a.d(n,{A:()=>_});a(6540);var t=a(8473),r=a(4164),l=a(1312),s=a(4882),i=a(3550),o=a(4848);const c={icon:(0,o.jsx)(i.A,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function d(e){return(0,o.jsx)(s.A,{...c,...e,className:(0,r.A)("alert alert--secondary",e.className),children:e.children})}var u=a(3069);const h={icon:(0,o.jsx)(u.A,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function m(e){return(0,o.jsx)(s.A,{...h,...e,className:(0,r.A)("alert alert--success",e.className),children:e.children})}var p=a(2382);const b={icon:(0,o.jsx)(p.A,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function f(e){return(0,o.jsx)(s.A,{...b,...e,className:(0,r.A)("alert alert--info",e.className),children:e.children})}var x=a(804);const j={icon:(0,o.jsx)(x.A,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var g=a(633);const v={icon:(0,o.jsx)(g.A,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function y(e){return(0,o.jsx)(s.A,{...v,...e,className:(0,r.A)("alert alert--danger",e.className),children:e.children})}var A=a(6784),N=a(7875);const w={icon:(0,o.jsx)(A.g,{icon:N._2G}),title:(0,o.jsx)(l.A,{id:"theme.admonition.discord",description:"The default label used for the Discord admonition (:::discord)",children:"discord"})};var I=a(6188);const T={icon:(0,o.jsx)(A.g,{icon:I.fLc}),title:(0,o.jsx)(l.A,{id:"theme.admonition.security",description:"The default label used for the Security admonition (:::security)",children:"security"})};const S={icon:(0,o.jsx)(A.g,{icon:I.KMJ}),title:(0,o.jsx)(l.A,{id:"theme.admonition.release",description:"The default label used for the Release admonition (:::release)",children:"release"})};const E={icon:(0,o.jsx)(A.g,{icon:I.Wcv}),title:(0,o.jsx)(l.A,{id:"theme.admonition.credit",description:"The default label used for the Credit admonition (:::credit)",children:"credit"})};const C={icon:(0,o.jsx)(A.g,{icon:I.rC2}),title:(0,o.jsx)(l.A,{id:"theme.admonition.docusaurus",description:"The default label used for the Docusaurus admonition (:::docusaurus)",children:"Did you know..."})};const k={...{note:d,tip:m,info:f,caution:function(e){return(0,o.jsx)(s.A,{...j,...e,className:(0,r.A)("alert alert--warning",e.className),children:e.children})},danger:y,security:function(e){return(0,o.jsx)(s.A,{...T,...e,className:(0,r.A)("alert alert--security",e.className),children:e.children})},release:function(e){return(0,o.jsx)(s.A,{...S,...e,className:(0,r.A)("alert alert--release",e.className),children:e.children})},credit:function(e){return(0,o.jsx)(s.A,{...E,...e,className:(0,r.A)("alert alert--credit",e.className),children:e.children})},docusaurus:function(e){return(0,o.jsx)(s.A,{...C,...e,className:(0,r.A)("alert alert--docusaurus",e.className),children:e.children})},discord:function(e){return(0,o.jsx)(s.A,{...w,...e,className:(0,r.A)("alert alert--discord",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(d,{title:"secondary",...e}),important:e=>(0,o.jsx)(f,{title:"important",...e}),success:e=>(0,o.jsx)(m,{title:"success",...e}),warning:e=>(0,o.jsx)(y,{title:"warning",...e})}};function _(e){const n=(0,t.c)(e),a=(r=n.type,k[r]||(console.warn(`No admonition component found for admonition type "${r}". Using Info as fallback.`),k.info));var r;return(0,o.jsx)(a,{...n})}}}]);