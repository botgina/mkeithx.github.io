"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1319],{4619:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=s(4848),r=s(8453),i=s(3935);const a={title:"Planets",description:"Planets of our solar system.",image:"https://imgur.com/vWsE4iu.png"},l=void 0,o={id:"solar-system/planets/index",title:"Planets",description:"Planets of our solar system.",source:"@site/cosmos/solar-system/planets/index.mdx",sourceDirName:"solar-system/planets",slug:"/solar-system/planets/",permalink:"/cosmos/solar-system/planets/",draft:!1,unlisted:!1,editUrl:"https://github.com/mkeithX/mkeithx.github.io/edit/main/website/cosmos/solar-system/planets/index.mdx",tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:1722393907e3,frontMatter:{title:"Planets",description:"Planets of our solar system.",image:"https://imgur.com/vWsE4iu.png"},sidebar:"cosmicSidebar",previous:{title:"The Sun",permalink:"/cosmos/solar-system/sun"},next:{title:"Mercury",permalink:"/cosmos/solar-system/planets/mercury"}},c={},d=[{value:"What are planets exactly?",id:"what-are-planets-exactly",level:2},{value:"Let&#39;s get started",id:"lets-get-started",level:2}];function u(e){const t={em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The term ",(0,n.jsx)(t.em,{children:'"plan\xedtis,"'})," coined by ancient Greek astronomers, translates to ",(0,n.jsx)(t.em,{children:'"wanderer"'})," or ",(0,n.jsx)(t.em,{children:'"wandering star"'}),". In essence, planets are colossal, spherical bodies orbiting stars, with cleared paths devoid of debris. They bask in the glow of their stellar hosts, distinct from smaller celestial entities like asteroids and moons. Let's delve deeper into the essence of planets based on the criteria established by the International Astronomical Union (IAU)."]}),"\n",(0,n.jsx)(t.h2,{id:"what-are-planets-exactly",children:"What are planets exactly?"}),"\n",(0,n.jsx)(t.p,{children:"According to the IAU, three criteria delineate a celestial object as a planet:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Orbiting a Star:"})," Planets gracefully orbit stars, such as our radiant Sun (Helios), distinguishing them from satellites revolving around other planets."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Spherical Shape:"})," Planets, sculpted by gravitational forces, assume spherical forms, unlike irregularly shaped asteroids and moons."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Cleared Their Orbit:"})," Planets assert gravitational dominance, clearing their orbital paths of debris, and maintaining a pristine trajectory around their parent star."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"lets-get-started",children:"Let's get started"}),"\n",(0,n.jsx)(i.A,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},3935:(e,t,s)=>{s.d(t,{A:()=>y});s(6540);var n=s(4164),r=s(5215),i=s(4783),a=s(7824),l=s(877),o=s(3230),c=s(5225);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=s(4848);function m(e){let{href:t,children:s}=e;return(0,u.jsx)(i.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:s})}function h(e){let{href:t,icon:s,title:r,description:i}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(c.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:r,children:[s," ",r]}),i&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const s=(0,r.Nr)(t),n=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,o.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,u.jsx)(h,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const s=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,u.jsx)(h,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const s=(0,r.$S)();return(0,u.jsx)(y,{items:s.items,className:t})}function y(e){const{items:t,className:s}=e;if(!t)return(0,u.jsx)(x,{...e});const i=(0,r.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",s),children:i.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},7824:(e,t,s)=>{s.d(t,{W:()=>c});var n=s(6540),r=s(7639);const i=["zero","one","two","few","many","other"];function a(e){return i.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const n=e.split("|");if(1===n.length)return n[0];n.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=s.select(t),i=s.pluralForms.indexOf(r);return n[Math.min(i,n.length-1)]}(s,t,e)}}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>l});var n=s(6540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);