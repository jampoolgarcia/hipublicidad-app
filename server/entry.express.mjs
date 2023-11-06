import{s as we,r as be,m as Se}from"./assets/entry.ssr-f39d0fee.mjs";import{getNotFound as xe}from"./@qwik-city-not-found-paths.js";import{isStaticPath as Te}from"./@qwik-city-static-paths.js";import{createReadStream as ve}from"fs";import{join as O,basename as Re,extname as _e}from"path";import{fileURLToPath as ke}from"url";import{Http2ServerRequest as Ae}from"http2";import{TextEncoderStream as De,TextDecoderStream as Pe,WritableStream as Me,ReadableStream as Oe}from"stream/web";import{fetch as We,Headers as $e,Request as He,Response as Ce,FormData as je}from"undici";import Le from"crypto";import{_ as Ie,a as Ue,v as ze,q as Qe}from"./assets/@qwik-city-plan-7368948e.mjs";import B from"express";import{fileURLToPath as Fe}from"node:url";import{join as ne}from"node:path";var ie=class extends Error{constructor(e,t){super(t),this.status=e}};function Ne(e,t){let a="Server Error";return t!=null&&(typeof t.message=="string"?a=t.message:a=String(t)),"<html>"+se(e,a)+"</html>"}function se(e,t){typeof e!="number"&&(e=500),typeof t=="string"?t=Be(t):t="";const a=typeof t=="string"?"600px":"300px",r=e>=500?Ke:Je;return`
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${r}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${a}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${r}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${r}; color: white; }
    span { display: inline-block; padding: 15px; }
  </style>
</head>
<body><p><strong>${e}</strong> <span>${t}</span></p></body>
`}var Ge=/[&<>]/g,Be=e=>e.replace(Ge,t=>{switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return""}}),Je="#006ce9",Ke="#713fc2",Xe={lax:"Lax",none:"None",strict:"Strict"},Ye={seconds:1,minutes:1*60,hours:1*60*60,days:1*60*60*24,weeks:1*60*60*24*7},Ee=(e,t,a)=>{const r=[`${e}=${t}`];typeof a.domain=="string"&&r.push(`Domain=${a.domain}`),typeof a.maxAge=="number"?r.push(`Max-Age=${a.maxAge}`):Array.isArray(a.maxAge)?r.push(`Max-Age=${a.maxAge[0]*Ye[a.maxAge[1]]}`):typeof a.expires=="number"||typeof a.expires=="string"?r.push(`Expires=${a.expires}`):a.expires instanceof Date&&r.push(`Expires=${a.expires.toUTCString()}`),a.httpOnly&&r.push("HttpOnly"),typeof a.path=="string"&&r.push(`Path=${a.path}`);const i=Ze(a.sameSite);return i&&r.push(`SameSite=${i}`),a.secure&&r.push("Secure"),r.join("; ")},Ve=e=>{const t={};if(typeof e=="string"&&e!==""){const a=e.split(";");for(const r of a){const i=r.indexOf("=");i!==-1&&(t[decodeURIComponent(r.slice(0,i).trim())]=decodeURIComponent(r.slice(i+1).trim()))}}return t};function Ze(e){if(e===!0)return"Strict";if(e===!1)return"None";if(e)return Xe[e]}var k=Symbol("request-cookies"),G=Symbol("response-cookies"),v=Symbol("live-cookies"),oe,ce,qe=class{constructor(e){this[oe]={},this[ce]={},this[k]=Ve(e),this[v]={...this[k]}}get(e,t=!0){const a=this[t?v:k][e];return a?{value:a,json(){return JSON.parse(a)},number(){return Number(a)}}:null}getAll(e=!0){return Object.keys(this[e?v:k]).reduce((t,a)=>(t[a]=this.get(a),t),{})}has(e,t=!0){return!!this[t?v:k][e]}set(e,t,a={}){this[v][e]=typeof t=="string"?t:JSON.stringify(t);const r=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[G][e]=Ee(e,r,a)}delete(e,t){this.set(e,"deleted",{...t,maxAge:0}),this[v][e]=null}headers(){return Object.values(this[G])}};oe=G,ce=v;var J=class{},W=class extends J{},Y=new WeakMap,E="qaction",et="qfunc";function tt(e){const{url:t,params:a,request:r,status:i,locale:s}=e,o={};r.headers.forEach((f,p)=>o[p]=f);const n=e.sharedMap.get(L),l=e.sharedMap.get(me),c=e.sharedMap.get(gt);return{url:new URL(t.pathname+t.search,t).href,requestHeaders:o,locale:s(),nonce:c,qwikcity:{ev:e,params:{...a},loadedRoute:wt(e),response:{status:i(),loaders:I(e),action:n,formData:l}}}}var at=(e,t,a,r,i)=>{const s=[],o=[],n=[],l=!!(t&&ct(t[1]));return e&&V(s,o,n,e,l,a),t&&(r&&(a==="POST"||a==="PUT"||a==="PATCH"||a==="DELETE")&&n.unshift(lt),l&&(a==="POST"&&n.push(it),n.push(st),n.push(ut)),n.push(dt),V(s,o,n,t[1],l,a),l&&(n.push(rt(s,o)),n.push(i))),n},V=(e,t,a,r,i,s)=>{for(const o of r){typeof o.onRequest=="function"?a.push(o.onRequest):Array.isArray(o.onRequest)&&a.push(...o.onRequest);let n;switch(s){case"GET":{n=o.onGet;break}case"POST":{n=o.onPost;break}case"PUT":{n=o.onPut;break}case"PATCH":{n=o.onPatch;break}case"DELETE":{n=o.onDelete;break}case"OPTIONS":{n=o.onOptions;break}case"HEAD":{n=o.onHead;break}}if(typeof n=="function"?a.push(n):Array.isArray(n)&&a.push(...n),i){const l=Object.values(o).filter(f=>Z(f,"server_loader"));e.push(...l);const c=Object.values(o).filter(f=>Z(f,"server_action"));t.push(...c)}}},Z=(e,t)=>e&&typeof e=="function"&&e.__brand===t;function rt(e,t){return async a=>{if(a.headersSent){a.exit();return}const{method:r}=a,i=I(a),s=U(a)==="dev",o=a[j];if(s&&r==="GET"&&a.query.has(E)&&console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`),r==="POST"){const n=a.query.get(E);if(n){const l=globalThis._qwikActionsMap,c=t.find(f=>f.__id===n)??(l==null?void 0:l.get(n));if(c){a.sharedMap.set(L,n);const f=await a.parseBody();if(!f||typeof f!="object")throw new Error("Expected request data to be an object");const p=await q(a,c.__validators,f,s);if(!p.success)i[n]=a.fail(p.status??500,p.error);else{const m=s?await H(a,c.__qrl.getSymbol().split("_",1)[0],()=>c.__qrl.call(a,p.data,a)):await c.__qrl.call(a,p.data,a);s&&$(o,m,c.__qrl),i[n]=m}}}}e.length>0&&await Promise.all(e.map(n=>{const l=n.__id;return i[l]=q(a,n.__validators,void 0,s).then(c=>c.success?s?H(a,n.__qrl.getSymbol().split("_",1)[0],()=>n.__qrl.call(a,a)):n.__qrl.call(a,a):a.fail(c.status??500,c.error)).then(c=>(typeof c=="function"?i[l]=c():(s&&$(o,c,n.__qrl),i[l]=c),c))}))}}async function q(e,t,a,r){let i={success:!0,data:a};if(t)for(const s of t)if(r?i=await H(e,"validator$",()=>s.validate(e,a)):i=await s.validate(e,a),i.success)a=i.data;else return i;return i}function nt(e){return e&&typeof e=="object"&&Symbol.asyncIterator in e}async function it(e){const t=e.query.get(et);if(t&&e.request.headers.get("X-QRL")===t&&e.request.headers.get("Content-Type")==="application/qwik-json"){e.exit();const a=U(e)==="dev",r=e[j],i=await e.parseBody();if(Array.isArray(i)){const[s,...o]=i;if(ot(s)&&s.getHash()===t){let n;try{a?n=await H(e,`server_${s.getSymbol()}`,()=>s.apply(e,o)):n=await s.apply(e,o)}catch(l){e.headers.set("Content-Type","application/qwik-json"),e.send(500,await r._serializeData(l,!0));return}if(nt(n)){e.headers.set("Content-Type","text/qwik-json-stream");const c=e.getWritableStream().getWriter();for await(const f of n){a&&$(r,f,s);const p=await r._serializeData(f,!0);if(e.signal.aborted)break;await c.write(C.encode(`${p}
`))}c.close()}else{$(r,n,s),e.headers.set("Content-Type","application/qwik-json");const l=await r._serializeData(n,!0);e.send(200,l)}return}}throw e.error(500,"Invalid request")}}function st(e){const t=K(e),{basePathname:a,pathname:r,url:i,sharedMap:s}=e;if(!s.has(A)&&r!==a&&!r.endsWith(".html")){if(t){if(!r.endsWith("/"))throw e.redirect(302,r+"/"+i.search)}else if(r.endsWith("/"))throw e.redirect(302,r.slice(0,r.length-1)+i.search)}}function $(e,t,a){try{e._verifySerializable(t,void 0)}catch(r){throw r instanceof Error&&a.dev&&(r.loc=a.dev),r}}var ot=e=>typeof e=="function"&&typeof e.getSymbol=="function";function ct(e){const t=e[e.length-1];return t&&typeof t.default=="function"}function le(e,t){return e.pathname.endsWith(R)?e.pathname.slice(0,-R.length+(t?1:0))+e.search:e.pathname}var C=new TextEncoder;function lt(e){if(mt(e.request.headers,"application/x-www-form-urlencoded","multipart/form-data","text/plain")){const a=e.request.headers.get("origin"),r=e.url.origin;if(a!==r)throw e.error(403,`CSRF check failed. Cross-site ${e.method} form submissions are forbidden.
The request origin "${a}" does not match the server origin "${r}".`)}}function ft(e){return async t=>{if(t.headersSent||t.sharedMap.has(A))return;t.request.headers.forEach((p,m)=>p);const r=t.headers;r.has("Content-Type")||r.set("Content-Type","text/html; charset=utf-8");const i=K(t),{readable:s,writable:o}=new TextEncoderStream,n=t.getWritableStream(),l=s.pipeTo(n,{preventClose:!0}),c=o.getWriter(),f=t.status();try{const p=U(t)==="static",m=await e({base:t.basePathname+"build/",stream:c,serverData:tt(t),containerAttributes:{"q:render":p?"static":""}}),u={loaders:I(t),action:t.sharedMap.get(L),status:f!==200?f:200,href:le(t.url,i)};typeof m.html=="string"&&await c.write(m.html),t.sharedMap.set("qData",u)}finally{await c.ready,await c.close(),await l}await n.close()}}async function dt(e){if(e.sharedMap.has(A)){try{await e.next()}catch(s){if(!(s instanceof W))throw s}if(e.headersSent)return;const a=e.status(),r=e.headers.get("Location");if(a>=301&&a<=308&&r){const s=pt(r);if(s){e.headers.set("Location",s),e.getWritableStream().close();return}else e.status(200),e.headers.delete("Location")}}}async function ut(e){if(e.sharedMap.has(A)){if(await e.next(),e.headersSent||e.exited)return;const a=e.status(),r=e.headers.get("Location"),i=K(e);e.request.headers.forEach((c,f)=>c),e.headers.set("Content-Type","application/json; charset=utf-8");const s={loaders:I(e),action:e.sharedMap.get(L),status:a!==200?a:200,href:le(e.url,i),redirect:r??void 0},o=e.getWritableStream().getWriter(),l=await e[j]._serializeData(s,!0);o.write(C.encode(l)),e.sharedMap.set("qData",s),o.close()}}function pt(e){if(e.startsWith("/")){const t=R,a=new URL(e,"http://localhost");return(a.pathname.endsWith("/")?a.pathname.slice(0,-1):a.pathname)+(t.startsWith("/")?"":"/")+t+a.search}else return}function ee(){return typeof performance<"u"?performance.now():0}async function H(e,t,a){const r=ee();try{return await a()}finally{const i=ee()-r;let s=e.sharedMap.get("@serverTiming");s||e.sharedMap.set("@serverTiming",s=[]),s.push([t,i])}}function mt(e,...t){var a;const r=((a=e.get("content-type"))==null?void 0:a.split(/;,/,1)[0].trim())??"";return t.includes(r)}function ht(e){const t=[];return e==="day"?e=60*60*24:e==="week"?e=60*60*24*7:e==="month"?e=60*60*24*30:e==="year"?e=60*60*24*365:e==="private"?e={private:!0,noCache:!0}:e==="immutable"?e={public:!0,immutable:!0,maxAge:60*60*24*365,staleWhileRevalidate:60*60*24*365}:e==="no-cache"&&(e={noCache:!0}),typeof e=="number"&&(e={maxAge:e,sMaxAge:e,staleWhileRevalidate:e}),e.immutable&&t.push("immutable"),e.maxAge&&t.push(`max-age=${e.maxAge}`),e.sMaxAge&&t.push(`s-maxage=${e.sMaxAge}`),e.noStore&&t.push("no-store"),e.noCache&&t.push("no-cache"),e.private&&t.push("private"),e.public&&t.push("public"),e.staleWhileRevalidate&&t.push(`stale-while-revalidate=${e.staleWhileRevalidate}`),e.staleIfError&&t.push(`stale-if-error=${e.staleIfError}`),t.join(", ")}var fe=Symbol("RequestEvLoaders"),de=Symbol("RequestEvMode"),ue=Symbol("RequestEvRoute"),j=Symbol("RequestEvQwikSerializer"),pe=Symbol("RequestEvTrailingSlash"),L="@actionId",me="@actionFormData",gt="@nonce";function yt(e,t,a,r,i,s,o,n){const{request:l,platform:c,env:f}=e,p=new Map,m=new qe(l.headers.get("cookie")),u=new Headers,g=new URL(l.url);g.pathname.endsWith(R)&&(g.pathname=g.pathname.slice(0,-he),i&&!g.pathname.endsWith("/")&&(g.pathname+="/"),p.set(A,!0)),p.set("@manifest",r);let y=-1,w=null,b,X=e.locale,S=200;const ye=async()=>{for(y++;y<a.length;){const d=a[y],h=d(T);h instanceof Promise&&await h,y++}},_=()=>{if(w!==null)throw new Error("Response already sent")},P=(d,h)=>{if(_(),typeof d=="number"){S=d;const M=T.getWritableStream().getWriter();M.write(typeof h=="string"?C.encode(h):h),M.close()}else if(S=d.status,d.headers.forEach((x,M)=>{u.append(M,x)}),d.body){const x=T.getWritableStream();d.body.pipeTo(x)}else{if(S>=300&&S<400)return new W;T.getWritableStream().getWriter().close()}return z()},z=()=>(y=te,new J),Q={},T={[fe]:Q,[de]:e.mode,[pe]:i,[ue]:t,[j]:o,cookie:m,headers:u,env:f,method:l.method,signal:l.signal,params:(t==null?void 0:t[0])??{},pathname:g.pathname,platform:c,query:g.searchParams,request:l,url:g,basePathname:s,sharedMap:p,get headersSent(){return w!==null},get exited(){return y>=te},get clientConn(){return e.getClientConn()},next:ye,exit:z,cacheControl:d=>{_(),u.set("Cache-Control",ht(d))},resolveValue:async d=>{const h=d.__id;if(d.__brand==="server_loader"&&!(h in Q))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");return Q[h]},status:d=>typeof d=="number"?(_(),S=d,d):S,locale:d=>(typeof d=="string"&&(X=d),X||""),error:(d,h)=>(S=d,u.delete("Cache-Control"),new ie(d,h)),redirect:(d,h)=>{if(_(),S=d,h){const x=h.replace(/([^:])\/{2,}/g,"$1/");h!==x&&console.warn(`Redirect URL ${h} is invalid, fixing to ${x}`),u.set("Location",x)}return u.delete("Cache-Control"),d>301&&u.set("Cache-Control","no-store"),z(),new W},defer:d=>typeof d=="function"?d:()=>d,fail:(d,h)=>(_(),S=d,u.delete("Cache-Control"),{failed:!0,...h}),text:(d,h)=>(u.set("Content-Type","text/plain; charset=utf-8"),P(d,h)),html:(d,h)=>(u.set("Content-Type","text/html; charset=utf-8"),P(d,h)),parseBody:async()=>b!==void 0?b:b=bt(T.request,p,o),json:(d,h)=>(u.set("Content-Type","application/json; charset=utf-8"),P(d,JSON.stringify(h))),send:P,isDirty:()=>w!==null,getWritableStream:()=>{if(w===null){if(e.mode==="dev"){const d=p.get("@serverTiming");d&&u.set("Server-Timing",d.map(h=>`${h[0]};dur=${h[1]}`).join(","))}w=e.getWritableStream(S,u,m,n,T)}return w}};return Object.freeze(T)}function I(e){return e[fe]}function K(e){return e[pe]}function wt(e){return e[ue]}function U(e){return e[de]}var te=Number.MAX_SAFE_INTEGER,bt=async(e,t,a)=>{var r;const i=e.clone(),s=((r=e.headers.get("content-type"))==null?void 0:r.split(/[;,]/,1)[0].trim())??"";if(s==="application/x-www-form-urlencoded"||s==="multipart/form-data"){const o=await i.formData();return t.set(me,o),St(o)}else{if(s==="application/json")return await i.json();if(s==="application/qwik-json")return a._deserializeData(await i.text())}},St=e=>{const t={};return e.forEach((a,r)=>{const i=r.split(".").filter(o=>o);let s=t;for(let o=0;o<i.length;o++){let n=i[o];o===i.length-1?n.endsWith("[]")?(n=n.slice(0,-2),s[n]=s[n]||[],s[n].push(a)):s[n]=a:s=s[n]={...s[n]}}}),t};function xt(e,t,a,r,i=!0,s="/",o){let n;const l=new Promise(f=>n=f),c=yt(e,t,a,r,i,s,o,n);return{response:l,requestEv:c,completion:Tt(c,n)}}async function Tt(e,t){try{await e.next()}catch(a){if(a instanceof W)await e.getWritableStream().close();else if(a instanceof ie){if(console.error(a),!e.headersSent){const r=Ne(a.status,a),i=a.status;e.html(i,r)}}else if(!(a instanceof J)){if(U(e)!=="dev")try{e.headersSent||(e.headers.set("content-type","text/html; charset=utf-8"),e.cacheControl({noCache:!0}),e.status(500));const r=e.getWritableStream();if(!r.locked){const i=r.getWriter();await i.write(C.encode(se(500,"Internal Server Error"))),await i.close()}}catch{console.error("Unable to render error page")}return a}}finally{e.isDirty()||t(null)}}function vt(e,t){if(e.endsWith(R)){const a=e.length-he+(t?1:0);e=e.slice(0,a),e===""&&(e="/")}return e}var A="@isQData",R="/q-data.json",he=R.length,Rt=async(e,t,a,r)=>{if(Array.isArray(e))for(const i of e){const s=i[0].exec(r);if(s){const o=i[1],n=kt(i[2],s),l=i[4],c=new Array(o.length),f=[],p=_t(t,r);let m;return o.forEach((u,g)=>{ae(u,f,y=>c[g]=y,a)}),ae(p,f,u=>m=u==null?void 0:u.default,a),f.length>0&&await Promise.all(f),[n,c,m,l]}}return null},ae=(e,t,a,r)=>{if(typeof e=="function"){const i=Y.get(e);if(i)a(i);else{const s=e();typeof s.then=="function"?t.push(s.then(o=>{r!==!1&&Y.set(e,o),a(o)})):s&&a(s)}}},_t=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const a=e.find(r=>r[0]===t||t.startsWith(r[0]+(t.endsWith("/")?"":"/")));if(a)return a[1]}},kt=(e,t)=>{const a={};if(e)for(let r=0;r<e.length;r++){const i=(t==null?void 0:t[r+1])??"",s=i.endsWith("/")?i.slice(0,-1):i;a[e[r]]=decodeURIComponent(s)}return a};async function At(e,t,a){const{render:r,qwikCityPlan:i,manifest:s,checkOrigin:o}=t,n=e.url.pathname,l=vt(n,i.trailingSlash),c=await Dt(i,l,e.request.method,o??!0,r);return c?xt(e,c[0],c[1],s,i.trailingSlash,i.basePathname,a):null}async function Dt(e,t,a,r,i){const{routes:s,serverPlugins:o,menus:n,cacheModules:l}=e,c=await Rt(s,n,l,t),f=at(o,c,a,r,ft(i));return f.length>0?[c,f]:null}function F(e,t){var a;return((a=t==null?void 0:t.getOrigin)==null?void 0:a.call(t,e))??(t==null?void 0:t.origin)??process.env.ORIGIN??Pt(e)}function Pt(e){const{PROTOCOL_HEADER:t,HOST_HEADER:a}=process.env,r=e.headers,i=t&&r[t]||(e.socket.encrypted||e.connection.encrypted?"https":"http"),s=a??(e instanceof Ae?":authority":"host"),o=r[s];return`${i}://${o}`}function N(e,t){return Ot(e.originalUrl||e.url||"/",t)}var Mt=/\/\/|\\\\/g;function Ot(e,t){return new URL(e.replace(Mt,"/"),t)}async function Wt(e,t,a,r,i){const s=new Headers,o=t.headers;for(const m in o){const u=o[m];if(typeof u=="string")s.set(m,u);else if(Array.isArray(u))for(const g of u)s.append(m,g)}const n=async function*(){for await(const m of t)yield m},l=t.method==="HEAD"||t.method==="GET"?void 0:n(),c=new AbortController,f={method:t.method,headers:s,body:l,signal:c.signal,duplex:"half"};return a.on("close",()=>{c.abort()}),{mode:r,url:e,request:new Request(e.href,f),env:{get(m){return process.env[m]}},getWritableStream:(m,u,g)=>{a.statusCode=m,u.forEach((w,b)=>a.setHeader(b,w));const y=g.headers();return y.length>0&&a.setHeader("Set-Cookie",y),new WritableStream({write(w){a.write(w,b=>{b&&console.error(b)})},close(){a.end()}})},getClientConn:()=>i?i(t):{ip:t.socket.remoteAddress},platform:{ssr:!0,incomingMessage:t,node:process.versions.node},locale:void 0}}var $t={"3gp":"video/3gpp","3gpp":"video/3gpp",asf:"video/x-ms-asf",asx:"video/x-ms-asf",avi:"video/x-msvideo",avif:"image/avif",bmp:"image/x-ms-bmp",css:"text/css",flv:"video/x-flv",gif:"image/gif",htm:"text/html",html:"text/html",ico:"image/x-icon",jng:"image/x-jng",jpeg:"image/jpeg",jpg:"image/jpeg",js:"application/javascript",json:"application/json",kar:"audio/midi",m4a:"audio/x-m4a",m4v:"video/x-m4v",mid:"audio/midi",midi:"audio/midi",mng:"video/x-mng",mov:"video/quicktime",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",mpg:"video/mpeg",ogg:"audio/ogg",pdf:"application/pdf",png:"image/png",rar:"application/x-rar-compressed",shtml:"text/html",svg:"image/svg+xml",svgz:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",txt:"text/plain",wbmp:"image/vnd.wap.wbmp",webm:"video/webm",webp:"image/webp",wmv:"video/x-ms-wmv",woff:"font/woff",woff2:"font/woff2",xml:"text/xml",zip:"application/zip"};function Ht(){typeof global<"u"&&typeof globalThis.fetch!="function"&&typeof process<"u"&&process.versions.node&&(globalThis.fetch=We,globalThis.Headers=$e,globalThis.Request=He,globalThis.Response=Ce,globalThis.FormData=je),typeof globalThis.TextEncoderStream>"u"&&(globalThis.TextEncoderStream=De,globalThis.TextDecoderStream=Pe),typeof globalThis.WritableStream>"u"&&(globalThis.WritableStream=Me,globalThis.ReadableStream=Oe),typeof globalThis.crypto>"u"&&(globalThis.crypto=Le.webcrypto)}function Ct(e){var t;Ht();const a={_deserializeData:Ie,_serializeData:Ue,_verifySerializable:ze};e.manifest&&we(e.manifest);const r=((t=e.static)==null?void 0:t.root)??O(ke(import.meta.url),"..","..","dist");return{router:async(n,l,c)=>{try{const f=F(n,e),p=await Wt(N(n,f),n,l,"server",e.getClientConn),m=await At(p,e,a);if(m){const u=await m.completion;if(u)throw u;if(m.requestEv.headersSent)return}c()}catch(f){console.error(f),c(f)}},notFound:async(n,l,c)=>{try{if(!l.headersSent){const f=F(n,e),p=N(n,f),m=xe(p.pathname);l.writeHead(404,{"Content-Type":"text/html; charset=utf-8","X-Not-Found":p.pathname}),l.end(m)}}catch(f){console.error(f),c(f)}},staticFile:async(n,l,c)=>{var f;try{const p=F(n,e),m=N(n,p);if(Te(n.method||"GET",m)){const u=m.pathname;let g;Re(u).includes(".")?g=O(r,u):e.qwikCityPlan.trailingSlash?g=O(r,u+"index.html"):g=O(r,u,"index.html");const y=ve(g),w=_e(g).replace(/^\./,""),b=$t[w];b&&l.setHeader("Content-Type",b),(f=e.static)!=null&&f.cacheControl&&l.setHeader("Cache-Control",e.static.cacheControl),y.on("error",c),y.pipe(l);return}return c()}catch(p){console.error(p),c(p)}}}}const ge=ne(Fe(import.meta.url),"..","..","dist"),jt=ne(ge,"build"),re=process.env.PORT??3e3,{router:Lt,notFound:It}=Ct({render:be,qwikCityPlan:Qe,manifest:Se}),D=B();D.use("/build",B.static(jt,{immutable:!0,maxAge:"1y"}));D.use(B.static(ge,{redirect:!1}));D.use(Lt);D.use(It);D.listen(re,()=>{console.log(`Server started: http://localhost:${re}/`)});
