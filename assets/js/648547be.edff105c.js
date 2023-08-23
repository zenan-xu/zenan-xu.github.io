"use strict";(self.webpackChunkzenan_website=self.webpackChunkzenan_website||[]).push([[786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(r),p=i,g=u["".concat(c,".").concat(p)]||u[p]||d[p]||n;return r?o.createElement(g,a(a({ref:t},m),{},{components:r})):o.createElement(g,a({ref:t},m))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<n;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=r(7462),i=(r(7294),r(3905));const n={id:"git",sidebar_label:"Git / Github",sidebar_position:5},a="Git / Github",l={unversionedId:"git",id:"git",title:"Git / Github",description:"Show remote url",source:"@site/notes/5_git.md",sourceDirName:".",slug:"/git",permalink:"/docs/git",draft:!1,editUrl:"https://github.com/zenan-xu/zenan-xu.github.io/tree/main/notes/5_git.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"git",sidebar_label:"Git / Github",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Intellij idea",permalink:"/docs/intellij"},next:{title:"Typescript",permalink:"/docs/ts"}},c={},s=[{value:"Show remote url",id:"show-remote-url",level:3},{value:"Remove directory from remote repository after adding them to .gitignore",id:"remove-directory-from-remote-repository-after-adding-them-to-gitignore",level:3},{value:"Bind a project to a remote repository",id:"bind-a-project-to-a-remote-repository",level:3},{value:"Workflow Permission to git denied to github-actionsbot",id:"workflow-permission-to-git-denied-to-github-actionsbot",level:3},{value:"Delete the most recent commit without destroying the work you&#39;ve done :",id:"delete-the-most-recent-commit-without-destroying-the-work-youve-done-",level:3},{value:"Delete the most recent commit and remove changes :",id:"delete-the-most-recent-commit-and-remove-changes-",level:3},{value:"Jump to the latest commit on origin/master and checkout those files",id:"jump-to-the-latest-commit-on-originmaster-and-checkout-those-files",level:3},{value:"Recover commits after <code>git push -f your_branch</code>",id:"recover-commits-after-git-push--f-your_branch",level:3},{value:"Github action not working for firs time",id:"github-action-not-working-for-firs-time",level:3}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git--github"},"Git / Github"),(0,i.kt)("h3",{id:"show-remote-url"},"Show remote url"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-git"},"git config --get remote.origin.url\ngit remote show origin\n")),(0,i.kt)("h3",{id:"remove-directory-from-remote-repository-after-adding-them-to-gitignore"},"Remove directory from remote repository after adding them to .gitignore"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-git"},'git rm -r --cached .idea\ngit commit -m "Removed idea folder from repository"\ngit push origin main\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--cached")," tells git that you want to keep your local copies of the files"),(0,i.kt)("h3",{id:"bind-a-project-to-a-remote-repository"},"Bind a project to a remote repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-git"},'git init\ngit add .\ngit commit -m "Initial commit"\ngit remote add origin https://github.com/.../....git\ngit branch -M main\ngit push -u origin main\n')),(0,i.kt)("h3",{id:"workflow-permission-to-git-denied-to-github-actionsbot"},"Workflow Permission to git denied to github-actions","[bot]"),(0,i.kt)("p",null,"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Setting")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Actions")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"General")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Workflow permissions")," -> check ",(0,i.kt)("inlineCode",{parentName:"p"},"Read and write permissions")),(0,i.kt)("h3",{id:"delete-the-most-recent-commit-without-destroying-the-work-youve-done-"},"Delete the most recent commit without destroying the work you've done :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-git"},"git reset --soft HEAD~1\n")),(0,i.kt)("h3",{id:"delete-the-most-recent-commit-and-remove-changes-"},"Delete the most recent commit and remove changes :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-git"},"git reset --hard HEAD~1\n")),(0,i.kt)("h3",{id:"jump-to-the-latest-commit-on-originmaster-and-checkout-those-files"},"Jump to the latest commit on origin/master and checkout those files"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-git"},"git fetch --all\ngit branch backup-master\ngit reset --hard origin/master\n")),(0,i.kt)("h3",{id:"recover-commits-after-git-push--f-your_branch"},"Recover commits after ",(0,i.kt)("inlineCode",{parentName:"h3"},"git push -f your_branch")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-git"},"git reflog\n")),(0,i.kt)("p",null,"Choose Head_Number you want recover with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-git"},"git reset --hard HEAD@{HEAD-NUMBER}\n")),(0,i.kt)("p",null,"You can see all commits on this head by "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-git"},"git cherry -v branch_name\n")),(0,i.kt)("p",null,"In the end you should force push ",(0,i.kt)("inlineCode",{parentName:"p"},"git push -f branch_name")),(0,i.kt)("h3",{id:"github-action-not-working-for-firs-time"},"Github action not working for firs time"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," /usr/bin/git push origin gh-pages\n  remote: Permission to menu-caidan/menu-caidan.github.io.git denied to github-actions[bot].\n  fatal: unable to access 'https://github.com/xxx/xxx.github.io.git/': The requested URL returned error: 403\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Github action setting",src:r(3527).Z,width:"804",height:"312"})))}u.isMDXComponent=!0},3527:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/github_action_setting-0dc47d7b2fa03dc3624b692ceae1372d.png"}}]);