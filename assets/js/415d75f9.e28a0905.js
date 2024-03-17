"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4290],{7397:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=s(4848),l=s(8453);const t={title:"Hello, world",sidebar_label:"Hello, world",slug:"/hello-world",sidebar_position:2},i=void 0,o={id:"guides/pyprojects/hello-world",title:"Hello, world",description:"Overview",source:"@site/docs/guides/pyprojects/hello-world.mdx",sourceDirName:"guides/pyprojects",slug:"/hello-world",permalink:"/docs/hello-world",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1710565808,formattedLastUpdatedAt:"Mar 16, 2024",sidebarPosition:2,frontMatter:{title:"Hello, world",sidebar_label:"Hello, world",slug:"/hello-world",sidebar_position:2},sidebar:"docSidebar",previous:{title:"Python Starters",permalink:"/docs/python-starters"},next:{title:"Virtiual Environment",permalink:"/docs/guides/pyprojects/python-virtual-env"}},d={},c=[{value:"Overview",id:"overview",level:3}];function a(e){const n={admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.admonition,{title:"What's this?",type:"tip",children:(0,r.jsx)(n.p,{children:'In this guide, we\'re going to find out how print "Hello, world" in 10 various ways using python.'})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Funtion:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'print("Hello, world!")\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Variable:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'msg = "Hello, world!"\nprint(msg)\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"String Concatenation"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'greeting = "Hello, "\nsubject = "World!"\nprint(greeting + subject)\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Using an f-string (formatted string literal):"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'greeting = "Hello, "\nsubject = "World!"\nprint(f"{greeting}{subject}")\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["Multiple ",(0,r.jsx)(n.code,{children:"print"})," statements:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'print("Hello,", end=" ")\nprint("World!")\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"sys.stdout.write"})," method:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'import sys\nsys.stdout.write("Hello, World!\\n")\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"sys.out.write"})," with ",(0,r.jsx)(n.code,{children:"format"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'import sys\nsys.stdout.write("{}\\n".format("Hello, World!"))\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"8",children:["\n",(0,r.jsxs)(n.li,{children:["Using ",(0,r.jsx)(n.code,{children:"join"})," method:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'message_parts = ["Hello," , "World!"]\nprint(\'\'.join(message_parts))\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"9",children:["\n",(0,r.jsxs)(n.li,{children:["Using ",(0,r.jsx)(n.code,{children:"str.format"})," method:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'greeting = "Hello, {}!"\nsubject = "World"\nprint(greeting.format(subject))\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"10",children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"repr"})," function:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'print(repr("Hello, World!"))\n'})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(6540);const l={},t=r.createContext(l);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);