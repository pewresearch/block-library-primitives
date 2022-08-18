(()=>{"use strict";var n={d:(t,r)=>{for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},o:(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r:n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},t={};n.r(t),n.d(t,{VERSION:()=>l,after:()=>qt,all:()=>ar,allKeys:()=>xn,any:()=>cr,assign:()=>qn,before:()=>Ut,bind:()=>It,bindAll:()=>Tt,chain:()=>St,chunk:()=>zr,clone:()=>$n,collect:()=>tr,compact:()=>Fr,compose:()=>Vt,constant:()=>en,contains:()=>lr,countBy:()=>xr,create:()=>zn,debounce:()=>Dt,default:()=>Kr,defaults:()=>Un,defer:()=>Pt,delay:()=>Nt,detect:()=>Yt,difference:()=>Pr,drop:()=>Br,each:()=>nr,escape:()=>vt,every:()=>ar,extend:()=>Vn,extendOwn:()=>qn,filter:()=>or,find:()=>Yt,findIndex:()=>Ht,findKey:()=>zt,findLastIndex:()=>Kt,findWhere:()=>Zt,first:()=>kr,flatten:()=>Nr,foldl:()=>er,foldr:()=>ur,forEach:()=>nr,functions:()=>Rn,get:()=>Qn,groupBy:()=>jr,has:()=>Xn,head:()=>kr,identity:()=>Yn,include:()=>lr,includes:()=>lr,indexBy:()=>_r,indexOf:()=>Qt,initial:()=>Ir,inject:()=>er,intersection:()=>Lr,invert:()=>Dn,invoke:()=>fr,isArguments:()=>nn,isArray:()=>X,isArrayBuffer:()=>U,isBoolean:()=>F,isDataView:()=>Q,isDate:()=>R,isElement:()=>N,isEmpty:()=>hn,isEqual:()=>jn,isError:()=>V,isFinite:()=>tn,isFunction:()=>$,isMap:()=>Bn,isMatch:()=>dn,isNaN:()=>rn,isNull:()=>B,isNumber:()=>D,isObject:()=>k,isRegExp:()=>L,isSet:()=>Fn,isString:()=>C,isSymbol:()=>q,isTypedArray:()=>fn,isUndefined:()=>T,isWeakMap:()=>Tn,isWeakSet:()=>Nn,iteratee:()=>et,keys:()=>vn,last:()=>Tr,lastIndexOf:()=>Xt,map:()=>tr,mapObject:()=>ot,matcher:()=>Zn,matches:()=>Zn,max:()=>vr,memoize:()=>Ft,methods:()=>Rn,min:()=>hr,mixin:()=>Hr,negate:()=>Lt,noop:()=>it,now:()=>ft,object:()=>Ur,omit:()=>Mr,once:()=>Wt,pairs:()=>Cn,partial:()=>Mt,partition:()=>Ar,pick:()=>Er,pluck:()=>sr,property:()=>nt,propertyOf:()=>at,random:()=>lt,range:()=>Wr,reduce:()=>er,reduceRight:()=>ur,reject:()=>ir,rest:()=>Br,restArguments:()=>I,result:()=>_t,sample:()=>gr,select:()=>or,shuffle:()=>br,size:()=>Sr,some:()=>cr,sortBy:()=>mr,sortedIndex:()=>Jt,tail:()=>Br,take:()=>kr,tap:()=>Hn,template:()=>jt,templateSettings:()=>dt,throttle:()=>Ct,times:()=>ct,toArray:()=>yr,toPath:()=>Kn,transpose:()=>Vr,unescape:()=>ht,union:()=>Rr,uniq:()=>Dr,unique:()=>Dr,uniqueId:()=>At,unzip:()=>Vr,values:()=>Pn,where:()=>pr,without:()=>Cr,wrap:()=>Rt,zip:()=>qr});const r=window.wp.element,e=window.wp.i18n,u=window.wp.hooks,o=window.wp.compose,i=window.wp.blockEditor,a=window.wp.components,c=function(n){let{attributes:t,setAttributes:u,clientId:o=!1}=n;!1===o&&console.warn("<FlexboxControl/> requires a clientId prop."),console.log("FlexboxControls",t,o);const{isFlexbox:c}=t;return(0,r.createElement)(i.InspectorAdvancedControls,null,(0,r.createElement)(a.CardDivider,null),(0,r.createElement)(a.ToggleControl,{label:(0,e.__)("Enable Flexbox","prc-cbl"),help:(0,e.__)("Enable CSS flexbox for this HTML element","prc-cbl"),checked:c,onChange:()=>{u({isFlexbox:!c})}}))};var l="1.13.4",f="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},s=Array.prototype,p=Object.prototype,v="undefined"!=typeof Symbol?Symbol.prototype:null,h=s.push,d=s.slice,y=p.toString,g=p.hasOwnProperty,b="undefined"!=typeof ArrayBuffer,m="undefined"!=typeof DataView,w=Array.isArray,j=Object.keys,_=Object.create,x=b&&ArrayBuffer.isView,A=isNaN,S=isFinite,O=!{toString:null}.propertyIsEnumerable("toString"),E=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],M=Math.pow(2,53)-1;function I(n,t){return t=null==t?n.length-1:+t,function(){for(var r=Math.max(arguments.length-t,0),e=Array(r),u=0;u<r;u++)e[u]=arguments[u+t];switch(t){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var o=Array(t+1);for(u=0;u<t;u++)o[u]=arguments[u];return o[t]=e,n.apply(this,o)}}function k(n){var t=typeof n;return"function"===t||"object"===t&&!!n}function B(n){return null===n}function T(n){return void 0===n}function F(n){return!0===n||!1===n||"[object Boolean]"===y.call(n)}function N(n){return!(!n||1!==n.nodeType)}function P(n){var t="[object "+n+"]";return function(n){return y.call(n)===t}}const C=P("String"),D=P("Number"),R=P("Date"),L=P("RegExp"),V=P("Error"),q=P("Symbol"),U=P("ArrayBuffer");var W=P("Function"),z=f.document&&f.document.childNodes;"object"!=typeof Int8Array&&"function"!=typeof z&&(W=function(n){return"function"==typeof n||!1});const $=W,H=P("Object");var K=m&&H(new DataView(new ArrayBuffer(8))),J="undefined"!=typeof Map&&H(new Map),G=P("DataView");const Q=K?function(n){return null!=n&&$(n.getInt8)&&U(n.buffer)}:G,X=w||P("Array");function Y(n,t){return null!=n&&g.call(n,t)}var Z=P("Arguments");!function(){Z(arguments)||(Z=function(n){return Y(n,"callee")})}();const nn=Z;function tn(n){return!q(n)&&S(n)&&!isNaN(parseFloat(n))}function rn(n){return D(n)&&A(n)}function en(n){return function(){return n}}function un(n){return function(t){var r=n(t);return"number"==typeof r&&r>=0&&r<=M}}function on(n){return function(t){return null==t?void 0:t[n]}}const an=on("byteLength"),cn=un(an);var ln=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;const fn=b?function(n){return x?x(n)&&!Q(n):cn(n)&&ln.test(y.call(n))}:en(!1),sn=on("length");function pn(n,t){t=function(n){for(var t={},r=n.length,e=0;e<r;++e)t[n[e]]=!0;return{contains:function(n){return!0===t[n]},push:function(r){return t[r]=!0,n.push(r)}}}(t);var r=E.length,e=n.constructor,u=$(e)&&e.prototype||p,o="constructor";for(Y(n,o)&&!t.contains(o)&&t.push(o);r--;)(o=E[r])in n&&n[o]!==u[o]&&!t.contains(o)&&t.push(o)}function vn(n){if(!k(n))return[];if(j)return j(n);var t=[];for(var r in n)Y(n,r)&&t.push(r);return O&&pn(n,t),t}function hn(n){if(null==n)return!0;var t=sn(n);return"number"==typeof t&&(X(n)||C(n)||nn(n))?0===t:0===sn(vn(n))}function dn(n,t){var r=vn(t),e=r.length;if(null==n)return!e;for(var u=Object(n),o=0;o<e;o++){var i=r[o];if(t[i]!==u[i]||!(i in u))return!1}return!0}function yn(n){return n instanceof yn?n:this instanceof yn?void(this._wrapped=n):new yn(n)}function gn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,an(n))}yn.VERSION=l,yn.prototype.value=function(){return this._wrapped},yn.prototype.valueOf=yn.prototype.toJSON=yn.prototype.value,yn.prototype.toString=function(){return String(this._wrapped)};var bn="[object DataView]";function mn(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return!1;if(n!=n)return t!=t;var u=typeof n;return("function"===u||"object"===u||"object"==typeof t)&&wn(n,t,r,e)}function wn(n,t,r,e){n instanceof yn&&(n=n._wrapped),t instanceof yn&&(t=t._wrapped);var u=y.call(n);if(u!==y.call(t))return!1;if(K&&"[object Object]"==u&&Q(n)){if(!Q(t))return!1;u=bn}switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!=+n?+t!=+t:0==+n?1/+n==1/t:+n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object Symbol]":return v.valueOf.call(n)===v.valueOf.call(t);case"[object ArrayBuffer]":case bn:return wn(gn(n),gn(t),r,e)}var o="[object Array]"===u;if(!o&&fn(n)){if(an(n)!==an(t))return!1;if(n.buffer===t.buffer&&n.byteOffset===t.byteOffset)return!0;o=!0}if(!o){if("object"!=typeof n||"object"!=typeof t)return!1;var i=n.constructor,a=t.constructor;if(i!==a&&!($(i)&&i instanceof i&&$(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}e=e||[];for(var c=(r=r||[]).length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),o){if((c=n.length)!==t.length)return!1;for(;c--;)if(!mn(n[c],t[c],r,e))return!1}else{var l,f=vn(n);if(c=f.length,vn(t).length!==c)return!1;for(;c--;)if(!Y(t,l=f[c])||!mn(n[l],t[l],r,e))return!1}return r.pop(),e.pop(),!0}function jn(n,t){return mn(n,t)}function xn(n){if(!k(n))return[];var t=[];for(var r in n)t.push(r);return O&&pn(n,t),t}function An(n){var t=sn(n);return function(r){if(null==r)return!1;var e=xn(r);if(sn(e))return!1;for(var u=0;u<t;u++)if(!$(r[n[u]]))return!1;return n!==In||!$(r[Sn])}}var Sn="forEach",On=["clear","delete"],En=["get","has","set"],Mn=On.concat(Sn,En),In=On.concat(En),kn=["add"].concat(On,Sn,"has");const Bn=J?An(Mn):P("Map"),Tn=J?An(In):P("WeakMap"),Fn=J?An(kn):P("Set"),Nn=P("WeakSet");function Pn(n){for(var t=vn(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e}function Cn(n){for(var t=vn(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e}function Dn(n){for(var t={},r=vn(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t}function Rn(n){var t=[];for(var r in n)$(n[r])&&t.push(r);return t.sort()}function Ln(n,t){return function(r){var e=arguments.length;if(t&&(r=Object(r)),e<2||null==r)return r;for(var u=1;u<e;u++)for(var o=arguments[u],i=n(o),a=i.length,c=0;c<a;c++){var l=i[c];t&&void 0!==r[l]||(r[l]=o[l])}return r}}const Vn=Ln(xn),qn=Ln(vn),Un=Ln(xn,!0);function Wn(n){if(!k(n))return{};if(_)return _(n);var t=function(){};t.prototype=n;var r=new t;return t.prototype=null,r}function zn(n,t){var r=Wn(n);return t&&qn(r,t),r}function $n(n){return k(n)?X(n)?n.slice():Vn({},n):n}function Hn(n,t){return t(n),n}function Kn(n){return X(n)?n:[n]}function Jn(n){return yn.toPath(n)}function Gn(n,t){for(var r=t.length,e=0;e<r;e++){if(null==n)return;n=n[t[e]]}return r?n:void 0}function Qn(n,t,r){var e=Gn(n,Jn(t));return T(e)?r:e}function Xn(n,t){for(var r=(t=Jn(t)).length,e=0;e<r;e++){var u=t[e];if(!Y(n,u))return!1;n=n[u]}return!!r}function Yn(n){return n}function Zn(n){return n=qn({},n),function(t){return dn(t,n)}}function nt(n){return n=Jn(n),function(t){return Gn(t,n)}}function tt(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)}}return function(){return n.apply(t,arguments)}}function rt(n,t,r){return null==n?Yn:$(n)?tt(n,t,r):k(n)&&!X(n)?Zn(n):nt(n)}function et(n,t){return rt(n,t,1/0)}function ut(n,t,r){return yn.iteratee!==et?yn.iteratee(n,t):rt(n,t,r)}function ot(n,t,r){t=ut(t,r);for(var e=vn(n),u=e.length,o={},i=0;i<u;i++){var a=e[i];o[a]=t(n[a],a,n)}return o}function it(){}function at(n){return null==n?it:function(t){return Qn(n,t)}}function ct(n,t,r){var e=Array(Math.max(0,n));t=tt(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e}function lt(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))}yn.toPath=Kn,yn.iteratee=et;const ft=Date.now||function(){return(new Date).getTime()};function st(n){var t=function(t){return n[t]},r="(?:"+vn(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}}const pt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},vt=st(pt),ht=st(Dn(pt)),dt=yn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var yt=/(.)^/,gt={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},bt=/\\|'|\r|\n|\u2028|\u2029/g;function mt(n){return"\\"+gt[n]}var wt=/^\s*(\w|\$)+\s*$/;function jt(n,t,r){!t&&r&&(t=r),t=Un({},t,yn.templateSettings);var e=RegExp([(t.escape||yt).source,(t.interpolate||yt).source,(t.evaluate||yt).source].join("|")+"|$","g"),u=0,o="__p+='";n.replace(e,(function(t,r,e,i,a){return o+=n.slice(u,a).replace(bt,mt),u=a+t.length,r?o+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":i&&(o+="';\n"+i+"\n__p+='"),t})),o+="';\n";var i,a=t.variable;if(a){if(!wt.test(a))throw new Error("variable is not a bare identifier: "+a)}else o="with(obj||{}){\n"+o+"}\n",a="obj";o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{i=new Function(a,"_",o)}catch(n){throw n.source=o,n}var c=function(n){return i.call(this,n,yn)};return c.source="function("+a+"){\n"+o+"}",c}function _t(n,t,r){var e=(t=Jn(t)).length;if(!e)return $(r)?r.call(n):r;for(var u=0;u<e;u++){var o=null==n?void 0:n[t[u]];void 0===o&&(o=r,u=e),n=$(o)?o.call(n):o}return n}var xt=0;function At(n){var t=++xt+"";return n?n+t:t}function St(n){var t=yn(n);return t._chain=!0,t}function Ot(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var o=Wn(n.prototype),i=n.apply(o,u);return k(i)?i:o}var Et=I((function(n,t){var r=Et.placeholder,e=function(){for(var u=0,o=t.length,i=Array(o),a=0;a<o;a++)i[a]=t[a]===r?arguments[u++]:t[a];for(;u<arguments.length;)i.push(arguments[u++]);return Ot(n,e,this,this,i)};return e}));Et.placeholder=yn;const Mt=Et,It=I((function(n,t,r){if(!$(n))throw new TypeError("Bind must be called on a function");var e=I((function(u){return Ot(n,e,t,this,r.concat(u))}));return e})),kt=un(sn);function Bt(n,t,r,e){if(e=e||[],t||0===t){if(t<=0)return e.concat(n)}else t=1/0;for(var u=e.length,o=0,i=sn(n);o<i;o++){var a=n[o];if(kt(a)&&(X(a)||nn(a)))if(t>1)Bt(a,t-1,r,e),u=e.length;else for(var c=0,l=a.length;c<l;)e[u++]=a[c++];else r||(e[u++]=a)}return e}const Tt=I((function(n,t){var r=(t=Bt(t,!1,!1)).length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var e=t[r];n[e]=It(n[e],n)}return n}));function Ft(n,t){var r=function(e){var u=r.cache,o=""+(t?t.apply(this,arguments):e);return Y(u,o)||(u[o]=n.apply(this,arguments)),u[o]};return r.cache={},r}const Nt=I((function(n,t,r){return setTimeout((function(){return n.apply(null,r)}),t)})),Pt=Mt(Nt,yn,1);function Ct(n,t,r){var e,u,o,i,a=0;r||(r={});var c=function(){a=!1===r.leading?0:ft(),e=null,i=n.apply(u,o),e||(u=o=null)},l=function(){var l=ft();a||!1!==r.leading||(a=l);var f=t-(l-a);return u=this,o=arguments,f<=0||f>t?(e&&(clearTimeout(e),e=null),a=l,i=n.apply(u,o),e||(u=o=null)):e||!1===r.trailing||(e=setTimeout(c,f)),i};return l.cancel=function(){clearTimeout(e),a=0,e=u=o=null},l}function Dt(n,t,r){var e,u,o,i,a,c=function(){var l=ft()-u;t>l?e=setTimeout(c,t-l):(e=null,r||(i=n.apply(a,o)),e||(o=a=null))},l=I((function(l){return a=this,o=l,u=ft(),e||(e=setTimeout(c,t),r&&(i=n.apply(a,o))),i}));return l.cancel=function(){clearTimeout(e),e=o=a=null},l}function Rt(n,t){return Mt(t,n)}function Lt(n){return function(){return!n.apply(this,arguments)}}function Vt(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}}function qt(n,t){return function(){if(--n<1)return t.apply(this,arguments)}}function Ut(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}}const Wt=Mt(Ut,2);function zt(n,t,r){t=ut(t,r);for(var e,u=vn(n),o=0,i=u.length;o<i;o++)if(t(n[e=u[o]],e,n))return e}function $t(n){return function(t,r,e){r=ut(r,e);for(var u=sn(t),o=n>0?0:u-1;o>=0&&o<u;o+=n)if(r(t[o],o,t))return o;return-1}}const Ht=$t(1),Kt=$t(-1);function Jt(n,t,r,e){for(var u=(r=ut(r,e,1))(t),o=0,i=sn(n);o<i;){var a=Math.floor((o+i)/2);r(n[a])<u?o=a+1:i=a}return o}function Gt(n,t,r){return function(e,u,o){var i=0,a=sn(e);if("number"==typeof o)n>0?i=o>=0?o:Math.max(o+a,i):a=o>=0?Math.min(o+1,a):o+a+1;else if(r&&o&&a)return e[o=r(e,u)]===u?o:-1;if(u!=u)return(o=t(d.call(e,i,a),rn))>=0?o+i:-1;for(o=n>0?i:a-1;o>=0&&o<a;o+=n)if(e[o]===u)return o;return-1}}const Qt=Gt(1,Ht,Jt),Xt=Gt(-1,Kt);function Yt(n,t,r){var e=(kt(n)?Ht:zt)(n,t,r);if(void 0!==e&&-1!==e)return n[e]}function Zt(n,t){return Yt(n,Zn(t))}function nr(n,t,r){var e,u;if(t=tt(t,r),kt(n))for(e=0,u=n.length;e<u;e++)t(n[e],e,n);else{var o=vn(n);for(e=0,u=o.length;e<u;e++)t(n[o[e]],o[e],n)}return n}function tr(n,t,r){t=ut(t,r);for(var e=!kt(n)&&vn(n),u=(e||n).length,o=Array(u),i=0;i<u;i++){var a=e?e[i]:i;o[i]=t(n[a],a,n)}return o}function rr(n){var t=function(t,r,e,u){var o=!kt(t)&&vn(t),i=(o||t).length,a=n>0?0:i-1;for(u||(e=t[o?o[a]:a],a+=n);a>=0&&a<i;a+=n){var c=o?o[a]:a;e=r(e,t[c],c,t)}return e};return function(n,r,e,u){var o=arguments.length>=3;return t(n,tt(r,u,4),e,o)}}const er=rr(1),ur=rr(-1);function or(n,t,r){var e=[];return t=ut(t,r),nr(n,(function(n,r,u){t(n,r,u)&&e.push(n)})),e}function ir(n,t,r){return or(n,Lt(ut(t)),r)}function ar(n,t,r){t=ut(t,r);for(var e=!kt(n)&&vn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(!t(n[i],i,n))return!1}return!0}function cr(n,t,r){t=ut(t,r);for(var e=!kt(n)&&vn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(t(n[i],i,n))return!0}return!1}function lr(n,t,r,e){return kt(n)||(n=Pn(n)),("number"!=typeof r||e)&&(r=0),Qt(n,t,r)>=0}const fr=I((function(n,t,r){var e,u;return $(t)?u=t:(t=Jn(t),e=t.slice(0,-1),t=t[t.length-1]),tr(n,(function(n){var o=u;if(!o){if(e&&e.length&&(n=Gn(n,e)),null==n)return;o=n[t]}return null==o?o:o.apply(n,r)}))}));function sr(n,t){return tr(n,nt(t))}function pr(n,t){return or(n,Zn(t))}function vr(n,t,r){var e,u,o=-1/0,i=-1/0;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=kt(n)?n:Pn(n)).length;a<c;a++)null!=(e=n[a])&&e>o&&(o=e);else t=ut(t,r),nr(n,(function(n,r,e){((u=t(n,r,e))>i||u===-1/0&&o===-1/0)&&(o=n,i=u)}));return o}function hr(n,t,r){var e,u,o=1/0,i=1/0;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=kt(n)?n:Pn(n)).length;a<c;a++)null!=(e=n[a])&&e<o&&(o=e);else t=ut(t,r),nr(n,(function(n,r,e){((u=t(n,r,e))<i||u===1/0&&o===1/0)&&(o=n,i=u)}));return o}var dr=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function yr(n){return n?X(n)?d.call(n):C(n)?n.match(dr):kt(n)?tr(n,Yn):Pn(n):[]}function gr(n,t,r){if(null==t||r)return kt(n)||(n=Pn(n)),n[lt(n.length-1)];var e=yr(n),u=sn(e);t=Math.max(Math.min(t,u),0);for(var o=u-1,i=0;i<t;i++){var a=lt(i,o),c=e[i];e[i]=e[a],e[a]=c}return e.slice(0,t)}function br(n){return gr(n,1/0)}function mr(n,t,r){var e=0;return t=ut(t,r),sr(tr(n,(function(n,r,u){return{value:n,index:e++,criteria:t(n,r,u)}})).sort((function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index})),"value")}function wr(n,t){return function(r,e,u){var o=t?[[],[]]:{};return e=ut(e,u),nr(r,(function(t,u){var i=e(t,u,r);n(o,t,i)})),o}}const jr=wr((function(n,t,r){Y(n,r)?n[r].push(t):n[r]=[t]})),_r=wr((function(n,t,r){n[r]=t})),xr=wr((function(n,t,r){Y(n,r)?n[r]++:n[r]=1})),Ar=wr((function(n,t,r){n[r?0:1].push(t)}),!0);function Sr(n){return null==n?0:kt(n)?n.length:vn(n).length}function Or(n,t,r){return t in r}const Er=I((function(n,t){var r={},e=t[0];if(null==n)return r;$(e)?(t.length>1&&(e=tt(e,t[1])),t=xn(n)):(e=Or,t=Bt(t,!1,!1),n=Object(n));for(var u=0,o=t.length;u<o;u++){var i=t[u],a=n[i];e(a,i,n)&&(r[i]=a)}return r})),Mr=I((function(n,t){var r,e=t[0];return $(e)?(e=Lt(e),t.length>1&&(r=t[1])):(t=tr(Bt(t,!1,!1),String),e=function(n,r){return!lr(t,r)}),Er(n,e,r)}));function Ir(n,t,r){return d.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))}function kr(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[0]:Ir(n,n.length-t)}function Br(n,t,r){return d.call(n,null==t||r?1:t)}function Tr(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[n.length-1]:Br(n,Math.max(0,n.length-t))}function Fr(n){return or(n,Boolean)}function Nr(n,t){return Bt(n,t,!1)}const Pr=I((function(n,t){return t=Bt(t,!0,!0),or(n,(function(n){return!lr(t,n)}))})),Cr=I((function(n,t){return Pr(n,t)}));function Dr(n,t,r,e){F(t)||(e=r,r=t,t=!1),null!=r&&(r=ut(r,e));for(var u=[],o=[],i=0,a=sn(n);i<a;i++){var c=n[i],l=r?r(c,i,n):c;t&&!r?(i&&o===l||u.push(c),o=l):r?lr(o,l)||(o.push(l),u.push(c)):lr(u,c)||u.push(c)}return u}const Rr=I((function(n){return Dr(Bt(n,!0,!0))}));function Lr(n){for(var t=[],r=arguments.length,e=0,u=sn(n);e<u;e++){var o=n[e];if(!lr(t,o)){var i;for(i=1;i<r&&lr(arguments[i],o);i++);i===r&&t.push(o)}}return t}function Vr(n){for(var t=n&&vr(n,sn).length||0,r=Array(t),e=0;e<t;e++)r[e]=sr(n,e);return r}const qr=I(Vr);function Ur(n,t){for(var r={},e=0,u=sn(n);e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r}function Wr(n,t,r){null==t&&(t=n||0,n=0),r||(r=t<n?-1:1);for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),o=0;o<e;o++,n+=r)u[o]=n;return u}function zr(n,t){if(null==t||t<1)return[];for(var r=[],e=0,u=n.length;e<u;)r.push(d.call(n,e,e+=t));return r}function $r(n,t){return n._chain?yn(t).chain():t}function Hr(n){return nr(Rn(n),(function(t){var r=yn[t]=n[t];yn.prototype[t]=function(){var n=[this._wrapped];return h.apply(n,arguments),$r(this,r.apply(yn,n))}})),yn}nr(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var t=s[n];yn.prototype[n]=function(){var r=this._wrapped;return null!=r&&(t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0]),$r(this,r)}})),nr(["concat","join","slice"],(function(n){var t=s[n];yn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=t.apply(n,arguments)),$r(this,n)}}));const Kr=yn;var Jr=Hr(t);Jr._=Jr,window.wp.data,window.wp.mediaUtils;const{prcCBLIconLibrary:Gr}=window,Qr="core/template-part",Xr="prc-core-block-library/template-part";(0,u.addFilter)("blocks.registerBlockType",Xr,((n,t)=>(Qr!==t||(console.log("Tempalte Part -> settings",n),n&&!n.__experimentalLayout&&(n.__experimentalLayout={allowSwitching:!0,allowInheriting:!0,allowEditing:!0,default:{type:"flex"}})),n))),(0,u.addFilter)("editor.BlockEdit",Xr,(0,o.createHigherOrderComponent)((n=>function(t){const{name:e,attributes:u,setAttributes:o,clientId:i}=t;return Qr!==e?(0,r.createElement)(n,t):(console.log("core/template-part",t),t.style={display:"flex"},(0,r.createElement)(r.Fragment,null,(0,r.createElement)(n,t),(0,r.createElement)(c,{attributes:u,setAttributes:o,clientId:i})))}),"witTemplatePartlockAdvancedControls"),21)})();
//# sourceMappingURL=index.js.map