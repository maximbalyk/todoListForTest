(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),l=n.n(s),r=(n(12),n(6)),i=n(2),o=(n(13),n(18)),u=n(0),b=function(e){var t=e.task,n=e.deleteTask,a=e.completeTask;return Object(u.jsxs)("div",{className:"task",children:[Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("img",{width:"42px",src:t.isComplete?"./square_ok.svg":"./square.svg",alt:""}),Object(u.jsx)("span",{className:"btn-light",children:t.taskName})]}),Object(u.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[Object(u.jsx)("button",{className:"btn btn-dark btn-sm",type:"button",onClick:function(){a(t.id)},children:"Complete Task"}),Object(u.jsx)("button",{className:"btn btn-dark btn-sm",type:"button",onClick:function(){n(t.id)},children:"X"})]})]})},m=(n(15),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),m=l[0],j=l[1],d=Object(a.useState)(!1),p=Object(i.a)(d,2),f=p[0],O=p[1],x=Object(a.useState)([]),k=Object(i.a)(x,2),h=k[0],N=k[1],g=Object(a.useState)([]),v=Object(i.a)(g,2),C=v[0],y=v[1],S=function(e){"task"===e.target.name?c(e.target.value):(j(e.target.value),y(h.filter((function(t){return t.taskName.toLowerCase().includes(e.target.value.toLowerCase())}))))},w=function(){var e={taskName:n,isComplete:f,id:Object(o.a)()};N([].concat(Object(r.a)(h),[e])),y([].concat(Object(r.a)(C),[e])),c(""),O(!1)},E=function(e){N(h.filter((function(t){return t.id!==e}))),y(C.filter((function(t){return t.id!==e})))},I=function(e){N(h.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t})))};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("form",{className:"d-flex flex-column",onSubmit:function(e){e.preventDefault()},children:[Object(u.jsxs)("div",{className:"mb-3 row",children:[Object(u.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Create task"}),Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)("input",{type:"text",placeholder:"Please enter task",name:"task",value:n,onKeyPress:function(e){"Enter"===e.key&&w()},onChange:function(e){return S(e)},className:"form-control",id:"exampleInputEmail1"}),Object(u.jsx)("button",{type:"button",className:"btn btn-light",onClick:w,children:"Add Task"})]}),Object(u.jsx)("label",{htmlFor:"exampleInputEmail2",className:"form-label",children:"Search task"}),Object(u.jsx)("input",{type:"text",placeholder:"Enter key word",name:"query",value:m,onChange:function(e){return S(e)},className:"form-control",id:"exampleInputEmail2"})]}),Object(u.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){y(h.filter((function(e){return e})))},children:"Show All"}),Object(u.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){y(h.filter((function(e){return!1===e.isComplete})))},children:"In progress"}),Object(u.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){y(h.filter((function(e){return!0===e.isComplete})))},children:"Done task"})]})]}),Object(u.jsx)("ul",{className:"list-group",children:C.map((function(e){return Object(u.jsx)("li",{className:"list-group-item",children:Object(u.jsx)(b,{task:e,deleteTask:E,completeTask:I})},e.id)}))})]})});l.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e841f81e.chunk.js.map