"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6629],{2782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=t(4848),a=t(8453),s=t(1470),l=t(9365);const o={sidebar_position:3,title:"Virtiual Environment"},i=void 0,u={id:"guides/pyprojects/python-virtual-env",title:"Virtiual Environment",description:"This module outlines how we create virtual environments in Python. Keep in mind that it's a good practice to use a virtual environment to isolate dependencies and keep your project environment clean",source:"@site/docs/guides/pyprojects/python-virtual-env.mdx",sourceDirName:"guides/pyprojects",slug:"/guides/pyprojects/python-virtual-env",permalink:"/docs/guides/pyprojects/python-virtual-env",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"mkeithX",lastUpdatedAt:1710621666e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Virtiual Environment"},sidebar:"mySidebar",previous:{title:"Hello, world",permalink:"/docs/hello-world"},next:{title:"ConTweaks",permalink:"/docs/contweaks"}},c={},d=[];function p(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"What's this?",type:"tip",children:(0,r.jsx)(n.p,{children:"This module outlines how we create virtual environments in Python. Keep in mind that it's a good practice to use a virtual environment to isolate dependencies and keep your project environment clean"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Open your terminal or command prompt."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to your project's root directory using the ",(0,r.jsx)(n.code,{children:"cd"})," command:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.A,{groupId:"operating-systems",children:[(0,r.jsx)(l.A,{value:"win",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd path/to/your/project\n"})})}),(0,r.jsx)(l.A,{value:"unix",label:"Unix",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:" cd path/to/your/project\n"})})})]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Run the following command to create a virtual environment named ",(0,r.jsx)(n.code,{children:".venv"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(s.A,{groupId:"operating-systems",children:[(0,r.jsx)(l.A,{value:"win",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"py -m venv .venv\n"})})}),(0,r.jsx)(l.A,{value:"unix",label:"Unix",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3 -m venv .venv\n"})})})]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Activate the virtual environment."}),"\n"]}),"\n",(0,r.jsxs)(s.A,{groupId:"operating-systems",children:[(0,r.jsx)(l.A,{value:"win",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:".venv\\Scripts\\activate\n"})})}),(0,r.jsx)(l.A,{value:"unix",label:"Unix",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source .venv/bin/activate\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),a=t(4164),s=t(3104),l=t(6347),o=t(205),i=t(7485),u=t(1682),c=t(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=m({queryString:t,groupId:a}),[v,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),f=(()=>{const e=u??v;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=v(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,x.jsx)(g,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function w(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(6540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);