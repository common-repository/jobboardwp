(()=>{"use strict";var e={n:o=>{var r=o&&o.__esModule?()=>o.default:()=>o;return e.d(r,{a:r}),r},d:(o,r)=>{for(var t in r)e.o(r,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:r[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)};const o=window.React,r=window.wp.blocks,t=window.wp.serverSideRender;var n=e.n(t);const b=window.wp.blockEditor,d=window.jQuery;var l=e.n(d);(0,r.registerBlockType)("jb-block/jb-job-post",{edit:function(e){l()("#jb-job-preview, #jb-job-draft, #jb_company_logo_plupload").attr("disabled","disabled");const r=(0,b.useBlockProps)();return(0,o.createElement)("div",{...r},(0,o.createElement)(n(),{block:"jb-block/jb-job-post"}))},save:function(){return null}})})();