(this["webpackJsonptravel-app"]=this["webpackJsonptravel-app"]||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(23),r=n.n(o),i=(n(91),n(47)),s=n(7),l=n(155),u=n(156),j=n(25),b=function(e){return{type:"LOADER",payload:e}},d=function(e){return{type:"ERROR",payload:e.message}},p=n(49),h=n.n(p),m="https://rss-travel-app.herokuapp.com",O=function(){return function(e,t){e(b(!0));var n=t(),a=n.locale;return function(e,t){var n="".concat(m,"/countries?locale=").concat(t,"&search=").concat(e);return h.a.get(n).then((function(e){return e.data}))}(n.searchString,a).then((function(t){return e(f(t))})).catch((function(t){return e(d(t))})).finally((function(){return e(e(b(!1)))}))}},f=function(e){return{type:"COUNTRIES",payload:e}},x=function(e){return function(t,n){t(b(!0));var a=n().locale;return function(e,t){var n="".concat(m,"/countries/").concat(e,"?locale=").concat(t);return h.a.get(n).then((function(e){return e.data}))}(e,a).then((function(e){return t({type:"COUNTRY",payload:e})})).catch((function(e){return t(d(e))})).finally((function(){return t(t(b(!1)))}))}},g=n(144),y=n(143),v=n(145),C=n(146),w=n(150),N=n(148),k=n(147),L=n(151),R=n(149),S=n(2),I=Object(y.a)({root:{maxWidth:345,margin:"0 auto"},container:{marginTop:"85px"}});var T=function(e){var t=e.countries,n=e.onPreview,a=I();return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(g.a,{container:!0,spacing:2,className:a.container,children:t.map((function(e){return Object(S.jsx)(g.a,{item:!0,xs:12,sm:6,md:4,children:Object(S.jsxs)(v.a,{className:a.root,children:[Object(S.jsxs)(C.a,{children:[Object(S.jsx)(k.a,{component:"img",alt:e.capital.name,height:"140",image:e.image,title:e.name}),Object(S.jsxs)(N.a,{children:[Object(S.jsx)(R.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(S.jsxs)(R.a,{variant:"body2",color:"textSecondary",component:"p",children:["Capital: ",e.capital.name]})]})]}),Object(S.jsxs)(w.a,{children:[Object(S.jsx)(L.a,{size:"small",color:"primary",children:"Share"}),Object(S.jsx)(L.a,{size:"small",color:"primary",onClick:function(){return n(e.isoCode)},children:"Learn More"})]})]})},e.isoCode)}))})})},B=Object(j.b)((function(e){return{loader:e.loader,countries:e.countries,locale:e.locale}}),(function(e){return{onLoadCountries:function(){return e(O())}}}))((function(e){var t=e.loader,n=(e.locale,e.countries),c=e.onLoadCountries,o=Object(s.g)();Object(a.useEffect)((function(){c()}),[]);var r=Object(a.useCallback)((function(e){return o.push("/countries/".concat(e))}),[o]);return Object(S.jsxs)(S.Fragment,{children:[t&&Object(S.jsx)("h1",{children:"Loading data"}),!t&&n.length>0&&Object(S.jsx)(T,{countries:n,onPreview:r})]})})),M=n(44),E=n(157),F=n(34),_=n.n(F);_.a.accessToken="pk.eyJ1IjoiZWxlZG9uIiwiYSI6ImNrbTBmaGJrMjFpdzMydXJ6dDZmZW1vMWYifQ.7z-Hdb4FoPZCKJYM1it7Tw";var D=function(e){var t=e.className,n=e.isoCode,c=e.capitalCoordinates,o=e.locale,r=Object(a.useRef)(),i=Object(a.useState)(c.lon),s=Object(M.a)(i,2),l=s[0],u=s[1],j=Object(a.useState)(c.lat),b=Object(M.a)(j,2),d=b[0],p=b[1],h=Object(a.useState)(4),m=Object(M.a)(h,2),O=m[0],f=m[1];return Object(a.useEffect)((function(){var e=new _.a.Map({container:r.current,style:"mapbox://styles/mapbox/streets-v11",center:[l,d],zoom:O});return e.on("move",(function(){u(e.getCenter().lng.toFixed(6)),p(e.getCenter().lat.toFixed(6)),f(e.getZoom().toFixed(4))})),e.on("load",(function(){(new _.a.Marker).setLngLat([c.lon,c.lat]).addTo(e),e.addControl(new _.a.FullscreenControl),e.addLayer({id:"country-boundaries",source:{type:"vector",url:"mapbox://mapbox.country-boundaries-v1"},"source-layer":"country_boundaries",type:"fill",paint:{"fill-color":"#008080","fill-opacity":.4}},"country-label"),e.setLayoutProperty("country-label","text-field",["get","name_".concat(o)]),e.setFilter("country-boundaries",["in","iso_3166_1_alpha_3",n])})),function(){return e.remove()}}),[]),Object(S.jsx)(E.a,{className:"map-container ".concat(t),ref:r})};D.defaultProps={locale:"en",className:""};var W=D,G=Object(j.b)((function(e){return{isoCode:e.country.isoCode,locale:e.locale,capitalCoordinates:e.country.capital.coordinates}}))((function(e){var t=e.className,n=e.locale,a=e.capitalCoordinates,c=e.isoCode;return Object(S.jsx)(W,{locale:n,capitalCoordinates:a,isoCode:c,className:t})})),H=Object(y.a)({container:{marginTop:"85px"},countryMap:{overflow:"hidden",position:"relative",minHeight:"40vh"}});var J=function(e){var t=e.country,n=H();return Object(S.jsxs)(g.a,{container:!0,spacing:2,className:n.container,direction:"column",children:[Object(S.jsxs)("h3",{children:["Country ",t.isoCode]}),Object(S.jsx)(G,{className:n.countryMap})]})},P=Object(j.b)((function(e){return{loader:e.loader,country:e.country,locale:e.locale}}),(function(e){return{onLoadCountry:function(t){return e(x(t))}}}))((function(e){var t=e.loader,n=(e.locale,e.country),c=e.onLoadCountry,o=Object(s.i)().isoCode;return Object(a.useEffect)((function(){c(o)}),[]),Object(S.jsxs)(S.Fragment,{children:[t&&Object(S.jsx)("h1",{children:"Loading data"}),!t&&!!n&&Object(S.jsx)(J,{country:n})]})})),Y=n(18),Z=n(152),z=n(153),A=n(154),U=n(158),K=n(13),Q=n(71),V=n.n(Q),X=n(72),q=n.n(X),$=(n(74),n(73)),ee=n.n($),te=Object(y.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(Y.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(Y.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(K.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(K.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(Y.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),loginBtn:{marginLeft:"10px"}}}));function ne(){var e=te();return Object(S.jsx)("div",{className:e.root,children:Object(S.jsx)(Z.a,{position:"fixed",children:Object(S.jsxs)(z.a,{children:[Object(S.jsx)(A.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(S.jsx)(V.a,{})}),Object(S.jsx)(R.a,{className:e.title,variant:"h6",noWrap:!0,children:"Travel App"}),Object(S.jsxs)("div",{className:e.search,children:[Object(S.jsx)("div",{className:e.searchIcon,children:Object(S.jsx)(q.a,{})}),Object(S.jsx)(U.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]}),Object(S.jsx)(A.a,{className:e.loginBtn,children:Object(S.jsx)(ee.a,{})})]})})})}var ae=n.p+"static/media/rs_school_1.1cc27900.svg",ce=Object(y.a)((function(e){return{root:{flexGrow:1,width:"100%",position:"absolute",backgroundColor:e.palette.primary.main,marginTop:"35px",color:"white",left:0,bottom:0},menuButton:{marginRight:e.spacing(2)},title:Object(Y.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),toolBar:Object(Y.a)({display:"flex",justifyContent:"space-between"},e.breakpoints.down("sm"),{flexDirection:"column"}),gitHubLink:{color:"white",textDecoration:"none"},gitHubList:Object(Y.a)({display:"flex",width:"35%",justifyContent:"space-between"},e.breakpoints.down("sm"),{width:"95%",flexDirection:"column",alignItems:"center",marginBottom:"15px"}),logo:{width:"70px"}}})),oe=[{fullname:"Ivan Mikhalchanka",github:"https://github.com/spaceragga"},{fullname:"Aleksei Bulgak",github:"https://github.com/aleksei-bulgak-study"},{fullname:"Nikolai Voljenin",github:"https://github.com/Kvadeck"},{fullname:"Natalija Natein",github:"https://github.com/natein"}],re=function(e){var t=e.className,n=e.github,a=e.fullname;return Object(S.jsx)("a",{className:t,target:"_blank",rel:"noreferrer",href:n,children:a})};var ie=function(e){var t=e.className,n=ce();return Object(S.jsx)("footer",{className:"".concat(n.root," ").concat(t),children:Object(S.jsxs)(z.a,{className:n.toolBar,children:[Object(S.jsx)(A.a,{children:Object(S.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://rs.school/js/",children:Object(S.jsx)("img",{className:n.logo,src:ae,alt:"RSS"})})}),Object(S.jsx)("div",{className:n.gitHubList,children:oe.map((function(e){return Object(S.jsx)(re,{className:n.gitHubLink,fullname:e.fullname,github:e.github},e.fullname)}))}),Object(S.jsx)(R.a,{variant:"h6",noWrap:!0,children:(new Date).getFullYear()})]})})};var se=function(){var e=Object(s.h)();return Object(S.jsxs)("h1",{children:["Not found for ",e.pathname]})},le=n(27),ue=n(75),je=n(76),be=n(77),de=n(22),pe={countries:[],country:null,locale:"ru",searchString:"",loader:!1,error:null},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADER":return Object(de.a)(Object(de.a)({},e),{},{loader:t.payload});case"ERROR":return Object(de.a)(Object(de.a)({},e),{},{loader:!1,error:t.payload});case"COUNTRIES":return Object(de.a)(Object(de.a)({},e),{},{countries:Object(be.a)(t.payload)});case"COUNTRY":return Object(de.a)(Object(de.a)({},e),{},{country:t.payload});default:return e}},me=Object(ue.composeWithDevTools)(Object(le.applyMiddleware)(je.a)),Oe=Object(le.createStore)(he,me);var fe=function(){return Object(S.jsx)(j.a,{store:Oe,children:Object(S.jsxs)(i.a,{children:[Object(S.jsx)(l.a,{}),Object(S.jsxs)(u.a,{children:[Object(S.jsx)(ne,{}),Object(S.jsxs)(s.d,{children:[Object(S.jsx)(s.b,{path:"/countries",component:B,exact:!0}),Object(S.jsx)(s.b,{path:"/countries/:isoCode",component:P}),Object(S.jsx)(s.b,{exact:!0,path:"/",children:Object(S.jsx)(s.a,{to:"/countries"})}),Object(S.jsx)(s.b,{path:"*",children:Object(S.jsx)(se,{})})]}),Object(S.jsx)(ie,{})]})]})})};r.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(fe,{})}),document.getElementById("root"))},91:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.fdc182c3.chunk.js.map