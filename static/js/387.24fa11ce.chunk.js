"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{786:function(n,t,e){e.d(t,{DU:function(){return s},Fb:function(){return o},Jh:function(){return l},VC:function(){return f},z1:function(){return i}});var r=e(861),a=e(757),c=e.n(a),u=e(340).Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzNiMmIzZTc4OTJhOGQ2OWNhNjg2Nzg4YzZlN2QyZiIsInN1YiI6IjY1YWE4MzE3NTM0NjYxMDEzM2NkNGVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BQl9G3IFrGVEVCyekmwitqV8V7MWpZhRwVxX4oXYHTY"}}),o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("trending/all/day?language=en-US");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("search/movie",{params:{query:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),n.next=3,u.get("movie/".concat(t,"?language=en-US"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("movie/".concat(t,"/credits?language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("movie/".concat(t,"/reviews?language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r,a,c=e(439),u=e(786),o=e(791),i=e(689),s=e(168),f=e(924),l=f.ZP.h4(r||(r=(0,s.Z)(["\n  color: lightslategray;\n  font-size: calc((1vh+1vw) * 1.5);\n  font-weight: bold;\n  text-decoration: none;\n  font-style: italic;\n"]))),p=f.ZP.p(a||(a=(0,s.Z)(["\n  color: gray;\n  font-size: calc((1vh+1vw) * 1.5);\n  font-weight: bold;\n  text-decoration: none;\n  font-style: italic;\n  font-weight: 500;\n"]))),h=e(184),d=function(){var n=(0,i.UO)().moviesId,t=(0,o.useState)([]),e=(0,c.Z)(t,2),r=e[0],a=e[1];return(0,o.useEffect)((function(){(0,u.VC)(n).then((function(n){return a(n)})).catch((function(n){return console.log(n)}))}),[n]),console.log(r),(0,h.jsx)("ul",{children:r.map((function(n){return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.profile_path),alt:n.name,width:150}),(0,h.jsx)(l,{children:n.name}),(0,h.jsxs)(p,{children:["Character:",n.character]})]},n.id)}))})}}}]);
//# sourceMappingURL=387.24fa11ce.chunk.js.map