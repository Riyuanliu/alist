!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,c,i=[],o=!0,a=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(l){a=!0,c=l}finally{try{o||null==t.return||t.return()}finally{if(a)throw c}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.700a9c7b.js","./File-legacy.331cd62d.js","./icon-legacy.3d5ec8a8.js","./index-legacy.170fce43.js","./index-legacy.fcb23a8b.js","./Layout-legacy.215e2627.js","./index-legacy.294563d8.js","./FolderTree-legacy.7984ac6b.js","./index-legacy.65103555.js"],(function(e){"use strict";var t,r,c,i,o,a,l,u,f,s,d;return{setters:[function(n){t=n.a,r=n.d,c=n.W,i=n.h,o=n.a2,a=n.B,l=n.cW,u=n.cX,f=n.Q,s=n.cV},function(n){d=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),y=n(r(!1),2),g=y[0],m=y[1],h=n(r(!1),2),p=h[0],b=h[1],j=c().currentObjLink;return i(d,{get children(){return i(o,{spacing:"$2",get children(){return[i(a,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(l,"/i/").concat(u(encodeURIComponent(f.raw_url)+"/"+s(encodeURIComponent(f.obj.name))),".plist")},onClick:function(){m(!0)},get children(){return e("home.preview.".concat(g()?"installing":"install"))}}),i(a,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(j(!0))},onClick:function(){b(!0)},get children(){return e("home.preview.".concat(p()?"tr-installing":"tr-install"))}})]}})}})}))}}}))}();
