(()=>{var e={};e.id=308,e.ids=[308],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2285:(e,t,o)=>{"use strict";o.r(t),o.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>l,pages:()=>u,routeModule:()=>f,tree:()=>s}),o(9905),o(1506),o(6560);var r=o(3191),n=o(8716),a=o(7922),i=o.n(a),c=o(5231),d={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>c[e]);o.d(t,d);let s=["",{children:["blog",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(o.bind(o,9905)),"/workspaces/portfolio/app/blog/[slug]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(o.bind(o,1506)),"/workspaces/portfolio/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(o.bind(o,6560)),"/workspaces/portfolio/app/not-found.tsx"]}],u=["/workspaces/portfolio/app/blog/[slug]/page.tsx"],l="/blog/[slug]/page",p={require:o,loadChunk:()=>Promise.resolve()},f=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/blog/[slug]/page",pathname:"/blog/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:s}})},6312:(e,t,o)=>{Promise.resolve().then(o.t.bind(o,2994,23)),Promise.resolve().then(o.t.bind(o,6114,23)),Promise.resolve().then(o.t.bind(o,9727,23)),Promise.resolve().then(o.t.bind(o,9671,23)),Promise.resolve().then(o.t.bind(o,1868,23)),Promise.resolve().then(o.t.bind(o,4759,23))},8008:()=>{},5303:()=>{},9905:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c,generateMetadata:()=>i,generateStaticParams:()=>a});var r=o(9510),n=o(8585);async function a(){return Object(function(){var e=Error("Cannot find module '@/app/utils'");throw e.code="MODULE_NOT_FOUND",e}())(["src","app","blog","posts"]).map(e=>({slug:e.slug}))}function i({params:e}){let t=Object(function(){var e=Error("Cannot find module '@/app/utils'");throw e.code="MODULE_NOT_FOUND",e}())(["src","app","blog","posts"]).find(t=>t.slug===e.slug);if(!t)return;let{title:o,publishedAt:r,summary:n,image:a}=t.metadata,i=a?`https://${Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}())}${a}`:`https://${Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}())}/og?title=${o}`;return{title:o,description:n,openGraph:{title:o,description:n,type:"article",publishedTime:r,url:`https://${Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}())}/blog/${t.slug}`,images:[{url:i}]},twitter:{card:"summary_large_image",title:o,description:n,images:[i]}}}function c({params:e}){let t=Object(function(){var e=Error("Cannot find module '@/app/utils'");throw e.code="MODULE_NOT_FOUND",e}())(["src","app","blog","posts"]).find(t=>t.slug===e.slug);return t||(0,n.notFound)(),(0,r.jsxs)(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{as:"section",fillWidth:!0,maxWidth:"xs",direction:"column",gap:"m",children:[r.jsx("script",{type:"application/ld+json",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting",headline:t.metadata.title,datePublished:t.metadata.publishedAt,dateModified:t.metadata.publishedAt,description:t.metadata.summary,image:t.metadata.image?`https://${Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}())}${t.metadata.image}`:`https://${Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}())}/og?title=${t.metadata.title}`,url:`https://${Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}())}/blog/${t.slug}`,author:{"@type":"Person",name:Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).name}})}}),r.jsx(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{href:"/blog",variant:"tertiary",size:"s",prefixIcon:"chevronLeft",children:"Posts"}),r.jsx(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{variant:"display-strong-s",children:t.metadata.title}),(0,r.jsxs)(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{gap:"12",alignItems:"center",children:[Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).avatar&&r.jsx(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{size:"s",src:Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).avatar}),r.jsx(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{variant:"body-default-s",onBackground:"neutral-weak",children:Object(function(){var e=Error("Cannot find module '@/app/utils'");throw e.code="MODULE_NOT_FOUND",e}())(t.metadata.publishedAt)})]}),r.jsx(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{as:"article",direction:"column",fillWidth:!0,children:r.jsx(Object(function(){var e=Error("Cannot find module '@/app/components/mdx'");throw e.code="MODULE_NOT_FOUND",e}()),{source:t.content})})]})}(function(){var e=Error("Cannot find module '@/app/components/mdx'");throw e.code="MODULE_NOT_FOUND",e})(),function(){var e=Error("Cannot find module '@/app/utils'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()},1506:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>f,metadata:()=>u});var r=o(9510),n=o(3889),a=o.n(n),i=o(6760),c=o.n(i);(function(){var e=Error("Cannot find module '@/once-ui/styles/index.scss'");throw e.code="MODULE_NOT_FOUND",e})(),function(){var e=Error("Cannot find module '@/once-ui/tokens/index.scss'");throw e.code="MODULE_NOT_FOUND",e}();var d=o(7815),s=o.n(d);(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e})(),function(){var e=Error("Cannot find module '@/app/components'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}();let u={metadataBase:new URL("https://"+Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}())),title:Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).title,description:Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).description,openGraph:{title:`${Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).firstName}'s Portfolio`,description:"Portfolio website showcasing my work.",url:Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()),siteName:`${Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).firstName}'s Portfolio`,locale:"en_US",type:"website"},robots:{index:!0,follow:!0,googleBot:{index:!0,follow:!0,"max-video-preview":-1,"max-image-preview":"large","max-snippet":-1}}},l=void 0,p=void 0;function f({children:e}){return r.jsx(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{as:"html",lang:"en",background:"page","data-neutral":Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).neutral,"data-brand":Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).brand,"data-accent":Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).accent,"data-solid":Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).solid,"data-solid-style":Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).solidStyle,"data-theme":Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).theme,"data-border":Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).border,"data-surface":Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).surface,"data-transition":Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).transition,className:s()(a().variable,l?l.variable:"",p?p.variable:"",c().variable),children:(0,r.jsxs)(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{style:{minHeight:"100vh"},as:"body",fillWidth:!0,margin:"0",padding:"0",direction:"column",children:[r.jsx(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{gradient:Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).gradient,dots:Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).dots,lines:Object(function(){var e=Error("Cannot find module '@/app/resources'");throw e.code="MODULE_NOT_FOUND",e}()).lines}),r.jsx(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{fillWidth:!0,minHeight:"16"}),r.jsx(Object(function(){var e=Error("Cannot find module '@/app/components'");throw e.code="MODULE_NOT_FOUND",e}()),{}),r.jsx(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{zIndex:0,fillWidth:!0,paddingY:"l",paddingX:"l",justifyContent:"center",flex:1,children:r.jsx(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{justifyContent:"center",fillWidth:!0,minHeight:"0",children:r.jsx(Object(function(){var e=Error("Cannot find module '@/app/components'");throw e.code="MODULE_NOT_FOUND",e}()),{children:e})})}),r.jsx(Object(function(){var e=Error("Cannot find module '@/app/components'");throw e.code="MODULE_NOT_FOUND",e}()),{})]})})}},6560:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n});var r=o(9510);function n(){return(0,r.jsxs)(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{as:"section",direction:"column",alignItems:"center",children:[r.jsx(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{marginBottom:"s",variant:"display-strong-xl",children:"404"}),r.jsx(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{marginBottom:"l",variant:"display-strong-xs",children:"Page Not Found"}),r.jsx(Object(function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()),{onBackground:"neutral-weak",children:"The page you are looking for does not exist."})]})}!function(){var e=Error("Cannot find module '@/once-ui/components'");throw e.code="MODULE_NOT_FOUND",e}()},8585:(e,t,o)=>{"use strict";var r=o(1085);o.o(r,"notFound")&&o.d(t,{notFound:function(){return r.notFound}})},1085:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var o in t)Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}(t,{ReadonlyURLSearchParams:function(){return i},RedirectType:function(){return r.RedirectType},notFound:function(){return n.notFound},permanentRedirect:function(){return r.permanentRedirect},redirect:function(){return r.redirect}});let r=o(3953),n=o(6399);class a extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class i extends URLSearchParams{append(){throw new a}delete(){throw new a}set(){throw new a}sort(){throw new a}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var o in t)Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}(t,{isNotFoundError:function(){return n},notFound:function(){return r}});let o="NEXT_NOT_FOUND";function r(){let e=Error(o);throw e.digest=o,e}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===o}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8586:(e,t)=>{"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return o}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(o||(o={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3953:(e,t,o)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var o in t)Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}(t,{RedirectType:function(){return r},getRedirectError:function(){return d},getRedirectStatusCodeFromError:function(){return O},getRedirectTypeFromError:function(){return f},getURLFromRedirectError:function(){return p},isRedirectError:function(){return l},permanentRedirect:function(){return u},redirect:function(){return s}});let n=o(4580),a=o(2934),i=o(8586),c="NEXT_REDIRECT";function d(e,t,o){void 0===o&&(o=i.RedirectStatusCode.TemporaryRedirect);let r=Error(c);r.digest=c+";"+t+";"+e+";"+o+";";let a=n.requestAsyncStorage.getStore();return a&&(r.mutableCookies=a.mutableCookies),r}function s(e,t){void 0===t&&(t="replace");let o=a.actionAsyncStorage.getStore();throw d(e,t,(null==o?void 0:o.isAction)?i.RedirectStatusCode.SeeOther:i.RedirectStatusCode.TemporaryRedirect)}function u(e,t){void 0===t&&(t="replace");let o=a.actionAsyncStorage.getStore();throw d(e,t,(null==o?void 0:o.isAction)?i.RedirectStatusCode.SeeOther:i.RedirectStatusCode.PermanentRedirect)}function l(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,o,r,n]=e.digest.split(";",4),a=Number(n);return t===c&&("replace"===o||"push"===o)&&"string"==typeof r&&!isNaN(a)&&a in i.RedirectStatusCode}function p(e){return l(e)?e.digest.split(";",3)[2]:null}function f(e){if(!l(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function O(e){if(!l(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}};var t=require("../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),r=t.X(0,[948,411],()=>o(2285));module.exports=r})();