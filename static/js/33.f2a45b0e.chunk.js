"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{786:function(n,e,t){t.d(e,{DU:function(){return u},Fb:function(){return c},Jh:function(){return h},VC:function(){return l},z1:function(){return s}});var r=t(861),a=t(757),o=t.n(a),i=t(340).Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzNiMmIzZTc4OTJhOGQ2OWNhNjg2Nzg4YzZlN2QyZiIsInN1YiI6IjY1YWE4MzE3NTM0NjYxMDEzM2NkNGVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BQl9G3IFrGVEVCyekmwitqV8V7MWpZhRwVxX4oXYHTY"}}),c=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("trending/all/day?language=en-US");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("search/movie",{params:{query:e}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("movie/".concat(e,"?language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("movie/".concat(e,"/credits?language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("movie/".concat(e,"/reviews?language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},33:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var r,a,o,i,c,s,u,l,h,p=t(439),d=t(786),f=t(791),x=t(689),g=t(168),v=t(87),w=t(924),m=w.ZP.img(r||(r=(0,g.Z)(["\n  width: 320px;\n"]))),Z=w.ZP.div(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n"]))),j=w.ZP.h2(o||(o=(0,g.Z)(["\n  color: lightslategray;\n  font-size: calc((1vh+1vw) * 1.5);\n  font-weight: bold;\n  text-decoration: none;\n  font-style: italic;\n"]))),y=w.ZP.p(i||(i=(0,g.Z)(["\n  color: gray;\n  font-size: calc((1vh+1vw) * 1.5);\n  font-weight: bold;\n  text-decoration: none;\n  font-style: italic;\n  font-weight: 500;\n"]))),b=w.ZP.h3(c||(c=(0,g.Z)(["\n  color: lightslategray;\n  font-size: calc((1vh+1vw) * 1.5);\n  font-weight: bold;\n  text-decoration: none;\n  font-style: italic;\n"]))),k=w.ZP.h4(s||(s=(0,g.Z)(["\n  color: lightslategray;\n  font-size: calc((1vh+1vw) * 1.5);\n  font-weight: bold;\n  text-decoration: none;\n  font-style: italic;\n"]))),z=w.ZP.ul(u||(u=(0,g.Z)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n"]))),I=w.ZP.li(l||(l=(0,g.Z)(["\n  margin: 20px 10px;\n"]))),N=(0,w.ZP)(v.rU)(h||(h=(0,g.Z)(["\n  width: 100px;\n  height: 25px;\n  margin: 10px 5px;\n  text-decoration: none;\n  font-size: 20px;\n  color: navy;\n  box-shadow: 1px 2px 2px 1px;\n  border: 1px solid navy;\n  border-radius: 5px;\n  &:hover {\n    color: green;\n    background-color: whitesmoke;\n  }\n  &:active {\n    color: green;\n    background-color: whitesmoke;\n  }\n"]))),U=t(184),J=function(){var n=(0,x.UO)().moviesId,e=(0,x.TH)(),t=(0,f.useState)(null),r=(0,p.Z)(t,2),a=r[0],o=r[1];return(0,f.useEffect)((function(){(0,d.DU)(n).then((function(n){return o(n)})).catch((function(n){return console.log(n)}))}),[n]),(0,U.jsx)(U.Fragment,{children:a&&(0,U.jsxs)("section",{children:[(0,U.jsxs)(Z,{children:[(0,U.jsxs)(N,{to:e.state?e.state.from:"/",children:[" ","Back"]}),(0,U.jsx)(m,{src:a.poster_path?"https://image.tmdb.org/t/p/w500".concat(a.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:a.title}),(0,U.jsx)(j,{children:a.title}),(0,U.jsxs)(y,{children:["Viewer rating:",a.vote_average]}),(0,U.jsx)(b,{children:"Overview"}),(0,U.jsx)(y,{children:a.overview}),(0,U.jsx)(k,{children:"Genres"}),(0,U.jsx)(y,{children:a.genres.map((function(n){return n.name})).join(", ")}),(0,U.jsxs)(z,{children:[(0,U.jsx)(I,{children:(0,U.jsx)(N,{to:"cast",children:"Cast"})}),(0,U.jsx)(I,{children:(0,U.jsx)(N,{to:"reviews",children:"Reviews"})})]})]}),(0,U.jsx)(x.j3,{})]})})}}}]);
//# sourceMappingURL=33.f2a45b0e.chunk.js.map