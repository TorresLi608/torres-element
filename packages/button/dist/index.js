var e={name:"LgButton",methods:{handleClick(e){this.$emit("click",e),e.preventDefault()}}};function n(e,n,t,o,s,i,a,d,r,c){"boolean"!=typeof a&&(r=d,d=a,a=!1);const l="function"==typeof t?t.options:t;let m;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,s&&(l.functional=!0)),o&&(l._scopeId=o),i?(m=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,r(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=m):n&&(m=a?function(e){n.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,d(e))}),m)if(l.functional){const e=l.render;l.render=function(n,t){return m.call(t),e(n,t)}}else{const e=l.beforeCreate;l.beforeCreate=e?[].concat(e,m):[m]}return t}const t="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(e){return(e,n)=>function(e,n){const o=t?n.media||"default":e,a=i[o]||(i[o]={ids:new Set,styles:[]});if(!a.ids.has(e)){a.ids.add(e);let t=n.source;if(n.map&&(t+="\n/*# sourceURL="+n.map.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),a.element||(a.element=document.createElement("style"),a.element.type="text/css",n.media&&a.element.setAttribute("media",n.media),void 0===s&&(s=document.head||document.getElementsByTagName("head")[0]),s.appendChild(a.element)),"styleSheet"in a.element)a.styles.push(t),a.element.styleSheet.cssText=a.styles.filter(Boolean).join("\n");else{const e=a.ids.size-1,n=document.createTextNode(t),o=a.element.childNodes;o[e]&&a.element.removeChild(o[e]),o.length?a.element.insertBefore(n,o[e]):a.element.appendChild(n)}}}(e,n)}let s;const i={};const a=e;var d=function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("button",{on:{click:this.handleClick}},[this._t("default")],2)])};d._withStripped=!0;const r=n({render:d,staticRenderFns:[]},(function(e){e&&e("data-v-b85f0406_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"button.vue"},media:void 0})}),a,void 0,!1,void 0,!1,o,void 0,void 0);r.install=e=>{e.component(r.name,r)};export{r as default};
