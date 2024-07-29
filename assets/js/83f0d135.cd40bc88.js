"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[859],{2008:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=n(4848),i=n(8453);const t={description:"Fix Hardware Issues in Windows"},a="Fix Hardware Issues",l={id:"devops/troubleshoot/windows-hardware-issues",title:"Fix Hardware Issues",description:"Fix Hardware Issues in Windows",source:"@site/docs/devops/troubleshoot/windows-hardware-issues.mdx",sourceDirName:"devops/troubleshoot",slug:"/devops/troubleshoot/windows-hardware-issues",permalink:"/docs/devops/troubleshoot/windows-hardware-issues",draft:!1,unlisted:!1,editUrl:"https://github.com/mkeithX/mkeithx.github.io/edit/main/website/docs/devops/troubleshoot/windows-hardware-issues.mdx",tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:1722293236e3,frontMatter:{description:"Fix Hardware Issues in Windows"},sidebar:"devops",previous:{title:"Utilities",permalink:"/docs/devops/troubleshoot/windows-utilities"},next:{title:"Fix Network Issues",permalink:"/docs/devops/troubleshoot/windows-network-issues"}},o={},d=[{value:"1. Check Device Manager",id:"1-check-device-manager",level:4},{value:"2. Update Drivers",id:"2-update-drivers",level:4},{value:"3. Check Hardware Compatibility",id:"3-check-hardware-compatibility",level:4},{value:"4. Adjust Power Settings",id:"4-adjust-power-settings",level:4},{value:"5. Test Hardware Components",id:"5-test-hardware-components",level:4},{value:"6. Check Event Viewer",id:"6-check-event-viewer",level:4},{value:"7. Monitor System Temperature",id:"7-monitor-system-temperature",level:4},{value:"8. Physical Inspection",id:"8-physical-inspection",level:4},{value:"9. Reinstall Hardware",id:"9-reinstall-hardware",level:4}];function c(e){const s={code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"fix-hardware-issues",children:"Fix Hardware Issues"}),"\n",(0,r.jsx)(s.p,{children:"Dealing with hardware problems in Windows can be frustrating, but with a systematic approach, you can often diagnose and fix issues on your own. Here\u2019s a straightforward guide to help you:"}),"\n",(0,r.jsx)(s.h4,{id:"1-check-device-manager",children:"1. Check Device Manager"}),"\n",(0,r.jsx)(s.p,{children:"Device Manager shows all your computer\u2019s hardware. Look for devices with a yellow exclamation mark, which indicates a problem."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Open Device Manager"}),": Press ",(0,r.jsx)(s.code,{children:"Win + X"}),', then select "Device Manager".']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Identify Issues"}),': Right-click on devices with issues and select "Properties" to see details.']}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"2-update-drivers",children:"2. Update Drivers"}),"\n",(0,r.jsx)(s.p,{children:"Outdated drivers can cause hardware malfunctions. Use PowerShell to update them:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Update Drivers"}),": Open PowerShell (",(0,r.jsx)(s.code,{children:"Win + X"}),' and select "Windows PowerShell (Admin)").',"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:'# List installed drivers\nGet-WindowsDriver -Online\n\n# Update a specific driver\nUpdate-WindowsDriver -Name "DriverName"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"3-check-hardware-compatibility",children:"3. Check Hardware Compatibility"}),"\n",(0,r.jsx)(s.p,{children:"Ensure your hardware is compatible with your version of Windows. Check manufacturer specifications and compatibility lists."}),"\n",(0,r.jsx)(s.h4,{id:"4-adjust-power-settings",children:"4. Adjust Power Settings"}),"\n",(0,r.jsx)(s.p,{children:"Improper power settings can affect hardware performance. Set a suitable power plan:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Manage Power Plans"}),": Open PowerShell as administrator.","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"# List power plans\npowercfg /l\n\n# Set active power plan (replace GUID with desired plan's GUID)\npowercfg /setactive GUID\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"5-test-hardware-components",children:"5. Test Hardware Components"}),"\n",(0,r.jsx)(s.p,{children:"If you suspect hardware issues, testing components can help identify problems:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Check Disk Health"}),": Use PowerShell to monitor disk health."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"Get-PhysicalDisk | Get-StorageReliabilityCounter\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Check RAM"}),": Verify RAM details."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"Get-CimInstance Win32_PhysicalMemory | Format-Table Capacity, Manufacturer, Speed\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Check CPU"}),": Get CPU information."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"Get-WmiObject -Class Win32_Processor | Select-Object -Property *\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"6-check-event-viewer",children:"6. Check Event Viewer"}),"\n",(0,r.jsx)(s.p,{children:"Event Viewer logs system events, including hardware errors or warnings."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Open Event Viewer"}),": Press ",(0,r.jsx)(s.code,{children:"Win + X"}),', then select "Event Viewer".']}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"7-monitor-system-temperature",children:"7. Monitor System Temperature"}),"\n",(0,r.jsx)(s.p,{children:"Overheating can cause hardware issues. Use tools or PowerShell to monitor temperatures:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Check System Temperature"}),": Monitor temperatures to ensure components aren\u2019t overheating.","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"Get-WmiObject -Namespace root\\wmi -Class MSStorageDriver_ATAPISmartData | Select-Object -ExpandProperty VendorSpecific\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"8-physical-inspection",children:"8. Physical Inspection"}),"\n",(0,r.jsx)(s.p,{children:"Inspect hardware for physical damage or loose connections. Ensure everything is properly connected."}),"\n",(0,r.jsx)(s.h4,{id:"9-reinstall-hardware",children:"9. Reinstall Hardware"}),"\n",(0,r.jsx)(s.p,{children:"As a last resort, reinstall hardware components if issues persist."})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>l});var r=n(6540);const i={},t=r.createContext(i);function a(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);