"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7168],{2333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(4848),s=n(8453);n(4724),n(9489),n(7227),n(7319),n(9215),n(3935);const a={title:"Helpdesk",description:"Troubleshooting Guide - Demo"},i=void 0,o={id:"index",title:"Helpdesk",description:"Troubleshooting Guide - Demo",source:"@site/msp/index.mdx",sourceDirName:".",slug:"/",permalink:"/msp/",draft:!1,unlisted:!1,editUrl:"https://github.com/mkeithX/mkeithx.github.io/edit/main/website/msp/index.mdx",tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:1722393907e3,frontMatter:{title:"Helpdesk",description:"Troubleshooting Guide - Demo"},sidebar:"mspSidebar",next:{title:"Getting started",permalink:"/msp/snippets/"}},l={},c=[];function d(e){const t={a:"a",admonition:"admonition",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsx)(t.admonition,{title:"Deprecated",type:"danger",children:(0,r.jsxs)(t.p,{children:["MSP/Hepdesk is now deprecated. For guides & workarounds ",(0,r.jsx)(t.a,{href:"/docs/devops",children:(0,r.jsx)(t.strong,{children:"navigate to this page"})})," to learn more."]})})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3935:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var r=n(4164),s=n(5215),a=n(4783),i=n(7824),o=n(877),l=n(3230),c=n(5225);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(4848);function h(e){let{href:t,children:n}=e;return(0,u.jsx)(a.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:s,description:a}=e;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(c.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),a&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:a,children:a})]})}function f(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function p(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(p,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,u.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const a=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:a.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(b,{item:e})},t)))})}},7227:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(4164);const s={tabItem:"tabItem_Ymn6"};var a=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(6540),s=n(4164),a=n(4245),i=n(6347),o=n(6494),l=n(2814),c=n(5167),d=n(9900);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=f({queryString:n,groupId:s}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),x=(()=>{const e=c??p;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=n(1062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(c(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(w,{...t,...e})]})}function y(e){const t=(0,b.A)();return(0,g.jsx)(v,{...e,children:u(e.children)},String(t))}},7824:(e,t,n)=>{n.d(t,{W:()=>c});var r=n(6540),s=n(7639);const a=["zero","one","two","few","many","other"];function i(e){return a.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),a=n.pluralForms.indexOf(s);return r[Math.min(a,r.length-1)]}(n,t,e)}}},4724:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(9215),s=n(4848);function a(e){let{url:t}=e;return(0,s.jsx)("div",{style:{padding:10},children:(0,s.jsx)(r.A,{url:t,style:{minWidth:"min(100%,45vw)",width:996,maxWidth:"100%",overflow:"hidden"},bodyStyle:{padding:0},children:(0,s.jsx)("iframe",{src:t,title:t,style:{display:"block",width:"100%",height:300}})})})}},9215:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(4164);const s={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var a=n(4848);function i(e){let{children:t,minHeight:n,url:i="https://mkeithx.pages.dev",style:o,bodyStyle:l}=e;return(0,a.jsxs)("div",{className:s.browserWindow,style:{...o,minHeight:n},children:[(0,a.jsxs)("div",{className:s.browserWindowHeader,children:[(0,a.jsxs)("div",{className:s.buttons,children:[(0,a.jsx)("span",{className:s.dot,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:s.dot,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:s.dot,style:{background:"#58cb42"}})]}),(0,a.jsx)("div",{className:(0,r.A)(s.browserWindowAddressBar,"text--truncate"),children:i}),(0,a.jsx)("div",{className:s.browserWindowMenuIcon,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:s.bar}),(0,a.jsx)("span",{className:s.bar}),(0,a.jsx)("span",{className:s.bar})]})})]}),(0,a.jsx)("div",{className:s.browserWindowBody,style:l,children:t})]})}},7319:(e,t,n)=>{n.d(t,{A:()=>V});n(6540);var r=n(1348),s=n(4164),a=n(3230),i=n(9204),o=n(9059),l=n(4848);const c={icon:(0,l.jsx)(o.A,{}),title:(0,l.jsx)(a.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function d(e){return(0,l.jsx)(i.A,{...c,...e,className:(0,s.A)("alert alert--secondary",e.className),children:e.children})}var u=n(7950);const h={icon:(0,l.jsx)(u.A,{}),title:(0,l.jsx)(a.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function m(e){return(0,l.jsx)(i.A,{...h,...e,className:(0,s.A)("alert alert--success",e.className),children:e.children})}var f=n(6699);const p={icon:(0,l.jsx)(f.A,{}),title:(0,l.jsx)(a.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,l.jsx)(i.A,{...p,...e,className:(0,s.A)("alert alert--info",e.className),children:e.children})}var x=n(667);const g={icon:(0,l.jsx)(x.A,{}),title:(0,l.jsx)(a.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var j=n(6616);const w={icon:(0,l.jsx)(j.A,{}),title:(0,l.jsx)(a.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function v(e){return(0,l.jsx)(i.A,{...w,...e,className:(0,s.A)("alert alert--danger",e.className),children:e.children})}var y=n(6784),A=n(7875);const N={icon:(0,l.jsx)(y.g,{icon:A._2G}),title:(0,l.jsx)(a.A,{id:"theme.admonition.discord",description:"The default label used for the Discord admonition (:::discord)",children:"discord"})};var k=n(6188);const T={icon:(0,l.jsx)(y.g,{icon:k.fLc}),title:(0,l.jsx)(a.A,{id:"theme.admonition.security",description:"The default label used for the Security admonition (:::security)",children:"security"})};const I={icon:(0,l.jsx)(y.g,{icon:k.Lb_}),title:(0,l.jsx)(a.A,{id:"theme.admonition.release",description:"The default label used for the Release admonition (:::release)",children:"release"})};const D={icon:(0,l.jsx)(y.g,{icon:k.Wcv}),title:(0,l.jsx)(a.A,{id:"theme.admonition.credit",description:"The default label used for the Credit admonition (:::credit)",children:"credit"})};const _={icon:(0,l.jsx)(y.g,{icon:k.rC2}),title:(0,l.jsx)(a.A,{id:"theme.admonition.docusaurus",description:"The default label used for the Docusaurus admonition (:::docusaurus)",children:"Did you know..."})};const W={...{note:d,tip:m,info:b,caution:function(e){return(0,l.jsx)(i.A,{...g,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})},danger:v,security:function(e){return(0,l.jsx)(i.A,{...T,...e,className:(0,s.A)("alert alert--security",e.className),children:e.children})},release:function(e){return(0,l.jsx)(i.A,{...I,...e,className:(0,s.A)("alert alert--release",e.className),children:e.children})},credit:function(e){return(0,l.jsx)(i.A,{...D,...e,className:(0,s.A)("alert alert--credit",e.className),children:e.children})},docusaurus:function(e){return(0,l.jsx)(i.A,{..._,...e,className:(0,s.A)("alert alert--docusaurus",e.className),children:e.children})},discord:function(e){return(0,l.jsx)(i.A,{...N,...e,className:(0,s.A)("alert alert--discord",e.className),children:e.children})}},...{secondary:e=>(0,l.jsx)(d,{title:"secondary",...e}),important:e=>(0,l.jsx)(b,{title:"important",...e}),success:e=>(0,l.jsx)(m,{title:"success",...e}),warning:e=>(0,l.jsx)(v,{title:"warning",...e})}};function V(e){const t=(0,r.c)(e),n=(s=t.type,W[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),W.info));var s;return(0,l.jsx)(n,{...t})}}}]);