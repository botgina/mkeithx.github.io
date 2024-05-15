"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7701],{5283:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var t=o(4848),s=o(8453);const c={title:"Batch minis",description:"Batch files examples."},l=void 0,r={id:"demo/batch-demo-sample",title:"Batch minis",description:"Batch files examples.",source:"@site/docs/demo/batch-demo-sample.mdx",sourceDirName:"demo",slug:"/demo/batch-demo-sample",permalink:"/docs/demo/batch-demo-sample",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715747332e3,frontMatter:{title:"Batch minis",description:"Batch files examples."},sidebar:"demoSidebar",previous:{title:"Jupyter",permalink:"/docs/demo/jupyter-starters"}},i={},a=[{value:"Lock workstation",id:"lock-workstation",level:3},{value:"Logoff",id:"logoff",level:3},{value:"Group policy",id:"group-policy",level:3},{value:"Folder locker",id:"folder-locker",level:3}];function d(e){const n={code:"code",h3:"h3",pre:"pre",...(0,s.R)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"lock-workstation",children:"Lock workstation"}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"Sample Code"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-batch",children:"@echo off\n\nRundll32.exe User32.dll,LockWorkStation\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"logoff",children:"Logoff"}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"Sample Code"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-batch",children:'@echo off\n\nREM Clear all Temporary Internet Files and IE History\nRunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 8\nRunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 1\n\nREM Remove all files from %TEMP%\nsdelete -s %TEMP%\\*.*\n\nREM Remove list of Recently opened documents\nsdelete "%USERPROFILE%\\Recent\\*.*"\n\nREM Clears DNS records and Resets TCP/IP\nipconfig /flushdns\n\nREM Change directory to where puttylogs.py is located and Execute the Python script\ncd /d "path_to_puttylogs_directory" && python puttylogs.py\n\nREM Log the date/time\necho %DATE% %TIME% >> %HOMEDRIVE%\\logoff.txt\n\nREM Log off my machine\nshutdown -l -f\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"group-policy",children:"Group policy"}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"Sample Code"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-batch",children:'@echo off\npushd "%~dp0"\n\ndir /b "%SystemRoot%\\servicing\\Packages\\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~3*.mum" > List.txt\ndir /b "%SystemRoot%\\servicing\\Packages\\Microsoft-Windows-GroupPolicy-ClientTools-Package~3*.mum" >> List.txt\n\nfor /f %%i in (List.txt) do (\n    dism /online /norestart /add-package:"%SystemRoot%\\servicing\\Packages\\%%i"\n)\n\ndel List.txt\n\npause\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"folder-locker",children:"Folder locker"}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"Sample Code"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-batch",children:'@ECHO OFF\ntitle Folder Locker\n\nREM Set variables\nset "LOCKER_FOLDER=Locker"\nset "LOCKER_FILE=Control Panel.{21EC2020-3AEA-1069-A2DD-08002B30309D}"\nset "PASSWORD=12345"\n\nREM Main logic\nif EXIST "%LOCKER_FILE%" goto UNLOCK\nif NOT EXIST %LOCKER_FOLDER% goto MDLOCKER\n\n:CONFIRM\necho Are you sure you want to lock the folder? (Y/N)\nset /p "cho=>"\nif /I "%cho%"=="Y" goto LOCK\nif /I "%cho%"=="N" goto END\necho Invalid choice.\ngoto CONFIRM\n\n:LOCK\nren %LOCKER_FOLDER% "%LOCKER_FILE%"\nattrib +h +s "%LOCKER_FILE%"\necho Folder locked successfully.\ngoto END\n\n:UNLOCK\necho Enter password to unlock folder:\nset /p "pass=>"\nif "%pass%"=="%PASSWORD%" (\n    attrib -h -s "%LOCKER_FILE%"\n    ren "%LOCKER_FILE%" %LOCKER_FOLDER%\n    echo Folder unlocked successfully.\n) else (\n    echo Invalid password.\n    goto FAIL\n)\ngoto END\n\n:FAIL\necho Invalid password.\ngoto END\n\n:MDLOCKER\nmd %LOCKER_FOLDER%\necho Locker created successfully.\ngoto END\n\n:END\n'})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>r});var t=o(6540);const s={},c=t.createContext(s);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);