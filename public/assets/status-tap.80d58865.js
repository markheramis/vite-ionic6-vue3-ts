import{C as i,D as a,E as c}from"./vendor.eb6839ae.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const l=()=>{const e=window;e.addEventListener("statusTap",()=>{i(()=>{const o=e.innerWidth,s=e.innerHeight,n=document.elementFromPoint(o/2,s/2);if(!n)return;const t=n.closest("ion-content");t&&new Promise(r=>a(t,r)).then(()=>{c(async()=>{t.style.setProperty("--overflow","hidden"),await t.scrollToTop(300),t.style.removeProperty("--overflow")})})})})};export{l as startStatusTap};
