"use strict";(self.webpackChunkzenan_website=self.webpackChunkzenan_website||[]).push([[326],{9087:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=i(4848),a=i(8453);const l={id:"linux",sidebar_label:"Linux",sidebar_position:1},o=void 0,r={id:"commands/linux",title:"linux",description:"url decode",source:"@site/notes/commands/linux.md",sourceDirName:"commands",slug:"/commands/linux",permalink:"/docs/commands/linux",draft:!1,unlisted:!1,editUrl:"https://github.com/zenan-xu/zenan-xu.github.io/tree/main/notes/commands/linux.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"linux",sidebar_label:"Linux",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Maven",permalink:"/docs/Maven"},next:{title:"Windows",permalink:"/docs/commands/windows"}},t={},d=[{value:"url decode",id:"url-decode",level:3},{value:"Delete lines from a file and generate new file",id:"delete-lines-from-a-file-and-generate-new-file",level:3},{value:"Converting from linux to Windows line breaks",id:"converting-from-linux-to-windows-line-breaks",level:3},{value:"Parse json and get value of a key in json",id:"parse-json-and-get-value-of-a-key-in-json",level:3},{value:"Bash configuration",id:"bash-configuration",level:3}];function c(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"url-decode",children:"url decode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'alias urldecode = \'sed "s@+@ @g;s@%@\\\\\\\\x@g" | xargs -0 printf "%b"\'\necho "http%3A%2F%2Fwww" | urldecode\n'})}),"\n",(0,s.jsx)(n.h3,{id:"delete-lines-from-a-file-and-generate-new-file",children:"Delete lines from a file and generate new file"}),"\n",(0,s.jsx)(n.p,{children:"delete lines 1 to 4"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sed '1,4d' $filename > extracted_file.txt\n"})}),"\n",(0,s.jsx)(n.p,{children:"delete lines 1, 3 and 5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sed -e '1d;3d;5d' $filename\n"})}),"\n",(0,s.jsx)(n.h3,{id:"converting-from-linux-to-windows-line-breaks",children:"Converting from linux to Windows line breaks"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sed -i 's/$/\\r/' linuxFile.txt\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parse-json-and-get-value-of-a-key-in-json",children:"Parse json and get value of a key in json"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"jq -r '.data[].element.key' response.json > result\n"})}),"\n",(0,s.jsx)(n.h3,{id:"bash-configuration",children:"Bash configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"alias _bash='nano ~/.bashrc'\nalias _b='cat ~/.bashrc'\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(6540);const a={},l=s.createContext(a);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);