import{bN as se,ar as D,bO as A,bP as S,a6 as j,H as z,h as e,Y as E,au as y,D as x,b as V,bJ as f,bQ as _,o as ae,aj as H,b2 as w,bF as ie,bR as le,bS as ce,bT as ue,a as ge,r as de,d as h,bU as pe,aP as P,V as he,bE as T,ag as fe,bD as me,S as b,I as O,bV as M,a_ as be,a2 as we,B as U,bd as _e,be as $e,bW as Ce,am as ve,by as N,n as v,b3 as xe}from"./index.e93e78ff.js";import{o as Se,c as ye}from"./index.a3485328.js";import{s as ke,g as Ie,a as Ge}from"./webauthn-json.browser-ponyfill.1c672167.js";const Le="https://github.com/alist-org/alist";function Re(s){return se(`${s}-${Le}`)}const Ee=j('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="896" width="967.8852157128662"><defs><path id="path-2" opacity="1" fill-rule="evenodd" d="M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"></path><linearGradient id="linearGradient-3" x1="0.5" y1="0" x2="0.5" y2="1"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-2" fill="url(#linearGradient-3)" fill-opacity="1"></use></g></svg>'),Pe=s=>{const u=D({startColor:"#28aff0",endColor:"#120fc4"},s);return(()=>{const n=Ee.cloneNode(!0),c=n.firstChild,g=c.firstChild,r=g.nextSibling,l=r.firstChild,a=l.nextSibling;return A(t=>{const i=u.startColor,d=u.endColor;return i!==t._v$&&S(l,"stop-color",t._v$=i),d!==t._v$2&&S(a,"stop-color",t._v$2=d),t},{_v$:void 0,_v$2:void 0}),n})()},Te=j('<svg height="1337" width="1337"><defs><path id="path-1" opacity="1" fill-rule="evenodd" d="M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"></path><linearGradient id="linearGradient-2" x1="0.79" y1="0.62" x2="0.21" y2="0.86"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-1" fill="url(#linearGradient-2)" fill-opacity="1"></use></g></svg>'),Oe=s=>{const u=D({startColor:"#28aff0",endColor:"#120fc4"},s);return(()=>{const n=Te.cloneNode(!0),c=n.firstChild,g=c.firstChild,r=g.nextSibling,l=r.firstChild,a=l.nextSibling;return A(t=>{const i=u.startColor,d=u.endColor;return i!==t._v$&&S(l,"stop-color",t._v$=i),d!==t._v$2&&S(a,"stop-color",t._v$2=d),t},{_v$:void 0,_v$2:void 0}),n})()},Ue=()=>{const s=z("#a9c6ff","#062b74");return e(E,{get bgColor(){return s()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh",get children(){return[e(E,{pos:"absolute",right:{"@initial":"-100px","@sm":"-300px"},top:{"@initial":"-1170px","@sm":"-900px"},get children(){return e(Oe,{})}}),e(E,{pos:"absolute",left:{"@initial":"-100px","@sm":"-200px"},bottom:{"@initial":"-760px","@sm":"-400px"},get children(){return e(Pe,{})}})]}})},ze=()=>{const s=y("sso_login_enabled"),u=x("sso_login_platform"),n=y("sso_compatibility_mode"),{searchParams:c,to:g}=V(),r=c.token;r!=null&&r!=""&&(f(r),g(decodeURIComponent(c.redirect||_||"/"),!0));function l(a){const t=a.data;t.token&&(f(t.token),g(decodeURIComponent(c.redirect||_||"/"),!0))}if(window.addEventListener("message",l),ae(()=>{window.removeEventListener("message",l)}),s){const a=()=>{const i=w.getUri()+"/auth/sso?method=sso_get_token";if(n){window.location.href=i;return}window.open(i,"authPopup","width=500,height=600")};let t;switch(u){case"Github":t=ue;break;case"Microsoft":t=Se;break;case"Google":t=ce;break;case"Dingtalk":t=le;break;default:t=ie}return e(H,{cursor:"pointer",boxSize:"$8",as:t,p:"$0_5",onclick:a})}},Ne=()=>{const s=x("logo").split(`
`),u=z(s[0],s.pop()),n=ge(),c=de(()=>`${n("login.login_to")} ${x("site_title")}`);ye(c);const g=z("white","$neutral1"),[r,l]=h(localStorage.getItem("username")||""),[a,t]=h(localStorage.getItem("password")||""),[i,d]=h(""),[$,J]=h(!1),[C,W]=pe("remember-pwd","false"),[k,B]=h(!1),[K,Z]=P(async()=>k()?w.post("/auth/login/ldap",{username:r(),password:a(),otp_code:i()}):w.post("/auth/login/hash",{username:r(),password:Re(a()),otp_code:i()})),[,q]=P((o,p,m)=>w.post("/authn/webauthn_finish_login?username="+m,JSON.stringify(p),{headers:{session:o}})),[,Q]=P(o=>w.get("/authn/webauthn_begin_login?username="+o)),{searchParams:I,to:G}=V(),Y=y("webauthn_login_enabled"),X=async()=>{J(!$())},L=async()=>{if($()){if(!ke()){v.error(n("users.webauthn_not_supported"));return}f(),C()==="true"?localStorage.setItem("username",r()):localStorage.removeItem("username");const o=await Q(r());xe(o,async p=>{const m=Ie(p.options),ne=await Ge(m),oe=await q(p.session,ne,r());N(oe,re=>{v.success(n("login.success")),f(re.token),G(decodeURIComponent(I.redirect||_||"/"),!0)})})}else{C()==="true"?(localStorage.setItem("username",r()),localStorage.setItem("password",a())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const o=await Z();N(o,p=>{v.success(n("login.success")),f(p.token),G(decodeURIComponent(I.redirect||_||"/"),!0)},(p,m)=>{!R()&&m===402?ee(!0):v.error(p)})}},[R,ee]=h(!1),F=y("ldap_login_enabled"),te=x("ldap_login_tips");return F&&B(!0),e(ve,{zIndex:"1",w:"$full",h:"100vh",get children(){return[e(he,{get bgColor(){return g()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[e(T,{alignItems:"center",justifyContent:"space-around",get children(){return[e(fe,{mr:"$2",boxSize:"$12",get src(){return u()}}),e(me,{color:"$info9",fontSize:"$2xl",get children(){return c()}})]}}),e(b,{get when(){return!R()},get fallback(){return e(O,{id:"totp",name:"otp",get placeholder(){return n("login.otp-tips")},get value(){return i()},onInput:o=>d(o.currentTarget.value),onKeyDown:o=>{o.key==="Enter"&&L()}})},get children(){return[e(O,{name:"username",get placeholder(){return n("login.username-tips")},get value(){return r()},onInput:o=>l(o.currentTarget.value)}),e(b,{get when(){return!$()},get children(){return e(O,{name:"password",get placeholder(){return n("login.password-tips")},type:"password",get value(){return a()},onInput:o=>t(o.currentTarget.value),onKeyDown:o=>{o.key==="Enter"&&L()}})}}),e(T,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[e(M,{get checked(){return C()==="true"},onChange:()=>W(C()==="true"?"false":"true"),get children(){return n("login.remember")}}),e(be,{as:"a",target:"_blank",get href(){return n("login.forget_url")},get children(){return n("login.forget")}})]}})]}}),e(we,{w:"$full",spacing:"$2",get children(){return[e(b,{get when(){return!$()},get children(){return e(U,{colorScheme:"primary",w:"$full",onClick:()=>{R()?d(""):(l(""),t(""))},get children(){return n("login.clear")}})}}),e(U,{w:"$full",get loading(){return K()},onClick:L,get children(){return n("login.login")}})]}}),e(b,{when:F,get children(){return e(M,{w:"$full",get checked(){return k()===!0},onChange:()=>B(!k()),children:te})}}),e(U,{w:"$full",colorScheme:"accent",onClick:()=>{f(),G(decodeURIComponent(I.redirect||_||"/"),!0)},get children(){return n("login.use_guest")}}),e(T,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[e(_e,{}),e($e,{}),e(ze,{}),e(b,{when:Y,get children(){return e(H,{cursor:"pointer",boxSize:"$8",as:Ce,p:"$0_5",onclick:X})}})]}})]}}),e(Ue,{})]}})};export{Ne as default};
