import{q as _,x as h,d as i,y as m,o as r,A as l,G as o,f as s,F as t,h as f,am as n,a3 as u,j as d,B as v,_ as C,J as S,c as g,a as y}from"./index-BrK2nRcc.js";import{_ as $}from"./_plugin-vue_export-helper-CHYzevpX.js";const b=_({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:h([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),w=i({name:"ElCard"}),P=i({...w,props:b,setup(c){const a=m("card");return(e,p)=>(r(),l("div",{class:o([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),l("div",{key:0,class:o(s(a).e("header"))},[t(e.$slots,"header",{},()=>[f(n(e.header),1)])],2)):u("v-if",!0),d("div",{class:o([s(a).e("body"),e.bodyClass]),style:v(e.bodyStyle)},[t(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),l("div",{key:1,class:o(s(a).e("footer"))},[t(e.$slots,"footer",{},()=>[f(n(e.footer),1)])],2)):u("v-if",!0)],2))}});var k=C(P,[["__file","card.vue"]]);const B=S(k),N={class:"header"},E={class:"extra"},V=i({__name:"PageContainer",props:{title:{required:!0,type:String}},setup(c){return(a,e)=>{const p=B;return r(),g(p,{class:"page-container"},{header:y(()=>[d("div",N,[d("span",null,n(c.title),1),d("div",E,[t(a.$slots,"extra",{},void 0,!0)])])]),default:y(()=>[t(a.$slots,"default",{},void 0,!0)]),_:3})}}}),z=$(V,[["__scopeId","data-v-66412243"]]);export{z as P};
