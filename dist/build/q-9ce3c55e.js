import{l as u,e as d,$ as t,c as a,a as r,p}from"./q-3d100afc.js";import{p as _}from"./q-8db188b2.js";const m=e=>{const[l]=u();return l(e.target.value)},f=e=>{d(a(()=>r(()=>Promise.resolve().then(()=>n),void 0),"s_mqtpmDfyS6M"));const l=()=>`Hola, buen día. Estoy interesado en la compra del producto: Porta Folletos, Por la cantidad de ${e.quatity.value}, con las medidas de ${e.product.sizes[e.selectedSize.value]}, el cual tendría un valor de ${e.price.value} Soles.`,i=a(()=>r(()=>Promise.resolve().then(()=>n),void 0),"s_XP3sY1NIhrA",[e]),c=a(()=>r(()=>Promise.resolve().then(()=>n),void 0),"s_tD5KSvrevqI",[e]);return t("div",null,{class:"w-full"},[t("div",null,{class:"radio-button flex items-start gap-2 mb-3"},e.product.sizes.map((o,s)=>t("div",null,null,[t("input",{checked:s===0,id:o,onClick$:a(()=>r(()=>Promise.resolve().then(()=>n),void 0),"s_wNk0wY3k58g",[s,c]),value:s},{name:"sizes",type:"radio"},null,2,null),t("label",{for:o},null,o,1,null)],1,s)),1,null),t("div",null,{class:"flex justify-start space-x-2 w-full"},[t("div",null,{class:"flex flex-col items-start space-y-1 flex-grow-0"},[t("label",null,{class:"text-gray-500 text-base"},"Cant.",3,null),t("input",null,{class:"text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light",id:"quantity",inputMode:"numeric",min:"1",name:"quantity",onChange$:a(()=>r(()=>Promise.resolve().then(()=>n),void 0),"s_xqcZWLceeQY",[i]),step:"1",type:"number",value:"1"},null,3,null)],3,null),t("div",null,{class:"flex flex-col items-start justify-end space-y-1 flex-grow"},t("a",{href:`https://api.whatsapp.com/send/?phone=${_}&text=${l()}&type=phone_number&app_absent=0`},{"aria-label":"cart-button",class:"pt-3 max-w-xs pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex    justify-center items-baseline  hover:bg-blue-700 transition-transform duration-500 active:scale-110",target:"_blank"},[t("i",null,{class:"fa-brands fa-whatsapp mr-2"},null,3,null),"Enviar Mensaje"],3,null),1,null)],1,null)],1,"vX_0")},b=e=>{const[l]=u();return l.selectedSize.value=Number(e)},v=`.radio-button input[type=radio]{display:none}.radio-button label{display:inline-block;background-color:#fff;border-radius:15px;padding:4px 11px;font-family:Arial;font-size:18px;cursor:pointer}.radio-button input[type=radio]:checked+label{background-color:var(--primary-color);color:#fff}
`,y=v,x=e=>{const[l]=u();return l.quatity.value=Number(e)},h=()=>{const[e,l]=u();return l(`${e}`)},n=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_0xe0cv1pJiE:f,s_XP3sY1NIhrA:x,s_mqtpmDfyS6M:y,s_tD5KSvrevqI:b,s_wNk0wY3k58g:h,s_xqcZWLceeQY:m},Symbol.toStringTag,{value:"Module"}));export{p as _hW,f as s_0xe0cv1pJiE,x as s_XP3sY1NIhrA,y as s_mqtpmDfyS6M,b as s_tD5KSvrevqI,h as s_wNk0wY3k58g,m as s_xqcZWLceeQY};
