"use strict";(self.webpackChunkzenan_website=self.webpackChunkzenan_website||[]).push([[795],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={id:"linux",sidebar_label:"Linux",sidebar_position:1},i=void 0,c={unversionedId:"commands/linux",id:"commands/linux",title:"linux",description:"url decode",source:"@site/notes/commands/linux.md",sourceDirName:"commands",slug:"/commands/linux",permalink:"/docs/commands/linux",draft:!1,editUrl:"https://github.com/zenan-xu/zenan-xu.github.io/tree/main/notes/commands/linux.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"linux",sidebar_label:"Linux",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/kubernetes"},next:{title:"Windows",permalink:"/docs/commands/windows"}},l={},s=[{value:"url decode",id:"url-decode",level:3},{value:"Bash configuration",id:"bash-configuration",level:3}],u={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"url-decode"},"url decode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'alias urldecode = \'sed "s@+@ @g;s@%@\\\\\\\\x@g" | xargs -0 printf "%b"\'\necho "http%3A%2F%2Fwww" | urldecode\n')),(0,o.kt)("h3",{id:"bash-configuration"},"Bash configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"alias _bash='nano ~/.bashrc'\nalias _b='cat ~/.bashrc'\n")))}d.isMDXComponent=!0}}]);