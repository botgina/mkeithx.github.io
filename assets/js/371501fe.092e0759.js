"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1953],{8578:(e,n,s)=>{s.r(n),s.d(n,{Highlight:()=>h,assets:()=>m,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var o=s(4848),r=s(8453),t=s(9489),i=s(7227),a=s(7319),l=(s(9195),s(4724),s(9215));const c={title:"MDX and React",description:"Guide for custom styling using MDX and React."},d=void 0,u={id:"cheat-sheets/mdx-react",title:"MDX and React",description:"Guide for custom styling using MDX and React.",source:"@site/docs/cheat-sheets/mdx-react.mdx",sourceDirName:"cheat-sheets",slug:"/cheat-sheets/mdx-react",permalink:"/docs/cheat-sheets/mdx-react",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:171887459e4,frontMatter:{title:"MDX and React",description:"Guide for custom styling using MDX and React."},sidebar:"mySidebar",previous:{title:"Batch",permalink:"/docs/cheat-sheets/batch"},next:{title:"Build",permalink:"/docs/build"}},m={},h=({children:e,color:n})=>{const s={span:"span",...(0,r.R)()};return(0,o.jsx)(s.span,{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${n} with label ${e}`)},children:e})},p=[{value:"Custom Highlight",id:"custom-highlight",level:2},{value:"Icons",id:"icons",level:2},{value:"Font Awesome",id:"font-awesome",level:3},{value:"Custom Admonitions",id:"custom-admonitions",level:2},{value:"JSX",id:"jsx",level:3},{value:"Swizzle",id:"swizzle",level:3},{value:"HTML Embeds",id:"html-embeds",level:3}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{FAIcon:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("FAIcon",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX"})," allows React components inside Markdown making it more interactive:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:"showLineNumbers",children:"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n"})}),"\n","\n",(0,o.jsxs)(n.p,{children:["This is ",(0,o.jsx)(h,{color:"#25c2a0",children:"Docusaurus green"})," !"]}),"\n",(0,o.jsxs)(n.p,{children:["This is ",(0,o.jsx)(h,{color:"#1877F2",children:"Facebook blue"})," !"]}),"\n",(0,o.jsx)(n.h2,{id:"custom-highlight",children:"Custom Highlight"}),"\n",(0,o.jsx)(n.p,{children:"To render the custom highlights:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:'title="src/components/Highlight/index.tsx" showLineNumbers',children:'import React, { type ReactNode } from "react";\n\nexport default function Highlight({\n  children,\n  color,\n}: {\n  children: ReactNode;\n  color: string;\n}): JSX.Element {\n  return (\n    <span\n      style={{\n        backgroundColor: color,\n        borderRadius: "15px",\n        color: "#fff",\n        padding: \'0.5rem\',\n      }}\n    >\n      {children}\n    </span>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:'And some <Highlight color="#1877F2">custom markup</Highlight>\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:'- #1da1f2 <Highlight color="#1da1f2">Primary color</Highlight>\n'})}),"\n",(0,o.jsx)(n.p,{children:"And so on.."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["And some ",(0,o.jsx)(h,{color:"#1877F2",children:"custom markup"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["#1da1f2 ",(0,o.jsx)(h,{color:"#1da1f2",children:"Primary color"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["#878787 ",(0,o.jsx)(h,{color:"#878787",children:"Secondary color"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["#41B883 ",(0,o.jsx)(h,{color:"#41B883",children:"Fresh Green"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"icons",children:"Icons"}),"\n",(0,o.jsx)(n.h3,{id:"font-awesome",children:"Font Awesome"}),"\n",(0,o.jsxs)(n.p,{children:["Font Awesome Icons. The file ",(0,o.jsx)(n.code,{children:"MDXComponents.tsx"})," or ",(0,o.jsx)(n.code,{children:"MDXComponents.js"})," should be present in the ",(0,o.jsx)(n.code,{children:"src/theme"})," folder."]}),"\n",(0,o.jsxs)(t.A,{groupId:"npm2yarn",children:[(0,o.jsx)(i.A,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install --save @fontawesome/fontawesome-svg-core @fontawesome/free-solid-svg-icons @fortawesome/react-fontawesome\n"})})}),(0,o.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add @fontawesome/fontawesome-svg-core @fontawesome/free-solid-svg-icons @fortawesome/react-fontawesome\n"})})}),(0,o.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm add @fontawesome/fontawesome-svg-core @fontawesome/free-solid-svg-icons @fortawesome/react-fontawesome\n"})})})]}),"\n",(0,o.jsxs)(t.A,{groupId:"npm2yarn",children:[(0,o.jsx)(i.A,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"\nnpm install --save @fontawesome/free-regular-svg-icons @fontawesome/free-brands-svg-icons\n"})})}),(0,o.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"\nyarn add @fontawesome/free-regular-svg-icons @fontawesome/free-brands-svg-icons\n"})})}),(0,o.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"\npnpm add @fontawesome/free-regular-svg-icons @fontawesome/free-brands-svg-icons\n"})})})]}),"\n",(0,o.jsxs)(t.A,{children:[(0,o.jsx)(i.A,{value:"js",label:"JavaScript",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="src/theme/MDXComponents.js" showLineNumbers',children:'import React from "react";\n// Import the original mapper\nimport MDXComponents from "@theme-original/MDXComponents";\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { library } from "@fortawesome/fontawesome-svg-core";\nimport { fab } from "@fortawesome/free-brands-svg-icons";\nimport { fas } from "@fortawesome/free-solid-svg-icons";\n\nlibrary.add(fab, fas);\n\nexport default {\n  ...MDXComponents,\n  FAIcon: FontAwesomeIcon, // Make the FontAwesomeIcon component available in MDX as <icon />.\n};\n'})})}),(0,o.jsx)(i.A,{value:"tsx",label:"TypeScript",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:'title="src/theme/MDXComponents.tsx" showLineNumbers',children:'import React from "react";\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { library } from "@fortawesome/fontawesome-svg-core";\nimport { fab } from "@fortawesome/free-brands-svg-icons";\nimport { fas } from "@fortawesome/free-solid-svg-icons";\nimport MDXComponents from "@theme-original/MDXComponents";\nimport Code from \'@theme/MDXComponents/Code\';\n\nlibrary.add(fab, fas);\n\ninterface Components {\n[key: string]: React.ComponentType<any>;\n}\n\nconst components: Components = {\n...MDXComponents,\nFAIcon: FontAwesomeIcon,\nCode,\n};\n\nexport default components;\n'})})})]}),"\n",(0,o.jsxs)(t.A,{children:[(0,o.jsx)(i.A,{value:"js",label:"JavaScript",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="src/theme/MDXComponents.js" showLineNumbers',children:'import React from "react";\n// Import the original mapper\nimport MDXComponents from "@theme-original/MDXComponents";\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { library } from "@fortawesome/fontawesome-svg-core";\nimport { fab } from "@fortawesome/free-brands-svg-icons";\nimport { fas } from "@fortawesome/free-solid-svg-icons";\n\nlibrary.add(fab, fas);\n\nexport default {\n  ...MDXComponents,\n  FAIcon: FontAwesomeIcon, // Make the FontAwesomeIcon component available in MDX as <icon />.\n};\n'})})}),(0,o.jsx)(i.A,{value:"tsx",label:"TypeScript",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:'title="src/theme/MDXComponents.tsx" showLineNumbers',children:'import React from "react";\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { library } from "@fortawesome/fontawesome-svg-core";\nimport { fab } from "@fortawesome/free-brands-svg-icons";\nimport { fas } from "@fortawesome/free-solid-svg-icons";\nimport MDXComponents from "@theme-original/MDXComponents";\nimport Code from \'@theme/MDXComponents/Code\';\n\nlibrary.add(fab, fas);\n\ninterface Components {\n[key: string]: React.ComponentType<any>;\n}\n\nconst components: Components = {\n...MDXComponents,\nFAIcon: FontAwesomeIcon,\nCode,\n};\n\nexport default components;\n'})})})]}),"\n",(0,o.jsxs)(l.A,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Rendering Font Awesome Icons" showLineNumbers',children:'<FAIcon icon="fa-brands fa-github" size="3x" />\n\n# highlight-start\n<FAIcon icon="fa-brands fa-x-twitter" size="3x" />\n# highlight-end\n\n<FAIcon icon="fa-brands fa-youtube" size="3x" />\n\n<FAIcon icon="fa-brands fa-linkedin" size="3x" />\n\n<FAIcon icon="fa-brands fa-python" size="3x" />\n\n<FAIcon icon="fa-brands fa-js" size="3x" />\n\n<FAIcon icon="fa-brands fa-react" size="3x" />\n'})}),(0,o.jsx)(s,{icon:"fa-brands fa-github",size:"3x"}),(0,o.jsx)(s,{icon:"fa-brands fa-x-twitter",size:"3x"}),(0,o.jsx)(s,{icon:"fa-brands fa-youtube",size:"3x"}),(0,o.jsx)(s,{icon:"fa-brands fa-linkedin",size:"3x"}),(0,o.jsx)(s,{icon:"fa-brands fa-python",size:"3x"}),(0,o.jsx)(s,{icon:"fa-brands fa-js",size:"3x"}),(0,o.jsx)(s,{icon:"fa-brands fa-react",size:"3x"})]}),"\n",(0,o.jsx)(n.h2,{id:"custom-admonitions",children:"Custom Admonitions"}),"\n",(0,o.jsxs)(n.p,{children:["To render these custom admonition in your ",(0,o.jsx)(n.code,{children:".mdx"}),", put ",(0,o.jsx)(n.code,{children:'import Admonition from "@theme/Admonition";'})]}),"\n",(0,o.jsxs)(l.A,{children:[(0,o.jsx)(n.h3,{id:"jsx",children:"JSX"}),(0,o.jsx)(a.A,{type:"tip",icon:"\ud83d\udca1",title:"Did you know...",children:(0,o.jsx)(n.p,{children:"Use plugins to introduce shorter syntax for the most commonly used JSX\nelements in your project."})}),(0,o.jsx)(a.A,{type:"danger",icon:"\ud83d\udc80",title:"Danger...",children:(0,o.jsx)(n.p,{children:"Use plugins to introduce shorter syntax for the most commonly used JSX\nelements in your project."})}),(0,o.jsx)(a.A,{type:"note",icon:"\u2139\ufe0f",title:"Take note...",children:(0,o.jsx)(n.p,{children:"Use plugins to introduce shorter syntax for the most commonly used JSX\nelements in your project."})}),(0,o.jsx)(a.A,{type:"warning",icon:"\u2622\ufe0f",title:"Warning...",children:(0,o.jsx)(n.p,{children:"Use plugins to introduce shorter syntax for the most commonly used JSX\nelements in your project."})}),(0,o.jsx)(n.h3,{id:"swizzle",children:"Swizzle"}),(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Custom tip"})}),(0,o.jsx)(n.admonition,{type:"security",children:(0,o.jsx)(n.p,{children:"This is a security warning"})}),(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"This is a security warning"})}),(0,o.jsx)(n.admonition,{type:"credit",children:(0,o.jsx)(n.p,{children:"The quick credit."})}),(0,o.jsx)(n.admonition,{type:"discord",children:(0,o.jsx)(n.p,{children:"Discord"})}),(0,o.jsx)(n.admonition,{type:"docusaurus",children:(0,o.jsx)(n.p,{children:"Discord"})}),(0,o.jsx)(n.admonition,{type:"release",children:(0,o.jsx)(n.p,{children:"Release Test"})})]}),"\n",(0,o.jsx)(n.h3,{id:"html-embeds",children:"HTML Embeds"}),"\n",(0,o.jsxs)(l.A,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<pre>\n  <b>Input: </b>1 2 3 4{'\\n'}\n  <b>Output: </b>\"366300745\"{'\\n'}\n</pre>\n"})}),(0,o.jsx)("pre",{children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)("b",{children:"Input: "}),"1 2 3 4","\n","\n",(0,o.jsx)("b",{children:"Output: "}),'"366300745"',"\n"]})})]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},7227:(e,n,s)=>{s.d(n,{A:()=>i});s(6540);var o=s(4164);const r={tabItem:"tabItem_Ymn6"};var t=s(4848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,i),hidden:s,children:n})}},9489:(e,n,s)=>{s.d(n,{A:()=>v});var o=s(6540),r=s(4164),t=s(4245),i=s(6347),a=s(6494),l=s(2814),c=s(5167),d=s(9900);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:s}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:o,default:r}}=e;return{value:n,label:s,attributes:o,default:r}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const r=(0,i.W6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(t),(0,o.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function f(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,t=m(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=s.find((e=>e.default))??s[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:t}))),[c,u]=p({queryString:s,groupId:r}),[f,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,d.Dv)(s);return[r,(0,o.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:r}),b=(()=>{const e=c??f;return h({value:e,tabValues:t})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,t]),tabValues:t}}var x=s(1062);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(4848);function j(e){let{className:n,block:s,selectedValue:o,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),r=a[s].value;r!==o&&(c(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...t,className:(0,r.A)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":o===n}),children:s??n},n)}))})}function w(e){let{lazy:n,children:s,selectedValue:t}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(w,{...n,...e})]})}function v(e){const n=(0,x.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},4724:(e,n,s)=>{s.d(n,{A:()=>t});s(6540);var o=s(9215),r=s(4848);function t(e){let{url:n}=e;return(0,r.jsx)("div",{style:{padding:10},children:(0,r.jsx)(o.A,{url:n,style:{minWidth:"min(100%,45vw)",width:996,maxWidth:"100%",overflow:"hidden"},bodyStyle:{padding:0},children:(0,r.jsx)("iframe",{src:n,title:n,style:{display:"block",width:"100%",height:300}})})})}},9215:(e,n,s)=>{s.d(n,{A:()=>i});s(6540);var o=s(4164);const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var t=s(4848);function i(e){let{children:n,minHeight:s,url:i="https://mkeithx.pages.dev",style:a,bodyStyle:l}=e;return(0,t.jsxs)("div",{className:r.browserWindow,style:{...a,minHeight:s},children:[(0,t.jsxs)("div",{className:r.browserWindowHeader,children:[(0,t.jsxs)("div",{className:r.buttons,children:[(0,t.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,t.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,t.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,t.jsx)("div",{className:(0,o.A)(r.browserWindowAddressBar,"text--truncate"),children:i}),(0,t.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:r.bar}),(0,t.jsx)("span",{className:r.bar}),(0,t.jsx)("span",{className:r.bar})]})})]}),(0,t.jsx)("div",{className:r.browserWindowBody,style:l,children:n})]})}},9195:(e,n,s)=>{s.d(n,{A:()=>r});var o=s(4848);const r=e=>{let{src:n,type:s,maxWidth:r,alt:t}=e;return"youtube"===s?(0,o.jsx)("iframe",{width:"100%",style:{aspectRatio:"16 / 9",maxWidth:r||"100%"},src:n.youtube,title:t,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}):"local"===s?(0,o.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,width:"100%",style:{borderRadius:"8px",maxWidth:r||"100%"},children:[(0,o.jsx)("source",{src:n.webm,title:t,type:"video/webm"}),(0,o.jsx)("source",{src:n.mp4,title:t,type:"video/mp4"}),(0,o.jsx)("source",{src:n.ogg,title:t,type:"video/ogg"})]}):null}},7319:(e,n,s)=>{s.d(n,{A:()=>X});s(6540);var o=s(1348),r=s(4164),t=s(3230),i=s(9204),a=s(9059),l=s(4848);const c={icon:(0,l.jsx)(a.A,{}),title:(0,l.jsx)(t.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function d(e){return(0,l.jsx)(i.A,{...c,...e,className:(0,r.A)("alert alert--secondary",e.className),children:e.children})}var u=s(7950);const m={icon:(0,l.jsx)(u.A,{}),title:(0,l.jsx)(t.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function h(e){return(0,l.jsx)(i.A,{...m,...e,className:(0,r.A)("alert alert--success",e.className),children:e.children})}var p=s(6699);const f={icon:(0,l.jsx)(p.A,{}),title:(0,l.jsx)(t.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function x(e){return(0,l.jsx)(i.A,{...f,...e,className:(0,r.A)("alert alert--info",e.className),children:e.children})}var b=s(667);const g={icon:(0,l.jsx)(b.A,{}),title:(0,l.jsx)(t.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var j=s(6616);const w={icon:(0,l.jsx)(j.A,{}),title:(0,l.jsx)(t.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function y(e){return(0,l.jsx)(i.A,{...w,...e,className:(0,r.A)("alert alert--danger",e.className),children:e.children})}var v=s(6784),A=s(7875);const N={icon:(0,l.jsx)(v.g,{icon:A._2G}),title:(0,l.jsx)(t.A,{id:"theme.admonition.discord",description:"The default label used for the Discord admonition (:::discord)",children:"discord"})};var I=s(6188);const C={icon:(0,l.jsx)(v.g,{icon:I.fLc}),title:(0,l.jsx)(t.A,{id:"theme.admonition.security",description:"The default label used for the Security admonition (:::security)",children:"security"})};const k={icon:(0,l.jsx)(v.g,{icon:I.Lb_}),title:(0,l.jsx)(t.A,{id:"theme.admonition.release",description:"The default label used for the Release admonition (:::release)",children:"release"})};const D={icon:(0,l.jsx)(v.g,{icon:I.Wcv}),title:(0,l.jsx)(t.A,{id:"theme.admonition.credit",description:"The default label used for the Credit admonition (:::credit)",children:"credit"})};const T={icon:(0,l.jsx)(v.g,{icon:I.rC2}),title:(0,l.jsx)(t.A,{id:"theme.admonition.docusaurus",description:"The default label used for the Docusaurus admonition (:::docusaurus)",children:"Did you know..."})};const M={...{note:d,tip:h,info:x,caution:function(e){return(0,l.jsx)(i.A,{...g,...e,className:(0,r.A)("alert alert--warning",e.className),children:e.children})},danger:y,security:function(e){return(0,l.jsx)(i.A,{...C,...e,className:(0,r.A)("alert alert--security",e.className),children:e.children})},release:function(e){return(0,l.jsx)(i.A,{...k,...e,className:(0,r.A)("alert alert--release",e.className),children:e.children})},credit:function(e){return(0,l.jsx)(i.A,{...D,...e,className:(0,r.A)("alert alert--credit",e.className),children:e.children})},docusaurus:function(e){return(0,l.jsx)(i.A,{...T,...e,className:(0,r.A)("alert alert--docusaurus",e.className),children:e.children})},discord:function(e){return(0,l.jsx)(i.A,{...N,...e,className:(0,r.A)("alert alert--discord",e.className),children:e.children})}},...{secondary:e=>(0,l.jsx)(d,{title:"secondary",...e}),important:e=>(0,l.jsx)(x,{title:"important",...e}),success:e=>(0,l.jsx)(h,{title:"success",...e}),warning:e=>(0,l.jsx)(y,{title:"warning",...e})}};function X(e){const n=(0,o.c)(e),s=(r=n.type,M[r]||(console.warn(`No admonition component found for admonition type "${r}". Using Info as fallback.`),M.info));var r;return(0,l.jsx)(s,{...n})}}}]);