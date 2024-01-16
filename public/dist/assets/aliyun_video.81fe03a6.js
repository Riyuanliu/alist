import{b as B,W as R,cQ as q,Q as c,au as H,cR as P,c9 as f,aw as T,bO as V,bP as D,aP as E,b2 as $,_ as U,ay as Q,b3 as C,n as z,o as J,d as Y,h as M,Y as G,a6 as K,p as A,cS as j}from"./index.e93e78ff.js";import{O as X,A as Z}from"./icon.cdca2cf5.js";import{A as tt,V as et}from"./video_box.1e05cc73.js";import{H as st,a as ot,b as nt}from"./hls.e42a602b.js";import"./index.a3485328.js";import"./index.c37c82b6.js";import"./Layout.6ea69baf.js";import"./index.bf7a55d7.js";import"./FolderTree.b82d4989.js";import"./index.40841693.js";const lt=K("<span></span>"),yt=()=>{var _,x,S;const{pathname:m,searchParams:L}=B(),{proxyLink:p}=R(),w=q();let u=c.objs.filter(e=>e.type===X.VIDEO);u.length===0&&(u=[c.obj]);const y=()=>{const e=u.findIndex(s=>s.name===c.obj.name);e<u.length-1&&w(A(j(location.pathname),u[e+1].name)+"?auto_fullscreen="+o.fullscreen)},F=()=>{const e=u.findIndex(s=>s.name===c.obj.name);e>0&&w(A(j(location.pathname),u[e-1].name)+"?auto_fullscreen="+o.fullscreen)};let o,i={id:m(),container:"#video-player",title:c.obj.name,volume:.5,autoplay:H("video_autoplay"),autoSize:!1,autoMini:!0,controls:[{name:"previous-button",index:10,position:"left",html:'<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" height="22" width="22" class="icon icon-tabler icon-tabler-player-track-prev-filled" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" stroke-width="0" fill="currentColor"></path><path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" stroke-width="0" fill="currentColor"></path></svg>',tooltip:"Previous",click:function(){F()}},{name:"next-button",index:11,position:"left",html:'<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" height="22" width="22" class="icon icon-tabler icon-tabler-player-track-next-filled" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" stroke-width="0" fill="currentColor"></path><path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" stroke-width="0" fill="currentColor"></path></svg>',tooltip:"Next",click:function(){y()}}],loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[],whitelist:[],settings:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,s){const n=new st;n.loadSource(s),n.attachMedia(e),e.src||(e.src=s)}},lang:["en","zh-cn","zh-tw"].includes(P().toLowerCase())?P().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const d=c.related.filter(e=>{for(const s of[".srt",".ass",".vtt"])if(e.name.endsWith(s))return!0;return!1}),g=c.related.find(e=>{for(const s of[".xml"])if(e.name.endsWith(s))return!0;return!1});if(d.length!=0){let a=function(t){switch(e?"ass":"webvtt"){case"ass":o.subtitle.show=!1,o.emit("artplayer-plugin-ass:visible",t);break;case"webvtt":default:o.subtitle.show=t,o.emit("artplayer-plugin-ass:visible",!1);break}},e=!1;const s=d[0];f(s.name).toLowerCase()==="ass"?(e=!0,(_=i.plugins)==null||_.push(ot({subUrl:p(s,!0)}))):i.subtitle={url:p(s,!0),type:f(s.name)};const n=[{id:"setting_subtitle_display",html:"Display",tooltip:"Show",switch:!0,onSwitch:function(t){var r;t.tooltip=t.switch?"Hide":"Show",a(!t.switch);const l=(r=i.settings)==null?void 0:r.find(h=>h.id==="setting_subtitle");return l&&(l.tooltip=t.tooltip),!t.switch}}];d.forEach((t,l)=>{n.push({default:l===0,html:(()=>{const r=lt.cloneNode(!0);return r.style.setProperty("display","inline-block"),r.style.setProperty("max-width","15em"),r.style.setProperty("text-overflow","ellipsis"),r.style.setProperty("overflow","hidden"),T(r,()=>t.name),V(()=>D(r,"title",t.name)),r})(),name:t.name,url:p(t,!0)})}),(x=i.settings)==null||x.push({id:"setting_subtitle",html:"Subtitle",tooltip:"Show",icon:Z({size:24}),selector:n,onSelect:function(t){var r,h;f(t.name).toLowerCase()==="ass"?(e=!0,this.emit("artplayer-plugin-ass:switch",t.url),a(!0)):(e=!1,this.subtitle.switch(t.url,{name:t.name}),this.once("subtitleLoad",a.bind(this,!0)));const l=n.find(W=>W.id==="setting_subtitle_display");return l&&!l.switch&&((h=(r=l.$html)==null?void 0:r.click)==null||h.call(r)),l==null?void 0:l.tooltip}})}g&&((S=i.plugins)==null||S.push(nt({danmuku:p(g,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})));const[rt,b]=E(()=>$.post("/fs/other",{path:m(),password:U(),method:"video_preview"}));Q(async()=>{const e=await b();C(e,s=>{const n=s.video_preview_play_info.live_transcoding_task_list.filter(t=>t.url);if(n.length===0){z.error("No transcoding video found");return}i.url=n[n.length-1].url,i.quality=n.map((t,l)=>({html:t.template_id,url:t.url,default:l===n.length-1})),o=new tt(i);let a;switch(L.auto_fullscreen){case"true":a=!0;case"false":a=!1;default:a=!1}o.on("ready",()=>{o.fullscreen=a}),o.on("video:ended",()=>{!N()||y()}),v=window.setInterval(I,1e3*60*14)})});let v,k;async function I(){const e=await b();C(e,async s=>{const n=s.video_preview_play_info.live_transcoding_task_list.filter(t=>t.url);if(n.length===0){z.error("No transcoding video found");return}const a=n.map((t,l)=>({html:t.template_id,url:t.url,default:l===n.length-1}));i.quality=a,o.quality=a,k=o.currentTime,await o.switchUrl(a[a.length-1].url),setTimeout(()=>{o.seek=k},1e3)})}J(()=>{o==null||o.destroy(),window.clearInterval(v)});const[N,O]=Y();return M(et,{onAutoNextChange:O,get children(){return M(G,{w:"$full",h:"60vh",id:"video-player"})}})};export{yt as default};
