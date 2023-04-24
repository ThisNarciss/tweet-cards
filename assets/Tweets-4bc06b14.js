import{L as Dt,R as w,r as k,j as y,u as Ut}from"./index-401265c8.js";import{s as x,U as ie}from"./styled-components.browser.esm-67478ff5.js";function pt(e,t){return function(){return e.apply(t,arguments)}}const{toString:zt}=Object.prototype,{getPrototypeOf:ae}=Object,X=(e=>t=>{const n=zt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),P=e=>(e=e.toLowerCase(),t=>X(t)===e),J=e=>t=>typeof t===e,{isArray:L}=Array,B=J("undefined");function Ht(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&j(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const gt=P("ArrayBuffer");function It(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&gt(e.buffer),t}const Mt=J("string"),j=J("function"),mt=J("number"),le=e=>e!==null&&typeof e=="object",qt=e=>e===!0||e===!1,H=e=>{if(X(e)!=="object")return!1;const t=ae(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},$t=P("Date"),Xt=P("File"),Jt=P("Blob"),Gt=P("FileList"),Kt=e=>le(e)&&j(e.pipe),Wt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||j(e.append)&&((t=X(e))==="formdata"||t==="object"&&j(e.toString)&&e.toString()==="[object FormData]"))},Yt=P("URLSearchParams"),Vt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function bt(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const yt=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),wt=e=>!B(e)&&e!==yt;function te(){const{caseless:e}=wt(this)&&this||{},t={},n=(r,s)=>{const o=e&&bt(t,s)||s;H(t[o])&&H(r)?t[o]=te(t[o],r):H(r)?t[o]=te({},r):L(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&D(arguments[r],n);return t}const Zt=(e,t,n,{allOwnKeys:r}={})=>(D(t,(s,o)=>{n&&j(s)?e[o]=pt(s,n):e[o]=s},{allOwnKeys:r}),e),Qt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),en=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},tn=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ae(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},nn=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},rn=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!mt(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},sn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ae(Uint8Array)),on=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},an=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ln=P("HTMLFormElement"),cn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),me=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),un=P("RegExp"),xt=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},fn=e=>{xt(e,(t,n)=>{if(j(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(j(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},dn=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return L(e)?r(e):r(String(e).split(t)),n},hn=()=>{},pn=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Y="abcdefghijklmnopqrstuvwxyz",be="0123456789",Ot={DIGIT:be,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+be},gn=(e=16,t=Ot.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function mn(e){return!!(e&&j(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const bn=e=>{const t=new Array(10),n=(r,s)=>{if(le(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=L(r)?[]:{};return D(r,(i,l)=>{const u=n(i,s+1);!B(u)&&(o[l]=u)}),t[s]=void 0,o}}return r};return n(e,0)},a={isArray:L,isArrayBuffer:gt,isBuffer:Ht,isFormData:Wt,isArrayBufferView:It,isString:Mt,isNumber:mt,isBoolean:qt,isObject:le,isPlainObject:H,isUndefined:B,isDate:$t,isFile:Xt,isBlob:Jt,isRegExp:un,isFunction:j,isStream:Kt,isURLSearchParams:Yt,isTypedArray:sn,isFileList:Gt,forEach:D,merge:te,extend:Zt,trim:Vt,stripBOM:Qt,inherits:en,toFlatObject:tn,kindOf:X,kindOfTest:P,endsWith:nn,toArray:rn,forEachEntry:on,matchAll:an,isHTMLForm:ln,hasOwnProperty:me,hasOwnProp:me,reduceDescriptors:xt,freezeMethods:fn,toObjectSet:dn,toCamelCase:cn,noop:hn,toFiniteNumber:pn,findKey:bt,global:yt,isContextDefined:wt,ALPHABET:Ot,generateString:gn,isSpecCompliantForm:mn,toJSONObject:bn};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Tt=m.prototype,Et={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Et[e]={value:e}});Object.defineProperties(m,Et);Object.defineProperty(Tt,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Tt);return a.toFlatObject(e,i,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const yn=null;function ne(e){return a.isPlainObject(e)||a.isArray(e)}function vt(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ye(e,t,n){return e?e.concat(t).map(function(s,o){return s=vt(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function wn(e){return a.isArray(e)&&!e.some(ne)}const xn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function G(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,_){return!a.isUndefined(_[g])});const r=n.metaTokens,s=n.visitor||f,o=n.dots,i=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!u&&a.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?u&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function f(d,g,_){let T=d;if(d&&!_&&typeof d=="object"){if(a.endsWith(g,"{}"))g=r?g:g.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&wn(d)||(a.isFileList(d)||a.endsWith(g,"[]"))&&(T=a.toArray(d)))return g=vt(g),T.forEach(function(z,Bt){!(a.isUndefined(z)||z===null)&&t.append(i===!0?ye([g],Bt,o):i===null?g:g+"[]",c(z))}),!1}return ne(d)?!0:(t.append(ye(_,g,o),c(d)),!1)}const p=[],b=Object.assign(xn,{defaultVisitor:f,convertValue:c,isVisitable:ne});function h(d,g){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+g.join("."));p.push(d),a.forEach(d,function(T,N){(!(a.isUndefined(T)||T===null)&&s.call(t,T,a.isString(N)?N.trim():N,g,b))===!0&&h(T,g?g.concat(N):[N])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return h(e),t}function we(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ce(e,t){this._pairs=[],e&&G(e,this,t)}const _t=ce.prototype;_t.append=function(t,n){this._pairs.push([t,n])};_t.toString=function(t){const n=t?function(r){return t.call(this,r,we)}:we;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function On(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function At(e,t,n){if(!t)return e;const r=n&&n.encode||On,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ce(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Tn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const xe=Tn,jt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},En=typeof URLSearchParams<"u"?URLSearchParams:ce,vn=typeof FormData<"u"?FormData:null,_n=typeof Blob<"u"?Blob:null,An=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),jn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),v={isBrowser:!0,classes:{URLSearchParams:En,FormData:vn,Blob:_n},isStandardBrowserEnv:An,isStandardBrowserWebWorkerEnv:jn,protocols:["http","https","file","blob","url","data"]};function Pn(e,t){return G(e,new v.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return v.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Rn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Sn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Pt(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),u=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,u?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Sn(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Rn(r),s,n,0)}),n}return null}const kn={"Content-Type":void 0};function Nn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const K={transitional:jt,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Pt(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Pn(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return G(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Nn(t)):t}],transformResponse:[function(t){const n=this.transitional||K.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:v.classes.FormData,Blob:v.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){K.headers[t]={}});a.forEach(["post","put","patch"],function(t){K.headers[t]=a.merge(kn)});const ue=K,Cn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ln=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Cn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Oe=Symbol("internals");function F(e){return e&&String(e).trim().toLowerCase()}function I(e){return e===!1||e==null?e:a.isArray(e)?e.map(I):String(e)}function Fn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Bn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function V(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Dn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Un(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class W{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,u,c){const f=F(u);if(!f)throw new Error("header name must be a non-empty string");const p=a.findKey(s,f);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||u]=I(l))}const i=(l,u)=>a.forEach(l,(c,f)=>o(c,f,u));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Bn(t)?i(Ln(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=F(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Fn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=F(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||V(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=F(i),i){const l=a.findKey(r,i);l&&(!n||V(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||V(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=I(s),delete n[o];return}const l=t?Dn(o):String(o).trim();l!==o&&delete n[o],n[l]=I(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Oe]=this[Oe]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=F(i);r[l]||(Un(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}W.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(W.prototype);a.freezeMethods(W);const A=W;function Z(e,t){const n=this||ue,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Rt(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,m,{__CANCEL__:!0});function zn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Hn=v.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const u=[];u.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&u.push("expires="+new Date(s).toGMTString()),a.isString(o)&&u.push("path="+o),a.isString(i)&&u.push("domain="+i),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function In(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Mn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function St(e,t){return e&&!In(t)?Mn(e,t):t}const qn=v.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function $n(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Xn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),f=r[o];i||(i=c),n[s]=u,r[s]=c;let p=o,b=0;for(;p!==s;)b+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const h=f&&c-f;return h?Math.round(b*1e3/h):void 0}}function Te(e,t){let n=0;const r=Xn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,u=r(l),c=o<=i;n=o;const f={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:u||void 0,estimated:u&&i&&c?(i-o)/u:void 0,event:s};f[t?"download":"upload"]=!0,e(f)}}const Jn=typeof XMLHttpRequest<"u",Gn=Jn&&function(e){return new Promise(function(n,r){let s=e.data;const o=A.from(e.headers).normalize(),i=e.responseType;let l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(s)&&(v.isStandardBrowserEnv||v.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(h+":"+d))}const f=St(e.baseURL,e.url);c.open(e.method.toUpperCase(),At(f,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const h=A.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),g={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:h,config:e,request:c};zn(function(T){n(T),u()},function(T){r(T),u()},g),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const g=e.transitional||jt;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new m(d,g.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},v.isStandardBrowserEnv){const h=(e.withCredentials||qn(f))&&e.xsrfCookieName&&Hn.read(e.xsrfCookieName);h&&o.set(e.xsrfHeaderName,h)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(d,g){c.setRequestHeader(g,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Te(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Te(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=h=>{c&&(r(!h||h.type?new U(null,e,c):h),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=$n(f);if(b&&v.protocols.indexOf(b)===-1){r(new m("Unsupported protocol "+b+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},M={http:yn,xhr:Gn};a.forEach(M,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Kn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?M[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(M,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:M};function Q(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function Ee(e){return Q(e),e.headers=A.from(e.headers),e.data=Z.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Kn.getAdapter(e.adapter||ue.adapter)(e).then(function(r){return Q(e),r.data=Z.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return Rt(r)||(Q(e),r&&r.response&&(r.response.data=Z.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const ve=e=>e instanceof A?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(c,f,p){return a.isPlainObject(c)&&a.isPlainObject(f)?a.merge.call({caseless:p},c,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function s(c,f,p){if(a.isUndefined(f)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,f,p)}function o(c,f){if(!a.isUndefined(f))return r(void 0,f)}function i(c,f){if(a.isUndefined(f)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function l(c,f,p){if(p in t)return r(c,f);if(p in e)return r(void 0,c)}const u={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,f)=>s(ve(c),ve(f),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(f){const p=u[f]||s,b=p(e[f],t[f],f);a.isUndefined(b)&&p!==l||(n[f]=b)}),n}const kt="1.3.6",fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _e={};fe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+kt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!_e[i]&&(_e[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function Wn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],u=l===void 0||i(l,o,e);if(u!==!0)throw new m("option "+o+" must be "+u,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const re={assertOptions:Wn,validators:fe},R=re.validators;class ${constructor(t){this.defaults=t,this.interceptors={request:new xe,response:new xe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&re.assertOptions(r,{silentJSONParsing:R.transitional(R.boolean),forcedJSONParsing:R.transitional(R.boolean),clarifyTimeoutError:R.transitional(R.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:re.assertOptions(s,{encode:R.function,serialize:R.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=A.concat(i,o);const l=[];let u=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(u=u&&g.synchronous,l.unshift(g.fulfilled,g.rejected))});const c=[];this.interceptors.response.forEach(function(g){c.push(g.fulfilled,g.rejected)});let f,p=0,b;if(!u){const d=[Ee.bind(this),void 0];for(d.unshift.apply(d,l),d.push.apply(d,c),b=d.length,f=Promise.resolve(n);p<b;)f=f.then(d[p++],d[p++]);return f}b=l.length;let h=n;for(p=0;p<b;){const d=l[p++],g=l[p++];try{h=d(h)}catch(_){g.call(this,_);break}}try{f=Ee.call(this,h)}catch(d){return Promise.reject(d)}for(p=0,b=c.length;p<b;)f=f.then(c[p++],c[p++]);return f}getUri(t){t=C(this.defaults,t);const n=St(t.baseURL,t.url);return At(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){$.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(C(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}$.prototype[t]=n(),$.prototype[t+"Form"]=n(!0)});const q=$;class de{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new U(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new de(function(s){t=s}),cancel:t}}}const Yn=de;function Vn(e){return function(n){return e.apply(null,n)}}function Zn(e){return a.isObject(e)&&e.isAxiosError===!0}const se={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(se).forEach(([e,t])=>{se[t]=e});const Qn=se;function Nt(e){const t=new q(e),n=pt(q.prototype.request,t);return a.extend(n,q.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Nt(C(e,s))},n}const O=Nt(ue);O.Axios=q;O.CanceledError=U;O.CancelToken=Yn;O.isCancel=Rt;O.VERSION=kt;O.toFormData=G;O.AxiosError=m;O.Cancel=O.CanceledError;O.all=function(t){return Promise.all(t)};O.spread=Vn;O.isAxiosError=Zn;O.mergeConfig=C;O.AxiosHeaders=A;O.formToJSON=e=>Pt(a.isHTMLForm(e)?new FormData(e):e);O.HttpStatusCode=Qn;O.default=O;const he=O;he.defaults.baseURL="https://6442397876540ce22586f7fa.mockapi.io/api/v1";function er(e=3){return he.get("/users").then(t=>t.data.slice(0,e)).catch(t=>console.log(t))}function Ae(e,t){return he.put(`/users/${e}`,t).then(n=>n.data).catch(n=>console.log(n))}const tr=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 20px;
`,nr=x(Dt)`
  display: flex;
  align-items: center;
  gap: 5px;
  text-transform: uppercase;

  background-color: #f8f800;
  padding: 20px;
  border-radius: 10px;
  @keyframes scale {
    0% {
      transform: scale(0.9);
    }

    100% {
      transform: scale(1);
    }
  }
  animation: scale 1000ms infinite alternate ease-in-out;
`,rr=x.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`,sr=x.button`
  background-color: #00b0ff;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 300ms ease;

  :hover {
    background-color: #0093e0;
  }

  :active {
    transform: translateY(1px);
  }

  :disabled {
    background-color: #d9d9d9;
    color: #666;
    cursor: not-allowed;
  }
`,or=x.li`
  position: relative;
  padding: 20px;
  width: 380px;
  height: 460px;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`,ir=x.img`
  @keyframes changeFill {
    0% {
      fill: deeppink;
    }

    50% {
      fill: orange;
    }

    100% {
      fill: deepskyblue;
    }
  }
  animation-name: changeFill;
  animation-duration: 3000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`,ar=x.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,lr=x.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 10px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;x.img`
  object-fit: fill;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;const cr=x.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`,ur=x.div`
  width: 308px;
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
`,fr=x.img`
  @keyframes rotateY {
    0% {
      transform: perspective(400px) rotateY(0deg);
    }

    100% {
      transform: perspective(400px) rotateY(10deg);
    }
  }
  animation: rotateY 1500ms infinite alternate ease-in-out;
`,dr=x.div`
  margin-top: 242px;
`,je=x.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;
  color: #ebd8ff;
`,hr=x.button`
  width: 196px;
  padding: 14px;
  margin-top: 26px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  transition: background-color 250ms linear;
  background: ${({isFollow:e})=>e?"#5cd3a8":"#ebd8ff"};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: all 300ms ease;
  :hover {
    background-color: ${({isFollow:e})=>e?"#3a8167":"#8f829c"};
  }
  :active {
    transform: translateY(1px);
  }
  :disabled {
    background-color: #d9d9d9;
    color: #666;
    cursor: not-allowed;
  }
`,pr="/tweet-cards/assets/logo-goit-aec7c177.svg",gr="/tweet-cards/assets/picture-@1x-ad6b2e07.png",mr="data:image/png;base64,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";var br={"aria-busy":!0,role:"status"},Pe=globalThis&&globalThis.__assign||function(){return Pe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Pe.apply(this,arguments)},Re=globalThis&&globalThis.__assign||function(){return Re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Re.apply(this,arguments)},Se=globalThis&&globalThis.__assign||function(){return Se=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Se.apply(this,arguments)},ke=globalThis&&globalThis.__assign||function(){return ke=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},ke.apply(this,arguments)},Ne=globalThis&&globalThis.__assign||function(){return Ne=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ne.apply(this,arguments)},Ce=globalThis&&globalThis.__assign||function(){return Ce=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ce.apply(this,arguments)},Le=globalThis&&globalThis.__assign||function(){return Le=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Le.apply(this,arguments)},Ct=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},E=242.776657104492,yr=1.6,wr=ie(Fe||(Fe=Ct([`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`],[`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`])),E*.14,E,E*.11,E*.35,E,E*.35,E*.01,E,E*.99);x.path(Be||(Be=Ct([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),E*.01,E,wr,yr);var Fe,Be,De=globalThis&&globalThis.__assign||function(){return De=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},De.apply(this,arguments)},Ue=globalThis&&globalThis.__assign||function(){return Ue=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ue.apply(this,arguments)},ze=globalThis&&globalThis.__assign||function(){return ze=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},ze.apply(this,arguments)},He=globalThis&&globalThis.__assign||function(){return He=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},He.apply(this,arguments)},Ie=globalThis&&globalThis.__assign||function(){return Ie=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ie.apply(this,arguments)},Me=globalThis&&globalThis.__assign||function(){return Me=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Me.apply(this,arguments)},qe=globalThis&&globalThis.__assign||function(){return qe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},qe.apply(this,arguments)},xr=function(t,n){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof r[t]<"u")return r[t];if(t&&t.indexOf(".")>0){for(var s=t.split("."),o=s.length,i=r[s[0]],l=1;i!=null&&l<o;)i=i[s[l]],l+=1;if(typeof i<"u")return i}return n}},pe=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},$e=globalThis&&globalThis.__assign||function(){return $e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},$e.apply(this,arguments)},Or=ie(Xe||(Xe=pe([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));x.svg(Je||(Je=pe([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),Or,xr("speed","0.75"));x.polyline(Ge||(Ge=pe([`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`],[`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`])),function(e){return e.width});var Xe,Je,Ge,Ke=globalThis&&globalThis.__assign||function(){return Ke=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ke.apply(this,arguments)},We=globalThis&&globalThis.__assign||function(){return We=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},We.apply(this,arguments)},Ye=globalThis&&globalThis.__assign||function(){return Ye=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ye.apply(this,arguments)},ge=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Ve=globalThis&&globalThis.__assign||function(){return Ve=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ve.apply(this,arguments)},Tr=ie(Ze||(Ze=ge([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));x.polygon(Qe||(Qe=ge([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),Tr);x.svg(et||(et=ge([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var Ze,Qe,et,tt=globalThis&&globalThis.__assign||function(){return tt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},tt.apply(this,arguments)},nt=globalThis&&globalThis.__assign||function(){return nt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},nt.apply(this,arguments)},rt=globalThis&&globalThis.__assign||function(){return rt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},rt.apply(this,arguments)},st=globalThis&&globalThis.__assign||function(){return st=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},st.apply(this,arguments)},ot=globalThis&&globalThis.__assign||function(){return ot=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},ot.apply(this,arguments)},it=globalThis&&globalThis.__assign||function(){return it=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},it.apply(this,arguments)},at=globalThis&&globalThis.__assign||function(){return at=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},at.apply(this,arguments)},lt=globalThis&&globalThis.__assign||function(){return lt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},lt.apply(this,arguments)},ct=globalThis&&globalThis.__assign||function(){return ct=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},ct.apply(this,arguments)},ut=globalThis&&globalThis.__assign||function(){return ut=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},ut.apply(this,arguments)},oe=globalThis&&globalThis.__assign||function(){return oe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},oe.apply(this,arguments)};function Er(e){var t=e.visible,n=t===void 0?!0:t,r=e.width,s=r===void 0?"80":r,o=e.height,i=o===void 0?"80":o,l=e.colors,u=l===void 0?["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]:l,c=e.wrapperClass,f=c===void 0?"":c,p=e.wrapperStyle,b=p===void 0?{}:p,h=e.ariaLabel,d=h===void 0?"color-ring-loading":h;return n?w.createElement("svg",oe({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:s,height:i,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:f,style:b,"aria-label":d,"data-testid":"color-ring-svg"},br),w.createElement("defs",null,w.createElement("mask",{id:"ldio-4offds5dlws-mask"},w.createElement("circle",{cx:"50",cy:"50",r:"26",stroke:"#fff",strokeLinecap:"round",strokeDasharray:"122.52211349000194 40.840704496667314",strokeWidth:"9",transform:"rotate(198.018 50 50)"},w.createElement("animateTransform",{attributeName:"transform",type:"rotate",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"})))),w.createElement("g",{mask:"url(#ldio-4offds5dlws-mask)"},w.createElement("rect",{x:"14.5",y:"0",width:"15",height:"100",fill:u[0]},w.createElement("animate",{attributeName:"fill",values:u.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.8s"})),w.createElement("rect",{x:"28.5",y:"0",width:"15",height:"100",fill:u[1]},w.createElement("animate",{attributeName:"fill",values:u.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.6s"})),w.createElement("rect",{x:"42.5",y:"0",width:"15",height:"100",fill:u[2]},w.createElement("animate",{attributeName:"fill",values:u.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.4s"})),w.createElement("rect",{x:"56.5",y:"0",width:"15",height:"100",fill:u[3]},w.createElement("animate",{attributeName:"fill",values:u.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.2s"})),w.createElement("rect",{x:"70.5",y:"0",width:"15",height:"100",fill:u[4]},w.createElement("animate",{attributeName:"fill",values:u.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"0s"})))):null}var ft=globalThis&&globalThis.__assign||function(){return ft=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},ft.apply(this,arguments)},dt=globalThis&&globalThis.__assign||function(){return dt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},dt.apply(this,arguments)};function vr({user:{id:e,avatar:t,tweets:n,followers:r,following:s}}){const[o,i]=k.useState(s),[l,u]=k.useState(r),[c,f]=k.useState(!1),p=()=>{o?(f(!0),Ae(e,{followers:l-1,following:!1}).then(({followers:h,following:d})=>{i(d),u(h)}).catch(h=>console.log(h)).finally(()=>f(!1))):(f(!0),Ae(e,{followers:l+1,following:!0}).then(({followers:h,following:d})=>{i(d),u(h)}).catch(h=>console.log(h)).finally(()=>f(!1)))},b=()=>{const h=l.toString().split("");return h.length>3&&h.splice(h.length-3,0,","),h.join("")};return y.jsxs(or,{children:[y.jsx(ir,{src:pr}),y.jsx(ur,{children:y.jsx(fr,{src:gr})}),y.jsx(ar,{src:mr}),y.jsx(lr,{children:y.jsx(cr,{src:t})}),y.jsxs(dr,{children:[y.jsxs(je,{children:[n," tweets"]}),y.jsxs(je,{style:{marginTop:"16px"},children:[b()," followers"]})]}),y.jsxs(hr,{onClick:p,isFollow:o,children:[o?"Following":"Follow"," ",c&&y.jsx(Er,{visible:!0,height:"20",width:"20",ariaLabel:"blocks-loading",wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})]})]})}var Lt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ht=w.createContext&&w.createContext(Lt),S=globalThis&&globalThis.__assign||function(){return S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},S.apply(this,arguments)},_r=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};function Ft(e){return e&&e.map(function(t,n){return w.createElement(t.tag,S({key:n},t.attr),Ft(t.child))})}function Ar(e){return function(t){return w.createElement(jr,S({attr:S({},e.attr)},t),Ft(e.child))}}function jr(e){var t=function(n){var r=e.attr,s=e.size,o=e.title,i=_r(e,["attr","size","title"]),l=s||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),w.createElement("svg",S({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,i,{className:u,style:S(S({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&w.createElement("title",null,o),e.children)};return ht!==void 0?w.createElement(ht.Consumer,null,function(n){return t(n)}):t(Lt)}function Pr(e){return Ar({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H8z"}}]}]})(e)}const Rr=x.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,ee=x.button`
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  transition: all 300ms ease;
  background-color: ${({selected:e})=>e?"#1976d2":"#e2e5e8"};
  color: ${({selected:e})=>e?"#ffffff":"inherit"};
`;function Sr({addStatusCards:e,newStatus:t}){return y.jsxs(Rr,{children:[y.jsx(ee,{selected:t==="all",onClick:()=>e("all"),children:"All"}),y.jsx(ee,{selected:t==="follow",onClick:()=>e("follow"),children:"Follow"}),y.jsx(ee,{selected:t==="following",onClick:()=>e("following"),children:"Following"})]})}function kr(e,t){switch(t.type){case"all":return"all";case"follow":return"follow";case"following":return"following";default:return}}function Nr(){var b;const[e,t]=k.useState([]),[n,r]=k.useState(3),[s,o]=k.useReducer(kr,"all"),l=((b=Ut().state)==null?void 0:b.from)??"/";k.useEffect(()=>{er(n).then(h=>t(h)).catch(h=>console.log(h))},[n]);const u=()=>{r(h=>h+3)},c=h=>{o({type:h})},p=(h=>{switch(h){case"follow":return e.filter(({following:d})=>!d);case"following":return e.filter(({following:d})=>d);default:return e}})(s);return y.jsxs(tr,{children:[y.jsxs(nr,{to:l,children:[y.jsx(Pr,{}),"Go back"]}),y.jsx(Sr,{addStatusCards:c,newStatus:s}),y.jsx(rr,{children:p.map(h=>y.jsx(vr,{user:h},h.id))}),y.jsx(sr,{onClick:u,children:"Load more"})]})}function Fr(){return y.jsx("main",{children:y.jsx(Nr,{})})}export{Fr as default};
