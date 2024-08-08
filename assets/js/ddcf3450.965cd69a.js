"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7562],{9596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var s=n(4848),a=n(8453),r=n(9489),o=n(7227);const l={description:"Fix common issues in MS Teams"},i="Fix common issues in MS Teams",u={id:"devops/troubleshoot/ms-teams",title:"Fix common issues in MS Teams",description:"Fix common issues in MS Teams",source:"@site/docs/devops/troubleshoot/ms-teams.mdx",sourceDirName:"devops/troubleshoot",slug:"/devops/troubleshoot/ms-teams",permalink:"/docs/devops/troubleshoot/ms-teams",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:1723114074e3,frontMatter:{description:"Fix common issues in MS Teams"},sidebar:"devops",previous:{title:"Fix Network Issues",permalink:"/docs/devops/troubleshoot/windows-network-issues"},next:{title:"Glossary",permalink:"/docs/devops/glossary"}},c={},d=[{value:"Clear cache",id:"clear-cache",level:3}];function m(e){const t={code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"fix-common-issues-in-ms-teams",children:"Fix common issues in MS Teams"}),"\n",(0,s.jsx)(t.h3,{id:"clear-cache",children:"Clear cache"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Close Teams. If Teams is still running, right-click the Teams icon on the taskbar, and then select Quit."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Open the Run dialog box by pressing the Windows logo key  +R."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"close-ms-teams",src:n(8222).A+"",width:"448",height:"265"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{value:"classic",label:"Classic Teams",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"%appdata%\\Microsoft\\Teams\n"})})}),(0,s.jsx)(o.A,{value:"new",label:"New Teams",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"%userprofile%\\appdata\\local\\Packages\\MSTeams_8wekyb3d8bbwe\\LocalCache\\Microsoft\\MSTeams\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var s=n(4164);const a={tabItem:"tabItem_Ymn6"};var r=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,o),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>j});var s=n(6540),a=n(4164),r=n(4245),o=n(6347),l=n(6494),i=n(2814),u=n(5167),c=n(9900);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[u,d]=p({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Dv)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),v=(()=>{const e=u??b;return h({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=n(1062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==s&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...r,className:(0,a.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(w,{...t,...e})]})}function j(e){const t=(0,f.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},8222:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/close-ms-teams-24bf8a96649acf3d7f590179bcd0e27b.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(6540);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);