"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4910],{8524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(4848),a=r(8453),s=r(871);r(1470),r(9365),r(988);const i={title:"MSP Overview",slug:"/"},o=void 0,l={id:"overview",title:"MSP Overview",description:"",source:"@site/msp/overview.mdx",sourceDirName:".",slug:"/",permalink:"/msp/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:171655973e4,frontMatter:{title:"MSP Overview",slug:"/"},sidebar:"mspSidebar",next:{title:"Frequently used snippets",permalink:"/msp/frequently-used-snippets"}},c={},d=[];function u(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{title:"Deprecated",type:"caution"}),"\n",(0,n.jsxs)("div",{class:"container",align:"center",children:[(0,n.jsx)(s.A,{url:"https://www.timeanddate.com/worldclock/fullscreen.html?n=145"}),(0,n.jsx)("iframe",{src:"https://free.timeanddate.com/clock/i9ddm2hg/n137/fn6/fs16/fcf0f/tc000/ftb/pa8/tt0/tw1/th1/ta1/tb4",frameborder:"0",width:"212",height:"55"}),(0,n.jsx)("iframe",{src:"https://free.timeanddate.com/clock/i9ddm2hg/n80/fn6/fs16/fcf90/tc000/ftb/pa8/tt0/tw1/th1/ta1/tb4",frameborder:"0",width:"212",height:"55"}),(0,n.jsx)("iframe",{src:"https://free.timeanddate.com/clock/i9ddm2hg/n179/fn6/fs16/fc0f9/tc000/ftb/pa8/tt0/tw1/th1/ta1/tb4",frameborder:"0",width:"212",height:"55"}),(0,n.jsx)("iframe",{src:"https://free.timeanddate.com/clock/i9ddm2hg/n155/fn6/fs16/fcff0/tc000/ftb/pa8/tt0/tw1/th1/ta1/tb4",frameborder:"0",width:"212",height:"55"})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>i});r(6540);var n=r(4164);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(6540),a=r(4164),s=r(3104),i=r(6347),o=r(205),l=r(7485),c=r(1682),d=r(9466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,u]=f({queryString:r,groupId:a}),[b,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),w=(()=>{const e=c??b;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{w&&l(w)}),[w]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var p=r(2303);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),a=o[r].value;a!==n&&(c(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",w.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function g(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",w.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function y(e){const t=(0,p.A)();return(0,x.jsx)(g,{...e,children:u(e.children)},String(t))}},871:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var n=r(6889),a=r(4848);function s(e){let{url:t}=e;return(0,a.jsx)("div",{style:{padding:10},children:(0,a.jsx)(n.A,{url:t,style:{minWidth:"min(100%,45vw)",width:996,maxWidth:"100%",overflow:"hidden"},bodyStyle:{padding:0},children:(0,a.jsx)("iframe",{src:t,title:t,style:{display:"block",width:"100%",height:300}})})})}},6889:(e,t,r)=>{r.d(t,{A:()=>i});r(6540);var n=r(4164);const a={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var s=r(4848);function i(e){let{children:t,minHeight:r,url:i="http://localhost:3000",style:o,bodyStyle:l}=e;return(0,s.jsxs)("div",{className:a.browserWindow,style:{...o,minHeight:r},children:[(0,s.jsxs)("div",{className:a.browserWindowHeader,children:[(0,s.jsxs)("div",{className:a.buttons,children:[(0,s.jsx)("span",{className:a.dot,style:{background:"#f25f58"}}),(0,s.jsx)("span",{className:a.dot,style:{background:"#fbbe3c"}}),(0,s.jsx)("span",{className:a.dot,style:{background:"#58cb42"}})]}),(0,s.jsx)("div",{className:(0,n.A)(a.browserWindowAddressBar,"text--truncate"),children:i}),(0,s.jsx)("div",{className:a.browserWindowMenuIcon,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:a.bar}),(0,s.jsx)("span",{className:a.bar}),(0,s.jsx)("span",{className:a.bar})]})})]}),(0,s.jsx)("div",{className:a.browserWindowBody,style:l,children:t})]})}},988:(e,t,r)=>{r.d(t,{A:()=>W});r(6540);var n=r(8473),a=r(4164),s=r(1312),i=r(4882),o=r(3550),l=r(4848);const c={icon:(0,l.jsx)(o.A,{}),title:(0,l.jsx)(s.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function d(e){return(0,l.jsx)(i.A,{...c,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}var u=r(3069);const h={icon:(0,l.jsx)(u.A,{}),title:(0,l.jsx)(s.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function m(e){return(0,l.jsx)(i.A,{...h,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}var f=r(2382);const b={icon:(0,l.jsx)(f.A,{}),title:(0,l.jsx)(s.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function p(e){return(0,l.jsx)(i.A,{...b,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}var w=r(804);const x={icon:(0,l.jsx)(w.A,{}),title:(0,l.jsx)(s.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var v=r(633);const j={icon:(0,l.jsx)(v.A,{}),title:(0,l.jsx)(s.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function g(e){return(0,l.jsx)(i.A,{...j,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}var y=r(6784),A=r(7875);const N={icon:(0,l.jsx)(y.g,{icon:A._2G}),title:(0,l.jsx)(s.A,{id:"theme.admonition.discord",description:"The default label used for the Discord admonition (:::discord)",children:"discord"})};var k=r(6188);const T={icon:(0,l.jsx)(y.g,{icon:k.fLc}),title:(0,l.jsx)(s.A,{id:"theme.admonition.security",description:"The default label used for the Security admonition (:::security)",children:"security"})};const I={icon:(0,l.jsx)(y.g,{icon:k.KMJ}),title:(0,l.jsx)(s.A,{id:"theme.admonition.release",description:"The default label used for the Release admonition (:::release)",children:"release"})};const V={icon:(0,l.jsx)(y.g,{icon:k.Wcv}),title:(0,l.jsx)(s.A,{id:"theme.admonition.credit",description:"The default label used for the Credit admonition (:::credit)",children:"credit"})};const S={icon:(0,l.jsx)(y.g,{icon:k.rC2}),title:(0,l.jsx)(s.A,{id:"theme.admonition.docusaurus",description:"The default label used for the Docusaurus admonition (:::docusaurus)",children:"Did you know..."})};const _={...{note:d,tip:m,info:p,caution:function(e){return(0,l.jsx)(i.A,{...x,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:g,security:function(e){return(0,l.jsx)(i.A,{...T,...e,className:(0,a.A)("alert alert--security",e.className),children:e.children})},release:function(e){return(0,l.jsx)(i.A,{...I,...e,className:(0,a.A)("alert alert--release",e.className),children:e.children})},credit:function(e){return(0,l.jsx)(i.A,{...V,...e,className:(0,a.A)("alert alert--credit",e.className),children:e.children})},docusaurus:function(e){return(0,l.jsx)(i.A,{...S,...e,className:(0,a.A)("alert alert--docusaurus",e.className),children:e.children})},discord:function(e){return(0,l.jsx)(i.A,{...N,...e,className:(0,a.A)("alert alert--discord",e.className),children:e.children})}},...{secondary:e=>(0,l.jsx)(d,{title:"secondary",...e}),important:e=>(0,l.jsx)(p,{title:"important",...e}),success:e=>(0,l.jsx)(m,{title:"success",...e}),warning:e=>(0,l.jsx)(g,{title:"warning",...e})}};function W(e){const t=(0,n.c)(e),r=(a=t.type,_[a]||(console.warn(`No admonition component found for admonition type "${a}". Using Info as fallback.`),_.info));var a;return(0,l.jsx)(r,{...t})}}}]);