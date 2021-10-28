(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{13:function(e,t,s){},20:function(e,t,s){},23:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),r=s(3),c=s.n(r),l=(s(13),s(2)),i=s(4),o=Object(i.b)({name:"todoList",initialState:{list:[],prepareList:[]},reducers:{addTask:function(e,t){e.list.push(t.payload),e.prepareList=e.list},removeTask:function(e,t){e.list=e.list.filter((function(e){return e.id!==t.payload})),e.prepareList=e.list},completedTask:function(e,t){e.list=e.list.map((function(e){return e.id===t.payload&&(e.isComplete=!e.isComplete),e})),e.prepareList=e.list},showAllTask:function(e){e.prepareList=e.list.filter((function(e){return e}))},showDoneTask:function(e){e.prepareList=e.list.filter((function(e){return!0===e.isComplete}))},showTaskInProgress:function(e){e.prepareList=e.list.filter((function(e){return!1===e.isComplete}))},showQueryTask:function(e,t){e.prepareList=e.list.filter((function(e){return e.taskName.toLowerCase().includes(t.payload.toLowerCase())}))}}}),u=o.actions,p=u.addTask,b=u.removeTask,d=u.completedTask,m=u.showTaskInProgress,j=u.showAllTask,k=u.showDoneTask,f=u.showQueryTask,h=o.reducer,x=Object(i.a)({reducer:{todo:h}}),O=s(7),N=s(25),g=(s(20),s(1)),y=function(e){var t=e.task,s=e.deleteTask,n=e.completeTask;return Object(g.jsxs)("div",{className:"task",children:[Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("img",{width:"42px",src:t.isComplete?"./square_ok.svg":"./square.svg",alt:""}),Object(g.jsx)("span",{className:"btn-light",children:t.taskName})]}),Object(g.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[Object(g.jsx)("button",{className:"btn btn-dark btn-sm",type:"button",onClick:function(){n(t.id)},children:"Complete Task"}),Object(g.jsx)("button",{className:"btn btn-dark btn-sm",type:"button",onClick:function(){s(t.id)},children:"X"})]})]})},v=(s(22),function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),s=t[0],a=t[1],r=Object(n.useState)(""),c=Object(O.a)(r,2),i=c[0],o=c[1],u=Object(l.c)((function(e){return e.todo.prepareList})),h=Object(l.b)(),x=function(e){"task"===e.target.name?a(e.target.value):(o(e.target.value),h(f(e.target.value)))},v=function(){var e={taskName:s,isComplete:!1,id:Object(N.a)()};0!==s.length&&(h(p(e)),a(""))},T=function(e){return h(b(e))},C=function(e){return h(d(e))};return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("form",{className:"d-flex flex-column",onSubmit:function(e){e.preventDefault()},children:[Object(g.jsxs)("div",{className:"mb-3 row",children:[Object(g.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Create task"}),Object(g.jsx)("input",{type:"text",placeholder:"Please enter task",name:"task",value:s,onKeyPress:function(e){"Enter"===e.key&&v()},onChange:function(e){return x(e)},className:"form-control",id:"exampleInputEmail1"}),Object(g.jsx)("button",{type:"button",className:"btn btn-dark col-3",onClick:v,children:"Add Task"}),Object(g.jsx)("label",{htmlFor:"exampleInputEmail2",className:"form-label",children:"Search task"}),Object(g.jsx)("input",{type:"text",placeholder:"Enter key word",name:"query",value:i,onChange:function(e){return x(e)},className:"form-control",id:"exampleInputEmail2"})]}),Object(g.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[Object(g.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){o(""),h(j())},children:"Show All"}),Object(g.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){o(""),h(m())},children:"In progress"}),Object(g.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){o(""),h(k())},children:"Done task"})]})]}),Object(g.jsx)("ul",{className:"list-group",children:u.map((function(e){return Object(g.jsx)("li",{className:"list-group-item",children:Object(g.jsx)(y,{task:e,deleteTask:T,completeTask:C})},e.id)}))})]})});c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(l.a,{store:x,children:Object(g.jsx)(v,{})})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.a309d5e9.chunk.js.map