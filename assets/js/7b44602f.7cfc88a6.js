"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5398],{8919:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var o=n(4848),t=n(8453);const s={title:"Batch",description:"Batch examples.",sidebar_position:2},c=void 0,l={id:"cheat-sheets/batch",title:"Batch",description:"Batch examples.",source:"@site/docs/cheat-sheets/batch.mdx",sourceDirName:"cheat-sheets",slug:"/cheat-sheets/batch",permalink:"/docs/cheat-sheets/batch",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:171696802e4,sidebarPosition:2,frontMatter:{title:"Batch",description:"Batch examples.",sidebar_position:2},sidebar:"mySidebar",previous:{title:"Conda",permalink:"/docs/cheat-sheets/conda"}},i={},a=[{value:"Lock workstation",id:"lock-workstation",level:3},{value:"Logoff",id:"logoff",level:3},{value:"Group policy",id:"group-policy",level:3},{value:"Folder locker",id:"folder-locker",level:3}];function d(e){const r={code:"code",h3:"h3",pre:"pre",...(0,t.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h3,{id:"lock-workstation",children:"Lock workstation"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Sample Code"}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-batch",children:"@echo off\r\n\r\nRundll32.exe User32.dll,LockWorkStation\n"})})]}),"\n",(0,o.jsx)(r.h3,{id:"logoff",children:"Logoff"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Sample Code"}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-batch",children:'@echo off\r\n\r\nREM Clear all Temporary Internet Files and IE History\r\nRunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 8\r\nRunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 1\r\n\r\nREM Remove all files from %TEMP%\r\nsdelete -s %TEMP%\\*.*\r\n\r\nREM Remove list of Recently opened documents\r\nsdelete "%USERPROFILE%\\Recent\\*.*"\r\n\r\nREM Clears DNS records and Resets TCP/IP\r\nipconfig /flushdns\r\n\r\nREM Change directory to where puttylogs.py is located and Execute the Python script\r\ncd /d "path_to_puttylogs_directory" && python puttylogs.py\r\n\r\nREM Log the date/time\r\necho %DATE% %TIME% >> %HOMEDRIVE%\\logoff.txt\r\n\r\nREM Log off my machine\r\nshutdown -l -f\n'})})]}),"\n",(0,o.jsx)(r.h3,{id:"group-policy",children:"Group policy"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Sample Code"}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-batch",children:'@echo off\r\npushd "%~dp0"\r\n\r\ndir /b "%SystemRoot%\\servicing\\Packages\\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~3*.mum" > List.txt\r\ndir /b "%SystemRoot%\\servicing\\Packages\\Microsoft-Windows-GroupPolicy-ClientTools-Package~3*.mum" >> List.txt\r\n\r\nfor /f %%i in (List.txt) do (\r\n    dism /online /norestart /add-package:"%SystemRoot%\\servicing\\Packages\\%%i"\r\n)\r\n\r\ndel List.txt\r\n\r\npause\n'})})]}),"\n",(0,o.jsx)(r.h3,{id:"folder-locker",children:"Folder locker"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Sample Code"}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-batch",children:'@ECHO OFF\r\ntitle Folder Locker\r\n\r\nREM Set variables\r\nset "LOCKER_FOLDER=Locker"\r\nset "LOCKER_FILE=Control Panel.{21EC2020-3AEA-1069-A2DD-08002B30309D}"\r\nset "PASSWORD=12345"\r\n\r\nREM Main logic\r\nif EXIST "%LOCKER_FILE%" goto UNLOCK\r\nif NOT EXIST %LOCKER_FOLDER% goto MDLOCKER\r\n\r\n:CONFIRM\r\necho Are you sure you want to lock the folder? (Y/N)\r\nset /p "cho=>"\r\nif /I "%cho%"=="Y" goto LOCK\r\nif /I "%cho%"=="N" goto END\r\necho Invalid choice.\r\ngoto CONFIRM\r\n\r\n:LOCK\r\nren %LOCKER_FOLDER% "%LOCKER_FILE%"\r\nattrib +h +s "%LOCKER_FILE%"\r\necho Folder locked successfully.\r\ngoto END\r\n\r\n:UNLOCK\r\necho Enter password to unlock folder:\r\nset /p "pass=>"\r\nif "%pass%"=="%PASSWORD%" (\r\n    attrib -h -s "%LOCKER_FILE%"\r\n    ren "%LOCKER_FILE%" %LOCKER_FOLDER%\r\n    echo Folder unlocked successfully.\r\n) else (\r\n    echo Invalid password.\r\n    goto FAIL\r\n)\r\ngoto END\r\n\r\n:FAIL\r\necho Invalid password.\r\ngoto END\r\n\r\n:MDLOCKER\r\nmd %LOCKER_FOLDER%\r\necho Locker created successfully.\r\ngoto END\r\n\r\n:END\n'})})]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>l});var o=n(6540);const t={},s=o.createContext(t);function c(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);