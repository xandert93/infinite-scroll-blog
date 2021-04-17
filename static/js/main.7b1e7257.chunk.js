(this["webpackJsonpinfinite-scroll-blog"]=this["webpackJsonpinfinite-scroll-blog"]||[]).push([[0],{35:function(n,e,t){},55:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),a=t(24),c=t.n(a),s=(t(35),t(2)),o=t(6),d=t(3),l={isLoading:!0,fetchedPosts:[],filteredPosts:[],errMsg:null},h=Object(i.createContext)();function m(){var n=Object(s.a)(["\n  position: relative;\n  width: 95%;\n  padding: 1.6rem;\n  border-radius: var(--bord-rad-sm);\n  background: rgba(0, 90, 225, 0.193);\n  box-shadow: var(--box-shad-sm);\n  transition: opacity 1.5s, transform 1.5s;\n\n  & .hidden {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n\n  & .id {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 3rem;\n    width: 3rem;\n    left: -0.7rem;\n    top: -0.7rem;\n    font-size: 1.2rem;\n    font-weight: 600;\n    border-radius: 50%;\n    border: 1px solid white;\n    background: linear-gradient(90deg, rgb(2, 1, 56), black 90%);\n  }\n\n  & .title {\n    font-size: 1.8rem;\n    font-weight: 700;\n    text-transform: capitalize;\n    font-style: italic;\n    padding-bottom: 1.5rem;\n  }\n\n  & .body {\n    font-size: 1.5rem;\n    color: rgba(255, 255, 255, 0.85);\n    line-height: 1.7rem;\n  }\n"]);return m=function(){return n},n}var b=function(n){var e=n.post,t=e.title,a=e.body,c=e.id,s=n.observePost,d=n.className,l=Object(i.useState)(!1),h=Object(o.a)(l,2),m=h[0],b=h[1],u=Object(i.useRef)(),f=Object(i.useCallback)((function(n){n&&(u.current=new IntersectionObserver(j,{threshold:.5}),u.current.observe(n))}),[]),j=function(n){Object(o.a)(n,1)[0].isIntersecting&&(b(!0),u.current.disconnect())};return Object(r.jsxs)("div",{ref:s,className:"".concat(d," ").concat(m?"":"hidden"),children:[Object(r.jsx)("div",{ref:f,className:"id",children:c}),Object(r.jsx)("div",{className:"title",children:t}),Object(r.jsx)("div",{className:"body",children:a})]})},u=b=Object(d.b)(b)(m());function f(){var n=Object(s.a)(["\n  height: 65vh;\n\n  @media only screen and (min-width: 17.5em) and (min-height: 40em) {\n    height: 68vh;\n  }\n\n  @media only screen and (min-width: 22.5em) and (min-height: 40em) {\n    height: 69vh;\n  }\n\n  @media only screen and (min-width: 22.5em) and (min-height: 45em) {\n    height: 71vh;\n  }\n\n  @media only screen and (min-width: 25em) and (min-height: 50em) {\n    height: 71vh;\n  }\n\n  margin: 0 auto;\n  overflow-y: scroll;\n  padding: 1rem 0 1rem 6vw;\n\n  & > :not(:last-child) {\n    margin-bottom: var(--margin-sm);\n  }\n"]);return f=function(){return n},n}var j=function(n){var e=n.inputRef,t=n.className,a=Object(i.useContext)(h),c=a.filteredPosts,s=a.setLoading,d=a.fetchPosts,l=Object(i.useRef)(),m=Object(i.useCallback)((function(n){n&&(l.current=new IntersectionObserver(b,{threshold:1}),[0,100].includes(c.length)||e.current.value||l.current.observe(n))}),[c]),b=function(n){var t=Object(o.a)(n,1)[0];t.isIntersecting&&!e.current.value&&(s(),d(),l.current.unobserve(t.target))};return Object(r.jsx)("div",{className:t,children:c.map((function(n){return Object(r.jsx)(u,{post:n,observePost:n.id===c.length?m:null},n.id)}))})},g=j=Object(d.b)(j)(f());function O(){var n=Object(s.a)(["\n  position: fixed;\n  bottom: 4vh;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  font-size: 1.6rem;\n\n  .link-github {\n    color: inherit;\n  }\n"]);return O=function(){return n},n}var v=function(n){var e=n.className;return Object(r.jsxs)("footer",{className:e,title:"Visit GitHub page",children:["\xa9"," ",Object(r.jsx)("a",{className:"link-github",href:"https://github.com/xandert93",target:"_blank",rel:"noopener noreferrer",children:"xandert.93"})]})},p=v=Object(d.b)(v)(O());function y(){var n=Object(s.a)(["\n  font-size: 2.8rem;\n  letter-spacing: 3px;\n  height: 15vh;\n  padding-top: 2.5rem;\n\n  @media only screen and (min-width: 22.5em) and (min-height: 40em) {\n    height: 13vh;\n  }\n\n  @media only screen and (min-width: 22.5em) and (min-height: 45em) {\n    height: 10vh;\n  }\n\n  @media only screen and (min-width: 25em) and (min-height: 45em) {\n    height: 12vh;\n  }\n"]);return y=function(){return n},n}var x=d.b.h1(y());function w(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 5vh;\n  transition: opacity 0.3s ease-in;\n\n  .circle {\n    border-radius: 50%;\n    height: 0.6rem;\n    width: 0.6rem;\n    margin: 0 4px;\n    background: white;\n    animation: "," 0.5s ease-in infinite;\n  }\n\n  .circle:nth-of-type(2) {\n    animation-delay: 0.1s;\n  }\n\n  .circle:nth-of-type(3) {\n    animation-delay: 0.2s;\n  }\n"]);return w=function(){return n},n}function k(){var n=Object(s.a)(["\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }"]);return k=function(){return n},n}var P=function(n){var e=n.className;return Object(r.jsxs)("div",{className:e,children:[Object(r.jsx)("div",{className:"circle"}),Object(r.jsx)("div",{className:"circle"}),Object(r.jsx)("div",{className:"circle"})]})},N=Object(d.c)(k()),z=P=Object(d.b)(P)(w(),N);function C(){var n=Object(s.a)(["\n  height: 10vh;\n\n  @media only screen and (min-width: 17.5em) and (min-height: 40em) {\n    height: 7vh;\n  }\n\n  @media only screen and (min-width: 22.5em) and (min-height: 40em) {\n    height: 8vh;\n  }\n\n  @media only screen and (min-width: 22.5em) and (min-height: 45em) {\n    height: 7vh;\n  }\n\n  @media only screen and (min-width: 25em) and (min-height: 50em) {\n    height: 7vh;\n  }\n\n  .search-input {\n    margin: 0 auto;\n    width: 80%;\n    height: 3rem;\n    max-width: 50rem;\n    transform: scale(0.93);\n    border: 3px solid rgb(255, 255, 255);\n    border-radius: var(--bord-rad-sm);\n    font-size: 1.6rem;\n    text-align: center;\n    transition: transform 0.3s, border-color 0.6s;\n  }\n\n  .search-input::placeholder {\n    color: rgb(95, 95, 95);\n  }\n\n  .search-input:focus {\n    outline: none;\n    border-color: rgb(46, 189, 255);\n    transform: scale(1);\n  }\n"]);return C=function(){return n},n}var L=function(n){var e=n.inputRef,t=n.className,a=Object(i.useContext)(h),c=a.filterPosts,s=a.isLoading,d=Object(i.useState)(""),l=Object(o.a)(d,2),m=l[0],b=l[1];return Object(i.useEffect)((function(){return c(m)}),[m]),Object(r.jsx)("div",{className:t,children:Object(r.jsx)("input",{ref:e,value:m,onChange:function(n){return b(n.target.value)},className:"search-input",placeholder:"Filter results...",style:{pointerEvents:"".concat(s?"none":"")}})})},R=L=Object(d.b)(L)(C());function S(){var n=Object(s.a)(["\n\n\n\nhtml {\n  font-size: 62.5%;\n  @media only screen and (min-width: 22.5em) and (min-height: 40em) {\n    font-size: 75%;\n  }\n  @media only screen and (min-width: 25em) and (min-height: 45em) {\n    font-size: 81.25%;\n  }\n\n  @media only screen and (min-width: 30em) {\n    font-size: 81.25%;\n  }\n\n  @media only screen and (min-width: 35em) {\n    font-size: 87.5%;\n  }\n  @media only screen and (min-width: 45em) {\n    font-size: 93.75%;\n  }\n  @media only screen and (min-width: 55em) {\n    font-size: 100%;\n  }\n  @media only screen and (min-width: 65em) {\n    font-size: 106.25%;\n  }\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  box-sizing: border-box;\n  font-family: 'Questrial', sans-serif;\n  color: white;\n  text-align: center;\n}\n\n#root {\n  height: 100vh;\n  background: linear-gradient(180deg, rgb(0, 77, 192), black 60%) no-repeat;\n  overflow: hidden;\n}\n\n/* width */\n::-webkit-scrollbar {\n  width: 0.5rem;\n  /* display: none; */\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 5px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: white;\n}\n\n"]);return S=function(){return n},n}var E=Object(d.a)(S()),T=function(){var n=Object(i.useContext)(h),e=n.isLoading,t=n.filteredPosts,a=n.fetchPosts,c=Object(i.useRef)();return Object(i.useEffect)(a,[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(E,{}),Object(r.jsx)(x,{children:"Infinite Scroll Blog"}),Object(r.jsx)(R,{inputRef:c}),0===t.length&&e&&Object(r.jsx)(z,{}),t.length>0&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(g,{inputRef:c}),e&&Object(r.jsx)(z,{})]}),Object(r.jsx)(p,{})]})},I=t(5),_=t(13),F=t.n(_),G=t(28),H=t(8),M="SET_LOADING",Y="GET_POSTS",B="FILTER_POSTS",J="SET_ERR_MSG",A=function(n,e){switch(e.type){case M:return Object(I.a)(Object(I.a)({},n),{},{isLoading:!0});case Y:return Object(I.a)(Object(I.a)({},n),{},{isLoading:!1,fetchedPosts:[].concat(Object(H.a)(n.fetchedPosts),Object(H.a)(e.payload)),filteredPosts:[].concat(Object(H.a)(n.fetchedPosts),Object(H.a)(e.payload))});case B:return Object(I.a)(Object(I.a)({},n),{},{filteredPosts:n.fetchedPosts.filter((function(n){var t=n.title,r=n.body;return t.includes(e.payload)||r.includes(e.payload)}))});case J:return Object(I.a)(Object(I.a)({},n),{},{isLoading:!1,fetchedPosts:[],errMsg:e.payload});default:return n}},D=t(29),Q=t.n(D),V=1,q=function(n){var e=n.children,t=Object(i.useReducer)(A,l),a=Object(o.a)(t,2),c=a[0],s=a[1],d=c.fetchedPosts,m=Object(i.useCallback)(Object(G.a)(F.a.mark((function n(){var e;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Q.a.get("https://jsonplaceholder.typicode.com/posts?_limit=10&_page="+V);case 3:e=n.sent,setTimeout((function(){s({type:Y,payload:e.data}),V++}),0===d.length?3e3:2e3),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),s({type:J,payload:"There was an error: ".concat(n.t0.message,".")});case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[]),b=Object(i.useCallback)((function(){return s({type:M})}),[]),u=Object(i.useCallback)((function(n){return s({type:B,payload:n.toLowerCase()})}),[]);return Object(r.jsx)(h.Provider,{value:Object(I.a)(Object(I.a)({},c),{},{fetchPosts:m,setLoading:b,filterPosts:u}),children:e})};c.a.render(Object(r.jsx)(q,{children:Object(r.jsx)(T,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.7b1e7257.chunk.js.map