(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[1,2],{51:function(e,t,c){"use strict";c.d(t,"e",(function(){return l})),c.d(t,"a",(function(){return u})),c.d(t,"b",(function(){return o})),c.d(t,"c",(function(){return b})),c.d(t,"d",(function(){return d}));var n=c(58),s=c.n(n),i=c(59),r=c(60),a=c.n(r);a.a.defaults.baseURL="https:api.themoviedb.org/3/",a.a.defaults.params={api_key:"d2531e14d49c44f419dbab0e50f36d2c"};var j=function(){var e=Object(i.a)(s.a.mark((function e(){var t,c,n,i=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",c=i.length>1?i[1]:void 0,e.next=4,a()(t,{params:{query:c}});case 4:return n=e.sent,e.next=8,n.data;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(Error);case 12:return e.abrupt("return",n.status=e.t0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function l(){return j("trending/all/day")}function u(e){return j("movie/".concat(e))}function o(e){return j("search/movie",e)}function b(e){return j("movie/".concat(e,"/credits"))}function d(e){return j("movie/".concat(e,"/reviews"))}},54:function(e,t,c){e.exports={list:"Cast_list__1C31B",item:"Cast_item__qBoAz",thumb:"Cast_thumb__3yLDq",container:"Cast_container__21vPH",listTitle:"Cast_listTitle__1NmC_",ref:"Cast_ref__2kw5N"}},55:function(e,t,c){e.exports={link:"Reviews_link__2r7us"}},56:function(e,t,c){e.exports={container:"MovieDetailsPage_container__2YGln",thumb:"MovieDetailsPage_thumb__3a8oC",description:"MovieDetailsPage_description__2T0CP",button:"MovieDetailsPage_button__SQvNV",list:"MovieDetailsPage_list__exVtr"}},57:function(e,t,c){"use strict";c.r(t);var n=c(53),s=c(0),i=c(51),r=c(2),a=(c(20),c(54)),j=c(1);var l=function(e){var t=Object(s.useState)(null),c=Object(n.a)(t,2),l=c[0],u=c[1],o=Object(s.useState)(null),b=Object(n.a)(o,2),d=b[0],h=b[1],O=Object(r.h)().movieId;return Object(j.jsxs)("div",{children:[d&&Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:["Credits not found. ",d]})}),Object(j.jsx)("a",{className:a.ref,href:"/",onClick:function(e){if(e.preventDefault(),l)return u(null);Object(i.c)(O).then((function(e){return u(e)})).catch((function(e){return h(e.message)}))},children:"Cast"}),l&&Object(j.jsxs)("div",{className:a.container,children:[Object(j.jsx)("h3",{className:a.listTitle,children:" Cast:"}),Object(j.jsx)("ul",{className:a.list,children:l.cast.map((function(e,t){e.id;var c=e.name,n=e.profile_path,s=e.character;return Object(j.jsxs)("li",{className:a.item,children:[Object(j.jsx)("div",{className:a.thumb,children:Object(j.jsx)("img",{alt:c,src:"https:image.tmdb.org/t/p/w500".concat(n)})}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Name:"}),"  ",c]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Character:"}),"  ",s]})]},t)}))}),Object(j.jsx)("h3",{className:a.listTitle,children:"Crew:"}),Object(j.jsx)("ul",{className:a.list,children:l.crew.map((function(e,t){e.id;var c=e.name,n=e.profile_path,s=e.job;return Object(j.jsxs)("li",{className:a.item,children:[Object(j.jsx)("div",{className:a.thumb,children:Object(j.jsx)("img",{alt:c,src:"https:image.tmdb.org/t/p/w500".concat(n)})}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Name:"}),"  ",c]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Job:"}),"  ",s]})]},t)}))})]})]})},u=c(55);var o=function(e){var t=Object(s.useState)(null),c=Object(n.a)(t,2),a=c[0],l=c[1],o=Object(s.useState)(null),b=Object(n.a)(o,2),d=b[0],h=b[1],O=Object(r.h)().movieId,m=a&&0===a.length;return Object(j.jsxs)("div",{children:[d&&Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:["Reviews not found. ",d]})}),Object(j.jsx)("a",{href:"/",onClick:function(e){if(e.preventDefault(),a)return l(null);Object(i.d)(O).then((function(e){return l(e.results)})).catch((function(e){return h(e.message)}))},className:u.link,children:"Reviews"}),m&&Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"There are no reviews for this movie"})}),a&&Object(j.jsx)("ul",{children:a.map((function(e,t){var c=e.author,n=e.content,s=e.created_at;return Object(j.jsxs)("li",{children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Author:"})," ",c]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Created:"})," ",s]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Review:"})," ",n]})]},t)}))})]})},b=c(56);t.default=function(){var e=Object(s.useState)(null),t=Object(n.a)(e,2),c=t[0],a=t[1],u=Object(s.useState)(null),d=Object(n.a)(u,2),h=d[0],O=d[1],m=Object(r.h)().movieId,x=Object(r.g)(),p=Object(r.f)();return Object(s.useEffect)((function(){m&&Object(i.a)(m).then((function(e){return a(e)})).catch((function(e){return O(e.message)}))}),[m]),Object(j.jsxs)("div",{children:[h&&Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:["This movie not found. ",h]})}),c&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{type:"button",className:b.button,onClick:function(){p.push(x.state?x.state.from:null)},children:"Go back"}),Object(j.jsxs)("div",{className:b.container,children:[Object(j.jsx)("div",{className:b.thumb,children:Object(j.jsx)("img",{src:"https:image.tmdb.org/t/p/w500".concat(c.poster_path),alt:"Movie cover"})}),Object(j.jsxs)("div",{className:b.description,children:[Object(j.jsx)("h2",{children:c.title}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Popularity:"})," ",c.popularity]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Original language:"})," ",c.original_language]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Genres:"})," ",function(e){var t=[];return e.map((function(e){return t.push(e.name)})),t.join(", ")}(c.genres)]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Release date:"})," ",c.release_date]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Overview:"}),"   ",c.overview]})]})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("ul",{className:b.list,children:[Object(j.jsx)("li",{children:Object(j.jsx)(o,{})}),Object(j.jsx)("hr",{}),Object(j.jsx)("li",{children:Object(j.jsx)(l,{})})]}),Object(j.jsx)("hr",{})]})]})}},90:function(e,t,c){e.exports={list:"HomePage_list__1JdHm",item:"HomePage_item__3PQ_T",title:"HomePage_title__1p6Gx"}},92:function(e,t,c){"use strict";c.r(t);var n=c(53),s=c(0),i=c(2),r=c(10),a=c(51),j=c(57),l=c(90),u=c(1);t.default=function(){var e=Object(s.useState)(null),t=Object(n.a)(e,2),c=t[0],o=t[1],b=Object(s.useState)(null),d=Object(n.a)(b,2),h=d[0],O=d[1],m=Object(i.i)().url,x=Object(i.g)();return Object(s.useEffect)((function(){Object(a.e)().then((function(e){return o(e.results)})).catch((function(e){return O(e.message)}))}),[]),Object(u.jsxs)("div",{children:[h&&Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:["Movies not found. ",h]})}),c&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:l.title,children:"Trending today"}),Object(u.jsx)("ul",{className:l.list,children:c.map((function(e){return Object(u.jsx)(r.b,{to:{pathname:"".concat(m,"movies/").concat(e.id),state:{from:x}},children:Object(u.jsxs)("li",{className:l.item,children:[Object(u.jsx)("p",{children:e.title||e.name}),Object(u.jsx)("img",{alt:"Movie cover",src:"https://image.tmdb.org/t/p/w500".concat(e.backdrop_path)})]})},e.id)}))}),Object(u.jsx)(i.a,{path:"/movies/:movieId",children:Object(u.jsx)(j.default,{})})]})]})}}}]);
//# sourceMappingURL=HomePage.d5330ece.chunk.js.map