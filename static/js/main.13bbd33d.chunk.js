(this["webpackJsonpinfinite-scroll-blog"]=this["webpackJsonpinfinite-scroll-blog"]||[]).push([[0],{26:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),r=c(18),a=c.n(r),o=(c(26),c(3)),i=c(9),l=c.n(i),u=c(19),d=c(4),j=c(6),b="SET_IS_LOADING",f="GET_POSTS",O="SEARCH_CHANGE",h="SET_ERR_MSG",p=function(e,t){switch(t.type){case b:return Object(o.a)(Object(o.a)({},e),{},{isLoading:!0});case f:return Object(o.a)(Object(o.a)({},e),{},{isLoading:!1,fetchedPosts:[].concat(Object(j.a)(e.fetchedPosts),Object(j.a)(t.payload)),filteredPosts:[].concat(Object(j.a)(e.fetchedPosts),Object(j.a)(t.payload)),urlPage:e.urlPage+1,baseUrl:"https://jsonplaceholder.typicode.com/posts?_limit=4&_page=".concat(e.urlPage+1)});case O:return Object(o.a)(Object(o.a)({},e),{},{filteredPosts:e.fetchedPosts.filter((function(e){var c=e.title,s=e.body;return c.includes(t.payload)||s.includes(t.payload)}))});case h:return Object(o.a)(Object(o.a)({},e),{},{isLoading:!1,fetchedPosts:[],errMsg:t.payload});default:return e}},g=c(20),x=c.n(g),v={urlPage:1,baseUrl:"https://jsonplaceholder.typicode.com/posts?_limit=4&_page=1",isLoading:!1,fetchedPosts:[],filteredPosts:[],errMsg:null},m=Object(n.createContext)(v),y=function(e){var t=e.children,c=Object(n.useReducer)(p,v),r=Object(d.a)(c,2),a=r[0],i=r[1],j=a.baseUrl,O=a.fetchedPosts,g=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(j);case 3:t=e.sent,setTimeout((function(){return i({type:f,payload:t.data})}),0===O.length?2e3:1e3),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i({type:h,payload:"There was an error: ".concat(e.t0.message,".")});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(s.jsx)(m.Provider,{value:Object(o.a)(Object(o.a)({},a),{},{setIsLoading:function(){return i({type:b})},fetchPosts:g,dispatch:i}),children:t})},P=function(e){var t=e.title,c=e.body,n=e.postNum;return Object(s.jsxs)("div",{className:"post",children:[Object(s.jsx)("div",{className:"post__id",children:n}),Object(s.jsx)("div",{className:"post__title",children:t}),Object(s.jsx)("div",{className:"post__body",children:c})]})},N=function(){var e=Object(n.useContext)(m),t=e.isLoading,c=e.filteredPosts,r=e.errMsg,a=e.setIsLoading,o=e.fetchPosts;return Object(n.useEffect)((function(){a(),o()}),[]),console.log(t),Object(s.jsxs)("div",{className:"posts-container",children:[t&&Object(s.jsx)("h3",{children:"LOADING..."}),r&&Object(s.jsxs)("h3",{children:[r," Please try refreshing"]}),c&&c.map((function(e){var t=e.id,c=e.title,n=e.body;return Object(s.jsx)(P,{postNum:t,title:c,body:n},t)}))]})},_=function(){return Object(s.jsxs)("footer",{className:"footer",title:"Visit GitHub page",children:["\xa9"," ",Object(s.jsx)("a",{className:"link--github",href:"https://github.com/xandert93",target:"_blank",rel:"noopener noreferrer",children:"xandert.93"})]})},S=function(){return Object(s.jsx)("h1",{className:"header",children:"Infinite Scroll Blog"})},E=function(){var e=Object(n.useContext)(m),t=e.filteredPosts,c=e.fetchPosts,r=Object(n.useState)(!1),a=Object(d.a)(r,2),o=a[0],i=a[1];return Object(n.useEffect)((function(){if(0!==t.length&&""===document.querySelector("input").value&&100!==t.length){var e=document.querySelectorAll(".post")[t.length-1],s=new IntersectionObserver((function(t){Object(d.a)(t,1)[0].isIntersecting&&(setTimeout(c),i(!0),setTimeout(i,1e3,!1),s.unobserve(e))}),{threshold:1});s.observe(e)}}),[t]),Object(s.jsxs)("div",{className:"loader ".concat(o?"show":""),children:[Object(s.jsx)("div",{className:"circle"}),Object(s.jsx)("div",{className:"circle"}),Object(s.jsx)("div",{className:"circle"})]})},L=function(e){var t=Object(n.useState)(""),c=Object(d.a)(t,2),s=c[0],r=c[1];return Object(n.useEffect)((function(){return e({type:O,payload:s.toLowerCase()})}),[s]),[s,function(e){return r(e.target.value)}]},w=function(){var e=Object(n.useRef)(),t=Object(n.useContext)(m).dispatch,c=L(t),r=Object(d.a)(c,2),a=r[0],o=r[1];return Object(s.jsx)("div",{className:"search-input-container",children:Object(s.jsx)("input",{ref:e,value:a,onChange:o,className:"search-input",placeholder:"Filter results..."})})},I=function(){return Object(s.jsxs)(y,{children:[Object(s.jsx)(S,{}),Object(s.jsx)(w,{}),Object(s.jsx)(N,{}),Object(s.jsx)(E,{}),Object(s.jsx)(_,{})]})};a.a.render(Object(s.jsx)(I,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.13bbd33d.chunk.js.map