(self.webpackChunksupersite_dx=self.webpackChunksupersite_dx||[]).push([[672],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,l){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),l=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},5441:function(e,t,r){"use strict";var n=r(7294),o=r(5444);t.Z=function(e){var t=e.children,r=(0,o.K2)("3159585216");return n.createElement(n.Fragment,null,n.createElement("div",{className:"flex flex-col min-h-screen bg-gray-200 dark:bg-gray-600"},n.createElement("title",null,r.site.siteMetadata.title),n.createElement("header",{className:"p-4  bg-gray-500 dark:bg-gray-800 text-white font-semibold"},n.createElement("div",{className:"flex justify-start"},n.createElement("h1",{className:"max-1w-2xl mx-4 text-green-300"},n.createElement(o.rU,{to:"/"},"Ben Wallen")),n.createElement("h1",{className:"max-w-2xl mx-3"},n.createElement(o.rU,{to:"/about"},"About")),n.createElement("h1",{className:"max-w-2xl mx-3"},n.createElement(o.rU,{to:"/blog/"},"Blog")),n.createElement("h1",{className:"max-w-2xl mx-3"},n.createElement(o.rU,{to:"/projects"},"Projects")),n.createElement("h1",{className:"max-w-2xl mx-3"},n.createElement(o.rU,{to:"/resume"},"Resume")))),t))}},1971:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(6725),a=r(5441);t.default=function(e){var t=e.data;return n.createElement(a.Z,null,n.createElement("main",{className:"max-w-4xl flex-grow mx-auto flex flex-col justify-around"},n.createElement("div",{className:"sm:flex sm:flex-row-reverse sm:items-center"},n.createElement("div",{className:"sm:px-2"},n.createElement("p",null,t.mdx.frontmatter.date),n.createElement(o.MDXRenderer,null,t.mdx.body)))))}},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),l=r(7316),s=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(7294),i=r(4983).mdx,f=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,s),c=f(t),x=p.useMemo((function(){if(!r)return null;var e=u({React:p,mdx:i},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return p.createElement(x,u({},a))}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-slug-tsx-7e2e20a6469b2f07aff0.js.map