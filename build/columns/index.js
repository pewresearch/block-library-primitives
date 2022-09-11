(()=>{"use strict";const e=window.wp.element,t=window.wp.i18n,r=window.wp.hooks,i=window.wp.compose,n=window.wp.blockEditor,o=window.wp.components,c=window.wp.blocks;console.log("Hello World -> src/columns/edit.js");const s=(0,e.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,e.createElement)(o.Path,{d:"M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7.5 11.5H6c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h5.5v10zm4 0H13v-10h2.5v10zm4-.5c0 .3-.2.5-.5.5h-2v-10h2c.3 0 .5.2.5.5v9z"}));(0,r.addFilter)("editor.BlockEdit","prc-block-library/columns",(0,i.createHigherOrderComponent)((r=>function(i){const{name:c,attributes:s,setAttributes:l}=i;if("core/columns"!==c)return(0,e.createElement)(r,i);const{useCSSGrid:d,className:a}=s,m=a?a.split(" "):[];return(0,e.useEffect)((()=>{d?m.push("is-css-grid"):m.splice(m.indexOf("is-css-grid"),1),l({className:m.join(" ")})}),[d]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(r,i),(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(o.PanelBody,{title:"CSS Grid"},(0,e.createElement)(o.ToggleControl,{label:(0,t.__)("Enable CSS Grid"),checked:d,onChange:()=>{l({useCSSGrid:!d})}}))))}),"withColumnsCSSGridControls"),21),(0,c.registerBlockVariation)("core/columns",{name:"css-grid",title:(0,t.__)("CSS Grid"),icon:s,description:(0,t.__)("A columns block set to use CSS Grid. This block is experimental and may change in the future."),attributes:{className:"is-css-grid",useCSSGrid:!0},innerBlocks:[["core/column",{gridStart:0,gridSpan:3}],["core/column",{gridStart:4,gridSpan:6}],["core/column",{gridStart:9,gridSpan:3}]],isActive:(e,t)=>e.useCSSGrid===t.useCSSGrid})})();
//# sourceMappingURL=index.js.map