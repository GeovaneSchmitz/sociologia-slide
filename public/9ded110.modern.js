(window.webpackJsonp=window.webpackJsonp||[]).push([[8,6],{133:function(t,e,n){t.exports={K:"G",z:"T",a:"u"}},139:function(t,e,n){"use strict";var r=n(133),l=n.n(r);n.d(e,"default",(function(){return l.a}))},140:function(t,e,n){"use strict";n.r(e);var r=n(3),l=n(15),o=Object(l.a)({props:{text:{type:String,required:!0},speed:{type:Number,default:100},withErrors:{type:Boolean,required:!1,default:!1}},setup(t,e){var{emit:n}=e,o=t=>new Promise((e=>setTimeout(e,t))),c=()=>Math.floor(Math.random()*t.speed),d=Object(l.f)(""),f=Object(l.f)([]),h=Object(l.f)(!1),v=function(){var e=Object(r.a)((function*(){if(!h.value&&0!==f.value.length){h.value=!0;for(var e=f.value.shift();e;e=f.value.shift())if("delete"===e.type)for(var i=0;i<e.count;i++)yield o(c()),d.value=d.value.slice(0,d.value.length-1);else for(var r=0;r<e.text.length;r++){if(yield o(c()),t.withErrors&&Math.random()<.1){for(var l=Math.floor(3*Math.random()),v=0;v<l;v++)d.value+=(m=void 0,(m="abcdefghijklmnopqrstuvwxyz").charAt(Math.floor(Math.random()*m.length))),yield o(c());for(var y=0;y<l;y++)yield o(c()),d.value=d.value.slice(0,d.value.length-1)}d.value+=e.text.charAt(r)}var m;h.value=!1,n("updated")}}));return function(){return e.apply(this,arguments)}}();return Object(l.i)((()=>t.text),((t,e)=>{for(var n=0,i=0;i<t.length&&t.charAt(i)===e.charAt(i);i++)n++;n<e.length&&f.value.push({type:"delete",count:e.length-n}),n<=t.length&&f.value.push({type:"add",text:t.slice(n)}),v()})),Object(l.d)((()=>{t.text&&(f.value.push({type:"add",text:t.text}),v())})),{currentText:d,isRunning:h}}}),c=n(139),d=n(21);var component=Object(d.a)(o,(function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("span",[e._v(e._s(e.currentText)),r("span",{directives:[{name:"show",rawName:"v-show",value:e.isRunning,expression:"isRunning"}],class:[e.$style.K,(t={},t[e.$style.z]=e.isRunning,t)]},[e._v("|")])])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports},145:function(t,e,n){t.exports={V:"t",u:"v",f:"H",M:"e"}},154:function(t,e,n){"use strict";var r=n(145),l=n.n(r);n.d(e,"default",(function(){return l.a}))},156:function(t,e,n){"use strict";n.r(e);var r={components:{appTextTyping:n(140).default},props:{topics:{type:Array,default:()=>[]}},data:()=>({setTimeoutId:null,currentTopics:1,topics1:[],topics2:[]}),watch:{topics(t){this.setTimeoutId&&clearTimeout(this.setTimeoutId),1===this.currentTopics?(this.topics2=t,this.currentTopics=2,this.setTimeoutId=400):(this.currentTopics=1,this.topics1=t,this.setTimeoutId=400)}},methods:{}},l=n(154),o=n(21);var component=Object(o.a)(r,(function(){var t,e,n=this,r=n.$createElement,l=n._self._c||r;return l("div",{class:n.$style.V},[l("div",{class:[n.$style.u,(t={},t[n.$style.f]=1!==n.currentTopics,t)]},n._l(n.topics1,(function(t,e){return l("div",{key:t,class:n.$style.M,domProps:{innerHTML:n._s(t)}},[l("span",{domProps:{innerHTML:n._s(t)}})])})),0),l("div",{class:[n.$style.u,n.$style.q,(e={},e[n.$style.f]=2!==n.currentTopics,e)]},n._l(n.topics2,(function(t,e){return l("div",{key:t,class:n.$style.M},[l("span",{domProps:{innerHTML:n._s(t)}})])})),0)])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports}}]);