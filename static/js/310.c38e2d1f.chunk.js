"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{786:function(n,e,r){r.d(e,{DU:function(){return s},Fb:function(){return u},Jh:function(){return l},VC:function(){return p},z1:function(){return c}});var t=r(861),a=r(757),o=r.n(a),i=r(340).Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzNiMmIzZTc4OTJhOGQ2OWNhNjg2Nzg4YzZlN2QyZiIsInN1YiI6IjY1YWE4MzE3NTM0NjYxMDEzM2NkNGVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BQl9G3IFrGVEVCyekmwitqV8V7MWpZhRwVxX4oXYHTY"}}),u=function(){var n=(0,t.Z)(o().mark((function n(){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("trending/all/day?language=en-US");case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("search/movie",{params:{query:e}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("movie/".concat(e,"?language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("movie/".concat(e,"/credits?language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("movie/".concat(e,"/reviews?language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},174:function(n,e,r){r.d(e,{O:function(){return f}});r(791);var t,a,o,i=r(689),u=r(168),c=r(87),s=r(924),p=s.ZP.ul(t||(t=(0,u.Z)(["\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  padding: 0;\n"]))),l=s.ZP.li(a||(a=(0,u.Z)(["\n  margin: 8px auto;\n"]))),d=(0,s.ZP)(c.rU)(o||(o=(0,u.Z)(["\n  text-align: center;\n  text-decoration: none;\n  font-size: 20px;\n  color: navy;\n  box-shadow: 1px 2px 2px 1px;\n  border: 1px solid navy;\n  border-radius: 5px;\n  &:hover {\n    color: green;\n    background-color: whitesmoke;\n  }\n  &:active {\n    color: green;\n    background-color: whitesmoke;\n  }\n"]))),x=r(184),f=function(n){var e=n.movie,r=(0,i.TH)();return(0,x.jsx)(p,{children:e.map((function(n){return(0,x.jsx)(l,{children:(0,x.jsx)(d,{state:{from:r},to:"/movies/".concat(n.id),children:n.name||n.title})},n.id)}))})}},310:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var t,a,o,i,u=r(861),c=r(439),s=r(757),p=r.n(s),l=r(791),d=r(168),x=r(924),f=x.ZP.div(t||(t=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),h=x.ZP.form(a||(a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-direction: column;\n  background-color: bisque;\n"]))),g=x.ZP.input(o||(o=(0,d.Z)(["\n  border: solid 2px lightcoral;\n  border-radius: 7px;\n  padding: 8px 4px;\n  box-shadow: 1px 2px 2px 1px;\n  width: 275px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-right: 15px;\n"]))),v=x.ZP.button(i||(i=(0,d.Z)(["\n  border: solid 2px lightcoral;\n  padding: 5px 7px;\n  border-radius: 5px;\n  box-shadow: 1px 2px 2px 1px;\n  height: 35px;\n  width: 115px;\n  text-align: center;\n  cursor: pointer;\n  &:hover {\n    background-color: darkorange;\n  }\n  &:active {\n    background-color: darkorange;\n  }\n"]))),m=r(786),b=r(87),Z=r(174),w=r(184),y=function(){var n=(0,l.useState)([]),e=(0,c.Z)(n,2),r=e[0],t=e[1],a=(0,b.lr)(""),o=(0,c.Z)(a,2),i=o[0],s=o[1];(0,l.useEffect)((function(){var n=i.get("query");n&&(0,m.z1)(n).then((function(n){var e=n.results;t(e)}))}),[i]);var d=function(){var n=(0,u.Z)(p().mark((function n(e){return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),s({query:e.target.elements.query.value});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{children:(0,w.jsxs)(h,{onSubmit:d,children:[(0,w.jsx)(g,{type:"text",name:"query"}),(0,w.jsx)(v,{type:"submit",children:"Search"})]})}),(0,w.jsx)(Z.O,{movie:r})]})}}}]);
//# sourceMappingURL=310.c38e2d1f.chunk.js.map