(window.webpackJsonp=window.webpackJsonp||[]).push([[0,3,4,6,7],{203:function(e,t,n){e.exports={a:"H",Q:"b",Y:"Z"}},204:function(e,t,n){e.exports={M:"R"}},205:function(e,t,n){e.exports={V:"z",T:"t",HEnterActive:"k-enter-active",HLeaveActive:"k-leave-active",HEnter:"k-enter",HLeaveTo:"k-leave-to"}},206:function(e,t,n){e.exports={c:"d",w:"s",O:"S",K:"U",D:"g",n:"O",p:"B",A:"y",r:"m"}},208:function(e,t,n){"use strict";var r=n(6),c=n(17),o=n(35),l=n(104),f=n(79),v=n(13),d=n(63).f,h=n(41).f,x=n(14).f,m=n(209).trim,k="Number",y=r.Number,O=y,j=y.prototype,w=o(n(80)(j))==k,E="trim"in String.prototype,$=function(e){var t=f(e,!1);if("string"==typeof t&&t.length>2){var n,r,c,o=(t=E?t.trim():m(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+t}for(var code,l=t.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,r)}}return+t};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof y&&(w?v((function(){j.valueOf.call(n)})):o(n)!=k)?l(new O($(t)),n,y):$(t)};for(var _,A=n(10)?d(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;A.length>I;I++)c(O,_=A[I])&&!c(y,_)&&x(y,_,h(O,_));y.prototype=j,j.constructor=y,n(15)(r,k,y)}},209:function(e,t,n){var r=n(4),c=n(40),o=n(13),l=n(210),f="["+l+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),h=function(e,t,n){var c={},f=o((function(){return!!l[e]()||"​"!="​"[e]()})),v=c[e]=f?t(x):l[e];n&&(c[n]=v),r(r.P+r.F*f,"String",c)},x=h.trim=function(e,t){return e=String(c(e)),1&t&&(e=e.replace(v,"")),2&t&&(e=e.replace(d,"")),e};e.exports=h},210:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},211:function(e,t,n){"use strict";var r=n(203),c=n.n(r);n.d(t,"default",(function(){return c.a}))},212:function(e,t,n){e.exports={r:"v",u:"C",q:"u",S:"j",R:"L",s:"c",presentation:"i"}},215:function(e,t,n){"use strict";n.r(t);var r=n(3),c=(n(42),n(208),n(11),n(25),n(24)),o=Object(c.a)({props:{text:{type:String,required:!0},speed:{type:Number,default:100},withErrors:{type:Boolean,required:!1,default:!1}},setup:function(e,t){var n=t.emit,o=function(e){return new Promise((function(t){return setTimeout(t,e)}))},l=function(){return Math.floor(Math.random()*e.speed)},f=Object(c.f)(""),v=Object(c.f)([]),d=Object(c.f)(!1),h=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){var r,i,c,h,x,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d.value&&0!==v.value.length){t.next=2;break}return t.abrupt("return");case 2:d.value=!0,r=v.value.shift();case 4:if(!r){t.next=45;break}if("delete"!==r.type){t.next=16;break}i=0;case 7:if(!(i<r.count)){t.next=14;break}return t.next=10,o(l());case 10:f.value=f.value.slice(0,f.value.length-1);case 11:i++,t.next=7;break;case 14:t.next=42;break;case 16:c=0;case 17:if(!(c<r.text.length)){t.next=42;break}return t.next=20,o(l());case 20:if(!(e.withErrors&&Math.random()<.1)){t.next=38;break}h=Math.floor(3*Math.random()),x=0;case 23:if(!(x<h)){t.next=30;break}return f.value+=(k=void 0,(k="abcdefghijklmnopqrstuvwxyz").charAt(Math.floor(Math.random()*k.length))),t.next=27,o(l());case 27:x++,t.next=23;break;case 30:m=0;case 31:if(!(m<h)){t.next=38;break}return t.next=34,o(l());case 34:f.value=f.value.slice(0,f.value.length-1);case 35:m++,t.next=31;break;case 38:f.value+=r.text.charAt(c);case 39:c++,t.next=17;break;case 42:r=v.value.shift(),t.next=4;break;case 45:d.value=!1,n("updated");case 47:case"end":return t.stop()}var k}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.i)((function(){return e.text}),(function(e,t){for(var n=0,i=0;i<e.length&&e.charAt(i)===t.charAt(i);i++)n++;n<t.length&&v.value.push({type:"delete",count:t.length-n}),n<=e.length&&v.value.push({type:"add",text:e.slice(n)}),h()})),Object(c.d)((function(){e.text&&(v.value.push({type:"add",text:e.text}),h())})),{currentText:f,isRunning:d}}}),l=n(211),f=n(39);var component=Object(f.a)(o,(function(){var e,t=this,n=t.$createElement,r=t._self._c||n;return r("span",[t._v(t._s(t.currentText)),r("span",{directives:[{name:"show",rawName:"v-show",value:t.isRunning,expression:"isRunning"}],class:[t.$style.a,(e={},e[t.$style.Q]=t.isRunning,e)]},[t._v("|")])])}),[],!1,(function(e){this.$style=l.default.locals||l.default}),null,null);t.default=component.exports},216:function(e,t,n){"use strict";var r=n(204),c=n.n(r);n.d(t,"default",(function(){return c.a}))},217:function(e,t,n){"use strict";var r=n(205),c=n.n(r);n.d(t,"default",(function(){return c.a}))},218:function(e,t,n){"use strict";var r=n(206),c=n.n(r);n.d(t,"default",(function(){return c.a}))},221:function(e,t,n){"use strict";n.r(t);var r=n(215),c=n(222),o=n(223),l=n(224),f=n(24),v=Object(f.a)({components:{appTexts:c.default,appBackground:l.default,appTextTyping:r.default,appImages:o.default},setup:function(){var e=Object(f.h)().getters,t=Object(f.f)(e["slide/currentBreakpoint"]);Object(f.i)((function(){return e["slide/currentBreakpoint"]}),(function(e){return t.value=e}));var n=Object(f.f)(100),r=Object(f.f)(),c=function(){var e=r.value.offsetWidth,t=r.value.offsetHeight;n.value=e/t>1.777777?1.777777*t/100:e/100};return window.addEventListener("resize",c),Object(f.d)((function(){return c()})),Object(f.c)((function(){window.removeEventListener("resize",c)})),{currentBreakpoint:t,presentationWrapperEl:r,scale:n}}}),d=n(225),h=n(39);var component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"presentationWrapperEl",class:e.$style.r,style:{"font-size":e.scale+"px"}},[n("div",{class:e.$style.R},[n("app-background"),n("div",{class:e.$style.u},[n("app-images",{attrs:{"current-breakpoint":e.currentBreakpoint}}),n("app-texts",{attrs:{"current-breakpoint":e.currentBreakpoint}})],1)],1)])}),[],!1,(function(e){this.$style=d.default.locals||d.default}),null,null);t.default=component.exports},222:function(e,t,n){"use strict";n.r(t);var r=n(24),c=Object(r.a)({props:{currentBreakpoint:{type:Object,required:!0}},setup:function(e,t){t.emit;return{texts:Object(r.e)([])}}}),o=n(216),l=n(39);var component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.M},e._l(e.texts,(function(text){return n("div",{key:"texts.key",class:e.$style.A},[e._v(e._s(text.text))])})),0)}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports},223:function(e,t,n){"use strict";n.r(t);var r=n(24),c=Object(r.a)({props:{currentBreakpoint:{type:Object,required:!0}},setup:function(e){var t=Object(r.f)([]);return Object(r.i)((function(){return e.currentBreakpoint}),(function(e){e&&(e.images?t.value=e.images:t.value=[])})),{currentImages:t}}}),o=n(217),l=n(39);var component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.T},[n("transition-group",{attrs:{name:"k"}},e._l(e.currentImages,(function(image){return n("img",{key:image,class:e.$style.V,attrs:{src:image}})})),0)],1)}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports},224:function(e,t,n){"use strict";n.r(t);var r=n(24),c=Object(r.a)({setup:function(e){var t=Object(r.f)(!1),n=!1,c=Object(r.f)(),o=Object(r.f)(),l=Object(r.f)(!1),f=Object(r.h)().getters;Object(r.i)((function(){return f["slide/currentBreakpoint"]}),(function(e){e&&(t.value="cover"!==e.id,l.value=t.value&&"capa"!==e.id,"cover"===e.id||"capa"===e.id?v():n=!1)}));var v=function(){if(!n){n=!0;var e=0,t=0;window.requestAnimationFrame((function r(){if(n){if(15!=++t)return window.requestAnimationFrame(r);t=0,(e+=25)>100&&(e=0),c.value.style.backgroundPosition="".concat(e,"% 0%"),window.requestAnimationFrame(r)}}))}};return v(),{backgroundElement:c,foiceElement:o,showCover:t,isSmall:l}}}),o=n(218),l=n(39);var component=Object(l.a)(c,(function(){var e,t,n,r=this,c=r.$createElement,o=r._self._c||c;return o("div",[o("div",{ref:"backgroundElement",class:r.$style.c}),o("div",{class:[r.$style.K,(e={},e[r.$style.D]=r.isSmall,e)]},[o("div",{ref:"marteloElement",class:(t={},t[r.$style.O]=r.showCover,t)}),o("div",{ref:"foiceElement",class:(n={},n[r.$style.w]=r.showCover,n)})])])}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports},225:function(e,t,n){"use strict";var r=n(212),c=n.n(r);n.d(t,"default",(function(){return c.a}))}}]);