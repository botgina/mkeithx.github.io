"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81],{7582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var l=n(4848),r=n(8453),o=n(9489),s=n(7227);const a={description:"Explore PowerShell editions and installation methods for different platforms using $PSVersionTable."},i="PowerShell",u={id:"devops/troubleshoot/powershell",title:"PowerShell",description:"Explore PowerShell editions and installation methods for different platforms using $PSVersionTable.",source:"@site/docs/devops/troubleshoot/powershell.mdx",sourceDirName:"devops/troubleshoot",slug:"/devops/troubleshoot/powershell",permalink:"/docs/devops/troubleshoot/powershell",draft:!1,unlisted:!1,editUrl:"https://github.com/mkeithX/mkeithx.github.io/edit/main/website/docs/devops/troubleshoot/powershell.mdx",tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:172226848e4,frontMatter:{description:"Explore PowerShell editions and installation methods for different platforms using $PSVersionTable."},sidebar:"devops",previous:{title:"Guides & Workarounds",permalink:"/docs/devops/guides-and-workarounds"},next:{title:"Utilities",permalink:"/docs/devops/troubleshoot/windows-utilities"}},c={},d=[{value:"Edition",id:"edition",level:2},{value:"Installation Methods",id:"installation-methods",level:2},{value:"Profile Management",id:"profile-management",level:2},{value:"Custom Script Example",id:"custom-script-example",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"powershell",children:"PowerShell"}),"\n",(0,l.jsx)(t.p,{children:"Learn about different editions of PowerShell and explore installation methods for various platforms."}),"\n",(0,l.jsx)(t.h2,{id:"edition",children:"Edition"}),"\n",(0,l.jsx)(t.p,{children:"To determine the current version and edition of PowerShell, run either of the following:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sh",metastring:"showLineNumbers",children:"$PSVersionTable\n$PSVersionTable.PSVersion\n$PSVersiontable.Values\n"})}),"\n",(0,l.jsxs)(o.A,{children:[(0,l.jsx)(s.A,{value:"desktop",label:"Desktop",default:!0,children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sh",metastring:"{2}",children:"PSVersion                      5.1.22621.3810\nPSEdition                      Desktop\nPSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}\nBuildVersion                   10.0.22621.3810\nCLRVersion                     4.0.30319.42000\nWSManStackVersion              3.0\nPSRemotingProtocolVersion      2.3\nSerializationVersion           1.1.0.1\n"})})}),(0,l.jsx)(s.A,{value:"core",label:"Core",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sh",metastring:"{2}",children:"PSVersion                      7.4.3\nPSEdition                      Core\nGitCommitId                    7.4.3\nOS                             Microsoft Windows 10.0.22631\nPlatform                       Win32NT\nPSCompatibleVersions           {1.0, 2.0, 3.0, 4.0\u2026}\nPSRemotingProtocolVersion      2.3\nSerializationVersion           1.1.0.1\nWSManStackVersion              3.0\n"})})})]}),"\n",(0,l.jsx)(t.h2,{id:"installation-methods",children:"Installation Methods"}),"\n",(0,l.jsxs)(o.A,{children:[(0,l.jsx)(s.A,{value:"winget",label:"Winget (Recommended)",default:!0,children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"winget search Microsoft.PowerShell\nwinget install --id Microsoft.Powershell --source winget\n"})})}),(0,l.jsx)(s.A,{value:"msi",label:"MSI Installer",children:(0,l.jsxs)(t.p,{children:["For MSI installation, visit the ",(0,l.jsx)(t.a,{href:"https://github.com/PowerShell/PowerShell/releases",children:"GitHub Page"})," for downloads."]})}),(0,l.jsxs)(s.A,{value:"dotnet",label:".NET Global Tool",children:[(0,l.jsxs)(t.p,{children:["Install PowerShell as a ",(0,l.jsx)(t.a,{href:"https://dotnet.microsoft.com/download",children:".NET Global tool"})," if you have the .NET Core SDK:"]}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"dotnet tool install --global PowerShell\n"})})]}),(0,l.jsxs)(s.A,{value:"other",label:"Other Platforms",children:[(0,l.jsx)(t.p,{children:"For Linux and macOS, refer to the installation guides:"}),(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-linux?view=powershell-7.4",children:"Linux Installation Guide"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-macos?view=powershell-7.4",children:"macOS Installation Guide"})}),"\n"]})]})]}),"\n",(0,l.jsx)(t.admonition,{title:"Important",type:"caution",children:(0,l.jsx)(t.p,{children:"When upgrading PowerShell, use the same installation method as initially used."})}),"\n",(0,l.jsx)(t.h2,{id:"profile-management",children:"Profile Management"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"$PROFILE | Select-Object *\nnotepad $PROFILE\nTest-Path -Path $PROFILE.AllUsersAllHosts\n"})}),"\n",(0,l.jsx)(t.h2,{id:"custom-script-example",children:"Custom Script Example"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-powershell",children:'# Example: Customize PowerShell prompt\nfunction Prompt { "mkeithx" + ":\\" + "> " }\n'})}),"\n",(0,l.jsx)("pre",{children:(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"mkeithx:\\>_"})})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var l=n(4164);const r={tabItem:"tabItem_Ymn6"};var o=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,s),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>S});var l=n(6540),r=n(4164),o=n(4245),s=n(6347),a=n(6494),i=n(2814),u=n(5167),c=n(9900);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,l.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:o}))),[u,d]=m({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(n);return[r,(0,l.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),x=(()=>{const e=u??f;return p({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(1062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=a[n].value;r!==l&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(w,{...t,...e})]})}function S(e){const t=(0,b.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var l=n(6540);const r={},o=l.createContext(r);function s(e){const t=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(o.Provider,{value:t},e.children)}}}]);