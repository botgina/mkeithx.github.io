"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1752],{5:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=n(4848),s=n(8453),r=n(3935);const o={title:"Legacies & Contributions",description:"Highlighting scientific discoveries, technological advancements, and influential figures in physics, astronomy and space exploration."},c=void 0,a={id:"legacy/index",title:"Legacies & Contributions",description:"Highlighting scientific discoveries, technological advancements, and influential figures in physics, astronomy and space exploration.",source:"@site/cosmos/legacy/index.mdx",sourceDirName:"legacy",slug:"/legacy/",permalink:"/cosmos/legacy/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1718451632e3,frontMatter:{title:"Legacies & Contributions",description:"Highlighting scientific discoveries, technological advancements, and influential figures in physics, astronomy and space exploration."},sidebar:"cosmicSidebar",previous:{title:"Heliosphere",permalink:"/cosmos/astrophysics/sun-heliosphere"},next:{title:"Women in Physics",permalink:"/cosmos/legacy/women-in-physics"}},l={},u=[];function d(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Highlighting scientific discoveries, technological advancements, and influential figures in physics, astronomy and space exploration."}),"\n",(0,i.jsx)(r.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3935:(e,t,n)=>{n.d(t,{A:()=>y});n(6540);var i=n(4164),s=n(5215),r=n(4783),o=n(7824),c=n(877),a=n(3230),l=n(5225);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(4848);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(r.A,{href:t,className:(0,i.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:r}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,i.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),r&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",u.cardDescription),title:r,children:r})]})}function h(e){let{item:t}=e;const n=(0,s.Nr)(t),i=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const r=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,i.A)("row",n),children:r.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},7824:(e,t,n)=>{n.d(t,{W:()=>l});var i=n(6540),s=n(7639);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,i.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const s=n.select(t),r=n.pluralForms.indexOf(s);return i[Math.min(r,i.length-1)]}(n,t,e)}}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);