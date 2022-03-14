(self.webpackChunk=self.webpackChunk||[]).push([[67232],{3905:(e,t,a)=>{"use strict";a.r(t),a.d(t,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){return function(t){var a=m(t.components);return n.createElement(e,r({},t,{components:a}))}},m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(a),u=i,h=c["".concat(o,".").concat(u)]||c[u]||p[u]||r;return a?n.createElement(h,d(d({ref:t},s),{},{components:a})):n.createElement(h,d({ref:t},s))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},36742:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var n=a(79973),i=a(67294),r=a(73727),o=a(52263),d=a(13919),l=a(10412),s=(0,i.createContext)({collectLink:function(){}}),c=a(44996),m=a(18780),u=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const p=function(e){var t,a,p=e.isNavLink,h=e.to,f=e.href,v=e.activeClassName,g=e.isActive,x=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,b=void 0===y||y,w=(0,n.Z)(e,u),N=(0,o.default)().siteConfig,k=N.trailingSlash,E=N.baseUrl,C=(0,c.useBaseUrlUtils)().withBaseUrl,U=(0,i.useContext)(s),_=h||f,T=(0,d.Z)(_),I=null==_?void 0:_.replace("pathname://",""),M=void 0!==I?(a=I,b&&function(e){return e.startsWith("/")}(a)?C(a):a):void 0;M&&T&&(M=(0,m.applyTrailingSlash)(M,{trailingSlash:k,baseUrl:E}));var P=(0,i.useRef)(!1),O=p?r.OL:r.rU,R=l.default.canUseIntersectionObserver,S=(0,i.useRef)();(0,i.useEffect)((function(){return!R&&T&&null!=M&&window.docusaurus.prefetch(M),function(){R&&S.current&&S.current.disconnect()}}),[S,M,R,T]);var F=null!==(t=null==M?void 0:M.startsWith("#"))&&void 0!==t&&t,A=!M||!T||F;return M&&T&&!F&&!x&&U.collectLink(M),A?i.createElement("a",Object.assign({href:M},_&&!T&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(O,Object.assign({},w,{onMouseEnter:function(){P.current||null==M||(window.docusaurus.preload(M),P.current=!0)},innerRef:function(e){var t,a;R&&e&&T&&(t=e,a=function(){null!=M&&window.docusaurus.prefetch(M)},S.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.current.unobserve(t),S.current.disconnect(),a())}))})),S.current.observe(t))},to:M||""},p&&{isActive:g,activeClassName:v}))}},13919:(e,t,a)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}a.d(t,{b:()=>n,Z:()=>i})},44996:(e,t,a)=>{"use strict";a.r(t),a.d(t,{useBaseUrlUtils:()=>r,default:()=>o});var n=a(52263),i=a(13919);function r(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var r=void 0===n?{}:n,o=r.forcePrependBaseUrl,d=void 0!==o&&o,l=r.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if((0,i.b)(a))return a;if(d)return t+a;var c=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+c:c}(r,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===a)return e;var i,r=e.split(/[#?]/)[0],o="/"===r||r===n?r:(i=r,a?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(r,o)}},18780:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=a(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var r=a(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(r).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var n=a(36742),i=a(44256),r=a(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function d(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var l=function(){var e=r.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},c=function(){return r.createElement("p",null,"Help us make the site even better by"," ",r.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},m=function(){return r.createElement(d,null,r.createElement(s,null),r.createElement(l,null),r.createElement(c,null))},u=function(){return r.createElement(d,null,r.createElement(l,null),r.createElement(c,null))};const p=function(){return(0,i.fbContent)({internal:r.createElement(m,null),external:r.createElement(u,null)})}},601:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>m,toc:()=>u,default:()=>h});var n=a(74034),i=a(79973),r=(a(67294),a(3905)),o=a(68629),d=a(44256),l=["components"],s={id:"imperatively-modifying-store-data-experimental",title:"Imperatively modifying store data (EXPERIMENTAL)",slug:"/guided-tour/updating-data/imperatively-modifying-store-data-experimental/",description:"Using readUpdatableQuery_EXPERIMENTAL to update scalar fields in the store",keywords:["record source","store","updater","typesafe updaters","readUpdatableQuery"]},c=void 0,m={unversionedId:"guided-tour/updating-data/imperatively-modifying-store-data-experimental",id:"guided-tour/updating-data/imperatively-modifying-store-data-experimental",isDocsHomePage:!1,title:"Imperatively modifying store data (EXPERIMENTAL)",description:"Using readUpdatableQuery_EXPERIMENTAL to update scalar fields in the store",source:"@site/docs/guided-tour/updating-data/imperatively-modifying-store-data-experimental.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/imperatively-modifying-store-data-experimental/",permalink:"/docs/next/guided-tour/updating-data/imperatively-modifying-store-data-experimental/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guided-tour/updating-data/imperatively-modifying-store-data-experimental.md",tags:[],version:"current",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1647277043,formattedLastUpdatedAt:"3/14/2022",frontMatter:{id:"imperatively-modifying-store-data-experimental",title:"Imperatively modifying store data (EXPERIMENTAL)",slug:"/guided-tour/updating-data/imperatively-modifying-store-data-experimental/",description:"Using readUpdatableQuery_EXPERIMENTAL to update scalar fields in the store",keywords:["record source","store","updater","typesafe updaters","readUpdatableQuery"]}},u=[{value:"When to use updaters",id:"when-to-use-updaters",children:[{value:"Complex client updates",id:"complex-client-updates",children:[],level:3},{value:"Client schema extensions",id:"client-schema-extensions",children:[],level:3},{value:"Use of other APIs",id:"use-of-other-apis",children:[],level:3},{value:"If multiple optimistic responses modify a given store value",id:"if-multiple-optimistic-responses-modify-a-given-store-value",children:[],level:3}],level:2},{value:"When <strong>not</strong> to use updaters",id:"when-not-to-use-updaters",children:[{value:"To trigger other side effects",id:"to-trigger-other-side-effects",children:[],level:3}],level:2},{value:"The various types of updater functions",id:"the-various-types-of-updater-functions",children:[],level:2},{value:"Optimistic updaters vs updaters",id:"optimistic-updaters-vs-updaters",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Example 2: Updating data in response to user interactions",id:"example-2-updating-data-in-response-to-user-interactions",children:[],level:2}],p={toc:u};function h(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.mdx)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(d.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,r.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"This section describes ",(0,r.mdx)("strong",{parentName:"p"},"experimental")," APIs. Please reach out to ",(0,r.mdx)("a",{parentName:"p",href:"https://fb.workplace.com/profile.php?id=100042823931887"},"Robert Balicki")," if you would like to adopt these APIs."),(0,r.mdx)("p",{parentName:"div"},"Please also see the ",(0,r.mdx)("a",{parentName:"p",href:"https://fb.quip.com/4FZaADvkQPPl"},"early adopter guide"),".")))),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"See also ",(0,r.mdx)("a",{parentName:"p",href:"../imperatively-modifying-linked-fields-experimental"},"using readUpdatableQuery_EXPERIMENTAL to update linked fields in the store"),"."))),(0,r.mdx)("p",null,"Data in Relay stores can be imperatively modified within updater functions."),(0,r.mdx)("h2",{id:"when-to-use-updaters"},"When to use updaters"),(0,r.mdx)("h3",{id:"complex-client-updates"},"Complex client updates"),(0,r.mdx)("p",null,"You might provide an updater function if the changes to local data are more complex than what can be achieved by simply writing a network response to the store and cannot be handled by the declarative mutation directives."),(0,r.mdx)("h3",{id:"client-schema-extensions"},"Client schema extensions"),(0,r.mdx)("p",null,"In addition, since the network response necessarily will not include data for fields defined in client schema extensions, you may wish to use an updater to initialize data defined in client schema extensions."),(0,r.mdx)("h3",{id:"use-of-other-apis"},"Use of other APIs"),(0,r.mdx)("p",null,"Lastly, there are things you can only achieve using updaters, such as invalidating nodes, deleting nodes, finding all connections at a given field, etc."),(0,r.mdx)("h3",{id:"if-multiple-optimistic-responses-modify-a-given-store-value"},"If multiple optimistic responses modify a given store value"),(0,r.mdx)("p",null,"If two optimistic responses affect a given value, and the first optimistic response is rolled back, the second one will remain applied."),(0,r.mdx)("p",null,"For example, if two optimistic responses each increase a story's like count by one, and the first optimistic response is rolled back, the second optimistic response remains applied. However, it is ",(0,r.mdx)("strong",{parentName:"p"},"not recalculated"),", and the value of the like count will remain increased by two."),(0,r.mdx)("h2",{id:"when-not-to-use-updaters"},"When ",(0,r.mdx)("strong",{parentName:"h2"},"not")," to use updaters"),(0,r.mdx)("h3",{id:"to-trigger-other-side-effects"},"To trigger other side effects"),(0,r.mdx)("p",null,"You should use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"onCompleted")," callback to trigger other side effects."),(0,r.mdx)("h2",{id:"the-various-types-of-updater-functions"},"The various types of updater functions"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"useMutation")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"commitMutation")," APIs accept configuration objects which can include ",(0,r.mdx)("inlineCode",{parentName:"p"},"optimisticUpdater")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"updater")," fields. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"requestSubscription")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"useSubscription")," APIs accept configuration objects which can include ",(0,r.mdx)("inlineCode",{parentName:"p"},"updater")," fields."),(0,r.mdx)("p",null,"In addition, there is another API (",(0,r.mdx)("inlineCode",{parentName:"p"},"commitLocalUpdate"),") which also accepts an updater function. It will be discussed in the ",(0,r.mdx)("a",{parentName:"p",href:"../local-data-updates/"},"Other APIs for modifying local data")," section."),(0,r.mdx)("h2",{id:"optimistic-updaters-vs-updaters"},"Optimistic updaters vs updaters"),(0,r.mdx)("p",null,"Mutations can have both optimistic and regular updaters. Optimistic updaters are executed when a mutation is triggered. When that mutation completes or errors, the optimistic update is rolled back."),(0,r.mdx)("p",null,"Regular updaters are executed when a mutation completes successfully."),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)("p",null,"Let's construct an example in which an ",(0,r.mdx)("inlineCode",{parentName:"p"},"is_new_comment")," field (which is defined in a schema extension) is set to ",(0,r.mdx)("inlineCode",{parentName:"p"},"true")," on a newly created Feedback object in a mutation updater."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"# Feedback.graphql\nextend type Feedback {\n  is_new_comment: Boolean\n}\n")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import type {Environment} from 'react-relay';\nimport type {\n  FeedbackCreateData,\n  CreateFeedbackMutation,\n  CreateFeedbackMutation$data,\n} from 'CreateFeedbackMutation.graphql';\n\nimport type {\n  CreateFeedbackUpdatableQuery,\n  CreateFeedbackUpdatableQuery$data,\n} from 'CreateFeedbackUpdatableQuery.graphql';\n\nconst {commitMutation, graphql} = require('react-relay');\nconst {ConnectionHandler} = require('relay-runtime');\n\nfunction commitCreateFeedbackMutation(\n  environment: Environment,\n  input: FeedbackCreateData,\n) {\n  return commitMutation<FeedbackCreateData>(environment, {\n    mutation: graphql`\n      mutation CreateFeedbackMutation($input: FeedbackCreateData!) {\n        feedback_create(input: $input) {\n          feedback {\n            id\n          }\n        }\n      }\n    `,\n    variables: {input},\n\n    // Step 1: define an updater\n    updater: (store: RecordSourceSelectorProxy, response: ?CreateCommentMutation$data) => {\n      // Step 2: extract the ID of the newly-created feedback object\n      const id = response?.feedback_create?.feedback?.id;\n      if (id == null) {\n        return;\n      }\n\n      // Step 3: call store.readUpdatableQuery_EXPERIMENTAL, and pass it a type parameter\n      const updatableData: CreateFeedbackUpdatableQuery$data =\n        store.readUpdatableQuery_EXPERIMENTAL<CreateFeedbackUpdatableQuery>(\n          // Step 4: Pass it a query literal, where the query contains the @updatable directive.\n          // This query literal describes the data in the store that you want to update.\n          graphql`\n            query CreateFeedbackUpdatableQuery($id: ID!) @updatable {\n              node(id: $id) {\n                ... on Feedback {\n                  __typename\n                  is_new_comment\n                }\n              }\n            }\n          `,\n          // Step 4A: Pass the query variables to readUpdatableQuery_EXPERIMENTAL\n          {id}\n        );\n\n      // Step 5: Access the field, and mutate the updatableData\n      if (updatableData.node?.__typename === 'Feedback') {\n        // In this block, Flow understands that updatableData.node is a Feedback item\n        updatableData.node.is_new_comment = true;\n      }\n    },\n  });\n}\n\nmodule.exports = {commit: commitCreateFeedbackMutation};\n")),(0,r.mdx)(d.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"If available, the auto-generated ",(0,r.mdx)("inlineCode",{parentName:"p"},"fetch__Feedback")," field can make this example simpler.")))),(0,r.mdx)("p",null,"Let's distill what's going on here."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"updater")," accepts two parameters: a ",(0,r.mdx)("inlineCode",{parentName:"li"},"RecordSourceSelectorProxy")," and an optional object that is the result of reading out the mutation response.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"The type of this ",(0,r.mdx)("inlineCode",{parentName:"li"},"data")," argument is a nullable version of the ",(0,r.mdx)("inlineCode",{parentName:"li"},"$data")," type that is imported from the generated mutation file."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"data")," arguments contains just the data selected directly by the mutation argument. In other words, if another fragment is spread in the mutation, the data from that fragment will not be available within ",(0,r.mdx)("inlineCode",{parentName:"li"},"data")," by default."))),(0,r.mdx)("li",{parentName:"ul"},"This ",(0,r.mdx)("inlineCode",{parentName:"li"},"updater")," is executed after the mutation response has been written to the store. In other words, we can assume that the returned feedback object exists for any data that is read out through the ",(0,r.mdx)("inlineCode",{parentName:"li"},"store")," object in the updater."),(0,r.mdx)("li",{parentName:"ul"},"In this example updater, we do three things:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"First, we get the ID of the newly created Feedback object."),(0,r.mdx)("li",{parentName:"ul"},"Next, we call ",(0,r.mdx)("inlineCode",{parentName:"li"},"readUpdatableQuery_EXPERIMENTAL"),". We pass it a GraphQL query that has the ",(0,r.mdx)("inlineCode",{parentName:"li"},"@updatable")," directive and the query variables. This query defines the data that we wish to access and update."),(0,r.mdx)("li",{parentName:"ul"},"Next, we modify the value that was returned from ",(0,r.mdx)("inlineCode",{parentName:"li"},"readUpdatableQuery_EXPERIMENTAL"),". In this case, ",(0,r.mdx)("inlineCode",{parentName:"li"},"updatableData.node.is_new_comment = true")," calls a lower-level and older API (",(0,r.mdx)("inlineCode",{parentName:"li"},"proxy.setValue(...)"),") under the hood.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Note that in order to have ",(0,r.mdx)("inlineCode",{parentName:"li"},"updatableData.node.is_new_comment = true")," typecheck, we must refine the type of ",(0,r.mdx)("inlineCode",{parentName:"li"},"updatableData.node"),". We must check that it isn't optional, and that the typename matches what we expect. Otherwise, Flow will complain."))))),(0,r.mdx)("li",{parentName:"ul"},"Once this updater completes, the updates that have been recorded are written to the store, and all affected components are re-rendered.")),(0,r.mdx)("h2",{id:"example-2-updating-data-in-response-to-user-interactions"},"Example 2: Updating data in response to user interactions"),(0,r.mdx)("p",null,"Let's consider the common case of updating store data in response to a user interaction.  In a click handler, let's a toggle an ",(0,r.mdx)("inlineCode",{parentName:"p"},"is_selected")," field. This field is defined on Users in a client schema extension."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"# User.graphql\nextend type User {\n  is_selected: Boolean\n}\n")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import type {RecordSourceSelectorProxy} from 'react-relay';\nimport type {UserSelectToggle_user$fragmentType, UserSelectToggle_user} from 'UserSelectToggle_user.graphql';\nimport type {\n  UserSelectToggleUpdatableQuery,\n  UserSelectToggleUpdatableQuery$data,\n} from 'UserSelectToggleUpdatableQuery.graphql';\n\nconst {useRelayEnvironment, commitLocalUpdate} = require('react-relay');\n\nfunction UserSelectToggle({ userId, userRef }: {\n  userId: string,\n  userRef: UserSelectToggle_user$fragmentType,\n}) {\n  const data = useFragment<UserSelectToggle_user>(graphql`\n    fragment UserSelectToggle_user on User {\n      id @required(action: THROW)\n      name @required(action: THROW)\n      is_selected\n    }\n  `, userRef);\n\n  const environment = useRelayEnvironment();\n\n  return <button\n    onClick={() => {\n      commitLocalUpdate(\n        environment,\n        (store: RecordSourceSelectorProxy) => {\n          const updatableData: UserSelectToggleUpdatableQuery$data =\n            store.readUpdatableQuery_EXPERIMENTAL<UserSelectToggleUpdatableQuery>(\n            graphql`\n              query UserSelectToggleUpdatableQuery($id: ID!) @updatable {\n                node(id: $id) {\n                  ... on User {\n                    __typename\n                    is_selected\n                  }\n                }\n              }\n            `,\n            {id: data.id}\n          );\n\n          if (updatableData.node?.__typename === 'User') {\n            updatableData.node.is_selected = !data.is_selected;\n          }\n        }\n      );\n    }}\n  >\n    {data.is_selected ? 'Deselect' : 'Select'} {data.name}\n  </button>\n}\n")),(0,r.mdx)("p",null,"Let's distill what's going on here."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"In a click handler, we call ",(0,r.mdx)("inlineCode",{parentName:"li"},"commitLocalUpdate"),", which accepts a Relay environment and an updater function. ",(0,r.mdx)("strong",{parentName:"li"},"Unlike in the previous examples, this updater does not accept a second parameter")," because there is no associated network payload."),(0,r.mdx)("li",{parentName:"ul"},"In this updater function, we access get an updatable data object by calling ",(0,r.mdx)("inlineCode",{parentName:"li"},"store.readUpdatableQuery_EXPERIMENTAL"),", access the current user and toggle the ",(0,r.mdx)("inlineCode",{parentName:"li"},"is_selected")," field.")),(0,r.mdx)(d.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"If available, the auto-generated ",(0,r.mdx)("inlineCode",{parentName:"p"},"fetch__User")," field can make this example simpler.")))),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"This example can be rewritten using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"environment.commitPayload")," API, albeit without type safety."))),(0,r.mdx)(o.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);