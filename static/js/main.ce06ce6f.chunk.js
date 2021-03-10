(this["webpackJsonptravel-app"]=this["webpackJsonptravel-app"]||[]).push([[0],{132:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(28),r=n.n(o),i=(n(98),n(47)),l=n(8),s=n(166),u=n(163),j=n(9),b=function(e){return{type:"LOADER",payload:e}},d=function(e){return{type:"ERROR",payload:e.message}},m=n(52),p=n.n(m),h="https://rss-travel-app.herokuapp.com",O=function(){return function(e,t){e(b(!0));var n=t(),a=n.locale;return function(e,t){var n="".concat(h,"/countries?locale=").concat(t,"&search=").concat(e);return p.a.get(n).then((function(e){return e.data}))}(n.searchString,a).then((function(t){return e(g(t))})).catch((function(t){return e(d(t))})).finally((function(){return e(e(b(!1)))}))}},g=function(e){return{type:"COUNTRIES",payload:e}},f=function(e){return function(t,n){t(b(!0));var a=n().locale;return function(e,t){var n="".concat(h,"/countries/").concat(e,"?locale=").concat(t);return p.a.get(n).then((function(e){return e.data}))}(e,a).then((function(e){return t({type:"COUNTRY",payload:e})})).catch((function(e){return t(d(e))})).finally((function(){return t(t(b(!1)))}))}},x=n(153),v=n(152),y=n(15),w=n(154),C=n(155),N=n(159),k=n(157),L=n(156),S=n(160),R=n(158),B=n(2),I=Object(v.a)((function(e){return{root:{maxWidth:345,margin:"0 auto","&:hover":{boxShadow:"0 5px 8px 0 ".concat(Object(y.b)(e.palette.primary.main,.4),",\n                        0 5px 8px 0 ").concat(Object(y.b)(e.palette.primary.main,.4)),"& *":{color:e.palette.primary.light}}}}}));var z=function(e){var t=e.countries,n=e.onPreview,a=I();return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(x.a,{container:!0,spacing:4,children:t.map((function(e){return Object(B.jsx)(x.a,{item:!0,xs:12,sm:6,md:3,children:Object(B.jsxs)(w.a,{className:a.root,children:[Object(B.jsxs)(C.a,{children:[Object(B.jsx)(L.a,{component:"img",alt:e.capital.name,height:"140",image:e.image,title:e.name}),Object(B.jsxs)(k.a,{children:[Object(B.jsx)(R.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(B.jsxs)(R.a,{variant:"body2",color:"textSecondary",component:"p",children:["Capital: ",e.capital.name]})]})]}),Object(B.jsxs)(N.a,{children:[Object(B.jsx)(S.a,{size:"small",color:"primary",children:"Share"}),Object(B.jsx)(S.a,{size:"small",color:"primary",onClick:function(){return n(e.isoCode)},children:"Learn More"})]})]})},e.isoCode)}))})})},E=n(161),F=Object(v.a)({root:{justifyContent:"center",alignItems:"center",position:"absolute",top:0,left:0,right:0,bottom:0}}),T=function(){var e=F();return Object(B.jsx)(x.a,{container:!0,spacing:4,className:e.root,children:Object(B.jsx)(E.a,{size:"10rem"})})},D=Object(j.b)((function(e){return{loader:e.loader,countries:e.countries,locale:e.locale}}),(function(e){return{onLoadCountries:function(){return e(O())}}}))((function(e){var t=e.loader,n=e.locale,c=void 0===n?"en":n,o=e.countries,r=e.onLoadCountries,i=Object(l.f)();Object(a.useEffect)((function(){r()}),[c]);var s=Object(a.useCallback)((function(e){return i.push("/countries/".concat(e))}),[i]);return Object(B.jsxs)(B.Fragment,{children:[t&&Object(B.jsx)(T,{}),!t&&o.length>0&&Object(B.jsx)(z,{countries:o,onPreview:s})]})})),M=n(167),G=n(87),A=n(31),P=n(40),W=n.n(P);W.a.accessToken="pk.eyJ1IjoiZWxlZG9uIiwiYSI6ImNrbTBmaGJrMjFpdzMydXJ6dDZmZW1vMWYifQ.7z-Hdb4FoPZCKJYM1it7Tw";var _=function(e){var t=e.className,n=e.isoCode,c=e.capitalCoordinates,o=e.locale,r=Object(a.useRef)(),i=Object(a.useState)(c.lon),l=Object(A.a)(i,2),s=l[0],u=l[1],j=Object(a.useState)(c.lat),b=Object(A.a)(j,2),d=b[0],m=b[1],p=Object(a.useState)(4),h=Object(A.a)(p,2),O=h[0],g=h[1];return Object(a.useEffect)((function(){var e=new W.a.Map({container:r.current,style:"mapbox://styles/mapbox/streets-v11",center:[s,d],zoom:O});return e.on("move",(function(){u(e.getCenter().lng.toFixed(6)),m(e.getCenter().lat.toFixed(6)),g(e.getZoom().toFixed(4))})),e.on("load",(function(){(new W.a.Marker).setLngLat([c.lon,c.lat]).addTo(e),e.addControl(new W.a.FullscreenControl),e.addLayer({id:"country-boundaries",source:{type:"vector",url:"mapbox://mapbox.country-boundaries-v1"},"source-layer":"country_boundaries",type:"fill",paint:{"fill-color":"#008080","fill-opacity":.4}},"country-label"),e.setLayoutProperty("country-label","text-field",["get","name_".concat("uk"!==o?o:"en")]),e.setFilter("country-boundaries",["in","iso_3166_1_alpha_3",n])})),function(){return e.remove()}}),[]),Object(B.jsx)(M.a,{className:"map-container ".concat(t),ref:r})};_.defaultProps={locale:"en",className:""};var Z=_,H=Object(j.b)((function(e){return{isoCode:e.country.isoCode,locale:e.locale,capitalCoordinates:e.country.capital.coordinates}}))((function(e){var t=e.className,n=e.locale,a=e.capitalCoordinates,c=e.isoCode;return Object(B.jsx)(Z,{locale:n,capitalCoordinates:a,isoCode:c,className:t})})),U=Object(v.a)((function(e){return{date:{fontSize:"24px"},time:{fontSize:"28px"},center:{textAlign:"center"}}}));var J=function(e){var t,n=e.locale,c=e.timezone,o=U(),r=c.name,i={timeZone:r,month:"long",day:"numeric",weekday:"long"},l={timeZone:r,hour:"numeric",minute:"numeric",second:"numeric",hour12:!1},s=function(){return(new Date).toLocaleString(n,i)},u=function(){return(new Date).toLocaleString(n,l)},j=Object(a.useState)(s()),b=Object(A.a)(j,2),d=b[0],m=b[1],p=Object(a.useState)(u()),h=Object(A.a)(p,2),O=h[0],g=h[1];return Object(a.useEffect)((function(){var e=setInterval((function(){m(s()),g(u())}),1e3);return function(){return clearInterval(e)}})),Object(B.jsxs)(M.a,{className:o.center,children:[Object(B.jsx)(R.a,{className:o.date,children:(t=d,t[0].toUpperCase()+t.slice(1))}),Object(B.jsx)(R.a,{className:o.time,children:O})]})},Y=Object(j.b)((function(e){return{locale:e.locale,timezone:e.country.timezone}}))((function(e){var t=e.locale,n=e.timezone;return Object(B.jsx)(J,{locale:t,timezone:n})})),K=n(16),Q=n(13),V=n(74),X=n.n(V);function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,t){return e.push({original:t.image,thumbnail:t.image,description:t.description,thumbnailClass:"sight-thumbnail"}),e}),[])}n(130);var $=n(75),ee=n.n($),te=n(76),ne=n.n(te),ae=n(77),ce=n.n(ae),oe=n(78),re=n.n(oe);var ie=function(e){var t=e.title,n=e.data.sights,a=Object(v.a)((function(e){var t;return{icon:(t={},Object(Q.a)(t,e.breakpoints.down("sm"),{fontSize:"2rem"}),Object(Q.a)(t,e.breakpoints.up("md"),{fontSize:"3.5rem"}),Object(Q.a)(t,e.breakpoints.up("lg"),{fontSize:"4rem"}),t),fullScreenBtn:{bottom:"initial",top:"0"}}}))();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h1",{align:"center",children:t}),Object(B.jsx)(X.a,Object(K.a)(Object(K.a)({renderLeftNav:function(e,t){return Object(B.jsx)("button",{className:"image-gallery-icon image-gallery-left-nav",disabled:t,onClick:e,children:Object(B.jsx)(ee.a,{className:a.icon})})},renderRightNav:function(e,t){return Object(B.jsx)("button",{className:"image-gallery-icon image-gallery-right-nav",disabled:t,onClick:e,children:Object(B.jsx)(ne.a,{className:a.icon})})},renderFullscreenButton:function(e,t){return Object(B.jsx)("button",{type:"button",className:"image-gallery-icon image-gallery-fullscreen-button image-gallery-fullscreen-button ".concat(a.fullScreenBtn," ").concat(t?" active":""),onClick:e,children:t?Object(B.jsx)(re.a,{className:a.icon}):Object(B.jsx)(ce.a,{className:a.icon})})}},{showPlayButton:!1,thumbnailPosition:"right",onErrorImageURL:"https://picsum.photos/id/1015/1000/600/"}),{},{items:q(n)}))]})},le=Object(j.b)((function(e){return{sights:e.country.sights}}))((function(e){return Object(B.jsx)(ie,{title:"\u0414\u043e\u0441\u0442\u043e\u043f\u0440\u0438\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",data:e})})),se=Object(v.a)((function(e){return{box:{position:"relative",paddingBottom:"56.25%",paddingTop:"25px",height:"0",maxWidth:"1920px",margin:"0 auto"},player:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}}));var ue=function(e){var t=e.title,n=e.video.video,a=se(),c=function(e){var t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return t&&11===t[2].length?t[2]:null}(n);return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h1",{align:"center",children:t}),c?Object(B.jsx)(M.a,{className:a.box,children:Object(B.jsx)("iframe",{title:t,className:a.player,type:"text/html",src:"https://www.youtube.com/embed/".concat(c),frameBorder:"0",allow:"accelerometer",autoPlay:!0,"clipboard-write":"true","encrypted-media":"true",gyroscope:"true","picture-in-picture":"true",allowFullScreen:!0})}):Object(B.jsx)("h1",{align:"center",children:"Oops something went wrong..."})]})},je=Object(j.b)((function(e){return{video:e.country.video}}))((function(e){return Object(B.jsx)(ue,{title:"\u0412\u0438\u0434\u0435\u043e",video:e})})),be=Object(v.a)((function(e){return{countryMap:{overflow:"hidden",position:"relative",minHeight:"40vh"},descriptionGrid:{padding:e.spacing(0,10,0,0)},widgetBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[200],marginBottom:e.spacing(2)},image:{width:"100%"},capital:{padding:e.spacing(3,0,2,0)}}}));var de=function(e){var t=e.country,n=be();return Object(B.jsxs)(M.a,{children:[Object(B.jsx)(R.a,{variant:"h3",gutterBottom:!0,children:t.name}),Object(B.jsxs)(x.a,{container:!0,children:[Object(B.jsxs)(x.a,{item:!0,xs:12,md:9,className:n.descriptionGrid,children:[Object(B.jsx)("img",{className:n.image,src:t.image,alt:t.name}),Object(B.jsxs)(R.a,{className:n.capital,children:[Object(B.jsx)("b",{children:"\u0421\u0442\u043e\u043b\u0438\u0446\u0430:"})," ",t.capital.name]}),Object(B.jsx)(R.a,{gutterBottom:!0,children:t.description})]}),Object(B.jsxs)(x.a,{item:!0,xs:12,md:3,children:[Object(B.jsx)(G.a,{elevation:0,className:n.widgetBox,children:"\u041f\u043e\u0433\u043e\u0434\u0430"}),Object(B.jsx)(G.a,{elevation:0,className:n.widgetBox,children:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"}),Object(B.jsx)(G.a,{elevation:0,className:n.widgetBox,children:Object(B.jsx)(Y,{})})]})]}),Object(B.jsx)(M.a,{my:5,children:Object(B.jsx)(le,{})}),Object(B.jsx)(M.a,{my:5,children:Object(B.jsx)(H,{className:n.countryMap})}),Object(B.jsx)(M.a,{my:5,children:Object(B.jsx)(je,{})})]})},me=Object(j.b)((function(e){return{loader:e.loader,country:e.country,locale:e.locale,error:e.error}}),(function(e){return{onLoadCountry:function(t){return e(f(t))}}}))((function(e){var t=e.loader,n=e.locale,c=void 0===n?"en":n,o=e.country,r=e.onLoadCountry,i=e.error,s=Object(l.g)().isoCode,u=Object(l.f)();return Object(a.useEffect)((function(){r(s)}),[c]),Object(a.useEffect)((function(){i&&u.push("/not-found")}),[i,u]),Object(B.jsxs)(B.Fragment,{children:[t&&Object(B.jsx)(T,{}),!t&&!!o&&Object(B.jsx)(de,{country:o})]})})),pe=n(162),he=n(164),Oe=n(168),ge=n(165),fe=n(80),xe=n.n(fe),ve=(n(82),n(81)),ye=n.n(ve),we=n(79),Ce=n.n(we),Ne=Object(v.a)((function(e){return{select:{color:Object(y.b)(e.palette.common.white,.5),fontSize:"1rem",padding:"8px",minWidth:"5rem",borderRadius:e.shape.borderRadius,backgroundColor:Object(y.b)(e.palette.background.default,.15),border:"none",outline:"none",appearance:"none","&:hover":{backgroundColor:Object(y.b)(e.palette.background.default,.4)},"&>option":{color:e.palette.common.black}},container:Object(Q.a)({display:"flex",flexDirection:"row",alignItems:"center"},e.breakpoints.down("md"),{marginRight:e.spacing(1)}),icon:Object(Q.a)({color:Object(y.b)(e.palette.common.white,.5),marginRight:e.spacing(1)},e.breakpoints.down("md"),{display:"none"})}})),ke=function(e){var t=e.currentLocale,n=e.onLocaleChange,c=Ne(),o=Object(a.useCallback)((function(e){n(e.target.value)}),[n]);return Object(B.jsxs)(M.a,{className:c.container,children:[Object(B.jsx)(Ce.a,{className:c.icon}),Object(B.jsxs)("select",{value:t,onChange:o,className:c.select,children:[Object(B.jsx)("option",{value:"ru",children:"Russian"}),Object(B.jsx)("option",{value:"en",children:"English"}),Object(B.jsx)("option",{value:"uk",children:"Ukranian"})]})]})},Le=Object(j.b)((function(e){return{locale:e.locale}}),(function(e){return{onLocaleChange:function(t){return e({type:"LOCALE",payload:t})}}}))((function(e){var t=e.locale,n=void 0===t?"en":t,a=e.onLocaleChange,c=e.className;return Object(B.jsx)(ke,{currentLocale:n,onLocaleChange:a,className:c})})),Se=Object(v.a)((function(e){return{toolbar:Object(Q.a)({},e.breakpoints.down("sm"),{justifyContent:"space-between"}),title:Object(Q.a)({flexGrow:3,display:"none"},e.breakpoints.up("sm"),{display:"block"}),titleLink:{color:"white",textDecoration:"none",fontSize:"18px"},languageSwitch:{flexGrow:0},search:Object(Q.a)({flexGrow:1,display:"flex",justifyContent:"space-between",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(y.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(y.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},searchButton:{color:"white",border:"2px solid rgba(255, 255, 255, 0.2)",borderLeftColor:"white","&:hover":{border:"none"}},inputRoot:{color:"inherit",flexGrow:"1"},inputInput:Object(Q.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),loginBtn:{marginLeft:"10px"}}}));var Re=Object(j.b)((function(e){return{countries:e.countries}}))((function(e){e.countries;var t=Se(),n=Object(l.h)({path:"/countries/:isoCode",strict:!0,sensitive:!0});return Object(B.jsx)(pe.a,{position:"fixed",children:Object(B.jsx)(u.a,{maxWidth:"lg",children:Object(B.jsxs)(he.a,{disableGutters:!0,className:t.toolbar,children:[Object(B.jsx)(R.a,{className:t.title,variant:"h6",noWrap:!0,children:Object(B.jsx)(i.b,{className:t.titleLink,to:"/",children:"Travel App"})}),!n&&Object(B.jsxs)("div",{className:t.search,children:[Object(B.jsx)("div",{className:t.searchIcon,children:Object(B.jsx)(xe.a,{})}),Object(B.jsx)(Oe.a,{placeholder:"Countries...",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onChange:function(){return console.log("change")}}),Object(B.jsx)(S.a,{variant:"outlined",color:"primary",className:t.searchButton,onClick:function(){return console.log("search")},children:"Search"})]}),Object(B.jsx)(Le,{className:t.languageSwitch}),Object(B.jsx)(ge.a,{className:t.loginBtn,children:Object(B.jsx)(ye.a,{})})]})})})})),Be=n.p+"static/media/rs_school_1.1cc27900.svg",Ie=Object(v.a)((function(e){return{footer:{backgroundColor:e.palette.primary.main,color:"white",padding:e.spacing(3,0)},footerContainer:{justifyContent:"center",alignItems:"center"},date:Object(Q.a)({display:"flex",alignItems:"center",justifyContent:"flex-end"},e.breakpoints.down("sm"),{justifyContent:"center"}),gitHubLink:{color:"white",textDecoration:"none"},gitHubList:Object(Q.a)({display:"flex",flexGrow:1,alignItems:"center",justifyContent:"space-between"},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center",marginTop:"20px",marginBottom:"20px"}),logo:Object(Q.a)({width:"70px"},e.breakpoints.down("sm"),{textAlign:"center"})}})),ze=[{fullname:"Ivan Mikhalchanka",github:"https://github.com/spaceragga"},{fullname:"Aleksei Bulgak",github:"https://github.com/aleksei-bulgak-study"},{fullname:"Nikolai Voljenin",github:"https://github.com/Kvadeck"},{fullname:"Natalija Natein",github:"https://github.com/natein"},{fullname:"Alexandr Kudryavtcev",github:"https://github.com/kvalexandr"}],Ee=function(e){var t=e.className,n=e.github,a=e.fullname;return Object(B.jsx)("a",{className:t,target:"_blank",rel:"noreferrer",href:n,children:a})};var Fe=function(e){e.className;var t=Ie();return Object(B.jsx)("footer",{className:t.footer,children:Object(B.jsx)(u.a,{maxWidth:"lg",className:t.footerContainer,children:Object(B.jsxs)(x.a,{container:!0,children:[Object(B.jsx)(x.a,{item:!0,xs:12,md:2,className:t.logo,children:Object(B.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://rs.school/js/",children:Object(B.jsx)("img",{className:t.logo,src:Be,alt:"RSS"})})}),Object(B.jsx)(x.a,{item:!0,xs:12,md:8,className:t.gitHubList,children:ze.map((function(e){return Object(B.jsx)(Ee,{className:t.gitHubLink,fullname:e.fullname,github:e.github},e.fullname)}))}),Object(B.jsx)(x.a,{item:!0,xs:12,md:2,className:t.date,children:(new Date).getFullYear()})]})})})},Te=Object(v.a)((function(e){return{root:{position:"absolute",top:0,left:0,bottom:0,right:0,textAlign:"center",color:e.palette.text.primary,p:{color:e.palette.text.secondary}}}}));var De=Object(j.b)((function(e){return{error:e.error}}))((function(e){var t=e.error,n=e.className;return Object(B.jsxs)(x.a,{container:!0,spacing:2,className:"".concat(Te().root," ").concat(n),direction:"column",justify:"center",children:[Object(B.jsx)(u.a,{component:"h1",children:"Page was not found."}),Object(B.jsx)(u.a,{component:"p",color:!0,children:t})]})})),Me=n(33),Ge=n(83),Ae=n(84),Pe=n(85),We={countries:[],country:null,locale:"uk",searchString:"",loader:!1,error:null},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADER":return Object(K.a)(Object(K.a)({},e),{},{loader:t.payload});case"ERROR":return Object(K.a)(Object(K.a)({},e),{},{loader:!1,error:t.payload});case"COUNTRIES":return Object(K.a)(Object(K.a)({},e),{},{countries:Object(Pe.a)(t.payload)});case"COUNTRY":return Object(K.a)(Object(K.a)({},e),{},{country:t.payload});case"LOCALE":return Object(K.a)(Object(K.a)({},e),{},{locale:t.payload});default:return e}},Ze=Object(Ge.composeWithDevTools)(Object(Me.applyMiddleware)(Ae.a)),He=Object(Me.createStore)(_e,Ze),Ue=Object(v.a)((function(e){return{rootContainer:{display:"flex",flexDirection:"column",minHeight:"100vh"},mainContent:{marginTop:e.spacing(12),marginBottom:e.spacing(4),flexGrow:1,position:"relative"},footer:{flex:"0 0 auto"}}}));var Je=function(){var e=Ue();return Object(B.jsx)(j.a,{store:He,children:Object(B.jsxs)(i.a,{children:[Object(B.jsx)(s.a,{}),Object(B.jsxs)(M.a,{component:"div",className:e.rootContainer,children:[Object(B.jsx)(Re,{}),Object(B.jsx)(u.a,{component:"main",className:e.mainContent,children:Object(B.jsxs)(l.c,{children:[Object(B.jsx)(l.a,{path:["/countries","/"],component:D,exact:!0}),Object(B.jsx)(l.a,{path:"/countries/:isoCode",component:me}),Object(B.jsx)(l.a,{path:"*",component:De})]})}),Object(B.jsx)(Fe,{className:e.footer})]})]})})};r.a.render(Object(B.jsx)(c.a.StrictMode,{children:Object(B.jsx)(Je,{})}),document.getElementById("root"))},98:function(e,t,n){}},[[132,1,2]]]);
//# sourceMappingURL=main.ce06ce6f.chunk.js.map