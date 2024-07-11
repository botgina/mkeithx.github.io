"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81],{7582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var l=t(4848),r=t(8453),o=t(9489),s=t(7227);const a={description:"Explore PowerShell editions and installation methods for different platforms using $PSVersionTable."},i="PowerShell",u={id:"devops/troubleshoot/powershell",title:"PowerShell",description:"Explore PowerShell editions and installation methods for different platforms using $PSVersionTable.",source:"@site/docs/devops/troubleshoot/powershell.mdx",sourceDirName:"devops/troubleshoot",slug:"/devops/troubleshoot/powershell",permalink:"/docs/devops/troubleshoot/powershell",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:1720689008e3,frontMatter:{description:"Explore PowerShell editions and installation methods for different platforms using $PSVersionTable."},sidebar:"devops",previous:{title:"Guides & Workarounds",permalink:"/docs/devops/guides-and-workarounds"},next:{title:"Utilities",permalink:"/docs/devops/troubleshoot/windows-utilities"}},c={},d=[{value:"Edition",id:"edition",level:2},{value:"Installation Methods",id:"installation-methods",level:2},{value:"Profile Management",id:"profile-management",level:2},{value:"Custom Script Example",id:"custom-script-example",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"powershell",children:"PowerShell"}),"\n",(0,l.jsx)(n.p,{children:"Learn about different editions of PowerShell and explore installation methods for various platforms."}),"\n",(0,l.jsx)(n.h2,{id:"edition",children:"Edition"}),"\n",(0,l.jsx)(n.p,{children:"To determine the current version and edition of PowerShell, run:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"$PSVersionTable\n"})}),"\n",(0,l.jsxs)(o.A,{children:[(0,l.jsx)(s.A,{value:"desktop",label:"Desktop",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",metastring:"{2}",children:"PSVersion                      5.1.22621.3810\nPSEdition                      Desktop\nPSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}\nBuildVersion                   10.0.22621.3810\nCLRVersion                     4.0.30319.42000\nWSManStackVersion              3.0\nPSRemotingProtocolVersion      2.3\nSerializationVersion           1.1.0.1\n"})})}),(0,l.jsx)(s.A,{value:"core",label:"Core",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",metastring:"{2}",children:"PSVersion                      7.4.3\nPSEdition                      Core\nGitCommitId                    7.4.3\nOS                             Microsoft Windows 10.0.22631\nPlatform                       Win32NT\nPSCompatibleVersions           {1.0, 2.0, 3.0, 4.0\u2026}\nPSRemotingProtocolVersion      2.3\nSerializationVersion           1.1.0.1\nWSManStackVersion              3.0\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"installation-methods",children:"Installation Methods"}),"\n",(0,l.jsxs)(o.A,{children:[(0,l.jsx)(s.A,{value:"winget",label:"Winget (Recommended)",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"winget search Microsoft.PowerShell\nwinget install --id Microsoft.Powershell --source winget\n"})})}),(0,l.jsx)(s.A,{value:"msi",label:"MSI Installer",children:(0,l.jsxs)(n.p,{children:["For MSI installation, visit the ",(0,l.jsx)(n.a,{href:"https://github.com/PowerShell/PowerShell/releases",children:"GitHub Page"})," for downloads."]})}),(0,l.jsxs)(s.A,{value:"dotnet",label:".NET Global Tool",children:[(0,l.jsxs)(n.p,{children:["Install PowerShell as a ",(0,l.jsx)(n.a,{href:"https://dotnet.microsoft.com/download",children:".NET Global tool"})," if you have the .NET Core SDK:"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"dotnet tool install --global PowerShell\n"})})]}),(0,l.jsxs)(s.A,{value:"other",label:"Other Platforms",children:[(0,l.jsx)(n.p,{children:"For Linux and macOS, refer to the installation guides:"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-linux?view=powershell-7.4",children:"Linux Installation Guide"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-macos?view=powershell-7.4",children:"macOS Installation Guide"})}),"\n"]})]})]}),"\n",(0,l.jsx)(n.admonition,{title:"Important",type:"caution",children:(0,l.jsx)(n.p,{children:"When upgrading PowerShell, use the same installation method as initially used."})}),"\n",(0,l.jsx)(n.h2,{id:"profile-management",children:"Profile Management"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$PROFILE | Select-Object *\nnotepad $PROFILE\nTest-Path -Path $PROFILE.AllUsersAllHosts\n"})}),"\n",(0,l.jsx)(n.h2,{id:"custom-script-example",children:"Custom Script Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-powershell",children:'# Example: Customize PowerShell prompt\nfunction Prompt { "mkeithx" + ":\\" + "> " }\n'})}),"\n",(0,l.jsx)("pre",{children:(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"mkeithx:\\>_"})})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},7227:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var l=t(4164);const r={tabItem:"tabItem_Ymn6"};var o=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,s),hidden:t,children:n})}},9489:(e,n,t)=>{t.d(n,{A:()=>S});var l=t(6540),r=t(4164),o=t(4245),s=t(6347),a=t(6494),i=t(2814),u=t(5167),c=t(9900);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:l,default:r}}=e;return{value:n,label:t,attributes:l,default:r}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(o),(0,l.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:o}))),[u,d]=m({queryString:t,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Dv)(t);return[r,(0,l.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),x=(()=>{const e=u??f;return p({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=t(1062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function g(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),r=a[t].value;r!==l&&(u(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":l===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...n,...e}),(0,v.jsx)(w,{...n,...e})]})}function S(e){const n=(0,b.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var l=t(6540);const r={},o=l.createContext(r);function s(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);