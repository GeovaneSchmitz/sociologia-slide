(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{157:function(e,t,n){e.exports={N:"F",x:"m",e:"x",a:"N",f:"H",R:"w",Z:"l",C:"o",E:"h",D:"G",H:"r",V:"a"}},164:function(e,t,n){"use strict";var r=n(157),l=n.n(r);n.d(t,"default",(function(){return l.a}))},169:function(e,t,n){"use strict";n.r(t);var r=n(15),l=Object(r.a)({setup(e){var t=Object(r.f)(!1),n=!1,l=Object(r.f)(),c=Object(r.f)(),o=Object(r.f)(!1),f=Object(r.f)(!1),{getters:d}=Object(r.h)();Object(r.i)((()=>d["slide/currentBreakpoint"]),(e=>{e&&(t.value="cover"!==e.id,o.value=t.value&&"capa"!==e.id&&"fim"!==e.id,f.value="fim"===e.id,"cover"===e.id||"capa"===e.id?v():n=!1)}));var v=()=>{if(!n){n=!0;var e=0,t=0,r=()=>{if(n){if(15!=++t)return window.requestAnimationFrame(r);t=0,(e+=33.333333333333336)>100&&(e=0),l.value.style.backgroundPosition="".concat(e,"% ").concat(e,"%"),window.requestAnimationFrame(r)}};window.requestAnimationFrame(r)}};return v(),{backgroundElement:l,foiceElement:c,showCover:t,isSmall:o,isEnd:f}}}),c=n(164),o=n(21);var component=Object(o.a)(l,(function(){var e,t,n,r=this,l=r.$createElement,c=r._self._c||l;return c("div",[c("div",{ref:"backgroundElement",class:r.$style.N}),c("div",{class:[r.$style.a,(e={},e[r.$style.f]=r.isSmall,e[r.$style.D]=r.isEnd,e)]},[c("div",{ref:"marteloElement",class:(t={},t[r.$style.e]=r.showCover,t)}),c("div",{ref:"foiceElement",class:(n={},n[r.$style.x]=r.showCover,n)})])])}),[],!1,(function(e){this.$style=c.default.locals||c.default}),null,null);t.default=component.exports}}]);