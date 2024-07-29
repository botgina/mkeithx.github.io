"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9561],{8530:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=n(4848),i=n(8453);const r={description:"Fixing network issues in Windows"},o="Fix Network Issues",d={id:"devops/troubleshoot/windows-network-issues",title:"Fix Network Issues",description:"Fixing network issues in Windows",source:"@site/docs/devops/troubleshoot/windows-network-issues.mdx",sourceDirName:"devops/troubleshoot",slug:"/devops/troubleshoot/windows-network-issues",permalink:"/docs/devops/troubleshoot/windows-network-issues",draft:!1,unlisted:!1,editUrl:"https://github.com/mkeithX/mkeithx.github.io/edit/main/website/docs/devops/troubleshoot/windows-network-issues.mdx",tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:1722293236e3,frontMatter:{description:"Fixing network issues in Windows"},sidebar:"devops",previous:{title:"Fix Hardware Issues",permalink:"/docs/devops/troubleshoot/windows-hardware-issues"},next:{title:"Fix common issues in MS Teams",permalink:"/docs/devops/troubleshoot/ms-teams"}},l={},a=[{value:"Step 1: Release IP Address",id:"step-1-release-ip-address",level:3},{value:"Step 2: Flush DNS Cache",id:"step-2-flush-dns-cache",level:3},{value:"Step 3: Renew IP Address",id:"step-3-renew-ip-address",level:3},{value:"Step 4: Reset TCP/IP Stack",id:"step-4-reset-tcpip-stack",level:3},{value:"Step 5: Reset Winsock Catalog",id:"step-5-reset-winsock-catalog",level:3},{value:"Step 6: Restart Computer",id:"step-6-restart-computer",level:3},{value:"Additional Troubleshooting Steps:",id:"additional-troubleshooting-steps",level:3},{value:"Reports",id:"reports",level:3}];function c(e){const s={admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"fix-network-issues",children:"Fix Network Issues"}),"\n",(0,t.jsx)(s.p,{children:"This guide provides a structured approach to resolving network connectivity issues on Windows, ensuring you can quickly diagnose and address problems to maintain productivity."}),"\n",(0,t.jsx)(s.admonition,{title:"Elevated access required",type:"tip",children:(0,t.jsx)(s.p,{children:"Run CMD as administrator."})}),"\n",(0,t.jsx)(s.h3,{id:"step-1-release-ip-address",children:"Step 1: Release IP Address"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"ipconfig /release\n"})}),"\n",(0,t.jsx)(s.h3,{id:"step-2-flush-dns-cache",children:"Step 2: Flush DNS Cache"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"ipconfig /flushdns\n"})}),"\n",(0,t.jsx)(s.h3,{id:"step-3-renew-ip-address",children:"Step 3: Renew IP Address"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"ipconfig /renew\n"})}),"\n",(0,t.jsx)(s.h3,{id:"step-4-reset-tcpip-stack",children:"Step 4: Reset TCP/IP Stack"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"netsh int ip reset\n"})}),"\n",(0,t.jsx)(s.h3,{id:"step-5-reset-winsock-catalog",children:"Step 5: Reset Winsock Catalog"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"netsh winsock reset\n"})}),"\n",(0,t.jsx)(s.h3,{id:"step-6-restart-computer",children:"Step 6: Restart Computer"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"Restart-Computer\n"})}),"\n",(0,t.jsx)(s.h3,{id:"additional-troubleshooting-steps",children:"Additional Troubleshooting Steps:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Check Network Cables and Connections"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Restart Your Devices"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Check Network Adapter Settings"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Run Network Troubleshooter"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Update Network Drivers"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Check Firewall and Security Software"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Check for Windows Updates"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Check IP Address Configuration"})}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"reports",children:"Reports"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"netsh interface show interface\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"netsh wlan show wlanreport\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"netsh interface ip show dnsservers\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var t=n(6540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);