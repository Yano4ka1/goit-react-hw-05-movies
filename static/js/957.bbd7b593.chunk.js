"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[957],{3957:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c=e(5861),u=e(9439),o=e(4687),i=e.n(o),s=e(3708),p=e(2791),f=e(7689),h=e(1933),l=e(168),d=e(9202),m=d.Z.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  gap: ","px;\n  flex-direction: column;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n\n  li {\n    border-radius: 5px;\n    box-shadow: ",";\n    text-align: center;\n\n    @media screen and (min-width: 768px) {\n      flex-basis: calc((100% - 3 * ","px) / 4);\n    }\n\n    @media screen and (min-width: 1200px) {\n      flex-basis: calc((100% - 5 * ","px) / 6);\n    }\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.boxShadow.second}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]})),x=d.Z.div(a||(a=(0,l.Z)(["\n    padding-top: ","px;\n    padding-left: ","px;\n    padding-right: ","px;\n    padding-bottom: ","px;\n\n    img {\n        width: 100%;\n        height: auto;\n        margin-bottom: ","px;\n        border-radius: 5px;\n    }\n\n    p {\n        padding-top: ","px;\n        padding-bottom: ","px;\n        font-weight: 500;\n    }\n    \n    span {\n        margin-top: ","px;\n        display: block;\n        font-weight: 400;\n    }\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[1]})),g=e(184),v=function(n){var t=n.name,e=n.character,r=n.photo;return(0,g.jsxs)(x,{children:[(0,g.jsx)("img",{src:r,alt:t,width:"100px",height:"150px"}),(0,g.jsxs)("p",{children:["name: ",(0,g.jsx)("span",{children:t})]}),(0,g.jsxs)("p",{children:["character: ",(0,g.jsx)("span",{children:e})]})]})},w=function(){var n=(0,p.useState)(null),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,f.UO)().movieId;return(0,p.useEffect)((function(){function n(){return(n=(0,c.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.$w(a);case 2:t=n.sent,e=t.length>24?t.slice(0,24):t,r(e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[a]),e?(0,g.jsx)(m,{children:e.map((function(n){var t=n.original_name,e=n.character,r=n.profile_path,a=n.id;return(0,g.jsx)("li",{children:(0,g.jsx)(v,{photo:r?s.j+r:s.a,name:t,character:e})},a)}))}):null}},3708:function(n,t,e){e.d(t,{a:function(){return a},j:function(){return r}});var r="https://image.tmdb.org/t/p/w500",a="https://i.postimg.cc/htSNfpBY/movie-card-plug.jpg"},1933:function(n,t,e){e.d(t,{$w:function(){return d},Df:function(){return f},OQ:function(){return h},Pg:function(){return l},Xj:function(){return m}});var r=e(1413),a=e(5861),c=e(4687),u=e.n(c),o=e(1243),i="https://api.themoviedb.org/3/",s="movie/",p={api_key:"70dd3cfa80de1915d6c85a48e09c15b1",language:"en-US"},f=function(){var n=(0,a.Z)(u().mark((function n(){var t,e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(i).concat("trending/movie/day"),e={params:(0,r.Z)((0,r.Z)({},p),{},{page:1})},n.prev=2,n.next=5,o.Z.get(t,e);case 5:return a=n.sent,n.abrupt("return",a.data.results);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)(u().mark((function n(t){var e,a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i).concat("search/movie"),a={params:(0,r.Z)((0,r.Z)({},p),{},{page:1,query:t})},n.prev=2,n.next=5,o.Z.get(e,a);case 5:return c=n.sent,n.abrupt("return",c.data.results);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)(u().mark((function n(t){var e,a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i).concat(s).concat(t),a={params:(0,r.Z)({},p)},n.prev=2,n.next=5,o.Z.get(e,a);case 5:return c=n.sent,n.abrupt("return",c.data);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(u().mark((function n(t){var e,a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i).concat(s).concat(t).concat("/credits"),a={params:(0,r.Z)({},p)},n.prev=2,n.next=5,o.Z.get(e,a);case 5:return c=n.sent,n.abrupt("return",c.data.cast);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,a.Z)(u().mark((function n(t){var e,a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i).concat(s).concat(t).concat("/reviews"),a={params:(0,r.Z)((0,r.Z)({},p),{},{page:1})},n.prev=2,n.next=5,o.Z.get(e,a);case 5:return c=n.sent,n.abrupt("return",c.data.results);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=957.bbd7b593.chunk.js.map