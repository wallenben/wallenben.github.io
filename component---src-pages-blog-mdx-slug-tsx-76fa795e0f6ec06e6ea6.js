(self.webpackChunksupersite_dx=self.webpackChunksupersite_dx||[]).push([[672],{7733:function(e,t,r){var n=r(8977);e.exports={MDXRenderer:n}},8977:function(e,t,r){var n=r(6191),o=r(1309),a=r(4176),l=r(3246),s=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),p=r(4983).mdx,f=r(2473).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,s),c=f(t),x=i.useMemo((function(){if(!r)return null;var e=u({React:i,mdx:p},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return i.createElement(x,u({},a))}},4875:function(e,t,r){"use strict";var n=r(7294),o=r(1597);t.Z=function(e){var t=e.children,r=(0,o.K2)("3159585216");return n.createElement(n.Fragment,null,n.createElement("div",{className:"flex flex-col min-h-screen bg-gray-200 dark:bg-gray-600"},n.createElement("title",null,r.site.siteMetadata.title),n.createElement("header",{className:"p-4  bg-gray-500 dark:bg-gray-800 text-white font-semibold"},n.createElement("div",{className:"flex justify-start"},n.createElement("h1",{className:"max-1w-2xl mx-4 text-green-300 animate-pulse"},n.createElement(o.rU,{to:"/"},"Ben Wallen")),n.createElement("h1",{className:"max-w-2xl mx-3"},n.createElement(o.rU,{to:"/blog/"},"Blog")),n.createElement("h1",{className:"max-w-2xl mx-3"},n.createElement(o.rU,{to:"/projects"},"Projects")),n.createElement("h1",{className:"max-w-2xl mx-3"},n.createElement(o.rU,{to:"/resume"},"Resume")))),t))}},2912:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(7733),a=r(4875);t.default=function(e){var t=e.data;return n.createElement(a.Z,null,n.createElement("main",{className:"max-w-4xl flex-grow  mx-auto flex flex-col justify-around bg-gray-50 dark:bg-gray-700 text-green-600 dark:text-green-300 rounded-xl p-6 m-3"},n.createElement("div",{className:"flex-grow 0"},n.createElement("h1",null,t.mdx.frontmatter.title),n.createElement("h3",{className:"text-sm text-green-400"},t.mdx.frontmatter.date),n.createElement("br",null),n.createElement("div",{className:"  sm:items-center text-gray-700 dark:text-white flex-grow "},n.createElement("div",{className:"sm:px-7"},n.createElement(o.MDXRenderer,null,t.mdx.body))))))}},6322:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},2771:function(e,t,r){var n=r(6322);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},6191:function(e,t,r){var n=r(4675),o=r(5460);function a(t,r,l){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},4176:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},5460:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},1840:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9439:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},1309:function(e,t,r){var n=r(2771),o=r(1840),a=r(4866),l=r(9439);e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},4866:function(e,t,r){var n=r(6322);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-slug-tsx-76fa795e0f6ec06e6ea6.js.map