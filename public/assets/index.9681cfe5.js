import{d,o as f,c as _,w as o,u as e,a as t,I as $,b as x,e as p,f as m,g as h,h as v,i as I,j as y,k as u,l as g,m as A,n as b,F as C,r as M,p as k,q as B,s as L,t as H,v as N,x as V}from"./vendor.eb6839ae.js";const T=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function l(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=l(n);fetch(n.href,s)}};T();const w=d({setup(i){return(a,l)=>(f(),_(e(x),null,{default:o(()=>[t(e($))]),_:1}))}}),D=u("Ionic Vite - Home"),E=g("h1",null,"Home",-1),S=u("About"),F=d({setup(i){return(a,l)=>(f(),_(e(y),null,{default:o(()=>[t(e(h),null,{default:o(()=>[t(e(p),null,{default:o(()=>[t(e(m),null,{default:o(()=>[D]),_:1})]),_:1})]),_:1}),t(e(I),{class:"ion-padding"},{default:o(()=>[E,t(e(v),{"router-link":"/about"},{default:o(()=>[S]),_:1})]),_:1})]),_:1}))}}),P=u("CLOSE MODAL"),R=u("About Modal"),q=g("h1",null,"THIS IS MY MODAL",-1),j=d({emits:["onClose"],setup(i,{emit:a}){return(l,r)=>(f(),A(C,null,[t(e(h),null,{default:o(()=>[t(e(p),{ref:"ionHeader"},{default:o(()=>[t(e(b),{slot:"end"},{default:o(()=>[t(e(v),{onClick:r[0]||(r[0]=n=>a("onClose"))},{default:o(()=>[P]),_:1})]),_:1}),t(e(m),null,{default:o(()=>[R]),_:1})]),_:1},512)]),_:1}),t(e(I),{class:"ion-padding"},{default:o(()=>[q]),_:1})],64))}}),z=u("Ionic Vite - About"),K=g("h1",null,"About",-1),U=u("Open Modal"),W=d({setup(i){const a=M(!1),l=()=>{a.value=!0},r=()=>{a.value=!1};return(n,s)=>(f(),_(e(y),null,{default:o(()=>[t(e(h),null,{default:o(()=>[t(e(p),null,{default:o(()=>[t(e(b),{slot:"start"},{default:o(()=>[t(e(k))]),_:1}),t(e(m),null,{default:o(()=>[z]),_:1})]),_:1})]),_:1}),t(e(I),{class:"ion-padding"},{default:o(()=>[K,t(e(B),{"is-open":a.value,onDidDismiss:s[0]||(s[0]=c=>r())},{default:o(()=>[t(j,{onOnClose:r})]),_:1},8,["is-open"]),t(e(v),{onClick:l},{default:o(()=>[U]),_:1})]),_:1})]),_:1}))}}),Y=[{path:"/",redirect:"/home"},{path:"/home",component:F},{path:"/about",component:W}],O=L({history:H("/"),routes:Y});const G=N(w).use(V).use(O);O.isReady().then(()=>{G.mount("#app")});