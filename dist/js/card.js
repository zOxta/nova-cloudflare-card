!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e,t,n,s,o,r){var c,a=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(c=e,a=e.default);var i,u="function"==typeof a?a.options:a;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o),r?(i=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=i):s&&(i=s),i){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=i,u.render=function(e,t){return i.call(t),f(e,t)}):u.beforeCreate=f?[].concat(f,i):[i]}return{esModule:c,exports:a,options:u}}},function(e,t,n){n(2),e.exports=n(9)},function(e,t,n){Nova.booting(function(e,t){e.component("cloudflare-cache-purge",n(3)),e.component("nova-cloudflare-card",n(6))})},function(e,t,n){var s=n(0)(n(4),n(5),!1,null,null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{handleClose:function(){this.$emit("close")},handleConfirm:function(){this.$emit("confirm")}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("modal",{on:{"modal-close":e.handleClose}},[n("div",{staticClass:"bg-white rounded-lg shadow-lg overflow-hidden",staticStyle:{"max-width":"600px"}},[n("div",{staticClass:"p-8"},[n("heading",{staticClass:"mb-6",attrs:{level:2}},[e._v(e._s(e.__("Purge Cloudflare's Cache")))]),e._v(" "),n("p",{staticClass:"text-80"},[e._v(e._s(e.__("This will clear ALL cached files on Cloudflare to force Cloudflare to fetch a fresh version of those files from your web server.")))]),e._v(" "),n("br"),e._v(" "),n("p",{staticClass:"text-80"},[e._v(e._s(e.__("Usually needed to bust Cloudflare's cache when you are actively updating cached resources.")))])],1),e._v(" "),n("div",{staticClass:"bg-30 px-6 py-3 flex"},[n("div",{staticClass:"ml-auto"},[n("button",{staticClass:"btn text-80 font-normal h-9 px-3 mr-3 btn-link",attrs:{type:"button","data-testid":"cancel-button"},on:{click:function(t){return t.preventDefault(),e.handleClose(t)}}},[e._v(e._s(e.__("Cancel")))]),e._v(" "),n("button",{ref:"confirmButton",staticClass:"btn btn-default btn-danger",attrs:{"data-testid":"confirm-button"},on:{click:function(t){return t.preventDefault(),e.handleConfirm(t)}}},[e._v(e._s(e.__("Purge Everything")))])])])])])},staticRenderFns:[]}},function(e,t,n){var s=n(0)(n(7),n(8),!1,null,null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["card"],data:function(){return{isModalOpen:!1}},methods:{onCachePurge:function(){var e=this;Nova.request().delete("/nova-vendor/nova-cloudflare-card/cache-purge").then(function(t){t.data.success?e.showSuccessMessage():e.showFailureMessage(t.data.message)}),this.isModalOpen=!1},showSuccessMessage:function(){this.$toasted.show(this.__("Successfully purged everything cached on CloudFlare!"),{type:"success"})},showFailureMessage:function(e){this.$toasted.show(e||this.__("Could not purge cache on CloudFlare!"),{type:"error"})}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("card",{staticClass:"flex items-center justify-center"},[n("div",{staticClass:"flex-1 pl-8 pr-3"},[n("svg",{attrs:{viewBox:"4 0 102 40",width:"105px",height:"41px"}},[n("path",{attrs:{fill:"#fff",d:"M98.6 14.2L93 12.9l-1-.4-25.7.2v12.4l32.3.1z"}}),n("path",{attrs:{fill:"#f38020",d:"M88.1 24c.3-1 .2-2-.3-2.6-.5-.6-1.2-1-2.1-1.1l-17.4-.2c-.1 0-.2-.1-.3-.1-.1-.1-.1-.2 0-.3.1-.2.2-.3.4-.3l17.5-.2c2.1-.1 4.3-1.8 5.1-3.8l1-2.6c0-.1.1-.2 0-.3-1.1-5.1-5.7-8.9-11.1-8.9-5 0-9.3 3.2-10.8 7.7-1-.7-2.2-1.1-3.6-1-2.4.2-4.3 2.2-4.6 4.6-.1.6 0 1.2.1 1.8-3.9.1-7.1 3.3-7.1 7.3 0 .4 0 .7.1 1.1 0 .2.2.3.3.3h32.1c.2 0 .4-.1.4-.3l.3-1.1z"}}),n("path",{attrs:{fill:"#fbae40",d:"M93.6 12.8h-.5c-.1 0-.2.1-.3.2l-.7 2.4c-.3 1-.2 2 .3 2.6.5.6 1.2 1 2.1 1.1l3.7.2c.1 0 .2.1.3.1.1.1.1.2 0 .3-.1.2-.2.3-.4.3l-3.8.2c-2.1.1-4.3 1.8-5.1 3.8l-.2.9c-.1.1 0 .3.2.3h13.2c.2 0 .3-.1.3-.3.2-.8.4-1.7.4-2.6 0-5.2-4.3-9.5-9.5-9.5"}}),n("path",{attrs:{fill:"#404242",d:"M104.4 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9m0-1.6c-.4 0-.7.3-.7.7 0 .4.3.7.7.7.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7m.4 1.2h-.2l-.2-.3h-.2v.3h-.2v-.9h.5c.2 0 .3.1.3.3 0 .1-.1.2-.2.3l.2.3zm-.3-.5c.1 0 .1 0 .1-.1s-.1-.1-.1-.1h-.3v.3h.3zM14.8 29H17v6h3.8v1.9h-6zM23.1 32.9c0-2.3 1.8-4.1 4.3-4.1s4.2 1.8 4.2 4.1-1.8 4.1-4.3 4.1c-2.4 0-4.2-1.8-4.2-4.1m6.3 0c0-1.2-.8-2.2-2-2.2s-2 1-2 2.1.8 2.1 2 2.1c1.2.2 2-.8 2-2M34.3 33.4V29h2.2v4.4c0 1.1.6 1.7 1.5 1.7s1.5-.5 1.5-1.6V29h2.2v4.4c0 2.6-1.5 3.7-3.7 3.7-2.3-.1-3.7-1.2-3.7-3.7M45 29h3.1c2.8 0 4.5 1.6 4.5 3.9s-1.7 4-4.5 4h-3V29zm3.1 5.9c1.3 0 2.2-.7 2.2-2s-.9-2-2.2-2h-.9v4h.9zM55.7 29H62v1.9h-4.1v1.3h3.7V34h-3.7v2.9h-2.2zM65.1 29h2.2v6h3.8v1.9h-6zM76.8 28.9H79l3.4 8H80l-.6-1.4h-3.1l-.6 1.4h-2.3l3.4-8zm2 4.9l-.9-2.2-.9 2.2h1.8zM85.2 29h3.7c1.2 0 2 .3 2.6.9.5.5.7 1.1.7 1.8 0 1.2-.6 2-1.6 2.4l1.9 2.8H90l-1.6-2.4h-1v2.4h-2.2V29zm3.6 3.8c.7 0 1.2-.4 1.2-.9 0-.6-.5-.9-1.2-.9h-1.4v1.9h1.4zM95.3 29h6.4v1.8h-4.2V32h3.8v1.8h-3.8V35h4.3v1.9h-6.5zM10 33.9c-.3.7-1 1.2-1.8 1.2-1.2 0-2-1-2-2.1s.8-2.1 2-2.1c.9 0 1.6.6 1.9 1.3h2.3c-.4-1.9-2-3.3-4.2-3.3-2.4 0-4.3 1.8-4.3 4.1s1.8 4.1 4.2 4.1c2.1 0 3.7-1.4 4.2-3.2H10z"}})])]),e._v(" "),n("div",{staticClass:"flex-2 pr-8 pl-3 text-right"},[n("div",{staticClass:"flex flex-col"},[n("button",{staticClass:"btn btn-default btn-danger",on:{click:function(t){e.isModalOpen=!0}}},[e._v("\n                Purge Cache\n            ")])])]),e._v(" "),n("portal",{attrs:{to:"modals"}},[n("transition",{attrs:{name:"fade"}},[e.isModalOpen?n("cloudflare-cache-purge",{on:{confirm:function(t){e.onCachePurge()},close:function(t){e.isModalOpen=!1}}}):e._e()],1)],1)],1)},staticRenderFns:[]}},function(e,t){}]);