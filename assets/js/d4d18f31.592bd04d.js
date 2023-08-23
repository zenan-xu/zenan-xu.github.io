"use strict";(self.webpackChunkzenan_website=self.webpackChunkzenan_website||[]).push([[920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,f=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={id:"spring-boot",sidebar_label:"Spring / Spring-Boot",sidebar_position:3},o="Spring / Spring-Boot",l={unversionedId:"spring-boot",id:"spring-boot",title:"Spring / Spring-Boot",description:"Spring Boot auto-configures @EnableKafka if it detects spring-kafka on the class path.",source:"@site/notes/3_spring-boot.md",sourceDirName:".",slug:"/spring-boot",permalink:"/docs/spring-boot",draft:!1,editUrl:"https://github.com/zenan-xu/zenan-xu.github.io/tree/main/notes/3_spring-boot.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"spring-boot",sidebar_label:"Spring / Spring-Boot",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/docs/java"},next:{title:"Intellij idea",permalink:"/docs/intellij"}},s={},p=[{value:"Dependency injection",id:"dependency-injection",level:3},{value:"Scopes :",id:"scopes-",level:3},{value:"Get url of database when debugging",id:"get-url-of-database-when-debugging",level:3},{value:"Steps when a request enters spring application (before arriving in controller)",id:"steps-when-a-request-enters-spring-application-before-arriving-in-controller",level:3},{value:"Spring security and OAuth2",id:"spring-security-and-oauth2",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spring--spring-boot"},"Spring / Spring-Boot"),(0,i.kt)("p",null,"Spring Boot auto-configures @EnableKafka if it detects spring-kafka on the class path."),(0,i.kt)("h3",{id:"dependency-injection"},"Dependency injection"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Constructor injection"),(0,i.kt)("li",{parentName:"ol"},"Setter injection",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"cannot make the field private, because we need to set the field via setter"))),(0,i.kt)("li",{parentName:"ol"},"Field injection",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"violate java, field is marked as private yet spring somehow is able to go ahead and give us an instance of that class to set that field. The way that spring is able to do that is through reflection\nit's private but spring is kind of bypass the conventions of java"),(0,i.kt)("li",{parentName:"ul"},"can't make the field final"),(0,i.kt)("li",{parentName:"ul"},"there's a chance that this could be null"),(0,i.kt)("li",{parentName:"ul"},"testability, you will have to use reflection to get this value in here"),(0,i.kt)("li",{parentName:"ul"},"the only time when it is okay to use field injection is within a test")))),(0,i.kt)("h3",{id:"scopes-"},"Scopes :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"singleton"),(0,i.kt)("li",{parentName:"ul"},"prototype"),(0,i.kt)("li",{parentName:"ul"},"request"),(0,i.kt)("li",{parentName:"ul"},"session"),(0,i.kt)("li",{parentName:"ul"},"application"),(0,i.kt)("li",{parentName:"ul"},"websocket")),(0,i.kt)("h3",{id:"get-url-of-database-when-debugging"},"Get url of database when debugging"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"this.jdbcTemplate.getDataSource().getConnection().getMetaData().getURL()\n")),(0,i.kt)("h3",{id:"steps-when-a-request-enters-spring-application-before-arriving-in-controller"},"Steps when a request enters spring application (before arriving in controller)"),(0,i.kt)("h3",{id:"spring-security-and-oauth2"},"Spring security and OAuth2"))}u.isMDXComponent=!0}}]);