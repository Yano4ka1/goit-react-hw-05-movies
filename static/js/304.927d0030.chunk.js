"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{7047:function(n,e,t){t.d(e,{e:function(){return d}});var r,c,a=t(3708),o=t(1087),i=t(168),s=t(9202),u=s.Z.ul(r||(r=(0,i.Z)(["\n  margin-top: ","px;\n  font-size: 18px;\n  display: flex;\n  gap: ","px;\n  flex-direction: column;\n\n  @media screen and (min-width: 480px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  @media screen and (min-width: 768px) {\n    margin-top: ","px;\n  }\n\n  li {\n    border-radius: 5px;\n    box-shadow: ",";\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover,\n    &:focus {\n      transform: scale(1.03);\n      color: ",";\n    }\n\n    @media screen and (min-width: 480px) {\n      flex-basis: calc((100% - ","px) / 2);\n    }\n    @media screen and (min-width: 768px) {\n      flex-basis: calc((100% - 2 * ","px) / 3);\n    }\n    @media screen and (min-width: 1200px) {\n      flex-basis: calc((100% - 3 * ","px) / 4);\n    }\n  }\n\n  a {\n    display: block;\n    padding-top: ","px;\n    padding-left: ","px;\n    padding-right: ","px;\n    padding-bottom: ","px;\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.boxShadow.second}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[3]})),p=s.Z.div(c||(c=(0,i.Z)(["\n  text-align: center;\n  img {\n    border-radius: 5px;\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.space[2]})),f=t(184),d=function(n){var e=n.movies,t=n.isMoviePage,r=void 0!==t&&t,c=n.prevLocation;return(0,f.jsx)(u,{children:r?e.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"".concat(e),state:{from:"".concat(c)},children:(0,f.jsxs)(p,{children:[(0,f.jsx)("img",{src:r?a.j+r:a.a,alt:t,width:"200px",height:"300px"}),(0,f.jsx)("h3",{children:t})]})})},e)})):e.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"movies/".concat(e),state:{from:"".concat(c)},children:(0,f.jsxs)(p,{children:[(0,f.jsx)("img",{src:r?a.j+r:a.a,alt:t,width:"200px",height:"300px"}),(0,f.jsx)("h3",{children:t})]})})},e)}))})}},3708:function(n,e,t){t.d(e,{a:function(){return c},j:function(){return r}});var r="https://image.tmdb.org/t/p/w500",c="https://i.postimg.cc/htSNfpBY/movie-card-plug.jpg"},304:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,c=t(3433),a=t(5861),o=t(9439),i=t(4687),s=t.n(i),u=t(1933),p=t(2791),f=t(168),d=t(9202).Z.main(r||(r=(0,f.Z)(["\n  padding: ","px;\n\n  h2 {\n    text-align: center;\n    color: ",";\n    font-size: 24px;\n    \n    @media screen and (min-width: 768px) {\n      font-size: 30px;\n    }\n    @media screen and (min-width: 1200px) {\n      font-size: 36px;\n    }\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.accentTextColor})),l=t(7047),h=t(7689),m=t(184),x=function(){var n=(0,p.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],i=(0,h.TH)();return(0,p.useEffect)((function(){function n(){return(n=(0,a.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Df();case 3:e=n.sent,r((0,c.Z)(e)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,m.jsxs)(d,{children:[(0,m.jsx)("h2",{children:"Trending today"}),(0,m.jsx)(l.e,{movies:t,prevLocation:i.pathname})]})}},1933:function(n,e,t){t.d(e,{$w:function(){return h},Df:function(){return f},OQ:function(){return d},Pg:function(){return l},Xj:function(){return m}});var r=t(1413),c=t(5861),a=t(4687),o=t.n(a),i=t(1243),s="https://api.themoviedb.org/3/",u="movie/",p={api_key:"70dd3cfa80de1915d6c85a48e09c15b1",language:"en-US"},f=function(){var n=(0,c.Z)(o().mark((function n(){var e,t,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s).concat("trending/movie/day"),t={params:(0,r.Z)((0,r.Z)({},p),{},{page:1})},n.prev=2,n.next=5,i.Z.get(e,t);case 5:return c=n.sent,n.abrupt("return",c.data.results);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,c.Z)(o().mark((function n(e){var t,c,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s).concat("search/movie"),c={params:(0,r.Z)((0,r.Z)({},p),{},{page:1,query:e})},n.prev=2,n.next=5,i.Z.get(t,c);case 5:return a=n.sent,n.abrupt("return",a.data.results);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,c.Z)(o().mark((function n(e){var t,c,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s).concat(u).concat(e),c={params:(0,r.Z)({},p)},n.prev=2,n.next=5,i.Z.get(t,c);case 5:return a=n.sent,n.abrupt("return",a.data);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,c.Z)(o().mark((function n(e){var t,c,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s).concat(u).concat(e).concat("/credits"),c={params:(0,r.Z)({},p)},n.prev=2,n.next=5,i.Z.get(t,c);case 5:return a=n.sent,n.abrupt("return",a.data.cast);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,c.Z)(o().mark((function n(e){var t,c,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s).concat(u).concat(e).concat("/reviews"),c={params:(0,r.Z)((0,r.Z)({},p),{},{page:1})},n.prev=2,n.next=5,i.Z.get(t,c);case 5:return a=n.sent,n.abrupt("return",a.data.results);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=304.927d0030.chunk.js.map