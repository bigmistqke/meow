(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const l1=(n,e)=>n===e,es=Symbol("solid-proxy"),bu=Symbol("solid-track"),mc={equals:l1};let ig=ag;const er=1,gc=2,rg={owned:null,cleanups:null,context:null,owner:null},wl={};var Gt=null;let Rl=null,u1=null,Rt=null,rn=null,Yi=null,Gc=0;function tc(n,e){const t=Rt,i=Gt,r=n.length===0,s=e===void 0?i:e,o=r?rg:{owned:null,cleanups:null,context:s?s.context:null,owner:s},a=r?n:()=>n(()=>Mi(()=>Xc(o)));Gt=o,Rt=null;try{return Sr(a,!0)}finally{Rt=t,Gt=i}}function _n(n,e){e=e?Object.assign({},mc,e):mc;const t={value:n,observers:null,observerSlots:null,comparator:e.equals||void 0},i=r=>(typeof r=="function"&&(r=r(t.value)),og(t,r));return[sg.bind(t),i]}function hd(n,e,t){const i=Wc(n,e,!0,er);ho(i)}function fr(n,e,t){const i=Wc(n,e,!1,er);ho(i)}function Zr(n,e,t){ig=v1;const i=Wc(n,e,!1,er);i.user=!0,Yi?Yi.push(i):ho(i)}function _c(n,e,t){t=t?Object.assign({},mc,t):mc;const i=Wc(n,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=t.equals||void 0,ho(i),sg.bind(i)}function h1(n){return n&&typeof n=="object"&&"then"in n}function f1(n,e,t){let i,r,s;arguments.length===2&&typeof e=="object"||arguments.length===1?(i=!0,r=n,s={}):(i=n,r=e,s={});let o=null,a=wl,c=!1,l="initialValue"in s,u=typeof i=="function"&&_c(i);const f=new Set,[h,p]=(s.storage||_n)(s.initialValue),[g,_]=_n(void 0),[m,d]=_n(void 0,{equals:!1}),[T,S]=_n(l?"ready":"unresolved");function M(D,E,v,I){return o===D&&(o=null,I!==void 0&&(l=!0),(D===a||E===a)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(I,{value:E})),a=wl,L(E,v)),E}function L(D,E){Sr(()=>{E===void 0&&p(()=>D),S(E!==void 0?"errored":l?"ready":"unresolved"),_(E);for(const v of f.keys())v.decrement();f.clear()},!1)}function w(){const D=m1,E=h(),v=g();if(v!==void 0&&!o)throw v;return Rt&&!Rt.user&&D&&hd(()=>{m(),o&&(D.resolved||f.has(D)||(D.increment(),f.add(D)))}),E}function P(D=!0){if(D!==!1&&c)return;c=!1;const E=u?u():i;if(E==null||E===!1){M(o,Mi(h));return}const v=a!==wl?a:Mi(()=>r(E,{value:h(),refetching:D}));return h1(v)?(o=v,"value"in v?(v.status==="success"?M(o,v.value,void 0,E):M(o,void 0,void 0,E),v):(c=!0,queueMicrotask(()=>c=!1),Sr(()=>{S(l?"refreshing":"pending"),d()},!1),v.then(I=>M(v,I,void 0,E),I=>M(v,void 0,lg(I),E)))):(M(o,v,void 0,E),v)}return Object.defineProperties(w,{state:{get:()=>T()},error:{get:()=>g()},loading:{get(){const D=T();return D==="pending"||D==="refreshing"}},latest:{get(){if(!l)return w();const D=g();if(D&&!o)throw D;return h()}}}),u?hd(()=>P(!1)):P(!1),[w,{refetch:P,mutate:p}]}function d1(n){return Sr(n,!1)}function Mi(n){if(Rt===null)return n();const e=Rt;Rt=null;try{return n()}finally{Rt=e}}function fd(n){Zr(()=>Mi(n))}function p1(n){return Gt===null||(Gt.cleanups===null?Gt.cleanups=[n]:Gt.cleanups.push(n)),n}function Au(){return Rt}let m1;function sg(){if(this.sources&&this.state)if(this.state===er)ho(this);else{const n=rn;rn=null,Sr(()=>xc(this),!1),rn=n}if(Rt){const n=this.observers?this.observers.length:0;Rt.sources?(Rt.sources.push(this),Rt.sourceSlots.push(n)):(Rt.sources=[this],Rt.sourceSlots=[n]),this.observers?(this.observers.push(Rt),this.observerSlots.push(Rt.sources.length-1)):(this.observers=[Rt],this.observerSlots=[Rt.sources.length-1])}return this.value}function og(n,e,t){let i=n.value;return(!n.comparator||!n.comparator(i,e))&&(n.value=e,n.observers&&n.observers.length&&Sr(()=>{for(let r=0;r<n.observers.length;r+=1){const s=n.observers[r],o=Rl&&Rl.running;o&&Rl.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?rn.push(s):Yi.push(s),s.observers&&cg(s)),o||(s.state=er)}if(rn.length>1e6)throw rn=[],new Error},!1)),e}function ho(n){if(!n.fn)return;Xc(n);const e=Gc;g1(n,n.value,e)}function g1(n,e,t){let i;const r=Gt,s=Rt;Rt=Gt=n;try{i=n.fn(e)}catch(o){return n.pure&&(n.state=er,n.owned&&n.owned.forEach(Xc),n.owned=null),n.updatedAt=t+1,ug(o)}finally{Rt=s,Gt=r}(!n.updatedAt||n.updatedAt<=t)&&(n.updatedAt!=null&&"observers"in n?og(n,i):n.value=i,n.updatedAt=t)}function Wc(n,e,t,i=er,r){const s={fn:n,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:Gt,context:Gt?Gt.context:null,pure:t};return Gt===null||Gt!==rg&&(Gt.owned?Gt.owned.push(s):Gt.owned=[s]),s}function vc(n){if(n.state===0)return;if(n.state===gc)return xc(n);if(n.suspense&&Mi(n.suspense.inFallback))return n.suspense.effects.push(n);const e=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<Gc);)n.state&&e.push(n);for(let t=e.length-1;t>=0;t--)if(n=e[t],n.state===er)ho(n);else if(n.state===gc){const i=rn;rn=null,Sr(()=>xc(n,e[0]),!1),rn=i}}function Sr(n,e){if(rn)return n();let t=!1;e||(rn=[]),Yi?t=!0:Yi=[],Gc++;try{const i=n();return _1(t),i}catch(i){t||(Yi=null),rn=null,ug(i)}}function _1(n){if(rn&&(ag(rn),rn=null),n)return;const e=Yi;Yi=null,e.length&&Sr(()=>ig(e),!1)}function ag(n){for(let e=0;e<n.length;e++)vc(n[e])}function v1(n){let e,t=0;for(e=0;e<n.length;e++){const i=n[e];i.user?n[t++]=i:vc(i)}for(e=0;e<t;e++)vc(n[e])}function xc(n,e){n.state=0;for(let t=0;t<n.sources.length;t+=1){const i=n.sources[t];if(i.sources){const r=i.state;r===er?i!==e&&(!i.updatedAt||i.updatedAt<Gc)&&vc(i):r===gc&&xc(i,e)}}}function cg(n){for(let e=0;e<n.observers.length;e+=1){const t=n.observers[e];t.state||(t.state=gc,t.pure?rn.push(t):Yi.push(t),t.observers&&cg(t))}}function Xc(n){let e;if(n.sources)for(;n.sources.length;){const t=n.sources.pop(),i=n.sourceSlots.pop(),r=t.observers;if(r&&r.length){const s=r.pop(),o=t.observerSlots.pop();i<r.length&&(s.sourceSlots[o]=i,r[i]=s,t.observerSlots[i]=o)}}if(n.owned){for(e=n.owned.length-1;e>=0;e--)Xc(n.owned[e]);n.owned=null}if(n.cleanups){for(e=n.cleanups.length-1;e>=0;e--)n.cleanups[e]();n.cleanups=null}n.state=0}function lg(n){return n instanceof Error?n:new Error(typeof n=="string"?n:"Unknown error",{cause:n})}function ug(n,e=Gt){throw lg(n)}const x1=Symbol("fallback");function dd(n){for(let e=0;e<n.length;e++)n[e]()}function hg(n,e,t={}){let i=[],r=[],s=[],o=0,a=e.length>1?[]:null;return p1(()=>dd(s)),()=>{let c=n()||[],l,u;return c[bu],Mi(()=>{let h=c.length,p,g,_,m,d,T,S,M,L;if(h===0)o!==0&&(dd(s),s=[],i=[],r=[],o=0,a&&(a=[])),t.fallback&&(i=[x1],r[0]=tc(w=>(s[0]=w,t.fallback())),o=1);else if(o===0){for(r=new Array(h),u=0;u<h;u++)i[u]=c[u],r[u]=tc(f);o=h}else{for(_=new Array(h),m=new Array(h),a&&(d=new Array(h)),T=0,S=Math.min(o,h);T<S&&i[T]===c[T];T++);for(S=o-1,M=h-1;S>=T&&M>=T&&i[S]===c[M];S--,M--)_[M]=r[S],m[M]=s[S],a&&(d[M]=a[S]);for(p=new Map,g=new Array(M+1),u=M;u>=T;u--)L=c[u],l=p.get(L),g[u]=l===void 0?-1:l,p.set(L,u);for(l=T;l<=S;l++)L=i[l],u=p.get(L),u!==void 0&&u!==-1?(_[u]=r[l],m[u]=s[l],a&&(d[u]=a[l]),u=g[u],p.set(L,u)):s[l]();for(u=T;u<h;u++)u in _?(r[u]=_[u],s[u]=m[u],a&&(a[u]=d[u],a[u](u))):r[u]=tc(f);r=r.slice(0,o=h),i=c.slice(0)}return r});function f(h){if(s[u]=h,a){const[p,g]=_n(u);return a[u]=g,e(c[u],p)}return e(c[u])}}}function Is(n,e){return Mi(()=>n(e||{}))}const y1=n=>`Stale read from <${n}>.`;function wu(n){const e="fallback"in n&&{fallback:()=>n.fallback};return _c(hg(()=>n.each,n.children,e||void 0))}function M1(n){const e=n.keyed,t=_c(()=>n.when,void 0,{equals:(i,r)=>e?i===r:!i==!r});return _c(()=>{const i=t();if(i){const r=n.children;return typeof r=="function"&&r.length>0?Mi(()=>r(e?i:()=>{if(!Mi(t))throw y1("Show");return n.when})):r}return n.fallback},void 0,void 0)}function E1(n,e,t){let i=t.length,r=e.length,s=i,o=0,a=0,c=e[r-1].nextSibling,l=null;for(;o<r||a<s;){if(e[o]===t[a]){o++,a++;continue}for(;e[r-1]===t[s-1];)r--,s--;if(r===o){const u=s<i?a?t[a-1].nextSibling:t[s-a]:c;for(;a<s;)n.insertBefore(t[a++],u)}else if(s===a)for(;o<r;)(!l||!l.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[s-1]&&t[a]===e[r-1]){const u=e[--r].nextSibling;n.insertBefore(t[a++],e[o++].nextSibling),n.insertBefore(t[--s],u),e[r]=t[s]}else{if(!l){l=new Map;let f=a;for(;f<s;)l.set(t[f],f++)}const u=l.get(e[o]);if(u!=null)if(a<u&&u<s){let f=o,h=1,p;for(;++f<r&&f<s&&!((p=l.get(e[f]))==null||p!==u+h);)h++;if(h>u-a){const g=e[o];for(;a<u;)n.insertBefore(t[a++],g)}else n.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const pd="_$DX_DELEGATE";function S1(n,e,t,i={}){let r;return tc(s=>{r=s,e===document?n():ln(e,n(),e.firstChild?null:void 0,t)},i.owner),()=>{r(),e.textContent=""}}function Kn(n,e,t){let i;const r=()=>{const o=document.createElement("template");return o.innerHTML=n,o.content.firstChild},s=()=>(i||(i=r())).cloneNode(!0);return s.cloneNode=s,s}function fg(n,e=window.document){const t=e[pd]||(e[pd]=new Set);for(let i=0,r=n.length;i<r;i++){const s=n[i];t.has(s)||(t.add(s),e.addEventListener(s,T1))}}function md(n,e,t){t==null?n.removeAttribute(e):n.setAttribute(e,t)}function dg(n,e,t){return Mi(()=>n(e,t))}function ln(n,e,t,i){if(t!==void 0&&!i&&(i=[]),typeof e!="function")return yc(n,e,i,t);fr(r=>yc(n,e(),r,t),i)}function T1(n){const e=`$$${n.type}`;let t=n.composedPath&&n.composedPath()[0]||n.target;for(n.target!==t&&Object.defineProperty(n,"target",{configurable:!0,value:t}),Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return t||document}});t;){const i=t[e];if(i&&!t.disabled){const r=t[`${e}Data`];if(r!==void 0?i.call(t,r,n):i.call(t,n),n.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function yc(n,e,t,i,r){for(;typeof t=="function";)t=t();if(e===t)return t;const s=typeof e,o=i!==void 0;if(n=o&&t[0]&&t[0].parentNode||n,s==="string"||s==="number")if(s==="number"&&(e=e.toString()),o){let a=t[0];a&&a.nodeType===3?a.data!==e&&(a.data=e):a=document.createTextNode(e),t=ls(n,t,i,a)}else t!==""&&typeof t=="string"?t=n.firstChild.data=e:t=n.textContent=e;else if(e==null||s==="boolean")t=ls(n,t,i);else{if(s==="function")return fr(()=>{let a=e();for(;typeof a=="function";)a=a();t=yc(n,a,t,i)}),()=>t;if(Array.isArray(e)){const a=[],c=t&&Array.isArray(t);if(Ru(a,e,t,r))return fr(()=>t=yc(n,a,t,i,!0)),()=>t;if(a.length===0){if(t=ls(n,t,i),o)return t}else c?t.length===0?gd(n,a,i):E1(n,t,a):(t&&ls(n),gd(n,a));t=a}else if(e.nodeType){if(Array.isArray(t)){if(o)return t=ls(n,t,i,e);ls(n,t,null,e)}else t==null||t===""||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);t=e}}return t}function Ru(n,e,t,i){let r=!1;for(let s=0,o=e.length;s<o;s++){let a=e[s],c=t&&t[n.length],l;if(!(a==null||a===!0||a===!1))if((l=typeof a)=="object"&&a.nodeType)n.push(a);else if(Array.isArray(a))r=Ru(n,a,c)||r;else if(l==="function")if(i){for(;typeof a=="function";)a=a();r=Ru(n,Array.isArray(a)?a:[a],Array.isArray(c)?c:[c])||r}else n.push(a),r=!0;else{const u=String(a);c&&c.nodeType===3&&c.data===u?n.push(c):n.push(document.createTextNode(u))}}return r}function gd(n,e,t=null){for(let i=0,r=e.length;i<r;i++)n.insertBefore(e[i],t)}function ls(n,e,t,i){if(t===void 0)return n.textContent="";const r=i||document.createTextNode("");if(e.length){let s=!1;for(let o=e.length-1;o>=0;o--){const a=e[o];if(r!==a){const c=a.parentNode===n;!s&&!o?c?n.replaceChild(r,a):n.insertBefore(r,t):c&&a.remove()}else s=!0}}else n.insertBefore(r,t);return[r]}var ts=typeof self<"u"?self:{};function Cu(n,e){e:{for(var t=["CLOSURE_FLAGS"],i=ts,r=0;r<t.length;r++)if((i=i[t[r]])==null){t=null;break e}t=i}return(n=t&&t[n])!=null?n:e}function Nr(){throw Error("Invalid UTF8")}function _d(n,e){return e=String.fromCharCode.apply(null,e),n==null?e:n+e}let Ea,Cl;const b1=typeof TextDecoder<"u";let A1;const w1=typeof TextEncoder<"u";function pg(n){if(w1)n=(A1||=new TextEncoder).encode(n);else{let t=0;const i=new Uint8Array(3*n.length);for(let r=0;r<n.length;r++){var e=n.charCodeAt(r);if(e<128)i[t++]=e;else{if(e<2048)i[t++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<n.length){const s=n.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[t++]=e>>18|240,i[t++]=e>>12&63|128,i[t++]=e>>6&63|128,i[t++]=63&e|128;continue}r--}e=65533}i[t++]=e>>12|224,i[t++]=e>>6&63|128}i[t++]=63&e|128}}n=t===i.length?i:i.subarray(0,t)}return n}var Jo,mg=Cu(610401301,!1),R1=Cu(653718497,Cu(1,!0));const vd=ts.navigator;function Pu(n){return!!mg&&!!Jo&&Jo.brands.some(({brand:e})=>e&&e.indexOf(n)!=-1)}function Wn(n){var e;return(e=ts.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(n)!=-1}function dr(){return!!mg&&!!Jo&&Jo.brands.length>0}function Pl(){return dr()?Pu("Chromium"):(Wn("Chrome")||Wn("CriOS"))&&!(!dr()&&Wn("Edge"))||Wn("Silk")}function Bh(n){return Bh[" "](n),n}Jo=vd&&vd.userAgentData||null,Bh[" "]=function(){};var C1=!dr()&&(Wn("Trident")||Wn("MSIE"));!Wn("Android")||Pl(),Pl(),Wn("Safari")&&(Pl()||!dr()&&Wn("Coast")||!dr()&&Wn("Opera")||!dr()&&Wn("Edge")||(dr()?Pu("Microsoft Edge"):Wn("Edg/"))||dr()&&Pu("Opera"));var gg={},zo=null;function P1(n){var e=n.length,t=3*e/4;t%3?t=Math.floor(t):"=.".indexOf(n[e-1])!=-1&&(t="=.".indexOf(n[e-2])!=-1?t-2:t-1);var i=new Uint8Array(t),r=0;return function(s,o){function a(p){for(;c<s.length;){var g=s.charAt(c++),_=zo[g];if(_!=null)return _;if(!/^[\s\xa0]*$/.test(g))throw Error("Unknown base64 encoding at char: "+g)}return p}_g();for(var c=0;;){var l=a(-1),u=a(0),f=a(64),h=a(64);if(h===64&&l===-1)break;o(l<<2|u>>4),f!=64&&(o(u<<4&240|f>>2),h!=64&&o(f<<6&192|h))}}(n,function(s){i[r++]=s}),r!==t?i.subarray(0,r):i}function _g(){if(!zo){zo={};for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],t=0;t<5;t++){var i=n.concat(e[t].split(""));gg[t]=i;for(var r=0;r<i.length;r++){var s=i[r];zo[s]===void 0&&(zo[s]=r)}}}}var vg=typeof Uint8Array<"u",xg=!C1&&typeof btoa=="function";function xd(n){if(!xg){var e;e===void 0&&(e=0),_g(),e=gg[e];var t=Array(Math.floor(n.length/3)),i=e[64]||"";let c=0,l=0;for(;c<n.length-2;c+=3){var r=n[c],s=n[c+1],o=n[c+2],a=e[r>>2];r=e[(3&r)<<4|s>>4],s=e[(15&s)<<2|o>>6],o=e[63&o],t[l++]=a+r+s+o}switch(a=0,o=i,n.length-c){case 2:o=e[(15&(a=n[c+1]))<<2]||i;case 1:n=n[c],t[l]=e[n>>2]+e[(3&n)<<4|a>>4]+o+i}return t.join("")}for(e="",t=0,i=n.length-10240;t<i;)e+=String.fromCharCode.apply(null,n.subarray(t,t+=10240));return e+=String.fromCharCode.apply(null,t?n.subarray(t):n),btoa(e)}const yd=/[-_.]/g,L1={"-":"+",_:"/",".":"="};function I1(n){return L1[n]||""}function yg(n){if(!xg)return P1(n);yd.test(n)&&(n=n.replace(yd,I1)),n=atob(n);const e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}function la(n){return vg&&n!=null&&n instanceof Uint8Array}var Hs={};let D1;function Mg(n){if(n!==Hs)throw Error("illegal external caller")}function ns(){return D1||=new qi(null,Hs)}function kh(n){Mg(Hs);var e=n.g;return(e=e==null||la(e)?e:typeof e=="string"?yg(e):null)==null?e:n.g=e}var qi=class{constructor(n,e){if(Mg(e),this.g=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}h(){return new Uint8Array(kh(this)||0)}};function Eg(n,e){n.__closure__error__context__984382||(n.__closure__error__context__984382={}),n.__closure__error__context__984382.severity=e}let N1;function jc(){const n=Error();Eg(n,"incident"),function(e){ts.setTimeout(()=>{throw e},0)}(n)}function Lu(n){return Eg(n=Error(n),"warning"),n}function zh(){return typeof BigInt=="function"}function In(n){return Array.prototype.slice.call(n)}var fo=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Yc(n){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():n}var ua=Yc(),Md=Yc("0di"),Ll=Yc("2ex"),wo=Yc("1oa"),qc=fo?(n,e)=>{n[ua]|=e}:(n,e)=>{n.G!==void 0?n.G|=e:Object.defineProperties(n,{G:{value:e,configurable:!0,writable:!0,enumerable:!1}})},Mc=fo?(n,e)=>{n[ua]&=~e}:(n,e)=>{n.G!==void 0&&(n.G&=~e)},It=fo?n=>0|n[ua]:n=>0|n.G,pt=fo?n=>n[ua]:n=>n.G,Pt=fo?(n,e)=>{n[ua]=e}:(n,e)=>{n.G!==void 0?n.G=e:Object.defineProperties(n,{G:{value:e,configurable:!0,writable:!0,enumerable:!1}})};function os(n){return qc(n,34),n}function U1(n,e){Pt(e,-30975&(0|n))}function Iu(n,e){Pt(e,-30941&(34|n))}var Hh,ha={},Sg={};function Ed(n){return!(!n||typeof n!="object"||n.Ja!==Sg)}function Kc(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)&&n.constructor===Object}function Vh(n,e,t){if(n!=null){if(typeof n=="string")n=n?new qi(n,Hs):ns();else if(n.constructor!==qi)if(la(n))n=n.length?new qi(t?n:new Uint8Array(n),Hs):ns();else{if(!e)throw Error();n=void 0}}return n}function Ec(n){return!(!Array.isArray(n)||n.length)&&!!(1&It(n))}const Sd=[];function tr(n){if(2&n)throw Error()}Pt(Sd,55),Hh=Object.freeze(Sd);class Sc{constructor(e,t,i){this.l=0,this.g=e,this.h=t,this.m=i}next(){if(this.l<this.g.length){const e=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,e):e}}return{done:!0,value:void 0}}[Symbol.iterator](){return new Sc(this.g,this.h,this.m)}}let vr;function Tg(n,e){(e=vr?e[vr]:void 0)&&(n[vr]=In(e))}var F1=Object.freeze({}),O1=Object.freeze({}),B1=Object.freeze({});function $c(n){return n.Qa=!0,n}var k1=$c(n=>typeof n=="number"),Td=$c(n=>typeof n=="string"),z1=$c(n=>typeof n=="boolean"),Zc=typeof ts.BigInt=="function"&&typeof ts.BigInt(0)=="bigint",Du=$c(n=>Zc?n>=V1&&n<=W1:n[0]==="-"?bd(n,H1):bd(n,G1));const H1=Number.MIN_SAFE_INTEGER.toString(),V1=Zc?BigInt(Number.MIN_SAFE_INTEGER):void 0,G1=Number.MAX_SAFE_INTEGER.toString(),W1=Zc?BigInt(Number.MAX_SAFE_INTEGER):void 0;function bd(n,e){if(n.length>e.length)return!1;if(n.length<e.length||n===e)return!0;for(let t=0;t<n.length;t++){const i=n[t],r=e[t];if(i>r)return!1;if(i<r)return!0}}const X1=typeof Uint8Array.prototype.slice=="function";let bg,vt=0,Ut=0;function Ad(n){const e=n>>>0;vt=e,Ut=(n-e)/4294967296>>>0}function Vs(n){if(n<0){Ad(-n);const[e,t]=jh(vt,Ut);vt=e>>>0,Ut=t>>>0}else Ad(n)}function Gh(n){const e=bg||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+n,!0),Ut=0,vt=e.getUint32(0,!0)}function Wh(n,e){return 4294967296*e+(n>>>0)}function Xh(n,e){const t=2147483648&e;return t&&(e=~e>>>0,(n=1+~n>>>0)==0&&(e=e+1>>>0)),n=Wh(n,e),t?-n:n}function Tc(n,e){if(n>>>=0,(e>>>=0)<=2097151)var t=""+(4294967296*e+n);else zh()?t=""+(BigInt(e)<<BigInt(32)|BigInt(n)):(n=(16777215&n)+6777216*(t=16777215&(n>>>24|e<<8))+6710656*(e=e>>16&65535),t+=8147497*e,e*=2,n>=1e7&&(t+=n/1e7>>>0,n%=1e7),t>=1e7&&(e+=t/1e7>>>0,t%=1e7),t=e+wd(t)+wd(n));return t}function wd(n){return n=String(n),"0000000".slice(n.length)+n}function Jc(n){if(n.length<16)Vs(Number(n));else if(zh())n=BigInt(n),vt=Number(n&BigInt(4294967295))>>>0,Ut=Number(n>>BigInt(32)&BigInt(4294967295));else{const e=+(n[0]==="-");Ut=vt=0;const t=n.length;for(let i=e,r=(t-e)%6+e;r<=t;i=r,r+=6){const s=Number(n.slice(i,r));Ut*=1e6,vt=1e6*vt+s,vt>=4294967296&&(Ut+=Math.trunc(vt/4294967296),Ut>>>=0,vt>>>=0)}if(e){const[i,r]=jh(vt,Ut);vt=i,Ut=r}}}function jh(n,e){return e=~e,n?n=1+~n:e+=1,[n,e]}function Pr(n){return n==null||typeof n=="number"?n:n==="NaN"||n==="Infinity"||n==="-Infinity"?Number(n):void 0}function Ag(n){return n==null||typeof n=="boolean"?n:typeof n=="number"?!!n:void 0}const j1=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Qc(n){const e=typeof n;switch(e){case"bigint":return!0;case"number":return Number.isFinite(n)}return e==="string"&&j1.test(n)}function po(n){if(n==null)return n;if(typeof n=="string"){if(!n)return;n=+n}return typeof n=="number"&&Number.isFinite(n)?0|n:void 0}function Y1(n){if(n==null)return n;if(typeof n=="string"){if(!n)return;n=+n}return typeof n=="number"&&Number.isFinite(n)?n>>>0:void 0}function Rd(n){return n[0]!=="-"&&(n.length<20||n.length===20&&Number(n.substring(0,6))<184467)}function Yh(n){return n=Math.trunc(n),Number.isSafeInteger(n)||(Vs(n),n=Xh(vt,Ut)),n}function qh(n){var e=Math.trunc(Number(n));if(Number.isSafeInteger(e))return String(e);if((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),!(n[0]==="-"?n.length<20||n.length===20&&Number(n.substring(0,7))>-922337:n.length<19||n.length===19&&Number(n.substring(0,6))<922337))if(Jc(n),n=vt,2147483648&(e=Ut))if(zh())n=""+(BigInt(0|e)<<BigInt(32)|BigInt(n>>>0));else{const[t,i]=jh(n,e);n="-"+Tc(t,i)}else n=Tc(n,e);return n}function bc(n){return n==null?n:typeof n=="bigint"?(Du(n)?n=Number(n):(n=BigInt.asIntN(64,n),n=Du(n)?Number(n):String(n)),n):Qc(n)?typeof n=="number"?Yh(n):qh(n):void 0}function q1(n){if(n==null)return n;var e=typeof n;if(e==="bigint")return String(BigInt.asUintN(64,n));if(Qc(n)){if(e==="string")return e=Math.trunc(Number(n)),Number.isSafeInteger(e)&&e>=0?n=String(e):((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),Rd(n)||(Jc(n),n=Tc(vt,Ut))),n;if(e==="number")return(n=Math.trunc(n))>=0&&Number.isSafeInteger(n)?n:function(t){if(t<0){Vs(t);const i=Tc(vt,Ut);return t=Number(i),Number.isSafeInteger(t)?t:i}return Rd(String(t))?t:(Vs(t),Wh(vt,Ut))}(n)}}function wg(n){if(typeof n!="string")throw Error();return n}function mo(n){if(n!=null&&typeof n!="string")throw Error();return n}function xr(n){return n==null||typeof n=="string"?n:void 0}function Kh(n,e,t,i){if(n!=null&&typeof n=="object"&&n.X===ha)return n;if(!Array.isArray(n))return t?2&i?(n=e[Md])?e=n:(os((n=new e).u),e=e[Md]=n):e=new e:e=void 0,e;let r=t=It(n);return r===0&&(r|=32&i),r|=2&i,r!==t&&Pt(n,r),new e(n)}function K1(n,e,t){if(e)e:{if(!Qc(e=n))throw Lu("int64");switch(typeof e){case"string":e=qh(e);break e;case"bigint":if(n=e=BigInt.asIntN(64,e),Td(n)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(n))throw Error(String(n))}else if(k1(n)&&!Number.isSafeInteger(n))throw Error(String(n));e=Zc?BigInt(e):z1(e)?e?"1":"0":Td(e)?e.trim()||"0":String(e);break e;default:e=Yh(e)}}else e=bc(n);return typeof(t=(n=e)==null?t?0:void 0:n)=="string"&&(e=+t,Number.isSafeInteger(e))?e:t}function Rg(n){if(Ro===void 0&&(Ro=typeof Proxy=="function"?Ig(Proxy):null),!Ro||!Lg())return n;let e=Gs?.get(n);return e||(Math.random()>.01?n:(function(t){if(Il===void 0){const i=new Ro([],{});Il=Array.prototype.concat.call([],i).length===1}Il&&typeof Symbol=="function"&&Symbol.isConcatSpreadable&&(t[Symbol.isConcatSpreadable]=!0)}(n),e=new Ro(n,{set:(t,i,r)=>(jc(),t[i]=r,!0)}),function(t,i){(Gs||=new Jr).set(t,i),(Cg||=new Jr).set(i,t)}(n,e),e))}let Gs,Cg,Ro,Jr,Il,Qo,Ac,Pg,$1;function Lg(){return Jr===void 0&&(Jr=typeof WeakMap=="function"?Ig(WeakMap):null),Jr}function Ig(n){try{return n.toString().indexOf("[native code]")!==-1?n:null}catch{return null}}function $h(n,e,t){if(Lg()){if(Qo?.get(e)?.get(n)){if(t)return}else if(Math.random()>.01)return;var i=n.length;t={length:i};for(var r=0;r<Math.min(i,10);r++){if(i<=10)var s=r;else{s=i/10;const o=Math.floor(r*s);s=o+Math.floor(Math.random()*(Math.floor((r+1)*s)-o))}t[s]=n[s]}Dg(n,t)?((r=(i=Qo||=new Jr).get(e))||(r=new Jr,i.set(e,r)),r.set(n,t)):(jc(),ea(n,e))}}function wc(n,e){const t=Qo?.get(e)?.get(n);t&&!Dg(n,t)&&(jc(),ea(n,e))}function Dg(n,e){if(n.length!==e.length)return!1;for(const r in e){var t,i=Number(r);if((t=Number.isInteger(i))&&(t=n[i],i=e[i],t=!(Number.isNaN(t)?Number.isNaN(i):t===i)),t)return!1}return!0}function el(n){if(n&&Qo?.has(n)){var e=n.u;if(e)for(let t=0;t<e.length;t++){const i=e[t];if(t===e.length-1&&Kc(i))for(const r in i){const s=i[r];Array.isArray(s)&&wc(s,n)}else Array.isArray(i)&&wc(i,n)}}}function ea(n,e){Qo?.get(e)?.delete(n)}function yr(n,e,t){return n=Ng(n,e[0],e[1],t?1:2),e!==Pg&&t&&qc(n,16384),n}function Ng(n,e,t,i){if(i=i??0,n==null&&(n=Ac),Ac=void 0,n==null){var r=96;t?(n=[t],r|=512):n=[],e&&(r=-33521665&r|(1023&e)<<15)}else{if(!Array.isArray(n))throw Error("narr");if(2048&(r=It(n)))throw Error("farr");if(64&r)return n;if(i===1||i===2||(r|=64),t&&(r|=512,t!==n[0]))throw Error("mid");e:{if(i=(t=n).length){const s=i-1;if(Kc(t[s])){if((e=s-(+!!(512&(r|=256))-1))>=1024)throw Error("pvtlmt");r=-33521665&r|(1023&e)<<15;break e}}if(e){if((e=Math.max(e,i-(+!!(512&r)-1)))>1024)throw Error("spvt");r=-33521665&r|(1023&e)<<15}}}return Pt(n,r),n}const Z1={};let J1=function(){try{return Bh(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class Dl{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,t){return this.g.set(e,t),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,t){return this.g.forEach(e,t)}[Symbol.iterator](){return this.entries()}}const Q1=J1?(Object.setPrototypeOf(Dl.prototype,Map.prototype),Object.defineProperties(Dl.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Dl):class extends Map{constructor(){super()}};function Cd(n){return n}function Nl(n){if(2&n.M)throw Error("Cannot mutate an immutable Map")}var qn=class extends Q1{constructor(n,e,t=Cd,i=Cd){super();let r=It(n);r|=64,Pt(n,r),this.M=r,this.T=e,this.S=t,this.Z=this.T?ev:i;for(let s=0;s<n.length;s++){const o=n[s],a=t(o[0],!1,!0);let c=o[1];e?c===void 0&&(c=null):c=i(o[1],!1,!0,void 0,void 0,r),super.set(a,c)}}pa(n=Pd){if(this.size!==0)return this.Y(n)}Y(n=Pd){const e=[],t=super.entries();for(var i;!(i=t.next()).done;)(i=i.value)[0]=n(i[0]),i[1]=n(i[1]),e.push(i);return e}clear(){Nl(this),super.clear()}delete(n){return Nl(this),super.delete(this.S(n,!0,!1))}entries(){var n=this.oa();return new Sc(n,tv,this)}keys(){return this.Ia()}values(){var n=this.oa();return new Sc(n,qn.prototype.get,this)}forEach(n,e){super.forEach((t,i)=>{n.call(e,this.get(i),i,this)})}set(n,e){return Nl(this),(n=this.S(n,!0,!1))==null?this:e==null?(super.delete(n),this):super.set(n,this.Z(e,!0,!0,this.T,!1,this.M))}Oa(n){const e=this.S(n[0],!1,!0);n=n[1],n=this.T?n===void 0?null:n:this.Z(n,!1,!0,void 0,!1,this.M),super.set(e,n)}has(n){return super.has(this.S(n,!1,!1))}get(n){n=this.S(n,!1,!1);const e=super.get(n);if(e!==void 0){var t=this.T;return t?((t=this.Z(e,!1,!0,t,this.ta,this.M))!==e&&super.set(n,t),t):e}}oa(){return Array.from(super.keys())}Ia(){return super.keys()}[Symbol.iterator](){return this.entries()}};function ev(n,e,t,i,r,s){return n=Kh(n,i,t,s),r&&(n=nl(n)),n}function Pd(n){return n}function tv(n){return[n,this.get(n)]}let nv;function Ld(){return nv||=new qn(os([]),void 0,void 0,void 0,Z1)}function Zh(n,e,t,i,r){if(n!=null){if(Array.isArray(n))n=Ec(n)?void 0:r&&2&It(n)?n:tl(n,e,t,i!==void 0,r);else if(Kc(n)){const s={};for(let o in n)s[o]=Zh(n[o],e,t,i,r);n=s}else n=e(n,i);return n}}function tl(n,e,t,i,r){const s=i||t?It(n):0;i=i?!!(32&s):void 0;const o=In(n);for(let a=0;a<o.length;a++)o[a]=Zh(o[a],e,t,i,r);return t&&(Tg(o,n),t(s,o)),o}function iv(n){return Zh(n,Jh,void 0,void 0,!1)}function Jh(n){return n.X===ha?n.toJSON():n instanceof qn?n.pa(iv):function(e){switch(typeof e){case"number":return isFinite(e)?e:String(e);case"bigint":return Du(e)?Number(e):String(e);case"boolean":return e?1:0;case"object":if(e)if(Array.isArray(e)){if(Ec(e))return}else{if(la(e))return xd(e);if(e instanceof qi){const t=e.g;return t==null?"":typeof t=="string"?t:e.g=xd(t)}if(e instanceof qn)return e.pa()}}return e}(n)}function Nu(n,e,t=Iu){if(n!=null){if(vg&&n instanceof Uint8Array)return e?n:new Uint8Array(n);if(Array.isArray(n)){var i=It(n);return 2&i?n:(e&&=i===0||!!(32&i)&&!(64&i||!(16&i)),e?(Pt(n,-12293&(34|i)),n):tl(n,Nu,4&i?Iu:t,!0,!0))}return n.X===ha?(t=n.u,n=2&(i=pt(t))?n:Qh(n,t,i,!0)):n instanceof qn&&!(2&n.M)&&(t=os(n.Y(Nu)),n=new qn(t,n.T,n.S,n.Z)),n}}function Qh(n,e,t,i){return el(n),n=n.constructor,Ac=e=Ug(e,t,i),e=new n(e),Ac=void 0,e}function Ug(n,e,t){const i=t||2&e?Iu:U1,r=!!(32&e);return n=function(s,o,a){const c=In(s);var l=c.length;const u=256&o?c[l-1]:void 0;for(l+=u?-1:0,o=512&o?1:0;o<l;o++)c[o]=a(c[o]);if(u){o=c[o]={};for(const f in u)o[f]=a(u[f])}return Tg(c,s),c}(n,e,s=>Nu(s,r,i)),qc(n,32|(t?2:0)),n}function nl(n){const e=n.u,t=pt(e);return 2&t?Qh(n,e,t,!1):n}function Fg(n,e,t,i){return!(4&e)||t!=null}function Tr(n,e){return Ai(n=n.u,pt(n),e)}function Id(n,e,t,i){if(!((e=i+(+!!(512&e)-1))<0||e>=n.length||e>=t))return n[e]}function Ai(n,e,t,i){if(t===-1)return null;const r=e>>15&1023||536870912;if(!(t>=r)){var s=n.length;return i&&256&e&&(i=n[s-1][t])!=null?(Id(n,e,r,t)&&Ll!=null&&((e=(n=N1??={})[Ll]||0)>=4||(n[Ll]=e+1,jc())),i):Id(n,e,r,t)}return 256&e?n[n.length-1][t]:void 0}function xt(n,e,t){const i=n.u;let r=pt(i);return tr(r),At(i,r,e,t),n}function At(n,e,t,i){const r=e>>15&1023||536870912;if(t>=r){let s,o=e;if(256&e)s=n[n.length-1];else{if(i==null)return o;s=n[r+(+!!(512&e)-1)]={},o|=256}return s[t]=i,t<r&&(n[t+(+!!(512&e)-1)]=void 0),o!==e&&Pt(n,o),o}return n[t+(+!!(512&e)-1)]=i,256&e&&t in(n=n[n.length-1])&&delete n[t],e}function go(n,e,t,i,r){var s=2&e;r=Ai(n,e,t,r),Array.isArray(r)||(r=Hh);const o=!(2&i);i=!(1&i);const a=!!(32&e);let c=It(r);return c!==0||!a||s||o?1&c||(c|=1,Pt(r,c)):(c|=33,Pt(r,c)),s?(n=!1,2&c||(os(r),n=!!(4&c)),(i||n)&&Object.freeze(r)):(s=!!(2&c)||!!(2048&c),i&&s?(r=In(r),s=1,a&&!o&&(s|=32),Pt(r,s),At(n,e,t,r)):o&&32&c&&!s&&Mc(r,32)),r}function nc(n,e){n=n.u;let t=pt(n);const i=Ai(n,t,e),r=Pr(i);return r!=null&&r!==i&&At(n,t,e,r),r}function Og(n){n=n.u;let e=pt(n);const t=Ai(n,e,1),i=Vh(t,!0,!!(34&e));return i!=null&&i!==t&&At(n,e,1,i),i}function jr(){return F1===void 0?2:5}function Yr(n,e,t,i,r,s){const o=n.u;let a=pt(o);i=2&a?1:i,s=!!s,r=Bg(o,a,e,r);var c=It(r),l=r;if(wc(l,n),i!==2&&i!==1||ea(l,n),Fg(n,c,void 0)){4&c&&(r=In(r),c=is(c,a),a=At(o,a,e,r));let f=l=0;for(;l<r.length;l++){const h=t(r[l]);h!=null&&(r[f++]=h)}f<l&&(r.length=f),c=-4097&(20|(c=kg(c,a))),Pt(r,c&=-8193),2&c&&Object.freeze(r)}let u;return i===1||i===4&&32&c?Gi(c)||(n=c,(c|=2)!==n&&Pt(r,c),Object.freeze(r)):(t=i===5&&(!!(32&c)||Gi(c)||!!Gs?.get(r)),(i===2||t)&&Gi(c)&&(r=In(r),c=Ws(c=is(c,a),a,s),Pt(r,c),a=At(o,a,e,r)),Gi(c)||(e=c,(c=Ws(c,a,s))!==e&&Pt(r,c)),t?(u=Rg(r),$h(r,n,!0)):i!==2||s||Gs?.delete(r)),u||r}function Bg(n,e,t,i){return n=Ai(n,e,t,i),Array.isArray(n)?n:Hh}function kg(n,e){return n===0&&(n=is(n,e)),1|n}function Gi(n){return!!(2&n)&&!!(4&n)||!!(2048&n)}function zg(n){n=In(n);for(let e=0;e<n.length;e++){const t=n[e]=In(n[e]);Array.isArray(t[1])&&(t[1]=os(t[1]))}return n}function Uu(n,e,t,i){n=n.u;let r=pt(n);tr(r),At(n,r,e,(i==="0"?Number(t)===0:t===i)?void 0:t)}function Ul(n,e){var t=R0;return tf(ef(n=n.u),n,pt(n),t)===e?e:-1}function ef(n){if(fo)return n[wo]??(n[wo]=new Map);if(wo in n)return n[wo];const e=new Map;return Object.defineProperty(n,wo,{value:e}),e}function Hg(n,e,t,i){const r=ef(n),s=tf(r,n,e,t);return s!==i&&(s&&(e=At(n,e,s)),r.set(t,i)),e}function tf(n,e,t,i){let r=n.get(i);if(r!=null)return r;r=0;for(let s=0;s<i.length;s++){const o=i[s];Ai(e,t,o)!=null&&(r!==0&&(t=At(e,t,r)),r=o)}return n.set(i,r),r}function nf(n,e,t,i){let r,s=pt(n);if((i=Ai(n,s,t,i))!=null&&i.X===ha)return(e=nl(i))!==i&&At(n,s,t,e),e.u;if(Array.isArray(i)){const o=It(i);r=2&o?yr(Ug(i,o,!1),e,!0):64&o?i:yr(r,e,!0)}else r=yr(void 0,e,!0);return r!==i&&At(n,s,t,r),r}function Vg(n,e,t,i){n=n.u;let r=pt(n);return(e=Kh(i=Ai(n,r,t,i),e,!1,r))!==i&&e!=null&&At(n,r,t,e),e}function tt(n,e,t,i=!1){if((e=Vg(n,e,t,i))==null)return e;if(n=n.u,!(2&(i=pt(n)))){const r=nl(e);r!==e&&At(n,i,t,e=r)}return e}function Gg(n,e,t,i,r,s,o){const a=n.u;var c=!!(2&e);r=c?1:r,s=!!s,o&&=!c,c=Bg(a,e,i);var l=It(c),u=c;if(wc(u,n),r!==2&&r!==1||ea(u,n),!(u=!!(4&l))){var f=c,h=e;const g=!!(2&(l=kg(l,e)));g&&(h|=2);let _=!g,m=!0,d=0,T=0;for(;d<f.length;d++){const S=Kh(f[d],t,!1,h);if(S instanceof t){if(!g){const M=!!(2&It(S.u));_&&=!M,m&&=M}f[T++]=S}}T<d&&(f.length=T),l|=4,l=m?16|l:-17&l,Pt(f,l=_?8|l:-9&l),g&&Object.freeze(f)}if(o&&!(8&l||!c.length&&(r===1||r===4&&32&l))){for(Gi(l)?(c=In(c),l=is(l,e),e=At(a,e,i,c)):ea(c,n),t=c,o=l,f=0;f<t.length;f++)(l=t[f])!==(h=nl(l))&&(t[f]=h);o|=8,o=t.length?-17&o:16|o,Pt(t,o),l=o}let p;return r===1||r===4&&32&l?Gi(l)||(n=l,(l|=!c.length||16&l&&(!u||32&l)?2:2048)!==n&&Pt(c,l),Object.freeze(c)):(u=r===5&&(!!(32&l)||Gi(l)||!!Gs?.get(c)),(r===2||u)&&Gi(l)&&(c=In(c),l=Ws(l=is(l,e),e,s),Pt(c,l),e=At(a,e,i,c)),Gi(l)||(i=l,(l=Ws(l,e,s))!==i&&Pt(c,l)),u?(p=Rg(c),$h(c,n,!0)):r!==2||s||Gs?.delete(c)),p||c}function Ji(n,e,t){const i=pt(n.u);return Gg(n,i,e,t,jr(),!1,!(2&i))}function we(n,e,t,i){return i==null&&(i=void 0),xt(n,t,i)}function Xo(n,e,t,i){i==null&&(i=void 0);e:{n=n.u;let r=pt(n);if(tr(r),i==null){const s=ef(n);if(tf(s,n,r,t)!==e)break e;s.set(t,0)}else r=Hg(n,r,t,e);At(n,r,e,i)}}function is(n,e){return-2049&(n=32|(2&e?2|n:-3&n))}function Ws(n,e,t){return 32&e&&t||(n&=-33),n}function Rc(n,e,t,i){const r=pt(n.u);tr(r),n=Gg(n,r,t,e,2,!0),i=i??new t,n.push(i),2&It(i.u)?Mc(n,8):Mc(n,16)}function ci(n,e){return n??e}function Xn(n,e){return po(Tr(n,e))}function Ot(n,e){return ci(nc(n,e),0)}function Ei(n,e){return ci(xr(Tr(n,e)),"")}function ta(n,e,t){if(t!=null&&typeof t!="boolean")throw n=typeof t,Error(`Expected boolean but got ${n!="object"?n:t?Array.isArray(t)?"array":n:"null"}: ${t}`);xt(n,e,t)}function Si(n,e,t){if(t!=null){if(typeof t!="number"||!Number.isFinite(t))throw Lu("int32");t|=0}xt(n,e,t)}function Ee(n,e,t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);xt(n,e,t)}function Cc(n,e,t){{const a=n.u;let c=pt(a);if(tr(c),t==null)At(a,c,e);else{t=Cg?.get(t)||t;var i,r=It(t),s=r,o=!!(2&r)||Object.isFrozen(t);if((i=!o)&&((i=B1===void 0)||(i=!!R1&&O1!==void 0)),Fg(n,r)){r=21,o&&(t=In(t),s=0,r=Ws(r=is(r,c),c,!0));for(let l=0;l<t.length;l++)t[l]=wg(t[l])}i?(t=In(t),s=0,r=Ws(r=is(r,c),c,!0)):o||$h(t,n),r!==s&&Pt(t,r),At(a,c,e,t)}}}function il(n,e,t){tr(pt(n.u)),Yr(n,e,xr,2,void 0,!0).push(wg(t))}function Wg(n,e){return Error(`Invalid wire type: ${n} (at position ${e})`)}function rf(){return Error("Failed to read varint, encoding is invalid.")}function Xg(n,e){return Error(`Tried to read past the end of the data ${e} > ${n}`)}function sf(n){if(typeof n=="string")return{buffer:yg(n),O:!1};if(Array.isArray(n))return{buffer:new Uint8Array(n),O:!1};if(n.constructor===Uint8Array)return{buffer:n,O:!1};if(n.constructor===ArrayBuffer)return{buffer:new Uint8Array(n),O:!1};if(n.constructor===qi)return{buffer:kh(n)||new Uint8Array(0),O:!0};if(n instanceof Uint8Array)return{buffer:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),O:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function of(n,e){let t,i=0,r=0,s=0;const o=n.h;let a=n.g;do t=o[a++],i|=(127&t)<<s,s+=7;while(s<32&&128&t);for(s>32&&(r|=(127&t)>>4),s=3;s<32&&128&t;s+=7)t=o[a++],r|=(127&t)<<s;if(Qr(n,a),t<128)return e(i>>>0,r>>>0);throw rf()}function af(n){let e=0,t=n.g;const i=t+10,r=n.h;for(;t<i;){const s=r[t++];if(e|=s,(128&s)==0)return Qr(n,t),!!(127&e)}throw rf()}function br(n){const e=n.h;let t=n.g,i=e[t++],r=127&i;if(128&i&&(i=e[t++],r|=(127&i)<<7,128&i&&(i=e[t++],r|=(127&i)<<14,128&i&&(i=e[t++],r|=(127&i)<<21,128&i&&(i=e[t++],r|=i<<28,128&i&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++])))))throw rf();return Qr(n,t),r}function Ar(n){return br(n)>>>0}function Fu(n){var e=n.h;const t=n.g,i=e[t],r=e[t+1],s=e[t+2];return e=e[t+3],Qr(n,n.g+4),(i<<0|r<<8|s<<16|e<<24)>>>0}function Ou(n){var e=Fu(n);n=2*(e>>31)+1;const t=e>>>23&255;return e&=8388607,t==255?e?NaN:n*(1/0):t==0?1401298464324817e-60*n*e:n*Math.pow(2,t-150)*(e+8388608)}function rv(n){return br(n)}function Fl(n,e,{ca:t=!1}={}){n.ca=t,e&&(e=sf(e),n.h=e.buffer,n.m=e.O,n.j=0,n.l=n.h.length,n.g=n.j)}function Qr(n,e){if(n.g=e,e>n.l)throw Xg(n.l,e)}function jg(n,e){if(e<0)throw Error(`Tried to read a negative byte length: ${e}`);const t=n.g,i=t+e;if(i>n.l)throw Xg(e,n.l-t);return n.g=i,t}function Yg(n,e){if(e==0)return ns();var t=jg(n,e);return n.ca&&n.m?t=n.h.subarray(t,t+e):(n=n.h,t=t===(e=t+e)?new Uint8Array(0):X1?n.slice(t,e):new Uint8Array(n.subarray(t,e))),t.length==0?ns():new qi(t,Hs)}qn.prototype.toJSON=void 0,qn.prototype.Ja=Sg;var Dd=[];function qg(n){var e=n.g;if(e.g==e.l)return!1;n.l=n.g.g;var t=Ar(n.g);if(e=t>>>3,!((t&=7)>=0&&t<=5))throw Wg(t,n.l);if(e<1)throw Error(`Invalid field number: ${e} (at position ${n.l})`);return n.m=e,n.h=t,!0}function ic(n){switch(n.h){case 0:n.h!=0?ic(n):af(n.g);break;case 1:Qr(n=n.g,n.g+8);break;case 2:if(n.h!=2)ic(n);else{var e=Ar(n.g);Qr(n=n.g,n.g+e)}break;case 5:Qr(n=n.g,n.g+4);break;case 3:for(e=n.m;;){if(!qg(n))throw Error("Unmatched start-group tag: stream EOF");if(n.h==4){if(n.m!=e)throw Error("Unmatched end-group tag");break}ic(n)}break;default:throw Wg(n.h,n.l)}}function fa(n,e,t){const i=n.g.l,r=Ar(n.g),s=n.g.g+r;let o=s-i;if(o<=0&&(n.g.l=s,t(e,n,void 0,void 0,void 0),o=s-n.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return n.g.g=s,n.g.l=i,e}function cf(n){var e=Ar(n.g),t=jg(n=n.g,e);if(n=n.h,b1){var i,r=n;(i=Cl)||(i=Cl=new TextDecoder("utf-8",{fatal:!0})),e=t+e,r=t===0&&e===r.length?r:r.subarray(t,e);try{var s=i.decode(r)}catch(a){if(Ea===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Ea=!0}catch{Ea=!1}}throw!Ea&&(Cl=void 0),a}}else{e=(s=t)+e,t=[];let a,c=null;for(;s<e;){var o=n[s++];o<128?t.push(o):o<224?s>=e?Nr():(a=n[s++],o<194||(192&a)!=128?(s--,Nr()):t.push((31&o)<<6|63&a)):o<240?s>=e-1?Nr():(a=n[s++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=n[s++]))!=128?(s--,Nr()):t.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?s>=e-2?Nr():(a=n[s++],(192&a)!=128||a-144+(o<<28)>>30||(192&(i=n[s++]))!=128||(192&(r=n[s++]))!=128?(s--,Nr()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&r,o-=65536,t.push(55296+(o>>10&1023),56320+(1023&o)))):Nr(),t.length>=8192&&(c=_d(c,t),t.length=0)}s=_d(c,t)}return s}function Kg(n){const e=Ar(n.g);return Yg(n.g,e)}function rl(n,e,t){var i=Ar(n.g);for(i=n.g.g+i;n.g.g<i;)t.push(e(n.g))}var Sa=[];let Pc;function hi(n,e,t){e.g?e.m(n,e.g,e.h,t,!0):e.m(n,e.h,t,!0)}var ye=class{constructor(n,e){this.u=Ng(n,e)}toJSON(){return $g(this)}l(){var n=kv;return n.g?n.l(this,n.g,n.h,!0):n.l(this,n.h,n.defaultValue,!0)}clone(){const n=this.u;return Qh(this,n,pt(n),!1)}O(){return!!(2&It(this.u))}};function $g(n){el(n),n=Pc?n.u:tl(n.u,Jh,void 0,void 0,!1);{var e=!Pc;let l=n.length;if(l){var t=n[l-1],i=Kc(t);i?l--:t=void 0;var r=n;if(i){e:{var s,o=t,a=!1;if(o)for(let u in o)isNaN(+u)?(s??={})[u]=o[u]:(i=o[u],Array.isArray(i)&&(Ec(i)||Ed(i)&&i.size===0)&&(i=null),i==null&&(a=!0),i!=null&&((s??={})[u]=i));if(a||(s=o),s)for(let u in s){a=s;break e}a=null}o=a==null?t!=null:a!==t}for(;l>0&&((s=r[l-1])==null||Ec(s)||Ed(s)&&s.size===0);l--)var c=!0;(r!==n||o||c)&&(e?(c||o||a)&&(r.length=l):r=Array.prototype.slice.call(r,0,l),a&&r.push(a)),c=r}else c=n}return c}function Nd(n){return n?/^\d+$/.test(n)?(Jc(n),new Bu(vt,Ut)):null:sv||=new Bu(0,0)}ye.prototype.X=ha,ye.prototype.toString=function(){try{return Pc=!0,$g(this).toString()}finally{Pc=!1}};var Bu=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};let sv;function Ud(n){return n?/^-?\d+$/.test(n)?(Jc(n),new ku(vt,Ut)):null:ov||=new ku(0,0)}var ku=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};let ov;function Ds(n,e,t){for(;t>0||e>127;)n.g.push(127&e|128),e=(e>>>7|t<<25)>>>0,t>>>=7;n.g.push(e)}function da(n,e){for(;e>127;)n.g.push(127&e|128),e>>>=7;n.g.push(e)}function sl(n,e){if(e>=0)da(n,e);else{for(let t=0;t<9;t++)n.g.push(127&e|128),e>>=7;n.g.push(1)}}function na(n,e){n.g.push(e>>>0&255),n.g.push(e>>>8&255),n.g.push(e>>>16&255),n.g.push(e>>>24&255)}function Xs(n,e){e.length!==0&&(n.l.push(e),n.h+=e.length)}function $n(n,e,t){da(n.g,8*e+t)}function lf(n,e){return $n(n,e,2),e=n.g.end(),Xs(n,e),e.push(n.h),e}function uf(n,e){var t=e.pop();for(t=n.h+n.g.length()-t;t>127;)e.push(127&t|128),t>>>=7,n.h++;e.push(t),n.h++}function ol(n,e,t){$n(n,e,2),da(n.g,t.length),Xs(n,n.g.end()),Xs(n,t)}function Lc(n,e,t,i){t!=null&&(e=lf(n,e),i(t,n),uf(n,e))}function fi(){const n=class{constructor(){throw Error()}};return Object.setPrototypeOf(n,n.prototype),n}var hf=fi(),Zg=fi(),ff=fi(),df=fi(),Jg=fi(),pf=fi(),Qg=fi(),e0=fi(),_o=class{constructor(n,e,t){this.g=n,this.h=e,n=hf,this.l=!!n&&t===n||!1}};function al(n,e){return new _o(n,e,hf)}function t0(n,e,t,i,r){Lc(n,t,s0(e,i),r)}const av=al(function(n,e,t,i,r){return n.h===2&&(fa(n,nf(e,i,t),r),!0)},t0),cv=al(function(n,e,t,i,r){return n.h===2&&(fa(n,nf(e,i,t,!0),r),!0)},t0);var cl=Symbol(),mf=Symbol(),Fd=Symbol(),Od=Symbol();let n0,i0;function as(n,e,t,i){var r=i[n];if(r)return r;(r={}).W=function(f){switch(typeof f){case"boolean":return Pg||=[0,void 0,!0];case"number":return f>0?void 0:f===0?$1||=[0,void 0]:[-f,void 0];case"string":return[0,f];case"object":return f}}(i[0]);var s=i[1];let o=1;s&&s.constructor===Object&&(r.ia=s,typeof(s=i[++o])=="function"&&(r.na=!0,n0??=s,i0??=i[o+1],s=i[o+=2]));const a={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var c=0;c<s.length;c++)a[s[c]]=s;s=i[++o]}for(c=1;s!==void 0;){let f;typeof s=="number"&&(c+=s,s=i[++o]);var l=void 0;if(s instanceof _o?f=s:(f=av,o--),f?.l){s=i[++o],l=i;var u=o;typeof s=="function"&&(s=s(),l[u]=s),l=s}for(u=c+1,typeof(s=i[++o])=="number"&&s<0&&(u-=s,s=i[++o]);c<u;c++){const h=a[c];l?t(r,c,f,l,h):e(r,c,f,h)}}return i[n]=r}function r0(n){return Array.isArray(n)?n[0]instanceof _o?n:[cv,n]:[n,void 0]}function s0(n,e){return n instanceof ye?(el(n),n.u):Array.isArray(n)?yr(n,e,!1):void 0}function gf(n,e,t,i){const r=t.g;n[e]=i?(s,o,a)=>r(s,o,a,i):r}function _f(n,e,t,i,r){const s=t.g;let o,a;n[e]=(c,l,u)=>s(c,l,u,a||=as(mf,gf,_f,i).W,o||=vf(i),r)}function vf(n){let e=n[Fd];if(e!=null)return e;const t=as(mf,gf,_f,n);return e=t.na?(i,r)=>n0(i,r,t):(i,r)=>{const s=pt(i);for(;qg(r)&&r.h!=4;){var o=r.m,a=t[o];if(a==null){var c=t.ia;c&&(c=c[o])&&(c=lv(c))!=null&&(a=t[o]=c)}a!=null&&a(r,i,o)||(o=(a=r).l,ic(a),a.ha?a=void 0:(c=a.g.g-o,a.g.g=o,a=Yg(a.g,c)),o=i,a&&(vr||=Symbol(),(c=o[vr])?c.push(a):o[vr]=[a]))}return 16384&s&&os(i),!0},n[Fd]=e}function lv(n){const e=(n=r0(n))[0].g;if(n=n[1]){const t=vf(n),i=as(mf,gf,_f,n).W;return(r,s,o)=>e(r,s,o,i,t)}return e}function ll(n,e,t){n[e]=t.h}function ul(n,e,t,i){let r,s;const o=t.h;n[e]=(a,c,l)=>o(a,c,l,s||=as(cl,ll,ul,i).W,r||=o0(i))}function o0(n){let e=n[Od];if(!e){const t=as(cl,ll,ul,n);e=(i,r)=>a0(i,r,t),n[Od]=e}return e}function a0(n,e,t){for(var i=It(n),r=+!!(512&i)-1,s=n.length,o=512&i?1:0,a=s+(256&i?-1:0);o<a;o++){const c=n[o];if(c==null)continue;const l=o-r,u=Bd(t,l);u&&u(e,c,l)}if(256&i){i=n[s-1];for(const c in i)r=+c,Number.isNaN(r)||(s=i[r])!=null&&(a=Bd(t,r))&&a(e,s,r)}if(n=vr?n[vr]:void 0)for(Xs(e,e.g.end()),t=0;t<n.length;t++)Xs(e,kh(n[t])||new Uint8Array(0))}function Bd(n,e){var t=n[e];if(t)return t;if((t=n.ia)&&(t=t[e])){var i=(t=r0(t))[0].h;if(t=t[1]){const r=o0(t),s=as(cl,ll,ul,t).W;t=n.na?i0(s,r):(o,a,c)=>i(o,a,c,s,r)}else t=i;return n[e]=t}}function vo(n,e){if(Array.isArray(e)){var t=It(e);if(4&t)return e;for(var i=0,r=0;i<e.length;i++){const s=n(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),Pt(e,-12289&(5|t)),2&t&&Object.freeze(e),e}}function En(n,e,t){return new _o(n,e,t)}function xo(n,e,t){return new _o(n,e,t)}function Sn(n,e,t){At(n,pt(n),e,t)}var uv=al(function(n,e,t,i,r){return n.h===2&&(n=fa(n,yr([void 0,void 0],i,!0),r),tr(i=pt(e)),(r=Ai(e,i,t))instanceof qn?2&r.M?((r=r.Y()).push(n),At(e,i,t,r)):r.Oa(n):Array.isArray(r)?(2&It(r)&&At(e,i,t,r=zg(r)),r.push(n)):At(e,i,t,[n]),!0)},function(n,e,t,i,r){if(e instanceof qn)e.forEach((s,o)=>{Lc(n,t,yr([o,s],i,!1),r)});else if(Array.isArray(e))for(let s=0;s<e.length;s++){const o=e[s];Array.isArray(o)&&Lc(n,t,yr(o,i,!1),r)}});function c0(n,e,t){if(e=function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(BigInt.asIntN(64,i));if(Qc(i)){if(r==="string")return qh(i);if(r==="number")return Yh(i)}}(e),e!=null&&(typeof e=="string"&&Ud(e),e!=null))switch($n(n,t,0),typeof e){case"number":n=n.g,Vs(e),Ds(n,vt,Ut);break;case"bigint":t=BigInt.asUintN(64,e),t=new ku(Number(t&BigInt(4294967295)),Number(t>>BigInt(32))),Ds(n.g,t.h,t.g);break;default:t=Ud(e),Ds(n.g,t.h,t.g)}}function l0(n,e,t){(e=po(e))!=null&&e!=null&&($n(n,t,0),sl(n.g,e))}function u0(n,e,t){(e=Ag(e))!=null&&($n(n,t,0),n.g.g.push(e?1:0))}function h0(n,e,t){(e=xr(e))!=null&&ol(n,t,pg(e))}function f0(n,e,t,i,r){Lc(n,t,s0(e,i),r)}function d0(n,e,t){(e=e==null||typeof e=="string"||la(e)||e instanceof qi?e:void 0)!=null&&ol(n,t,sf(e).buffer)}function p0(n,e,t){return(n.h===5||n.h===2)&&(e=go(e,pt(e),t,2,!1),n.h==2?rl(n,Ou,e):e.push(Ou(n.g)),!0)}var Hi=En(function(n,e,t){if(n.h!==1)return!1;var i=n.g;n=Fu(i);const r=Fu(i);i=2*(r>>31)+1;const s=r>>>20&2047;return n=4294967296*(1048575&r)+n,Sn(e,t,s==2047?n?NaN:i*(1/0):s==0?5e-324*i*n:i*Math.pow(2,s-1075)*(n+4503599627370496)),!0},function(n,e,t){(e=Pr(e))!=null&&($n(n,t,1),n=n.g,(t=bg||=new DataView(new ArrayBuffer(8))).setFloat64(0,+e,!0),vt=t.getUint32(0,!0),Ut=t.getUint32(4,!0),na(n,vt),na(n,Ut))},fi()),Xt=En(function(n,e,t){return n.h===5&&(Sn(e,t,Ou(n.g)),!0)},function(n,e,t){(e=Pr(e))!=null&&($n(n,t,5),n=n.g,Gh(e),na(n,vt))},pf),hv=xo(p0,function(n,e,t){if((e=vo(Pr,e))!=null)for(let o=0;o<e.length;o++){var i=n,r=t,s=e[o];s!=null&&($n(i,r,5),i=i.g,Gh(s),na(i,vt))}},pf),xf=xo(p0,function(n,e,t){if((e=vo(Pr,e))!=null&&e.length){$n(n,t,2),da(n.g,4*e.length);for(let i=0;i<e.length;i++)t=n.g,Gh(e[i]),na(t,vt)}},pf),wr=En(function(n,e,t){return n.h===0&&(Sn(e,t,of(n.g,Xh)),!0)},c0,Jg),Ol=En(function(n,e,t){return n.h===0&&(Sn(e,t,(n=of(n.g,Xh))===0?void 0:n),!0)},c0,Jg),fv=En(function(n,e,t){return n.h===0&&(Sn(e,t,of(n.g,Wh)),!0)},function(n,e,t){if((e=q1(e))!=null&&(typeof e=="string"&&Nd(e),e!=null))switch($n(n,t,0),typeof e){case"number":n=n.g,Vs(e),Ds(n,vt,Ut);break;case"bigint":t=BigInt.asUintN(64,e),t=new Bu(Number(t&BigInt(4294967295)),Number(t>>BigInt(32))),Ds(n.g,t.h,t.g);break;default:t=Nd(e),Ds(n.g,t.h,t.g)}},fi()),Ft=En(function(n,e,t){return n.h===0&&(Sn(e,t,br(n.g)),!0)},l0,df),hl=xo(function(n,e,t){return(n.h===0||n.h===2)&&(e=go(e,pt(e),t,2,!1),n.h==2?rl(n,br,e):e.push(br(n.g)),!0)},function(n,e,t){if((e=vo(po,e))!=null&&e.length){t=lf(n,t);for(let i=0;i<e.length;i++)sl(n.g,e[i]);uf(n,t)}},df),Ps=En(function(n,e,t){return n.h===0&&(Sn(e,t,(n=br(n.g))===0?void 0:n),!0)},l0,df),Ct=En(function(n,e,t){return n.h===0&&(Sn(e,t,af(n.g)),!0)},u0,Zg),jo=En(function(n,e,t){return n.h===0&&(Sn(e,t,(n=af(n.g))===!1?void 0:n),!0)},u0,Zg),nn=xo(function(n,e,t){if(n.h!==2)return!1;n=cf(n);const i=pt(e);return tr(i),go(e,i,t,2).push(n),!0},function(n,e,t){if((e=vo(xr,e))!=null)for(let o=0;o<e.length;o++){var i=n,r=t,s=e[o];s!=null&&ol(i,r,pg(s))}},ff),pr=En(function(n,e,t){return n.h===2&&(Sn(e,t,(n=cf(n))===""?void 0:n),!0)},h0,ff),dt=En(function(n,e,t){return n.h===2&&(Sn(e,t,cf(n)),!0)},h0,ff),Wt=function(n,e,t=hf){return new _o(n,e,t)}(function(n,e,t,i,r){if(n.h!==2)return!1;i=yr(void 0,i,!0);let s=pt(e);tr(s);let o=go(e,s,t,3);return s=pt(e),4&It(o)&&(o=In(o),Pt(o,-2079&(1|It(o))),At(e,s,t,o)),o.push(i),fa(n,i,r),!0},function(n,e,t,i,r){if(Array.isArray(e))for(let s=0;s<e.length;s++)f0(n,e[s],t,i,r)}),_t=al(function(n,e,t,i,r,s){return n.h===2&&(Hg(e,It(e),s,t),fa(n,e=nf(e,i,t),r),!0)},f0),m0=En(function(n,e,t){return n.h===2&&(Sn(e,t,Kg(n)),!0)},d0,Qg),dv=xo(function(n,e,t){return(n.h===0||n.h===2)&&(e=go(e,pt(e),t,2,!1),n.h==2?rl(n,Ar,e):e.push(Ar(n.g)),!0)},function(n,e,t){if((e=vo(Y1,e))!=null)for(let o=0;o<e.length;o++){var i=n,r=t,s=e[o];s!=null&&($n(i,r,0),da(i.g,s))}},fi()),li=En(function(n,e,t){return n.h===0&&(Sn(e,t,br(n.g)),!0)},function(n,e,t){(e=po(e))!=null&&(e=parseInt(e,10),$n(n,t,0),sl(n.g,e))},e0);class pv{constructor(e,t){this.h=e,this.g=t,this.l=tt,this.m=we,this.defaultValue=void 0}}function di(n,e){return new pv(n,e)}function Lr(n,e){return(t,i)=>{if(Sa.length){const s=Sa.pop();s.o(i),Fl(s.g,t,i),t=s}else t=new class{constructor(s,o){if(Dd.length){const a=Dd.pop();Fl(a,s,o),s=a}else s=new class{constructor(a,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,Fl(this,a,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ca=!1}}(s,o);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({ha:s=!1}={}){this.ha=s}}(t,i);try{const s=new n,o=s.u;vf(e)(o,t);var r=s}finally{t.g.clear(),t.m=-1,t.h=-1,Sa.length<100&&Sa.push(t)}return r}}function fl(n){return function(){el(this);const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};a0(this.u,e,as(cl,ll,ul,n)),Xs(e,e.g.end());const t=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let o=0;o<r;o++){const a=i[o];t.set(a,s),s+=a.length}return e.l=[t],t}}var kd=class extends ye{constructor(n){super(n)}},zd=[0,pr,En(function(n,e,t){return n.h===2&&(Sn(e,t,(n=Kg(n))===ns()?void 0:n),!0)},function(n,e,t){if(e!=null){if(e instanceof ye){const i=e.Ra;return void(i&&(e=i(e),e!=null&&ol(n,t,sf(e).buffer)))}if(Array.isArray(e))return}d0(n,e,t)},Qg)];let Bl,Hd=globalThis.trustedTypes;function Vd(n){Bl===void 0&&(Bl=function(){let t=null;if(!Hd)return t;try{const i=r=>r;t=Hd.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return t}());var e=Bl;return new class{constructor(t){this.g=t}toString(){return this.g+""}}(e?e.createScriptURL(n):n)}function mv(n,...e){if(e.length===0)return Vd(n[0]);let t=n[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+n[i+1];return Vd(t)}var g0=[0,Ft,li,Ct,-1,hl,li,-1],gv=class extends ye{constructor(){super()}},_0=[0,Ct,dt,Ct,li,-1,xo(function(n,e,t){return(n.h===0||n.h===2)&&(e=go(e,pt(e),t,2,!1),n.h==2?rl(n,rv,e):e.push(br(n.g)),!0)},function(n,e,t){if((e=vo(po,e))!=null&&e.length){t=lf(n,t);for(let i=0;i<e.length;i++)sl(n.g,e[i]);uf(n,t)}},e0),dt,-1,[0,Ct,-1],li,Ct,-1],v0=[0,dt,-2],Gd=class extends ye{constructor(){super()}},x0=[0],y0=[0,Ft,Ct,1,Ct,-3],Dn=class extends ye{constructor(n){super(n,2)}},Ht={};Ht[336783863]=[0,dt,Ct,-1,Ft,[0,[1,2,3,4,5,6,7],_t,x0,_t,_0,_t,v0,_t,y0,_t,g0,_t,[0,dt,-2],_t,[0,dt,li]],[0,dt],Ct,[0,[1,3],[2,4],_t,[0,hl],-1,_t,[0,nn],-1,Wt,[0,dt,-1]],dt];var Wd=[0,Ol,-1,jo,-3,Ol,hl,pr,Ps,Ol,-1,jo,Ps,jo,-2,pr];function Nn(n,e){Uu(n,2,mo(e),"")}function yt(n,e){il(n,3,e)}function Qe(n,e){il(n,4,e)}var fn=class extends ye{constructor(n){super(n,500)}o(n){return we(this,0,7,n)}},Yo=[-1,{}],Xd=[0,dt,1,Yo],jd=[0,dt,nn,Yo];function Un(n,e){Rc(n,1,fn,e)}function Et(n,e){il(n,10,e)}function ot(n,e){il(n,15,e)}var Tn=class extends ye{constructor(n){super(n,500)}o(n){return we(this,0,1001,n)}},M0=[-500,Wt,[-500,pr,-1,nn,-3,[-2,Ht,Ct],Wt,zd,Ps,-1,Xd,jd,Wt,[0,pr,jo],pr,Wd,Ps,nn,987,nn],4,Wt,[-500,dt,-1,[-1,{}],998,dt],Wt,[-500,dt,nn,-1,[-2,{},Ct],997,nn,-1],Ps,Wt,[-500,dt,nn,Yo,998,nn],nn,Ps,Xd,jd,Wt,[0,pr,-1,Yo],nn,-2,Wd,pr,-1,jo,979,Yo,Wt,zd];Tn.prototype.g=fl(M0);var _v=Lr(Tn,M0),vv=class extends ye{constructor(n){super(n)}},E0=class extends ye{constructor(n){super(n)}g(){return Ji(this,vv,1)}},S0=[0,Wt,[0,Ft,Xt,dt,-1]],dl=Lr(E0,S0),xv=class extends ye{constructor(n){super(n)}},yv=class extends ye{constructor(n){super(n)}},kl=class extends ye{constructor(n){super(n)}h(){return tt(this,xv,2)}g(){return Ji(this,yv,5)}},T0=Lr(class extends ye{constructor(n){super(n)}},[0,nn,hl,xf,[0,li,[0,Ft,-3],[0,Xt,-3],[0,Ft,-1,[0,Wt,[0,Ft,-2]]],Wt,[0,Xt,-1,dt,Xt]],dt,-1,wr,Wt,[0,Ft,Xt],nn,wr]),b0=class extends ye{constructor(n){super(n)}},Ns=Lr(class extends ye{constructor(n){super(n)}},[0,Wt,[0,Xt,-4]]),A0=class extends ye{constructor(n){super(n)}},pa=Lr(class extends ye{constructor(n){super(n)}},[0,Wt,[0,Xt,-4]]),Mv=class extends ye{constructor(n){super(n)}},Ev=[0,Ft,-1,xf,li],w0=class extends ye{constructor(){super()}};w0.prototype.g=fl([0,Xt,-4,wr]);var Sv=class extends ye{constructor(n){super(n)}},Tv=Lr(class extends ye{constructor(n){super(n)}},[0,Wt,[0,1,Ft,dt,S0],wr]),Yd=class extends ye{constructor(n){super(n)}},bv=class extends ye{constructor(n){super(n)}qa(){const n=Og(this);return n??ns()}},Av=class extends ye{constructor(n){super(n)}},R0=[1,2],wv=Lr(class extends ye{constructor(n){super(n)}},[0,Wt,[0,R0,_t,[0,xf],_t,[0,m0],Ft,dt],wr]),yf=class extends ye{constructor(n){super(n)}},C0=[0,dt,Ft,Xt,nn,-1],qd=class extends ye{constructor(n){super(n)}},Rv=[0,Ct,-1],Kd=class extends ye{constructor(n){super(n)}},rc=[1,2,3,4,5],Ic=class extends ye{constructor(n){super(n)}g(){return Og(this)!=null}h(){return xr(Tr(this,2))!=null}},wt=class extends ye{constructor(n){super(n)}g(){return Ag(Tr(this,2))??!1}},P0=[0,m0,dt,[0,Ft,wr,-1],[0,fv,wr]],Bt=[0,P0,Ct,[0,rc,_t,y0,_t,_0,_t,g0,_t,x0,_t,v0],li],pl=class extends ye{constructor(n){super(n)}},Mf=[0,Bt,Xt,-1,Ft],Cv=di(502141897,pl);Ht[502141897]=Mf;var Pv=Lr(class extends ye{constructor(n){super(n)}},[0,[0,li,-1,hv,dv],Ev]),L0=class extends ye{constructor(n){super(n)}},I0=class extends ye{constructor(n){super(n)}},Ef=[0,Bt,Xt,[0,Bt],Ct],D0=[0,Bt,Mf,Ef,Xt,[0,[0,P0]]],Lv=di(508968150,I0);Ht[508968150]=D0,Ht[508968149]=Ef;var N0=class extends ye{constructor(n){super(n)}},Iv=di(513916220,N0);Ht[513916220]=[0,Bt,D0,Ft];var us=class extends ye{constructor(n){super(n)}h(){return tt(this,yf,2)}g(){xt(this,2)}},U0=[0,Bt,C0];Ht[478825465]=U0;var Dv=class extends ye{constructor(n){super(n)}},F0=class extends ye{constructor(n){super(n)}},Sf=class extends ye{constructor(n){super(n)}},Tf=class extends ye{constructor(n){super(n)}},O0=class extends ye{constructor(n){super(n)}},$d=[0,Bt,[0,Bt],U0,-1],B0=[0,Bt,Xt,Ft],bf=[0,Bt,Xt],k0=[0,Bt,B0,bf,Xt],Nv=di(479097054,O0);Ht[479097054]=[0,Bt,k0,$d],Ht[463370452]=$d,Ht[464864288]=B0;var Uv=di(462713202,Tf);Ht[462713202]=k0,Ht[474472470]=bf;var Fv=class extends ye{constructor(n){super(n)}},z0=class extends ye{constructor(n){super(n)}},H0=class extends ye{constructor(n){super(n)}},V0=class extends ye{constructor(){super()}},Af=[0,Bt,Xt,-1,Ft],zu=[0,Bt,Xt,Ct];V0.prototype.g=fl([0,Bt,bf,[0,Bt],Mf,Ef,Af,zu]);var G0=class extends ye{constructor(n){super(n)}},Ov=di(456383383,G0);Ht[456383383]=[0,Bt,C0];var W0=class extends ye{constructor(n){super(n)}},Bv=di(476348187,W0);Ht[476348187]=[0,Bt,Rv];var X0=class extends ye{constructor(n){super(n)}},Zd=class extends ye{constructor(n){super(n)}},j0=[0,li,-1],kv=di(458105876,class extends ye{constructor(n){super(n)}g(){var n=this.u;const e=pt(n),t=2&e;return n=function(i,r,s){var o=Zd;const a=2&r;let c=!1;if(s==null){if(a)return Ld();s=[]}else if(s.constructor===qn){if(!(2&s.M)||a)return s;s=s.Y()}else Array.isArray(s)?c=!!(2&It(s)):s=[];if(a){if(!s.length)return Ld();c||(c=!0,os(s))}else c&&(c=!1,s=zg(s));return c||(64&It(s)?Mc(s,32):32&r&&qc(s,32)),At(i,r,2,o=new qn(s,o,K1,void 0)),o}(n,e,Ai(n,e,2)),!t&&Zd&&(n.ta=!0),n}});Ht[458105876]=[0,j0,uv,[!0,wr,[0,dt,-1,nn]]];var wf=class extends ye{constructor(n){super(n)}},Y0=di(458105758,wf);Ht[458105758]=[0,Bt,dt,j0];var q0=class extends ye{constructor(n){super(n)}},zv=di(443442058,q0);Ht[443442058]=[0,Bt,dt,Ft,Xt,nn,-1],Ht[514774813]=Af;var K0=class extends ye{constructor(n){super(n)}},Hv=di(516587230,K0);function Hu(n,e){return e=e?e.clone():new yf,n.displayNamesLocale!==void 0?xt(e,1,mo(n.displayNamesLocale)):n.displayNamesLocale===void 0&&xt(e,1),n.maxResults!==void 0?Si(e,2,n.maxResults):"maxResults"in n&&xt(e,2),n.scoreThreshold!==void 0?Ee(e,3,n.scoreThreshold):"scoreThreshold"in n&&xt(e,3),n.categoryAllowlist!==void 0?Cc(e,4,n.categoryAllowlist):"categoryAllowlist"in n&&xt(e,4),n.categoryDenylist!==void 0?Cc(e,5,n.categoryDenylist):"categoryDenylist"in n&&xt(e,5),e}function Rf(n,e=-1,t=""){return{categories:n.map(i=>({index:ci(Xn(i,1),0)??-1,score:Ot(i,2)??0,categoryName:Ei(i,3)??"",displayName:Ei(i,4)??""})),headIndex:e,headName:t}}function $0(n){var e=Yr(n,3,Pr,jr()),t=Yr(n,2,po,jr()),i=Yr(n,1,xr,jr()),r=Yr(n,9,xr,jr());const s={categories:[],keypoints:[]};for(let o=0;o<e.length;o++)s.categories.push({score:e[o],index:t[o]??-1,categoryName:i[o]??"",displayName:r[o]??""});if((e=tt(n,kl,4)?.h())&&(s.boundingBox={originX:Xn(e,1)??0,originY:Xn(e,2)??0,width:Xn(e,3)??0,height:Xn(e,4)??0,angle:0}),tt(n,kl,4)?.g().length)for(const o of tt(n,kl,4).g())s.keypoints.push({x:nc(o,1)??0,y:nc(o,2)??0,score:nc(o,4)??0,label:xr(Tr(o,3))??""});return s}function ml(n){const e=[];for(const t of Ji(n,A0,1))e.push({x:Ot(t,1)??0,y:Ot(t,2)??0,z:Ot(t,3)??0,visibility:Ot(t,4)??0});return e}function qo(n){const e=[];for(const t of Ji(n,b0,1))e.push({x:Ot(t,1)??0,y:Ot(t,2)??0,z:Ot(t,3)??0,visibility:Ot(t,4)??0});return e}function Jd(n){return Array.from(n,e=>e>127?e-256:e)}function Qd(n,e){if(n.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${n.length} vs. ${e.length}).`);let t=0,i=0,r=0;for(let s=0;s<n.length;s++)t+=n[s]*e[s],i+=n[s]*n[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return t/Math.sqrt(i*r)}let Ta;Ht[516587230]=[0,Bt,Af,zu,Xt],Ht[518928384]=zu;const Vv=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Z0(){if(Ta===void 0)try{await WebAssembly.instantiate(Vv),Ta=!0}catch{Ta=!1}return Ta}async function Co(n,e=mv``){const t=await Z0()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${n}_${t}.js`,wasmBinaryPath:`${e}/${n}_${t}.wasm`}}var Vr=class{};function J0(){var n=navigator;return typeof OffscreenCanvas<"u"&&(!function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")}(n)||!!((n=n.userAgent.match(/Version\/([\d]+).*Safari/))&&n.length>=1&&Number(n[1])>=17))}async function ep(n){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=n.toString(),e.crossOrigin="anonymous",new Promise((t,i)=>{e.addEventListener("load",()=>{t()},!1),e.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(e)})}importScripts(n.toString())}function Q0(n){return n.videoWidth!==void 0?[n.videoWidth,n.videoHeight]:n.naturalWidth!==void 0?[n.naturalWidth,n.naturalHeight]:n.displayWidth!==void 0?[n.displayWidth,n.displayHeight]:[n.width,n.height]}function Te(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),t(e=n.i.stringToNewUTF8(e)),n.i._free(e)}function tp(n,e,t){if(!n.i.canvas)throw Error("No OpenGL canvas configured.");if(t?n.i._bindTextureToStream(t):n.i._bindTextureToCanvas(),!(t=n.i.canvas.getContext("webgl2")||n.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=Q0(e);return!n.l||i===n.i.canvas.width&&r===n.i.canvas.height||(n.i.canvas.width=i,n.i.canvas.height=r),[i,r]}function np(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=n.i.stringToNewUTF8(e[r]);e=n.i._malloc(4*i.length),n.i.HEAPU32.set(i,e>>2),t(e);for(const r of i)n.i._free(r);n.i._free(e)}function mi(n,e,t){n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=t}function ir(n,e,t){let i=[];n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=(r,s,o)=>{s?(t(i,o),i=[]):i.push(r)}}Vr.forVisionTasks=function(n){return Co("vision",n)},Vr.forTextTasks=function(n){return Co("text",n)},Vr.forGenAiExperimentalTasks=function(n){return Co("genai_experimental",n)},Vr.forGenAiTasks=function(n){return Co("genai",n)},Vr.forAudioTasks=function(n){return Co("audio",n)},Vr.isSimdSupported=function(){return Z0()};async function Gv(n,e,t,i){return n=await(async(r,s,o,a,c)=>{if(s&&await ep(s),!self.ModuleFactory||o&&(await ep(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,a)})(n,t.wasmLoaderPath,t.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?t.wasmBinaryPath.toString():t.assetBinaryPath&&r.endsWith(".data")?t.assetBinaryPath.toString():r}),await n.o(i),n}function zl(n,e){const t=tt(n.baseOptions,Ic,1)||new Ic;typeof e=="string"?(xt(t,2,mo(e)),xt(t,1)):e instanceof Uint8Array&&(xt(t,1,Vh(e,!1,!1)),xt(t,2)),we(n.baseOptions,0,1,t)}function ip(n){try{const e=n.H.length;if(e===1)throw Error(n.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+n.H.map(t=>t.message).join(", "))}finally{n.H=[]}}function me(n,e){n.B=Math.max(n.B,e)}function gl(n,e){n.A=new fn,Nn(n.A,"PassThroughCalculator"),yt(n.A,"free_memory"),Qe(n.A,"free_memory_unused_out"),Et(e,"free_memory"),Un(e,n.A)}function js(n,e){yt(n.A,e),Qe(n.A,e+"_unused_out")}function _l(n){n.g.addBoolToStream(!0,"free_memory",n.B)}var sc=class{constructor(n){this.g=n,this.H=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(n,e=!0){if(e){const t=n.baseOptions||{};if(n.baseOptions?.modelAssetBuffer&&n.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(tt(this.baseOptions,Ic,1)?.g()||tt(this.baseOptions,Ic,1)?.h()||n.baseOptions?.modelAssetBuffer||n.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(i,r){let s=tt(i.baseOptions,Kd,3);if(!s){var o=s=new Kd,a=new Gd;Xo(o,4,rc,a)}"delegate"in r&&(r.delegate==="GPU"?(r=s,o=new gv,Xo(r,2,rc,o)):(r=s,o=new Gd,Xo(r,4,rc,o))),we(i.baseOptions,0,3,s)}(this,t),t.modelAssetPath)return fetch(t.modelAssetPath.toString()).then(i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${t.modelAssetPath} (${i.status})`)}).then(i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),zl(this,"/model.dat"),this.m(),this.J()});if(t.modelAssetBuffer instanceof Uint8Array)zl(this,t.modelAssetBuffer);else if(t.modelAssetBuffer)return async function(i){const r=[];for(var s=0;;){const{done:o,value:a}=await i.read();if(o)break;r.push(a),s+=a.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const o of r)i.set(o,s),s+=o.length;return i}(t.modelAssetBuffer).then(i=>{zl(this,i),this.m(),this.J()})}return this.m(),this.J(),Promise.resolve()}J(){}ea(){let n;if(this.g.ea(e=>{n=_v(e)}),!n)throw Error("Failed to retrieve CalculatorGraphConfig");return n}setGraph(n,e){this.g.attachErrorListener((t,i)=>{this.H.push(Error(i))}),this.g.Ma(),this.g.setGraph(n,e),this.A=void 0,ip(this)}finishProcessing(){this.g.finishProcessing(),ip(this)}close(){this.A=void 0,this.g.closeGraph()}};function un(n,e){if(!n)throw Error(`Unable to obtain required WebGL resource: ${e}`);return n}sc.prototype.close=sc.prototype.close,function(n,e){n=n.split(".");var t,i=ts;for((n[0]in i)||i.execScript===void 0||i.execScript("var "+n[0]);n.length&&(t=n.shift());)n.length||e===void 0?i=i[t]&&i[t]!==Object.prototype[t]?i[t]:i[t]={}:i[t]=e}("TaskRunner",sc);class Wv{constructor(e,t,i,r){this.g=e,this.h=t,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function rp(n,e,t){const i=n.g;if(t=un(i.createShader(t),"Failed to create WebGL shader"),i.shaderSource(t,e),i.compileShader(t),!i.getShaderParameter(t,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(t)}`);return i.attachShader(n.h,t),t}function sp(n,e){const t=n.g,i=un(t.createVertexArray(),"Failed to create vertex array");t.bindVertexArray(i);const r=un(t.createBuffer(),"Failed to create buffer");t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(n.P),t.vertexAttribPointer(n.P,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const s=un(t.createBuffer(),"Failed to create buffer");return t.bindBuffer(t.ARRAY_BUFFER,s),t.enableVertexAttribArray(n.J),t.vertexAttribPointer(n.J,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindVertexArray(null),new Wv(t,i,r,s)}function Cf(n,e){if(n.g){if(e!==n.g)throw Error("Cannot change GL context once initialized")}else n.g=e}function ma(n,e,t,i){return Cf(n,e),n.h||(n.m(),n.C()),t?(n.s||(n.s=sp(n,!0)),t=n.s):(n.v||(n.v=sp(n,!1)),t=n.v),e.useProgram(n.h),t.bind(),n.l(),n=i(),t.g.bindVertexArray(null),n}function Rr(n,e,t){return Cf(n,e),n=un(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),n}function vl(n,e,t){Cf(n,e),n.A||(n.A=un(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,n.A),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}function Pf(n){n.g?.bindFramebuffer(n.g.FRAMEBUFFER,null)}var yo=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const n=this.g;if(this.h=un(n.createProgram(),"Failed to create WebGL program"),this.ba=rp(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,n.VERTEX_SHADER),this.aa=rp(this,this.H(),n.FRAGMENT_SHADER),n.linkProgram(this.h),!n.getProgramParameter(this.h,n.LINK_STATUS))throw Error(`Error during program linking: ${n.getProgramInfoLog(this.h)}`);this.P=n.getAttribLocation(this.h,"aVertex"),this.J=n.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){const n=this.g;n.deleteProgram(this.h),n.deleteShader(this.ba),n.deleteShader(this.aa)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}},Xv=class extends yo{H(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}C(){const n=this.g;n.activeTexture(n.TEXTURE1),this.B=Rr(this,n,n.LINEAR),n.activeTexture(n.TEXTURE2),this.j=Rr(this,n,n.NEAREST)}m(){super.m();const n=this.g;this.L=un(n.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.U=un(n.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.K=un(n.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();const n=this.g;n.uniform1i(this.K,0),n.uniform1i(this.L,1),n.uniform1i(this.U,2)}close(){this.B&&this.g.deleteTexture(this.B),this.j&&this.g.deleteTexture(this.j),super.close()}},jv=class extends yo{H(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}C(){const n=this.g;n.activeTexture(n.TEXTURE1),this.j=Rr(this,n),n.activeTexture(n.TEXTURE2),this.B=Rr(this,n)}m(){super.m();const n=this.g;this.K=un(n.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.L=un(n.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.I=un(n.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();const n=this.g;n.uniform1i(this.I,0),n.uniform1i(this.K,1),n.uniform1i(this.L,2)}close(){this.j&&this.g.deleteTexture(this.j),this.B&&this.g.deleteTexture(this.B),super.close()}};function Wi(n,e){switch(e){case 0:return n.g.find(t=>t instanceof Uint8Array);case 1:return n.g.find(t=>t instanceof Float32Array);case 2:return n.g.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Vu(n){var e=Wi(n,1);if(!e){if(e=Wi(n,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(n.width*n.height);const i=Ys(n);var t=Lf(n);if(vl(t,i,e_(n)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){t=new Float32Array(n.width*n.height*4),i.readPixels(0,0,n.width,n.height,i.RGBA,i.FLOAT,t);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=t[s]}else i.readPixels(0,0,n.width,n.height,i.RED,i.FLOAT,e)}n.g.push(e)}return e}function e_(n){let e=Wi(n,2);if(!e){const t=Ys(n);e=n_(n);const i=Vu(n),r=t_(n);t.texImage2D(t.TEXTURE_2D,0,r,n.width,n.height,0,t.RED,t.FLOAT,i),Gu(n)}return e}function Ys(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=un(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function t_(n){if(n=Ys(n),!ba)if(n.getExtension("EXT_color_buffer_float")&&n.getExtension("OES_texture_float_linear")&&n.getExtension("EXT_float_blend"))ba=n.R32F;else{if(!n.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");ba=n.R16F}return ba}function Lf(n){return n.l||(n.l=new yo),n.l}function n_(n){const e=Ys(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);let t=Wi(n,2);return t||(t=Rr(Lf(n),e,n.m?e.LINEAR:e.NEAREST),n.g.push(t),n.j=!0),e.bindTexture(e.TEXTURE_2D,t),t}function Gu(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}var ba,Vt=class{constructor(n,e,t,i,r,s,o){this.g=n,this.m=e,this.j=t,this.canvas=i,this.l=r,this.width=s,this.height=o,this.j&&--op===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ha(){return!!Wi(this,0)}la(){return!!Wi(this,1)}R(){return!!Wi(this,2)}ka(){return(e=Wi(n=this,0))||(e=Vu(n),e=new Uint8Array(e.map(t=>255*t)),n.g.push(e)),e;var n,e}ja(){return Vu(this)}N(){return e_(this)}clone(){const n=[];for(const e of this.g){let t;if(e instanceof Uint8Array)t=new Uint8Array(e);else if(e instanceof Float32Array)t=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Ys(this),r=Lf(this);i.activeTexture(i.TEXTURE1),t=Rr(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,t);const s=t_(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),vl(r,i,t),ma(r,i,!1,()=>{n_(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Gu(this)}),Pf(r),Gu(this)}}n.push(t)}return new Vt(n,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ys(this).deleteTexture(Wi(this,2)),op=-1}};Vt.prototype.close=Vt.prototype.close,Vt.prototype.clone=Vt.prototype.clone,Vt.prototype.getAsWebGLTexture=Vt.prototype.N,Vt.prototype.getAsFloat32Array=Vt.prototype.ja,Vt.prototype.getAsUint8Array=Vt.prototype.ka,Vt.prototype.hasWebGLTexture=Vt.prototype.R,Vt.prototype.hasFloat32Array=Vt.prototype.la,Vt.prototype.hasUint8Array=Vt.prototype.Ha;var op=250;const Yv={color:"white",lineWidth:4,radius:6};function Hl(n){return{...Yv,fillColor:(n=n||{}).color,...n}}function Ii(n,e){return n instanceof Function?n(e):n}function ap(n,e,t){return Math.max(Math.min(e,t),Math.min(Math.max(e,t),n))}function Po(n){if(!n.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return n.l}function ia(n){if(!n.j)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return n.j}function cp(n,e,t){if(e.R())t(e.N());else{const i=e.la()?e.ja():e.ka();n.m=n.m??new yo;const r=ia(n);t((n=new Vt([i],e.m,!1,r.canvas,n.m,e.width,e.height)).N()),n.close()}}function lp(n,e,t,i){const r=function(a){return a.g||(a.g=new Xv),a.g}(n),s=ia(n),o=Array.isArray(t)?new ImageData(new Uint8ClampedArray(t),1,1):t;ma(r,s,!0,()=>{(function(c,l,u,f){const h=c.g;if(h.activeTexture(h.TEXTURE0),h.bindTexture(h.TEXTURE_2D,l),h.activeTexture(h.TEXTURE1),h.bindTexture(h.TEXTURE_2D,c.B),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,h.RGBA,h.UNSIGNED_BYTE,u),c.I&&function(p,g){if(p!==g)return!1;p=p.entries(),g=g.entries();for(const[m,d]of p){p=m;const T=d;var _=g.next();if(_.done)return!1;const[S,M]=_.value;if(_=M,p!==S||T[0]!==_[0]||T[1]!==_[1]||T[2]!==_[2]||T[3]!==_[3])return!1}return!!g.next().done}(c.I,f))h.activeTexture(h.TEXTURE2),h.bindTexture(h.TEXTURE_2D,c.j);else{c.I=f;const p=Array(1024).fill(0);f.forEach((g,_)=>{if(g.length!==4)throw Error(`Color at index ${_} is not a four-channel value.`);p[4*_]=g[0],p[4*_+1]=g[1],p[4*_+2]=g[2],p[4*_+3]=g[3]}),h.activeTexture(h.TEXTURE2),h.bindTexture(h.TEXTURE_2D,c.j),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,256,1,0,h.RGBA,h.UNSIGNED_BYTE,new Uint8Array(p))}})(r,e,o,i),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4);const a=r.g;a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,null)})}function up(n,e,t,i){const r=ia(n),s=function(c){return c.h||(c.h=new jv),c.h}(n),o=Array.isArray(t)?new ImageData(new Uint8ClampedArray(t),1,1):t,a=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;ma(s,r,!0,()=>{var c=s.g;c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,e),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,s.j),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,o),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,s.B),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4),r.bindTexture(r.TEXTURE_2D,null),(c=s.g).activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,null)})}var an=class{constructor(n,e){n instanceof CanvasRenderingContext2D||n instanceof OffscreenCanvasRenderingContext2D?(this.l=n,this.j=e):this.j=n}Aa(n,e){if(n){var t=Po(this);e=Hl(e),t.save();var i=t.canvas,r=0;for(const s of n)t.fillStyle=Ii(e.fillColor,{index:r,from:s}),t.strokeStyle=Ii(e.color,{index:r,from:s}),t.lineWidth=Ii(e.lineWidth,{index:r,from:s}),(n=new Path2D).arc(s.x*i.width,s.y*i.height,Ii(e.radius,{index:r,from:s}),0,2*Math.PI),t.fill(n),t.stroke(n),++r;t.restore()}}za(n,e,t){if(n&&e){var i=Po(this);t=Hl(t),i.save();var r=i.canvas,s=0;for(const o of e){i.beginPath(),e=n[o.start];const a=n[o.end];e&&a&&(i.strokeStyle=Ii(t.color,{index:s,from:e,to:a}),i.lineWidth=Ii(t.lineWidth,{index:s,from:e,to:a}),i.moveTo(e.x*r.width,e.y*r.height),i.lineTo(a.x*r.width,a.y*r.height)),++s,i.stroke()}i.restore()}}wa(n,e){const t=Po(this);e=Hl(e),t.save(),t.beginPath(),t.lineWidth=Ii(e.lineWidth,{}),t.strokeStyle=Ii(e.color,{}),t.fillStyle=Ii(e.fillColor,{}),t.moveTo(n.originX,n.originY),t.lineTo(n.originX+n.width,n.originY),t.lineTo(n.originX+n.width,n.originY+n.height),t.lineTo(n.originX,n.originY+n.height),t.lineTo(n.originX,n.originY),t.stroke(),t.fill(),t.restore()}xa(n,e,t=[0,0,0,255]){this.l?function(i,r,s,o){const a=ia(i);cp(i,r,c=>{lp(i,c,s,o),(c=Po(i)).drawImage(a.canvas,0,0,c.canvas.width,c.canvas.height)})}(this,n,t,e):lp(this,n.N(),t,e)}ya(n,e,t){this.l?function(i,r,s,o){const a=ia(i);cp(i,r,c=>{up(i,c,s,o),(c=Po(i)).drawImage(a.canvas,0,0,c.canvas.width,c.canvas.height)})}(this,n,e,t):up(this,n.N(),e,t)}close(){this.g?.close(),this.g=void 0,this.h?.close(),this.h=void 0,this.m?.close(),this.m=void 0}};function vi(n,e){switch(e){case 0:return n.g.find(t=>t instanceof ImageData);case 1:return n.g.find(t=>typeof ImageBitmap<"u"&&t instanceof ImageBitmap);case 2:return n.g.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function i_(n){var e=vi(n,0);if(!e){e=qs(n);const t=xl(n),i=new Uint8Array(n.width*n.height*4);vl(t,e,oc(n)),e.readPixels(0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,i),Pf(t),e=new ImageData(new Uint8ClampedArray(i.buffer),n.width,n.height),n.g.push(e)}return e}function oc(n){let e=vi(n,2);if(!e){const t=qs(n);e=ac(n);const i=vi(n,1)||i_(n);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i),Ho(n)}return e}function qs(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return n.h||(n.h=un(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function xl(n){return n.l||(n.l=new yo),n.l}function ac(n){const e=qs(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);let t=vi(n,2);return t||(t=Rr(xl(n),e),n.g.push(t),n.m=!0),e.bindTexture(e.TEXTURE_2D,t),t}function Ho(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}function hp(n){const e=qs(n);return ma(xl(n),e,!0,()=>function(t,i){const r=t.canvas;if(r.width===t.width&&r.height===t.height)return i();const s=r.width,o=r.height;return r.width=t.width,r.height=t.height,t=i(),r.width=s,r.height=o,t}(n,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(n.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return n.canvas.transferToImageBitmap()}))}an.prototype.close=an.prototype.close,an.prototype.drawConfidenceMask=an.prototype.ya,an.prototype.drawCategoryMask=an.prototype.xa,an.prototype.drawBoundingBox=an.prototype.wa,an.prototype.drawConnectors=an.prototype.za,an.prototype.drawLandmarks=an.prototype.Aa,an.lerp=function(n,e,t,i,r){return ap(i*(1-(n-e)/(t-e))+r*(1-(t-n)/(t-e)),i,r)},an.clamp=ap;var Kt=class{constructor(n,e,t,i,r,s,o){this.g=n,this.j=e,this.m=t,this.canvas=i,this.l=r,this.width=s,this.height=o,(this.j||this.m)&&--fp===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ga(){return!!vi(this,0)}ma(){return!!vi(this,1)}R(){return!!vi(this,2)}Ea(){return i_(this)}Da(){var n=vi(this,1);return n||(oc(this),ac(this),n=hp(this),Ho(this),this.g.push(n),this.j=!0),n}N(){return oc(this)}clone(){const n=[];for(const e of this.g){let t;if(e instanceof ImageData)t=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=qs(this),r=xl(this);i.activeTexture(i.TEXTURE1),t=Rr(r,i),i.bindTexture(i.TEXTURE_2D,t),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),vl(r,i,t),ma(r,i,!1,()=>{ac(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Ho(this)}),Pf(r),Ho(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);oc(this),ac(this),t=hp(this),Ho(this)}n.push(t)}return new Kt(n,this.ma(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&vi(this,1).close(),this.m&&qs(this).deleteTexture(vi(this,2)),fp=-1}};Kt.prototype.close=Kt.prototype.close,Kt.prototype.clone=Kt.prototype.clone,Kt.prototype.getAsWebGLTexture=Kt.prototype.N,Kt.prototype.getAsImageBitmap=Kt.prototype.Da,Kt.prototype.getAsImageData=Kt.prototype.Ea,Kt.prototype.hasWebGLTexture=Kt.prototype.R,Kt.prototype.hasImageBitmap=Kt.prototype.ma,Kt.prototype.hasImageData=Kt.prototype.Ga;var fp=250;function pi(...n){return n.map(([e,t])=>({start:e,end:t}))}const qv=function(n){return class extends n{Ma(){this.i._registerModelResourcesGraphService()}}}((dp=class{constructor(n,e){this.l=!0,this.i=n,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:J0()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(n){const e=await(await fetch(n)).arrayBuffer();n=!(n.endsWith(".pbtxt")||n.endsWith(".textproto")),this.setGraph(new Uint8Array(e),n)}setGraphFromString(n){this.setGraph(new TextEncoder().encode(n),!1)}setGraph(n,e){const t=n.length,i=this.i._malloc(t);this.i.HEAPU8.set(n,i),e?this.i._changeBinaryGraph(t,i):this.i._changeTextGraph(t,i),this.i._free(i)}configureAudio(n,e,t,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Te(this,i||"input_audio",s=>{Te(this,r=r||"audio_header",o=>{this.i._configureAudio(s,o,n,e??0,t)})})}setAutoResizeCanvas(n){this.l=n}setAutoRenderToScreen(n){this.i._setAutoRenderToScreen(n)}setGpuBufferVerticalFlip(n){this.i.gpuOriginForWebTexturesIsBottomLeft=n}ea(n){mi(this,"__graph_config__",e=>{n(e)}),Te(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(n){this.i.errorListener=n}attachEmptyPacketListener(n,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[n]=e}addAudioToStream(n,e,t){this.addAudioToStreamWithShape(n,0,0,e,t)}addAudioToStreamWithShape(n,e,t,i,r){const s=4*n.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(n,this.g/4),Te(this,i,o=>{this.i._addAudioToInputStream(this.g,e,t,o,r)})}addGpuBufferToStream(n,e,t){Te(this,e,i=>{const[r,s]=tp(this,n,i);this.i._addBoundTextureToStream(i,r,s,t)})}addBoolToStream(n,e,t){Te(this,e,i=>{this.i._addBoolToInputStream(n,i,t)})}addDoubleToStream(n,e,t){Te(this,e,i=>{this.i._addDoubleToInputStream(n,i,t)})}addFloatToStream(n,e,t){Te(this,e,i=>{this.i._addFloatToInputStream(n,i,t)})}addIntToStream(n,e,t){Te(this,e,i=>{this.i._addIntToInputStream(n,i,t)})}addUintToStream(n,e,t){Te(this,e,i=>{this.i._addUintToInputStream(n,i,t)})}addStringToStream(n,e,t){Te(this,e,i=>{Te(this,n,r=>{this.i._addStringToInputStream(r,i,t)})})}addStringRecordToStream(n,e,t){Te(this,e,i=>{np(this,Object.keys(n),r=>{np(this,Object.values(n),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(n).length,i,t)})})})}addProtoToStream(n,e,t,i){Te(this,t,r=>{Te(this,e,s=>{const o=this.i._malloc(n.length);this.i.HEAPU8.set(n,o),this.i._addProtoToInputStream(o,n.length,s,r,i),this.i._free(o)})})}addEmptyPacketToStream(n,e){Te(this,n,t=>{this.i._addEmptyPacketToInputStream(t,e)})}addBoolVectorToStream(n,e,t){Te(this,e,i=>{const r=this.i._allocateBoolVector(n.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of n)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,t)})}addDoubleVectorToStream(n,e,t){Te(this,e,i=>{const r=this.i._allocateDoubleVector(n.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of n)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,t)})}addFloatVectorToStream(n,e,t){Te(this,e,i=>{const r=this.i._allocateFloatVector(n.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of n)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,t)})}addIntVectorToStream(n,e,t){Te(this,e,i=>{const r=this.i._allocateIntVector(n.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of n)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,t)})}addUintVectorToStream(n,e,t){Te(this,e,i=>{const r=this.i._allocateUintVector(n.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of n)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,t)})}addStringVectorToStream(n,e,t){Te(this,e,i=>{const r=this.i._allocateStringVector(n.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of n)Te(this,s,o=>{this.i._addStringVectorEntry(r,o)});this.i._addStringVectorToInputStream(r,i,t)})}addBoolToInputSidePacket(n,e){Te(this,e,t=>{this.i._addBoolToInputSidePacket(n,t)})}addDoubleToInputSidePacket(n,e){Te(this,e,t=>{this.i._addDoubleToInputSidePacket(n,t)})}addFloatToInputSidePacket(n,e){Te(this,e,t=>{this.i._addFloatToInputSidePacket(n,t)})}addIntToInputSidePacket(n,e){Te(this,e,t=>{this.i._addIntToInputSidePacket(n,t)})}addUintToInputSidePacket(n,e){Te(this,e,t=>{this.i._addUintToInputSidePacket(n,t)})}addStringToInputSidePacket(n,e){Te(this,e,t=>{Te(this,n,i=>{this.i._addStringToInputSidePacket(i,t)})})}addProtoToInputSidePacket(n,e,t){Te(this,t,i=>{Te(this,e,r=>{const s=this.i._malloc(n.length);this.i.HEAPU8.set(n,s),this.i._addProtoToInputSidePacket(s,n.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateBoolVector(n.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of n)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,t)})}addDoubleVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateDoubleVector(n.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of n)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,t)})}addFloatVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateFloatVector(n.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of n)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,t)})}addIntVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateIntVector(n.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of n)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,t)})}addUintVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateUintVector(n.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of n)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,t)})}addStringVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateStringVector(n.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of n)Te(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,t)})}attachBoolListener(n,e){mi(this,n,e),Te(this,n,t=>{this.i._attachBoolListener(t)})}attachBoolVectorListener(n,e){ir(this,n,e),Te(this,n,t=>{this.i._attachBoolVectorListener(t)})}attachIntListener(n,e){mi(this,n,e),Te(this,n,t=>{this.i._attachIntListener(t)})}attachIntVectorListener(n,e){ir(this,n,e),Te(this,n,t=>{this.i._attachIntVectorListener(t)})}attachUintListener(n,e){mi(this,n,e),Te(this,n,t=>{this.i._attachUintListener(t)})}attachUintVectorListener(n,e){ir(this,n,e),Te(this,n,t=>{this.i._attachUintVectorListener(t)})}attachDoubleListener(n,e){mi(this,n,e),Te(this,n,t=>{this.i._attachDoubleListener(t)})}attachDoubleVectorListener(n,e){ir(this,n,e),Te(this,n,t=>{this.i._attachDoubleVectorListener(t)})}attachFloatListener(n,e){mi(this,n,e),Te(this,n,t=>{this.i._attachFloatListener(t)})}attachFloatVectorListener(n,e){ir(this,n,e),Te(this,n,t=>{this.i._attachFloatVectorListener(t)})}attachStringListener(n,e){mi(this,n,e),Te(this,n,t=>{this.i._attachStringListener(t)})}attachStringVectorListener(n,e){ir(this,n,e),Te(this,n,t=>{this.i._attachStringVectorListener(t)})}attachProtoListener(n,e,t){mi(this,n,e),Te(this,n,i=>{this.i._attachProtoListener(i,t||!1)})}attachProtoVectorListener(n,e,t){ir(this,n,e),Te(this,n,i=>{this.i._attachProtoVectorListener(i,t||!1)})}attachAudioListener(n,e,t){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),mi(this,n,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)}),Te(this,n,i=>{this.i._attachAudioListener(i,t||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends dp{get ga(){return this.i}sa(n,e,t){Te(this,e,i=>{const[r,s]=tp(this,n,i);this.ga._addBoundTextureAsImageToStream(i,r,s,t)})}V(n,e){mi(this,n,e),Te(this,n,t=>{this.ga._attachImageListener(t)})}da(n,e){ir(this,n,e),Te(this,n,t=>{this.ga._attachImageVectorListener(t)})}}));var dp,Zn=class extends qv{};async function $e(n,e,t){return async function(i,r,s,o){return Gv(i,r,s,o)}(n,t.canvas??(J0()?void 0:document.createElement("canvas")),e,t)}function r_(n,e,t,i){if(n.U){const s=new w0;if(t?.regionOfInterest){if(!n.ra)throw Error("This task doesn't support region-of-interest.");var r=t.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ee(s,1,(r.left+r.right)/2),Ee(s,2,(r.top+r.bottom)/2),Ee(s,4,r.right-r.left),Ee(s,3,r.bottom-r.top)}else Ee(s,1,.5),Ee(s,2,.5),Ee(s,4,1),Ee(s,3,1);if(t?.rotationDegrees){if(t?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Ee(s,5,-Math.PI*t.rotationDegrees/180),t?.rotationDegrees%180!=0){const[o,a]=Q0(e);t=Ot(s,3)*a/o,r=Ot(s,4)*o/a,Ee(s,4,t),Ee(s,3,r)}}n.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",n.U,i)}n.g.sa(e,n.ba,i??performance.now()),n.finishProcessing()}function Jn(n,e,t){if(n.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");r_(n,e,t,n.B+1)}function wi(n,e,t,i){if(!n.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");r_(n,e,t,i)}function Ks(n,e,t,i){var r=e.data;const s=e.width,o=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==o)throw Error("Unsupported channel count: "+r.length/o);return n=new Vt([r],t,!1,n.g.i.canvas,n.P,s,e),i?n.clone():n}var Mn=class extends sc{constructor(n,e,t,i){super(n),this.g=n,this.ba=e,this.U=t,this.ra=i,this.P=new yo}l(n,e=!0){if("runningMode"in n&&ta(this.baseOptions,2,!!n.runningMode&&n.runningMode!=="IMAGE"),n.canvas!==void 0&&this.g.i.canvas!==n.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(n,e)}close(){this.P.close(),super.close()}};Mn.prototype.close=Mn.prototype.close;var Bn=class extends Mn{constructor(n,e){super(new Zn(n,e),"image_in","norm_rect_in",!1),this.j={detections:[]},we(n=this.h=new pl,0,1,e=new wt),Ee(this.h,2,.5),Ee(this.h,3,.3)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(n){we(this.h,0,1,n)}o(n){return"minDetectionConfidence"in n&&Ee(this.h,2,n.minDetectionConfidence??.5),"minSuppressionThreshold"in n&&Ee(this.h,3,n.minSuppressionThreshold??.3),this.l(n)}D(n,e){return this.j={detections:[]},Jn(this,n,e),this.j}F(n,e,t){return this.j={detections:[]},wi(this,n,t,e),this.j}m(){var n=new Tn;Et(n,"image_in"),Et(n,"norm_rect_in"),ot(n,"detections");const e=new Dn;hi(e,Cv,this.h);const t=new fn;Nn(t,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),yt(t,"IMAGE:image_in"),yt(t,"NORM_RECT:norm_rect_in"),Qe(t,"DETECTIONS:detections"),t.o(e),Un(n,t),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=T0(s),this.j.detections.push($0(i));me(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Bn.prototype.detectForVideo=Bn.prototype.F,Bn.prototype.detect=Bn.prototype.D,Bn.prototype.setOptions=Bn.prototype.o,Bn.createFromModelPath=async function(n,e){return $e(Bn,n,{baseOptions:{modelAssetPath:e}})},Bn.createFromModelBuffer=function(n,e){return $e(Bn,n,{baseOptions:{modelAssetBuffer:e}})},Bn.createFromOptions=function(n,e){return $e(Bn,n,e)};var If=pi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Df=pi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Nf=pi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),s_=pi([474,475],[475,476],[476,477],[477,474]),Uf=pi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Ff=pi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),o_=pi([469,470],[470,471],[471,472],[472,469]),Of=pi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),a_=[...If,...Df,...Nf,...Uf,...Ff,...Of],c_=pi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function pp(n){n.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var rt=class extends Mn{constructor(n,e){super(new Zn(n,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,we(n=this.h=new I0,0,1,e=new wt),this.v=new L0,we(this.h,0,3,this.v),this.s=new pl,we(this.h,0,2,this.s),Si(this.s,4,1),Ee(this.s,2,.5),Ee(this.v,2,.5),Ee(this.h,4,.5)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(n){we(this.h,0,1,n)}o(n){return"numFaces"in n&&Si(this.s,4,n.numFaces??1),"minFaceDetectionConfidence"in n&&Ee(this.s,2,n.minFaceDetectionConfidence??.5),"minTrackingConfidence"in n&&Ee(this.h,4,n.minTrackingConfidence??.5),"minFacePresenceConfidence"in n&&Ee(this.v,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in n&&(this.outputFacialTransformationMatrixes=!!n.outputFacialTransformationMatrixes),this.l(n)}D(n,e){return pp(this),Jn(this,n,e),this.j}F(n,e,t){return pp(this),wi(this,n,t,e),this.j}m(){var n=new Tn;Et(n,"image_in"),Et(n,"norm_rect"),ot(n,"face_landmarks");const e=new Dn;hi(e,Lv,this.h);const t=new fn;Nn(t,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),yt(t,"IMAGE:image_in"),yt(t,"NORM_RECT:norm_rect"),Qe(t,"NORM_LANDMARKS:face_landmarks"),t.o(e),Un(n,t),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=pa(s),this.j.faceLandmarks.push(ml(i));me(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{me(this,i)}),this.outputFaceBlendshapes&&(ot(n,"blendshapes"),Qe(t,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=dl(s),this.j.faceBlendshapes.push(Rf(i.g()??[]));me(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{me(this,i)})),this.outputFacialTransformationMatrixes&&(ot(n,"face_geometry"),Qe(t,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=tt(Pv(s),Mv,2))&&this.j.facialTransformationMatrixes.push({rows:ci(Xn(i,1),0)??0,columns:ci(Xn(i,2),0)??0,data:Yr(i,3,Pr,jr()).slice()??[]});me(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{me(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};rt.prototype.detectForVideo=rt.prototype.F,rt.prototype.detect=rt.prototype.D,rt.prototype.setOptions=rt.prototype.o,rt.createFromModelPath=function(n,e){return $e(rt,n,{baseOptions:{modelAssetPath:e}})},rt.createFromModelBuffer=function(n,e){return $e(rt,n,{baseOptions:{modelAssetBuffer:e}})},rt.createFromOptions=function(n,e){return $e(rt,n,e)},rt.FACE_LANDMARKS_LIPS=If,rt.FACE_LANDMARKS_LEFT_EYE=Df,rt.FACE_LANDMARKS_LEFT_EYEBROW=Nf,rt.FACE_LANDMARKS_LEFT_IRIS=s_,rt.FACE_LANDMARKS_RIGHT_EYE=Uf,rt.FACE_LANDMARKS_RIGHT_EYEBROW=Ff,rt.FACE_LANDMARKS_RIGHT_IRIS=o_,rt.FACE_LANDMARKS_FACE_OVAL=Of,rt.FACE_LANDMARKS_CONTOURS=a_,rt.FACE_LANDMARKS_TESSELATION=c_;var gi=class extends Mn{constructor(n,e){super(new Zn(n,e),"image_in","norm_rect",!0),we(n=this.j=new N0,0,1,e=new wt)}get baseOptions(){return tt(this.j,wt,1)}set baseOptions(n){we(this.j,0,1,n)}o(n){return super.l(n)}Pa(n,e,t){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:t,Jn(this,n,i??{}),!this.h)return this.s}m(){var n=new Tn;Et(n,"image_in"),Et(n,"norm_rect"),ot(n,"stylized_image");const e=new Dn;hi(e,Iv,this.j);const t=new fn;Nn(t,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),yt(t,"IMAGE:image_in"),yt(t,"NORM_RECT:norm_rect"),Qe(t,"STYLIZED_IMAGE:stylized_image"),t.o(e),Un(n,t),this.g.V("stylized_image",(i,r)=>{var s=!this.h,o=i.data,a=i.width;const c=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*c){const l=new Uint8ClampedArray(4*c);for(let u=0;u<c;++u)l[4*u]=o[3*u],l[4*u+1]=o[3*u+1],l[4*u+2]=o[3*u+2],l[4*u+3]=255;o=new ImageData(l,a,i)}else{if(o.length!==4*c)throw Error("Unsupported channel count: "+o.length/c);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new Kt([o],!1,!1,this.g.i.canvas,this.P,a,i),this.s=s=s?a.clone():a,this.h&&this.h(s),me(this,r)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.s=null,this.h&&this.h(null),me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};gi.prototype.stylize=gi.prototype.Pa,gi.prototype.setOptions=gi.prototype.o,gi.createFromModelPath=function(n,e){return $e(gi,n,{baseOptions:{modelAssetPath:e}})},gi.createFromModelBuffer=function(n,e){return $e(gi,n,{baseOptions:{modelAssetBuffer:e}})},gi.createFromOptions=function(n,e){return $e(gi,n,e)};var Bf=pi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function mp(n){n.gestures=[],n.landmarks=[],n.worldLandmarks=[],n.handedness=[]}function gp(n){return n.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:n.gestures,landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handedness:n.handedness,handednesses:n.handedness}}function _p(n,e=!0){const t=[];for(const r of n){var i=dl(r);n=[];for(const s of i.g())i=e&&Xn(s,1)!=null?ci(Xn(s,1),0):-1,n.push({score:Ot(s,2)??0,index:i,categoryName:Ei(s,3)??"",displayName:Ei(s,4)??""});t.push(n)}return t}var An=class extends Mn{constructor(n,e){super(new Zn(n,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],we(n=this.j=new O0,0,1,e=new wt),this.s=new Tf,we(this.j,0,2,this.s),this.C=new Sf,we(this.s,0,3,this.C),this.v=new F0,we(this.s,0,2,this.v),this.h=new Dv,we(this.j,0,3,this.h),Ee(this.v,2,.5),Ee(this.s,4,.5),Ee(this.C,2,.5)}get baseOptions(){return tt(this.j,wt,1)}set baseOptions(n){we(this.j,0,1,n)}o(n){if(Si(this.v,3,n.numHands??1),"minHandDetectionConfidence"in n&&Ee(this.v,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Ee(this.s,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Ee(this.C,2,n.minHandPresenceConfidence??.5),n.cannedGesturesClassifierOptions){var e=new us,t=e,i=Hu(n.cannedGesturesClassifierOptions,tt(this.h,us,3)?.h());we(t,0,2,i),we(this.h,0,3,e)}else n.cannedGesturesClassifierOptions===void 0&&tt(this.h,us,3)?.g();return n.customGesturesClassifierOptions?(we(t=e=new us,0,2,i=Hu(n.customGesturesClassifierOptions,tt(this.h,us,4)?.h())),we(this.h,0,4,e)):n.customGesturesClassifierOptions===void 0&&tt(this.h,us,4)?.g(),this.l(n)}Ka(n,e){return mp(this),Jn(this,n,e),gp(this)}La(n,e,t){return mp(this),wi(this,n,t,e),gp(this)}m(){var n=new Tn;Et(n,"image_in"),Et(n,"norm_rect"),ot(n,"hand_gestures"),ot(n,"hand_landmarks"),ot(n,"world_hand_landmarks"),ot(n,"handedness");const e=new Dn;hi(e,Nv,this.j);const t=new fn;Nn(t,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),yt(t,"IMAGE:image_in"),yt(t,"NORM_RECT:norm_rect"),Qe(t,"HAND_GESTURES:hand_gestures"),Qe(t,"LANDMARKS:hand_landmarks"),Qe(t,"WORLD_LANDMARKS:world_hand_landmarks"),Qe(t,"HANDEDNESS:handedness"),t.o(e),Un(n,t),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=pa(s);const o=[];for(const a of Ji(i,A0,1))o.push({x:Ot(a,1)??0,y:Ot(a,2)??0,z:Ot(a,3)??0,visibility:Ot(a,4)??0});this.landmarks.push(o)}me(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{me(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=Ns(s);const o=[];for(const a of Ji(i,b0,1))o.push({x:Ot(a,1)??0,y:Ot(a,2)??0,z:Ot(a,3)??0,visibility:Ot(a,4)??0});this.worldLandmarks.push(o)}me(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{me(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(..._p(i,!1)),me(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{me(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(..._p(i)),me(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};function vp(n){return{landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handednesses:n.handedness,handedness:n.handedness}}An.prototype.recognizeForVideo=An.prototype.La,An.prototype.recognize=An.prototype.Ka,An.prototype.setOptions=An.prototype.o,An.createFromModelPath=function(n,e){return $e(An,n,{baseOptions:{modelAssetPath:e}})},An.createFromModelBuffer=function(n,e){return $e(An,n,{baseOptions:{modelAssetBuffer:e}})},An.createFromOptions=function(n,e){return $e(An,n,e)},An.HAND_CONNECTIONS=Bf;var wn=class extends Mn{constructor(n,e){super(new Zn(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],we(n=this.h=new Tf,0,1,e=new wt),this.s=new Sf,we(this.h,0,3,this.s),this.j=new F0,we(this.h,0,2,this.j),Si(this.j,3,1),Ee(this.j,2,.5),Ee(this.s,2,.5),Ee(this.h,4,.5)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(n){we(this.h,0,1,n)}o(n){return"numHands"in n&&Si(this.j,3,n.numHands??1),"minHandDetectionConfidence"in n&&Ee(this.j,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Ee(this.h,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Ee(this.s,2,n.minHandPresenceConfidence??.5),this.l(n)}D(n,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Jn(this,n,e),vp(this)}F(n,e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],wi(this,n,t,e),vp(this)}m(){var n=new Tn;Et(n,"image_in"),Et(n,"norm_rect"),ot(n,"hand_landmarks"),ot(n,"world_hand_landmarks"),ot(n,"handedness");const e=new Dn;hi(e,Uv,this.h);const t=new fn;Nn(t,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),yt(t,"IMAGE:image_in"),yt(t,"NORM_RECT:norm_rect"),Qe(t,"LANDMARKS:hand_landmarks"),Qe(t,"WORLD_LANDMARKS:world_hand_landmarks"),Qe(t,"HANDEDNESS:handedness"),t.o(e),Un(n,t),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=pa(s),this.landmarks.push(ml(i));me(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{me(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=Ns(s),this.worldLandmarks.push(qo(i));me(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{me(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,o=s.push;const a=[];for(const c of i){i=dl(c);const l=[];for(const u of i.g())l.push({score:Ot(u,2)??0,index:ci(Xn(u,1),0)??-1,categoryName:Ei(u,3)??"",displayName:Ei(u,4)??""});a.push(l)}o.call(s,...a),me(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};wn.prototype.detectForVideo=wn.prototype.F,wn.prototype.detect=wn.prototype.D,wn.prototype.setOptions=wn.prototype.o,wn.createFromModelPath=function(n,e){return $e(wn,n,{baseOptions:{modelAssetPath:e}})},wn.createFromModelBuffer=function(n,e){return $e(wn,n,{baseOptions:{modelAssetBuffer:e}})},wn.createFromOptions=function(n,e){return $e(wn,n,e)},wn.HAND_CONNECTIONS=Bf;var l_=pi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function xp(n){n.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function yp(n){try{if(!n.C)return n.h;n.C(n.h)}finally{_l(n)}}function Aa(n,e){n=pa(n),e.push(ml(n))}var bt=class extends Mn{constructor(n,e){super(new Zn(n,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,we(n=this.j=new V0,0,1,e=new wt),this.K=new Sf,we(this.j,0,2,this.K),this.aa=new Fv,we(this.j,0,3,this.aa),this.s=new pl,we(this.j,0,4,this.s),this.I=new L0,we(this.j,0,5,this.I),this.v=new z0,we(this.j,0,6,this.v),this.L=new H0,we(this.j,0,7,this.L),Ee(this.s,2,.5),Ee(this.s,3,.3),Ee(this.I,2,.5),Ee(this.v,2,.5),Ee(this.v,3,.3),Ee(this.L,2,.5),Ee(this.K,2,.5)}get baseOptions(){return tt(this.j,wt,1)}set baseOptions(n){we(this.j,0,1,n)}o(n){return"minFaceDetectionConfidence"in n&&Ee(this.s,2,n.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in n&&Ee(this.s,3,n.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in n&&Ee(this.I,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"minPoseDetectionConfidence"in n&&Ee(this.v,2,n.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in n&&Ee(this.v,3,n.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in n&&Ee(this.L,2,n.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in n&&(this.outputPoseSegmentationMasks=!!n.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in n&&Ee(this.K,2,n.minHandLandmarksConfidence??.5),this.l(n)}D(n,e,t){const i=typeof e!="function"?e:{};return this.C=typeof e=="function"?e:t,xp(this),Jn(this,n,i),yp(this)}F(n,e,t,i){const r=typeof t!="function"?t:{};return this.C=typeof t=="function"?t:i,xp(this),wi(this,n,r,e),yp(this)}m(){var n=new Tn;Et(n,"input_frames_image"),ot(n,"pose_landmarks"),ot(n,"pose_world_landmarks"),ot(n,"face_landmarks"),ot(n,"left_hand_landmarks"),ot(n,"left_hand_world_landmarks"),ot(n,"right_hand_landmarks"),ot(n,"right_hand_world_landmarks");const e=new Dn,t=new kd;Uu(t,1,mo("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),function(r,s){if(s!=null)if(Array.isArray(s))xt(r,2,tl(s,Jh,void 0,void 0,!1));else{if(!(typeof s=="string"||s instanceof qi||la(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Uu(r,2,Vh(s,!1,!1),ns())}}(t,this.j.g());const i=new fn;Nn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Rc(i,8,kd,t),yt(i,"IMAGE:input_frames_image"),Qe(i,"POSE_LANDMARKS:pose_landmarks"),Qe(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Qe(i,"FACE_LANDMARKS:face_landmarks"),Qe(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Qe(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Qe(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Qe(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),Un(n,i),gl(this,n),this.g.attachProtoListener("pose_landmarks",(r,s)=>{Aa(r,this.h.poseLandmarks),me(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{me(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var o=this.h.poseWorldLandmarks;r=Ns(r),o.push(qo(r)),me(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{me(this,r)}),this.outputPoseSegmentationMasks&&(Qe(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),js(this,"pose_segmentation_mask"),this.g.V("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[Ks(this,r,!0,!this.C)],me(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],me(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{Aa(r,this.h.faceLandmarks),me(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{me(this,r)}),this.outputFaceBlendshapes&&(ot(n,"extra_blendshapes"),Qe(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=dl(r),o.push(Rf(r.g()??[]))),me(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{me(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{Aa(r,this.h.leftHandLandmarks),me(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{me(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var o=this.h.leftHandWorldLandmarks;r=Ns(r),o.push(qo(r)),me(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{me(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{Aa(r,this.h.rightHandLandmarks),me(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{me(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var o=this.h.rightHandWorldLandmarks;r=Ns(r),o.push(qo(r)),me(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{me(this,r)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};bt.prototype.detectForVideo=bt.prototype.F,bt.prototype.detect=bt.prototype.D,bt.prototype.setOptions=bt.prototype.o,bt.createFromModelPath=function(n,e){return $e(bt,n,{baseOptions:{modelAssetPath:e}})},bt.createFromModelBuffer=function(n,e){return $e(bt,n,{baseOptions:{modelAssetBuffer:e}})},bt.createFromOptions=function(n,e){return $e(bt,n,e)},bt.HAND_CONNECTIONS=Bf,bt.POSE_CONNECTIONS=l_,bt.FACE_LANDMARKS_LIPS=If,bt.FACE_LANDMARKS_LEFT_EYE=Df,bt.FACE_LANDMARKS_LEFT_EYEBROW=Nf,bt.FACE_LANDMARKS_LEFT_IRIS=s_,bt.FACE_LANDMARKS_RIGHT_EYE=Uf,bt.FACE_LANDMARKS_RIGHT_EYEBROW=Ff,bt.FACE_LANDMARKS_RIGHT_IRIS=o_,bt.FACE_LANDMARKS_FACE_OVAL=Of,bt.FACE_LANDMARKS_CONTOURS=a_,bt.FACE_LANDMARKS_TESSELATION=c_;var kn=class extends Mn{constructor(n,e){super(new Zn(n,e),"input_image","norm_rect",!0),this.j={classifications:[]},we(n=this.h=new G0,0,1,e=new wt)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(n){we(this.h,0,1,n)}o(n){return we(this.h,0,2,Hu(n,tt(this.h,yf,2))),this.l(n)}ua(n,e){return this.j={classifications:[]},Jn(this,n,e),this.j}va(n,e,t){return this.j={classifications:[]},wi(this,n,t,e),this.j}m(){var n=new Tn;Et(n,"input_image"),Et(n,"norm_rect"),ot(n,"classifications");const e=new Dn;hi(e,Ov,this.h);const t=new fn;Nn(t,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),yt(t,"IMAGE:input_image"),yt(t,"NORM_RECT:norm_rect"),Qe(t,"CLASSIFICATIONS:classifications"),t.o(e),Un(n,t),this.g.attachProtoListener("classifications",(i,r)=>{this.j=function(s){const o={classifications:Ji(s,Sv,1).map(a=>Rf(tt(a,E0,4)?.g()??[],ci(Xn(a,2),0),Ei(a,3)))};return bc(Tr(s,2))!=null&&(o.timestampMs=ci(bc(Tr(s,2)),0)),o}(Tv(i)),me(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};kn.prototype.classifyForVideo=kn.prototype.va,kn.prototype.classify=kn.prototype.ua,kn.prototype.setOptions=kn.prototype.o,kn.createFromModelPath=function(n,e){return $e(kn,n,{baseOptions:{modelAssetPath:e}})},kn.createFromModelBuffer=function(n,e){return $e(kn,n,{baseOptions:{modelAssetBuffer:e}})},kn.createFromOptions=function(n,e){return $e(kn,n,e)};var Rn=class extends Mn{constructor(n,e){super(new Zn(n,e),"image_in","norm_rect",!0),this.h=new W0,this.embeddings={embeddings:[]},we(n=this.h,0,1,e=new wt)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(n){we(this.h,0,1,n)}o(n){var e=this.h,t=tt(this.h,qd,2);return t=t?t.clone():new qd,n.l2Normalize!==void 0?ta(t,1,n.l2Normalize):"l2Normalize"in n&&xt(t,1),n.quantize!==void 0?ta(t,2,n.quantize):"quantize"in n&&xt(t,2),we(e,0,2,t),this.l(n)}Ba(n,e){return Jn(this,n,e),this.embeddings}Ca(n,e,t){return wi(this,n,t,e),this.embeddings}m(){var n=new Tn;Et(n,"image_in"),Et(n,"norm_rect"),ot(n,"embeddings_out");const e=new Dn;hi(e,Bv,this.h);const t=new fn;Nn(t,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),yt(t,"IMAGE:image_in"),yt(t,"NORM_RECT:norm_rect"),Qe(t,"EMBEDDINGS:embeddings_out"),t.o(e),Un(n,t),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=wv(i),this.embeddings=function(s){return{embeddings:Ji(s,Av,1).map(o=>{const a={headIndex:ci(Xn(o,3),0)??-1,headName:Ei(o,4)??""};if(Vg(o,Yd,Ul(o,1))!==void 0)o=Yr(o=tt(o,Yd,Ul(o,1)),1,Pr,jr()),a.floatEmbedding=o.slice();else{const c=new Uint8Array(0);a.quantizedEmbedding=tt(o,bv,Ul(o,2))?.qa()?.h()??c}return a}),timestampMs:ci(bc(Tr(s,2)),0)}}(i),me(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Rn.cosineSimilarity=function(n,e){if(n.floatEmbedding&&e.floatEmbedding)n=Qd(n.floatEmbedding,e.floatEmbedding);else{if(!n.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");n=Qd(Jd(n.quantizedEmbedding),Jd(e.quantizedEmbedding))}return n},Rn.prototype.embedForVideo=Rn.prototype.Ca,Rn.prototype.embed=Rn.prototype.Ba,Rn.prototype.setOptions=Rn.prototype.o,Rn.createFromModelPath=function(n,e){return $e(Rn,n,{baseOptions:{modelAssetPath:e}})},Rn.createFromModelBuffer=function(n,e){return $e(Rn,n,{baseOptions:{modelAssetBuffer:e}})},Rn.createFromOptions=function(n,e){return $e(Rn,n,e)};var Wu=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};function Mp(n){n.categoryMask=void 0,n.confidenceMasks=void 0,n.qualityScores=void 0}function Ep(n){try{const e=new Wu(n.confidenceMasks,n.categoryMask,n.qualityScores);if(!n.j)return e;n.j(e)}finally{_l(n)}}Wu.prototype.close=Wu.prototype.close;var gn=class extends Mn{constructor(n,e){super(new Zn(n,e),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new wf,this.v=new X0,we(this.h,0,3,this.v),we(n=this.h,0,1,e=new wt)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(n){we(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?xt(this.h,2,mo(n.displayNamesLocale)):"displayNamesLocale"in n&&xt(this.h,2),"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}J(){(function(n){const e=Ji(n.ea(),fn,1).filter(t=>Ei(t,1).includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(n.s=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(tt(e[0],Dn,7)?.l()?.g()??new Map).forEach((t,i)=>{n.s[Number(i)]=Ei(t,1)})})(this)}fa(n,e,t){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:t,Mp(this),Jn(this,n,i),Ep(this)}Na(n,e,t,i){const r=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:i,Mp(this),wi(this,n,r,e),Ep(this)}Fa(){return this.s}m(){var n=new Tn;Et(n,"image_in"),Et(n,"norm_rect");const e=new Dn;hi(e,Y0,this.h);const t=new fn;Nn(t,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),yt(t,"IMAGE:image_in"),yt(t,"NORM_RECT:norm_rect"),t.o(e),Un(n,t),gl(this,n),this.outputConfidenceMasks&&(ot(n,"confidence_masks"),Qe(t,"CONFIDENCE_MASKS:confidence_masks"),js(this,"confidence_masks"),this.g.da("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>Ks(this,s,!0,!this.j)),me(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],me(this,i)})),this.outputCategoryMask&&(ot(n,"category_mask"),Qe(t,"CATEGORY_MASK:category_mask"),js(this,"category_mask"),this.g.V("category_mask",(i,r)=>{this.categoryMask=Ks(this,i,!1,!this.j),me(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,me(this,i)})),ot(n,"quality_scores"),Qe(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,me(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};gn.prototype.getLabels=gn.prototype.Fa,gn.prototype.segmentForVideo=gn.prototype.Na,gn.prototype.segment=gn.prototype.fa,gn.prototype.setOptions=gn.prototype.o,gn.createFromModelPath=function(n,e){return $e(gn,n,{baseOptions:{modelAssetPath:e}})},gn.createFromModelBuffer=function(n,e){return $e(gn,n,{baseOptions:{modelAssetBuffer:e}})},gn.createFromOptions=function(n,e){return $e(gn,n,e)};var Xu=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};Xu.prototype.close=Xu.prototype.close;var Kv=class extends ye{constructor(n){super(n)}},hs=[0,Ft,-2],Dc=[0,Hi,-3,Ct,Hi,-1],Sp=[0,Dc],Tp=[0,Dc,Ft,-1],Vl=class extends ye{constructor(n){super(n)}},bp=[0,Hi,-1,Ct],$v=class extends ye{constructor(){super()}},Ap=class extends ye{constructor(n){super(n)}},ju=[1,2,3,4,5,6,7,8,9,10,14,15],u_=class extends ye{constructor(){super()}};u_.prototype.g=fl([0,Wt,[0,ju,_t,Dc,_t,[0,Dc,hs],_t,Sp,_t,[0,Sp,hs],_t,bp,_t,[0,Hi,-3,Ct,li],_t,[0,Hi,-3,Ct],_t,[0,dt,Hi,-2,Ct,Ft,Ct,-1,2,Hi,hs],_t,Tp,_t,[0,Tp,hs],Hi,hs,dt,_t,[0,Hi,-3,Ct,hs,-1],_t,[0,Wt,bp]],dt,[0,dt,Ft,-1,Ct]]);var _i=class extends Mn{constructor(n,e){super(new Zn(n,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new wf,this.s=new X0,we(this.h,0,3,this.s),we(n=this.h,0,1,e=new wt)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(n){we(this.h,0,1,n)}o(n){return"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}fa(n,e,t,i){const r=typeof t!="function"?t:{};this.j=typeof t=="function"?t:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,t=this.B+1,i=new u_;const s=new Ap;var o=new Kv;if(Si(o,1,255),we(s,0,12,o),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var a=new Vl;ta(a,3,!0),Ee(a,1,e.keypoint.x),Ee(a,2,e.keypoint.y),Xo(s,5,ju,a)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new $v,e.scribble))ta(e=new Vl,3,!0),Ee(e,1,a.x),Ee(e,2,a.y),Rc(o,1,Vl,e);Xo(s,15,ju,o)}Rc(i,1,Ap,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",t),Jn(this,n,r);e:{try{const l=new Xu(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break e}this.j(l)}finally{_l(this)}c=void 0}return c}m(){var n=new Tn;Et(n,"image_in"),Et(n,"roi_in"),Et(n,"norm_rect_in");const e=new Dn;hi(e,Y0,this.h);const t=new fn;Nn(t,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),yt(t,"IMAGE:image_in"),yt(t,"ROI:roi_in"),yt(t,"NORM_RECT:norm_rect_in"),t.o(e),Un(n,t),gl(this,n),this.outputConfidenceMasks&&(ot(n,"confidence_masks"),Qe(t,"CONFIDENCE_MASKS:confidence_masks"),js(this,"confidence_masks"),this.g.da("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>Ks(this,s,!0,!this.j)),me(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],me(this,i)})),this.outputCategoryMask&&(ot(n,"category_mask"),Qe(t,"CATEGORY_MASK:category_mask"),js(this,"category_mask"),this.g.V("category_mask",(i,r)=>{this.categoryMask=Ks(this,i,!1,!this.j),me(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,me(this,i)})),ot(n,"quality_scores"),Qe(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,me(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};_i.prototype.segment=_i.prototype.fa,_i.prototype.setOptions=_i.prototype.o,_i.createFromModelPath=function(n,e){return $e(_i,n,{baseOptions:{modelAssetPath:e}})},_i.createFromModelBuffer=function(n,e){return $e(_i,n,{baseOptions:{modelAssetBuffer:e}})},_i.createFromOptions=function(n,e){return $e(_i,n,e)};var zn=class extends Mn{constructor(n,e){super(new Zn(n,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},we(n=this.h=new q0,0,1,e=new wt)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(n){we(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?xt(this.h,2,mo(n.displayNamesLocale)):"displayNamesLocale"in n&&xt(this.h,2),n.maxResults!==void 0?Si(this.h,3,n.maxResults):"maxResults"in n&&xt(this.h,3),n.scoreThreshold!==void 0?Ee(this.h,4,n.scoreThreshold):"scoreThreshold"in n&&xt(this.h,4),n.categoryAllowlist!==void 0?Cc(this.h,5,n.categoryAllowlist):"categoryAllowlist"in n&&xt(this.h,5),n.categoryDenylist!==void 0?Cc(this.h,6,n.categoryDenylist):"categoryDenylist"in n&&xt(this.h,6),this.l(n)}D(n,e){return this.j={detections:[]},Jn(this,n,e),this.j}F(n,e,t){return this.j={detections:[]},wi(this,n,t,e),this.j}m(){var n=new Tn;Et(n,"input_frame_gpu"),Et(n,"norm_rect"),ot(n,"detections");const e=new Dn;hi(e,zv,this.h);const t=new fn;Nn(t,"mediapipe.tasks.vision.ObjectDetectorGraph"),yt(t,"IMAGE:input_frame_gpu"),yt(t,"NORM_RECT:norm_rect"),Qe(t,"DETECTIONS:detections"),t.o(e),Un(n,t),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=T0(s),this.j.detections.push($0(i));me(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};zn.prototype.detectForVideo=zn.prototype.F,zn.prototype.detect=zn.prototype.D,zn.prototype.setOptions=zn.prototype.o,zn.createFromModelPath=async function(n,e){return $e(zn,n,{baseOptions:{modelAssetPath:e}})},zn.createFromModelBuffer=function(n,e){return $e(zn,n,{baseOptions:{modelAssetBuffer:e}})},zn.createFromOptions=function(n,e){return $e(zn,n,e)};var Yu=class{constructor(n,e,t){this.landmarks=n,this.worldLandmarks=e,this.segmentationMasks=t}close(){this.segmentationMasks?.forEach(n=>{n.close()})}};function wp(n){n.landmarks=[],n.worldLandmarks=[],n.segmentationMasks=void 0}function Rp(n){try{const e=new Yu(n.landmarks,n.worldLandmarks,n.segmentationMasks);if(!n.s)return e;n.s(e)}finally{_l(n)}}Yu.prototype.close=Yu.prototype.close;var Cn=class extends Mn{constructor(n,e){super(new Zn(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,we(n=this.h=new K0,0,1,e=new wt),this.v=new H0,we(this.h,0,3,this.v),this.j=new z0,we(this.h,0,2,this.j),Si(this.j,4,1),Ee(this.j,2,.5),Ee(this.v,2,.5),Ee(this.h,4,.5)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(n){we(this.h,0,1,n)}o(n){return"numPoses"in n&&Si(this.j,4,n.numPoses??1),"minPoseDetectionConfidence"in n&&Ee(this.j,2,n.minPoseDetectionConfidence??.5),"minTrackingConfidence"in n&&Ee(this.h,4,n.minTrackingConfidence??.5),"minPosePresenceConfidence"in n&&Ee(this.v,2,n.minPosePresenceConfidence??.5),"outputSegmentationMasks"in n&&(this.outputSegmentationMasks=n.outputSegmentationMasks??!1),this.l(n)}D(n,e,t){const i=typeof e!="function"?e:{};return this.s=typeof e=="function"?e:t,wp(this),Jn(this,n,i),Rp(this)}F(n,e,t,i){const r=typeof t!="function"?t:{};return this.s=typeof t=="function"?t:i,wp(this),wi(this,n,r,e),Rp(this)}m(){var n=new Tn;Et(n,"image_in"),Et(n,"norm_rect"),ot(n,"normalized_landmarks"),ot(n,"world_landmarks"),ot(n,"segmentation_masks");const e=new Dn;hi(e,Hv,this.h);const t=new fn;Nn(t,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),yt(t,"IMAGE:image_in"),yt(t,"NORM_RECT:norm_rect"),Qe(t,"NORM_LANDMARKS:normalized_landmarks"),Qe(t,"WORLD_LANDMARKS:world_landmarks"),t.o(e),Un(n,t),gl(this,n),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=pa(s),this.landmarks.push(ml(i));me(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],me(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=Ns(s),this.worldLandmarks.push(qo(i));me(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],me(this,i)}),this.outputSegmentationMasks&&(Qe(t,"SEGMENTATION_MASK:segmentation_masks"),js(this,"segmentation_masks"),this.g.da("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>Ks(this,s,!0,!this.s)),me(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],me(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Cn.prototype.detectForVideo=Cn.prototype.F,Cn.prototype.detect=Cn.prototype.D,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(n,e){return $e(Cn,n,{baseOptions:{modelAssetPath:e}})},Cn.createFromModelBuffer=function(n,e){return $e(Cn,n,{baseOptions:{modelAssetBuffer:e}})},Cn.createFromOptions=function(n,e){return $e(Cn,n,e)},Cn.POSE_CONNECTIONS=l_;const Nc=Symbol("store-raw"),Us=Symbol("store-node"),Vi=Symbol("store-has"),h_=Symbol("store-self");function f_(n){let e=n[es];if(!e&&(Object.defineProperty(n,es,{value:e=new Proxy(n,Qv)}),!Array.isArray(n))){const t=Object.keys(n),i=Object.getOwnPropertyDescriptors(n);for(let r=0,s=t.length;r<s;r++){const o=t[r];i[o].get&&Object.defineProperty(n,o,{enumerable:i[o].enumerable,get:i[o].get.bind(e)})}}return e}function $s(n){let e;return n!=null&&typeof n=="object"&&(n[es]||!(e=Object.getPrototypeOf(n))||e===Object.prototype||Array.isArray(n))}function Zs(n,e=new Set){let t,i,r,s;if(t=n!=null&&n[Nc])return t;if(!$s(n)||e.has(n))return n;if(Array.isArray(n)){Object.isFrozen(n)?n=n.slice(0):e.add(n);for(let o=0,a=n.length;o<a;o++)r=n[o],(i=Zs(r,e))!==r&&(n[o]=i)}else{Object.isFrozen(n)?n=Object.assign({},n):e.add(n);const o=Object.keys(n),a=Object.getOwnPropertyDescriptors(n);for(let c=0,l=o.length;c<l;c++)s=o[c],!a[s].get&&(r=n[s],(i=Zs(r,e))!==r&&(n[s]=i))}return n}function Uc(n,e){let t=n[e];return t||Object.defineProperty(n,e,{value:t=Object.create(null)}),t}function ra(n,e,t){if(n[e])return n[e];const[i,r]=_n(t,{equals:!1,internal:!0});return i.$=r,n[e]=i}function Zv(n,e){const t=Reflect.getOwnPropertyDescriptor(n,e);return!t||t.get||!t.configurable||e===es||e===Us||(delete t.value,delete t.writable,t.get=()=>n[es][e]),t}function d_(n){Au()&&ra(Uc(n,Us),h_)()}function Jv(n){return d_(n),Reflect.ownKeys(n)}const Qv={get(n,e,t){if(e===Nc)return n;if(e===es)return t;if(e===bu)return d_(n),t;const i=Uc(n,Us),r=i[e];let s=r?r():n[e];if(e===Us||e===Vi||e==="__proto__")return s;if(!r){const o=Object.getOwnPropertyDescriptor(n,e);Au()&&(typeof s!="function"||n.hasOwnProperty(e))&&!(o&&o.get)&&(s=ra(i,e,s)())}return $s(s)?f_(s):s},has(n,e){return e===Nc||e===es||e===bu||e===Us||e===Vi||e==="__proto__"?!0:(Au()&&ra(Uc(n,Vi),e)(),e in n)},set(){return!0},deleteProperty(){return!0},ownKeys:Jv,getOwnPropertyDescriptor:Zv};function Js(n,e,t,i=!1){if(!i&&n[e]===t)return;const r=n[e],s=n.length;t===void 0?(delete n[e],n[Vi]&&n[Vi][e]&&r!==void 0&&n[Vi][e].$()):(n[e]=t,n[Vi]&&n[Vi][e]&&r===void 0&&n[Vi][e].$());let o=Uc(n,Us),a;if((a=ra(o,e,r))&&a.$(()=>t),Array.isArray(n)&&n.length!==s){for(let c=n.length;c<s;c++)(a=o[c])&&a.$();(a=ra(o,"length",s))&&a.$(n.length)}(a=o[h_])&&a.$()}function p_(n,e){const t=Object.keys(e);for(let i=0;i<t.length;i+=1){const r=t[i];Js(n,r,e[r])}}function e2(n,e){if(typeof e=="function"&&(e=e(n)),e=Zs(e),Array.isArray(e)){if(n===e)return;let t=0,i=e.length;for(;t<i;t++){const r=e[t];n[t]!==r&&Js(n,t,r)}Js(n,"length",i)}else p_(n,e)}function Vo(n,e,t=[]){let i,r=n;if(e.length>1){i=e.shift();const o=typeof i,a=Array.isArray(n);if(Array.isArray(i)){for(let c=0;c<i.length;c++)Vo(n,[i[c]].concat(e),t);return}else if(a&&o==="function"){for(let c=0;c<n.length;c++)i(n[c],c)&&Vo(n,[c].concat(e),t);return}else if(a&&o==="object"){const{from:c=0,to:l=n.length-1,by:u=1}=i;for(let f=c;f<=l;f+=u)Vo(n,[f].concat(e),t);return}else if(e.length>1){Vo(n[i],e,[i].concat(t));return}r=n[i],t=[i].concat(t)}let s=e[0];typeof s=="function"&&(s=s(r,t),s===r)||i===void 0&&s==null||(s=Zs(s),i===void 0||$s(r)&&$s(s)&&!Array.isArray(s)?p_(r,s):Js(n,i,s))}function Cp(...[n,e]){const t=Zs(n||{}),i=Array.isArray(t),r=f_(t);function s(...o){d1(()=>{i&&o.length===1?e2(t,o[0]):Vo(t,o)})}return[r,s]}const Fc=new WeakMap,m_={get(n,e){if(e===Nc)return n;const t=n[e];let i;return $s(t)?Fc.get(t)||(Fc.set(t,i=new Proxy(t,m_)),i):t},set(n,e,t){return Js(n,e,Zs(t)),!0},deleteProperty(n,e){return Js(n,e,void 0,!0),!0}};function Pp(n){return e=>{if($s(e)){let t;(t=Fc.get(e))||Fc.set(e,t=new Proxy(e,m_)),n(t)}return e}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yl="172",fs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},t2=0,Lp=1,n2=2,g_=1,i2=2,ki=3,Ti=0,xn=1,yi=2,Mr=0,Fs=1,Ip=2,Dp=3,Np=4,r2=5,Wr=100,s2=101,o2=102,a2=103,c2=104,l2=200,u2=201,h2=202,f2=203,qu=204,Ku=205,d2=206,p2=207,m2=208,g2=209,_2=210,v2=211,x2=212,y2=213,M2=214,$u=0,Zu=1,Ju=2,Qs=3,Qu=4,eh=5,th=6,nh=7,kf=0,E2=1,S2=2,Er=0,T2=1,b2=2,A2=3,w2=4,R2=5,C2=6,P2=7,Up="attached",L2="detached",__=300,eo=301,to=302,ih=303,rh=304,Ml=306,no=1e3,gr=1001,Oc=1002,yn=1003,v_=1004,Go=1005,jn=1006,cc=1007,Xi=1008,Qi=1009,x_=1010,y_=1011,sa=1012,zf=1013,rs=1014,si=1015,ga=1016,Hf=1017,Vf=1018,io=1020,M_=35902,E_=1021,S_=1022,Yn=1023,T_=1024,b_=1025,Os=1026,ro=1027,Gf=1028,Wf=1029,A_=1030,Xf=1031,jf=1033,lc=33776,uc=33777,hc=33778,fc=33779,sh=35840,oh=35841,ah=35842,ch=35843,lh=36196,uh=37492,hh=37496,fh=37808,dh=37809,ph=37810,mh=37811,gh=37812,_h=37813,vh=37814,xh=37815,yh=37816,Mh=37817,Eh=37818,Sh=37819,Th=37820,bh=37821,dc=36492,Ah=36494,wh=36495,w_=36283,Rh=36284,Ch=36285,Ph=36286,oa=2300,aa=2301,Gl=2302,Fp=2400,Op=2401,Bp=2402,I2=2500,D2=0,R_=1,Lh=2,N2=3200,U2=3201,Yf=0,F2=1,mr="",Gn="srgb",so="srgb-linear",Bc="linear",gt="srgb",ps=7680,kp=519,O2=512,B2=513,k2=514,C_=515,z2=516,H2=517,V2=518,G2=519,Ih=35044,zp="300 es",ji=2e3,kc=2001;let Mo=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}};const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hp=1234567;const Ko=Math.PI/180,oo=180/Math.PI;function oi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function qf(n,e){return(n%e+e)%e}function W2(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function X2(n,e,t){return n!==e?(t-n)/(e-n):0}function $o(n,e,t){return(1-t)*n+t*e}function j2(n,e,t,i){return $o(n,e,1-Math.exp(-t*i))}function Y2(n,e=1){return e-Math.abs(qf(n,e*2)-e)}function q2(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function K2(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $2(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Z2(n,e){return n+Math.random()*(e-n)}function J2(n){return n*(.5-Math.random())}function Q2(n){n!==void 0&&(Hp=n);let e=Hp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ex(n){return n*Ko}function tx(n){return n*oo}function nx(n){return(n&n-1)===0&&n!==0}function ix(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function rx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sx(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*f,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ox={DEG2RAD:Ko,RAD2DEG:oo,generateUUID:oi,clamp:Xe,euclideanModulo:qf,mapLinear:W2,inverseLerp:X2,lerp:$o,damp:j2,pingpong:Y2,smoothstep:q2,smootherstep:K2,randInt:$2,randFloat:Z2,randFloatSpread:J2,seededRandom:Q2,degToRad:ex,radToDeg:tx,isPowerOfTwo:nx,ceilPowerOfTwo:ix,floorPowerOfTwo:rx,setQuaternionFromProperEuler:sx,normalize:ht,denormalize:ii};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,o,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],T=r[1],S=r[4],M=r[7],L=r[2],w=r[5],P=r[8];return s[0]=o*_+a*T+c*L,s[3]=o*m+a*S+c*w,s[6]=o*d+a*M+c*P,s[1]=l*_+u*T+f*L,s[4]=l*m+u*S+f*w,s[7]=l*d+u*M+f*P,s[2]=h*_+p*T+g*L,s[5]=h*m+p*S+g*w,s[8]=h*d+p*M+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*s,p=l*s-o*c,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wl.makeScale(e,t)),this}rotate(e){return this.premultiply(Wl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wl=new He;function P_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ax(){const n=ca("canvas");return n.style.display="block",n}const Vp={};function Cs(n){n in Vp||(Vp[n]=!0,console.warn(n))}function cx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function lx(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ux(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Gp=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wp=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hx(){const n={enabled:!0,workingColorSpace:so,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(r.r=Bs(r.r),r.g=Bs(r.g),r.b=Bs(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mr?Bc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[so]:{primaries:e,whitePoint:i,transfer:Bc,toXYZ:Gp,fromXYZ:Wp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Gp,fromXYZ:Wp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),n}const st=hx();function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ms;class fx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ms===void 0&&(ms=ca("canvas")),ms.width=e.width,ms.height=e.height;const i=ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ca("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ki(t[i]/255)*255):t[i]=Ki(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dx=0;class L_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xl(r[o].image)):s.push(Xl(r[o]))}else s=Xl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Xl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let px=0;class Zt extends Mo{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=gr,r=gr,s=jn,o=Xi,a=Yn,c=Qi,l=Zt.DEFAULT_ANISOTROPY,u=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=oi(),this.name="",this.source=new L_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==__)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case no:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case Oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case no:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case Oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=__;Zt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,M=(p+1)/2,L=(d+1)/2,w=(u+h)/4,P=(f+_)/4,D=(g+m)/4;return S>M&&S>L?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=P/i):M>L?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=D/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=P/s,r=D/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(h-u)/T,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mx extends Mo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new L_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends mx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class I_ extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gx extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==h||l!==p||u!==g){let m=1-a;const d=c*h+l*p+u*g+f*_,T=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const L=Math.sqrt(S),w=Math.atan2(L,d*T);m=Math.sin(m*w)/L,a=Math.sin(a*w)/L}const M=a*T;if(c=c*m+h*M,l=l*m+p*M,u=u*m+g*M,f=f*m+_*M,m===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=L,l*=L,u*=L,f*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*p-l*h,e[t+1]=c*g+u*h+l*f-a*p,e[t+2]=l*g+u*p+a*h-c*f,e[t+3]=u*g-a*f-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),h=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"YZX":this._x=h*u*f+l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f-h*p*g;break;case"XZY":this._x=h*u*f-l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jl.copy(this).projectOnVector(e),this.sub(jl)}reflect(e){return this.sub(jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jl=new N,Xp=new bi;class nr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wa.copy(i.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),Ra.subVectors(this.max,Lo),gs.subVectors(e.a,Lo),_s.subVectors(e.b,Lo),vs.subVectors(e.c,Lo),rr.subVectors(_s,gs),sr.subVectors(vs,_s),Ur.subVectors(gs,vs);let t=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Ur.z,Ur.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Ur.z,0,-Ur.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Ur.y,Ur.x,0];return!Yl(t,gs,_s,vs,Ra)||(t=[1,0,0,0,1,0,0,0,1],!Yl(t,gs,_s,vs,Ra))?!1:(Ca.crossVectors(rr,sr),t=[Ca.x,Ca.y,Ca.z],Yl(t,gs,_s,vs,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new N,new N,new N,new N,new N,new N,new N,new N],ei=new N,wa=new nr,gs=new N,_s=new N,vs=new N,rr=new N,sr=new N,Ur=new N,Lo=new N,Ra=new N,Ca=new N,Fr=new N;function Yl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fr.fromArray(n,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),c=e.dot(Fr),l=t.dot(Fr),u=i.dot(Fr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const _x=new nr,Io=new N,ql=new N;class Ri{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_x.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const t=Io.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Io,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(ql)),this.expandByPoint(Io.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new N,Kl=new N,Pa=new N,or=new N,$l=new N,La=new N,Zl=new N;class _a{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Kl.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),or.copy(this.origin).sub(Kl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Pa),a=or.dot(this.direction),c=-or.dot(Pa),l=or.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*c-a,h=o*a-c,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Kl).addScaledVector(Pa,h),p}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,r,s){$l.subVectors(t,e),La.subVectors(i,e),Zl.crossVectors($l,La);let o=this.direction.dot(Zl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;or.subVectors(this.origin,e);const c=a*this.direction.dot(La.crossVectors(or,La));if(c<0)return null;const l=a*this.direction.dot($l.cross(or));if(l<0||c+l>o)return null;const u=-a*or.dot(Zl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,i,r,s,o,a,c,l,u,f,h,p,g,_,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,f,h,p,g,_,m)}set(e,t,i,r,s,o,a,c,l,u,f,h,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,p=c*f,g=l*u,_=l*f;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,p=c*f,g=l*u,_=l*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+_,t[1]=c*f,t[5]=_*l+h,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+_,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vx,e,xx)}lookAt(e,t,i){const r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),ar.crossVectors(i,Pn),ar.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),ar.crossVectors(i,Pn)),ar.normalize(),Ia.crossVectors(Pn,ar),r[0]=ar.x,r[4]=Ia.x,r[8]=Pn.x,r[1]=ar.y,r[5]=Ia.y,r[9]=Pn.y,r[2]=ar.z,r[6]=Ia.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],T=i[3],S=i[7],M=i[11],L=i[15],w=r[0],P=r[4],D=r[8],E=r[12],v=r[1],I=r[5],K=r[9],z=r[13],X=r[2],J=r[6],W=r[10],ne=r[14],V=r[3],re=r[7],fe=r[11],Se=r[15];return s[0]=o*w+a*v+c*X+l*V,s[4]=o*P+a*I+c*J+l*re,s[8]=o*D+a*K+c*W+l*fe,s[12]=o*E+a*z+c*ne+l*Se,s[1]=u*w+f*v+h*X+p*V,s[5]=u*P+f*I+h*J+p*re,s[9]=u*D+f*K+h*W+p*fe,s[13]=u*E+f*z+h*ne+p*Se,s[2]=g*w+_*v+m*X+d*V,s[6]=g*P+_*I+m*J+d*re,s[10]=g*D+_*K+m*W+d*fe,s[14]=g*E+_*z+m*ne+d*Se,s[3]=T*w+S*v+M*X+L*V,s[7]=T*P+S*I+M*J+L*re,s[11]=T*D+S*K+M*W+L*fe,s[15]=T*E+S*z+M*ne+L*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*c*f-r*l*f-s*a*h+i*l*h+r*a*p-i*c*p)+_*(+t*c*p-t*l*h+s*o*h-r*o*p+r*l*u-s*c*u)+m*(+t*l*f-t*a*p-s*o*f+i*o*p+s*a*u-i*l*u)+d*(-r*a*u-t*c*f+t*a*h+r*o*f-i*o*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],T=f*m*l-_*h*l+_*c*p-a*m*p-f*c*d+a*h*d,S=g*h*l-u*m*l-g*c*p+o*m*p+u*c*d-o*h*d,M=u*_*l-g*f*l+g*a*p-o*_*p-u*a*d+o*f*d,L=g*f*c-u*_*c-g*a*h+o*_*h+u*a*m-o*f*m,w=t*T+i*S+r*M+s*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return e[0]=T*P,e[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*P,e[2]=(a*m*s-_*c*s+_*r*l-i*m*l-a*r*d+i*c*d)*P,e[3]=(f*c*s-a*h*s-f*r*l+i*h*l+a*r*p-i*c*p)*P,e[4]=S*P,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*d+t*h*d)*P,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*d-t*c*d)*P,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*p+t*c*p)*P,e[8]=M*P,e[9]=(g*f*s-u*_*s-g*i*p+t*_*p+u*i*d-t*f*d)*P,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*d+t*a*d)*P,e[11]=(u*a*s-o*f*s-u*i*l+t*f*l+o*i*p-t*a*p)*P,e[12]=L*P,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*P,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*m-t*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*c-t*f*c-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,h=s*l,p=s*u,g=s*f,_=o*u,m=o*f,d=a*f,T=c*l,S=c*u,M=c*f,L=i.x,w=i.y,P=i.z;return r[0]=(1-(_+d))*L,r[1]=(p+M)*L,r[2]=(g-S)*L,r[3]=0,r[4]=(p-M)*w,r[5]=(1-(h+d))*w,r[6]=(m+T)*w,r[7]=0,r[8]=(g+S)*P,r[9]=(m-T)*P,r[10]=(1-(h+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=xs.set(r[0],r[1],r[2]).length();const o=xs.set(r[4],r[5],r[6]).length(),a=xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const l=1/s,u=1/o,f=1/a;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,t.setFromRotationMatrix(ti),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ji){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===ji)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===kc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ji){const c=this.elements,l=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*l,p=(i+r)*u;let g,_;if(a===ji)g=(o+s)*f,_=-2*f;else if(a===kc)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const xs=new N,ti=new ze,vx=new N(0,0,0),xx=new N(1,1,1),ar=new N,Ia=new N,Pn=new N,jp=new ze,Yp=new bi;class ui{constructor(e=0,t=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yp.setFromEuler(this),this.setFromQuaternion(Yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class D_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yx=0;const qp=new N,ys=new bi,Ui=new ze,Da=new N,Do=new N,Mx=new N,Ex=new bi,Kp=new N(1,0,0),$p=new N(0,1,0),Zp=new N(0,0,1),Jp={type:"added"},Sx={type:"removed"},Ms={type:"childadded",child:null},Jl={type:"childremoved",child:null};class Lt extends Mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new N,t=new ui,i=new bi,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ze},normalMatrix:{value:new He}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new D_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Kp,e)}rotateY(e){return this.rotateOnAxis($p,e)}rotateZ(e){return this.rotateOnAxis(Zp,e)}translateOnAxis(e,t){return qp.copy(e).applyQuaternion(this.quaternion),this.position.add(qp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kp,e)}translateY(e){return this.translateOnAxis($p,e)}translateZ(e){return this.translateOnAxis(Zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Da.copy(e):Da.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Do,Da,this.up):Ui.lookAt(Da,Do,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(Ui),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jp),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sx),Jl.child=e,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jp),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,Mx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,Ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new N(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new N,Fi=new N,Ql=new N,Oi=new N,Es=new N,Ss=new N,Qp=new N,eu=new N,tu=new N,nu=new N,iu=new ct,ru=new ct,su=new ct;class ri{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ni.subVectors(e,t),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ni.subVectors(r,t),Fi.subVectors(i,t),Ql.subVectors(e,t);const o=ni.dot(ni),a=ni.dot(Fi),c=ni.dot(Ql),l=Fi.dot(Fi),u=Fi.dot(Ql),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Oi.x),c.addScaledVector(o,Oi.y),c.addScaledVector(a,Oi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return iu.setScalar(0),ru.setScalar(0),su.setScalar(0),iu.fromBufferAttribute(e,t),ru.fromBufferAttribute(e,i),su.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(iu,s.x),o.addScaledVector(ru,s.y),o.addScaledVector(su,s.z),o}static isFrontFacing(e,t,i,r){return ni.subVectors(i,t),Fi.subVectors(e,t),ni.cross(Fi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ni.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Es.subVectors(r,i),Ss.subVectors(s,i),eu.subVectors(e,i);const c=Es.dot(eu),l=Ss.dot(eu);if(c<=0&&l<=0)return t.copy(i);tu.subVectors(e,r);const u=Es.dot(tu),f=Ss.dot(tu);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Es,o);nu.subVectors(e,s);const p=Es.dot(nu),g=Ss.dot(nu);if(g>=0&&p<=g)return t.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ss,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Qp.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(Qp,a);const d=1/(m+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(Es,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const N_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Na={h:0,s:0,l:0};function ou(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=qf(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ou(o,s,e+1/3),this.g=ou(o,s,e),this.b=ou(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const i=N_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return st.fromWorkingColorSpace(tn.copy(this),e),Math.round(Xe(tn.r*255,0,255))*65536+Math.round(Xe(tn.g*255,0,255))*256+Math.round(Xe(tn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(tn.copy(this),t);const i=tn.r,r=tn.g,s=tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Gn){st.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,i=tn.g,r=tn.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(Na);const i=$o(cr.h,Na.h,t),r=$o(cr.s,Na.s,t),s=$o(cr.l,Na.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ue;Ue.NAMES=N_;let Tx=0;class ai extends Mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Fs,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qu,this.blendDst=Ku,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qu&&(i.blendSrc=this.blendSrc),this.blendDst!==Ku&&(i.blendDst=this.blendDst),this.blendEquation!==Wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qr extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new N,Ua=new Oe;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ih,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ih&&(e.usage=this.usage),e}}class U_ extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class F_ extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $i extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let bx=0;const Hn=new ze,au=new Lt,Ts=new N,Ln=new nr,No=new nr,qt=new N;class Ci extends Mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P_(e)?F_:U_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return au.lookAt(e),au.updateMatrix(),this.applyMatrix4(au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $i(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];No.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Ln.min,No.min),Ln.expandByPoint(qt),qt.addVectors(Ln.max,No.max),Ln.expandByPoint(qt)):(Ln.expandByPoint(No.min),Ln.expandByPoint(No.max))}Ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)qt.fromBufferAttribute(a,l),c&&(Ts.fromBufferAttribute(e,l),qt.add(Ts)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new N,c[D]=new N;const l=new N,u=new N,f=new N,h=new Oe,p=new Oe,g=new Oe,_=new N,m=new N;function d(D,E,v){l.fromBufferAttribute(i,D),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,v),h.fromBufferAttribute(s,D),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,v),u.sub(l),f.sub(l),p.sub(h),g.sub(h);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[D].add(_),a[E].add(_),a[v].add(_),c[D].add(m),c[E].add(m),c[v].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,E=T.length;D<E;++D){const v=T[D],I=v.start,K=v.count;for(let z=I,X=I+K;z<X;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new N,M=new N,L=new N,w=new N;function P(D){L.fromBufferAttribute(r,D),w.copy(L);const E=a[D];S.copy(E),S.sub(L.multiplyScalar(L.dot(E))).normalize(),M.crossVectors(w,E);const I=M.dot(c[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,I)}for(let D=0,E=T.length;D<E;++D){const v=T[D],I=v.start,K=v.count;for(let z=I,X=I+K;z<X;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,f=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let d=0;d<u;d++)h[g++]=l[p++]}return new hn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ci,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const em=new ze,Or=new _a,Fa=new Ri,tm=new N,Oa=new N,Ba=new N,ka=new N,cu=new N,za=new N,nm=new N,Ha=new N;class vn extends Lt{constructor(e=new Ci,t=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){za.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(cu.fromBufferAttribute(f,e),o?za.addScaledVector(cu,u):za.addScaledVector(cu.sub(t),u))}t.add(za)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(Fa.containsPoint(Or.origin)===!1&&(Or.intersectSphere(Fa,tm)===null||Or.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(s).invert(),Or.copy(e.ray).applyMatrix4(em),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Or)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,L=S;M<L;M+=3){const w=a.getX(M),P=a.getX(M+1),D=a.getX(M+2);r=Va(this,d,e,i,l,u,f,w,P,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);r=Va(this,o,e,i,l,u,f,T,S,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,L=S;M<L;M+=3){const w=M,P=M+1,D=M+2;r=Va(this,d,e,i,l,u,f,w,P,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=m,S=m+1,M=m+2;r=Va(this,o,e,i,l,u,f,T,S,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ax(n,e,t,i,r,s,o,a){let c;if(e.side===xn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ti,a),c===null)return null;Ha.copy(a),Ha.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ha);return l<t.near||l>t.far?null:{distance:l,point:Ha.clone(),object:n}}function Va(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Oa),n.getVertexPosition(c,Ba),n.getVertexPosition(l,ka);const u=Ax(n,e,t,i,Oa,Ba,ka,nm);if(u){const f=new N;ri.getBarycoord(nm,Oa,Ba,ka,f),r&&(u.uv=ri.getInterpolatedAttribute(r,a,c,l,f,new Oe)),s&&(u.uv1=ri.getInterpolatedAttribute(s,a,c,l,f,new Oe)),o&&(u.normal=ri.getInterpolatedAttribute(o,a,c,l,f,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new N,materialIndex:0};ri.getNormal(Oa,Ba,ka,h.normal),u.face=h,u.barycoord=f}return u}class va extends Ci{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new $i(l,3)),this.setAttribute("normal",new $i(u,3)),this.setAttribute("uv",new $i(f,2));function g(_,m,d,T,S,M,L,w,P,D,E){const v=M/P,I=L/D,K=M/2,z=L/2,X=w/2,J=P+1,W=D+1;let ne=0,V=0;const re=new N;for(let fe=0;fe<W;fe++){const Se=fe*I-z;for(let Ve=0;Ve<J;Ve++){const at=Ve*v-K;re[_]=at*T,re[m]=Se*S,re[d]=X,l.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[d]=w>0?1:-1,u.push(re.x,re.y,re.z),f.push(Ve/P),f.push(1-fe/D),ne+=1}}for(let fe=0;fe<D;fe++)for(let Se=0;Se<P;Se++){const Ve=h+Se+J*fe,at=h+Se+J*(fe+1),Y=h+(Se+1)+J*(fe+1),ie=h+(Se+1)+J*fe;c.push(Ve,at,ie),c.push(at,Y,ie),V+=6}a.addGroup(p,V,E),p+=V,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function cn(n){const e={};for(let t=0;t<n.length;t++){const i=ao(n[t]);for(const r in i)e[r]=i[r]}return e}function wx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function O_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Rx={clone:ao,merge:cn};var Cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cx,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=wx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class B_ extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new N,im=new Oe,rm=new Oe;class $t extends B_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,im,rm),t.subVectors(rm,im)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ko*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bs=-90,As=1;class Lx extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(bs,As,e,t);r.layers=this.layers,this.add(r);const s=new $t(bs,As,e,t);s.layers=this.layers,this.add(s);const o=new $t(bs,As,e,t);o.layers=this.layers,this.add(o);const a=new $t(bs,As,e,t);a.layers=this.layers,this.add(a);const c=new $t(bs,As,e,t);c.layers=this.layers,this.add(c);const l=new $t(bs,As,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===ji)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===kc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class k_ extends Zt{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:eo,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ix extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new k_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new va(5,5,5),s=new Cr({name:"CubemapFromEquirect",uniforms:ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Mr});s.uniforms.tEquirect.value=t;const o=new vn(r,s),a=t.minFilter;return t.minFilter===Xi&&(t.minFilter=jn),new Lx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Dx extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Nx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ih,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new N;class Kf{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const sm=new N,om=new ct,am=new ct,Ux=new N,cm=new ze,Ga=new N,lu=new Ri,lm=new ze,uu=new _a;class Fx extends vn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Up,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ga),this.boundingBox.expandByPoint(Ga)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ri),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ga),this.boundingSphere.expandByPoint(Ga)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lu.copy(this.boundingSphere),lu.applyMatrix4(r),e.ray.intersectsSphere(lu)!==!1&&(lm.copy(r).invert(),uu.copy(e.ray).applyMatrix4(lm),!(this.boundingBox!==null&&uu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,uu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Up?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===L2?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;om.fromBufferAttribute(r.attributes.skinIndex,e),am.fromBufferAttribute(r.attributes.skinWeight,e),sm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=am.getComponent(s);if(o!==0){const a=om.getComponent(s);cm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Ux.copy(sm).applyMatrix4(cm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class z_ extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class H_ extends Zt{constructor(e=null,t=1,i=1,r,s,o,a,c,l=yn,u=yn,f,h){super(null,o,a,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const um=new ze,Ox=new ze;class $f{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ze;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Ox;um.multiplyMatrices(a,t[s]),um.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new $f(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new H_(t,e,e,Yn,si);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new z_),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Dh extends hn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new ze,hm=new ze,Wa=[],fm=new nr,Bx=new ze,Uo=new vn,Fo=new Ri;class kx extends vn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Bx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ws),fm.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(fm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ws),Fo.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(Fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Uo.geometry=this.geometry,Uo.material=this.material,Uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fo.copy(this.boundingSphere),Fo.applyMatrix4(i),e.ray.intersectsSphere(Fo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ws),hm.multiplyMatrices(i,ws),Uo.matrixWorld=hm,Uo.raycast(e,Wa);for(let o=0,a=Wa.length;o<a;o++){const c=Wa[o];c.instanceId=s,c.object=this,t.push(c)}Wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Dh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new H_(new Float32Array(r*this.count),r,this.count,Gf,si));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const hu=new N,zx=new N,Hx=new He;class hr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=hu.subVectors(i,t).cross(zx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(hu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hx.getNormalMatrix(e),r=this.coplanarPoint(hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Ri,Xa=new N;class Zf{constructor(e=new hr,t=new hr,i=new hr,r=new hr,s=new hr,o=new hr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ji){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],T=r[13],S=r[14],M=r[15];if(i[0].setComponents(c-s,h-l,m-p,M-d).normalize(),i[1].setComponents(c+s,h+l,m+p,M+d).normalize(),i[2].setComponents(c+o,h+u,m+g,M+T).normalize(),i[3].setComponents(c-o,h-u,m-g,M-T).normalize(),i[4].setComponents(c-a,h-f,m-_,M-S).normalize(),t===ji)i[5].setComponents(c+a,h+f,m+_,M+S).normalize();else if(t===kc)i[5].setComponents(a,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xa.x=r.normal.x>0?e.max.x:e.min.x,Xa.y=r.normal.y>0?e.max.y:e.min.y,Xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class V_ extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zc=new N,Hc=new N,dm=new ze,Oo=new _a,ja=new Ri,fu=new N,pm=new N;class Jf extends Lt{constructor(e=new Ci,t=new V_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)zc.fromBufferAttribute(t,r-1),Hc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=zc.distanceTo(Hc);e.setAttribute("lineDistance",new $i(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(r),ja.radius+=s,e.ray.intersectsSphere(ja)===!1)return;dm.copy(r).invert(),Oo.copy(e.ray).applyMatrix4(dm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const d=u.getX(_),T=u.getX(_+1),S=Ya(this,e,Oo,c,d,T);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=Ya(this,e,Oo,c,_,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const d=Ya(this,e,Oo,c,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=Ya(this,e,Oo,c,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ya(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(zc.fromBufferAttribute(o,r),Hc.fromBufferAttribute(o,s),t.distanceSqToSegment(zc,Hc,fu,pm)>i)return;fu.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(fu);if(!(c<e.near||c>e.far))return{distance:c,point:pm.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const mm=new N,gm=new N;class Vx extends Jf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)mm.fromBufferAttribute(t,r),gm.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+mm.distanceTo(gm);e.setAttribute("lineDistance",new $i(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gx extends Jf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class G_ extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _m=new ze,Nh=new _a,qa=new Ri,Ka=new N;class Wx extends Lt{constructor(e=new Ci,t=new G_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(r),qa.radius+=s,e.ray.intersectsSphere(qa)===!1)return;_m.copy(r).invert(),Nh.copy(e.ray).applyMatrix4(_m);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const h=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=h,_=p;g<_;g++){const m=l.getX(g);Ka.fromBufferAttribute(f,m),vm(Ka,m,c,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,_=p;g<_;g++)Ka.fromBufferAttribute(f,g),vm(Ka,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vm(n,e,t,i,r,s,o){const a=Nh.distanceSqToPoint(n);if(a<t){const c=new N;Nh.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Kr extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class W_ extends Zt{constructor(e,t,i,r,s,o,a,c,l,u=Os){if(u!==Os&&u!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Os&&(i=rs),i===void 0&&u===ro&&(i=io),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yn,this.minFilter=c!==void 0?c:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class El extends Ci{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,h=t/c,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const T=d*h-o;for(let S=0;S<l;S++){const M=S*f-s;g.push(M,-T,0),_.push(0,0,1),m.push(S/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let T=0;T<a;T++){const S=T+l*d,M=T+l*(d+1),L=T+1+l*(d+1),w=T+1+l*d;p.push(S,M,w),p.push(M,L,w)}this.setIndex(p),this.setAttribute("position",new $i(g,3)),this.setAttribute("normal",new $i(_,3)),this.setAttribute("uv",new $i(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qf extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yf,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pi extends Qf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xx extends ai{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ue(16777215),this.specular=new Ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yf,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jx extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yx extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function $a(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function qx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Kx(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function xm(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r}function X_(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class xa{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $x extends xa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fp,endingEnd:Fp}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Op:s=e,a=2*t-i;break;case Bp:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Op:o=e,c=2*i-t;break;case Bp:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}const l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,d=-h*m+2*h*_-h*g,T=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,S=(-1-p)*m+(1.5+p)*_+.5*g,M=p*m-p*_;for(let L=0;L!==a;++L)s[L]=d*o[u+L]+T*o[l+L]+S*o[c+L]+M*o[f+L];return s}}class Zx extends xa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*f+o[c+h]*u;return s}}class Jx extends xa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Li{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$a(t,this.TimeBufferType),this.values=$a(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$a(e.times,Array),values:$a(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Jx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $x(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case oa:t=this.InterpolantFactoryMethodDiscrete;break;case aa:t=this.InterpolantFactoryMethodLinear;break;case Gl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oa;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return Gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&qx(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Gl,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{const f=a*i,h=f-i,p=f+i;for(let g=0;g!==i;++g){const _=t[f+g];if(_!==t[h+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Li.prototype.TimeBufferType=Float32Array;Li.prototype.ValueBufferType=Float32Array;Li.prototype.DefaultInterpolation=aa;class Eo extends Li{constructor(e,t,i){super(e,t,i)}}Eo.prototype.ValueTypeName="bool";Eo.prototype.ValueBufferType=Array;Eo.prototype.DefaultInterpolation=oa;Eo.prototype.InterpolantFactoryMethodLinear=void 0;Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class j_ extends Li{}j_.prototype.ValueTypeName="color";class co extends Li{}co.prototype.ValueTypeName="number";class Qx extends xa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t);let l=e*a;for(let u=l+a;l!==u;l+=4)bi.slerpFlat(s,0,o,l-a,o,l,c);return s}}class lo extends Li{InterpolantFactoryMethodLinear(e){return new Qx(this.times,this.values,this.getValueSize(),e)}}lo.prototype.ValueTypeName="quaternion";lo.prototype.InterpolantFactoryMethodSmooth=void 0;class So extends Li{constructor(e,t,i){super(e,t,i)}}So.prototype.ValueTypeName="string";So.prototype.ValueBufferType=Array;So.prototype.DefaultInterpolation=oa;So.prototype.InterpolantFactoryMethodLinear=void 0;So.prototype.InterpolantFactoryMethodSmooth=void 0;class uo extends Li{}uo.prototype.ValueTypeName="vector";class ey{constructor(e="",t=-1,i=[],r=I2){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=oi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(ny(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Li.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=Kx(c);c=xm(c,1,u),l=xm(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new co(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,p,g,_){if(p.length!==0){const m=[],d=[];X_(p,m,d,g),m.length!==0&&_.push(new f(h,m,d))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let f=0;f<l.length;f++){const h=l[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)p[h[g].morphTargets[_]]=-1;for(const _ in p){const m=[],d=[];for(let T=0;T!==h[g].morphTargets.length;++T){const S=h[g];m.push(S.time),d.push(S.morphTarget===_?1:0)}r.push(new co(".morphTargetInfluence["+_+"]",m,d))}c=p.length*o}else{const p=".bones["+t[f].name+"]";i(uo,p+".position",h,"pos",r),i(lo,p+".quaternion",h,"rot",r),i(uo,p+".scale",h,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ty(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return co;case"vector":case"vector2":case"vector3":case"vector4":return uo;case"color":return j_;case"quaternion":return lo;case"bool":case"boolean":return Eo;case"string":return So}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function ny(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ty(n.type);if(n.times===void 0){const t=[],i=[];X_(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const _r={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class iy{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const ry=new iy;class To{constructor(e){this.manager=e!==void 0?e:ry,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}To.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi={};class sy extends Error{constructor(e,t){super(e),this.response=t}}class Y_ extends To{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=_r.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:i,onError:r});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Bi[e],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){T();function T(){f.read().then(({done:S,value:M})=>{if(S)d.close();else{_+=M.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let w=0,P=u.length;w<P;w++){const D=u[w];D.onProgress&&D.onProgress(L)}d.enqueue(M),T()}},S=>{d.error(S)})}}});return new Response(m)}else throw new sy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{_r.add(e,l);const u=Bi[e];delete Bi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=Bi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Bi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class oy extends To{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=_r.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ca("img");function c(){u(),_r.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ay extends To{constructor(e){super(e)}load(e,t,i,r){const s=new Zt,o=new oy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Sl extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const du=new ze,ym=new N,Mm=new N;class ed{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zf,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ym.setFromMatrixPosition(e.matrixWorld),t.position.copy(ym),Mm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mm),t.updateMatrixWorld(),du.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cy extends ed{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=oo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class q_ extends Sl{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new cy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Em=new ze,Bo=new N,pu=new N;class ly extends ed{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Bo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Bo),pu.copy(i.position),pu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(pu),i.updateMatrixWorld(),r.makeTranslation(-Bo.x,-Bo.y,-Bo.z),Em.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Em)}}class uy extends Sl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ly}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ks extends B_{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hy extends ed{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fy extends Sl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new hy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dy extends Sl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class py extends To{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=_r.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return _r.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),_r.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});_r.add(e,c),s.manager.itemStart(e)}}class my extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const td="\\[\\]\\.:\\/",gy=new RegExp("["+td+"]","g"),nd="[^"+td+"]",_y="[^"+td.replace("\\.","")+"]",vy=/((?:WC+[\/:])*)/.source.replace("WC",nd),xy=/(WCOD+)?/.source.replace("WCOD",_y),yy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nd),My=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nd),Ey=new RegExp("^"+vy+xy+yy+My+"$"),Sy=["material","materials","bones","map"];class Ty{constructor(e,t,i){const r=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ft{constructor(e,t,i){this.path=t,this.parsedPath=i||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,i):new ft(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gy,"")}static parseTrackName(e){const t=Ey.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);Sy.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[r];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=Ty;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Sm{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function Tm(n,e,t,i){const r=by(i);switch(t){case E_:return n*e;case T_:return n*e;case b_:return n*e*2;case Gf:return n*e/r.components*r.byteLength;case Wf:return n*e/r.components*r.byteLength;case A_:return n*e*2/r.components*r.byteLength;case Xf:return n*e*2/r.components*r.byteLength;case S_:return n*e*3/r.components*r.byteLength;case Yn:return n*e*4/r.components*r.byteLength;case jf:return n*e*4/r.components*r.byteLength;case lc:case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hc:case fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oh:case ch:return Math.max(n,16)*Math.max(e,8)/4;case sh:case ah:return Math.max(n,8)*Math.max(e,8)/2;case lh:case uh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ph:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case mh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case gh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _h:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Th:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case dc:case Ah:case wh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case w_:case Rh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ch:case Ph:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function by(n){switch(n){case Qi:case x_:return{byteLength:1,components:1};case sa:case y_:case ga:return{byteLength:2,components:1};case Hf:case Vf:return{byteLength:2,components:4};case rs:case zf:case si:return{byteLength:4,components:1};case M_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function K_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ay(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var wy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ry=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ny=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,By=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ky=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$y=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iM="gl_FragColor = linearToOutputTexel( gl_FragColor );",rM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$M=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ME=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:wy,alphahash_pars_fragment:Ry,alphamap_fragment:Cy,alphamap_pars_fragment:Py,alphatest_fragment:Ly,alphatest_pars_fragment:Iy,aomap_fragment:Dy,aomap_pars_fragment:Ny,batching_pars_vertex:Uy,batching_vertex:Fy,begin_vertex:Oy,beginnormal_vertex:By,bsdfs:ky,iridescence_fragment:zy,bumpmap_pars_fragment:Hy,clipping_planes_fragment:Vy,clipping_planes_pars_fragment:Gy,clipping_planes_pars_vertex:Wy,clipping_planes_vertex:Xy,color_fragment:jy,color_pars_fragment:Yy,color_pars_vertex:qy,color_vertex:Ky,common:$y,cube_uv_reflection_fragment:Zy,defaultnormal_vertex:Jy,displacementmap_pars_vertex:Qy,displacementmap_vertex:eM,emissivemap_fragment:tM,emissivemap_pars_fragment:nM,colorspace_fragment:iM,colorspace_pars_fragment:rM,envmap_fragment:sM,envmap_common_pars_fragment:oM,envmap_pars_fragment:aM,envmap_pars_vertex:cM,envmap_physical_pars_fragment:xM,envmap_vertex:lM,fog_vertex:uM,fog_pars_vertex:hM,fog_fragment:fM,fog_pars_fragment:dM,gradientmap_pars_fragment:pM,lightmap_pars_fragment:mM,lights_lambert_fragment:gM,lights_lambert_pars_fragment:_M,lights_pars_begin:vM,lights_toon_fragment:yM,lights_toon_pars_fragment:MM,lights_phong_fragment:EM,lights_phong_pars_fragment:SM,lights_physical_fragment:TM,lights_physical_pars_fragment:bM,lights_fragment_begin:AM,lights_fragment_maps:wM,lights_fragment_end:RM,logdepthbuf_fragment:CM,logdepthbuf_pars_fragment:PM,logdepthbuf_pars_vertex:LM,logdepthbuf_vertex:IM,map_fragment:DM,map_pars_fragment:NM,map_particle_fragment:UM,map_particle_pars_fragment:FM,metalnessmap_fragment:OM,metalnessmap_pars_fragment:BM,morphinstance_vertex:kM,morphcolor_vertex:zM,morphnormal_vertex:HM,morphtarget_pars_vertex:VM,morphtarget_vertex:GM,normal_fragment_begin:WM,normal_fragment_maps:XM,normal_pars_fragment:jM,normal_pars_vertex:YM,normal_vertex:qM,normalmap_pars_fragment:KM,clearcoat_normal_fragment_begin:$M,clearcoat_normal_fragment_maps:ZM,clearcoat_pars_fragment:JM,iridescence_pars_fragment:QM,opaque_fragment:eE,packing:tE,premultiplied_alpha_fragment:nE,project_vertex:iE,dithering_fragment:rE,dithering_pars_fragment:sE,roughnessmap_fragment:oE,roughnessmap_pars_fragment:aE,shadowmap_pars_fragment:cE,shadowmap_pars_vertex:lE,shadowmap_vertex:uE,shadowmask_pars_fragment:hE,skinbase_vertex:fE,skinning_pars_vertex:dE,skinning_vertex:pE,skinnormal_vertex:mE,specularmap_fragment:gE,specularmap_pars_fragment:_E,tonemapping_fragment:vE,tonemapping_pars_fragment:xE,transmission_fragment:yE,transmission_pars_fragment:ME,uv_pars_fragment:EE,uv_pars_vertex:SE,uv_vertex:TE,worldpos_vertex:bE,background_vert:AE,background_frag:wE,backgroundCube_vert:RE,backgroundCube_frag:CE,cube_vert:PE,cube_frag:LE,depth_vert:IE,depth_frag:DE,distanceRGBA_vert:NE,distanceRGBA_frag:UE,equirect_vert:FE,equirect_frag:OE,linedashed_vert:BE,linedashed_frag:kE,meshbasic_vert:zE,meshbasic_frag:HE,meshlambert_vert:VE,meshlambert_frag:GE,meshmatcap_vert:WE,meshmatcap_frag:XE,meshnormal_vert:jE,meshnormal_frag:YE,meshphong_vert:qE,meshphong_frag:KE,meshphysical_vert:$E,meshphysical_frag:ZE,meshtoon_vert:JE,meshtoon_frag:QE,points_vert:eS,points_frag:tS,shadow_vert:nS,shadow_frag:iS,sprite_vert:rS,sprite_frag:sS},oe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},xi={basic:{uniforms:cn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:cn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:cn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:cn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:cn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:cn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:cn([oe.points,oe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:cn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:cn([oe.common,oe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:cn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:cn([oe.sprite,oe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:cn([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:cn([oe.lights,oe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};xi.physical={uniforms:cn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Za={r:0,b:0,g:0},kr=new ui,oS=new ze;function aS(n,e,t,i,r,s,o){const a=new Ue(0);let c=s===!0?0:1,l,u,f=null,h=0,p=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function _(S){let M=!1;const L=g(S);L===null?d(a,c):L&&L.isColor&&(d(L,1),M=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,M){const L=g(M);L&&(L.isCubeTexture||L.mapping===Ml)?(u===void 0&&(u=new vn(new va(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:ao(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),kr.copy(M.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(oS.makeRotationFromEuler(kr)),u.material.toneMapped=st.getTransfer(L.colorSpace)!==gt,(f!==L||h!==L.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=L,h=L.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new vn(new El(2,2),new Cr({name:"BackgroundMaterial",uniforms:ao(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=st.getTransfer(L.colorSpace)!==gt,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||h!==L.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=L,h=L.version,p=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function d(S,M){S.getRGB(Za,O_(n)),i.buffers.color.setClear(Za.r,Za.g,Za.b,M,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),c=M,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,d(a,c)},render:_,addToRenderList:m,dispose:T}}function cS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(v,I,K,z,X){let J=!1;const W=f(z,K,I);s!==W&&(s=W,l(s.object)),J=p(v,z,K,X),J&&g(v,z,K,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,M(v,I,K,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function f(v,I,K){const z=K.wireframe===!0;let X=i[v.id];X===void 0&&(X={},i[v.id]=X);let J=X[I.id];J===void 0&&(J={},X[I.id]=J);let W=J[z];return W===void 0&&(W=h(c()),J[z]=W),W}function h(v){const I=[],K=[],z=[];for(let X=0;X<t;X++)I[X]=0,K[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:K,attributeDivisors:z,object:v,attributes:{},index:null}}function p(v,I,K,z){const X=s.attributes,J=I.attributes;let W=0;const ne=K.getAttributes();for(const V in ne)if(ne[V].location>=0){const fe=X[V];let Se=J[V];if(Se===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Se=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Se=v.instanceColor)),fe===void 0||fe.attribute!==Se||Se&&fe.data!==Se.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function g(v,I,K,z){const X={},J=I.attributes;let W=0;const ne=K.getAttributes();for(const V in ne)if(ne[V].location>=0){let fe=J[V];fe===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor));const Se={};Se.attribute=fe,fe&&fe.data&&(Se.data=fe.data),X[V]=Se,W++}s.attributes=X,s.attributesNum=W,s.index=z}function _(){const v=s.newAttributes;for(let I=0,K=v.length;I<K;I++)v[I]=0}function m(v){d(v,0)}function d(v,I){const K=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;K[v]=1,z[v]===0&&(n.enableVertexAttribArray(v),z[v]=1),X[v]!==I&&(n.vertexAttribDivisor(v,I),X[v]=I)}function T(){const v=s.newAttributes,I=s.enabledAttributes;for(let K=0,z=I.length;K<z;K++)I[K]!==v[K]&&(n.disableVertexAttribArray(K),I[K]=0)}function S(v,I,K,z,X,J,W){W===!0?n.vertexAttribIPointer(v,I,K,X,J):n.vertexAttribPointer(v,I,K,z,X,J)}function M(v,I,K,z){_();const X=z.attributes,J=K.getAttributes(),W=I.defaultAttributeValues;for(const ne in J){const V=J[ne];if(V.location>=0){let re=X[ne];if(re===void 0&&(ne==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),ne==="instanceColor"&&v.instanceColor&&(re=v.instanceColor)),re!==void 0){const fe=re.normalized,Se=re.itemSize,Ve=e.get(re);if(Ve===void 0)continue;const at=Ve.buffer,Y=Ve.type,ie=Ve.bytesPerElement,xe=Y===n.INT||Y===n.UNSIGNED_INT||re.gpuType===zf;if(re.isInterleavedBufferAttribute){const ae=re.data,De=ae.stride,Fe=re.offset;if(ae.isInstancedInterleavedBuffer){for(let We=0;We<V.locationSize;We++)d(V.location+We,ae.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let We=0;We<V.locationSize;We++)m(V.location+We);n.bindBuffer(n.ARRAY_BUFFER,at);for(let We=0;We<V.locationSize;We++)S(V.location+We,Se/V.locationSize,Y,fe,De*ie,(Fe+Se/V.locationSize*We)*ie,xe)}else{if(re.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)d(V.location+ae,re.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae);n.bindBuffer(n.ARRAY_BUFFER,at);for(let ae=0;ae<V.locationSize;ae++)S(V.location+ae,Se/V.locationSize,Y,fe,Se*ie,Se/V.locationSize*ae*ie,xe)}}else if(W!==void 0){const fe=W[ne];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(V.location,fe);break;case 3:n.vertexAttrib3fv(V.location,fe);break;case 4:n.vertexAttrib4fv(V.location,fe);break;default:n.vertexAttrib1fv(V.location,fe)}}}}T()}function L(){D();for(const v in i){const I=i[v];for(const K in I){const z=I[K];for(const X in z)u(z[X].object),delete z[X];delete I[K]}delete i[v]}}function w(v){if(i[v.id]===void 0)return;const I=i[v.id];for(const K in I){const z=I[K];for(const X in z)u(z[X].object),delete z[X];delete I[K]}delete i[v.id]}function P(v){for(const I in i){const K=i[I];if(K[v.id]===void 0)continue;const z=K[v.id];for(const X in z)u(z[X].object),delete z[X];delete K[v.id]}}function D(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function lS(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),t.update(u,i,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function c(l,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function uS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Yn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Qi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==si&&!D)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:L,maxSamples:w}}function hS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new hr,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const T=s?0:i,S=T*4;let M=d.clippingState||null;c.value=M,M=u(g,h,S,p);for(let L=0;L!==S;++L)M[L]=t[L];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,M=p;S!==_;++S,M+=4)o.copy(f[S]).applyMatrix4(T,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function fS(n){let e=new WeakMap;function t(o,a){return a===ih?o.mapping=eo:a===rh&&(o.mapping=to),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ih||a===rh)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ix(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ls=4,bm=[.125,.215,.35,.446,.526,.582],Xr=20,mu=new ks,Am=new Ue;let gu=null,_u=0,vu=0,xu=!1;const Gr=(1+Math.sqrt(5))/2,Rs=1/Gr,wm=[new N(-Gr,Rs,0),new N(Gr,Rs,0),new N(-Rs,0,Gr),new N(Rs,0,Gr),new N(0,Gr,-Rs),new N(0,Gr,Rs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Rm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){gu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gu,_u,vu),this._renderer.xr.enabled=xu,e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:ga,format:Yn,colorSpace:so,depthBuffer:!1},r=Cm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dS(s)),this._blurMaterial=pS(s,e,t)}return r}_compileMaterial(e){const t=new vn(this._lodPlanes[0],e);this._renderer.compile(t,mu)}_sceneToCubeUV(e,t,i,r){const a=new $t(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Am),u.toneMapping=Er,u.autoClear=!1;const p=new qr({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new vn(new va,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Am),_=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):T===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const S=this._cubeSize;Ja(r,T*S,d>2?S:0,S,S),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===eo||e.mapping===to;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new vn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ja(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,mu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wm[(r-s-1)%wm.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new vn(this._lodPlanes[r],l),h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Xr;m>Xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xr}`);const d=[];let T=0;for(let P=0;P<Xr;++P){const D=P/_,E=Math.exp(-D*D/2);d.push(E),P===0?T+=E:P<m&&(T+=2*E)}for(let P=0;P<d.length;P++)d[P]=d[P]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;const M=this._sizeLods[r],L=3*M*(r>S-Ls?r-S+Ls:0),w=4*(this._cubeSize-M);Ja(t,L,w,3*M,2*M),c.setRenderTarget(t),c.render(f,mu)}}function dS(n){const e=[],t=[],i=[];let r=n;const s=n-Ls+1+bm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Ls?c=bm[o-n+Ls-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,T=new Float32Array(_*g*p),S=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let w=0;w<p;w++){const P=w%3*2/3-1,D=w>2?0:-1,E=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];T.set(E,_*g*w),S.set(h,m*g*w);const v=[w,w,w,w,w,w];M.set(v,d*g*w)}const L=new Ci;L.setAttribute("position",new hn(T,_)),L.setAttribute("uv",new hn(S,m)),L.setAttribute("faceIndex",new hn(M,d)),e.push(L),r>Ls&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Cm(n,e,t){const i=new ss(n,e,t);return i.texture.mapping=Ml,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ja(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function pS(n,e,t){const i=new Float32Array(Xr),r=new N(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Pm(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Lm(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function id(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===ih||c===rh,u=c===eo||c===to;if(l||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Rm(n)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Rm(n)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function gS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Cs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _S(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function l(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let S=0,M=T.length;S<M;S+=3){const L=T[S+0],w=T[S+1],P=T[S+2];h.push(L,w,w,P,P,L)}}else if(g!==void 0){const T=g.array;_=g.version;for(let S=0,M=T.length/3-1;S<M;S+=3){const L=S+0,w=S+1,P=S+2;h.push(L,w,w,P,P,L)}}else return;const m=new(P_(h)?F_:U_)(h,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function vS(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function l(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function f(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)l(h[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,g);let d=0;for(let T=0;T<g;T++)d+=p[T]*_[T];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function xS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function yS(n,e,t){const i=new WeakMap,r=new ct;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let S=0;p===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let M=a.attributes.position.count*S,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*L*4*f),P=new I_(w,M,L,f);P.type=si,P.needsUpdate=!0;const D=S*4;for(let v=0;v<f;v++){const I=m[v],K=d[v],z=T[v],X=M*L*4*v;for(let J=0;J<I.count;J++){const W=J*D;p===!0&&(r.fromBufferAttribute(I,J),w[X+W+0]=r.x,w[X+W+1]=r.y,w[X+W+2]=r.z,w[X+W+3]=0),g===!0&&(r.fromBufferAttribute(K,J),w[X+W+4]=r.x,w[X+W+5]=r.y,w[X+W+6]=r.z,w[X+W+7]=0),_===!0&&(r.fromBufferAttribute(z,J),w[X+W+8]=r.x,w[X+W+9]=r.y,w[X+W+10]=r.z,w[X+W+11]=z.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new Oe(M,L)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function MS(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const $_=new Zt,Im=new W_(1,1),Z_=new I_,J_=new gx,Q_=new k_,Dm=[],Nm=[],Um=new Float32Array(16),Fm=new Float32Array(9),Om=new Float32Array(4);function bo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Dm[r];if(s===void 0&&(s=new Float32Array(r),Dm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tl(n,e){let t=Nm[e];t===void 0&&(t=new Int32Array(e),Nm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ES(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function SS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function TS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function bS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function AS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,i))return;Om.set(i),n.uniformMatrix2fv(this.addr,!1,Om),Yt(t,i)}}function wS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,i))return;Fm.set(i),n.uniformMatrix3fv(this.addr,!1,Fm),Yt(t,i)}}function RS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,i))return;Um.set(i),n.uniformMatrix4fv(this.addr,!1,Um),Yt(t,i)}}function CS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function PS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function LS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function IS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function DS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function NS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function US(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function FS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function OS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Im.compareFunction=C_,s=Im):s=$_,t.setTexture2D(e||s,r)}function BS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||J_,r)}function kS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Q_,r)}function zS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Z_,r)}function HS(n){switch(n){case 5126:return ES;case 35664:return SS;case 35665:return TS;case 35666:return bS;case 35674:return AS;case 35675:return wS;case 35676:return RS;case 5124:case 35670:return CS;case 35667:case 35671:return PS;case 35668:case 35672:return LS;case 35669:case 35673:return IS;case 5125:return DS;case 36294:return NS;case 36295:return US;case 36296:return FS;case 35678:case 36198:case 36298:case 36306:case 35682:return OS;case 35679:case 36299:case 36307:return BS;case 35680:case 36300:case 36308:case 36293:return kS;case 36289:case 36303:case 36311:case 36292:return zS}}function VS(n,e){n.uniform1fv(this.addr,e)}function GS(n,e){const t=bo(e,this.size,2);n.uniform2fv(this.addr,t)}function WS(n,e){const t=bo(e,this.size,3);n.uniform3fv(this.addr,t)}function XS(n,e){const t=bo(e,this.size,4);n.uniform4fv(this.addr,t)}function jS(n,e){const t=bo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function YS(n,e){const t=bo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qS(n,e){const t=bo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KS(n,e){n.uniform1iv(this.addr,e)}function $S(n,e){n.uniform2iv(this.addr,e)}function ZS(n,e){n.uniform3iv(this.addr,e)}function JS(n,e){n.uniform4iv(this.addr,e)}function QS(n,e){n.uniform1uiv(this.addr,e)}function eT(n,e){n.uniform2uiv(this.addr,e)}function tT(n,e){n.uniform3uiv(this.addr,e)}function nT(n,e){n.uniform4uiv(this.addr,e)}function iT(n,e,t){const i=this.cache,r=e.length,s=Tl(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||$_,s[o])}function rT(n,e,t){const i=this.cache,r=e.length,s=Tl(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||J_,s[o])}function sT(n,e,t){const i=this.cache,r=e.length,s=Tl(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Q_,s[o])}function oT(n,e,t){const i=this.cache,r=e.length,s=Tl(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Z_,s[o])}function aT(n){switch(n){case 5126:return VS;case 35664:return GS;case 35665:return WS;case 35666:return XS;case 35674:return jS;case 35675:return YS;case 35676:return qS;case 5124:case 35670:return KS;case 35667:case 35671:return $S;case 35668:case 35672:return ZS;case 35669:case 35673:return JS;case 5125:return QS;case 36294:return eT;case 36295:return tT;case 36296:return nT;case 35678:case 36198:case 36298:case 36306:case 35682:return iT;case 35679:case 36299:case 36307:return rT;case 35680:case 36300:case 36308:case 36293:return sT;case 36289:case 36303:case 36311:case 36292:return oT}}class cT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=HS(t.type)}}class lT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aT(t.type)}}class uT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const yu=/(\w+)(\])?(\[|\.)?/g;function Bm(n,e){n.seq.push(e),n.map[e.id]=e}function hT(n,e,t){const i=n.name,r=i.length;for(yu.lastIndex=0;;){const s=yu.exec(i),o=yu.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Bm(t,l===void 0?new cT(a,n,e):new lT(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new uT(a),Bm(t,f)),t=f}}}class pc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);hT(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function km(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const fT=37297;let dT=0;function pT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const zm=new He;function mT(n){st._getMatrix(zm,st.workingColorSpace,n);const e=`mat3( ${zm.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case Bc:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Hm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+pT(n.getShaderSource(e),o)}else return r}function gT(n,e){const t=mT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _T(n,e){let t;switch(e){case T2:t="Linear";break;case b2:t="Reinhard";break;case A2:t="Cineon";break;case w2:t="ACESFilmic";break;case C2:t="AgX";break;case P2:t="Neutral";break;case R2:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qa=new N;function vT(){st.getLuminanceCoefficients(Qa);const n=Qa.x.toFixed(4),e=Qa.y.toFixed(4),t=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function yT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function MT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Wo(n){return n!==""}function Vm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ET=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(n){return n.replace(ET,TT)}const ST=new Map;function TT(n,e){let t=Ge[e];if(t===void 0){const i=ST.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Uh(t)}const bT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(n){return n.replace(bT,AT)}function AT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===g_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===i2?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function RT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case Ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case to:e="ENVMAP_MODE_REFRACTION";break}return e}function PT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kf:e="ENVMAP_BLENDING_MULTIPLY";break;case E2:e="ENVMAP_BLENDING_MIX";break;case S2:e="ENVMAP_BLENDING_ADD";break}return e}function LT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function IT(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=wT(t),l=RT(t),u=CT(t),f=PT(t),h=LT(t),p=xT(t),g=yT(s),_=r.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),d.length>0&&(d+=`
`)):(m=[Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),d=[Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Er?_T("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,gT("linearToOutputTexel",t.outputColorSpace),vT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),o=Uh(o),o=Vm(o,t),o=Gm(o,t),a=Uh(a),a=Vm(a,t),a=Gm(a,t),o=Wm(o),a=Wm(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=T+m+o,M=T+d+a,L=km(r,r.VERTEX_SHADER,S),w=km(r,r.FRAGMENT_SHADER,M);r.attachShader(_,L),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(I){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(L).trim(),X=r.getShaderInfoLog(w).trim();let J=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,w);else{const ne=Hm(r,L,"vertex"),V=Hm(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+K+`
`+ne+`
`+V)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(z===""||X==="")&&(W=!1);W&&(I.diagnostics={runnable:J,programLog:K,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:d}})}r.deleteShader(L),r.deleteShader(w),D=new pc(r,_),E=MT(r,_)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,fT)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=w,this}let DT=0;class NT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new UT(e),t.set(e,i)),i}}class UT{constructor(e){this.id=DT++,this.code=e,this.usedTimes=0}}function FT(n,e,t,i,r,s,o){const a=new D_,c=new NT,l=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,v,I,K,z){const X=K.fog,J=z.geometry,W=E.isMeshStandardMaterial?K.environment:null,ne=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),V=ne&&ne.mapping===Ml?ne.image.height:null,re=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const fe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Se=fe!==void 0?fe.length:0;let Ve=0;J.morphAttributes.position!==void 0&&(Ve=1),J.morphAttributes.normal!==void 0&&(Ve=2),J.morphAttributes.color!==void 0&&(Ve=3);let at,Y,ie,xe;if(re){const Je=xi[re];at=Je.vertexShader,Y=Je.fragmentShader}else at=E.vertexShader,Y=E.fragmentShader,c.update(E),ie=c.getVertexShaderID(E),xe=c.getFragmentShaderID(E);const ae=n.getRenderTarget(),De=n.state.buffers.depth.getReversed(),Fe=z.isInstancedMesh===!0,We=z.isBatchedMesh===!0,Mt=!!E.map,qe=!!E.matcap,St=!!ne,R=!!E.aoMap,dn=!!E.lightMap,Ke=!!E.bumpMap,je=!!E.normalMap,be=!!E.displacementMap,mt=!!E.emissiveMap,Ae=!!E.metalnessMap,b=!!E.roughnessMap,x=E.anisotropy>0,O=E.clearcoat>0,$=E.dispersion>0,Z=E.iridescence>0,q=E.sheen>0,Me=E.transmission>0,se=x&&!!E.anisotropyMap,pe=O&&!!E.clearcoatMap,Ze=O&&!!E.clearcoatNormalMap,te=O&&!!E.clearcoatRoughnessMap,ge=Z&&!!E.iridescenceMap,Pe=Z&&!!E.iridescenceThicknessMap,Ne=q&&!!E.sheenColorMap,de=q&&!!E.sheenRoughnessMap,C=!!E.specularMap,G=!!E.specularColorMap,ce=!!E.specularIntensityMap,A=Me&&!!E.transmissionMap,Q=Me&&!!E.thicknessMap,H=!!E.gradientMap,j=!!E.alphaMap,he=E.alphaTest>0,le=!!E.alphaHash,Le=!!E.extensions;let nt=Er;E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(nt=n.toneMapping);const Dt={shaderID:re,shaderType:E.type,shaderName:E.name,vertexShader:at,fragmentShader:Y,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:We,batchingColor:We&&z._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&z.instanceColor!==null,instancingMorph:Fe&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:so,alphaToCoverage:!!E.alphaToCoverage,map:Mt,matcap:qe,envMap:St,envMapMode:St&&ne.mapping,envMapCubeUVHeight:V,aoMap:R,lightMap:dn,bumpMap:Ke,normalMap:je,displacementMap:h&&be,emissiveMap:mt,normalMapObjectSpace:je&&E.normalMapType===F2,normalMapTangentSpace:je&&E.normalMapType===Yf,metalnessMap:Ae,roughnessMap:b,anisotropy:x,anisotropyMap:se,clearcoat:O,clearcoatMap:pe,clearcoatNormalMap:Ze,clearcoatRoughnessMap:te,dispersion:$,iridescence:Z,iridescenceMap:ge,iridescenceThicknessMap:Pe,sheen:q,sheenColorMap:Ne,sheenRoughnessMap:de,specularMap:C,specularColorMap:G,specularIntensityMap:ce,transmission:Me,transmissionMap:A,thicknessMap:Q,gradientMap:H,opaque:E.transparent===!1&&E.blending===Fs&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:he,alphaHash:le,combine:E.combine,mapUv:Mt&&_(E.map.channel),aoMapUv:R&&_(E.aoMap.channel),lightMapUv:dn&&_(E.lightMap.channel),bumpMapUv:Ke&&_(E.bumpMap.channel),normalMapUv:je&&_(E.normalMap.channel),displacementMapUv:be&&_(E.displacementMap.channel),emissiveMapUv:mt&&_(E.emissiveMap.channel),metalnessMapUv:Ae&&_(E.metalnessMap.channel),roughnessMapUv:b&&_(E.roughnessMap.channel),anisotropyMapUv:se&&_(E.anisotropyMap.channel),clearcoatMapUv:pe&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(E.sheenRoughnessMap.channel),specularMapUv:C&&_(E.specularMap.channel),specularColorMapUv:G&&_(E.specularColorMap.channel),specularIntensityMapUv:ce&&_(E.specularIntensityMap.channel),transmissionMapUv:A&&_(E.transmissionMap.channel),thicknessMapUv:Q&&_(E.thicknessMap.channel),alphaMapUv:j&&_(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(je||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!J.attributes.uv&&(Mt||j),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:De,skinning:z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ve,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:Mt&&E.map.isVideoTexture===!0&&st.getTransfer(E.map.colorSpace)===gt,decodeVideoTextureEmissive:mt&&E.emissiveMap.isVideoTexture===!0&&st.getTransfer(E.emissiveMap.colorSpace)===gt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yi,flipSided:E.side===xn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Le&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&E.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function d(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)v.push(I),v.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(T(v,E),S(v,E),v.push(n.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function T(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function S(E,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),E.push(a.mask)}function M(E){const v=g[E.type];let I;if(v){const K=xi[v];I=Rx.clone(K.uniforms)}else I=E.uniforms;return I}function L(E,v){let I;for(let K=0,z=u.length;K<z;K++){const X=u[K];if(X.cacheKey===v){I=X,++I.usedTimes;break}}return I===void 0&&(I=new IT(n,v,E,s),u.push(I)),I}function w(E){if(--E.usedTimes===0){const v=u.indexOf(E);u[v]=u[u.length-1],u.pop(),E.destroy()}}function P(E){c.remove(E)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:L,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:D}}function OT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function BT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ym(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(f,h){t.length>1&&t.sort(f||BT),i.length>1&&i.sort(h||jm),r.length>1&&r.sort(h||jm)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function kT(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ym,n.set(i,[o])):r>=s.length?(o=new Ym,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function zT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ue};break;case"SpotLight":t={position:new N,direction:new N,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function HT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let VT=0;function GT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function WT(n){const e=new zT,t=HT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,s=new ze,o=new ze;function a(l){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,T=0,S=0,M=0,L=0,w=0,P=0;l.sort(GT);for(let E=0,v=l.length;E<v;E++){const I=l[E],K=I.color,z=I.intensity,X=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=K.r*z,f+=K.g*z,h+=K.b*z;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],z);P++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ne=I.shadow,V=t.get(I);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=I.shadow.matrix,T++}i.directional[p]=W,p++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(K).multiplyScalar(z),W.distance=X,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[_]=W;const ne=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,ne.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[_]=ne.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=J,M++}_++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(K).multiplyScalar(z),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=W,m++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const ne=I.shadow,V=t.get(I);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,V.shadowCameraNear=ne.camera.near,V.shadowCameraFar=ne.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=I.shadow.matrix,S++}i.point[g]=W,g++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(z),W.groundColor.copy(I.groundColor).multiplyScalar(z),i.hemi[d]=W,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==T||D.numPointShadows!==S||D.numSpotShadows!==M||D.numSpotMaps!==L||D.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+L-w,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=T,D.numPointShadows=S,D.numSpotShadows=M,D.numSpotMaps=L,D.numLightProbes=P,i.version=VT++)}function c(l,u){let f=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,T=l.length;d<T;d++){const S=l[d];if(S.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(S.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function qm(n){const e=new WT(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function XT(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new qm(n),e.set(r,[a])):s>=o.length?(a=new qm(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const jT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qT(n,e,t){let i=new Zf;const r=new Oe,s=new Oe,o=new ct,a=new jx({depthPacking:U2}),c=new Yx,l={},u=t.maxTextureSize,f={[Ti]:xn,[xn]:Ti,[yi]:yi},h=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:jT,fragmentShader:YT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ci;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g_;let d=this.type;this.render=function(w,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=n.getRenderTarget(),v=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),K=n.state;K.setBlending(Mr),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const z=d!==ki&&this.type===ki,X=d===ki&&this.type!==ki;for(let J=0,W=w.length;J<W;J++){const ne=w[J],V=ne.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const re=V.getFrameExtents();if(r.multiply(re),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,V.mapSize.y=s.y)),V.map===null||z===!0||X===!0){const Se=this.type!==ki?{minFilter:yn,magFilter:yn}:{};V.map!==null&&V.map.dispose(),V.map=new ss(r.x,r.y,Se),V.map.texture.name=ne.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const fe=V.getViewportCount();for(let Se=0;Se<fe;Se++){const Ve=V.getViewport(Se);o.set(s.x*Ve.x,s.y*Ve.y,s.x*Ve.z,s.y*Ve.w),K.viewport(o),V.updateMatrices(ne,Se),i=V.getFrustum(),M(P,D,V.camera,ne,this.type)}V.isPointLightShadow!==!0&&this.type===ki&&T(V,D),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,v,I)};function T(w,P){const D=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ss(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(P,null,D,h,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(P,null,D,p,_,null)}function S(w,P,D,E){let v=null;const I=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)v=I;else if(v=D.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const K=v.uuid,z=P.uuid;let X=l[K];X===void 0&&(X={},l[K]=X);let J=X[z];J===void 0&&(J=v.clone(),X[z]=J,P.addEventListener("dispose",L)),v=J}if(v.visible=P.visible,v.wireframe=P.wireframe,E===ki?v.side=P.shadowSide!==null?P.shadowSide:P.side:v.side=P.shadowSide!==null?P.shadowSide:f[P.side],v.alphaMap=P.alphaMap,v.alphaTest=P.alphaTest,v.map=P.map,v.clipShadows=P.clipShadows,v.clippingPlanes=P.clippingPlanes,v.clipIntersection=P.clipIntersection,v.displacementMap=P.displacementMap,v.displacementScale=P.displacementScale,v.displacementBias=P.displacementBias,v.wireframeLinewidth=P.wireframeLinewidth,v.linewidth=P.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const K=n.properties.get(v);K.light=D}return v}function M(w,P,D,E,v){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===ki)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const z=e.update(w),X=w.material;if(Array.isArray(X)){const J=z.groups;for(let W=0,ne=J.length;W<ne;W++){const V=J[W],re=X[V.materialIndex];if(re&&re.visible){const fe=S(w,re,E,v);w.onBeforeShadow(n,w,P,D,z,fe,V),n.renderBufferDirect(D,null,z,fe,w,V),w.onAfterShadow(n,w,P,D,z,fe,V)}}}else if(X.visible){const J=S(w,X,E,v);w.onBeforeShadow(n,w,P,D,z,J,null),n.renderBufferDirect(D,null,z,J,w,null),w.onAfterShadow(n,w,P,D,z,J,null)}}const K=w.children;for(let z=0,X=K.length;z<X;z++)M(K[z],P,D,E,v)}function L(w){w.target.removeEventListener("dispose",L);for(const D in l){const E=l[D],v=w.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}const KT={[$u]:Zu,[Ju]:th,[Qu]:nh,[Qs]:eh,[Zu]:$u,[th]:Ju,[nh]:Qu,[eh]:Qs};function $T(n,e){function t(){let A=!1;const Q=new ct;let H=null;const j=new ct(0,0,0,0);return{setMask:function(he){H!==he&&!A&&(n.colorMask(he,he,he,he),H=he)},setLocked:function(he){A=he},setClear:function(he,le,Le,nt,Dt){Dt===!0&&(he*=nt,le*=nt,Le*=nt),Q.set(he,le,Le,nt),j.equals(Q)===!1&&(n.clearColor(he,le,Le,nt),j.copy(Q))},reset:function(){A=!1,H=null,j.set(-1,0,0,0)}}}function i(){let A=!1,Q=!1,H=null,j=null,he=null;return{setReversed:function(le){if(Q!==le){const Le=e.get("EXT_clip_control");Q?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const nt=he;he=null,this.setClear(nt)}Q=le},getReversed:function(){return Q},setTest:function(le){le?ae(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(le){H!==le&&!A&&(n.depthMask(le),H=le)},setFunc:function(le){if(Q&&(le=KT[le]),j!==le){switch(le){case $u:n.depthFunc(n.NEVER);break;case Zu:n.depthFunc(n.ALWAYS);break;case Ju:n.depthFunc(n.LESS);break;case Qs:n.depthFunc(n.LEQUAL);break;case Qu:n.depthFunc(n.EQUAL);break;case eh:n.depthFunc(n.GEQUAL);break;case th:n.depthFunc(n.GREATER);break;case nh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=le}},setLocked:function(le){A=le},setClear:function(le){he!==le&&(Q&&(le=1-le),n.clearDepth(le),he=le)},reset:function(){A=!1,H=null,j=null,he=null,Q=!1}}}function r(){let A=!1,Q=null,H=null,j=null,he=null,le=null,Le=null,nt=null,Dt=null;return{setTest:function(Je){A||(Je?ae(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(Je){Q!==Je&&!A&&(n.stencilMask(Je),Q=Je)},setFunc:function(Je,Jt,pn){(H!==Je||j!==Jt||he!==pn)&&(n.stencilFunc(Je,Jt,pn),H=Je,j=Jt,he=pn)},setOp:function(Je,Jt,pn){(le!==Je||Le!==Jt||nt!==pn)&&(n.stencilOp(Je,Jt,pn),le=Je,Le=Jt,nt=pn)},setLocked:function(Je){A=Je},setClear:function(Je){Dt!==Je&&(n.clearStencil(Je),Dt=Je)},reset:function(){A=!1,Q=null,H=null,j=null,he=null,le=null,Le=null,nt=null,Dt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,S=null,M=null,L=null,w=null,P=new Ue(0,0,0),D=0,E=!1,v=null,I=null,K=null,z=null,X=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ne=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=ne>=1):V.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=ne>=2);let re=null,fe={};const Se=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),at=new ct().fromArray(Se),Y=new ct().fromArray(Ve);function ie(A,Q,H,j){const he=new Uint8Array(4),le=n.createTexture();n.bindTexture(A,le),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<H;Le++)A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(Q+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return le}const xe={};xe[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(n.DEPTH_TEST),o.setFunc(Qs),Ke(!1),je(Lp),ae(n.CULL_FACE),R(Mr);function ae(A){u[A]!==!0&&(n.enable(A),u[A]=!0)}function De(A){u[A]!==!1&&(n.disable(A),u[A]=!1)}function Fe(A,Q){return f[A]!==Q?(n.bindFramebuffer(A,Q),f[A]=Q,A===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Q),A===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function We(A,Q){let H=p,j=!1;if(A){H=h.get(Q),H===void 0&&(H=[],h.set(Q,H));const he=A.textures;if(H.length!==he.length||H[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Le=he.length;le<Le;le++)H[le]=n.COLOR_ATTACHMENT0+le;H.length=he.length,j=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,j=!0);j&&n.drawBuffers(H)}function Mt(A){return g!==A?(n.useProgram(A),g=A,!0):!1}const qe={[Wr]:n.FUNC_ADD,[s2]:n.FUNC_SUBTRACT,[o2]:n.FUNC_REVERSE_SUBTRACT};qe[a2]=n.MIN,qe[c2]=n.MAX;const St={[l2]:n.ZERO,[u2]:n.ONE,[h2]:n.SRC_COLOR,[qu]:n.SRC_ALPHA,[_2]:n.SRC_ALPHA_SATURATE,[m2]:n.DST_COLOR,[d2]:n.DST_ALPHA,[f2]:n.ONE_MINUS_SRC_COLOR,[Ku]:n.ONE_MINUS_SRC_ALPHA,[g2]:n.ONE_MINUS_DST_COLOR,[p2]:n.ONE_MINUS_DST_ALPHA,[v2]:n.CONSTANT_COLOR,[x2]:n.ONE_MINUS_CONSTANT_COLOR,[y2]:n.CONSTANT_ALPHA,[M2]:n.ONE_MINUS_CONSTANT_ALPHA};function R(A,Q,H,j,he,le,Le,nt,Dt,Je){if(A===Mr){_===!0&&(De(n.BLEND),_=!1);return}if(_===!1&&(ae(n.BLEND),_=!0),A!==r2){if(A!==m||Je!==E){if((d!==Wr||M!==Wr)&&(n.blendEquation(n.FUNC_ADD),d=Wr,M=Wr),Je)switch(A){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ip:n.blendFunc(n.ONE,n.ONE);break;case Dp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Np:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ip:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Dp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Np:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}T=null,S=null,L=null,w=null,P.set(0,0,0),D=0,m=A,E=Je}return}he=he||Q,le=le||H,Le=Le||j,(Q!==d||he!==M)&&(n.blendEquationSeparate(qe[Q],qe[he]),d=Q,M=he),(H!==T||j!==S||le!==L||Le!==w)&&(n.blendFuncSeparate(St[H],St[j],St[le],St[Le]),T=H,S=j,L=le,w=Le),(nt.equals(P)===!1||Dt!==D)&&(n.blendColor(nt.r,nt.g,nt.b,Dt),P.copy(nt),D=Dt),m=A,E=!1}function dn(A,Q){A.side===yi?De(n.CULL_FACE):ae(n.CULL_FACE);let H=A.side===xn;Q&&(H=!H),Ke(H),A.blending===Fs&&A.transparent===!1?R(Mr):R(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),o.setFunc(A.depthFunc),o.setTest(A.depthTest),o.setMask(A.depthWrite),s.setMask(A.colorWrite);const j=A.stencilWrite;a.setTest(j),j&&(a.setMask(A.stencilWriteMask),a.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),a.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),mt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(A){v!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),v=A)}function je(A){A!==t2?(ae(n.CULL_FACE),A!==I&&(A===Lp?n.cullFace(n.BACK):A===n2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),I=A}function be(A){A!==K&&(W&&n.lineWidth(A),K=A)}function mt(A,Q,H){A?(ae(n.POLYGON_OFFSET_FILL),(z!==Q||X!==H)&&(n.polygonOffset(Q,H),z=Q,X=H)):De(n.POLYGON_OFFSET_FILL)}function Ae(A){A?ae(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function b(A){A===void 0&&(A=n.TEXTURE0+J-1),re!==A&&(n.activeTexture(A),re=A)}function x(A,Q,H){H===void 0&&(re===null?H=n.TEXTURE0+J-1:H=re);let j=fe[H];j===void 0&&(j={type:void 0,texture:void 0},fe[H]=j),(j.type!==A||j.texture!==Q)&&(re!==H&&(n.activeTexture(H),re=H),n.bindTexture(A,Q||xe[A]),j.type=A,j.texture=Q)}function O(){const A=fe[re];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ze(){try{n.texStorage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ne(A){at.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),at.copy(A))}function de(A){Y.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),Y.copy(A))}function C(A,Q){let H=l.get(Q);H===void 0&&(H=new WeakMap,l.set(Q,H));let j=H.get(A);j===void 0&&(j=n.getUniformBlockIndex(Q,A.name),H.set(A,j))}function G(A,Q){const j=l.get(Q).get(A);c.get(Q)!==j&&(n.uniformBlockBinding(Q,j,A.__bindingPointIndex),c.set(Q,j))}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,fe={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,S=null,M=null,L=null,w=null,P=new Ue(0,0,0),D=0,E=!1,v=null,I=null,K=null,z=null,X=null,at.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:De,bindFramebuffer:Fe,drawBuffers:We,useProgram:Mt,setBlending:R,setMaterial:dn,setFlipSided:Ke,setCullFace:je,setLineWidth:be,setPolygonOffset:mt,setScissorTest:Ae,activeTexture:b,bindTexture:x,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:ge,texImage3D:Pe,updateUBOMapping:C,uniformBlockBinding:G,texStorage2D:Ze,texStorage3D:te,texSubImage2D:q,texSubImage3D:Me,compressedTexSubImage2D:se,compressedTexSubImage3D:pe,scissor:Ne,viewport:de,reset:ce}}function ZT(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):ca("canvas")}function _(b,x,O){let $=1;const Z=Ae(b);if((Z.width>O||Z.height>O)&&($=O/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor($*Z.width),Me=Math.floor($*Z.height);f===void 0&&(f=g(q,Me));const se=x?g(q,Me):f;return se.width=q,se.height=Me,se.getContext("2d").drawImage(b,0,0,q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+Me+")."),se}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){n.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(b,x,O,$,Z=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=x;if(x===n.RED&&(O===n.FLOAT&&(q=n.R32F),O===n.HALF_FLOAT&&(q=n.R16F),O===n.UNSIGNED_BYTE&&(q=n.R8)),x===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.R8UI),O===n.UNSIGNED_SHORT&&(q=n.R16UI),O===n.UNSIGNED_INT&&(q=n.R32UI),O===n.BYTE&&(q=n.R8I),O===n.SHORT&&(q=n.R16I),O===n.INT&&(q=n.R32I)),x===n.RG&&(O===n.FLOAT&&(q=n.RG32F),O===n.HALF_FLOAT&&(q=n.RG16F),O===n.UNSIGNED_BYTE&&(q=n.RG8)),x===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RG8UI),O===n.UNSIGNED_SHORT&&(q=n.RG16UI),O===n.UNSIGNED_INT&&(q=n.RG32UI),O===n.BYTE&&(q=n.RG8I),O===n.SHORT&&(q=n.RG16I),O===n.INT&&(q=n.RG32I)),x===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGB8UI),O===n.UNSIGNED_SHORT&&(q=n.RGB16UI),O===n.UNSIGNED_INT&&(q=n.RGB32UI),O===n.BYTE&&(q=n.RGB8I),O===n.SHORT&&(q=n.RGB16I),O===n.INT&&(q=n.RGB32I)),x===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),O===n.UNSIGNED_INT&&(q=n.RGBA32UI),O===n.BYTE&&(q=n.RGBA8I),O===n.SHORT&&(q=n.RGBA16I),O===n.INT&&(q=n.RGBA32I)),x===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),x===n.RGBA){const Me=Z?Bc:st.getTransfer($);O===n.FLOAT&&(q=n.RGBA32F),O===n.HALF_FLOAT&&(q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(q=Me===gt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(b,x){let O;return b?x===null||x===rs||x===io?O=n.DEPTH24_STENCIL8:x===si?O=n.DEPTH32F_STENCIL8:x===sa&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===rs||x===io?O=n.DEPTH_COMPONENT24:x===si?O=n.DEPTH_COMPONENT32F:x===sa&&(O=n.DEPTH_COMPONENT16),O}function L(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==yn&&b.minFilter!==jn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function w(b){const x=b.target;x.removeEventListener("dispose",w),D(x),x.isVideoTexture&&u.delete(x)}function P(b){const x=b.target;x.removeEventListener("dispose",P),v(x)}function D(b){const x=i.get(b);if(x.__webglInit===void 0)return;const O=b.source,$=h.get(O);if($){const Z=$[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(b),Object.keys($).length===0&&h.delete(O)}i.remove(b)}function E(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const O=b.source,$=h.get(O);delete $[x.__cacheKey],o.memory.textures--}function v(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let Z=0;Z<x.__webglFramebuffer[$].length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[$][Z]);else n.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)n.deleteFramebuffer(x.__webglFramebuffer[$]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=b.textures;for(let $=0,Z=O.length;$<Z;$++){const q=i.get(O[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(O[$])}i.remove(b)}let I=0;function K(){I=0}function z(){const b=I;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),I+=1,b}function X(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function J(b,x){const O=i.get(b);if(b.isVideoTexture&&be(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,b,x);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+x)}function W(b,x){const O=i.get(b);if(b.version>0&&O.__version!==b.version){Y(O,b,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+x)}function ne(b,x){const O=i.get(b);if(b.version>0&&O.__version!==b.version){Y(O,b,x);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+x)}function V(b,x){const O=i.get(b);if(b.version>0&&O.__version!==b.version){ie(O,b,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+x)}const re={[no]:n.REPEAT,[gr]:n.CLAMP_TO_EDGE,[Oc]:n.MIRRORED_REPEAT},fe={[yn]:n.NEAREST,[v_]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[jn]:n.LINEAR,[cc]:n.LINEAR_MIPMAP_NEAREST,[Xi]:n.LINEAR_MIPMAP_LINEAR},Se={[O2]:n.NEVER,[G2]:n.ALWAYS,[B2]:n.LESS,[C_]:n.LEQUAL,[k2]:n.EQUAL,[V2]:n.GEQUAL,[z2]:n.GREATER,[H2]:n.NOTEQUAL};function Ve(b,x){if(x.type===si&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===jn||x.magFilter===cc||x.magFilter===Go||x.magFilter===Xi||x.minFilter===jn||x.minFilter===cc||x.minFilter===Go||x.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,re[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,re[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,re[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,fe[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,fe[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Se[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===yn||x.minFilter!==Go&&x.minFilter!==Xi||x.type===si&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function at(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",w));const $=x.source;let Z=h.get($);Z===void 0&&(Z={},h.set($,Z));const q=X(x);if(q!==b.__cacheKey){Z[q]===void 0&&(Z[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[q].usedTimes++;const Me=Z[b.__cacheKey];Me!==void 0&&(Z[b.__cacheKey].usedTimes--,Me.usedTimes===0&&E(x)),b.__cacheKey=q,b.__webglTexture=Z[q].texture}return O}function Y(b,x,O){let $=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=n.TEXTURE_3D);const Z=at(b,x),q=x.source;t.bindTexture($,b.__webglTexture,n.TEXTURE0+O);const Me=i.get(q);if(q.version!==Me.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);const se=st.getPrimaries(st.workingColorSpace),pe=x.colorSpace===mr?null:st.getPrimaries(x.colorSpace),Ze=x.colorSpace===mr||se===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let te=_(x.image,!1,r.maxTextureSize);te=mt(x,te);const ge=s.convert(x.format,x.colorSpace),Pe=s.convert(x.type);let Ne=S(x.internalFormat,ge,Pe,x.colorSpace,x.isVideoTexture);Ve($,x);let de;const C=x.mipmaps,G=x.isVideoTexture!==!0,ce=Me.__version===void 0||Z===!0,A=q.dataReady,Q=L(x,te);if(x.isDepthTexture)Ne=M(x.format===ro,x.type),ce&&(G?t.texStorage2D(n.TEXTURE_2D,1,Ne,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Ne,te.width,te.height,0,ge,Pe,null));else if(x.isDataTexture)if(C.length>0){G&&ce&&t.texStorage2D(n.TEXTURE_2D,Q,Ne,C[0].width,C[0].height);for(let H=0,j=C.length;H<j;H++)de=C[H],G?A&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,de.width,de.height,ge,Pe,de.data):t.texImage2D(n.TEXTURE_2D,H,Ne,de.width,de.height,0,ge,Pe,de.data);x.generateMipmaps=!1}else G?(ce&&t.texStorage2D(n.TEXTURE_2D,Q,Ne,te.width,te.height),A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,ge,Pe,te.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,te.width,te.height,0,ge,Pe,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){G&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,Ne,C[0].width,C[0].height,te.depth);for(let H=0,j=C.length;H<j;H++)if(de=C[H],x.format!==Yn)if(ge!==null)if(G){if(A)if(x.layerUpdates.size>0){const he=Tm(de.width,de.height,x.format,x.type);for(const le of x.layerUpdates){const Le=de.data.subarray(le*he/de.data.BYTES_PER_ELEMENT,(le+1)*he/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,le,de.width,de.height,1,ge,Le)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,de.width,de.height,te.depth,ge,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,Ne,de.width,de.height,te.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?A&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,de.width,de.height,te.depth,ge,Pe,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,H,Ne,de.width,de.height,te.depth,0,ge,Pe,de.data)}else{G&&ce&&t.texStorage2D(n.TEXTURE_2D,Q,Ne,C[0].width,C[0].height);for(let H=0,j=C.length;H<j;H++)de=C[H],x.format!==Yn?ge!==null?G?A&&t.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,de.width,de.height,ge,de.data):t.compressedTexImage2D(n.TEXTURE_2D,H,Ne,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?A&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,de.width,de.height,ge,Pe,de.data):t.texImage2D(n.TEXTURE_2D,H,Ne,de.width,de.height,0,ge,Pe,de.data)}else if(x.isDataArrayTexture)if(G){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,Ne,te.width,te.height,te.depth),A)if(x.layerUpdates.size>0){const H=Tm(te.width,te.height,x.format,x.type);for(const j of x.layerUpdates){const he=te.data.subarray(j*H/te.data.BYTES_PER_ELEMENT,(j+1)*H/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,te.width,te.height,1,ge,Pe,he)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ge,Pe,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,te.width,te.height,te.depth,0,ge,Pe,te.data);else if(x.isData3DTexture)G?(ce&&t.texStorage3D(n.TEXTURE_3D,Q,Ne,te.width,te.height,te.depth),A&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ge,Pe,te.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,te.width,te.height,te.depth,0,ge,Pe,te.data);else if(x.isFramebufferTexture){if(ce)if(G)t.texStorage2D(n.TEXTURE_2D,Q,Ne,te.width,te.height);else{let H=te.width,j=te.height;for(let he=0;he<Q;he++)t.texImage2D(n.TEXTURE_2D,he,Ne,H,j,0,ge,Pe,null),H>>=1,j>>=1}}else if(C.length>0){if(G&&ce){const H=Ae(C[0]);t.texStorage2D(n.TEXTURE_2D,Q,Ne,H.width,H.height)}for(let H=0,j=C.length;H<j;H++)de=C[H],G?A&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,ge,Pe,de):t.texImage2D(n.TEXTURE_2D,H,Ne,ge,Pe,de);x.generateMipmaps=!1}else if(G){if(ce){const H=Ae(te);t.texStorage2D(n.TEXTURE_2D,Q,Ne,H.width,H.height)}A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Pe,te)}else t.texImage2D(n.TEXTURE_2D,0,Ne,ge,Pe,te);m(x)&&d($),Me.__version=q.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ie(b,x,O){if(x.image.length!==6)return;const $=at(b,x),Z=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);const q=i.get(Z);if(Z.version!==q.__version||$===!0){t.activeTexture(n.TEXTURE0+O);const Me=st.getPrimaries(st.workingColorSpace),se=x.colorSpace===mr?null:st.getPrimaries(x.colorSpace),pe=x.colorSpace===mr||Me===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ze=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let j=0;j<6;j++)!Ze&&!te?ge[j]=_(x.image[j],!0,r.maxCubemapSize):ge[j]=te?x.image[j].image:x.image[j],ge[j]=mt(x,ge[j]);const Pe=ge[0],Ne=s.convert(x.format,x.colorSpace),de=s.convert(x.type),C=S(x.internalFormat,Ne,de,x.colorSpace),G=x.isVideoTexture!==!0,ce=q.__version===void 0||$===!0,A=Z.dataReady;let Q=L(x,Pe);Ve(n.TEXTURE_CUBE_MAP,x);let H;if(Ze){G&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Q,C,Pe.width,Pe.height);for(let j=0;j<6;j++){H=ge[j].mipmaps;for(let he=0;he<H.length;he++){const le=H[he];x.format!==Yn?Ne!==null?G?A&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,0,0,le.width,le.height,Ne,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,C,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,0,0,le.width,le.height,Ne,de,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,C,le.width,le.height,0,Ne,de,le.data)}}}else{if(H=x.mipmaps,G&&ce){H.length>0&&Q++;const j=Ae(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Q,C,j.width,j.height)}for(let j=0;j<6;j++)if(te){G?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ge[j].width,ge[j].height,Ne,de,ge[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,C,ge[j].width,ge[j].height,0,Ne,de,ge[j].data);for(let he=0;he<H.length;he++){const Le=H[he].image[j].image;G?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,0,0,Le.width,Le.height,Ne,de,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,C,Le.width,Le.height,0,Ne,de,Le.data)}}else{G?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ne,de,ge[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,C,Ne,de,ge[j]);for(let he=0;he<H.length;he++){const le=H[he];G?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,0,0,Ne,de,le.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,C,Ne,de,le.image[j])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),q.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function xe(b,x,O,$,Z,q){const Me=s.convert(O.format,O.colorSpace),se=s.convert(O.type),pe=S(O.internalFormat,Me,se,O.colorSpace),Ze=i.get(x),te=i.get(O);if(te.__renderTarget=x,!Ze.__hasExternalTextures){const ge=Math.max(1,x.width>>q),Pe=Math.max(1,x.height>>q);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,pe,ge,Pe,x.depth,0,Me,se,null):t.texImage2D(Z,q,pe,ge,Pe,0,Me,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),je(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Z,te.__webglTexture,0,Ke(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Z,te.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(b,x,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const $=x.depthTexture,Z=$&&$.isDepthTexture?$.type:null,q=M(x.stencilBuffer,Z),Me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=Ke(x);je(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,q,x.width,x.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,b)}else{const $=x.textures;for(let Z=0;Z<$.length;Z++){const q=$[Z],Me=s.convert(q.format,q.colorSpace),se=s.convert(q.type),pe=S(q.internalFormat,Me,se,q.colorSpace),Ze=Ke(x);O&&je(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,pe,x.width,x.height):je(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze,pe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,pe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);const Z=$.__webglTexture,q=Ke(x);if(x.depthTexture.format===Os)je(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(x.depthTexture.format===ro)je(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Fe(b){const x=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=$}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");De(x.__webglFramebuffer,b)}else if(O){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=n.createRenderbuffer(),ae(x.__webglDepthbuffer[$],b,!1);else{const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ae(x.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(b,x,O){const $=i.get(b);x!==void 0&&xe($.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Fe(b)}function Mt(b){const x=b.texture,O=i.get(b),$=i.get(x);b.addEventListener("dispose",P);const Z=b.textures,q=b.isWebGLCubeRenderTarget===!0,Me=Z.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=x.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[se]=[];for(let pe=0;pe<x.mipmaps.length;pe++)O.__webglFramebuffer[se][pe]=n.createFramebuffer()}else O.__webglFramebuffer[se]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)O.__webglFramebuffer[se]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Me)for(let se=0,pe=Z.length;se<pe;se++){const Ze=i.get(Z[se]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&je(b)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){const pe=Z[se];O.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[se]);const Ze=s.convert(pe.format,pe.colorSpace),te=s.convert(pe.type),ge=S(pe.internalFormat,Ze,te,pe.colorSpace,b.isXRRenderTarget===!0),Pe=Ke(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ge,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,O.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)xe(O.__webglFramebuffer[se][pe],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe);else xe(O.__webglFramebuffer[se],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let se=0,pe=Z.length;se<pe;se++){const Ze=Z[se],te=i.get(Ze);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),Ve(n.TEXTURE_2D,Ze),xe(O.__webglFramebuffer,b,Ze,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),m(Ze)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(se=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,$.__webglTexture),Ve(se,x),x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)xe(O.__webglFramebuffer[pe],b,x,n.COLOR_ATTACHMENT0,se,pe);else xe(O.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,se,0);m(x)&&d(se),t.unbindTexture()}b.depthBuffer&&Fe(b)}function qe(b){const x=b.textures;for(let O=0,$=x.length;O<$;O++){const Z=x[O];if(m(Z)){const q=T(b),Me=i.get(Z).__webglTexture;t.bindTexture(q,Me),d(q),t.unbindTexture()}}}const St=[],R=[];function dn(b){if(b.samples>0){if(je(b)===!1){const x=b.textures,O=b.width,$=b.height;let Z=n.COLOR_BUFFER_BIT;const q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(b),se=x.length>1;if(se)for(let pe=0;pe<x.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[pe]);const Ze=i.get(x[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ze,0)}n.blitFramebuffer(0,0,O,$,0,0,O,$,Z,n.NEAREST),c===!0&&(St.length=0,R.length=0,St.push(n.COLOR_ATTACHMENT0+pe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(St.push(q),R.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let pe=0;pe<x.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Me.__webglColorRenderbuffer[pe]);const Ze=i.get(x[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Ke(b){return Math.min(r.maxSamples,b.samples)}function je(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function be(b){const x=o.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function mt(b,x){const O=b.colorSpace,$=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==so&&O!==mr&&(st.getTransfer(O)===gt?($!==Yn||Z!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function Ae(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=K,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=ne,this.setTextureCube=V,this.rebindTextures=We,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=je}function JT(n,e){function t(i,r=mr){let s;const o=st.getTransfer(r);if(i===Qi)return n.UNSIGNED_BYTE;if(i===Hf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===M_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===x_)return n.BYTE;if(i===y_)return n.SHORT;if(i===sa)return n.UNSIGNED_SHORT;if(i===zf)return n.INT;if(i===rs)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===ga)return n.HALF_FLOAT;if(i===E_)return n.ALPHA;if(i===S_)return n.RGB;if(i===Yn)return n.RGBA;if(i===T_)return n.LUMINANCE;if(i===b_)return n.LUMINANCE_ALPHA;if(i===Os)return n.DEPTH_COMPONENT;if(i===ro)return n.DEPTH_STENCIL;if(i===Gf)return n.RED;if(i===Wf)return n.RED_INTEGER;if(i===A_)return n.RG;if(i===Xf)return n.RG_INTEGER;if(i===jf)return n.RGBA_INTEGER;if(i===lc||i===uc||i===hc||i===fc)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===lc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===lc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sh||i===oh||i===ah||i===ch)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ch)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lh||i===uh||i===hh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lh||i===uh)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===hh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fh||i===dh||i===ph||i===mh||i===gh||i===_h||i===vh||i===xh||i===yh||i===Mh||i===Eh||i===Sh||i===Th||i===bh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ph)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_h)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Th)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dc||i===Ah||i===wh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===dc)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===w_||i===Rh||i===Ch||i===Ph)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Rh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ch)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ph)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===io?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const QT={type:"move"};class Mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QT)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const e3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class n3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Cr({vertexShader:e3,fragmentShader:t3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vn(new El(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i3 extends Mo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,g=null;const _=new n3,m=t.getContextAttributes();let d=null,T=null;const S=[],M=[],L=new Oe;let w=null;const P=new $t;P.viewport=new ct;const D=new $t;D.viewport=new ct;const E=[P,D],v=new my;let I=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=S[Y];return ie===void 0&&(ie=new Mu,S[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=S[Y];return ie===void 0&&(ie=new Mu,S[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=S[Y];return ie===void 0&&(ie=new Mu,S[Y]=ie),ie.getHandSpace()};function z(Y){const ie=M.indexOf(Y.inputSource);if(ie===-1)return;const xe=S[ie];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,l||o),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",J);for(let Y=0;Y<S.length;Y++){const ie=M[Y];ie!==null&&(M[Y]=null,S[Y].disconnect(ie))}I=null,K=null,_.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,T=null,at.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(L),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let xe=null,ae=null,De=null;m.depth&&(De=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=m.stencil?ro:Os,ae=m.stencil?io:rs);const Fe={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new ss(h.textureWidth,h.textureHeight,{format:Yn,type:Qi,depthTexture:new W_(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const xe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new ss(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),at.setContext(r),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(Y){for(let ie=0;ie<Y.removed.length;ie++){const xe=Y.removed[ie],ae=M.indexOf(xe);ae>=0&&(M[ae]=null,S[ae].disconnect(xe))}for(let ie=0;ie<Y.added.length;ie++){const xe=Y.added[ie];let ae=M.indexOf(xe);if(ae===-1){for(let Fe=0;Fe<S.length;Fe++)if(Fe>=M.length){M.push(xe),ae=Fe;break}else if(M[Fe]===null){M[Fe]=xe,ae=Fe;break}if(ae===-1)break}const De=S[ae];De&&De.connect(xe)}}const W=new N,ne=new N;function V(Y,ie,xe){W.setFromMatrixPosition(ie.matrixWorld),ne.setFromMatrixPosition(xe.matrixWorld);const ae=W.distanceTo(ne),De=ie.projectionMatrix.elements,Fe=xe.projectionMatrix.elements,We=De[14]/(De[10]-1),Mt=De[14]/(De[10]+1),qe=(De[9]+1)/De[5],St=(De[9]-1)/De[5],R=(De[8]-1)/De[0],dn=(Fe[8]+1)/Fe[0],Ke=We*R,je=We*dn,be=ae/(-R+dn),mt=be*-R;if(ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(mt),Y.translateZ(be),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),De[10]===-1)Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ae=We+be,b=Mt+be,x=Ke-mt,O=je+(ae-mt),$=qe*Mt/b*Ae,Z=St*Mt/b*Ae;Y.projectionMatrix.makePerspective(x,O,$,Z,Ae,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function re(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ie=Y.near,xe=Y.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),v.near=D.near=P.near=ie,v.far=D.far=P.far=xe,(I!==v.near||K!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),I=v.near,K=v.far),P.layers.mask=Y.layers.mask|2,D.layers.mask=Y.layers.mask|4,v.layers.mask=P.layers.mask|D.layers.mask;const ae=Y.parent,De=v.cameras;re(v,ae);for(let Fe=0;Fe<De.length;Fe++)re(De[Fe],ae);De.length===2?V(v,P,D):v.projectionMatrix.copy(P.projectionMatrix),fe(Y,v,ae)};function fe(Y,ie,xe){xe===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=oo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Se=null;function Ve(Y,ie){if(u=ie.getViewerPose(l||o),g=ie,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let ae=!1;xe.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let Fe=0;Fe<xe.length;Fe++){const We=xe[Fe];let Mt=null;if(p!==null)Mt=p.getViewport(We);else{const St=f.getViewSubImage(h,We);Mt=St.viewport,Fe===0&&(e.setRenderTargetTextures(T,St.colorTexture,h.ignoreDepthValues?void 0:St.depthStencilTexture),e.setRenderTarget(T))}let qe=E[Fe];qe===void 0&&(qe=new $t,qe.layers.enable(Fe),qe.viewport=new ct,E[Fe]=qe),qe.matrix.fromArray(We.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(We.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),Fe===0&&(v.matrix.copy(qe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(qe)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Fe=f.getDepthInformation(xe[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(e,Fe,r.renderState)}}for(let xe=0;xe<S.length;xe++){const ae=M[xe],De=S[xe];ae!==null&&De!==void 0&&De.update(ae,ie,l||o)}Se&&Se(Y,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const at=new K_;at.setAnimationLoop(Ve),this.setAnimationLoop=function(Y){Se=Y},this.dispose=function(){}}}const zr=new ui,r3=new ze;function s3(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,O_(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,T,S,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,T,S):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===xn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===xn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d),S=T.envMap,M=T.envMapRotation;S&&(m.envMap.value=S,zr.copy(M),zr.x*=-1,zr.y*=-1,zr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),m.envMapRotation.value.setFromMatrix4(r3.makeRotationFromEuler(zr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,T,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function o3(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){const M=S.program;i.uniformBlockBinding(T,M)}function l(T,S){let M=r[T.id];M===void 0&&(g(T),M=u(T),r[T.id]=M,T.addEventListener("dispose",m));const L=S.program;i.updateUBOMapping(T,L);const w=e.render.frame;s[T.id]!==w&&(h(T),s[T.id]=w)}function u(T){const S=f();T.__bindingPointIndex=S;const M=n.createBuffer(),L=T.__size,w=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,L,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,M),M}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const S=r[T.id],M=T.uniforms,L=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,P=M.length;w<P;w++){const D=Array.isArray(M[w])?M[w]:[M[w]];for(let E=0,v=D.length;E<v;E++){const I=D[E];if(p(I,w,E,L)===!0){const K=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let J=0;J<z.length;J++){const W=z[J],ne=_(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,K+X,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,X),X+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,S,M,L){const w=T.value,P=S+"_"+M;if(L[P]===void 0)return typeof w=="number"||typeof w=="boolean"?L[P]=w:L[P]=w.clone(),!0;{const D=L[P];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return L[P]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(T){const S=T.uniforms;let M=0;const L=16;for(let P=0,D=S.length;P<D;P++){const E=Array.isArray(S[P])?S[P]:[S[P]];for(let v=0,I=E.length;v<I;v++){const K=E[v],z=Array.isArray(K.value)?K.value:[K.value];for(let X=0,J=z.length;X<J;X++){const W=z[X],ne=_(W),V=M%L,re=V%ne.boundary,fe=V+re;M+=re,fe!==0&&L-fe<ne.storage&&(M+=L-fe),K.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=M,M+=ne.storage}}}const w=M%L;return w>0&&(M+=L-w),T.__size=M,T.__cache={},this}function _(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}class a3{constructor(e={}){const{canvas:t=ax(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Er,this.toneMappingExposure=1;const M=this;let L=!1,w=0,P=0,D=null,E=-1,v=null;const I=new ct,K=new ct;let z=null;const X=new Ue(0);let J=0,W=t.width,ne=t.height,V=1,re=null,fe=null;const Se=new ct(0,0,W,ne),Ve=new ct(0,0,W,ne);let at=!1;const Y=new Zf;let ie=!1,xe=!1;this.transmissionResolutionScale=1;const ae=new ze,De=new ze,Fe=new N,We=new ct,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function St(){return D===null?V:1}let R=i;function dn(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yl}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",le,!1),R===null){const U="webgl2";if(R=dn(U,y),R===null)throw dn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ke,je,be,mt,Ae,b,x,O,$,Z,q,Me,se,pe,Ze,te,ge,Pe,Ne,de,C,G,ce,A;function Q(){Ke=new gS(R),Ke.init(),G=new JT(R,Ke),je=new uS(R,Ke,e,G),be=new $T(R,Ke),je.reverseDepthBuffer&&h&&be.buffers.depth.setReversed(!0),mt=new xS(R),Ae=new OT,b=new ZT(R,Ke,be,Ae,je,G,mt),x=new fS(M),O=new mS(M),$=new Ay(R),ce=new cS(R,$),Z=new _S(R,$,mt,ce),q=new MS(R,Z,$,mt),Ne=new yS(R,je,b),te=new hS(Ae),Me=new FT(M,x,O,Ke,je,ce,te),se=new s3(M,Ae),pe=new kT,Ze=new XT(Ke),Pe=new aS(M,x,O,be,q,p,c),ge=new qT(M,q,je),A=new o3(R,mt,je,be),de=new lS(R,Ke,mt),C=new vS(R,Ke,mt),mt.programs=Me.programs,M.capabilities=je,M.extensions=Ke,M.properties=Ae,M.renderLists=pe,M.shadowMap=ge,M.state=be,M.info=mt}Q();const H=new i3(M,R);this.xr=H,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=Ke.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ke.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(W,ne,!1))},this.getSize=function(y){return y.set(W,ne)},this.setSize=function(y,U,B=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,ne=U,t.width=Math.floor(y*V),t.height=Math.floor(U*V),B===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(W*V,ne*V).floor()},this.setDrawingBufferSize=function(y,U,B){W=y,ne=U,V=B,t.width=Math.floor(y*B),t.height=Math.floor(U*B),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(Se)},this.setViewport=function(y,U,B,k){y.isVector4?Se.set(y.x,y.y,y.z,y.w):Se.set(y,U,B,k),be.viewport(I.copy(Se).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Ve)},this.setScissor=function(y,U,B,k){y.isVector4?Ve.set(y.x,y.y,y.z,y.w):Ve.set(y,U,B,k),be.scissor(K.copy(Ve).multiplyScalar(V).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(y){be.setScissorTest(at=y)},this.setOpaqueSort=function(y){re=y},this.setTransparentSort=function(y){fe=y},this.getClearColor=function(y){return y.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(y=!0,U=!0,B=!0){let k=0;if(y){let F=!1;if(D!==null){const ee=D.texture.format;F=ee===jf||ee===Xf||ee===Wf}if(F){const ee=D.texture.type,ue=ee===Qi||ee===rs||ee===sa||ee===io||ee===Hf||ee===Vf,_e=Pe.getClearColor(),ve=Pe.getClearAlpha(),Be=_e.r,ke=_e.g,Re=_e.b;ue?(g[0]=Be,g[1]=ke,g[2]=Re,g[3]=ve,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Be,_[1]=ke,_[2]=Re,_[3]=ve,R.clearBufferiv(R.COLOR,0,_))}else k|=R.COLOR_BUFFER_BIT}U&&(k|=R.DEPTH_BUFFER_BIT),B&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Pe.dispose(),pe.dispose(),Ze.dispose(),Ae.dispose(),x.dispose(),O.dispose(),q.dispose(),ce.dispose(),A.dispose(),Me.dispose(),H.dispose(),H.removeEventListener("sessionstart",rd),H.removeEventListener("sessionend",sd),Ir.stop()};function j(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=mt.autoReset,U=ge.enabled,B=ge.autoUpdate,k=ge.needsUpdate,F=ge.type;Q(),mt.autoReset=y,ge.enabled=U,ge.autoUpdate=B,ge.needsUpdate=k,ge.type=F}function le(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Le(y){const U=y.target;U.removeEventListener("dispose",Le),nt(U)}function nt(y){Dt(y),Ae.remove(y)}function Dt(y){const U=Ae.get(y).programs;U!==void 0&&(U.forEach(function(B){Me.releaseProgram(B)}),y.isShaderMaterial&&Me.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,B,k,F,ee){U===null&&(U=Mt);const ue=F.isMesh&&F.matrixWorld.determinant()<0,_e=i1(y,U,B,k,F);be.setMaterial(k,ue);let ve=B.index,Be=1;if(k.wireframe===!0){if(ve=Z.getWireframeAttribute(B),ve===void 0)return;Be=2}const ke=B.drawRange,Re=B.attributes.position;let et=ke.start*Be,lt=(ke.start+ke.count)*Be;ee!==null&&(et=Math.max(et,ee.start*Be),lt=Math.min(lt,(ee.start+ee.count)*Be)),ve!==null?(et=Math.max(et,0),lt=Math.min(lt,ve.count)):Re!=null&&(et=Math.max(et,0),lt=Math.min(lt,Re.count));const kt=lt-et;if(kt<0||kt===1/0)return;ce.setup(F,k,_e,B,ve);let Nt,it=de;if(ve!==null&&(Nt=$.get(ve),it=C,it.setIndex(Nt)),F.isMesh)k.wireframe===!0?(be.setLineWidth(k.wireframeLinewidth*St()),it.setMode(R.LINES)):it.setMode(R.TRIANGLES);else if(F.isLine){let Ie=k.linewidth;Ie===void 0&&(Ie=1),be.setLineWidth(Ie*St()),F.isLineSegments?it.setMode(R.LINES):F.isLineLoop?it.setMode(R.LINE_LOOP):it.setMode(R.LINE_STRIP)}else F.isPoints?it.setMode(R.POINTS):F.isSprite&&it.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)it.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))it.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ie=F._multiDrawStarts,Qt=F._multiDrawCounts,ut=F._multiDrawCount,Qn=ve?$.get(ve).bytesPerElement:1,cs=Ae.get(k).currentProgram.getUniforms();for(let bn=0;bn<ut;bn++)cs.setValue(R,"_gl_DrawID",bn),it.render(Ie[bn]/Qn,Qt[bn])}else if(F.isInstancedMesh)it.renderInstances(et,kt,F.count);else if(B.isInstancedBufferGeometry){const Ie=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Qt=Math.min(B.instanceCount,Ie);it.renderInstances(et,kt,Qt)}else it.render(et,kt)};function Je(y,U,B){y.transparent===!0&&y.side===yi&&y.forceSinglePass===!1?(y.side=xn,y.needsUpdate=!0,Ma(y,U,B),y.side=Ti,y.needsUpdate=!0,Ma(y,U,B),y.side=yi):Ma(y,U,B)}this.compile=function(y,U,B=null){B===null&&(B=y),d=Ze.get(B),d.init(U),S.push(d),B.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),y!==B&&y.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const k=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ee=F.material;if(ee)if(Array.isArray(ee))for(let ue=0;ue<ee.length;ue++){const _e=ee[ue];Je(_e,B,F),k.add(_e)}else Je(ee,B,F),k.add(ee)}),S.pop(),d=null,k},this.compileAsync=function(y,U,B=null){const k=this.compile(y,U,B);return new Promise(F=>{function ee(){if(k.forEach(function(ue){Ae.get(ue).currentProgram.isReady()&&k.delete(ue)}),k.size===0){F(y);return}setTimeout(ee,10)}Ke.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Jt=null;function pn(y){Jt&&Jt(y)}function rd(){Ir.stop()}function sd(){Ir.start()}const Ir=new K_;Ir.setAnimationLoop(pn),typeof self<"u"&&Ir.setContext(self),this.setAnimationLoop=function(y){Jt=y,H.setAnimationLoop(y),y===null?Ir.stop():Ir.start()},H.addEventListener("sessionstart",rd),H.addEventListener("sessionend",sd),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(U),U=H.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,U,D),d=Ze.get(y,S.length),d.init(U),S.push(d),De.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(De),xe=this.localClippingEnabled,ie=te.init(this.clippingPlanes,xe),m=pe.get(y,T.length),m.init(),T.push(m),H.enabled===!0&&H.isPresenting===!0){const ee=M.xr.getDepthSensingMesh();ee!==null&&bl(ee,U,-1/0,M.sortObjects)}bl(y,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(re,fe),qe=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,qe&&Pe.addToRenderList(m,y),this.info.render.frame++,ie===!0&&te.beginShadows();const B=d.state.shadowsArray;ge.render(B,y,U),ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,F=m.transmissive;if(d.setupLights(),U.isArrayCamera){const ee=U.cameras;if(F.length>0)for(let ue=0,_e=ee.length;ue<_e;ue++){const ve=ee[ue];ad(k,F,y,ve)}qe&&Pe.render(y);for(let ue=0,_e=ee.length;ue<_e;ue++){const ve=ee[ue];od(m,y,ve,ve.viewport)}}else F.length>0&&ad(k,F,y,U),qe&&Pe.render(y),od(m,y,U);D!==null&&P===0&&(b.updateMultisampleRenderTarget(D),b.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(M,y,U),ce.resetDefaultState(),E=-1,v=null,S.pop(),S.length>0?(d=S[S.length-1],ie===!0&&te.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function bl(y,U,B,k){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){k&&We.setFromMatrixPosition(y.matrixWorld).applyMatrix4(De);const ue=q.update(y),_e=y.material;_e.visible&&m.push(y,ue,_e,B,We.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){const ue=q.update(y),_e=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),We.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),We.copy(ue.boundingSphere.center)),We.applyMatrix4(y.matrixWorld).applyMatrix4(De)),Array.isArray(_e)){const ve=ue.groups;for(let Be=0,ke=ve.length;Be<ke;Be++){const Re=ve[Be],et=_e[Re.materialIndex];et&&et.visible&&m.push(y,ue,et,B,We.z,Re)}}else _e.visible&&m.push(y,ue,_e,B,We.z,null)}}const ee=y.children;for(let ue=0,_e=ee.length;ue<_e;ue++)bl(ee[ue],U,B,k)}function od(y,U,B,k){const F=y.opaque,ee=y.transmissive,ue=y.transparent;d.setupLightsView(B),ie===!0&&te.setGlobalState(M.clippingPlanes,B),k&&be.viewport(I.copy(k)),F.length>0&&ya(F,U,B),ee.length>0&&ya(ee,U,B),ue.length>0&&ya(ue,U,B),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function ad(y,U,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new ss(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?ga:Qi,minFilter:Xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ee=d.state.transmissionRenderTarget[k.id],ue=k.viewport||I;ee.setSize(ue.z*M.transmissionResolutionScale,ue.w*M.transmissionResolutionScale);const _e=M.getRenderTarget();M.setRenderTarget(ee),M.getClearColor(X),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),qe&&Pe.render(B);const ve=M.toneMapping;M.toneMapping=Er;const Be=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),ie===!0&&te.setGlobalState(M.clippingPlanes,k),ya(y,B,k),b.updateMultisampleRenderTarget(ee),b.updateRenderTargetMipmap(ee),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Re=0,et=U.length;Re<et;Re++){const lt=U[Re],kt=lt.object,Nt=lt.geometry,it=lt.material,Ie=lt.group;if(it.side===yi&&kt.layers.test(k.layers)){const Qt=it.side;it.side=xn,it.needsUpdate=!0,cd(kt,B,k,Nt,it,Ie),it.side=Qt,it.needsUpdate=!0,ke=!0}}ke===!0&&(b.updateMultisampleRenderTarget(ee),b.updateRenderTargetMipmap(ee))}M.setRenderTarget(_e),M.setClearColor(X,J),Be!==void 0&&(k.viewport=Be),M.toneMapping=ve}function ya(y,U,B){const k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ee=y.length;F<ee;F++){const ue=y[F],_e=ue.object,ve=ue.geometry,Be=k===null?ue.material:k,ke=ue.group;_e.layers.test(B.layers)&&cd(_e,U,B,ve,Be,ke)}}function cd(y,U,B,k,F,ee){y.onBeforeRender(M,U,B,k,F,ee),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(M,U,B,k,y,ee),F.transparent===!0&&F.side===yi&&F.forceSinglePass===!1?(F.side=xn,F.needsUpdate=!0,M.renderBufferDirect(B,U,k,F,y,ee),F.side=Ti,F.needsUpdate=!0,M.renderBufferDirect(B,U,k,F,y,ee),F.side=yi):M.renderBufferDirect(B,U,k,F,y,ee),y.onAfterRender(M,U,B,k,F,ee)}function Ma(y,U,B){U.isScene!==!0&&(U=Mt);const k=Ae.get(y),F=d.state.lights,ee=d.state.shadowsArray,ue=F.state.version,_e=Me.getParameters(y,F.state,ee,U,B),ve=Me.getProgramCacheKey(_e);let Be=k.programs;k.environment=y.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(y.isMeshStandardMaterial?O:x).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Be===void 0&&(y.addEventListener("dispose",Le),Be=new Map,k.programs=Be);let ke=Be.get(ve);if(ke!==void 0){if(k.currentProgram===ke&&k.lightsStateVersion===ue)return ud(y,_e),ke}else _e.uniforms=Me.getUniforms(y),y.onBeforeCompile(_e,M),ke=Me.acquireProgram(_e,ve),Be.set(ve,ke),k.uniforms=_e.uniforms;const Re=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Re.clippingPlanes=te.uniform),ud(y,_e),k.needsLights=s1(y),k.lightsStateVersion=ue,k.needsLights&&(Re.ambientLightColor.value=F.state.ambient,Re.lightProbe.value=F.state.probe,Re.directionalLights.value=F.state.directional,Re.directionalLightShadows.value=F.state.directionalShadow,Re.spotLights.value=F.state.spot,Re.spotLightShadows.value=F.state.spotShadow,Re.rectAreaLights.value=F.state.rectArea,Re.ltc_1.value=F.state.rectAreaLTC1,Re.ltc_2.value=F.state.rectAreaLTC2,Re.pointLights.value=F.state.point,Re.pointLightShadows.value=F.state.pointShadow,Re.hemisphereLights.value=F.state.hemi,Re.directionalShadowMap.value=F.state.directionalShadowMap,Re.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Re.spotShadowMap.value=F.state.spotShadowMap,Re.spotLightMatrix.value=F.state.spotLightMatrix,Re.spotLightMap.value=F.state.spotLightMap,Re.pointShadowMap.value=F.state.pointShadowMap,Re.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=ke,k.uniformsList=null,ke}function ld(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=pc.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function ud(y,U){const B=Ae.get(y);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function i1(y,U,B,k,F){U.isScene!==!0&&(U=Mt),b.resetTextureUnits();const ee=U.fog,ue=k.isMeshStandardMaterial?U.environment:null,_e=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:so,ve=(k.isMeshStandardMaterial?O:x).get(k.envMap||ue),Be=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ke=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!B.morphAttributes.position,et=!!B.morphAttributes.normal,lt=!!B.morphAttributes.color;let kt=Er;k.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(kt=M.toneMapping);const Nt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=Nt!==void 0?Nt.length:0,Ie=Ae.get(k),Qt=d.state.lights;if(ie===!0&&(xe===!0||y!==v)){const sn=y===v&&k.id===E;te.setState(k,y,sn)}let ut=!1;k.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Qt.state.version||Ie.outputColorSpace!==_e||F.isBatchedMesh&&Ie.batching===!1||!F.isBatchedMesh&&Ie.batching===!0||F.isBatchedMesh&&Ie.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ie.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ie.instancing===!1||!F.isInstancedMesh&&Ie.instancing===!0||F.isSkinnedMesh&&Ie.skinning===!1||!F.isSkinnedMesh&&Ie.skinning===!0||F.isInstancedMesh&&Ie.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ie.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ie.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ie.instancingMorph===!1&&F.morphTexture!==null||Ie.envMap!==ve||k.fog===!0&&Ie.fog!==ee||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==te.numPlanes||Ie.numIntersection!==te.numIntersection)||Ie.vertexAlphas!==Be||Ie.vertexTangents!==ke||Ie.morphTargets!==Re||Ie.morphNormals!==et||Ie.morphColors!==lt||Ie.toneMapping!==kt||Ie.morphTargetsCount!==it)&&(ut=!0):(ut=!0,Ie.__version=k.version);let Qn=Ie.currentProgram;ut===!0&&(Qn=Ma(k,U,F));let cs=!1,bn=!1,Ao=!1;const Tt=Qn.getUniforms(),Fn=Ie.uniforms;if(be.useProgram(Qn.program)&&(cs=!0,bn=!0,Ao=!0),k.id!==E&&(E=k.id,bn=!0),cs||v!==y){be.buffers.depth.getReversed()?(ae.copy(y.projectionMatrix),lx(ae),ux(ae),Tt.setValue(R,"projectionMatrix",ae)):Tt.setValue(R,"projectionMatrix",y.projectionMatrix),Tt.setValue(R,"viewMatrix",y.matrixWorldInverse);const mn=Tt.map.cameraPosition;mn!==void 0&&mn.setValue(R,Fe.setFromMatrixPosition(y.matrixWorld)),je.logarithmicDepthBuffer&&Tt.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Tt.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,bn=!0,Ao=!0)}if(F.isSkinnedMesh){Tt.setOptional(R,F,"bindMatrix"),Tt.setOptional(R,F,"bindMatrixInverse");const sn=F.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Tt.setValue(R,"boneTexture",sn.boneTexture,b))}F.isBatchedMesh&&(Tt.setOptional(R,F,"batchingTexture"),Tt.setValue(R,"batchingTexture",F._matricesTexture,b),Tt.setOptional(R,F,"batchingIdTexture"),Tt.setValue(R,"batchingIdTexture",F._indirectTexture,b),Tt.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&Tt.setValue(R,"batchingColorTexture",F._colorsTexture,b));const On=B.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Ne.update(F,B,Qn),(bn||Ie.receiveShadow!==F.receiveShadow)&&(Ie.receiveShadow=F.receiveShadow,Tt.setValue(R,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Fn.envMap.value=ve,Fn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Fn.envMapIntensity.value=U.environmentIntensity),bn&&(Tt.setValue(R,"toneMappingExposure",M.toneMappingExposure),Ie.needsLights&&r1(Fn,Ao),ee&&k.fog===!0&&se.refreshFogUniforms(Fn,ee),se.refreshMaterialUniforms(Fn,k,V,ne,d.state.transmissionRenderTarget[y.id]),pc.upload(R,ld(Ie),Fn,b)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(pc.upload(R,ld(Ie),Fn,b),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Tt.setValue(R,"center",F.center),Tt.setValue(R,"modelViewMatrix",F.modelViewMatrix),Tt.setValue(R,"normalMatrix",F.normalMatrix),Tt.setValue(R,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const sn=k.uniformsGroups;for(let mn=0,Al=sn.length;mn<Al;mn++){const Dr=sn[mn];A.update(Dr,Qn),A.bind(Dr,Qn)}}return Qn}function r1(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function s1(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,U,B){Ae.get(y.texture).__webglTexture=U,Ae.get(y.depthTexture).__webglTexture=B;const k=Ae.get(y);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const B=Ae.get(y);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const o1=R.createFramebuffer();this.setRenderTarget=function(y,U=0,B=0){D=y,w=U,P=B;let k=!0,F=null,ee=!1,ue=!1;if(y){const ve=Ae.get(y);if(ve.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(R.FRAMEBUFFER,null),k=!1;else if(ve.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(ve.__hasExternalTextures)b.rebindTextures(y,Ae.get(y.texture).__webglTexture,Ae.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Re=y.depthTexture;if(ve.__boundDepthTexture!==Re){if(Re!==null&&Ae.has(Re)&&(y.width!==Re.image.width||y.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const Be=y.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ue=!0);const ke=Ae.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ke[U])?F=ke[U][B]:F=ke[U],ee=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?F=Ae.get(y).__webglMultisampledFramebuffer:Array.isArray(ke)?F=ke[B]:F=ke,I.copy(y.viewport),K.copy(y.scissor),z=y.scissorTest}else I.copy(Se).multiplyScalar(V).floor(),K.copy(Ve).multiplyScalar(V).floor(),z=at;if(B!==0&&(F=o1),be.bindFramebuffer(R.FRAMEBUFFER,F)&&k&&be.drawBuffers(y,F),be.viewport(I),be.scissor(K),be.setScissorTest(z),ee){const ve=Ae.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,B)}else if(ue){const ve=Ae.get(y.texture),Be=U;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ve.__webglTexture,B,Be)}else if(y!==null&&B!==0){const ve=Ae.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ve.__webglTexture,B)}E=-1},this.readRenderTargetPixels=function(y,U,B,k,F,ee,ue){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ae.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){be.bindFramebuffer(R.FRAMEBUFFER,_e);try{const ve=y.texture,Be=ve.format,ke=ve.type;if(!je.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-k&&B>=0&&B<=y.height-F&&R.readPixels(U,B,k,F,G.convert(Be),G.convert(ke),ee)}finally{const ve=D!==null?Ae.get(D).__webglFramebuffer:null;be.bindFramebuffer(R.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(y,U,B,k,F,ee,ue){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ae.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){const ve=y.texture,Be=ve.format,ke=ve.type;if(!je.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-k&&B>=0&&B<=y.height-F){be.bindFramebuffer(R.FRAMEBUFFER,_e);const Re=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Re),R.bufferData(R.PIXEL_PACK_BUFFER,ee.byteLength,R.STREAM_READ),R.readPixels(U,B,k,F,G.convert(Be),G.convert(ke),0);const et=D!==null?Ae.get(D).__webglFramebuffer:null;be.bindFramebuffer(R.FRAMEBUFFER,et);const lt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await cx(R,lt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Re),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ee),R.deleteBuffer(Re),R.deleteSync(lt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,B=0){y.isTexture!==!0&&(Cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const k=Math.pow(2,-B),F=Math.floor(y.image.width*k),ee=Math.floor(y.image.height*k),ue=U!==null?U.x:0,_e=U!==null?U.y:0;b.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,ue,_e,F,ee),be.unbindTexture()};const a1=R.createFramebuffer(),c1=R.createFramebuffer();this.copyTextureToTexture=function(y,U,B=null,k=null,F=0,ee=null){y.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1],U=arguments[2],ee=arguments[3]||0,B=null),ee===null&&(F!==0?(Cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=F,F=0):ee=0);let ue,_e,ve,Be,ke,Re,et,lt,kt;const Nt=y.isCompressedTexture?y.mipmaps[ee]:y.image;if(B!==null)ue=B.max.x-B.min.x,_e=B.max.y-B.min.y,ve=B.isBox3?B.max.z-B.min.z:1,Be=B.min.x,ke=B.min.y,Re=B.isBox3?B.min.z:0;else{const On=Math.pow(2,-F);ue=Math.floor(Nt.width*On),_e=Math.floor(Nt.height*On),y.isDataArrayTexture?ve=Nt.depth:y.isData3DTexture?ve=Math.floor(Nt.depth*On):ve=1,Be=0,ke=0,Re=0}k!==null?(et=k.x,lt=k.y,kt=k.z):(et=0,lt=0,kt=0);const it=G.convert(U.format),Ie=G.convert(U.type);let Qt;U.isData3DTexture?(b.setTexture3D(U,0),Qt=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),Qt=R.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),Qt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const ut=R.getParameter(R.UNPACK_ROW_LENGTH),Qn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),cs=R.getParameter(R.UNPACK_SKIP_PIXELS),bn=R.getParameter(R.UNPACK_SKIP_ROWS),Ao=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Nt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Nt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Be),R.pixelStorei(R.UNPACK_SKIP_ROWS,ke),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Re);const Tt=y.isDataArrayTexture||y.isData3DTexture,Fn=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const On=Ae.get(y),sn=Ae.get(U),mn=Ae.get(On.__renderTarget),Al=Ae.get(sn.__renderTarget);be.bindFramebuffer(R.READ_FRAMEBUFFER,mn.__webglFramebuffer),be.bindFramebuffer(R.DRAW_FRAMEBUFFER,Al.__webglFramebuffer);for(let Dr=0;Dr<ve;Dr++)Tt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ae.get(y).__webglTexture,F,Re+Dr),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ae.get(U).__webglTexture,ee,kt+Dr)),R.blitFramebuffer(Be,ke,ue,_e,et,lt,ue,_e,R.DEPTH_BUFFER_BIT,R.NEAREST);be.bindFramebuffer(R.READ_FRAMEBUFFER,null),be.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(F!==0||y.isRenderTargetTexture||Ae.has(y)){const On=Ae.get(y),sn=Ae.get(U);be.bindFramebuffer(R.READ_FRAMEBUFFER,a1),be.bindFramebuffer(R.DRAW_FRAMEBUFFER,c1);for(let mn=0;mn<ve;mn++)Tt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,On.__webglTexture,F,Re+mn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,On.__webglTexture,F),Fn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,sn.__webglTexture,ee,kt+mn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,sn.__webglTexture,ee),F!==0?R.blitFramebuffer(Be,ke,ue,_e,et,lt,ue,_e,R.COLOR_BUFFER_BIT,R.NEAREST):Fn?R.copyTexSubImage3D(Qt,ee,et,lt,kt+mn,Be,ke,ue,_e):R.copyTexSubImage2D(Qt,ee,et,lt,Be,ke,ue,_e);be.bindFramebuffer(R.READ_FRAMEBUFFER,null),be.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Fn?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(Qt,ee,et,lt,kt,ue,_e,ve,it,Ie,Nt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Qt,ee,et,lt,kt,ue,_e,ve,it,Nt.data):R.texSubImage3D(Qt,ee,et,lt,kt,ue,_e,ve,it,Ie,Nt):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ee,et,lt,ue,_e,it,Ie,Nt.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ee,et,lt,Nt.width,Nt.height,it,Nt.data):R.texSubImage2D(R.TEXTURE_2D,ee,et,lt,ue,_e,it,Ie,Nt);R.pixelStorei(R.UNPACK_ROW_LENGTH,ut),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,cs),R.pixelStorei(R.UNPACK_SKIP_ROWS,bn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ao),ee===0&&U.generateMipmaps&&R.generateMipmap(Qt),be.unbindTexture()},this.copyTextureToTexture3D=function(y,U,B=null,k=null,F=0){return y.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,y=arguments[2],U=arguments[3],F=arguments[4]||0),Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,B,k,F)},this.initRenderTarget=function(y){Ae.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),be.unbindTexture()},this.resetState=function(){w=0,P=0,D=null,be.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}const c3=parseInt(yl.replace(/\D+/g,""));function Km(n,e){if(e===D2)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Lh||e===R_){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(t)if(e===Lh)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var l3=Object.defineProperty,u3=(n,e,t)=>e in n?l3(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,h3=(n,e,t)=>(u3(n,e+"",t),t);class f3{constructor(){h3(this,"_listeners")}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}var d3=Object.defineProperty,p3=(n,e,t)=>e in n?d3(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ce=(n,e,t)=>(p3(n,typeof e!="symbol"?e+"":e,t),t);const ec=new _a,$m=new hr,m3=Math.cos(70*(Math.PI/180)),Zm=(n,e)=>(n%e+e)%e;class g3 extends f3{constructor(e,t){super(),Ce(this,"object"),Ce(this,"domElement"),Ce(this,"enabled",!0),Ce(this,"target",new N),Ce(this,"minDistance",0),Ce(this,"maxDistance",1/0),Ce(this,"minZoom",0),Ce(this,"maxZoom",1/0),Ce(this,"minPolarAngle",0),Ce(this,"maxPolarAngle",Math.PI),Ce(this,"minAzimuthAngle",-1/0),Ce(this,"maxAzimuthAngle",1/0),Ce(this,"enableDamping",!1),Ce(this,"dampingFactor",.05),Ce(this,"enableZoom",!0),Ce(this,"zoomSpeed",1),Ce(this,"enableRotate",!0),Ce(this,"rotateSpeed",1),Ce(this,"enablePan",!0),Ce(this,"panSpeed",1),Ce(this,"screenSpacePanning",!0),Ce(this,"keyPanSpeed",7),Ce(this,"zoomToCursor",!1),Ce(this,"autoRotate",!1),Ce(this,"autoRotateSpeed",2),Ce(this,"reverseOrbit",!1),Ce(this,"reverseHorizontalOrbit",!1),Ce(this,"reverseVerticalOrbit",!1),Ce(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),Ce(this,"mouseButtons",{LEFT:fs.ROTATE,MIDDLE:fs.DOLLY,RIGHT:fs.PAN}),Ce(this,"touches",{ONE:ds.ROTATE,TWO:ds.DOLLY_PAN}),Ce(this,"target0"),Ce(this,"position0"),Ce(this,"zoom0"),Ce(this,"_domElementKeyEvents",null),Ce(this,"getPolarAngle"),Ce(this,"getAzimuthalAngle"),Ce(this,"setPolarAngle"),Ce(this,"setAzimuthalAngle"),Ce(this,"getDistance"),Ce(this,"getZoomScale"),Ce(this,"listenToKeyEvents"),Ce(this,"stopListenToKeyEvents"),Ce(this,"saveState"),Ce(this,"reset"),Ce(this,"update"),Ce(this,"connect"),Ce(this,"dispose"),Ce(this,"dollyIn"),Ce(this,"dollyOut"),Ce(this,"getScale"),Ce(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=C=>{let G=Zm(C,2*Math.PI),ce=u.phi;ce<0&&(ce+=2*Math.PI),G<0&&(G+=2*Math.PI);let A=Math.abs(G-ce);2*Math.PI-A<A&&(G<ce?G+=2*Math.PI:ce+=2*Math.PI),f.phi=G-ce,i.update()},this.setAzimuthalAngle=C=>{let G=Zm(C,2*Math.PI),ce=u.theta;ce<0&&(ce+=2*Math.PI),G<0&&(G+=2*Math.PI);let A=Math.abs(G-ce);2*Math.PI-A<A&&(G<ce?G+=2*Math.PI:ce+=2*Math.PI),f.theta=G-ce,i.update()},this.getDistance=()=>i.object.position.distanceTo(i.target),this.listenToKeyEvents=C=>{C.addEventListener("keydown",se),this._domElementKeyEvents=C},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",se),this._domElementKeyEvents=null},this.saveState=()=>{i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=()=>{i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(r),i.update(),c=a.NONE},this.update=(()=>{const C=new N,G=new N(0,1,0),ce=new bi().setFromUnitVectors(e.up,G),A=ce.clone().invert(),Q=new N,H=new bi,j=2*Math.PI;return function(){const le=i.object.position;ce.setFromUnitVectors(e.up,G),A.copy(ce).invert(),C.copy(le).sub(i.target),C.applyQuaternion(ce),u.setFromVector3(C),i.autoRotate&&c===a.NONE&&X(K()),i.enableDamping?(u.theta+=f.theta*i.dampingFactor,u.phi+=f.phi*i.dampingFactor):(u.theta+=f.theta,u.phi+=f.phi);let Le=i.minAzimuthAngle,nt=i.maxAzimuthAngle;isFinite(Le)&&isFinite(nt)&&(Le<-Math.PI?Le+=j:Le>Math.PI&&(Le-=j),nt<-Math.PI?nt+=j:nt>Math.PI&&(nt-=j),Le<=nt?u.theta=Math.max(Le,Math.min(nt,u.theta)):u.theta=u.theta>(Le+nt)/2?Math.max(Le,u.theta):Math.min(nt,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.zoomToCursor&&E||i.object.isOrthographicCamera?u.radius=at(u.radius):u.radius=at(u.radius*h),C.setFromSpherical(u),C.applyQuaternion(A),le.copy(i.target).add(C),i.object.matrixAutoUpdate||i.object.updateMatrix(),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),p.set(0,0,0));let Dt=!1;if(i.zoomToCursor&&E){let Je=null;if(i.object instanceof $t&&i.object.isPerspectiveCamera){const Jt=C.length();Je=at(Jt*h);const pn=Jt-Je;i.object.position.addScaledVector(P,pn),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Jt=new N(D.x,D.y,0);Jt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),Dt=!0;const pn=new N(D.x,D.y,0);pn.unproject(i.object),i.object.position.sub(pn).add(Jt),i.object.updateMatrixWorld(),Je=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Je!==null&&(i.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Je).add(i.object.position):(ec.origin.copy(i.object.position),ec.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ec.direction))<m3?e.lookAt(i.target):($m.setFromNormalAndCoplanarPoint(i.object.up,i.target),ec.intersectPlane($m,i.target))))}else i.object instanceof ks&&i.object.isOrthographicCamera&&(Dt=h!==1,Dt&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix()));return h=1,E=!1,Dt||Q.distanceToSquared(i.object.position)>l||8*(1-H.dot(i.object.quaternion))>l?(i.dispatchEvent(r),Q.copy(i.object.position),H.copy(i.object.quaternion),Dt=!1,!0):!1}})(),this.connect=C=>{i.domElement=C,i.domElement.style.touchAction="none",i.domElement.addEventListener("contextmenu",te),i.domElement.addEventListener("pointerdown",x),i.domElement.addEventListener("pointercancel",$),i.domElement.addEventListener("wheel",Me)},this.dispose=()=>{var C,G,ce,A,Q,H;i.domElement&&(i.domElement.style.touchAction="auto"),(C=i.domElement)==null||C.removeEventListener("contextmenu",te),(G=i.domElement)==null||G.removeEventListener("pointerdown",x),(ce=i.domElement)==null||ce.removeEventListener("pointercancel",$),(A=i.domElement)==null||A.removeEventListener("wheel",Me),(Q=i.domElement)==null||Q.ownerDocument.removeEventListener("pointermove",O),(H=i.domElement)==null||H.ownerDocument.removeEventListener("pointerup",$),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",se)};const i=this,r={type:"change"},s={type:"start"},o={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=a.NONE;const l=1e-6,u=new Sm,f=new Sm;let h=1;const p=new N,g=new Oe,_=new Oe,m=new Oe,d=new Oe,T=new Oe,S=new Oe,M=new Oe,L=new Oe,w=new Oe,P=new N,D=new Oe;let E=!1;const v=[],I={};function K(){return 2*Math.PI/60/60*i.autoRotateSpeed}function z(){return Math.pow(.95,i.zoomSpeed)}function X(C){i.reverseOrbit||i.reverseHorizontalOrbit?f.theta+=C:f.theta-=C}function J(C){i.reverseOrbit||i.reverseVerticalOrbit?f.phi+=C:f.phi-=C}const W=(()=>{const C=new N;return function(ce,A){C.setFromMatrixColumn(A,0),C.multiplyScalar(-ce),p.add(C)}})(),ne=(()=>{const C=new N;return function(ce,A){i.screenSpacePanning===!0?C.setFromMatrixColumn(A,1):(C.setFromMatrixColumn(A,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(ce),p.add(C)}})(),V=(()=>{const C=new N;return function(ce,A){const Q=i.domElement;if(Q&&i.object instanceof $t&&i.object.isPerspectiveCamera){const H=i.object.position;C.copy(H).sub(i.target);let j=C.length();j*=Math.tan(i.object.fov/2*Math.PI/180),W(2*ce*j/Q.clientHeight,i.object.matrix),ne(2*A*j/Q.clientHeight,i.object.matrix)}else Q&&i.object instanceof ks&&i.object.isOrthographicCamera?(W(ce*(i.object.right-i.object.left)/i.object.zoom/Q.clientWidth,i.object.matrix),ne(A*(i.object.top-i.object.bottom)/i.object.zoom/Q.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function re(C){i.object instanceof $t&&i.object.isPerspectiveCamera||i.object instanceof ks&&i.object.isOrthographicCamera?h=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function fe(C){re(h/C)}function Se(C){re(h*C)}function Ve(C){if(!i.zoomToCursor||!i.domElement)return;E=!0;const G=i.domElement.getBoundingClientRect(),ce=C.clientX-G.left,A=C.clientY-G.top,Q=G.width,H=G.height;D.x=ce/Q*2-1,D.y=-(A/H)*2+1,P.set(D.x,D.y,1).unproject(i.object).sub(i.object.position).normalize()}function at(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function Y(C){g.set(C.clientX,C.clientY)}function ie(C){Ve(C),M.set(C.clientX,C.clientY)}function xe(C){d.set(C.clientX,C.clientY)}function ae(C){_.set(C.clientX,C.clientY),m.subVectors(_,g).multiplyScalar(i.rotateSpeed);const G=i.domElement;G&&(X(2*Math.PI*m.x/G.clientHeight),J(2*Math.PI*m.y/G.clientHeight)),g.copy(_),i.update()}function De(C){L.set(C.clientX,C.clientY),w.subVectors(L,M),w.y>0?fe(z()):w.y<0&&Se(z()),M.copy(L),i.update()}function Fe(C){T.set(C.clientX,C.clientY),S.subVectors(T,d).multiplyScalar(i.panSpeed),V(S.x,S.y),d.copy(T),i.update()}function We(C){Ve(C),C.deltaY<0?Se(z()):C.deltaY>0&&fe(z()),i.update()}function Mt(C){let G=!1;switch(C.code){case i.keys.UP:V(0,i.keyPanSpeed),G=!0;break;case i.keys.BOTTOM:V(0,-i.keyPanSpeed),G=!0;break;case i.keys.LEFT:V(i.keyPanSpeed,0),G=!0;break;case i.keys.RIGHT:V(-i.keyPanSpeed,0),G=!0;break}G&&(C.preventDefault(),i.update())}function qe(){if(v.length==1)g.set(v[0].pageX,v[0].pageY);else{const C=.5*(v[0].pageX+v[1].pageX),G=.5*(v[0].pageY+v[1].pageY);g.set(C,G)}}function St(){if(v.length==1)d.set(v[0].pageX,v[0].pageY);else{const C=.5*(v[0].pageX+v[1].pageX),G=.5*(v[0].pageY+v[1].pageY);d.set(C,G)}}function R(){const C=v[0].pageX-v[1].pageX,G=v[0].pageY-v[1].pageY,ce=Math.sqrt(C*C+G*G);M.set(0,ce)}function dn(){i.enableZoom&&R(),i.enablePan&&St()}function Ke(){i.enableZoom&&R(),i.enableRotate&&qe()}function je(C){if(v.length==1)_.set(C.pageX,C.pageY);else{const ce=de(C),A=.5*(C.pageX+ce.x),Q=.5*(C.pageY+ce.y);_.set(A,Q)}m.subVectors(_,g).multiplyScalar(i.rotateSpeed);const G=i.domElement;G&&(X(2*Math.PI*m.x/G.clientHeight),J(2*Math.PI*m.y/G.clientHeight)),g.copy(_)}function be(C){if(v.length==1)T.set(C.pageX,C.pageY);else{const G=de(C),ce=.5*(C.pageX+G.x),A=.5*(C.pageY+G.y);T.set(ce,A)}S.subVectors(T,d).multiplyScalar(i.panSpeed),V(S.x,S.y),d.copy(T)}function mt(C){const G=de(C),ce=C.pageX-G.x,A=C.pageY-G.y,Q=Math.sqrt(ce*ce+A*A);L.set(0,Q),w.set(0,Math.pow(L.y/M.y,i.zoomSpeed)),fe(w.y),M.copy(L)}function Ae(C){i.enableZoom&&mt(C),i.enablePan&&be(C)}function b(C){i.enableZoom&&mt(C),i.enableRotate&&je(C)}function x(C){var G,ce;i.enabled!==!1&&(v.length===0&&((G=i.domElement)==null||G.ownerDocument.addEventListener("pointermove",O),(ce=i.domElement)==null||ce.ownerDocument.addEventListener("pointerup",$)),ge(C),C.pointerType==="touch"?pe(C):Z(C))}function O(C){i.enabled!==!1&&(C.pointerType==="touch"?Ze(C):q(C))}function $(C){var G,ce,A;Pe(C),v.length===0&&((G=i.domElement)==null||G.releasePointerCapture(C.pointerId),(ce=i.domElement)==null||ce.ownerDocument.removeEventListener("pointermove",O),(A=i.domElement)==null||A.ownerDocument.removeEventListener("pointerup",$)),i.dispatchEvent(o),c=a.NONE}function Z(C){let G;switch(C.button){case 0:G=i.mouseButtons.LEFT;break;case 1:G=i.mouseButtons.MIDDLE;break;case 2:G=i.mouseButtons.RIGHT;break;default:G=-1}switch(G){case fs.DOLLY:if(i.enableZoom===!1)return;ie(C),c=a.DOLLY;break;case fs.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;xe(C),c=a.PAN}else{if(i.enableRotate===!1)return;Y(C),c=a.ROTATE}break;case fs.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;Y(C),c=a.ROTATE}else{if(i.enablePan===!1)return;xe(C),c=a.PAN}break;default:c=a.NONE}c!==a.NONE&&i.dispatchEvent(s)}function q(C){if(i.enabled!==!1)switch(c){case a.ROTATE:if(i.enableRotate===!1)return;ae(C);break;case a.DOLLY:if(i.enableZoom===!1)return;De(C);break;case a.PAN:if(i.enablePan===!1)return;Fe(C);break}}function Me(C){i.enabled===!1||i.enableZoom===!1||c!==a.NONE&&c!==a.ROTATE||(C.preventDefault(),i.dispatchEvent(s),We(C),i.dispatchEvent(o))}function se(C){i.enabled===!1||i.enablePan===!1||Mt(C)}function pe(C){switch(Ne(C),v.length){case 1:switch(i.touches.ONE){case ds.ROTATE:if(i.enableRotate===!1)return;qe(),c=a.TOUCH_ROTATE;break;case ds.PAN:if(i.enablePan===!1)return;St(),c=a.TOUCH_PAN;break;default:c=a.NONE}break;case 2:switch(i.touches.TWO){case ds.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;dn(),c=a.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ke(),c=a.TOUCH_DOLLY_ROTATE;break;default:c=a.NONE}break;default:c=a.NONE}c!==a.NONE&&i.dispatchEvent(s)}function Ze(C){switch(Ne(C),c){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;je(C),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;be(C),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ae(C),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;b(C),i.update();break;default:c=a.NONE}}function te(C){i.enabled!==!1&&C.preventDefault()}function ge(C){v.push(C)}function Pe(C){delete I[C.pointerId];for(let G=0;G<v.length;G++)if(v[G].pointerId==C.pointerId){v.splice(G,1);return}}function Ne(C){let G=I[C.pointerId];G===void 0&&(G=new Oe,I[C.pointerId]=G),G.set(C.pageX,C.pageY)}function de(C){const G=C.pointerId===v[0].pointerId?v[1]:v[0];return I[G.pointerId]}this.dollyIn=(C=z())=>{Se(C),i.update()},this.dollyOut=(C=z())=>{fe(C),i.update()},this.getScale=()=>h,this.setScale=C=>{re(C),i.update()},this.getZoomScale=()=>z(),t!==void 0&&this.connect(t),this.update()}}function Vc(n){if(typeof TextDecoder<"u")return new TextDecoder().decode(n);let e="";for(let t=0,i=n.length;t<i;t++)e+=String.fromCharCode(n[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const $r="srgb",Zi="srgb-linear",Jm=3001,_3=3e3;class v3 extends To{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new S3(t)}),this.register(function(t){return new T3(t)}),this.register(function(t){return new D3(t)}),this.register(function(t){return new N3(t)}),this.register(function(t){return new U3(t)}),this.register(function(t){return new A3(t)}),this.register(function(t){return new w3(t)}),this.register(function(t){return new R3(t)}),this.register(function(t){return new C3(t)}),this.register(function(t){return new E3(t)}),this.register(function(t){return new P3(t)}),this.register(function(t){return new b3(t)}),this.register(function(t){return new I3(t)}),this.register(function(t){return new L3(t)}),this.register(function(t){return new y3(t)}),this.register(function(t){return new F3(t)}),this.register(function(t){return new O3(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Zo.extractUrlBase(e);o=Zo.resolveURL(l,this.path)}else o=Zo.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Y_(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Vc(new Uint8Array(e.slice(0,4)))===e1){try{o[Ye.KHR_BINARY_GLTF]=new B3(e)}catch(u){r&&r(u);return}s=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(Vc(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Z3(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){const u=this.pluginCallbacks[l](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){const u=s.extensionsUsed[l],f=s.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:o[u]=new M3;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[u]=new k3(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[u]=new z3;break;case Ye.KHR_MESH_QUANTIZATION:o[u]=new H3;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function x3(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class y3{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ue(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Zi);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new fy(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new uy(u),l.distance=f;break;case"spot":l=new q_(u),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,zi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class M3{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return qr}extendParams(e,t,i){const r=[];e.color=new Ue(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zi),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,$r))}return Promise.all(r)}}class E3{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class S3{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(a,a)}return Promise.all(s)}}class T3{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class b3{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class A3{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zi)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,$r)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class w3{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class R3{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],Zi),Promise.all(s)}}class C3{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class P3{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],Zi),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,$r)),Promise.all(s)}}class L3{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class I3{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class D3{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class N3{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class U3{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class F3{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=r.byteOffset||0,l=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,h,r.mode,r.filter),p})})}else return null}}class O3{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const l of r.primitives)if(l.mode!==Vn.TRIANGLES&&l.mode!==Vn.TRIANGLE_STRIP&&l.mode!==Vn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),f=u.isGroup?u.children:[u],h=l[0].count,p=[];for(const g of f){const _=new ze,m=new N,d=new bi,T=new N(1,1,1),S=new kx(g.geometry,g.material,h);for(let M=0;M<h;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,M),c.SCALE&&T.fromBufferAttribute(c.SCALE,M),S.setMatrixAt(M,_.compose(m,d,T));for(const M in c)if(M==="_COLOR_0"){const L=c[M];S.instanceColor=new Dh(L.array,L.itemSize,L.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);Lt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),p.push(S)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const e1="glTF",ko=12,Qm={JSON:1313821514,BIN:5130562};class B3{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ko);if(this.header={magic:Vc(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==e1)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ko,r=new DataView(e,ko);let s=0;for(;s<i;){const o=r.getUint32(s,!0);s+=4;const a=r.getUint32(s,!0);if(s+=4,a===Qm.JSON){const c=new Uint8Array(e,ko+s,o);this.content=Vc(c)}else if(a===Qm.BIN){const c=ko+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class k3{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const f=Fh[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=Fh[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],p=zs[h.componentType];l[f]=p.name,c[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){r.decodeDracoFile(u,function(p){for(const g in p.attributes){const _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}f(p)},a,l,Zi,h)})})}}class z3{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class H3{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class t1 extends xa{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-t,f=(i-t)/u,h=f*f,p=h*f,g=e*l,_=g-l,m=-2*p+3*h,d=p-h,T=1-m,S=d-h+f;for(let M=0;M!==a;M++){const L=o[_+M+a],w=o[_+M+c]*u,P=o[g+M+a],D=o[g+M]*u;s[M]=T*L+S*w+m*P+d*D}return s}}const V3=new bi;class G3 extends t1{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return V3.fromArray(s).normalize().toArray(s),s}}const Vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},eg={9728:yn,9729:jn,9984:v_,9985:cc,9986:Go,9987:Xi},tg={33071:gr,33648:Oc,10497:no},Eu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...c3>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ur={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},W3={CUBICSPLINE:void 0,LINEAR:aa,STEP:oa},Su={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function X3(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Qf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ti})),n.DefaultMaterial}function Hr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function zi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function j3(n,e,t){let i=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const f=e[l];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;c.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],f=l[1],h=l[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function Y3(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function q3(n){let e;const t=n.extensions&&n.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Tu(t.attributes):e=n.indices+":"+Tu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Tu(n.targets[i]);return e}function Tu(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Oh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function K3(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const $3=new ze;class Z3{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new x3,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new ay(this.options.manager):this.textureLoader=new py(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Y_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Hr(s,a,r),zi(a,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Zo.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Eu[r.type],a=zs[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new hn(l,o,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Eu[r.type],l=zs[r.componentType],u=l.BYTES_PER_ELEMENT,f=u*c,h=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(p&&p!==f){const d=Math.floor(h/p),T="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+d+":"+r.count;let S=t.cache.get(T);S||(_=new l(a,d*p,r.count*p/u),S=new Nx(_,p/u),t.cache.add(T,S)),m=new Kf(S,c,h%p/u,g)}else a===null?_=new l(r.count*c):_=new l(a,h,r.count*c),m=new hn(_,c,g);if(r.sparse!==void 0){const d=Eu.SCALAR,T=zs[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,L=new T(o[1],S,r.sparse.count*d),w=new l(o[2],M,r.sparse.count*c);a!==null&&(m=new hn(m.array.slice(),m.itemSize,m.normalized));for(let P=0,D=L.length;P<D;P++){const E=L[P];if(m.setX(E,w[P*c]),c>=2&&m.setY(E,w[P*c+1]),c>=3&&m.setZ(E,w[P*c+2]),c>=4&&m.setW(E,w[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=eg[h.magFilter]||jn,u.minFilter=eg[h.minFilter]||Xi,u.wrapS=tg[h.wrapS]||no,u.wrapT=tg[h.wrapT]||no,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(f){l=!0;const h=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(h),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(f){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Zt(_);m.needsUpdate=!0,h(m)}),t.load(Zo.resolveURL(f,s.path),g,void 0,p)})}).then(function(f){return l===!0&&a.revokeObjectURL(c),zi(f,o),f.userData.mimeType=o.mimeType||K3(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(typeof r=="number"&&(r=r===Jm?$r:Zi),"colorSpace"in o?o.colorSpace=r:o.encoding=r===$r?Jm:_3),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new G_,ai.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new V_,ai.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Qf}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){const f=r[Ye.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),l.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Zi),a.opacity=h[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",f.baseColorTexture,$r)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=yi);const u=s.alphaMode||Su.OPAQUE;if(u===Su.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Su.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==qr&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==qr&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==qr){const f=s.emissiveFactor;a.emissive=new Ue().setRGB(f[0],f[1],f[2],Zi)}return s.emissiveTexture!==void 0&&o!==qr&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,$r)),Promise.all(l).then(function(){const f=new o(a);return s.name&&(f.name=s.name),zi(f,s),t.associations.set(f,{materials:e}),s.extensions&&Hr(r,f,s),f})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return ng(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=q3(l),f=r[u];if(f)o.push(f.promise);else{let h;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?h=s(l):h=ng(new Ci,l,t),r[u]={primitive:l,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?X3(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],f=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=o[p];let d;const T=l[p];if(m.mode===Vn.TRIANGLES||m.mode===Vn.TRIANGLE_STRIP||m.mode===Vn.TRIANGLE_FAN||m.mode===void 0)d=s.isSkinnedMesh===!0?new Fx(_,T):new vn(_,T),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Vn.TRIANGLE_STRIP?d.geometry=Km(d.geometry,R_):m.mode===Vn.TRIANGLE_FAN&&(d.geometry=Km(d.geometry,Lh));else if(m.mode===Vn.LINES)d=new Vx(_,T);else if(m.mode===Vn.LINE_STRIP)d=new Jf(_,T);else if(m.mode===Vn.LINE_LOOP)d=new Gx(_,T);else if(m.mode===Vn.POINTS)d=new Wx(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Y3(d,s),d.name=t.createUniqueName(s.name||"mesh_"+e),zi(d,s),m.extensions&&Hr(r,d,m),t.assignFinalMaterial(d),f.push(d)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&Hr(r,f[0],s),f[0];const h=new Kr;s.extensions&&Hr(r,h,s),t.associations.set(h,{meshes:e});for(let p=0,g=f.length;p<g;p++)h.add(f[p]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new $t(ox.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new ks(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),zi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const f=o[l];if(f){a.push(f);const h=new ze;s!==null&&h.fromArray(s.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new $f(a,c)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let f=0,h=r.channels.length;f<h;f++){const p=r.channels[f],g=r.samplers[p.sampler],_=p.target,m=_.node,d=r.parameters!==void 0?r.parameters[g.input]:g.input,T=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",T)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(f){const h=f[0],p=f[1],g=f[2],_=f[3],m=f[4],d=[];for(let T=0,S=h.length;T<S;T++){const M=h[T],L=p[T],w=g[T],P=_[T],D=m[T];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const E=i._createAnimationTracks(M,L,w,P,D);if(E)for(let v=0;v<E.length;v++)d.push(E[v])}return new ey(s,void 0,d)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],f=l[1],h=l[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,$3)});for(let p=0,g=f.length;p<g;p++)u.add(f[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new z_:l.length>1?u=new Kr:l.length===1?u=l[0]:u=new Lt,u!==l[0])for(let f=0,h=l.length;f<h;f++)u.add(l[f]);if(s.name&&(u.userData.name=s.name,u.name=o),zi(u,s),s.extensions&&Hr(i,u,s),s.matrix!==void 0){const f=new ze;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Kr;i.name&&(s.name=r.createUniqueName(i.name)),zi(s,i),i.extensions&&Hr(t,s,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,f=c.length;u<f;u++)s.add(c[u]);const l=u=>{const f=new Map;for(const[h,p]of r.associations)(h instanceof ai||h instanceof Zt)&&f.set(h,p);return u.traverse(h=>{const p=r.associations.get(h);p!=null&&f.set(h,p)}),f};return r.associations=l(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,c=[];ur[s.path]===ur.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(a);let l;switch(ur[s.path]){case ur.weights:l=co;break;case ur.rotation:l=lo;break;case ur.position:case ur.scale:l=uo;break;default:switch(i.itemSize){case 1:l=co;break;case 2:case 3:default:l=uo;break}break}const u=r.interpolation!==void 0?W3[r.interpolation]:aa,f=this._getArrayFromAccessor(i);for(let h=0,p=c.length;h<p;h++){const g=new l(c[h]+"."+ur[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Oh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof lo?G3:t1;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function J3(n,e,t){const i=e.attributes,r=new nr;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),a.normalized){const u=Oh(zs[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,c=new N;for(let l=0,u=s.length;l<u;l++){const f=s[l];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const _=Oh(zs[h.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Ri;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function ng(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=Fh[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return zi(n,e),J3(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?j3(n,e.targets,t):n})}const Q3=""+new URL("avatar-_5HXdlHn.glb",import.meta.url).href;var eb=Kn("<video>"),tb=Kn("<canvas>"),nb=Kn("<div>"),ib=Kn("<div><label>width</label><input type=number>"),rb=Kn("<div><label>margin</label><input type=number>"),sb=Kn("<div><label>visible</label><button>");function ob(n,e){for(const t of n.faceLandmarks)e.drawConnectors(t,rt.FACE_LANDMARKS_TESSELATION,{color:"#C0C0C070",lineWidth:1}),e.drawConnectors(t,rt.FACE_LANDMARKS_RIGHT_EYE,{color:"#FF3030"}),e.drawConnectors(t,rt.FACE_LANDMARKS_RIGHT_EYEBROW,{color:"#FF3030"}),e.drawConnectors(t,rt.FACE_LANDMARKS_LEFT_EYE,{color:"#30FF30"}),e.drawConnectors(t,rt.FACE_LANDMARKS_LEFT_EYEBROW,{color:"#30FF30"}),e.drawConnectors(t,rt.FACE_LANDMARKS_FACE_OVAL,{color:"#E0E0E0"}),e.drawConnectors(t,rt.FACE_LANDMARKS_LIPS,{color:"#E0E0E0"}),e.drawConnectors(t,rt.FACE_LANDMARKS_RIGHT_IRIS,{color:"#FF3030"}),e.drawConnectors(t,rt.FACE_LANDMARKS_LEFT_IRIS,{color:"#30FF30"})}const n1=()=>{const[n,e]=_n(!1),[t,i]=_n(125),[r,s]=_n(25),[o,a]=_n(),c=(()=>{var h=eb();return fr(()=>md(h,"width",t())),h})(),l=(()=>{var h=tb();return h.style.setProperty("position","absolute"),h.style.setProperty("top","0px"),h.style.setProperty("bottom","0px"),h.style.setProperty("left","0px"),h.style.setProperty("right","0px"),fr(()=>md(h,"width",t())),h})(),u=l.getContext("2d"),f=new an(u);return{name:"webcam-debugger",async setup(h){Zr(()=>{h.stream&&(c.srcObject=h.stream,c.addEventListener("loadeddata",()=>{c.play(),a(c.videoHeight/c.videoWidth)}))}),Zr(()=>{const p=o();p&&(c.style.width=t()+"px",c.style.height=t()*p+"px",l.style.width=t()+"px",l.style.height=t()*p+"px",l.width=c.videoWidth,l.height=c.videoHeight)})},tick(h){h.prediction&&(u.clearRect(0,0,c.videoWidth,c.videoHeight),ob(h.prediction,f))},overlay(){return(()=>{var h=nb();return h.style.setProperty("position","fixed"),h.style.setProperty("bottom","0px"),h.style.setProperty("left","0px"),h.style.setProperty("z-index","1"),ln(h,l,null),ln(h,c,null),fr(p=>{var g=n()?"flex":"none",_=`${r()}px`;return g!==p.e&&((p.e=g)!=null?h.style.setProperty("display",g):h.style.removeProperty("display")),_!==p.t&&((p.t=_)!=null?h.style.setProperty("margin",_):h.style.removeProperty("margin")),p},{e:void 0,t:void 0}),h})()},widget(){return[(()=>{var h=ib(),p=h.firstChild,g=p.nextSibling;return h.style.setProperty("display","grid"),h.style.setProperty("grid-template-columns","1fr 1fr"),g.$$input=_=>i(+_.currentTarget.value),fr(()=>g.value=t()),h})(),(()=>{var h=rb(),p=h.firstChild,g=p.nextSibling;return h.style.setProperty("display","grid"),h.style.setProperty("grid-template-columns","1fr 1fr"),g.$$input=_=>s(+_.currentTarget.value),fr(()=>g.value=r()),h})(),(()=>{var h=sb(),p=h.firstChild,g=p.nextSibling;return h.style.setProperty("display","grid"),h.style.setProperty("grid-template-columns","1fr 1fr"),g.$$click=()=>e(_=>!_),ln(g,()=>n()?"visible":"hidden"),h})()]}}};fg(["input","click"]);function ab(n,e){function t(i){e(i),i.children.forEach(t)}t(n)}var cb=Kn("<canvas>"),lb=Kn("<div><div><button> cam</button><button>upload model</button><input hidden type=file></div><div><button></button><div>"),ub=Kn("<section><div><div></div><button>x</button></div><div>"),hb=Kn("<button>"),fb=Kn("<video hidden>"),db=Kn("<div><div><div>");const pb={webcam:n1};function mb(){const[n,e]=_n(),t=(()=>{var u=cb();return u.style.setProperty("position","absolute"),u.style.setProperty("top","0px"),u.style.setProperty("bottom","0px"),u.style.setProperty("left","0px"),u.style.setProperty("right","0px"),u})(),i=new a3({canvas:t,alpha:!0}),r=new $t(75,window.innerWidth/window.innerHeight,.1,1e3),s=new Dx,o=new v3,a=new g3(r,i.domElement);i.setSize(window.innerWidth,window.innerHeight),r.position.z=1;const c=new dy;c.color=new Ue("white"),c.intensity=1,s.add(c);const l=new q_;return l.color=new Ue("white"),l.position.set(3,3,3),l.decay=.5,l.intensity=1,l.lookAt(new N),s.add(l),Zr(()=>{const u=n();if(u){s.add(u.scene),s.rotateY(Math.PI),s.scale.x=3,s.scale.y=3,s.scale.z=3;const f=u.scene.children[0];f.material=new Xx,(u.scene.children[1]?.children).forEach(p=>{p.name!=="Facebaked_custom003_5"&&(p.material.depthWrite=!0,p.material.transparent=!1),p.material.side=Ti})}}),{gltf:n,canvas:t,scene:s,loadFromUrl(u){o.load(u,e)},loadFromBinary(u){o.parse(u,"",e)},render:()=>{i.render(s,r),a.update()},renderer:i,resize(u){r.aspect=u.width/u.height,r.updateProjectionMatrix(),i.setSize(u.width,u.height),i.render(s,r)},updatePrediction({facialTransformationMatrixes:u,faceBlendshapes:f}){const h=n();if(!h)return;const p=u[0]?.data;p&&h.scene.setRotationFromMatrix(new ze(...p)),f[0]?.categories.forEach(g=>{const _=g.displayName||g.categoryName;ab(h.scene,m=>{if(m instanceof vn&&m.morphTargetDictionary&&m.morphTargetInfluences){const d=m.morphTargetDictionary[_];m.morphTargetInfluences[d]=g.score}})})}}}function gb(n){const[e,t]=_n();let i;function r(s){const o=s.currentTarget.files?.[0];if(o){const a=new FileReader;a.onload=function(c){const l=c.target.result;n.threeManager.loadFromBinary(l)},a.readAsArrayBuffer(o)}}return(()=>{var s=lb(),o=s.firstChild,a=o.firstChild,c=a.firstChild,l=a.nextSibling,u=l.nextSibling,f=o.nextSibling,h=f.firstChild,p=h.nextSibling;s.style.setProperty("overflow","hidden"),s.style.setProperty("border-left","1px solid black"),s.style.setProperty("display","grid"),s.style.setProperty("grid-template-rows","30px 1fr"),s.style.setProperty("align-items","start"),o.style.setProperty("display","grid"),o.style.setProperty("grid-template-columns","1fr 1fr"),a.$$click=()=>n.setEnabled(_=>!_),ln(a,()=>n.enabled?"disable":"enable",c),l.$$click=()=>{i.click()},u.$$input=r;var g=i;return typeof g=="function"?dg(g,u):i=u,f.style.setProperty("display","grid"),ln(f,Is(wu,{get each(){return n.extensions},children:(_,m)=>(()=>{var d=ub(),T=d.firstChild,S=T.firstChild,M=S.nextSibling,L=T.nextSibling;return d.style.setProperty("display","grid"),d.style.setProperty("padding","5px"),d.style.setProperty("gap","5px"),T.style.setProperty("display","grid"),T.style.setProperty("grid-template-columns","1fr auto"),ln(S,()=>_.name),M.$$click=()=>n.setExtensions(Pp(w=>w.splice(m(),1))),L.style.setProperty("display","grid"),L.style.setProperty("gap","5px"),ln(L,()=>_.widget?.(n.state)),d})()}),h),h.$$click=()=>t(_=>!_),ln(h,()=>e()?"close":"add"),p.style.setProperty("padding","5px"),p.style.setProperty("display","grid"),p.style.setProperty("gap","5px"),ln(p,Is(M1,{get when(){return e()},get children(){return Is(wu,{get each(){return Object.entries(pb)},children:([_,m])=>(()=>{var d=hb();return d.$$click=()=>{n.setExtensions(Pp(T=>T.push(typeof m=="function"?m():m))),t(!1)},ln(d,_),d})()})}})),s})()}const _b=()=>{const n=mb(),e=fb(),[t,i]=Cp({get gltf(){return n.gltf()},prediction:void 0,scene:n.scene,stream:void 0}),[r,s]=_n(!0),[o,a]=_n(!1),[c,l]=Cp([n1()]),[u]=f1(async function(){const d=await Vr.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm");return rt.createFromOptions(d,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",delegate:"GPU"},outputFaceBlendshapes:!0,outputFacialTransformationMatrixes:!0,runningMode:"VIDEO",numFaces:1})});let f=-1,h;function p(m){const d=u();!d||!r()||((f!==e.currentTime||!h)&&(h=d.detectForVideo(e,m),f=e.currentTime),i({prediction:h}),n.updatePrediction(h))}function g(m){n.render(),o()&&p(m),c.forEach(d=>d.tick?.(t))}n.renderer.setAnimationLoop(g);async function _(m){const d=await navigator.mediaDevices.getUserMedia({video:!0});e.srcObject=d,i({stream:d}),e.addEventListener("loadeddata",()=>{e.play(),a(!0)})}return Zr(()=>{u()&&Zr(()=>{r()?_():(e.pause(),i({stream:void 0}))})}),Zr(hg(()=>c,m=>m.setup?.(t))),fd(()=>n.loadFromUrl(Q3)),(()=>{var m=db(),d=m.firstChild,T=d.firstChild;return m.style.setProperty("display","grid"),m.style.setProperty("grid-template-columns","1fr 300px"),m.style.setProperty("height","100vh"),m.style.setProperty("overflow","hidden"),dg(S=>{fd(()=>{new ResizeObserver(()=>{n.resize(S.getBoundingClientRect())}).observe(S)})},d),d.style.setProperty("position","relative"),d.style.setProperty("overflow","hidden"),T.style.setProperty("position","absolute"),T.style.setProperty("pointer-events","none"),ln(T,Is(wu,{each:c,children:S=>S.overlay?.(t)})),ln(d,e,null),ln(d,()=>n.canvas,null),ln(m,Is(gb,{get enabled(){return r()},extensions:c,setEnabled:s,setExtensions:l,state:t,threeManager:n}),null),m})()};fg(["click","input"]);S1(()=>Is(_b,{}),document.getElementById("root"));
