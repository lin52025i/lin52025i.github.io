import{_ as i,o as c,c as p,C as l,I as t,E as m,a as n,t as f,F as v,J as r}from"./chunks/framework.716eacd7.js";const x={data(){return{count:1,value:"hello world"}},mounted(){}};function C(d,e,u,h,o,k){const s=r("el-button"),_=r("el-input");return c(),p(v,null,[l("div",null,[t(s,{onClick:e[0]||(e[0]=a=>o.count++)},{default:m(()=>[n("+")]),_:1}),n(" "+f(o.count)+" ",1),t(s,{onClick:e[1]||(e[1]=a=>o.count--)},{default:m(()=>[n("-")]),_:1})]),t(_,{modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=a=>o.value=a)},null,8,["modelValue"])],64)}const V=i(x,[["render",C]]);const b=l("h1",{id:"component-demo",tabindex:"-1"},[n("component demo "),l("a",{class:"header-anchor",href:"#component-demo","aria-label":'Permalink to "component demo"'},"​")],-1),y=JSON.parse('{"title":"component demo","description":"","frontmatter":{},"headers":[],"relativePath":"example/component-demo.md","lastUpdated":1682672447000}'),g={name:"example/component-demo.md"},B=Object.assign(g,{setup(d){return(e,u)=>(c(),p("div",null,[b,t(V)]))}});export{y as __pageData,B as default};
