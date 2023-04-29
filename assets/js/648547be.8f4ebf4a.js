"use strict";(self.webpackChunkzenan_website=self.webpackChunkzenan_website||[]).push([[786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),m=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=m(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(r),d=n,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return r?o.createElement(g,a(a({ref:t},s),{},{components:r})):o.createElement(g,a({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var m=2;m<i;m++)a[m]=r[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var o=r(7462),n=(r(7294),r(3905));const i={id:"git",sidebar_label:"Git / Github",sidebar_position:5},a="Git / Github",l={unversionedId:"git",id:"git",title:"Git / Github",description:"Show remote url",source:"@site/notes/5_git.md",sourceDirName:".",slug:"/git",permalink:"/docs/git",draft:!1,editUrl:"https://github.com/zenan-xu/zenan-xu.github.io/tree/main/notes/5_git.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"git",sidebar_label:"Git / Github",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Intellij idea",permalink:"/docs/intellij"},next:{title:"Typescript",permalink:"/docs/ts"}},c={},m=[{value:"Show remote url",id:"show-remote-url",level:3},{value:"Remove directory from remote repository after adding them to .gitignore",id:"remove-directory-from-remote-repository-after-adding-them-to-gitignore",level:3},{value:"Bind a project to a remote repository",id:"bind-a-project-to-a-remote-repository",level:3},{value:"Workflow Permission to git denied to github-actionsbot",id:"workflow-permission-to-git-denied-to-github-actionsbot",level:3},{value:"Delete the most recent commit without destroying the work you&#39;ve done :",id:"delete-the-most-recent-commit-without-destroying-the-work-youve-done-",level:3},{value:"Delete the most recent commit and remove changes :",id:"delete-the-most-recent-commit-and-remove-changes-",level:3},{value:"Jump to the latest commit on origin/master and checkout those files",id:"jump-to-the-latest-commit-on-originmaster-and-checkout-those-files",level:3},{value:"Recover commits after <code>git push -f your_branch</code>",id:"recover-commits-after-git-push--f-your_branch",level:3}],s={toc:m};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"git--github"},"Git / Github"),(0,n.kt)("h3",{id:"show-remote-url"},"Show remote url"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-git"},"git config --get remote.origin.url\ngit remote show origin\n")),(0,n.kt)("h3",{id:"remove-directory-from-remote-repository-after-adding-them-to-gitignore"},"Remove directory from remote repository after adding them to .gitignore"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-git"},'git rm -r --cached .idea\ngit commit -m "Removed idea folder from repository"\ngit push origin main\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--cached")," tells git that you want to keep your local copies of the files"),(0,n.kt)("h3",{id:"bind-a-project-to-a-remote-repository"},"Bind a project to a remote repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-git"},'git init\ngit add .\ngit commit -m "Initial commit"\ngit remote add origin https://github.com/.../....git\ngit branch -M main\ngit push -u origin main\n')),(0,n.kt)("h3",{id:"workflow-permission-to-git-denied-to-github-actionsbot"},"Workflow Permission to git denied to github-actions","[bot]"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Setting")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Actions")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"General")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Workflow permissions")," -> check ",(0,n.kt)("inlineCode",{parentName:"p"},"Read and write permissions")),(0,n.kt)("h3",{id:"delete-the-most-recent-commit-without-destroying-the-work-youve-done-"},"Delete the most recent commit without destroying the work you've done :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-git"},"git reset --soft HEAD~1\n")),(0,n.kt)("h3",{id:"delete-the-most-recent-commit-and-remove-changes-"},"Delete the most recent commit and remove changes :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-git"},"git reset --hard HEAD~1\n")),(0,n.kt)("h3",{id:"jump-to-the-latest-commit-on-originmaster-and-checkout-those-files"},"Jump to the latest commit on origin/master and checkout those files"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-git"},"git fetch --all\ngit branch backup-master\ngit reset --hard origin/master\n")),(0,n.kt)("h3",{id:"recover-commits-after-git-push--f-your_branch"},"Recover commits after ",(0,n.kt)("inlineCode",{parentName:"h3"},"git push -f your_branch")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-git"},"git reflog\n")),(0,n.kt)("p",null,"Choose Head_Number you want recover with"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-git"},"git reset --hard HEAD@{HEAD-NUMBER}\n")),(0,n.kt)("p",null,"You can see all commits on this head by "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-git"},"git cherry -v branch_name\n")),(0,n.kt)("p",null,"In the end you should force push ",(0,n.kt)("inlineCode",{parentName:"p"},"git push -f branch_name")))}p.isMDXComponent=!0}}]);