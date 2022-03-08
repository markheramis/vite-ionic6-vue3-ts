import{y as w,z as X}from"./vendor.eb6839ae.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const D=(o,d,u,m,h)=>{const c=o.ownerDocument.defaultView;return w({el:o,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&d(),onStart:u,onMove:t=>{const e=t.deltaX/c.innerWidth;m(e)},onEnd:t=>{const a=t.deltaX,e=c.innerWidth,n=a/e,s=t.velocityX,p=e/2,r=s>=0&&(s>.2||t.deltaX>p),i=(r?1-n:n)*e;let l=0;if(i>5){const g=i/Math.abs(s);l=Math.min(g,540)}h(r,n<=0?.01:X(0,n,.9999),l)}})};export{D as createSwipeBackGesture};
