(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(1),c=n(26),s=n.n(c),o=n(9),i=n(35),u=n(77),j=n(78),l=n(7),b=n.n(l),d=n(10),O=n(24),h=n.n(O),f=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/googlebooks/".concat(t));case 2:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(b.a.mark((function e(t,n){var r,a,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="bearer ".concat(n),a={headers:{Authorization:r}},c={id:t.id,review:t.review,rating:t.rating,read:t.read,owned:t.owned,quotes:t.quotes},e.next=5,h.a.put("/api/googleBooks/edit",c,a);case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(b.a.mark((function e(t,n,r){var a,c,s,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="bearer ".concat(r),c={headers:{Authorization:a}},s={book_id:t,quote:n},e.next=5,h.a.post("/api/googleBooks/addquote",s,c);case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(b.a.mark((function e(t,n){var r,a,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="bearer ".concat(n),a={headers:{Authorization:r}},c={title:t.volumeInfo.title,author:t.volumeInfo.authors[0],linkToCoverImage:t.volumeInfo.imageLinks.thumbnail,review:t.review,rating:t.rating,read:t.read,quotes:t.quotes},e.next=5,h.a.post("/api/googlebooks",c,a);case 5:return s=e.sent,console.log("Lis\xe4tty kirja: ".concat(s.data.title)),e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(b.a.mark((function e(t,n){var r,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="bearer ".concat(n),a={headers:{Authorization:r}},e.next=4,h.a.delete("/api/googlebooks/delete",{data:{config:a,id:t}});case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(e){return function(){var t=Object(d.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:r=t.sent,n({type:"BOOK_SEARCH",data:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOK_SEARCH":case"INIT_SEARCH_RESULTS":return t.data;default:return e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BOOK_INFO":return t.data;case"RESET_BOOK_INFO":return null;default:return e}},y=n(58),S=n(12),C=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/user",t);case 2:return n=e.sent,console.log("User creation: ".concat(n.data)),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(e){return{type:"SHOW_NOTIFICATION",data:e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_NOTIFICATION":return t.data;case"RESET_MESSAGE":return null;default:return e}},_={bookInfo:null},T=function(e){return{type:"SET_OWNED_BOOK_INFO",data:{bookInfo:e}}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_OWNED_BOOK_INFO":case"RESET_OWNED_BOOK_INFO":return t.data;default:return e}},R={user:null},D=function(e,t,n){return function(){var r=Object(d.a)(b.a.mark((function r(a){var c;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p(e,t,n);case 3:return c=r.sent,r.next=6,a(T(c.data));case 6:a({type:"ADD_QUOTE",data:c.data}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},L=function(e){var t=e.newUsername,n=e.newPassword;return function(){var e=Object(d.a)(b.a.mark((function e(r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N({newUsername:t,newPassword:n});case 3:r({type:"CREATE_USER",data:R}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),r(I(e.t0.response.data.error));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},A=function(e){var t=e.username,n=e.password;return function(){var e=Object(d.a)(b.a.mark((function e(r){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C({username:t,password:n});case 3:a=e.sent,r({type:"LOGIN",data:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(I(e.t0.response.data.error));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},U=function(e,t){return function(){var n=Object(d.a)(b.a.mark((function n(r){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,x(e,t);case 3:return a=n.sent,n.next=6,r(T(a.data));case 6:r({type:"UPDATE_BOOK",data:e}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},K=function(e,t){return function(){var n=Object(d.a)(b.a.mark((function n(r){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m(e,t);case 3:return n.next=5,r((console.log("reseting book..."),{type:"RESET_OWNED_BOOK_INFO",data:_}));case 5:r({type:"DELETE_BOOK",data:e}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":case"LOGOUT":case"CREATE_USER":return t.data;case"ADD_BOOK":return Object(S.a)(Object(S.a)({},e),{},{user_books:[].concat(Object(y.a)(e.user_books),[t.data])});case"UPDATE_BOOK":return Object(S.a)(Object(S.a)({},e),{},{user_books:e.user_books.map((function(e){return e.id===t.data.id?Object(S.a)(Object(S.a)({},e),{},{rating:t.data.rating,review:t.data.review,quotes:t.data.quotes,read:t.data.read,owned:t.data.owned}):e}))});case"DELETE_BOOK":return Object(S.a)(Object(S.a)({},e),{},{user_books:e.user_books.filter((function(e){return e.id!==t.data}))});case"ADD_QUOTE":return Object(S.a)(Object(S.a)({},e),{},{user_books:e.user_books.map((function(e){return e.id===t.data.id?Object(S.a)(Object(S.a)({},e),{},{quotes:t.data.quotes}):e}))});case"RESET":return R;default:return e}},G=Object(i.combineReducers)({bookSearch:k,bookInfo:w,ownedBook:B,login:q,notification:E}),H=function(){try{var e=localStorage.getItem("userState");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),P=Object(i.createStore)(G,H,Object(j.composeWithDevTools)(Object(i.applyMiddleware)(u.a)));P.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("userState",t)}catch(n){return}}(P.getState())}));var F=P,W=n(126),M=n(117),z=n(79),J=n(118),Q=n(80),V=function(){var e=Object(o.b)(),t=function(){var t=Object(d.a)(b.a.mark((function t(r){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.preventDefault(),a=r.target.filter.value,e(g(a)),n();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=function(){document.getElementById("search bar").reset()};return Object(r.jsx)(W.a,{className:"mt-5 mb-5",id:"search bar",onSubmit:t,children:Object(r.jsxs)(M.a,{children:[Object(r.jsx)(z.a,{xs:{span:5,offset:3},sm:{span:6,offset:3},md:{span:6,offset:2},lg:{span:6,offset:2},children:Object(r.jsx)(W.a.Control,{type:"text",name:"filter",placeholder:"Search books"})}),Object(r.jsx)(z.a,{xs:1,children:Object(r.jsx)(J.a,{variant:"primary",type:"submit",children:Object(r.jsx)(Q.a,{})})})]})})},X=n(119),Y=n(20),Z=function(e){var t=e.info,n=Object(o.b)(),a=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"SET_BOOK_INFO",data:{bookInfo:t}});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)("p",{children:Object(r.jsx)(Y.b,{to:"/search/".concat(t.etag),children:Object(r.jsx)(X.a,{src:t.volumeInfo.imageLinks.thumbnail,onClick:function(){return a()}})})})},$=function(){for(var e=Object(o.c)((function(e){return e.bookSearch})),t=Object.keys(e).length,n=[],a=0,c=0,s=0,i=0;i<t;i++)c%6||(n[++a]=[]),void 0!==e[i].volumeInfo.imageLinks&&(n[a].push(e[i]),c++);return Object(r.jsx)("div",{children:n.map((function(e){return Object(r.jsx)(M.a,{className:"text-center",children:e.map((function(e){return Object(r.jsx)(z.a,{sm:6,md:4,lg:2,children:Object(r.jsx)(Z,{info:e},e.etag)},e.etag)}))},s++)}))})},ee=n(127),te=n(83),ne=function(){var e=Object(o.b)();return Object(r.jsxs)(ee.a,{bg:"dark",variant:"dark",children:[Object(r.jsx)(ee.a.Brand,{as:Y.b,to:"/",children:"My Library"}),Object(r.jsx)(te.a,{className:"mr-auto",children:Object(r.jsx)(te.a.Link,{as:Y.b,to:"/search",children:"Book finder"})}),Object(r.jsx)(te.a,{className:"ml-auto",children:Object(r.jsx)(te.a.Link,{as:Y.b,to:"/",onClick:function(){e({type:"INIT_SEARCH_RESULTS",data:[]}),e({type:"LOGOUT",data:R})},children:"Logout"})})]})},re=n(11),ae=n(121),ce=n(128),se=n(125),oe=n(120),ie=(n(41),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notification}));return null!==t?Object(r.jsxs)(oe.a,{className:"notification",variant:"danger",onClose:function(){e({type:"RESET_MESSAGE",data:null})},dismissible:!0,children:[Object(r.jsx)(oe.a.Heading,{children:Object(r.jsx)("strong",{children:"Oops!"})}),Object(r.jsx)("p",{children:t})]}):null}),ue=function(){var e=Object(o.b)(),t=Object(a.useState)(!1),n=Object(re.a)(t,2),c=n[0],s=n[1],i=function(){s(!1),k(""),C(""),_(!1),D(!1)},u=Object(a.useState)(""),j=Object(re.a)(u,2),l=j[0],O=j[1],h=Object(a.useState)(""),f=Object(re.a)(h,2),x=f[0],p=f[1],v=Object(a.useState)(""),m=Object(re.a)(v,2),g=m[0],k=m[1],w=Object(a.useState)(""),y=Object(re.a)(w,2),S=y[0],C=y[1],N=Object(a.useState)(!1),I=Object(re.a)(N,2),E=I[0],_=I[1],T=Object(a.useState)(!1),B=Object(re.a)(T,2),R=B[0],D=B[1],U=function(){var t=Object(d.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e(A({username:l,password:x})),O(""),p("");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),K=function(e,t){return e.length>=t},q=function(){var t=Object(d.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),K(g,5)||_(!0),K(S,5)?(console.log("Username: ".concat(g,", Password: ").concat(S)),e(L({newUsername:g,newPassword:S})),i()):D(!0);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)(ae.a,{fluid:!0,className:"testi",children:[Object(r.jsx)(ie,{className:"notify"}),Object(r.jsxs)(ce.a,{className:"card",bg:"light",border:"dark",children:[Object(r.jsx)(ce.a.Header,{className:"text-center",children:Object(r.jsx)("h2",{children:"Login"})}),Object(r.jsx)(ce.a.Body,{children:Object(r.jsxs)(W.a,{onSubmit:U,children:[Object(r.jsxs)(W.a.Group,{controlId:"formBasicText",children:[Object(r.jsx)(W.a.Label,{children:"Username"}),Object(r.jsx)(W.a.Control,{type:"text",name:"usernameLogin",value:l,placeholder:"Username",onChange:function(e){var t=e.target;return O(t.value)}})]}),Object(r.jsxs)(W.a.Group,{controlId:"formBasicPassword",children:[Object(r.jsx)(W.a.Label,{children:"Password"}),Object(r.jsx)(W.a.Control,{type:"password",name:"passwordLogin",value:x,placeholder:"Password",onChange:function(e){var t=e.target;return p(t.value)}})]}),Object(r.jsx)(J.a,{variant:"primary",type:"submit",children:"Login"})," ",Object(r.jsx)(J.a,{variant:"success",onClick:function(){return s(!0)},children:"Create User"})]})})]}),Object(r.jsxs)(se.a,{show:c,onHide:i,backdrop:"static",keyboard:!1,children:[Object(r.jsx)(se.a.Header,{closeButton:!0,children:Object(r.jsx)(se.a.Title,{children:"Register new user"})}),Object(r.jsx)(se.a.Body,{children:Object(r.jsxs)(W.a,{onSubmit:q,children:[Object(r.jsxs)(W.a.Group,{children:[Object(r.jsx)(W.a.Row,{children:Object(r.jsx)(W.a.Label,{children:"Username"})}),Object(r.jsx)(W.a.Row,{children:Object(r.jsx)(W.a.Control,{type:"text",name:"usernameRegister",value:g,placeholder:"Choose your username",onChange:function(e){var t,n=e.target;return t=n.value,k(t),void(K(t,5)?_(!1):_(!0))}})}),E&&Object(r.jsx)(W.a.Row,{style:{color:"red"},children:"Username must be at least 5 characters long!"})]}),Object(r.jsxs)(W.a.Group,{children:[Object(r.jsx)(W.a.Row,{children:Object(r.jsx)(W.a.Label,{children:"Password"})}),Object(r.jsx)(W.a.Row,{children:Object(r.jsx)(W.a.Control,{type:"password",name:"passwordRegister",value:S,placeholder:"Choose a secure password",onChange:function(e){var t,n=e.target;return t=n.value,C(t),void(K(t,5)?D(!1):D(!0))}})}),R&&Object(r.jsx)(W.a.Row,{style:{color:"red"},children:"Password must be at least 5 characters long!"})]}),Object(r.jsxs)(W.a.Group,{as:M.a,children:[Object(r.jsx)(z.a,{xs:3,children:Object(r.jsx)(J.a,{type:"submit",children:"Submit"})}),Object(r.jsx)(z.a,{xs:3,children:Object(r.jsx)(J.a,{variant:"danger",onClick:i,children:"Cancel"})})]})]})})]})]})},je=n(14),le=function(){var e=Object(o.c)((function(e){return e.bookInfo})),t=Object(o.c)((function(e){return e.login.token})),n=e.bookInfo,c=Object(a.useState)(!1),s=Object(re.a)(c,2),i=s[0],u=s[1],j=Object(o.b)(),l=function(){j(function(e,t){return function(){var n=Object(d.a)(b.a.mark((function n(r){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v(e,t);case 3:return a=n.sent,n.next=6,r(T(a.data));case 6:r({type:"ADD_BOOK",data:a.data}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(n,t)),u(!0)};return null===n?Object(r.jsx)("h2",{children:"undefined"}):i?Object(r.jsx)(je.a,{to:"/info/".concat(n.volumeInfo.title)}):Object(r.jsxs)(ae.a,{className:"pt-4 text-center",children:[Object(r.jsx)("h2",{children:n.volumeInfo.title}),Object(r.jsx)("h3",{children:n.volumeInfo.subtitle}),Object(r.jsx)("h5",{children:Object(r.jsx)("i",{children:n.volumeInfo.authors})}),Object(r.jsxs)(M.a,{className:"pt-4",children:[Object(r.jsx)(z.a,{md:6,children:Object(r.jsx)(X.a,{src:n.volumeInfo.imageLinks.thumbnail})}),Object(r.jsx)(z.a,{className:"text-justify",children:n.volumeInfo.description})]}),Object(r.jsxs)(M.a,{className:"pt-4",children:[Object(r.jsx)(z.a,{children:Object(r.jsx)(J.a,{onClick:function(){return l()},children:"Add book"})}),Object(r.jsx)(z.a,{})]})]})},be=n(122),de=n(30),Oe=function(){var e=Object(o.c)((function(e){return e.login.user_books})),t=Object(a.useState)("rating"),n=Object(re.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)("rating"),u=Object(re.a)(i,2),j=u[0],l=u[1],O=Object(a.useState)(!0),h=Object(re.a)(O,2),f=h[0],x=h[1],p=Object(a.useState)(!0),v=Object(re.a)(p,2),m=v[0],g=v[1],k=Object(a.useState)(!0),w=Object(re.a)(k,2),y=w[0],S=w[1],C=Object(o.b)(),N=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C(T(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){!function(){var t={title:"title",author:"author",rating:"rating"}[c];({title:m,author:y,rating:f})[j]?e.sort((function(e,n){return e[t]>n[t]?-1:e[t]<n[t]?1:0})):e.sort((function(e,n){return n[t]>e[t]?-1:n[t]<e[t]?1:0}))}()}),[c,f,m,y]);var I=function(e){l(e),s(e),E(e)},E=function(e){switch(e){case"rating":x(!f);break;case"title":g(!m);break;case"author":S(!y)}};return Object(r.jsx)(ae.a,{fluid:!0,className:"bookshelf",children:Object(r.jsx)(M.a,{children:Object(r.jsx)(z.a,{xs:2,md:6,children:Object(r.jsxs)(be.a,{bordered:!0,hover:!0,className:"taulukko",children:[Object(r.jsx)("thead",{bgcolor:"#d1975c",children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Cover"}),Object(r.jsx)("th",{children:Object(r.jsxs)(M.a,{children:[Object(r.jsx)(z.a,{xs:10,children:"Title"}),Object(r.jsx)(z.a,{xs:2,children:m?Object(r.jsx)(de.a,{className:"sortIcon",onClick:function(){return I("title")}}):Object(r.jsx)(de.b,{className:"sortIcon",onClick:function(){return I("title")}})})]})}),Object(r.jsx)("th",{children:Object(r.jsxs)(M.a,{children:[Object(r.jsx)(z.a,{xs:10,children:"Author"}),Object(r.jsx)(z.a,{xs:2,children:y?Object(r.jsx)(de.a,{className:"sortIcon",onClick:function(){return I("author")}}):Object(r.jsx)(de.b,{className:"sortIcon",onClick:function(){return I("author")}})})]})}),Object(r.jsx)("th",{children:Object(r.jsxs)(M.a,{children:[Object(r.jsx)(z.a,{xs:9,children:"Stars"}),Object(r.jsx)(z.a,{xs:1,children:f?Object(r.jsx)(de.c,{className:"sortIcon",onClick:function(){return I("rating")}}):Object(r.jsx)(de.d,{className:"sortIcon",onClick:function(){return I("rating")}})})]})})]})}),Object(r.jsx)("tbody",{bgcolor:"#edc9a4",children:e.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)(Y.b,{to:"/".concat(e.title),onClick:function(){return N(e)},children:Object(r.jsx)("img",{src:e.linkToCoverImage,alt:"book cover"})})}),Object(r.jsx)("td",{className:"align-middle",children:Object(r.jsx)("b",{children:e.title})}),Object(r.jsx)("td",{className:"align-middle",children:Object(r.jsx)("b",{children:e.author})}),Object(r.jsx)("td",{className:"align-middle",children:Object(r.jsx)("b",{children:e.rating})})]},e.id)}))})]})})})})},he=n(124),fe=function(){var e=Object(o.c)((function(e){return e.ownedBook.bookInfo})),t=Object(o.b)(),n=Object(o.c)((function(e){return e.login.token})),c=Object(a.useState)(e.rating),s=Object(re.a)(c,2),i=s[0],u=s[1],j=Object(a.useState)(e.rating),l=Object(re.a)(j,2),b=l[0],d=l[1];Object(a.useEffect)((function(){d(e.rating),u(e.rating)}),[e]);return Object(r.jsx)("div",{children:Object(y.a)(Array(5)).map((function(a,c){var s=c+1;return Object(r.jsx)(de.e,{className:"pointer",size:30,color:b>=s?"orange":"gray",onClick:function(){return function(r){u(r),e.rating=r,t(U(e,n))}(s)},onMouseEnter:function(){return d(s)},onMouseLeave:function(){return d(i)}},c)}))})},xe=n(129),pe=n(123),ve=n(82),me=function(e){var t=e.setShow,n=Object(o.c)((function(e){return e.ownedBook.bookInfo})),c=Object(o.c)((function(e){return e.login.token})),s=Object(a.useState)(n.review),i=Object(re.a)(s,2),u=i[0],j=i[1],l=Object(a.useState)(!1),O=Object(re.a)(l,2),h=O[0],f=O[1],x=Object(a.useState)(!1),p=Object(re.a)(x,2),v=p[0],m=p[1],g=Object(a.useState)(null),k=Object(re.a)(g,2),w=k[0],y=k[1],C=Object(o.b)();Object(a.useEffect)((function(){j(n.review)}),[n]);var N=function(){var e=Object(d.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r=Object(S.a)(Object(S.a)({},n),{},{review:u}),C(U(r,c)),f(!1),m(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),C(D(n.id,w,c)),m(!1),y(null);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(xe.a,{children:[Object(r.jsx)(pe.a,{eventKey:"review",title:"Review",children:h?Object(r.jsxs)(W.a,{onSubmit:N,children:[Object(r.jsx)(W.a.Group,{children:Object(r.jsx)(W.a.Control,{as:"textarea",rows:10,value:u,onChange:function(e){return j(e.target.value)}})}),Object(r.jsx)(J.a,{type:"submit",className:"mr-1",children:"Save changes"}),Object(r.jsx)(J.a,{variant:"secondary",onClick:function(){return f(!1)},children:"Cancel"})]}):Object(r.jsxs)(M.a,{className:"pt-2",children:[Object(r.jsx)(z.a,{xs:2,sm:1,children:Object(r.jsx)(J.a,{variant:"link",onClick:function(){return f(!h)},children:"Edit"})}),Object(r.jsx)(z.a,{xs:10,sm:11,children:u})]})}),Object(r.jsx)(pe.a,{eventKey:"quotes",title:"Quotes",children:v?Object(r.jsxs)(W.a,{onSubmit:I,children:[Object(r.jsx)(W.a.Group,{children:Object(r.jsx)(W.a.Control,{as:"textarea",rows:10,onChange:function(e){return y(e.target.value)}})}),Object(r.jsx)(J.a,{type:"submit",className:"mr-1",children:"Save quote"}),Object(r.jsx)(J.a,{variant:"secondary",onClick:function(){return m(!1)},children:"Cancel"})]}):Object(r.jsxs)(M.a,{className:"pt-2",children:[Object(r.jsx)(z.a,{xs:12,sm:2,children:Object(r.jsx)(J.a,{variant:"link",onClick:function(){return m(!v)},children:"Add quote"})}),Object(r.jsx)(z.a,{xs:12,sm:10,children:n.quotes.map((function(e){return Object(r.jsx)(M.a,{className:"mb-3",children:Object(r.jsx)(z.a,{children:Object(r.jsxs)(ce.a,{children:[Object(r.jsx)(ce.a.Header,{children:Object(r.jsx)(M.a,{children:Object(r.jsx)(z.a,{className:"pr-0 text-right",children:Object(r.jsx)(ve.a,{className:"pointer",onClick:function(){return function(e){for(var t=n.quotes,r=0;r<t.length;r++)if(t[r].id===e){t.splice(r,1);break}var a=Object(S.a)(Object(S.a)({},n),{},{quotes:t});C(U(a,c))}(e.id)}})})})}),Object(r.jsx)(ce.a.Body,{className:"overflow-auto",children:Object(r.jsxs)("i",{children:[" ",e.quote]})})]})},e.id)})}))})]})}),Object(r.jsx)(pe.a,{eventKey:"options",title:"Options",children:Object(r.jsx)(M.a,{children:Object(r.jsx)(z.a,{className:"pt-5 text-center",children:Object(r.jsx)(J.a,{variant:"link",style:{color:"red"},onClick:function(){return t(!0)},children:"Delete Book"})})})})]})},ge=function(e){var t=e.show,n=e.setShow,a=e.book,c=e.handleDelete;return Object(r.jsxs)(se.a,{show:t,onHide:function(){return n(!1)},backdrop:"static",keyboard:!1,children:[Object(r.jsx)(se.a.Header,{closeButton:!0,children:Object(r.jsxs)(se.a.Title,{children:["Delete ",a.title," by ",a.author," from the library?"]})}),Object(r.jsx)(se.a.Body,{children:Object(r.jsxs)(M.a,{children:[Object(r.jsx)(J.a,{variant:"danger",onClick:c,children:"Delete"}),Object(r.jsx)(J.a,{variant:"secondary",onClick:function(){return n(!1)},children:"Cancel"})]})})]})},ke=function(){var e=Object(o.c)((function(e){return e.ownedBook.bookInfo})),t=Object(o.c)((function(e){return e.login.token})),n=Object(a.useState)(!1),c=Object(re.a)(n,2),s=c[0],i=c[1],u=Object(o.b)(),j=function(){var n=Object(d.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:u(K(e.id,t)),i(!1);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return null===e?Object(r.jsx)(je.a,{to:"/"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(he.a,{fluid:!0,children:Object(r.jsx)(ae.a,{children:Object(r.jsxs)(M.a,{children:[Object(r.jsxs)(z.a,{xs:7,children:[Object(r.jsx)("h1",{children:e.title}),Object(r.jsx)("h5",{children:Object(r.jsx)("i",{children:e.author})}),Object(r.jsx)(fe,{}),Object(r.jsxs)(W.a,{className:"pt-3",children:[Object(r.jsx)(W.a.Check,{inline:!0,type:"checkbox",id:"read",label:"Read",checked:e.read,onChange:function(){var n=Object(S.a)(Object(S.a)({},e),{},{read:!e.read});u(U(n,t))}}),Object(r.jsx)(W.a.Check,{inline:!0,type:"checkbox",id:"owned",label:"Owned",checked:e.owned,onChange:function(){var n=Object(S.a)(Object(S.a)({},e),{},{owned:!e.owned});u(U(n,t))}})]})]}),Object(r.jsx)(z.a,{xs:5,children:Object(r.jsx)("img",{src:e.linkToCoverImage,alt:"cover"})})]})})}),Object(r.jsxs)(ae.a,{children:[Object(r.jsx)(ge,{show:s,setShow:i,book:e,handleDelete:j}),Object(r.jsx)(me,{setShow:i})]})]})},we=function(){return null===Object(o.c)((function(e){return e.login.user}))?Object(r.jsx)(ue,{}):Object(r.jsxs)(Y.a,{children:[Object(r.jsx)(ne,{}),Object(r.jsxs)(je.d,{children:[Object(r.jsx)(je.b,{path:"/search/:etag",children:Object(r.jsx)(le,{})}),Object(r.jsxs)(je.b,{path:"/search",children:[Object(r.jsx)("h2",{className:"mt-3 text-center",children:"Google Books Search"}),Object(r.jsx)(V,{}),Object(r.jsx)($,{})]}),Object(r.jsx)(je.b,{path:"/:title",children:Object(r.jsx)(ke,{})}),Object(r.jsx)(je.b,{path:"/",children:Object(r.jsx)(Oe,{})})]})]})};s.a.render(Object(r.jsx)(o.a,{store:F,children:Object(r.jsx)(we,{})}),document.getElementById("root"))},41:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.74418652.chunk.js.map