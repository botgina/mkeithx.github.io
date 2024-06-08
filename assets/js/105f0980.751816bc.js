"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8140],{2193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(4848),r=n(8453),l=n(1470),s=n(9365);const i={title:"Flask tutorial - Demo",description:"Building a web application with Python."},o=void 0,u={id:"repo/flask-tutorials",title:"Flask tutorial - Demo",description:"Building a web application with Python.",source:"@site/docs/repo/flask-tutorials.mdx",sourceDirName:"repo",slug:"/repo/flask-tutorials",permalink:"/docs/repo/flask-tutorials",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1717811228e3,frontMatter:{title:"Flask tutorial - Demo",description:"Building a web application with Python."},sidebar:"mySidebar",previous:{title:"Python Starters",permalink:"/docs/repo/python-starters"},next:{title:"Cheat Sheets",permalink:"/docs/cheat-sheets"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Cloning the Repository",id:"cloning-the-repository",level:3},{value:"Setting Up the Virtual Environment",id:"setting-up-the-virtual-environment",level:3},{value:"Running the Application",id:"running-the-application",level:3},{value:"License",id:"license",level:2},{value:"Support",id:"support",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Building a web application with Python."}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.p,{children:"To get started, follow these steps to run the app on your local machine."}),"\n",(0,a.jsx)(t.h3,{id:"cloning-the-repository",children:"Cloning the Repository"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/mkeithX/flask-tutorial-demo.git\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd flask-tutorial-demo\n"})}),"\n",(0,a.jsx)(t.h3,{id:"setting-up-the-virtual-environment",children:"Setting Up the Virtual Environment"}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsxs)(s.A,{value:"nt",label:"Windows",default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"py -m venv .venv\n"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:".venv\\Scripts\\activate\n"})})]}),(0,a.jsxs)(s.A,{value:"ln",label:"Unix",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"python3 -m venv .venv\n"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"source .venv/bin/activate\n"})})]})]}),"\n",(0,a.jsx)(t.h3,{id:"running-the-application",children:"Running the Application"}),"\n",(0,a.jsxs)(t.p,{children:["Start by making a copy of ",(0,a.jsx)(t.code,{children:".env.example"})," in your app directory."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cp .env.example .env\n"})}),"\n",(0,a.jsx)(t.p,{children:"Then, initialize the database and run the application."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"flask init-db\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"flask run\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Congratulations!"})}),"\n",(0,a.jsx)(t.h2,{id:"license",children:"License"}),"\n",(0,a.jsxs)(t.p,{children:["This project is licensed under ",(0,a.jsx)(t.a,{href:"https://github.com/mkeithX/flask-tutorial-demo?tab=MIT-1-ov-file#readme",children:"MIT"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"support",children:"Support"}),"\n",(0,a.jsxs)(t.p,{children:["\ud83c\udf89 Give this project a star \u2b50 on ",(0,a.jsx)(t.a,{href:"https://github.com/mkeithX/flask-tutorial-demo",children:"GitHub"}),". \ud83d\ude4f"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var l=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(6540),r=n(4164),l=n(3104),s=n(6347),i=n(205),o=n(7485),u=n(1682),c=n(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,d]=m({queryString:n,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=u??b;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=i[n].value;r!==a&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function k(e){const t=(0,f.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(6540);const r={},l=a.createContext(r);function s(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);