import{_ as i}from"./index.d61e6dc1.js";import{g as h,M as v,X as u,au as k,o as b,k as j,q as n,w as _,aJ as g,aK as y,J as r,K as t,a2 as $}from"./vendor.9347675a.js";/* empty css                  */import{_ as w}from"./index.84770b9f.js";/* empty css                         */const x=h({components:{LookAround:i},setup(){const e=v(),o=u(10),s=u(-1);return k(o,(a,l)=>{a===0&&(clearTimeout(s.value),e.push({name:"home"}))}),{endTime:o,timer:s,jump:a=>{switch(a){case 0:e.back(-1);break;case 1:e.push({name:"home"});break;case 2:e.push({name:"login"});break}clearTimeout(s.value)}}}}),p=e=>(g("data-v-185ce576"),e=e(),y(),e),C={class:"no-authority-container"},B=p(()=>r("h2",{class:"status-code"},"500",-1)),I=p(()=>r("p",{class:"describe"},[t("\u62B1\u6B49\uFF01\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u51FA\u73B0"),r("em",null,"\u5F02\u5E38"),t("...")],-1)),T=p(()=>r("p",{class:"suggest"},"\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458",-1)),V=t("\u8FD4\u56DE"),N=t("\u9996\u9875"),S=t("\u91CD\u65B0\u767B\u5F55");function E(e,o,s,m,a,l){const c=$,f=i;return b(),j("div",C,[B,I,T,n(c,{onClick:o[0]||(o[0]=d=>e.jump(0))},{default:_(()=>[V]),_:1}),n(c,{type:"primary",onClick:o[1]||(o[1]=d=>e.jump(1))},{default:_(()=>[N]),_:1}),n(c,{type:"primary",onClick:o[2]||(o[2]=d=>e.jump(2))},{default:_(()=>[S]),_:1}),n(f,{class:"margin_l-10"})])}var M=w(x,[["render",E],["__scopeId","data-v-185ce576"]]);export{M as default};