(this["webpackJsonpreact-rick-and-morty"]=this["webpackJsonpreact-rick-and-morty"]||[]).push([[0],{32:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(26),i=c.n(a),r=c(2),j=c(4),d=c(3),l=(c(32),c(0)),o=Object(j.g)((function(e){var t=Object(n.useState)(""),c=Object(d.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)("character"),r=Object(d.a)(i,2),j=r[0],o=r[1],b=Object(n.useState)("name"),h=Object(d.a)(b,2),O=h[0],u=h[1];return Object(l.jsxs)("form",{className:"SearchBar",onSubmit:function(t){t.preventDefault(),e.history.push("/search/".concat(j,"/").concat(O,"/").concat(s)),a("")},children:[Object(l.jsx)("input",{className:"SearchBar__input",value:s,onChange:function(e){a(e.target.value)},placeholder:"Search..."}),Object(l.jsxs)("select",{className:"SearchBar__dataList",onChange:function(e){u(e.target.value.replace(/\w+\|/,"")),o(e.target.value.replace(/\|\w+/,""))},children:[Object(l.jsx)("option",{className:"SearchBar__option",value:"character|name",children:"character by name"}),Object(l.jsx)("option",{className:"SearchBar__option",value:"character|species",children:"character by species"}),Object(l.jsx)("option",{className:"SearchBar__option",value:"location|name",children:"location by name"}),Object(l.jsx)("option",{className:"SearchBar__option",value:"location|type",children:"location by type"}),Object(l.jsx)("option",{className:"SearchBar__option",value:"location|dimension",children:"location by dimension"}),Object(l.jsx)("option",{className:"SearchBar__option",value:"episode|name",children:"episode by name"}),Object(l.jsx)("option",{className:"SearchBar__option",value:"episode|episode",children:"episode by code"})]}),Object(l.jsx)("input",{className:"SearchBar__button",type:"submit",value:"Find!"})]})})),b=(c(39),c.p+"static/media/logo.1d6673f9.svg"),h=function(){return Object(l.jsxs)("header",{className:"Header",children:[Object(l.jsx)(r.b,{className:"Header__logo",to:"/",children:Object(l.jsx)("img",{src:b,alt:"",width:"50",height:"50"})}),Object(l.jsx)("h2",{className:"Header__title",children:"Rick and Morty"}),Object(l.jsx)("div",{className:"Header__search-bar",children:Object(l.jsx)(o,{})})]})},O=(c(40),function(e){var t=e.children,c=e.style;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{style:c,className:"PageTitle",children:t}),Object(l.jsx)("hr",{})]})}),u=function(e){var t=e.children,c=e.style;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{style:c,className:"SectionTitle",children:t}),Object(l.jsx)("hr",{})]})},m=function(e){var t=e.children,c=e.style;return Object(l.jsx)("h3",{style:c,className:"ArticleTitle",children:t})},x=function(e){var t=e.children,c=e.style;return Object(l.jsx)("p",{style:c,className:"SubTitle",children:t})},p=c(12),v=c.n(p),f="https://rickandmortyapi.com/api/",_={character:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.a.get(f+"character/".concat(e))},location:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.a.get(f+"location/".concat(e))},episode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.a.get(f+"episode/".concat(e))}},N=(c(59),function(e){var t=e.item;return Object(l.jsxs)("dl",{className:"Back",children:[Object(l.jsxs)("div",{className:"Back__item",children:[Object(l.jsx)("dt",{className:"Back__key",children:"Name"}),Object(l.jsx)("dd",{className:"Back__value",children:t.name})]}),Object(l.jsxs)("div",{className:"Back__item",children:[Object(l.jsx)("dt",{className:"Back__key",children:"Species"}),Object(l.jsx)("dd",{className:"Back__value",children:t.species})]}),Object(l.jsxs)("div",{className:"Back__item",children:[Object(l.jsx)("dt",{className:"Back__key",children:"Gender"}),Object(l.jsx)("dd",{className:"Back__value",children:t.gender})]}),Object(l.jsxs)("div",{className:"Back__item",children:[Object(l.jsx)("dt",{className:"Back__key",children:"Status"}),Object(l.jsx)("dd",{className:"Back__value",children:t.status})]}),Object(l.jsxs)("div",{className:"Back__item",children:[Object(l.jsx)("dt",{className:"Back__key",children:"Origin"}),Object(l.jsx)("dd",{className:"Back__value",children:t.origin.name})]}),Object(l.jsxs)("div",{className:"Back__item",children:[Object(l.jsx)("dt",{className:"Back__key",children:"Location"}),Object(l.jsx)("dd",{className:"Back__value",children:t.location.name})]})]})}),g=(c(60),function(e){var t=e.item;return Object(l.jsxs)("div",{className:"Front",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:t.image,alt:""})}),Object(l.jsxs)("header",{className:"Front__heading",children:[Object(l.jsx)(m,{children:t.name}),Object(l.jsx)(x,{children:t.species})]})]})}),y=(c(61),c(62),function(e){var t=e.front,c=e.back;return Object(l.jsxs)("div",{className:"Bilateral",children:[Object(l.jsx)("div",{className:"Bilateral__content",children:t}),Object(l.jsx)("div",{className:"Bilateral__content Bilateral__content--back",children:c})]})}),k=(c(63),function(e){var t=e.children,c=e.style;return Object(l.jsx)("div",{className:"Card",style:c,children:t})}),C=function(e){var t=e.item;return Object(l.jsx)(r.b,{className:"",to:"/character/"+t.id,children:Object(l.jsx)(k,{style:{overflow:"visible"},children:Object(l.jsx)(y,{front:Object(l.jsx)(g,{item:t}),back:Object(l.jsx)(N,{item:t})})})})},S=(c(64),function(e){var t=e.item;return Object(l.jsx)(r.b,{to:"/location/"+t.id,children:Object(l.jsx)(k,{children:Object(l.jsxs)("div",{className:"LocationCard",children:[Object(l.jsxs)("header",{children:[Object(l.jsx)(m,{style:{textAlign:"center"},children:t.name}),Object(l.jsx)("hr",{className:"LocationCard__line"})]}),Object(l.jsxs)("dl",{className:"LocationCard__list",children:[Object(l.jsxs)("div",{className:"LocationCard__item",children:[Object(l.jsx)("dt",{className:"LocationCard__key",children:"Type"}),Object(l.jsx)("dd",{className:"LocationCard__value",children:t.type})]}),Object(l.jsxs)("div",{className:"LocationCard__item",children:[Object(l.jsx)("dt",{className:"LocationCard__key",children:"Dimension"}),Object(l.jsx)("dd",{className:"LocationCard__value",children:t.dimension})]}),Object(l.jsxs)("div",{className:"LocationCard__item",children:[Object(l.jsx)("dt",{className:"LocationCard__key",children:"Residents"}),Object(l.jsx)("dd",{className:"LocationCard__value",children:t.residents.length})]})]})]})})})}),B=(c(65),function(e){var t=e.item;return Object(l.jsx)(r.b,{to:"/episode/"+t.id,children:Object(l.jsx)(k,{children:Object(l.jsxs)("div",{className:"EpisodeCard",children:[Object(l.jsxs)("header",{children:[Object(l.jsx)(m,{style:{textAlign:"center"},children:t.name}),Object(l.jsx)("hr",{className:"EpisodeCard__line"})]}),Object(l.jsxs)("dl",{className:"EpisodeCard__list",children:[Object(l.jsxs)("div",{className:"EpisodeCard__item",children:[Object(l.jsx)("dt",{className:"EpisodeCard__key",children:"Date"}),Object(l.jsx)("dd",{className:"EpisodeCard__value",children:t.air_date})]}),Object(l.jsxs)("div",{className:"EpisodeCard__item",children:[Object(l.jsx)("dt",{className:"EpisodeCard__key",children:"Code"}),Object(l.jsx)("dd",{className:"EpisodeCard__value",children:t.episode})]}),Object(l.jsxs)("div",{className:"EpisodeCard__item",children:[Object(l.jsx)("dt",{className:"EpisodeCard__key",children:"Characters"}),Object(l.jsx)("dd",{className:"EpisodeCard__value",children:t.characters.length})]})]})]})})})}),E=(c(66),function(){return Object(l.jsx)("div",{className:"Loading",children:"Loading..."})}),L=(c(67),{character:C,location:S,episode:B}),I=function(e){var t=e.items,c=e.type,s=e.count,a=void 0===s?20:s,i=Object(n.useState)(a),r=Object(d.a)(i,2),j=r[0],o=r[1];if(null===t)return Object(l.jsx)(E,{});if(void 0===t)return Object(l.jsx)("div",{});var b=t.slice(0,j);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{className:"CardList",children:b.map((function(e,t){return Object(l.jsx)("li",{children:L[c]({item:e})},t)}))}),t.length>j&&Object(l.jsxs)("button",{className:"CardList__button",onClick:function(){return o((function(e){return e+a}))},children:["Show more (",t.length-j," remaining)"]})]})},A=function(e,t){if(t>0&&e>=t){for(var c=[];c.length<t;){var n=Math.floor(Math.random()*e+1);c.includes(n)||c.push(n)}return c}},D=function(e,t){var c=Object(n.useState)(null),s=Object(d.a)(c,2),a=s[0],i=s[1];return Object(n.useEffect)((function(){if(Array.isArray(t)&&t.length>0||Number.isInteger(parseInt(t))){var c=Array.isArray(t)?t:[t];_[e](c).then((function(e){var t=Array.isArray(e.data)?e.data:[e.data];i(t)})).catch((function(){return i(void 0)}))}else i(void 0)}),[e,t]),a},w=function(e){var t=e.type,c=e.count,s=void 0===c?4:c,a=Object(n.useState)(null),i=Object(d.a)(a,2),r=i[0],j=i[1],o=D(t,r);return Object(n.useEffect)((function(){_[t]().then((function(e){var t=e.data.info.count;j(A(t,s))})).catch((function(){return j(void 0)}))}),[t,s]),Object(l.jsx)(I,{items:o,type:t})},F="Rick and Morty",R=function(e){var t=e.title,c=e.metaDescription,s=void 0===c?"The Rick and Morty React App.":c;Object(n.useEffect)((function(){document.title=t?t+" | "+F:F}),[t]),Object(n.useEffect)((function(){document.querySelector('meta[name="description"]').setAttribute("content",s)}),[s])},T=function(){return R({}),Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{children:"Rick and Morty"}),Object(l.jsxs)("section",{children:[Object(l.jsx)(r.b,{className:"link",to:"/characters",children:Object(l.jsx)(u,{children:"Characters"})}),Object(l.jsx)(w,{type:"character",count:"4"})]}),Object(l.jsxs)("section",{children:[Object(l.jsx)(r.b,{className:"link",to:"/locations",children:Object(l.jsx)(u,{children:"Locations"})}),Object(l.jsx)(w,{type:"location",count:"4"})]}),Object(l.jsxs)("section",{children:[Object(l.jsx)(r.b,{className:"link",to:"/episodes",children:Object(l.jsx)(u,{children:"Episodes"})}),Object(l.jsx)(w,{type:"episode",count:"4"})]})]})},M=(c(68),function(e){for(var t=e.page,c=e.pageCount,n=e.route,s=[],a=1;a<=c;a++)s.push(Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:n+a,className:"Pagination__element ".concat(a===t?"active":""),children:a})},a));var i=Object(l.jsx)("li",{children:t>1?Object(l.jsx)(r.b,{to:n+(t-1),className:"Pagination__element",children:"<"}):Object(l.jsx)(r.b,{onClick:function(e){return e.preventDefault()},to:"",className:"Pagination__element disabled",children:"<"})},"prev"),j=Object(l.jsx)("li",{children:t<c?Object(l.jsx)(r.b,{to:n+(t+1),className:"Pagination__element",children:">"}):Object(l.jsx)(r.b,{onClick:function(e){return e.preventDefault()},to:"",className:"Pagination__element disabled",children:">"})},"next");return Object(l.jsxs)("ul",{className:"Pagination",children:[i,s,j]})}),P=["character","location","episode"],H=["name","species","code","type","dimension"],G={page:function(e){return void 0===e?1:/\D/.test(e)||"0"===e?void 0:Number(e)},type:function(e){if(P.includes(e))return e},by:function(e){if(H.includes(e))return e},text:function(e){return e.replace(/[^a-zA-Z0-9_-\s]/g,"")}},J=function(e){for(var t={},c=0,n=Object.entries(e.params);c<n.length;c++){var s=Object(d.a)(n[c],2),a=s[0],i=s[1];t[a]=G[a](i)}return t},q=function(e){var t=e.match,c=J(t),s=c.type,a=c.by,i=c.text,r=c.page,o="/search/".concat(s,"/").concat(a,"/").concat(i,"/"),b="?".concat(a,"=").concat(i,"&page=").concat(r);R({title:"Search "+i});var h=Object(n.useState)({items:null,pages:null,type:s}),m=Object(d.a)(h,2),x=m[0],p=m[1];if(Object(n.useEffect)((function(){_[s](b).then((function(e){return p({items:e.data.results,pages:e.data.info.pages,type:s})})).catch((function(){return p({items:void 0,type:s})}))}),[s,b]),void 0===r)return Object(l.jsx)(j.a,{to:"/"});var v="";return null===x.items&&(v="Searching..."),void 0===x.items&&(v="Found nothing"),x.items&&(v=Object(l.jsx)(I,{items:x.items,type:x.type})),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{children:"Search ".concat(s," by ").concat(a)}),Object(l.jsxs)("section",{children:[Object(l.jsx)(u,{children:"Results for ".concat(i)}),x.pages>1&&Object(l.jsx)(M,{page:r,pageCount:x.pages,route:o}),v]})]})},z=function(e){var t=e.title,c=e.type,s=e.match,a=J(s).page,i=Object(n.useState)(null),r=Object(d.a)(i,2),j=r[0],o=r[1],b=Object(n.useState)(null),h=Object(d.a)(b,2),u=h[0],m=h[1];return R({title:t}),Object(n.useEffect)((function(){_[c]("?page=".concat(a)).then((function(e){o(e.data.results),m(e.data.info.pages)})).catch((function(){return o(void 0)}))}),[a,c]),Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{children:t}),Object(l.jsxs)("section",{children:[Object(l.jsx)(M,{page:a,pageCount:u,route:"/".concat(c,"s/")}),Object(l.jsx)(I,{items:j,type:c})]})]})},Z=function(e){var t=e.match;return Object(l.jsx)(z,{title:"Characters",type:"character",match:t})},K=function(e){var t=e.match;return Object(l.jsx)(z,{title:"Locations",type:"location",match:t})},Q=function(e){var t=e.match;return Object(l.jsx)(z,{title:"Episodes",type:"episode",match:t})},U=(c(69),function(e){var t=/\D+/;return e.map((function(e){return e.replace(t,"")}))}),V=function(e){return e.replace(/\D+/,"")},W=function(e){var t=e.item,c=e.Content;return R({title:(null===t||void 0===t?void 0:t.name)||void 0}),null===t?Object(l.jsx)(E,{}):void 0===t?Object(l.jsx)(j.a,{to:"/"}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(c,{item:t})})},X=function(e,t){var c=Object(n.useState)(null),s=Object(d.a)(c,2),a=s[0],i=s[1];return Object(n.useEffect)((function(){_[e](t).then((function(e){return i(e.data)})).catch((function(){return i(void 0)}))}),[e,t]),a},Y=function(e){var t=e.item,c="unknown"===t.origin.name?t.origin.name:Object(l.jsx)(r.b,{className:"link",to:"/location/"+V(t.origin.url),children:t.origin.name}),n="unknown"===t.location.name?t.location.name:Object(l.jsx)(r.b,{className:"link",to:"/location/"+V(t.location.url),children:t.location.name});return Object(l.jsxs)("dl",{className:"Character",children:[Object(l.jsxs)("div",{className:"definitionItem",children:[Object(l.jsx)("dt",{children:"Species"}),Object(l.jsx)("dd",{children:t.species})]}),Object(l.jsxs)("div",{className:"definitionItem",children:[Object(l.jsx)("dt",{children:"Gender"}),Object(l.jsx)("dd",{children:t.gender})]}),Object(l.jsxs)("div",{className:"definitionItem",children:[Object(l.jsx)("dt",{children:"Type"}),Object(l.jsx)("dd",{children:t.type||"-"})]}),Object(l.jsxs)("div",{className:"definitionItem",children:[Object(l.jsx)("dt",{children:"Status"}),Object(l.jsx)("dd",{children:t.status})]}),Object(l.jsxs)("div",{className:"definitionItem",children:[Object(l.jsx)("dt",{children:"Origin"}),Object(l.jsx)("dd",{children:c})]}),Object(l.jsxs)("div",{className:"definitionItem",children:[Object(l.jsx)("dt",{children:"Location"}),Object(l.jsx)("dd",{children:n})]}),Object(l.jsxs)("div",{className:"definitionItem",children:[Object(l.jsx)("dt",{children:"Episodes"}),Object(l.jsx)("dd",{children:t.episode.length})]})]})},$=function(e){var t=e.item,c=Object(n.useState)(U(t.episode)),s=Object(d.a)(c,1)[0],a=D("episode",s);return Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{children:t.name}),Object(l.jsx)("section",{children:Object(l.jsxs)("div",{className:"Char",children:[Object(l.jsx)("div",{className:"Char__content",children:Object(l.jsx)(k,{children:Object(l.jsx)("img",{src:t.image,alt:""})})}),Object(l.jsx)("div",{className:"Char__content Char__content--fluid",children:Object(l.jsx)(Y,{item:t})})]})}),Object(l.jsxs)("section",{children:[Object(l.jsx)(u,{children:"Episodes:"}),Object(l.jsx)(I,{items:a,type:"episode"})]})]})},ee=function(e){var t=e.match,c=X("character",t.params.id);return Object(l.jsx)(W,{item:c,Content:$})},te=function(e){var t=e.item;return Object(l.jsxs)("dl",{children:[Object(l.jsxs)("div",{className:"definitionItem",children:[Object(l.jsx)("dt",{children:"Date"}),Object(l.jsx)("dd",{children:t.air_date})]}),Object(l.jsxs)("div",{className:"definitionItem",children:[Object(l.jsx)("dt",{children:"Code"}),Object(l.jsx)("dd",{children:t.episode})]}),Object(l.jsxs)("div",{className:"definitionItem",children:[Object(l.jsx)("dt",{children:"Characters"}),Object(l.jsx)("dd",{children:t.characters.length})]})]})},ce=function(e){var t=e.item,c=Object(n.useState)(U(t.characters)),s=Object(d.a)(c,1)[0],a=D("character",s);return Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{children:t.name}),Object(l.jsx)("section",{children:Object(l.jsx)(te,{item:t})}),Object(l.jsxs)("section",{children:[Object(l.jsx)(u,{children:"Characters:"}),Object(l.jsx)(I,{items:a,type:"character"})]})]})},ne=function(e){var t=e.match,c=X("episode",t.params.id);return Object(l.jsx)(W,{item:c,Content:ce})},se=function(e){var t=e.item;return Object(l.jsxs)("dl",{children:[Object(l.jsxs)("div",{className:"definitionItem",children:[Object(l.jsx)("dt",{children:"Type"}),Object(l.jsx)("dd",{children:t.type})]}),Object(l.jsxs)("div",{className:"definitionItem",children:[Object(l.jsx)("dt",{children:"Dimension"}),Object(l.jsx)("dd",{children:t.dimension})]}),Object(l.jsxs)("div",{className:"definitionItem",children:[Object(l.jsx)("dt",{children:"Residents"}),Object(l.jsx)("dd",{children:t.residents.length})]})]})},ae=function(e){var t=e.item,c=Object(n.useState)(U(t.residents)),s=Object(d.a)(c,1)[0],a=D("character",s),i=0===s.length?Object(l.jsx)("div",{children:"No one lives here."}):Object(l.jsx)(I,{items:a,type:"character"});return Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{children:t.name}),Object(l.jsx)("section",{children:Object(l.jsx)(se,{item:t})}),Object(l.jsxs)("section",{children:[Object(l.jsx)(u,{children:"Residents:"}),i]})]})},ie=function(e){var t=e.match,c=X("location",t.params.id);return Object(l.jsx)(W,{item:c,Content:ae})},re=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(h,{}),Object(l.jsx)("main",{className:"container",children:Object(l.jsxs)(j.d,{children:[Object(l.jsx)(j.b,{exact:!0,path:"/",component:T}),Object(l.jsx)(j.b,{strict:!0,exact:!0,path:"/search/:type/:by/:text/:page?",component:q}),Object(l.jsx)(j.b,{strict:!0,exact:!0,path:"/characters/:page?",component:Z}),Object(l.jsx)(j.b,{strict:!0,exact:!0,path:"/locations/:page?",component:K}),Object(l.jsx)(j.b,{strict:!0,exact:!0,path:"/episodes/:page?",component:Q}),Object(l.jsx)(j.b,{strict:!0,exact:!0,path:"/character/:id",component:ee}),Object(l.jsx)(j.b,{strict:!0,exact:!0,path:"/location/:id",component:ie}),Object(l.jsx)(j.b,{strict:!0,exact:!0,path:"/episode/:id",component:ne}),Object(l.jsx)(j.a,{from:"/",to:"/"})]})})]})};c(70);i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(re,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.21ff4022.chunk.js.map