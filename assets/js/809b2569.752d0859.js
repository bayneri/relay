(self.webpackChunk=self.webpackChunk||[]).push([[5502],{3905:(e,n,r)=>{"use strict";r.r(n),r.d(n,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>s});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){return function(n){var r=p(n.components);return t.createElement(e,a({},n,{components:r}))}},p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},m=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},v=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,v=s["".concat(i,".").concat(m)]||s[m]||u[m]||a;return r?t.createElement(v,l(l({ref:n},c),{},{components:r})):t.createElement(v,l({ref:n},c))}));function h(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=v;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}v.displayName="MDXCreateElement"},98071:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>c,toc:()=>s,default:()=>m});var t=r(74034),o=r(79973),a=(r(67294),r(3905)),i=["components"],l={id:"relay-environment",title:"Relay Environment",original_id:"relay-environment"},d=void 0,c={unversionedId:"relay-environment",id:"version-v1.7.0/relay-environment",isDocsHomePage:!1,title:"Relay Environment",description:'The Relay "Environment" bundles together the configuration, cache storage, and network-handling that Relay needs in order to operate.',source:"@site/versioned_docs/version-v1.7.0/Modern-RelayEnvironment.md",sourceDirName:".",slug:"/relay-environment",permalink:"/docs/v1.7.0/relay-environment",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.7.0/Modern-RelayEnvironment.md",tags:[],version:"v1.7.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1653581437,formattedLastUpdatedAt:"5/26/2022",frontMatter:{id:"relay-environment",title:"Relay Environment",original_id:"relay-environment"},sidebar:"version-v1.7.0/docs",previous:{title:"GraphQL in Relay",permalink:"/docs/v1.7.0/graphql-in-relay"},next:{title:"Network Layer",permalink:"/docs/v1.7.0/network-layer"}},s=[{value:"A simple example",id:"a-simple-example",children:[],level:2},{value:"Adding a <code>handlerProvider</code>",id:"adding-a-handlerprovider",children:[],level:2}],p={toc:s};function m(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,'The Relay "Environment" bundles together the configuration, cache storage, and network-handling that Relay needs in order to operate.'),(0,a.mdx)("p",null,"Most applications will create a single Environment instance and use it throughout. In specific situations, however, you may want to create multiple environments for different purposes. For example, you may create a new environment instance whenever the user logs in or out in order to prevent data for different users being cached together. Similarly, a server rendered application may create a new environment instance per request, so that each request gets its own cache and user data does not overlap. Alternatively, you might have multiple products or features within a larger application, and you want each one to have product-specific network-handling or caching."),(0,a.mdx)("h2",{id:"a-simple-example"},"A simple example"),(0,a.mdx)("p",null,"To create an environment instance in Relay Modern, use the ",(0,a.mdx)("inlineCode",{parentName:"p"},"RelayModernEnvironment")," class:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"const {\n  Environment,\n  Network,\n  RecordSource,\n  Store,\n} = require('relay-runtime');\n\nconst source = new RecordSource();\nconst store = new Store(source);\nconst network = Network.create(/*...*/); // see note below\nconst handlerProvider = null;\n\nconst environment = new Environment({\n  handlerProvider, // Can omit.\n  network,\n  store,\n});\n")),(0,a.mdx)("p",null,"For more details on creating a Network, see the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/v1.7.0/network-layer"},"NetworkLayer guide"),"."),(0,a.mdx)("p",null,"Once you have an environment, you can pass it in to your ",(0,a.mdx)("a",{parentName:"p",href:"/docs/v1.7.0/query-renderer"},(0,a.mdx)("inlineCode",{parentName:"a"},"QueryRenderer"))," instance, or into mutations via the ",(0,a.mdx)("inlineCode",{parentName:"p"},"commitUpdate"),' function (see "',(0,a.mdx)("a",{parentName:"p",href:"/docs/v1.7.0/mutations"},"Mutations"),'").'),(0,a.mdx)("h2",{id:"adding-a-handlerprovider"},"Adding a ",(0,a.mdx)("inlineCode",{parentName:"h2"},"handlerProvider")),(0,a.mdx)("p",null,"The example above did not configure a ",(0,a.mdx)("inlineCode",{parentName:"p"},"handlerProvider"),", which means that a default one will be provided. Relay Modern comes with a couple of built-in handlers that augment the core with special functionality for handling connections (which is not a standard GraphQL feature, but a set of pagination conventions used at Facebook, specified in detail in the ",(0,a.mdx)("a",{parentName:"p",href:"https://facebook.github.io/relay/graphql/connections.htm"},"Relay Cursor Connections Specification"),", and well-supported by Relay itself) and the ",(0,a.mdx)("inlineCode",{parentName:"p"},"viewer")," field (again, not a standard GraphQL schema feature, but one which has been conventionally used extensively within Facebook)."),(0,a.mdx)("p",null,"If you wish to provide your own ",(0,a.mdx)("inlineCode",{parentName:"p"},"handlerProvider"),", you can do so:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"const {\n  ConnectionHandler,\n  ViewerHandler,\n} = require('relay-runtime');\n\nfunction handlerProvider(handle) {\n  switch (handle) {\n    // Augment (or remove from) this list:\n    case 'connection': return ConnectionHandler;\n    case 'viewer': return ViewerHandler;\n  }\n  throw new Error(\n    `handlerProvider: No handler provided for ${handle}`\n  );\n}\n")))}m.isMDXComponent=!0}}]);