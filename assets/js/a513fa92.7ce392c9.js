(self.webpackChunk=self.webpackChunk||[]).push([[44439],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var o=n(44256),a=n(67294);function r(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function i(e){var t=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),t)}var s=function(){var e=a.useState(!1),t=e[0],n=e[1],o=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return o(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return o(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:r},"Filing a task"))},c=function(){return a.createElement(i,null,a.createElement(l,null),a.createElement(s,null))},p=function(){return a.createElement(i,null,a.createElement(s,null))};const d=function(){return(0,o.fbContent)({internal:a.createElement(c,null),external:a.createElement(p,null)})}},91079:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>d,toc:()=>m,default:()=>h});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),i=n(68629),s=n(44256),l=["components"],c={id:"testing-relay-components",title:"Testing Relay Components",slug:"/guides/testing-relay-components/",description:"Relay guide to testing Relay components",keywords:["testing","createMockEnvironment","RelayMockEnvironment","MockPayloadGenerator","relay_test_operation","queuePendingOperation","resolver"]},p=void 0,d={unversionedId:"guides/testing-relay-components",id:"guides/testing-relay-components",isDocsHomePage:!1,title:"Testing Relay Components",description:"Relay guide to testing Relay components",source:"@site/docs/guides/testing-relay-components.md",sourceDirName:"guides",slug:"/guides/testing-relay-components/",permalink:"/docs/next/guides/testing-relay-components/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guides/testing-relay-components.md",version:"current",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1632251483,formattedLastUpdatedAt:"9/21/2021",frontMatter:{id:"testing-relay-components",title:"Testing Relay Components",slug:"/guides/testing-relay-components/",description:"Relay guide to testing Relay components",keywords:["testing","createMockEnvironment","RelayMockEnvironment","MockPayloadGenerator","relay_test_operation","queuePendingOperation","resolver"]},sidebar:"docs",previous:{title:"Client Schema Extensions",permalink:"/docs/next/guides/client-schema-extensions/"},next:{title:"Testing Relay with Preloaded Queries",permalink:"/docs/next/guides/testing-relay-with-preloaded-queries/"}},m=[{value:"Abstract",id:"abstract",children:[]},{value:"Testing with Relay",id:"testing-with-relay",children:[]},{value:"RelayMockEnvironment API Overview",id:"relaymockenvironment-api-overview",children:[]},{value:"Mock Payload Generator and the <code>@relay_test_operation</code> Directive",id:"mock-payload-generator-and-the-relay_test_operation-directive",children:[{value:"Mock Resolver Context",id:"mock-resolver-context",children:[]},{value:"ID Generation",id:"id-generation",children:[]},{value:"Float, Integer, Boolean, etc...",id:"float-integer-boolean-etc",children:[]},{value:"@relay_test_operation",id:"relay_test_operation",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Relay Component Test",id:"relay-component-test",children:[]},{value:"Fragment Component Tests",id:"fragment-component-tests",children:[]},{value:"Pagination Component Test",id:"pagination-component-test",children:[]},{value:"Refetch Component",id:"refetch-component",children:[]},{value:"Mutations",id:"mutations",children:[]},{value:"Subscription",id:"subscription",children:[]},{value:"Example with <code>queueOperationResolver</code>",id:"example-with-queueoperationresolver",children:[]},{value:"With Relay Hooks",id:"with-relay-hooks",children:[]},{value:"toMatchSnaphot(...)",id:"tomatchsnaphot",children:[]},{value:"More Examples",id:"more-examples",children:[]}]}],u={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"The purpose of this document is to cover the Relay APIs for testing Relay components."),(0,r.kt)("p",null,'The content is focused mostly on jest unit-tests (testing individual components) and integration tests (testing a combination of components).  But these testing tools may be applied in different cases: screenshot-tests, production smoke-tests, "Redbox" tests, fuzz-tests, e2e test, etc.'),(0,r.kt)("p",null,"What are the benefits of writing jest tests:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In general, it improves the stability of the system. Flow really helps with catching a various set of javascript errors, but it is still possible to introduce regressions to the components. Unit-tests may help to find, reproduce and fix those regressions, and prevent them in the future."),(0,r.kt)("li",{parentName:"ul"},"It simplifies refactoring process: when properly written (testing public interface, not implementation) - tests really helps with changing the internal implementation of the components."),(0,r.kt)("li",{parentName:"ul"},"It may speed up and improve the development workflow. Some people may call it Test Driven Development (TM). But essentially it's just writing tests for public interfaces of your components, and then writing the components that are implementing those interfaces. Jest \u2014watch mode is really shining in this case."),(0,r.kt)("li",{parentName:"ul"},"It will simplify the on-boarding process for new developers, having tests really help to ramp up on the new code base, fixing bugs, and delivering features.")),(0,r.kt)("p",null,'One thing to notice - while jest unit- and integration tests will help improve the stability of the system, they should be considered as a part of a bigger stability infrastructure with multiple layers of automated testing: flow, e2e, screenshot, "Redbox", performance tests.'),(0,r.kt)("h2",{id:"testing-with-relay"},"Testing with Relay"),(0,r.kt)("p",null,"Testing applications that are using Relay may be challenging, because of the additional data fetching layer that is wrapping the actual product code."),(0,r.kt)("p",null,"And it's not always easy to understand the mechanics of all processes that are happening behind Relay, and how to properly handle interactions with the framework."),(0,r.kt)("p",null,"Fortunately, there are tools that aim to simplify the process of writing tests for Relay components, by providing imperative APIs for controlling the request/response flow and additional API for mock data generation."),(0,r.kt)("p",null,"There are two main modules that you may using in your tests:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createMockEnvironment(options): RelayMockEnvironment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MockPayloadGenerator")," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"@relay_test_operation")," directive")),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"createMockEnvironment,")," you will be able to create an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"RelayMockEnvironment"),", a Relay environment specifically for your tests. The instance created by ",(0,r.kt)("inlineCode",{parentName:"p"},"createMockEnvironment")," is implementing the Relay Environment Interface and it also has an additional Mock layer, with methods that allow to resolve/reject and control the flow of operations (queries/mutations/subscriptions)."),(0,r.kt)("p",null,"The main purpose of ",(0,r.kt)("inlineCode",{parentName:"p"},"MockPayloadGenerator")," is to improve the process of creating and maintaining the mock data for tested components."),(0,r.kt)("p",null,"One of the patterns you may see in the tests for Relay components: 95% of the test code is the test preparation: the gigantic mock object with dummy data, manually created, or just a copy of a sample server response that needs to be passed as the network response. And rest 5% is actual test. As a result, people don't test much. It's hard to create and manage all these dummy payloads for different cases. Hence, writing tests are time-consuming and painful to maintain."),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"MockPayloadGenerator")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@relay_test_operation"),", we want to get rid of this pattern and switch the developer's focus from the preparation of the test to the actual testing."),(0,r.kt)("h2",{id:"relaymockenvironment-api-overview"},"RelayMockEnvironment API Overview"),(0,r.kt)("p",null,"RelayMockEnvironment is a special version of Relay Environment with additional API methods for controlling the operation flow: resolving and rejection operations, providing incremental payloads for subscriptions, working with the cache."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Methods for finding operations executed on the environment",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getAllOperations()")," - get all operation executed during the test by the current time"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"findOperation(findFn => boolean) "),"- find particular operation in the list of all executed operations, this method will throw, if operation is not available. Maybe useful to find a particular operation when multiple operations executed at the same time"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getMostRecentOperation() -")," return the most recent operation, this method will throw if no operations were executed prior this call."))),(0,r.kt)("li",{parentName:"ul"},"Methods for resolving or rejecting operations",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nextValue(request | operation, data)")," - provide payload for operation(request), but not complete request. Practically useful when testing incremental updates and subscriptions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"complete(request | operation)"),"  - complete the operation, no more payloads are expected for this operation, when it's completed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resolve(request | operation, data)")," - resolve the request with provided GraphQL response. Essentially, it's nextValue(...) and complete(...)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reject(request | operation, error)")," - reject the request with particular error"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resolveMostRecentOperation(operation => data)")," - resolve and getMostRecentOperation work together"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rejectMostRecentOperation(operation => error)"),"  - reject and getMostRecentOperation work together"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queueOperationResolver(operation => data | error)")," - adds an OperationResolver function to the queue. The passed resolver will be used to resolve/reject operations as they appear"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queuePendingOperation(query, variables)")," - in order for the ",(0,r.kt)("inlineCode",{parentName:"li"},"usePreloadedQuery")," hook to not suspend, one must call these functions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queueOperationResolver(resolver)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queuePendingOperation(query, variables)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preloadQuery(mockEnvironment, query, variables)")," with the same ",(0,r.kt)("inlineCode",{parentName:"li"},"query")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"variables")," that were passed to ",(0,r.kt)("inlineCode",{parentName:"li"},"queuePendingOperation"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"preloadQuery")," must be called after ",(0,r.kt)("inlineCode",{parentName:"li"},"queuePendingOperation"),"."))))),(0,r.kt)("li",{parentName:"ul"},"Additional utility methods",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isLoading(request | operation)")," - will return ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," if operations has not been completed, yet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cachePayload(request | operation, variables, payload)")," - will add payload to QueryResponse cache"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clearCache() "),"- will clear QueryResponse cache")))),(0,r.kt)("h2",{id:"mock-payload-generator-and-the-relay_test_operation-directive"},"Mock Payload Generator and the ",(0,r.kt)("inlineCode",{parentName:"h2"},"@relay_test_operation")," Directive"),(0,r.kt)("p",null,"MockPayloadGenerator may drastically simplify the process of creating and maintaining mock data for your tests. MockPayloadGenerator is the module that can generate dummy data for the selection that you have in your operation. There is an API to modify the generated data - Mock Resolvers. With Mock Resolvers, you may adjust the data for your needs. Collection of Mock Resolvers it's an object where ",(0,r.kt)("strong",{parentName:"p"},"keys are names of GraphQL types (ID, String, User, Feedback, Comment, etc),")," and values are functions which will return the default data for the type."),(0,r.kt)("p",null,"Example of a simple Mock Resolver:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  ID() {\n    // Return mock value for a scalar filed with type ID\n    return 'my-id';\n  },\n  String() {\n    // Every scalar field with type String will have this default value\n    return \"Lorem Ipsum\"\n  }\n}\n")),(0,r.kt)("p",null,"It is possible to define more resolvers for Object types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  // This will be the default values for User object in the query response\n  User() {\n    return {\n      id: 4,\n      name: "Mark",\n      profile_picture: {\n        uri: "http://my-image...",\n      },\n    };\n  },\n}\n')),(0,r.kt)("h3",{id:"mock-resolver-context"},"Mock Resolver Context"),(0,r.kt)("p",null,"The first argument of the MockResolver is the object that contains Mock Resolver Context. It is possible to return dynamic values from mock resolvers based on the context - for instance, name or alias of the field, a path in the selection, arguments, or parent type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  String(context) {\n    if (context.name === 'zip') {\n      return '94025';\n    }\n    if (context.path != null && context.path.join('.') === 'node.actor.name') {\n      return 'Current Actor Name';\n    }\n    if (context.parentType === 'Image' && context.name === 'uri') {\n       return 'http://my-image.url';\n    }\n  }\n}\n")),(0,r.kt)("h3",{id:"id-generation"},"ID Generation"),(0,r.kt)("p",null,"The second argument of the Mock Resolver its a function that will generate a sequence of integers, useful to generate unique ids in the tests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  // will generate strings "my-id-1", "my-id-2", etc.\n  ID(_, generateId) {\n     return `my-id-${generateId()}`;\n  },\n}\n')),(0,r.kt)("h3",{id:"float-integer-boolean-etc"},"Float, Integer, Boolean, etc..."),(0,r.kt)("p",null,"Please note, that for production queries we don't have full type information for Scalar fields - like Boolean, Integer, Float. And in the MockResolvers, they map to String. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," to adjust return values, based on the field name, alias, etc."),(0,r.kt)("h3",{id:"relay_test_operation"},"@relay_test_operation"),(0,r.kt)("p",null,"Most of GraphQL type information for a specific field in the selection is not available during Relay runtime. By default, Relay, cannot get type information for a scalar field in the selection, or an interface type of the object."),(0,r.kt)("p",null,"Operation with the @relay_test_operation directive will have additional metadata that will contain GraphQL type info for fields in the operation's selection. And it will improve the quality of the generated data. You also will be able to define Mock resolvers for Scalar (not only ID and String) and Abstract types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  Float() {\n    return 123.456;\n  },\n  Boolean(context) {\n    if (context.name === 'can_edit') {\n      return true;\n    }\n    return false;\n  },\n  Node() {\n    return {\n      __typename: 'User',\n      id: 'my-user-id',\n    };\n  }\n}\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"relay-component-test"},"Relay Component Test"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"createMockEnvironment")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MockPayloadGenerator")," allows writing concise tests for components that are using Relay hooks. Both those modules can be imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"relay-test-utils")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Say you have a component with the useLazyLoadQuery or a QueryRenderer\nconst MyAwesomeViewRoot = require('MyAwesomeViewRoot');\nconst {\n  createMockEnvironment,\n  MockPayloadGenerator,\n} = require('relay-test-utils');\n\n// Relay may trigger 3 different states\n// for this component: Loading, Error, Data Loaded\n// Here is examples of tests for those states.\ntest('Loading State', () => {\n  const environment = createMockEnvironment();\n  const renderer = ReactTestRenderer.create(\n    <MyAwesomeViewRoot environment={environment} />,\n  );\n\n  // Here we just verify that the spinner is rendered\n  expect(\n    renderer.root.find(node => node.props['data-testid'] === 'spinner'),\n  ).toBeDefined();\n});\n\ntest('Data Render', () => {\n  const environment = createMockEnvironment();\n  const renderer = ReactTestRenderer.create(\n    <MyAwesomeViewRoot environment={environment} />,\n  );\n\n  // Wrapping in ReactTestRenderer.act will ensure that components\n  // are fully updated to their final state.\n  ReactTestRenderer.act(() => {\n    environment.mock.resolveMostRecentOperation(operation =>\n      MockPayloadGenerator.generate(operation),\n    );\n  });\n\n  // At this point operation will be resolved\n  // and the data for a query will be available in the store\n  expect(\n    renderer.root.find(node => node.props['data-testid'] === 'myButton'),\n  ).toBeDefined();\n});\n\ntest('Error State', () => {\n  const environment = createMockEnvironment();\n  const renderer = ReactTestRenderer.create(\n    <MyAwesomeViewRoot environment={environment} />,\n  );\n\n  // Wrapping in ReactTestRenderer.act will ensure that components\n  // are fully updated to their final state.\n  ReactTestRenderer.act(() => {\n    // Error can be simulated with `rejectMostRecentOperation`\n    environment.mock.rejectMostRecentOperation(new Error('Uh-oh'));\n  });\n\n  expect(\n    renderer.root.find(item => (item.props.testID = 'errorMessage')),\n  ).toBeDefined();\n});\n")),(0,r.kt)("h3",{id:"fragment-component-tests"},"Fragment Component Tests"),(0,r.kt)("p",null,"Essentially, in the example above will ",(0,r.kt)("inlineCode",{parentName:"p"},"resolveMostRecentOperation")," will generate data for all child fragment containers (pagination, refetch). But, usually the root component may have many child fragment components and you may want to exercise a specific component that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"useFragment"),". The solution for that would be to wrap your fragment container with the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," component that renders a Query that's spreads fragments from your fragment component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'test(\'Fragment\', () => {\n  const environment = createMockEnvironment();\n  const TestRenderer = () => {\n    const data = useLazyLoadQuery(\n      graphql`\n        query TestQuery @relay_test_operation {\n          myData: node(id: "test-id") {\n            # Spread the fragment you want to test here\n            ...MyFragment\n          }\n        }\n      `,\n      {},\n    );\n    return <MyFragmentComponent myData={data.myData} />\n  };\n\n  const renderer = ReactTestRenderer.create(\n    <RelayEnvironmentProvider environment={environment}>\n      <Suspense fallback="Loading...">\n        <TestRenderer />\n      </Suspense>\n    </RelayEnvironmentProvider>\n  );\n\n  // Wrapping in ReactTestRenderer.act will ensure that components\n  // are fully updated to their final state.\n  ReactTestRenderer.act(() => {\n    environment.mock.resolveMostRecentOperation(operation =>\n      MockPayloadGenerator.generate(operation),\n    );\n  });\n\n  expect(renderer).toMatchSnapshot();\n});\n')),(0,r.kt)("h3",{id:"pagination-component-test"},"Pagination Component Test"),(0,r.kt)("p",null,"Essentially, tests for pagination components (e.g. using ",(0,r.kt)("inlineCode",{parentName:"p"},"usePaginationFragment"),") are not different from fragment component tests. But we can do more here, we can actually see how the pagination works - we can assert the behavior of our components when performing pagination (load more, refetch)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Pagination Example\ntest('`Pagination` Container', () => {\n  const environment = createMockEnvironment();\n  const TestRenderer = () => {\n    const data = useLazyLoadQuery(\n      graphql`\n        query TestQuery @relay_test_operation {\n          myConnection: node(id: \"test-id\") {\n            connection {\n              # Spread the pagination fragment you want to test here\n              ...MyConnectionFragment\n            }\n          }\n        }\n      `,\n      {},\n    );\n    return <MyPaginationContainer connection={data.myConnection.connection} />\n  };\n\n  const renderer = ReactTestRenderer.create(\n    <RelayEnvironmentProvider environment={environment}>\n      <Suspense fallback=\"Loading...\">\n        <TestRenderer />\n      </Suspense>\n    </RelayEnvironmentProvider>\n  );\n\n  // Wrapping in ReactTestRenderer.act will ensure that components\n  // are fully updated to their final state.\n  ReactTestRenderer.act(() => {\n    environment.mock.resolveMostRecentOperation(operation =>\n      MockPayloadGenerator.generate(operation, {\n        ID(_, generateId) {\n          // Why we're doing this?\n          // To make sure that we will generate a different set of ID\n          // for elements on first page and the second page.\n          return `first-page-id-${generateId()}`;\n        },\n        PageInfo() {\n          return {\n            has_next_page: true,\n          };\n        },\n      }),\n    );\n  });\n\n  // Let's find a `loadMore` button and click on it to initiate pagination request, for example\n  const loadMore = renderer.root.find(node => node.props['data-testid'] === 'loadMore')\n  expect(loadMore.props.disabled).toBe(false);\n  loadMore.props.onClick();\n\n  // Wrapping in ReactTestRenderer.act will ensure that components\n  // are fully updated to their final state.\n  ReactTestRenderer.act(() => {\n    environment.mock.resolveMostRecentOperation(operation =>\n      MockPayloadGenerator.`generate`(operation, {\n        ID(_, generateId) {\n          // See, the second page IDs will be different\n          return `second-page-id-${generateId()}`;\n        },\n        PageInfo() {\n          return {\n            // And the button should be disabled, now. Probably.\n            has_next_page: false,\n          };\n        },\n      }),\n    );\n  });\n\n  expect(loadMore.props.disabled).toBe(true);\n});\n")),(0,r.kt)("h3",{id:"refetch-component"},"Refetch Component"),(0,r.kt)("p",null,"We can use similar approach here with wrapping the component with a query. And for the sake of completeness, we will add example here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"test('Refetch Container', () => {\n  const environment = createMockEnvironment();\n  const TestRenderer = () => {\n    const data = useLazyLoadQuery(\n      graphql`\n        query TestQuery @relay_test_operation {\n          myData: node(id: \"test-id\") {\n            # Spread the pagination fragment you want to test here\n            ...MyRefetchableFragment\n          }\n        }\n      `,\n      {},\n    );\n    return <MyRefetchContainer data={data.myData} />\n  };\n\n  const renderer = ReactTestRenderer.create(\n    <RelayEnvironmentProvider environment={environment}>\n      <Suspense fallback=\"Loading...\">\n        <TestRenderer />\n      </Suspense>\n    </RelayEnvironmentProvider>\n  );\n\n  ReactTestRenderer.act(() => {\n    environment.mock.resolveMostRecentOperation(operation =>\n      MockPayloadGenerator.generate(operation),\n    );\n  });\n\n  // Assuming we have refetch button in the Container\n  const refetchButton = renderer.root.find(node => node.props['data-testid'] === 'refetch');\n\n  // This should trigger the `refetch`\n  refetchButton.props.onClick();\n\n  ReactTestRenderer.act(() => {\n    environment.mock.resolveMostRecentOperation(operation =>\n      MockPayloadGenerator.generate(operation, {\n        // We can customize mock resolvers, to change the output of the refetch query\n      }),\n    );\n  });\n\n  expect(renderer).toMatchSnapshot();\n});\n")),(0,r.kt)("h3",{id:"mutations"},"Mutations"),(0,r.kt)("p",null,"Mutations itself are operations so we can test them independently (unit-test) for specific mutation, or in combination with the view from which this mutation is called."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMutation")," API is an improvement over calling ",(0,r.kt)("inlineCode",{parentName:"p"},"commitMutation")," directly.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Say, you have a mutation function\nfunction sendMutation(environment, onCompleted, onError, variables)\n  commitMutation(environment, {\n    mutation: graphql`...`,\n    onCompleted,\n    onError,\n    variables,\n  });\n}\n\n// Example test may be written like so\ntest('it should send mutation', () => {\n  const environment = createMockEnvironment();\n  const onCompleted = jest.fn();\n  sendMutation(environment, onCompleted, jest.fn(), {});\n  const operation = environment.mock.getMostRecentOperation();\n\n  ReactTestRenderer.act(() => {\n    environment.mock.resolve(\n      operation,\n      MockPayloadGenerator.generate(operation)\n    );\n  });\n\n  expect(onCompleted).toBeCalled();\n});\n")),(0,r.kt)("h3",{id:"subscription"},"Subscription"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useSubscription")," API is an improvement over calling ",(0,r.kt)("inlineCode",{parentName:"p"},"requestSubscription")," directly.")),(0,r.kt)("p",null,"We can test subscriptions similarly to how we test mutations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Example subscribe function\nfunction subscribe(environment, onNext, onError, variables)\n  requestSubscription(environment, {\n    subscription: graphql`...`,\n    onNext,\n    onError,\n    variables,\n  });\n}\n\n// Example test may be written like so\ntest('it should subscribe', () => {\n  const environment = createMockEnvironment();\n  const onNext = jest.fn();\n  subscribe(environment, onNext, jest.fn(), {});\n  const operation = environment.mock.getMostRecentOperation();\n\n  ReactTestRenderer.act(() => {\n    environment.mock.nextValue(\n      operation,\n      MockPayloadGenerator.generate(operation)\n    );\n  });\n\n  expect(onNext).toBeCalled();\n});\n")),(0,r.kt)("h3",{id:"example-with-queueoperationresolver"},"Example with ",(0,r.kt)("inlineCode",{parentName:"h3"},"queueOperationResolver")),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"queueOperationResolver")," it possible to define responses for operations that will be executed on the environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Say you have a component with the QueryRenderer\nconst MyAwesomeViewRoot = require('MyAwesomeViewRoot');\nconst {\n  createMockEnvironment,\n  MockPayloadGenerator,\n} = require('relay-test-utils');\n\ntest('Data Render', () => {\n  const environment = createMockEnvironment();\n  environment.mock.queueOperationResolver(operation =>\n    MockPayloadGenerator.generate(operation),\n  );\n\n  const renderer = ReactTestRenderer.create(\n    <MyAwesomeViewRoot environment={environment} />,\n  );\n\n  // At this point operation will be resolved\n  // and the data for a query will be available in the store\n  expect(\n    renderer.root.find(node => node.props['data-testid'] === 'myButton'),\n  ).toBeDefined();\n});\n\ntest('Error State', () => {\n  const environment = createMockEnvironment();\n  environment.mock.queueOperationResolver(() =>\n    new Error('Uh-oh'),\n  );\n  const renderer = ReactTestRenderer.create(\n    <MyAwesomeViewRoot environment={environment} />,\n  );\n\n  expect(\n    renderer.root.find(item => (item.props.testID = 'errorMessage')),\n  ).toBeDefined();\n});\n")),(0,r.kt)("h3",{id:"with-relay-hooks"},"With Relay Hooks"),(0,r.kt)("p",null,"The examples in this guide should work for testing components both with Relay Hooks, Containers or Renderers. When writing tests that involve the ",(0,r.kt)("inlineCode",{parentName:"p"},"usePreloadedQuery")," hook, please also see the ",(0,r.kt)("inlineCode",{parentName:"p"},"queuePendingOperation")," note above."),(0,r.kt)("h3",{id:"tomatchsnaphot"},"toMatchSnaphot(...)"),(0,r.kt)("p",null,"Even though in all of the examples here you can see assertions with ",(0,r.kt)("inlineCode",{parentName:"p"},"toMatchSnapshot()"),", we keep it that way just to make examples concise. But it's not the recommended way to test your components."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://testing-library.com/react"},"React Testing Library")),' is a set of helpers that let you test React components without relying on their implementation details. This approach makes refactoring a breeze and also nudges you towards best practices for accessibility. Although it doesn\'t provide a way to "shallowly" render a component without its children, a test runner like Jest lets you do this by ',(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/testing-recipes.html#mocking-modules"},"mocking"),"."),(0,r.kt)("h3",{id:"more-examples"},"More Examples"),(0,r.kt)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,r.kt)("p",null,"As a reference implementation I've put working examples here:\n",(0,r.kt)("a",{parentName:"p",href:"https://phabricator.internmc.facebook.com/diffusion/FBS/browse/master/xplat/js/RKJSModules/Libraries/Relay/oss/relay-test-utils/__tests__/RelayMockEnvironmentWithComponents-test.js"},"https://phabricator.internmc.facebook.com/diffusion/FBS/browse/master/xplat/js/RKJSModules/Libraries/Relay/oss/relay-test-utils/__tests__/RelayMockEnvironmentWithComponents-test.js"))),(0,r.kt)(s.OssOnly,{mdxType:"OssOnly"},(0,r.kt)("p",null,"The best source of example tests is in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/relay/tree/main/packages/relay-experimental/__tests__"},"the relay-experimental package"),".")),(0,r.kt)("p",null,"Testing is good. You should definitely do it."),(0,r.kt)(i.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);