"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7691],{1103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=n(4848),s=n(8453),a=n(9489),i=n(7227),o=(n(7319),n(9195),n(4724),n(9215));const l={description:"Email scripts for clients and end users."},c="Email Templates",d={id:"devops/snippets/email-templates",title:"Email Templates",description:"Email scripts for clients and end users.",source:"@site/docs/devops/snippets/email-templates.mdx",sourceDirName:"devops/snippets",slug:"/devops/snippets/email-templates",permalink:"/docs/devops/snippets/email-templates",draft:!1,unlisted:!1,editUrl:"https://github.com/mkeithX/mkeithx.github.io/edit/main/website/docs/devops/snippets/email-templates.mdx",tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:1722293236e3,frontMatter:{description:"Email scripts for clients and end users."},sidebar:"devops",previous:{title:"Tech Notes",permalink:"/docs/devops/snippets/tech-notes"},next:{title:"Guides & Workarounds",permalink:"/docs/devops/guides-and-workarounds"}},u={},h=[{value:"Client",id:"client",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"email-templates",children:"Email Templates"}),"\n",(0,r.jsx)(t.h2,{id:"client",children:"Client"}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"ack",label:"Acknowledge",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-md",children:"Hi team,\n\nThank you for reaching out to us!\n\nWe have received your request and are currently sourcing for a suitable technician to assist.\n\nFor reference, please refer to ITN:\n\nThank you for your patience.\n\n"})})}),(0,r.jsx)(i.A,{value:"tech",label:"Found Tech",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-md",children:"\nHi team,\n\nWe have successfully sourced a technician to assist you. Details are as follows:\n\nName: \nPhone: \nEmail: \n\nThank you.\n\n"})})}),(0,r.jsx)(i.A,{value:"appn",label:"Appointment",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-md",children:"Hi team,\n\nOur technician is now all set for the site visit tomorrow, [Date, Time, Timezone]. We'll keep you posted for updates.\n\nThank you.\n\n"})})})]})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(4164);const s={tabItem:"tabItem_Ymn6"};var a=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(6540),s=n(4164),a=n(4245),i=n(6347),o=n(6494),l=n(2814),c=n(5167),d=n(9900);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=p({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),x=(()=>{const e=c??f;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=n(1062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(c(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...t,...e}),(0,v.jsx)(w,{...t,...e})]})}function g(e){const t=(0,b.A)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(t))}},4724:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(9215),s=n(4848);function a(e){let{url:t}=e;return(0,s.jsx)("div",{style:{padding:10},children:(0,s.jsx)(r.A,{url:t,style:{minWidth:"min(100%,45vw)",width:996,maxWidth:"100%",overflow:"hidden"},bodyStyle:{padding:0},children:(0,s.jsx)("iframe",{src:t,title:t,style:{display:"block",width:"100%",height:300}})})})}},9215:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(4164);const s={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var a=n(4848);function i(e){let{children:t,minHeight:n,url:i="https://mkeithx.pages.dev",style:o,bodyStyle:l}=e;return(0,a.jsxs)("div",{className:s.browserWindow,style:{...o,minHeight:n},children:[(0,a.jsxs)("div",{className:s.browserWindowHeader,children:[(0,a.jsxs)("div",{className:s.buttons,children:[(0,a.jsx)("span",{className:s.dot,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:s.dot,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:s.dot,style:{background:"#58cb42"}})]}),(0,a.jsx)("div",{className:(0,r.A)(s.browserWindowAddressBar,"text--truncate"),children:i}),(0,a.jsx)("div",{className:s.browserWindowMenuIcon,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:s.bar}),(0,a.jsx)("span",{className:s.bar}),(0,a.jsx)("span",{className:s.bar})]})})]}),(0,a.jsx)("div",{className:s.browserWindowBody,style:l,children:t})]})}},9195:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(4848);const s=e=>{let{src:t,type:n,maxWidth:s,alt:a}=e;return"youtube"===n?(0,r.jsx)("iframe",{width:"100%",style:{aspectRatio:"16 / 9",maxWidth:s||"100%"},src:t.youtube,title:a,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}):"local"===n?(0,r.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,width:"100%",style:{borderRadius:"8px",maxWidth:s||"100%"},children:[(0,r.jsx)("source",{src:t.webm,title:a,type:"video/webm"}),(0,r.jsx)("source",{src:t.mp4,title:a,type:"video/mp4"}),(0,r.jsx)("source",{src:t.ogg,title:a,type:"video/ogg"})]}):null}},7319:(e,t,n)=>{n.d(t,{A:()=>E});n(6540);var r=n(1348),s=n(4164),a=n(3230),i=n(9204),o=n(9059),l=n(4848);const c={icon:(0,l.jsx)(o.A,{}),title:(0,l.jsx)(a.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function d(e){return(0,l.jsx)(i.A,{...c,...e,className:(0,s.A)("alert alert--secondary",e.className),children:e.children})}var u=n(7950);const h={icon:(0,l.jsx)(u.A,{}),title:(0,l.jsx)(a.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function m(e){return(0,l.jsx)(i.A,{...h,...e,className:(0,s.A)("alert alert--success",e.className),children:e.children})}var p=n(6699);const f={icon:(0,l.jsx)(p.A,{}),title:(0,l.jsx)(a.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,l.jsx)(i.A,{...f,...e,className:(0,s.A)("alert alert--info",e.className),children:e.children})}var x=n(667);const v={icon:(0,l.jsx)(x.A,{}),title:(0,l.jsx)(a.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var j=n(6616);const w={icon:(0,l.jsx)(j.A,{}),title:(0,l.jsx)(a.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function y(e){return(0,l.jsx)(i.A,{...w,...e,className:(0,s.A)("alert alert--danger",e.className),children:e.children})}var g=n(6784),A=n(7875);const N={icon:(0,l.jsx)(g.g,{icon:A._2G}),title:(0,l.jsx)(a.A,{id:"theme.admonition.discord",description:"The default label used for the Discord admonition (:::discord)",children:"discord"})};var T=n(6188);const k={icon:(0,l.jsx)(g.g,{icon:T.fLc}),title:(0,l.jsx)(a.A,{id:"theme.admonition.security",description:"The default label used for the Security admonition (:::security)",children:"security"})};const I={icon:(0,l.jsx)(g.g,{icon:T.Lb_}),title:(0,l.jsx)(a.A,{id:"theme.admonition.release",description:"The default label used for the Release admonition (:::release)",children:"release"})};const W={icon:(0,l.jsx)(g.g,{icon:T.Wcv}),title:(0,l.jsx)(a.A,{id:"theme.admonition.credit",description:"The default label used for the Credit admonition (:::credit)",children:"credit"})};const V={icon:(0,l.jsx)(g.g,{icon:T.rC2}),title:(0,l.jsx)(a.A,{id:"theme.admonition.docusaurus",description:"The default label used for the Docusaurus admonition (:::docusaurus)",children:"Did you know..."})};const _={...{note:d,tip:m,info:b,caution:function(e){return(0,l.jsx)(i.A,{...v,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})},danger:y,security:function(e){return(0,l.jsx)(i.A,{...k,...e,className:(0,s.A)("alert alert--security",e.className),children:e.children})},release:function(e){return(0,l.jsx)(i.A,{...I,...e,className:(0,s.A)("alert alert--release",e.className),children:e.children})},credit:function(e){return(0,l.jsx)(i.A,{...W,...e,className:(0,s.A)("alert alert--credit",e.className),children:e.children})},docusaurus:function(e){return(0,l.jsx)(i.A,{...V,...e,className:(0,s.A)("alert alert--docusaurus",e.className),children:e.children})},discord:function(e){return(0,l.jsx)(i.A,{...N,...e,className:(0,s.A)("alert alert--discord",e.className),children:e.children})}},...{secondary:e=>(0,l.jsx)(d,{title:"secondary",...e}),important:e=>(0,l.jsx)(b,{title:"important",...e}),success:e=>(0,l.jsx)(m,{title:"success",...e}),warning:e=>(0,l.jsx)(y,{title:"warning",...e})}};function E(e){const t=(0,r.c)(e),n=(s=t.type,_[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),_.info));var s;return(0,l.jsx)(n,{...t})}}}]);