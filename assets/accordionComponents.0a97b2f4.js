import{_ as m,r as d,b as a,c as r,F as u,e as _,d as o,x as L,t as c,m as n}from"./index.3ad9822e.js";const f={setup(){const t=d([{q:"Lorem ipsum dolor sit amet.",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",open:!1},{q:"Lorem ipsum dolor sit amet.",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",open:!1},{q:"Lorem ipsum dolor sit amet.",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",open:!1},{q:"Lorem ipsum dolor sit amet.",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",open:!1},{q:"Lorem ipsum dolor sit amet.",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",open:!1},{q:"Lorem ipsum dolor sit amet.",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",open:!1}]);return{faqBase:t,closeAllFaq:s=>{s.open||t.value.forEach(i=>i.open=!1),s.open=!s.open}}}},g={class:"faq_field_wrapper"},q=["onClick"],v={class:"q_box"};function x(t,l,s,i,h,k){return a(),r("div",g,[(a(!0),r(u,null,_(i.faqBase,(e,p)=>(a(),r("div",{class:"faq_field",key:p},[o("div",{class:"open_faq",onClick:A=>i.closeAllFaq(e)},[o("p",v,[L(c(e.q)+" ",1),o("span",{class:n(["plus",e.open?"rotate":""])},"+",2)]),o("p",{class:n(["invisible",e.open?"visible":""])},c(e.a),3)],8,q)]))),128))])}const F=m(f,[["render",x],["__scopeId","data-v-66cd6384"]]);export{F as A};
