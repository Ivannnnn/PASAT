var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,l=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&i(e,r,t[r]);if(n)for(var r of n(t))a.call(t,r)&&i(e,r,t[r]);return e},c=(e,n)=>t(e,r(n)),o=(e,t)=>{var r={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&n)for(var i of n(e))t.indexOf(i)<0&&a.call(e,i)&&(r[i]=e[i]);return r},d=(e,t,r)=>(i(e,"symbol"!=typeof t?t+"":t,r),r);import{r as u,j as m,A as h,R as f,a as p}from"./vendor.344f273c.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const g=["./assets/1.87b8b960.mp3","./assets/2.38725ff8.mp3","./assets/3.0c2a3216.mp3","./assets/4.702ee792.mp3","./assets/5.29637f5a.mp3","./assets/6.3feb2338.mp3","./assets/7.dcd6952b.mp3","./assets/8.83de17d4.mp3","./assets/9.a0c4d1ec.mp3"].map((e=>new Audio(e))),x=[1,1,.7,.6,.7,.6,.6,.6,.6];const v=class{constructor(e={}){d(this,"data",{numbers:[],solutions:[],correct:0,status:null}),this.config=((e,t)=>{const r=l({},e);for(let n in t)t[n]&&(r[n]=t[n]);return r})(v.defaultConfig,e),Object.assign(this,(()=>{const e={};let t=0;return{on:(r,n)=>(e[r]||(e[r]={}),e[r][++t]=n,btoa(r+"."+t)),off:t=>{const[r,n]=atob(t).split(".");e[r]&&delete e[r][n]},emit:(t,...r)=>{e[t]&&Object.values(e[t]).forEach((e=>e(...r)))}}})())}_updateData(e){"function"==typeof e?e(this.data):Object.assign(this.data,e),this.emit("update:data")}start(){this._updateData({status:"running"}),this.next()}end(){this.next=()=>{},this._updateData({status:"ended"}),this.emit("ended")}next(){const e=(t=1,r=9,Math.floor(Math.random()*(r-t+1)+t));var t,r;return this._updateData((t=>{this._isSolutionCorrect(t.solutions.length-1)&&t.correct++,t.solutions.push(null),t.numbers.push(e)})),"auditory"===this.config.mode&&function(e){const t=g[e-1];t.currentTime=x[e-1],t.play()}(e),e}setSolution(e){e=isNaN(parseInt(e))?null:parseInt(e),this._updateData((t=>{t.solutions[t.solutions.length-1]=e}))}_isSolutionCorrect(e){const{solutions:t,numbers:r}=this.data;return t[e]===r[e]+r[e-this.config.n]}get status(){return this.data.status}get lastWasCorrect(){return this._isSolutionCorrect(this.data.numbers.length-2)}get currentNumber(){return this.data.numbers[this.data.numbers.length-1]}get currentSolution(){return this.data.solutions[this.data.solutions.length-1]}get ready(){return this.data.numbers.length>this.config.n}get round(){return this.ready?this.data.numbers.length-this.config.n:0}};let b=v;d(b,"defaultConfig",{n:2,mode:"visual"});class N extends b{constructor(e){super(e),this.timeout=(()=>{let e=null;const t=()=>{clearTimeout(e),e=null};return{start:(r,n)=>{t(),e=setTimeout(r,n)},stop:t}})()}get isRunning(){return"running"===this.data.status}next(){this.round<=this.config.rounds?(super.next(),this.timeout.start(this.next.bind(this),this.config.interval)):this.end()}}class y extends b{}const C=(...e)=>e.map((e=>null==e?null:"string"==typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))).filter(Boolean).join(" ");const w=m.exports.jsx,k=m.exports.jsxs,j=m.exports.Fragment;function E({value:e,onClick:t,active:r,className:n}){return w("div",{onClick:t,className:C("w-44 h-44 flex justify-center items-center rounded-full cursor-pointer",{"z-10":r},r?"bg-green":"bg-gray-300",n),children:w("div",{className:"w-40 h-40 bg-white flex justify-center items-center rounded-full",children:w("div",{className:"text-3xl",children:e})})})}function L(e){var t=e,{direction:r,className:n}=t,s=o(t,["direction","className"]);return w("div",c(l({className:"cursor-pointer px-2 py-1"},s),{children:w("svg",{viewBox:"0 0 16 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:C({"transform rotate-180":"left"===r},n),children:w("path",{d:"M0.929688 23.5756L14.8161 12.1581M15.3296 13.0044L1.44317 1.58691",stroke:"black",strokeWidth:"2"})})}))}function M({on:e,run:t,children:r,className:n}){const s=u.exports.useRef();return u.exports.useEffect((()=>{const r=e=>{!e.cancelBubble&&t(e),e.cancelBubble=!0},n=Array.from(s.current.children).map((t=>new h(t,{[e]:r})));return()=>n.forEach((e=>e.destroy()))}),[t]),w("div",{ref:s,className:n,children:r})}function S({children:e,big:t=!1,value:r,onChange:n,min:s,max:a,step:i=1,className:l}){function c(){r<Math.min(a,1/0)&&n(r+i,1)}function o(){r>Math.max(s,-1/0)&&n(r-i,1)}return w(M,{on:"swipe",run:function({direction:e}){({Left:c,Right:o})[e]()},children:k("div",{className:C("border-gray-500 border-2 rounded-full flex justify-between items-center select-none",t?"py-2 px-3 w-40":"w-28 py-2 px-2",l),children:[w(L,{direction:"left",onClick:o,className:t?"w-4 h-7":"w-3 h-4"}),e(r),w(L,{onClick:c,className:t?"w-4 h-7":"w-3 h-4"})]})})}const O={eye:e=>k(j,{children:[w("path",l({d:"M33.8955 20.3206C31.0822 15.2578 27.1052 13 21 13C14.8948 13 10.9178 15.2578 8.10446 20.3206C8.00658 20.4966 7.98547 20.6931 8.0085 20.8816C7.98547 21.0702 8.00658 21.2666 8.10446 21.4427C10.9178 26.5055 14.8948 28.7633 21 28.7633C27.1052 28.7633 31.0822 26.5055 33.8955 21.4427C33.9934 21.2666 34.0145 21.0702 33.9915 20.8816C34.0145 20.6931 33.9934 20.4966 33.8955 20.3206ZM21 26.1361C18.3095 26.1361 16.1209 23.7791 16.1209 20.8816C16.1209 17.9842 18.3095 15.6272 21 15.6272C23.6905 15.6272 25.8791 17.9842 25.8791 20.8816C25.8791 23.7791 23.6905 26.1361 21 26.1361ZM9.69437 20.8816C11.109 18.4347 13.1665 16.0199 17.3055 15.1219C15.6093 16.3876 14.4945 18.4959 14.4945 20.8816C14.4945 23.2674 15.6093 25.3756 17.3055 26.6413C13.1665 25.7434 11.109 23.3285 9.69437 20.8816ZM24.6945 26.6413C26.3907 25.3756 27.5055 23.2674 27.5055 20.8816C27.5055 18.4959 26.3907 16.3876 24.6945 15.1219C28.8335 16.0199 30.891 18.4347 32.3056 20.8816C30.891 23.3285 28.8335 25.7434 24.6945 26.6413Z",fill:"#686868"},e)),w("path",l({d:"M23.2899 19.8671L23.1681 19.883C22.3571 19.883 21.6826 19.1954 21.6339 18.3174C21.6201 18.0837 21.5206 17.8647 21.3565 17.7108C21.1913 17.5568 20.9764 17.4907 20.7593 17.4975C19.1202 17.6332 17.8369 19.1202 17.8369 20.8819C17.8369 22.76 19.2558 24.2879 20.9997 24.2879C22.7436 24.2879 24.1624 22.76 24.1624 20.8819C24.1624 20.8112 24.156 20.7417 24.1465 20.6778C24.1137 20.2012 23.6986 19.8386 23.2899 19.8671Z",fill:"#686868"},e))]}),speaker:e=>k(j,{children:[w("path",l({d:"M24.9375 16.4834L23.4512 17.9697C24.2133 18.7319 24.6844 19.7845 24.6844 20.9472C24.6844 22.1098 24.2133 23.1625 23.4512 23.9246L24.9375 25.4109C26.0812 24.2672 26.7897 22.6883 26.7897 20.9472C26.7897 19.2061 26.0812 17.6271 24.9375 16.4834Z",fill:"#FEFEFE"},e)),w("path",l({d:"M27.913 13.5078L26.4277 14.9931C27.9514 16.5173 28.8941 18.6226 28.8941 20.948C28.8941 23.2733 27.9514 25.3786 26.4277 26.9028L27.913 28.3881C29.8189 26.4818 30.9994 23.8501 30.9994 20.948C30.9994 18.0458 29.8189 15.4142 27.913 13.5078Z",fill:"#FEFEFE"},e)),w("path",l({d:"M19.4212 14.9701V26.9103L14.5043 21.9886H13.1053V19.8949H14.5048L19.4212 14.9701ZM21.5265 12H19.4117L13.6316 17.7896H11V24.0939H13.6316L19.427 29.8951H21.5265V12Z",fill:"#FEFEFE"},e))]})};function $(e){var t=e,{svg:r,className:n,active:s}=t,a=o(t,["svg","className","active"]);return w("svg",c(l({className:C("w-12 h-12 rounded-full bg-white cursor-pointer",{"bg-white border-gray-300 border-2":!s,"bg-green border-green-500 border-2":s},n),viewBox:"0 0 42 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a),{children:O[r]({fill:s?"#fff":"#686868"})}))}function P({value:e,onChange:t,className:r}){return k("div",{className:C("flex",r),children:[w($,{svg:"eye",active:"visual"===e,onClick:()=>t("visual"),className:"mr-2"}),w($,{svg:"speaker",active:"auditory"===e,onClick:()=>t("auditory")})]})}function F({children:e,onClick:t}){return w("div",{onClick:t,className:"w-72 h-20 bg-green rounded-full flex items-center justify-center cursor-pointer border-2 border-green-500 flex-shrink-0",children:w("div",{className:"text-white font-semibold tracking text-4xl",children:e})})}function Z({start:e}){const[t,r]=function(e){const[t,r]=u.exports.useState(e);return[t,e=>r((t=>l(l({},t),"function"==typeof e?e(t):e)))]}({type:"competitive",n:2,interval:2700,rounds:10,mode:"visual"});return w(M,{on:"swipe",run:({direction:r})=>"Left"===r&&e(t),children:k("div",{className:"p-4 bg-gray-200 h-screen flex flex-col items-center justify-center",children:[k("div",{className:"flex mb-8 relative left-5 w-88",children:[w(E,{value:"Game",active:"competitive"===t.type,onClick:()=>r({type:"competitive"})}),w(E,{value:"Practice",active:"practice"===t.type,className:"relative -left-10",onClick:()=>r({type:"practice"})})]}),w("h3",{className:"text-3xl text-gray-500 mb-2 tracking-wider",children:"N"}),w(S,{big:!0,value:t.n,onChange:e=>r({n:e}),min:0,max:5,className:"mb-3",children:e=>w("div",{className:"font-black text-green text-3xl",children:e})}),w("h3",{className:"text-md text-gray-500 mb-1 tracking-wider",children:"interval"}),w(S,{value:t.interval,onChange:e=>r({interval:e}),min:1e3,max:5e3,step:100,className:"mb-3",children:e=>k("div",{className:"font-semibold text-md",children:[w("span",{className:"text-green",children:e/1e3}),w("span",{className:"text-gray-400",children:"s"})]})}),w("h3",{className:"text-md text-gray-500 mb-1 tracking-wider",children:"mode"}),w(P,{className:"mb-16",value:t.mode,onChange:e=>r({mode:e})}),w(F,{onClick:()=>e(t),children:"Start"})]})})}function R(e){var t=e,{children:r,className:n,onTap:s}=t;const a=function({duration:e,width:t,outerWidth:r,innerColor:n,outerColor:s}){return{circular:{width:t+"px",height:t+"px"},inner:{width:t-r+"px",height:t-r+"px",margin:`-${(t-r)/2}px 0 0 -${(t-r)/2}px`,background:n},leftProgress:{animation:`left ${e/2}ms linear both`,clip:`rect(0, ${t/2}px, ${t}px, 0)`,background:s},rightProgress:{animation:`right ${e/2}ms linear both`,animationDelay:e/2+"ms",clip:`rect(0, ${t/2}px, ${t}px, 0)`,background:s},bar:{clip:`rect(0, ${t}px, ${t}px, ${t/2}px)`}}}(o(t,["children","className","onTap"]));return w(M,{on:"tap",run:s,children:k("div",{className:C("circular",n),style:a.circular,children:[w("div",{className:"inner",style:a.inner}),w("div",{className:"inside",children:r}),k("div",{className:"circle",children:[w("div",{className:"bar left",style:a.bar,children:w("div",{className:"progress",style:a.leftProgress})}),w("div",{className:"bar right",style:a.bar,children:w("div",{className:"progress",style:a.rightProgress})})]})]})})}function T({value:e="",className:t}){return e=String(e||"").padStart(2," ").split(""),k("div",{className:C("flex m-3",t),children:[w("div",{className:"w-24 h-28 bg-gray-300 flex items-center justify-center text-7xl text-center mr-2",children:e[0]}),w("div",{className:"w-24 h-28 bg-gray-300 flex items-center justify-center text-7xl text-center",children:e[1]})]})}function _({value:e,onChange:t,onEnter:r,className:n}){return u.exports.useEffect((()=>{function n(n){var s;"Enter"===n.key?r():"Backspace"===n.key?t(String(e).slice(0,-1)):(s=n.key,isNaN(parseInt(s))||t(String(e).length>=2?Number(n.key):Number(e+n.key)))}return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)}),[e]),w(T,{value:e,className:n})}function B({children:e,className:t}){return w("div",{className:C("w-28 border-gray-400 border-2 rounded-full flex justify-center items-center select-none py-1 px-2",t),children:w("div",{className:"font-black text-lg",children:e})})}function D({val:e,hidden:t}){return w("li",{className:C("w-1/3 h-12 flex items-center justify-center border cursor-pointer",{"bg-white":!t}),children:e})}function H(){return k("ul",{class:"flex w-64 flex-wrap flex-row-reverse",children:[w(D,{val:9}),w(D,{val:8}),w(D,{val:7}),w(D,{val:6}),w(D,{val:5}),w(D,{val:4}),w(D,{val:3}),w(D,{val:2}),w(D,{val:1}),w(D,{hidden:!0}),w(D,{val:0})]})}function I({game:e,reset:t}){const[,r]=u.exports.useReducer((e=>e+1),0);return u.exports.useEffect((()=>{e.on("update:data",r)}),[]),k("div",{className:"p-4 bg-gray-200 h-screen flex flex-col items-center",children:[k(M,{on:"swipe",run:function({direction:r}){({Left:()=>"practice"===e.config.type&&e.end(),Right:()=>t()})[r]()},className:"flex flex-col justify-center flex-grow items-center",children:[k(B,{className:"mb-16",children:[w("span",{className:"text-green mr-1",children:e.config.n}),w("span",{className:"text-gray-400",children:"N"})]}),"competitive"===e.config.type&&w(R,{duration:e.config.interval,innerColor:"rgb(229, 231, 235)",outerColor:"#fff",width:200,outerWidth:12,className:"flex-shrink-0 mb-10",onTap:()=>e.next(),children:w("div",{className:"text-9xl font-extrabold text-green",children:e.currentNumber})},e.data.numbers.length),"practice"===e.config.type&&w(M,{on:"tap",run:()=>e.next(),children:w("div",{className:"text-9xl font-extrabold text-green mb-10",children:e.currentNumber})}),w(_,{value:Number(e.currentSolution),onChange:t=>e.setSolution(t),onEnter:()=>e.next(),className:"mb-20"}),k(B,{children:[w("span",{className:"text-green mr-1",children:e.data.correct}),w("span",{className:"text-gray-700 mr-1",children:"/"}),w("span",{className:"text-gray-400",children:e.round>0?e.round-1:0})]})]}),w(H,{})]})}function A({value:e,offset:t}){return[e,t]=[e/100*360,t/100*360],w("div",{className:"segment",style:{transform:`translate(0, -50%) rotate(90deg) rotate(${t}deg)`},children:w("div",{className:"inner",style:{transform:`translate(0, 100%) rotate(${e}deg)`}})})}function V({size:e,value:t}){return k("div",{className:"pie",style:{width:e,height:e},children:[w(A,{value:Math.min(t,50),offset:0}),t>50&&w(A,{value:Math.min(t-50,50),offset:50})]})}function W({success:e,gameType:t,className:r}){return k("div",{className:C("relative w-72 h-72",r),children:[w(V,{value:e,size:"100%"}),w("div",{className:"text-3xl text-white text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2 ",children:t}),k("div",{className:"absolute text-center left-0 right-0 top-3/4 text-2xl font-semibold text-green-800",children:[e,"%"]})]})}function z({game:e,reset:t}){return w(M,{on:"swipe",run:function({direction:e}){"Right"===e&&t()},children:k("div",{className:"p-4 bg-gray-200 h-screen flex flex-col items-center justify-center",children:[k(B,{className:"mb-16",children:[w("span",{className:"text-green mr-1",children:e.config.n}),w("span",{className:"text-gray-400",children:"N"})]}),w(W,{success:Math.round(e.data.correct/e.round*100),gameType:"Game",className:"mb-16"}),k(B,{children:[w("span",{className:"text-green mr-1",children:e.data.correct}),w("span",{className:"text-gray-700 mr-1",children:"/"}),w("span",{className:"text-gray-400",children:e.round>0?e.round-1:0})]})]})})}function G(){const[e,t]=u.exports.useState(null),[,r]=u.exports.useReducer((e=>e+1),0);function n(){t(null)}return u.exports.useEffect((()=>{if(e)return e.on("ended",r),()=>e.end()}),[e]),e?{running:w(I,{game:e,reset:n}),ended:w(z,{game:e,reset:n})}[e.status]:w(Z,{start:function(e){const r=function(e){return{competitive:()=>new N(e),practice:()=>new y(e)}[e.type]()}(e);r.start(),t(r)}})}f.render(w(p.StrictMode,{children:w(G,{})}),document.getElementById("root"));