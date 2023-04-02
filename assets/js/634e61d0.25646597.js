"use strict";(self.webpackChunkzenan_website=self.webpackChunkzenan_website||[]).push([[254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=r,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return n?i.createElement(f,l(l({ref:t},u),{},{components:n})):i.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={id:"tech",sidebar_label:"Technical interviews",sidebar_position:1},l="Technical interview questions",o={unversionedId:"others/tech",id:"others/tech",title:"Technical interview questions",description:"Java",source:"@site/notes/others/1_technical_interviews.md",sourceDirName:"others",slug:"/others/tech",permalink:"/docs/others/tech",draft:!1,editUrl:"https://github.com/zenan-xu/zenan-xu.github.io/tree/main/notes/others/1_technical_interviews.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"tech",sidebar_label:"Technical interviews",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/docs/commands/windows"},next:{title:"French",permalink:"/docs/others/french"}},p={},c=[{value:"Java",id:"java",level:2},{value:"Spring",id:"spring",level:2},{value:"Angular",id:"angular",level:2},{value:"Git",id:"git",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"technical-interview-questions"},"Technical interview questions"),(0,r.kt)("h2",{id:"java"},"Java"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Difference between StringBuilder (in java.lang) and StringBuffer"),(0,r.kt)("li",{parentName:"ul"},"lamda fuction ",(0,r.kt)("inlineCode",{parentName:"li"},"->")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")," method ",(0,r.kt)("inlineCode",{parentName:"li"},"isBlank()")),(0,r.kt)("li",{parentName:"ul"},"Primitive types int, byte, short, long, float, double, boolean and char"),(0,r.kt)("li",{parentName:"ul"},"Garbage Collectors"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Default method")," is defined with an implementation in an interface")),(0,r.kt)("h2",{id:"spring"},"Spring"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Different types of dependency injection"),(0,r.kt)("li",{parentName:"ul"},"Spring bean scope / different scopes"),(0,r.kt)("li",{parentName:"ul"},"Different steps when a request enters into a spring application"),(0,r.kt)("li",{parentName:"ul"},"Aspect"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@SpringBootApplication")," annotations included : ",(0,r.kt)("inlineCode",{parentName:"li"},"@EnableAutoConfiguration"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"@ComponentScan")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"@Configuration")),(0,r.kt)("li",{parentName:"ul"},"Difference between ",(0,r.kt)("inlineCode",{parentName:"li"},"@Component"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"@Service")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"@Repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@ControllerAdvice")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"@ExceptionHandler")),(0,r.kt)("li",{parentName:"ul"},"Inject values at runtime (",(0,r.kt)("inlineCode",{parentName:"li"},"@Value")," using SpEL)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Transactional")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'@CrossOrigin(origins="...")')),(0,r.kt)("li",{parentName:"ul"},"OAuth2")),(0,r.kt)("h2",{id:"angular"},"Angular"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hooks"),(0,r.kt)("li",{parentName:"ul"},"directives"),(0,r.kt)("li",{parentName:"ul"},"Types of forms (Template-driven and Reactive)")),(0,r.kt)("h2",{id:"git"},"Git"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"diff"),(0,r.kt)("li",{parentName:"ul"},"amend"),(0,r.kt)("li",{parentName:"ul"},"reset/revert"),(0,r.kt)("li",{parentName:"ul"},"rebase/merge")))}s.isMDXComponent=!0}}]);