(()=>{var t={184:(t,e)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var s=typeof r;if("string"===s||"number"===s)t.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&t.push(i)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&t.push(c);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,r),s.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=window.wp.blocks,e=JSON.parse('{"apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json","name":"prc-block/layout-grid","description":"Align blocks to a global grid, with support for responsive breakpoints, gutter gap (block-spacing), and server side filtering of content.","title":"Grid","category":"design","supports":{"align":["full","wide"],"html":false,"color":{"background":true,"text":true},"spacing":{"margin":["top","bottom"],"padding":true,"blockGap":true},"__experimentalBorder":{"color":true,"width":true}},"attributes":{"presetLayout":{"type":"string"},"gutterSize":{"type":"string","default":"large"},"addGutterEnds":{"type":"boolean","default":true},"enableVerticalDivider":{"type":"boolean","default":false},"verticalAlignment":{"type":"string"}},"usesContext":["queryId","query","postId","postType"],"providesContext":{"prc-block/layout-grid/presetLayout":"presetLayout"},"example":{"innerBlocks":[{"name":"prc-block/layout-grid-column","innerBlocks":[{"name":"core/paragraph","attributes":{"customFontSize":32,"content":"<strong>Hello world!</strong>","align":"center"}}]},{"name":"prc-block/layout-grid-column","innerBlocks":[{"name":"core/image","attributes":{"url":"https://s.w.org/images/core/5.3/Windbuchencom.jpg"}}]}]},"editorScript":"file:./index.js","editorStyle":"file:./index.css","viewScript":"file:./view.js","style":"file:./view.css"}'),n=window.wp.element;var o=r(184),s=r.n(o);const i=window.lodash,c=window.wp.i18n,l=window.wp.blockEditor,a=window.wp.data,u="Tablet",h="Mobile";function d(t,e){return`column${t+1}${e}Span`}function p(t,e){return`column${t+1}${e}Offset`}const m=t=>t===u?8:t===h?4:12,g=function(t){let{peviewDeviceType:e,ref:r}=t;return(0,n.createElement)("div",{className:"prc-block-layout-grid__overlay",ref:r},(0,n.createElement)("div",{className:"prc-block-layout-grid__overlay__inner"},(0,i.times)(m(e)).map((t=>(0,n.createElement)("div",{className:"prc-block-layout-grid__overlay__column",key:t})))))},f=["prc-block/layout-grid-column"];function v(){return v=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},v.apply(this,arguments)}const w=window.wp.components;function b(t){return(0,n.createElement)(w.SVG,v({xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48"},t),(0,n.createElement)(w.Path,{d:"M7 12v24h34V12H7zm32 22H9V14h30v20z"}))}function y(t){return(0,n.createElement)(w.SVG,v({xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48"},t),(0,n.createElement)(w.Path,{d:"M7,12v24h34V12H7z M23,34H9V14h14V34z M39,34H25V14h14V34z"}))}function k(t){return(0,n.createElement)(w.SVG,v({xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48"},t),(0,n.createElement)(w.Path,{d:"M7 12v24h34V12H7zm23 2h9v20h-9V14zm-2 20h-8V14h8v20zM9 14h9v20H9V14z"}))}function S(t){return(0,n.createElement)(w.SVG,v({xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48"},t),(0,n.createElement)(w.Path,{d:"M7 12v24h34V12H7zm8 22H9V14h6v20zm8 0h-6V14h6v20zm8 0h-6V14h6v20zm8 0h-6V14h6v20z"}))}const O=function(t){let{columns:e,...r}=t;return 4===e?(0,n.createElement)(S,r):3===e?(0,n.createElement)(k,r):2===e?(0,n.createElement)(y,r):(0,n.createElement)(b,r)},E=[{name:"one-column",title:(0,c.__)("One"),description:(0,c.__)("One column","prc-block-library-primitives"),icon:(0,n.createElement)(O,{columns:1}),isDefault:!0,innerBlocks:[["prc-block/layout-grid-column"]],scope:["block"]},{name:"two-columns",title:(0,c.__)("Two"),description:(0,c.__)("Two columns","prc-block-library-primitives"),icon:(0,n.createElement)(O,{columns:2}),innerBlocks:[["prc-block/layout-grid-column"],["prc-block/layout-grid-column"]],scope:["block"]},{name:"three-columns",title:(0,c.__)("Three"),description:(0,c.__)("Three columns","prc-block-library-primitives"),icon:(0,n.createElement)(O,{columns:3}),innerBlocks:[["prc-block/layout-grid-column"],["prc-block/layout-grid-column"],["prc-block/layout-grid-column"]],scope:["block"]},{name:"four-columns",title:(0,c.__)("Four"),description:(0,c.__)("Four columns","prc-block-library-primitives"),icon:(0,n.createElement)(O,{columns:4}),innerBlocks:[["prc-block/layout-grid-column"],["prc-block/layout-grid-column"],["prc-block/layout-grid-column"],["prc-block/layout-grid-column"]],scope:["block"]}],{name:_,attributes:j}=e,V={icon:function(t){return t.size&&(t.width=t.size,t.height=t.size),(0,n.createElement)(w.SVG,v({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},t),(0,n.createElement)(w.Path,{d:"M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7.5 11.5H6c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h5.5v10zm4 0H13v-10h2.5v10zm4-.5c0 .3-.2.5-.5.5h-2v-10h2c.3 0 .5.2.5.5v9z"}))},edit:function(t){let{className:e,attributes:r,setAttributes:o,isSelected:i,clientId:c}=t;const v=(0,n.useRef)(),{presetLayout:w,gutterSize:b,addGutterEnds:y,enableVerticalDivider:k,verticalAlignment:S}=r,{columns:O,previewDeviceType:E}=(0,a.useSelect)((t=>{var e;const{getBlockCount:r}=t("core/block-editor");return{columns:r(c),previewDeviceType:null===(e=t("core/edit-post"))||void 0===e?void 0:e.__experimentalGetPreviewDeviceType()}}),[]);console.log("className",e);const _=(0,l.useBlockProps)({className:s()(e)}),j=(0,l.useInnerBlocksProps)({},{allowedBlocks:f,orientation:"horizontal",template:[["prc-block/layout-grid-column",{}]]});return(0,n.useEffect)((()=>{console.log("previewDeviceType",E),console.log("COLUMNS",O);const t=new class{constructor(t,e,r){this.attributes=t,this.device=e,this.columnCount=r}getGridValues(){const t={};for(let n=0;n<this.columnCount;n++){const o=(e=this.device,r=this.columnCount,e===u?3===r&&2===n?m(e):1<r?m(e)/2:m(e):e===h?m(e):m(e)/r);t[d(n,this.device)]=this.getSpan(n)||o,t[p(n,this.device)]=this.getOffset(n)}var e,r;return t}applyAdjustments(t){let e=this.getGridValues();for(let r=0;r<t.length;r++)e={...e,...t[r]};return e}getSpanAdjustment(t,e){return{[d(t,this.device)]:e}}getAdjustOffset(t,e){return{[p(t,this.device)]:e}}getShrinkOffset(t,e){const r=this.getOffset(t),n=e>=r?r:e;return{adjustment:this.getAdjustOffset(t,r-n),offsetUsed:n}}hasOverlaps(t){for(let e=0;e<t.length;e++){const r=t[e];for(let n=e+1;n<t.length;n++){const e=t[n];if(r.start>e.start&&r.start<e.end)return!0;if(r.end>e.start&&r.end<e.end)return!0}}return!1}validateGrid(t){const e=[],r=m(this.device);let n=0,o=0;for(let s=0;s<this.columnCount;s++){const i=t[d(s,this.device)],c=t[p(s,this.device)];if(o+=c,o>=r&&(o-=r),o+=i,o>r)return!1;e.push({start:n+c,end:n+c+i}),n+=i+c}return!(n>(s=this.device,i=this.columnCount,s===u&&2<i?2*m(s):s===h?m(s)*i:m(s))||this.hasOverlaps(e));var s,i}getEndAdjustments(t,e){const r=[];if(0>e)return[this.getAdjustOffset(t,this.getOffset(t)+Math.abs(e))];if(0<e)for(let n=t;n<this.columnCount&&0<e;n++){const t=this.getShrinkOffset(n,Math.abs(e));r.push(t.adjustment),e-=t.offsetUsed}return r}getStartMovedLeft(t,e){const r=[];for(let n=t;0<=n&&0<e;n--){const t=this.getShrinkOffset(n,e);r.push(t.adjustment),e-=t.offsetUsed}return r}getStartAdjustments(t,e){const r=this.getOffset(t),n=this.getOffsetFromStart(t,e),o=n-r;return 0>o?this.getStartMovedLeft(t,Math.abs(o)):[this.getAdjustOffset(t,n)]}getSpan(t){return this.attributes[d(t,this.device)]}getOffset(t){return this.attributes[p(t,this.device)]}getStart(t){let e=0;for(let r=0;r<t;r++)e+=this.getSpan(r)+this.getOffset(r);const r=Math.max(1,Math.floor(e/m(this.device)));return(e+this.getOffset(t))%(r*m(this.device))}getOffsetFromStart(t,e){if(0===t)return e;const r=e-this.getStart(t);return this.getOffset(t)+r}convertOffsetToStart(t,e){return this.getStart(t)+(e-this.getOffset(t))}getAdjustedGrid(t,e){const{start:r=this.getStart(t),span:n=this.getSpan(t)}=e;let o=[];r!==this.getStart(t)&&n!==this.getSpan(t)?(o=o.concat(this.getStartAdjustments(t,r)),o=o.concat(this.getSpanAdjustment(t,n))):n!==this.getSpan(t)?(o=o.concat(this.getSpanAdjustment(t,n)),o=o.concat(this.getEndAdjustments(t+1,n-this.getSpan(t)))):r!==this.getStart(t)&&(o=o.concat(this.getStartAdjustments(t,r)),o=o.concat(this.getEndAdjustments(t+1,r-this.getStart(t))));const s=this.applyAdjustments(o);return 0<o.length&&this.validateGrid(s)?s:null}}(r,E,O);console.log("GRID ",t)}),[E]),(0,n.createElement)("div",_,(0,n.createElement)(g,{previewDeviceType:E,ref:v}),(0,n.createElement)("div",j))},save:()=>(0,n.createElement)(l.InnerBlocks.Content,null),variations:E};(0,t.registerBlockType)(_,{...e,...V})})()})();
//# sourceMappingURL=index.js.map