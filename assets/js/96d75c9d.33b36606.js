"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2394],{5788:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var o=t(4848),s=t(8453),r=t(1470),i=t(9365),a=t(7293);const l={title:"Styling"},c=void 0,d={id:"contweaks/docusaurus/styling",title:"Styling",description:"Icons",source:"@site/docs/contweaks/docusaurus/04-styling.mdx",sourceDirName:"contweaks/docusaurus",slug:"/contweaks/docusaurus/styling",permalink:"/docs/contweaks/docusaurus/styling",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"mkeithX",lastUpdatedAt:1710922591e3,sidebarPosition:4,frontMatter:{title:"Styling"},sidebar:"mySidebar",previous:{title:"Deployment",permalink:"/docs/contweaks/docusaurus/deployment"},next:{title:"AdHocs",permalink:"/docs/adhocs"}},u={},m=[{value:"Icons",id:"icons",level:2},{value:"Font Awesome",id:"font-awesome",level:3},{value:"Admonitions",id:"admonitions",level:2},{value:"JSX",id:"jsx",level:3},{value:"Default",id:"default",level:3},{value:"Custom title",id:"custom-title",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{FAIcon:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("FAIcon",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"icons",children:"Icons"}),"\n",(0,o.jsxs)(n.p,{children:["Font Awesome Icons. The file ",(0,o.jsx)(n.code,{children:"MDXComponents.tsx"})," or ",(0,o.jsx)(n.code,{children:"MDXComponents.js"})," should be present in the ",(0,o.jsx)(n.code,{children:"src/theme"})," folder."]}),"\n",(0,o.jsx)(t,{icon:"fa-brands fa-github",size:"4x"}),"\n",(0,o.jsx)(t,{icon:"fa-brands fa-x-twitter",size:"4x"}),"\n",(0,o.jsx)(t,{icon:"fa-brands fa-youtube",size:"4x"}),"\n",(0,o.jsx)(t,{icon:"fa-brands fa-linkedin",size:"4x"}),"\n",(0,o.jsx)(t,{icon:"fa-brands fa-python",size:"4x"}),"\n",(0,o.jsx)(t,{icon:"fa-brands fa-js",size:"4x"}),"\n",(0,o.jsx)(t,{icon:"fa-brands fa-react",size:"4x"}),"\n",(0,o.jsx)(n.h3,{id:"font-awesome",children:"Font Awesome"}),"\n",(0,o.jsxs)(n.p,{children:["To render these icons in ",(0,o.jsx)(n.code,{children:".mdx"})," :"]}),"\n",(0,o.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,o.jsx)(i.A,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome\n"})})}),(0,o.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome\n"})})}),(0,o.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome\n"})})})]}),"\n",(0,o.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,o.jsx)(i.A,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"\nnpm install --save @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons\n"})})}),(0,o.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"\nyarn add @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons\n"})})}),(0,o.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"\npnpm add @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons\n"})})})]}),"\n",(0,o.jsxs)(r.A,{children:[(0,o.jsx)(i.A,{value:"js",label:"JavaScript",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="src/theme/MDXComponents.js"',children:'import React from "react";\n// Import the original mapper\nimport MDXComponents from "@theme-original/MDXComponents";\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { library } from "@fortawesome/fontawesome-svg-core";\nimport { fab } from "@fortawesome/free-brands-svg-icons";\nimport { fas } from "@fortawesome/free-solid-svg-icons";\n\nlibrary.add(fab, fas);\n\nexport default {\n  ...MDXComponents,\n  FAIcon: FontAwesomeIcon, // Make the FontAwesomeIcon component available in MDX as <icon />.\n};\n'})})}),(0,o.jsx)(i.A,{value:"tsx",label:"TypeScript",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:'title="src/theme/MDXComponents.tsx"',children:'import React from "react";\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { library } from "@fortawesome/fontawesome-svg-core";\nimport { fab } from "@fortawesome/free-brands-svg-icons";\nimport { fas } from "@fortawesome/free-solid-svg-icons";\nimport MDXComponents from "@theme-original/MDXComponents";\nimport Code from \'@theme/MDXComponents/Code\';\n\nlibrary.add(fab, fas);\n\ninterface Components {\n[key: string]: React.ComponentType<any>;\n}\n\nconst components: Components = {\n...MDXComponents,\nFAIcon: FontAwesomeIcon,\nCode,\n};\n\nexport default components;\n'})})})]}),"\n",(0,o.jsx)(n.h2,{id:"admonitions",children:"Admonitions"}),"\n",(0,o.jsx)(n.h3,{id:"jsx",children:"JSX"}),"\n",(0,o.jsx)(a.A,{type:"tip",icon:"\ud83d\udca1",title:"Did you know...",children:(0,o.jsx)(n.p,{children:"Use plugins to introduce shorter syntax for the most commonly used JSX\nelements in your project."})}),"\n",(0,o.jsx)(a.A,{type:"danger",icon:"\ud83d\udc80",title:"Danger...",children:(0,o.jsx)(n.p,{children:"Use plugins to introduce shorter syntax for the most commonly used JSX\nelements in your project."})}),"\n",(0,o.jsx)(n.h3,{id:"default",children:"Default"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Some ",(0,o.jsx)(n.strong,{children:"content"})," with ",(0,o.jsx)(n.em,{children:"Markdown"})," ",(0,o.jsx)(n.code,{children:"syntax"}),". Check ",(0,o.jsxs)(n.a,{href:"#",children:["this ",(0,o.jsx)(n.code,{children:"api"})]}),"."]})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Some ",(0,o.jsx)(n.strong,{children:"content"})," with ",(0,o.jsx)(n.em,{children:"Markdown"})," ",(0,o.jsx)(n.code,{children:"syntax"}),". Check ",(0,o.jsxs)(n.a,{href:"#",children:["this ",(0,o.jsx)(n.code,{children:"api"})]}),"."]})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Some ",(0,o.jsx)(n.strong,{children:"content"})," with ",(0,o.jsx)(n.em,{children:"Markdown"})," ",(0,o.jsx)(n.code,{children:"syntax"}),". Check ",(0,o.jsxs)(n.a,{href:"#",children:["this ",(0,o.jsx)(n.code,{children:"api"})]}),"."]})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["Some ",(0,o.jsx)(n.strong,{children:"content"})," with ",(0,o.jsx)(n.em,{children:"Markdown"})," ",(0,o.jsx)(n.code,{children:"syntax"}),". Check ",(0,o.jsxs)(n.a,{href:"#",children:["this ",(0,o.jsx)(n.code,{children:"api"})]}),"."]})}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsxs)(n.p,{children:["Some ",(0,o.jsx)(n.strong,{children:"content"})," with ",(0,o.jsx)(n.em,{children:"Markdown"})," ",(0,o.jsx)(n.code,{children:"syntax"}),". Check ",(0,o.jsxs)(n.a,{href:"#",children:["this ",(0,o.jsx)(n.code,{children:"api"})]}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"custom-title",children:"Custom title"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.mdxAdmonitionTitle,{children:["Your Title ",(0,o.jsx)(n.strong,{children:"with"})," some ",(0,o.jsx)(n.em,{children:"Markdown"})," ",(0,o.jsx)(n.code,{children:"syntax"}),"!"]}),(0,o.jsxs)(n.p,{children:["Some ",(0,o.jsx)(n.strong,{children:"content"})," with some ",(0,o.jsx)(n.em,{children:"Markdown"})," ",(0,o.jsx)(n.code,{children:"syntax"}),"."]})]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},7293:(e,n,t)=>{t.d(n,{A:()=>T});var o=t(6540),s=t(4848);function r(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=o.Children.toArray(e),t=n.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=n.filter((e=>e!==t)),i=t?.props.children;return{mdxAdmonitionTitle:i,rest:r.length>0?(0,s.jsx)(s.Fragment,{children:r}):null}}(e.children),r=e.title??n;return{...e,...r&&{title:r},children:t}}var i=t(4164),a=t(1312),l=t(7559);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:o}=e;return(0,s.jsx)("div",{className:(0,i.A)(l.G.common.admonition,l.G.common.admonitionType(n),c.admonition,t),children:o})}function u(e){let{icon:n,title:t}=e;return(0,s.jsxs)("div",{className:c.admonitionHeading,children:[(0,s.jsx)("span",{className:c.admonitionIcon,children:n}),t]})}function m(e){let{children:n}=e;return n?(0,s.jsx)("div",{className:c.admonitionContent,children:n}):null}function h(e){const{type:n,icon:t,title:o,children:r,className:i}=e;return(0,s.jsxs)(d,{type:n,className:i,children:[(0,s.jsx)(u,{title:o,icon:t}),(0,s.jsx)(m,{children:r})]})}function f(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const p={icon:(0,s.jsx)(f,{}),title:(0,s.jsx)(a.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,s.jsx)(h,{...p,...e,className:(0,i.A)("alert alert--secondary",e.className),children:e.children})}function j(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,s.jsx)(j,{}),title:(0,s.jsx)(a.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,s.jsx)(h,{...g,...e,className:(0,i.A)("alert alert--success",e.className),children:e.children})}function b(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const w={icon:(0,s.jsx)(b,{}),title:(0,s.jsx)(a.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(e){return(0,s.jsx)(h,{...w,...e,className:(0,i.A)("alert alert--info",e.className),children:e.children})}function A(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const C={icon:(0,s.jsx)(A,{}),title:(0,s.jsx)(a.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function k(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const N={icon:(0,s.jsx)(k,{}),title:(0,s.jsx)(a.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const I={icon:(0,s.jsx)(A,{}),title:(0,s.jsx)(a.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const M={...{note:x,tip:v,info:y,warning:function(e){return(0,s.jsx)(h,{...C,...e,className:(0,i.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(h,{...N,...e,className:(0,i.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(x,{title:"secondary",...e}),important:e=>(0,s.jsx)(y,{title:"important",...e}),success:e=>(0,s.jsx)(v,{title:"success",...e}),caution:function(e){return(0,s.jsx)(h,{...I,...e,className:(0,i.A)("alert alert--warning",e.className),children:e.children})}}};function T(e){const n=r(e),t=(o=n.type,M[o]||(console.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),M.info));var o;return(0,s.jsx)(t,{...n})}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var o=t(4164);const s={tabItem:"tabItem_Ymn6"};var r=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.A)(s.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var o=t(6540),s=t(4164),r=t(3104),i=t(6347),a=t(205),l=t(7485),c=t(1682),d=t(9466);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:s}}=e;return{value:n,label:t,attributes:o,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=m(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[c,u]=f({queryString:t,groupId:s}),[p,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(t);return[s,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),j=(()=>{const e=c??p;return h({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=t(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function v(e){let{className:n,block:t,selectedValue:o,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=a[t].value;s!==o&&(c(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=p(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(b,{...e,...n})]})}function y(e){const n=(0,x.A)();return(0,g.jsx)(w,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);