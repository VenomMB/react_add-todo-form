(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(7),c=a(3),s=a(4),o=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=a(9),u=a.n(d),m=a(0),j=function(e){var t=e.user,a=t.name,n=t.email;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},b=function(e){var t=e.todo,a=t.id,n=t.user,i=t.completed,r=t.title;return Object(m.jsxs)("article",{"data-id":a,className:u()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:r}),n&&Object(m.jsx)(j,{user:n})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})};var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:(t=e.userId,l.find((function(e){return e.id===t}))||null)});var t}));function f(e,t){return e&&!t}var p=function(){var e=Object(o.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),d=Object(c.a)(i,2),u=d[0],j=d[1],b=Object(o.useState)(O),p=Object(c.a)(b,2),x=p[0],v=p[1],y=Object(o.useState)(!1),S=Object(c.a)(y,2),N=S[0],I=S[1],g=Math.max.apply(Math,Object(r.a)(x.map((function(e){return e.id}))))+1;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),I(!0),a.trim()&&u){var t=(o=u,l.find((function(e){return e.name===o}))||null),i={id:g,title:a,completed:!1,userId:t?t.id:null},c=Object(s.a)(Object(s.a)({},i),{},{user:t});v((function(e){return[].concat(Object(r.a)(e),[c])})),j(""),n(""),I(!1)}var o},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"Titile: "}),Object(m.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"EnterTitle",value:a,onChange:function(e){return n(e.target.value)}})]}),f(N,a)&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"User: "}),Object(m.jsxs)("select",{"data-cy":"userSelect",value:u,onChange:function(e){return j(e.target.value)},children:[Object(m.jsx)("option",{value:"",children:"Choose a user"}),l.map((function(e){var t=e.name,a=e.id;return Object(m.jsx)("option",{value:t,children:t},a)}))]})]}),f(N,u)&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:x})]})};i.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.78b950af.chunk.js.map