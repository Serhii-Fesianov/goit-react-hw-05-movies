"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{786:function(n,t,e){e.d(t,{DU:function(){return u},Fb:function(){return o},Jh:function(){return h},VC:function(){return l},z1:function(){return s}});var r=e(861),a=e(757),c=e.n(a),i=e(340).Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzNiMmIzZTc4OTJhOGQ2OWNhNjg2Nzg4YzZlN2QyZiIsInN1YiI6IjY1YWE4MzE3NTM0NjYxMDEzM2NkNGVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BQl9G3IFrGVEVCyekmwitqV8V7MWpZhRwVxX4oXYHTY"}}),o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("trending/all/day?language=en-US");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("search/movie",{params:{query:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),n.next=3,i.get("movie/".concat(t,"?language=en-US"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("movie/".concat(t,"/credits?language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("movie/".concat(t,"/reviews?language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},33:function(n,t,e){e.r(t),e.d(t,{default:function(){return N}});var r,a,c,i,o,s,u,l,h=e(439),f=e(786),d=e(791),p=e(689),v=e(87),g=e(168),x=e(924),w=x.ZP.img(r||(r=(0,g.Z)(["\n  width: 320px;\n"]))),Z=x.ZP.div(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n"]))),m=x.ZP.h2(c||(c=(0,g.Z)(["\n  color: lightslategray;\n  font-size: calc((1vh+1vw) * 1.5);\n  font-weight: bold;\n  text-decoration: none;\n  font-style: italic;\n"]))),j=x.ZP.p(i||(i=(0,g.Z)(["\n  color: gray;\n  font-size: calc((1vh+1vw) * 1.5);\n  font-weight: bold;\n  text-decoration: none;\n  font-style: italic;\n  font-weight: 500;\n"]))),y=x.ZP.h3(o||(o=(0,g.Z)(["\n  color: lightslategray;\n  font-size: calc((1vh+1vw) * 1.5);\n  font-weight: bold;\n  text-decoration: none;\n  font-style: italic;\n"]))),b=x.ZP.h4(s||(s=(0,g.Z)(["\n  color: lightslategray;\n  font-size: calc((1vh+1vw) * 1.5);\n  font-weight: bold;\n  text-decoration: none;\n  font-style: italic;\n"]))),k=x.ZP.ul(u||(u=(0,g.Z)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n"]))),z=(0,x.ZP)(v.rU)(l||(l=(0,g.Z)(["\n  color: blue;\n  font-size: calc((1vh+1vw) * 1.5);\n  font-weight: bold;\n  text-decoration: none;\n  &.active {\n    color: #5e5c5c;\n  }\n  &:hover:not(.active) {\n    color: black;\n  }\n"]))),I=e(184),N=function(){var n=(0,p.UO)().moviesId,t=(0,p.TH)(),e=(0,d.useState)(null),r=(0,h.Z)(e,2),a=r[0],c=r[1];return(0,d.useEffect)((function(){(0,f.DU)(n).then((function(n){return c(n)})).catch((function(n){return console.log(n)}))}),[n]),(0,I.jsx)(I.Fragment,{children:a&&(0,I.jsxs)("section",{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(v.rU,{to:t.state?t.state.from:"/",children:" Back"}),(0,I.jsx)(w,{src:"https://image.tmdb.org/t/p/w500".concat(a.poster_path),alt:a.title}),(0,I.jsx)(m,{children:a.title}),(0,I.jsxs)(j,{children:["Viewer rating:",a.vote_average]}),(0,I.jsx)(y,{children:"Overview"}),(0,I.jsx)(j,{children:a.overview}),(0,I.jsx)(b,{children:"Genres"}),(0,I.jsx)(j,{children:a.genres.map((function(n){return n.name})).join(", ")}),(0,I.jsxs)(k,{children:[(0,I.jsx)("li",{children:(0,I.jsx)(z,{to:"cast",children:"Cast"})}),(0,I.jsx)("li",{children:(0,I.jsx)(z,{to:"reviews",children:"Reviews"})})]})]}),(0,I.jsx)(p.j3,{})]})})}}}]);
//# sourceMappingURL=33.a73bbb81.chunk.js.map