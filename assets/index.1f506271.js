import{j as u,N as h,R as m,a,L as p,u as f,O as v,b as g,B as y}from"./vendor.b65af6f9.js";const S=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}};S();const e=u.exports.jsx,n=u.exports.jsxs,l=[{id:1,name:"Pastor",flavour:"Salty"},{id:2,name:"Carnita",flavour:"Sour"},{id:3,name:"Cochinita",flavour:"Spicy"},{id:4,name:"Chili \u{1F336}\u{1F336}\u{1F336}",flavour:"Super spicy"}],x=()=>n("div",{children:[e("h1",{children:" Home "}),e("p",{children:"Simple TaKo's Wiki to test React Router 6"})]}),F=()=>n("div",{children:[e("h1",{children:"Search Page"}),e("ul",{children:l.map(i=>n("li",{children:["- ",e(p,{to:`/takopedia/tacos/${i.id}`,children:i.name})," -"]},i.id))})]}),P=()=>{const{id:i}=f(),o=l.find(s=>s.id===parseInt(i));return n("div",{children:[e("h1",{children:"\u{1F32E} Tacos \u{1F32E} "}),e("h2",{children:o.name}),e(p,{to:"details",children:"See details"}),e(v,{})]})},L=()=>{const{id:i}=f(),o=l.find(s=>s.id===parseInt(i));return n("div",{children:[e("h1",{children:"Details\u{1F4D3} "}),n("h3",{children:["Flavour: ",o.flavour]})]})},R=({isActive:i})=>i?"is-active":void 0;function j(){return n("div",{className:"App",children:[n("header",{children:[e("h1",{children:"TaKoPedia \u{1F32E}"}),e("nav",{children:n("ul",{children:[e("li",{children:e(h,{to:"/takopedia",children:"Home"})}),e("li",{children:e(h,{className:R,to:"/takopedia/search-page",children:"Search Page"})})]})})]}),e("section",{children:e(m,{children:n(a,{path:"/takopedia",children:[e(a,{index:!0,element:e(x,{})}),e(a,{path:"search-page",element:e(F,{})}),e(a,{path:"tacos/:id",element:e(P,{}),children:e(a,{path:"details",element:e(L,{})})}),e(a,{path:"*",element:e("h1",{children:"Page not found"})})]})})})]})}g.render(e(y,{children:e(j,{})}),document.getElementById("root"));
