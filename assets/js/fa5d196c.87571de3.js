"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5676],{2267:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var n=s(4848),i=s(8453),r=s(3514);const c={title:"Basics",sidebar_label:"Basics"},o=void 0,a={id:"guides/docusaurus/basics/index",title:"Basics",description:"{/ prettier-ignore /}",source:"@site/docs/guides/docusaurus/basics/index.mdx",sourceDirName:"guides/docusaurus/basics",slug:"/guides/docusaurus/basics/",permalink:"/docs/guides/docusaurus/basics/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Basics",sidebar_label:"Basics"},sidebar:"docSidebar",previous:{title:"Docusaurus",permalink:"/docs/intro-to-docusaurus"},next:{title:"Create a Document",permalink:"/docs/guides/docusaurus/basics/create-a-document"}},u={},d=[];function l(e){return(0,n.jsxs)(n.Fragment,{children:["\n","\n","\n",(0,n.jsx)(r.A,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l()}},3514:(e,t,s)=>{s.d(t,{A:()=>g});s(6540);var n=s(4164),i=s(4142),r=s(8774),c=s(6654),o=s(1312),a=s(1107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=s(4848);function l(e){let{href:t,children:s}=e;return(0,d.jsx)(r.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:s})}function m(e){let{href:t,icon:s,title:i,description:r}=e;return(0,d.jsxs)(l,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:i,children:[s," ",i]}),r&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:r,children:r})]})}function f(e){let{item:t}=e;const s=(0,i.Nr)(t);return s?(0,d.jsx)(m,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const s=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const s=(0,i.$S)();return(0,d.jsx)(g,{items:s.items,className:t})}function g(e){const{items:t,className:s}=e;if(!t)return(0,d.jsx)(x,{...e});const r=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",s),children:r.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}},8453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>o});var n=s(6540);const i={},r=n.createContext(i);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);