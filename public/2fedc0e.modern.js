(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3,6,7],{154:function(e,t,r){e.exports={m:"W",n:"f",u:"y"}},155:function(e,t,r){e.exports={R:"O"}},156:function(e,t,r){e.exports={Y:"B",S:"D",X:"s",T:"q",GEnterActive:"g-enter-active",GLeaveActive:"g-leave-active",GEnter:"g-enter",GLeaveTo:"g-leave-to"}},157:function(e,t,r){e.exports={N:"F",x:"m",e:"x",a:"N",f:"H",R:"w",Z:"l",C:"o",E:"h",D:"G",H:"r",V:"a"}},158:function(e,t,r){e.exports={C:"k",J:"n",W:"S",O:"z",v:"A",c:"V",presentation:"i"}},160:function(e,t,r){"use strict";var n=r(154),l=r.n(n);r.d(t,"default",(function(){return l.a}))},161:function(e,t,r){"use strict";r.r(t);var n=r(3),l=r(15),c=Object(l.a)({props:{text:{type:String,required:!0},speed:{type:Number,default:100},withErrors:{type:Boolean,required:!1,default:!1}},setup(e,t){var{emit:r}=t,c=e=>new Promise((t=>setTimeout(t,e))),o=()=>Math.floor(Math.random()*e.speed),f=Object(l.f)(""),v=Object(l.f)([]),d=Object(l.f)(!1),h=function(){var t=Object(n.a)((function*(){if(!d.value&&0!==v.value.length){d.value=!0;for(var t=v.value.shift();t;t=v.value.shift())if("delete"===t.type)for(var i=0;i<t.count;i++)yield c(o()),f.value=f.value.slice(0,f.value.length-1);else for(var n=0;n<t.text.length;n++){if(yield c(o()),e.withErrors&&Math.random()<.1){for(var l=Math.floor(3*Math.random()),h=0;h<l;h++)f.value+=(y=void 0,(y="abcdefghijklmnopqrstuvwxyz").charAt(Math.floor(Math.random()*y.length))),yield c(o());for(var m=0;m<l;m++)yield c(o()),f.value=f.value.slice(0,f.value.length-1)}f.value+=t.text.charAt(n)}var y;d.value=!1,r("updated")}}));return function(){return t.apply(this,arguments)}}();return Object(l.i)((()=>e.text),((e,t)=>{for(var r=0,i=0;i<e.length&&e.charAt(i)===t.charAt(i);i++)r++;r<t.length&&v.value.push({type:"delete",count:t.length-r}),r<=e.length&&v.value.push({type:"add",text:e.slice(r)}),h()})),Object(l.d)((()=>{e.text&&(v.value.push({type:"add",text:e.text}),h())})),{currentText:f,isRunning:d}}}),o=r(160),f=r(21);var component=Object(f.a)(c,(function(){var e,t=this,r=t.$createElement,n=t._self._c||r;return n("span",[t._v(t._s(t.currentText)),n("span",{directives:[{name:"show",rawName:"v-show",value:t.isRunning,expression:"isRunning"}],class:[t.$style.m,(e={},e[t.$style.n]=t.isRunning,e)]},[t._v("|")])])}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports},162:function(e,t,r){"use strict";var n=r(155),l=r.n(n);r.d(t,"default",(function(){return l.a}))},163:function(e,t,r){"use strict";var n=r(156),l=r.n(n);r.d(t,"default",(function(){return l.a}))},164:function(e,t,r){"use strict";var n=r(157),l=r.n(n);r.d(t,"default",(function(){return l.a}))},167:function(e,t,r){"use strict";r.r(t);var n=r(15),l=Object(n.a)({props:{currentBreakpoint:{type:Object,required:!0}},setup(e,t){var{emit:r}=t;return{texts:Object(n.e)([])}}}),c=r(162),o=r(21);var component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$style.R},e._l(e.texts,(function(text){return r("div",{key:"texts.key",class:e.$style.d},[e._v(e._s(text.text))])})),0)}),[],!1,(function(e){this.$style=c.default.locals||c.default}),null,null);t.default=component.exports},168:function(e,t,r){"use strict";r.r(t);var n=r(15),l=Object(n.a)({props:{currentBreakpoint:{type:Object,required:!0}},setup(e){var t=Object(n.f)([]),r=Object(n.f)("");return Object(n.i)((()=>e.currentBreakpoint),(e=>{e&&(e.images?t.value=[...e.images]:t.value=[],r.value=e.background||"")})),{currentImages:t,background:r}}}),c=r(163),o=r(21);var component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$style.T},[r("transition-group",{attrs:{name:"g"}},e._l(e.currentImages,(function(image){var t;return r("img",{key:image,class:[e.$style.Y,(t={},t[e.$style.S]=image===e.background,t)],attrs:{src:image}})})),0)],1)}),[],!1,(function(e){this.$style=c.default.locals||c.default}),null,null);t.default=component.exports},169:function(e,t,r){"use strict";r.r(t);var n=r(15),l=Object(n.a)({setup(e){var t=Object(n.f)(!1),r=!1,l=Object(n.f)(),c=Object(n.f)(),o=Object(n.f)(!1),f=Object(n.f)(!1),{getters:v}=Object(n.h)();Object(n.i)((()=>v["slide/currentBreakpoint"]),(e=>{e&&(t.value="cover"!==e.id,o.value=t.value&&"capa"!==e.id&&"fim"!==e.id,f.value="fim"===e.id,"cover"===e.id||"capa"===e.id?d():r=!1)}));var d=()=>{if(!r){r=!0;var e=0,t=0,n=()=>{if(r){if(15!=++t)return window.requestAnimationFrame(n);t=0,(e+=33.333333333333336)>100&&(e=0),l.value.style.backgroundPosition="".concat(e,"% ").concat(e,"%"),window.requestAnimationFrame(n)}};window.requestAnimationFrame(n)}};return d(),{backgroundElement:l,foiceElement:c,showCover:t,isSmall:o,isEnd:f}}}),c=r(164),o=r(21);var component=Object(o.a)(l,(function(){var e,t,r,n=this,l=n.$createElement,c=n._self._c||l;return c("div",[c("div",{ref:"backgroundElement",class:n.$style.N}),c("div",{class:[n.$style.a,(e={},e[n.$style.f]=n.isSmall,e[n.$style.D]=n.isEnd,e)]},[c("div",{ref:"marteloElement",class:(t={},t[n.$style.e]=n.showCover,t)}),c("div",{ref:"foiceElement",class:(r={},r[n.$style.x]=n.showCover,r)})])])}),[],!1,(function(e){this.$style=c.default.locals||c.default}),null,null);t.default=component.exports},170:function(e,t,r){"use strict";var n=r(158),l=r.n(n);r.d(t,"default",(function(){return l.a}))},172:function(e,t,r){"use strict";r.r(t);var n=r(161),l=r(167),c=r(168),o=r(169),f=r(15),v=Object(f.a)({components:{appTexts:l.default,appBackground:o.default,appTextTyping:n.default,appImages:c.default},setup(){var{getters:e}=Object(f.h)(),t=Object(f.f)(e["slide/currentBreakpoint"]);Object(f.i)((()=>e["slide/currentBreakpoint"]),(e=>t.value=e));var r=Object(f.f)(100),n=Object(f.f)(),l=()=>{var e=n.value.offsetWidth,t=n.value.offsetHeight;r.value=e/t>1.777777?1.777777*t/100:e/100};return window.addEventListener("resize",l),Object(f.d)((()=>l())),Object(f.c)((()=>{window.removeEventListener("resize",l)})),{currentBreakpoint:t,presentationWrapperEl:n,scale:r}}}),d=r(170),h=r(21);var component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"presentationWrapperEl",class:e.$style.C,style:{"font-size":e.scale+"px"}},[r("div",{class:e.$style.v},[r("app-background"),r("div",{class:e.$style.J},[r("app-images",{attrs:{"current-breakpoint":e.currentBreakpoint}}),r("app-texts",{attrs:{"current-breakpoint":e.currentBreakpoint}})],1)],1)])}),[],!1,(function(e){this.$style=d.default.locals||d.default}),null,null);t.default=component.exports}}]);