import{f as _,d as p,h as P,P as u,j as b,c as f,a as d,l as k}from"./q-3d100afc.js";import{u as A,a as g,g as C,b as D}from"./q-8ed0f3ea.js";const y=a=>{const e=A(),t=g(),{onClick$:s,reload:o,replaceState:n,scroll:h,...r}=(()=>a)(),c=_(()=>C(r,t)),l=_(()=>D(a,c,t));r["preventdefault:click"]=!!c,r.href=c||a.href;const i=l!=null?u(f(()=>d(()=>import("./q-bf69884b.js"),["build/q-bf69884b.js","build/q-8ed0f3ea.js","build/q-3d100afc.js"]),"s_eBQ0vFsFKsk")):void 0,v=u(f(()=>d(()=>Promise.resolve().then(()=>N),void 0),"s_i1Cv0pYJNR0",[e,o,n,h]));return p("a",{...r,children:P(b,null,3,"AD_0"),"data-prefetch":l,onClick$:[s,v],onFocus$:i,onMouseOver$:i,onQVisible$:i},null,0,"AD_1")},L=async(a,e)=>{const[t,s,o,n]=k();e.hasAttribute("preventdefault:click")&&(e.hasAttribute("q:nbs")?await t(location.href,{type:"popstate"}):e.href&&(e.setAttribute("aria-pressed","true"),await t(e.href,{forceReload:s,replaceState:o,scroll:n}),e.removeAttribute("aria-pressed")))},N=Object.freeze(Object.defineProperty({__proto__:null,s_8gdLBszqbaM:y,s_i1Cv0pYJNR0:L},Symbol.toStringTag,{value:"Module"}));export{y as s_8gdLBszqbaM,L as s_i1Cv0pYJNR0};
