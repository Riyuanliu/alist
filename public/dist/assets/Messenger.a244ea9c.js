import{h as e,bD as i,ag as y,a as w,n as R,d as b,aP as r,b2 as c,bX as k,o as C,V as o,t as x,ad as T,ar as B,I as D,a2 as F,B as g,by as H,cI as L,aR as N}from"./index.e93e78ff.js";const P=t=>e(i,{get children(){return t.content}}),V=t=>e(y,{get src(){return t.content}}),W={string:P,image:V},M=()=>{const t=w();R.info(t("manage.messenger-tips"));const[a,l]=b(""),[d,u]=r(()=>c.post("/admin/message/get")),[p,h]=r(()=>c.post("/admin/message/send",{message:a()})),[m,S]=k([]),s=async()=>{const n=await u();H(n,f=>{S(L($=>$.push(f)))})},I=async()=>{const n=await h();N(n)},v=setInterval(s,1e3);return C(()=>clearInterval(v)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return t("manage.received_msgs")}}),e(x,{each:m,children:n=>e(T,B({get component(){return W[n.type]}},n))})]}}),e(D,{w:"$full",get value(){return a()},onInput:n=>l(n.currentTarget.value)}),e(F,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return t("manage.receive")}}),e(g,{get loading(){return p()},onClick:I,get children(){return t("manage.send")}})]}})]}})};export{M as Messenger,W as Shower,M as default};
