"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{786:function(n,t,e){e.d(t,{DU:function(){return s},Fb:function(){return o},Jh:function(){return l},VC:function(){return p},z1:function(){return u}});var r=e(861),a=e(757),c=e.n(a),i=e(340).Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzNiMmIzZTc4OTJhOGQ2OWNhNjg2Nzg4YzZlN2QyZiIsInN1YiI6IjY1YWE4MzE3NTM0NjYxMDEzM2NkNGVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BQl9G3IFrGVEVCyekmwitqV8V7MWpZhRwVxX4oXYHTY"}}),o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("trending/all/day?language=en-US");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("search/movie",{params:{query:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("movie/".concat(t,"?language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("movie/".concat(t,"/credits?language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("movie/".concat(t,"/reviews?language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,a,c,i,o=e(439),u=e(786),s=e(791),p=e(689),l=e(168),f=e(924),h=f.ZP.h4(r||(r=(0,l.Z)(["\n  color: lightslategray;\n  font-size: calc((1vh+1vw) * 1.5);\n  font-weight: bold;\n  text-decoration: none;\n  font-style: italic;\n"]))),d=f.ZP.p(a||(a=(0,l.Z)(["\n  color: gray;\n  font-size: calc((1vh+1vw) * 1.5);\n  font-weight: bold;\n  text-decoration: none;\n  font-style: italic;\n  font-weight: 500;\n"]))),g=f.ZP.ul(c||(c=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  padding: 0;\n"]))),x=f.ZP.li(i||(i=(0,l.Z)(["\n  width: 275px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid green;\n  background-color: beige;\n  border-radius: 8px;\n  margin: 0 0 20px 0;\n  box-shadow: 1px 2px 2px 1px;\n"]))),m=e(184),v=function(){var n=(0,p.UO)().moviesId,t=(0,s.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1];return(0,s.useEffect)((function(){(0,u.VC)(n).then((function(n){return a(n)})).catch((function(n){return console.log(n)}))}),[n]),(0,m.jsx)(g,{children:r.map((function(n){return(0,m.jsxs)(x,{children:[(0,m.jsx)("img",{src:n.profile_path?"https://image.tmdb.org/t/p/w500".concat(n.profile_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:n.name,width:150}),(0,m.jsx)(h,{children:n.name}),(0,m.jsxs)(d,{children:["Character:",n.character]})]},n.id)}))})}}}]);
//# sourceMappingURL=387.ef84379b.chunk.js.map