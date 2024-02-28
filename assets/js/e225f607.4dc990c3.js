"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1598],{7293:(n,e,i)=>{i.d(e,{A:()=>M});var t=i(6540),o=i(4848);function s(n){const{mdxAdmonitionTitle:e,rest:i}=function(n){const e=t.Children.toArray(n),i=e.find((n=>t.isValidElement(n)&&"mdxAdmonitionTitle"===n.type)),s=e.filter((n=>n!==i)),c=i?.props.children;return{mdxAdmonitionTitle:c,rest:s.length>0?(0,o.jsx)(o.Fragment,{children:s}):null}}(n.children),s=n.title??e;return{...n,...s&&{title:s},children:i}}var c=i(4164),l=i(1312),a=i(7559);const r={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(n){let{type:e,className:i,children:t}=n;return(0,o.jsx)("div",{className:(0,c.A)(a.G.common.admonition,a.G.common.admonitionType(e),r.admonition,i),children:t})}function h(n){let{icon:e,title:i}=n;return(0,o.jsxs)("div",{className:r.admonitionHeading,children:[(0,o.jsx)("span",{className:r.admonitionIcon,children:e}),i]})}function m(n){let{children:e}=n;return e?(0,o.jsx)("div",{className:r.admonitionContent,children:e}):null}function u(n){const{type:e,icon:i,title:t,children:s,className:c}=n;return(0,o.jsxs)(d,{type:e,className:c,children:[(0,o.jsx)(h,{title:t,icon:i}),(0,o.jsx)(m,{children:s})]})}function f(n){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,o.jsx)(f,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function j(n){return(0,o.jsx)(u,{...x,...n,className:(0,c.A)("alert alert--secondary",n.className),children:n.children})}function p(n){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const v={icon:(0,o.jsx)(p,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function g(n){return(0,o.jsx)(u,{...v,...n,className:(0,c.A)("alert alert--success",n.className),children:n.children})}function A(n){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,o.jsx)(A,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function w(n){return(0,o.jsx)(u,{...N,...n,className:(0,c.A)("alert alert--info",n.className),children:n.children})}function y(n){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...n,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const z={icon:(0,o.jsx)(y,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(n){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const b={icon:(0,o.jsx)(C,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const H={icon:(0,o.jsx)(y,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const T={...{note:j,tip:g,info:w,warning:function(n){return(0,o.jsx)(u,{...z,...n,className:(0,c.A)("alert alert--warning",n.className),children:n.children})},danger:function(n){return(0,o.jsx)(u,{...b,...n,className:(0,c.A)("alert alert--danger",n.className),children:n.children})}},...{secondary:n=>(0,o.jsx)(j,{title:"secondary",...n}),important:n=>(0,o.jsx)(w,{title:"important",...n}),success:n=>(0,o.jsx)(g,{title:"success",...n}),caution:function(n){return(0,o.jsx)(u,{...H,...n,className:(0,c.A)("alert alert--warning",n.className),children:n.children})}}};function M(n){const e=s(n),i=(t=e.type,T[t]||(console.warn(`No admonition component found for admonition type "${t}". Using Info as fallback.`),T.info));var t;return(0,o.jsx)(i,{...e})}},7458:(n,e,i)=>{i.r(e),i.d(e,{default:()=>l});i(6540);var t=i(7293),o=i(781),s=(i(1107),i(8774)),c=i(4848);function l(){return(0,c.jsx)(o.A,{title:"Hello",description:"Hello React Page",children:(0,c.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"},children:(0,c.jsx)(t.A,{type:"info",icon:"\ud83d\udca1",title:"Ooops..",children:(0,c.jsxs)("span",{children:["Keep an eye out for updates, something special is on the way. Learn ",(0,c.jsx)(s.A,{to:"https://kitiplex.github.io/",children:"more"})]})})})})}}}]);