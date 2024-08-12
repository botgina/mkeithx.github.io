"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9554],{3356:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=t(4848),s=t(8453),a=t(9489),l=t(7227);const o={sidebar_label:"Deploy your site",sidebar_position:5},u="Deploy your site",i={id:"guides/docusaurus/basics/deploy-your-site",title:"Deploy your site",description:"Docusaurus is a static-site-generator (also called Jamstack).",source:"@site/docs/guides/docusaurus/basics/deploy-your-site.mdx",sourceDirName:"guides/docusaurus/basics",slug:"/guides/docusaurus/basics/deploy-your-site",permalink:"/docs/guides/docusaurus/basics/deploy-your-site",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1723454281e3,sidebarPosition:5,frontMatter:{sidebar_label:"Deploy your site",sidebar_position:5},sidebar:"mySidebar",previous:{title:"Markdown Features",permalink:"/docs/guides/docusaurus/basics/markdown-features"},next:{title:"Congratulations!",permalink:"/docs/guides/docusaurus/basics/congratulations"}},c={},d=[{value:"Build your site",id:"build-your-site",level:2},{value:"Deploy your site",id:"deploy-your-site-1",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"deploy-your-site",children:"Deploy your site"})}),"\n",(0,n.jsxs)(r.p,{children:["Docusaurus is a ",(0,n.jsx)(r.strong,{children:"static-site-generator"})," (also called ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"https://jamstack.org/",children:"Jamstack"})}),")."]}),"\n",(0,n.jsxs)(r.p,{children:["It builds your site as simple ",(0,n.jsx)(r.strong,{children:"static HTML, JavaScript and CSS files"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"build-your-site",children:"Build your site"}),"\n",(0,n.jsxs)(r.p,{children:["Build your site ",(0,n.jsx)(r.strong,{children:"for production"}),":"]}),"\n",(0,n.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,n.jsx)(l.A,{value:"npm",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"npm run build\n"})})}),(0,n.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"yarn build\n"})})}),(0,n.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"pnpm run build\n"})})})]}),"\n",(0,n.jsxs)(r.p,{children:["The static files are generated in the ",(0,n.jsx)(r.code,{children:"build"})," folder."]}),"\n",(0,n.jsx)(r.h2,{id:"deploy-your-site-1",children:"Deploy your site"}),"\n",(0,n.jsx)(r.p,{children:"Test your production build locally:"}),"\n",(0,n.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,n.jsx)(l.A,{value:"npm",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"npm run serve\n"})})}),(0,n.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"yarn serve\n"})})}),(0,n.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"pnpm run serve\n"})})})]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"build"})," folder is now served at ",(0,n.jsx)(r.a,{href:"http://localhost:3000/",children:"http://localhost:3000/"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["You can now deploy the ",(0,n.jsx)(r.code,{children:"build"})," folder ",(0,n.jsx)(r.strong,{children:"almost anywhere"})," easily, ",(0,n.jsx)(r.strong,{children:"for free"})," or very small cost (read the ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"https://docusaurus.io/docs/deployment",children:"Deployment Guide"})}),")."]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},7227:(e,r,t)=>{t.d(r,{A:()=>l});t(6540);var n=t(4164);const s={tabItem:"tabItem_Ymn6"};var a=t(4848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:t,children:r})}},9489:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(6540),s=t(4164),a=t(4245),l=t(6347),o=t(6494),u=t(2814),i=t(5167),c=t(9900);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,i.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function b(e){let{queryString:r=!1,groupId:t}=e;const s=(0,l.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=p(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[i,d]=b({queryString:t,groupId:s}),[m,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,c.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),y=(()=>{const e=i??m;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{y&&u(y)}),[y]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(1062);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function x(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.a_)(),c=e=>{const r=e.currentTarget,t=u.indexOf(r),s=o[t].value;s!==n&&(i(r),l(s))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>u.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function j(e){const r=m(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,g.jsx)(x,{...r,...e}),(0,g.jsx)(v,{...r,...e})]})}function w(e){const r=(0,f.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(r))}},8453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>o});var n=t(6540);const s={},a=n.createContext(s);function l(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);