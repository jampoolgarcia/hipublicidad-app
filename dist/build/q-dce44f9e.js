import{_ as i,l as F,s as G,Q as st,i as at,u as it,E as lt,U as ct,N as O,k as ut,I as j,Y as f,C as dt,h as _t,c as M,j as mt,p as pt}from"./q-1a20be14.js";import{t as vt,j as K,k as $,r as Z,l as tt,m as et,n as Q,o as ft,p as yt,q as ht,s as P,v as w,w as Et,x as St,y as Ct,c as Rt,C as Lt,d as bt,D as wt,R as gt,e as qt,f as It,h as Pt,i as Dt}from"./q-e7c1121f.js";const At=":root{view-transition-name:none}";const S=()=>i(()=>import("./q-a472dfdf.js"),["build/q-a472dfdf.js","build/q-1a20be14.js"]),W=[[/^\/$/,[S,()=>i(()=>import("./q-98aacd2b.js"),["build/q-98aacd2b.js","build/q-1a20be14.js"])]],[/^\/products\/details\/([^/]+?)\/?$/,[S,()=>i(()=>import("./q-68a96c92.js"),["build/q-68a96c92.js","build/q-1a20be14.js","build/q-e7c1121f.js"])],["id"]],[/^\/about\/?$/,[S,()=>i(()=>import("./q-e6f226e9.js"),["build/q-e6f226e9.js","build/q-1a20be14.js"])]],[/^\/mission\/?$/,[S,()=>i(()=>import("./q-800fbf83.js"),["build/q-800fbf83.js","build/q-1a20be14.js"])]],[/^\/products\/?$/,[S,()=>i(()=>import("./q-e0468777.js"),["build/q-e0468777.js","build/q-1a20be14.js","build/q-e7c1121f.js"])]],[/^\/vision\/?$/,[S,()=>i(()=>import("./q-864ba406.js"),["build/q-864ba406.js","build/q-1a20be14.js"])]],[/^\/products\/([^/]+?)\/?$/,[S,()=>i(()=>import("./q-dbceb682.js"),["build/q-dbceb682.js","build/q-1a20be14.js","build/q-e7c1121f.js"])],["category"]]],z=[];const J=!0;const Tt=async(y,n)=>{const[h,C,a,R]=F(),{type:l="link",forceReload:m=y===void 0,replaceState:p=!1,scroll:L=!0}=typeof n=="object"?n:{forceReload:n},c=a.value.dest,o=y===void 0?c:vt(y,R.url);if(!K(o,c)){location.href=o.href;return}if(!m&&$(o,c)){l==="link"&&o.href!==location.href&&history.pushState(null,"",o),Z(l,o,new URL(location.href),tt()),l==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:l,dest:o,forceReload:m,replaceState:p,scroll:L},et(o,G()),Q(W,z,J,o.pathname),h.value=void 0,R.isNavigating=!0,new Promise(b=>{C.r=b})},kt=({track:y})=>{const[n,h,C,a,R,l,m,p,L,c,o]=F();async function b(){var Y;const[d,g]=y(()=>[c.value,n.value]),ot=st(""),D=o.url,v=g?"form":d.type,nt=d.replaceState;let r,q,V=null,U;{r=new URL(d.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let A=Q(W,z,J,r.pathname);U=G();const T=q=await et(r,U,!0,g);if(!T){c.untrackedValue={type:v,dest:r};return}const x=T.href,E=new URL(x,r);ft(E,r)||(r=E,A=Q(W,z,J,r.pathname)),V=await A}if(V){const[A,T,x]=V,E=T,rt=E[E.length-1];o.prevUrl=D,o.url=r,o.params={...A},c.untrackedValue={type:v,dest:r};const I=yt(q,o,E,ot);h.headings=rt.headings,h.menu=x,C.value=at(E),a.links=I.links,a.meta=I.meta,a.styles=I.styles,a.title=I.title,a.frontmatter=I.frontmatter;{L.viewTransition!==!1&&(document.__q_view_transition__=!0);let B;v==="popstate"&&(B=tt()),d.scroll&&(!d.forceReload||!$(r,D))&&(v==="link"||v==="popstate")&&(document.__q_scroll_restore__=()=>Z(v,r,D,B));const X=q==null?void 0:q.loaders,t=window;if(X&&Object.assign(m,X),ht.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),l(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const s=history.pushState,_=history.replaceState,k=e=>(e===null?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||w(document.documentElement),e);history.pushState=(e,u,H)=>(e=k(e),s.call(history,e,u,H)),history.replaceState=(e,u,H)=>(e=k(e),_.call(history,e,u,H))}document.body.addEventListener("click",s=>{if(s.defaultPrevented)return;const _=s.target.closest("a[href]");if(_&&!_.hasAttribute("preventdefault:click")){const k=_.getAttribute("href"),e=new URL(location.href),u=new URL(k,e);if(K(u,e)&&$(u,e)){if(s.preventDefault(),!u.hash&&!u.href.endsWith("#")){u.href!==e.href&&history.pushState(null,"",u),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),P({...w(document.documentElement),x:0,y:0}),location.reload();return}l(_.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const s=w(document.documentElement);P(s)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const s=w(document.documentElement);P(s),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(Y=t._qCityBootstrap)==null||Y.remove(),t._qCityBootstrap=void 0,Et.resolve()}if(v!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const s=w(document.documentElement);P(s)}St(window,v,D,r,nt),it(U).then(()=>{var _;const s=w(document.documentElement);P(s),t._qCityScrollEnabled=!0,o.isNavigating=!1,(_=p.r)==null||_.call(p)})}}}b()},Ot=y=>{lt(M(()=>i(()=>Promise.resolve().then(()=>N),void 0),"s_RPDJAz33WLA"));const n=Ct();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const h=ct("url");if(!h)throw new Error("Missing Qwik URL Env Data");const C=new URL(h),a=O({url:C,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),R={},l=ut(O(n.response.loaders,{deep:!1})),m=j({type:"initial",dest:C,forceReload:!1,replaceState:!1,scroll:!0}),p=O(Rt),L=O({headings:void 0,menu:void 0}),c=j(),o=n.response.action,b=o?n.response.loaders[o]:void 0,d=j(b?{id:o,data:n.response.formData,output:{result:b,status:n.response.status}}:void 0),g=M(()=>i(()=>Promise.resolve().then(()=>N),void 0),"s_fX0bDjeJa0E",[d,R,m,a]);return f(Lt,L),f(bt,c),f(wt,p),f(gt,a),f(qt,g),f(It,l),f(Pt,d),f(Dt,m),dt(M(()=>i(()=>Promise.resolve().then(()=>N),void 0),"s_02wMImzEAbk",[d,L,c,p,n,g,l,R,y,m,a])),_t(mt,null,3,"qY_0")},N=Object.freeze(Object.defineProperty({__proto__:null,_hW:pt,s_02wMImzEAbk:kt,s_RPDJAz33WLA:At,s_TxCFOy819ag:Ot,s_fX0bDjeJa0E:Tt},Symbol.toStringTag,{value:"Module"}));export{pt as _hW,kt as s_02wMImzEAbk,At as s_RPDJAz33WLA,Ot as s_TxCFOy819ag,Tt as s_fX0bDjeJa0E};
