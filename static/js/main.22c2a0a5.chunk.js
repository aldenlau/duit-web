(this.webpackJsonpduit=this.webpackJsonpduit||[]).push([[0],{109:function(t,e,n){"use strict";n.r(e);var a,c,s,r,o,i,u=n(2),d=n.n(u),l=n(18),j=n.n(l),p=(n(54),n(6)),b=n(7),h=(n(55),n(5)),f={main:"#00a2ff",second:"#69c8ff",fontFamily:"Roboto",backgroundColor:"#FFFFFF",altColor:"C9C9C9",fontColor:"#000000",inputColor:"#F2F2F2"},O={main:"#003959",second:"#32607A",fontFamily:"Roboto",backgroundColor:"#2F3136",altColor:"#2C2E33",fontColor:"#FFFFFF",inputColor:"#40444B"},m=h.c.button(a||(a=Object(p.a)(["\n    background-color: ",";\n    color: #fff;\n    border: 1px solid transparent;\n    margin-right: 5px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    height: 35px;\n    font-weight: bold;\n    font-size: 12px;\n    padding: 6px 12px 7px 12px;\n    border-radius: 5px;\n    text-align: center;\n    cursor: pointer;\n    font-family: ",";\n"])),(function(t){return t.theme.main}),(function(t){return t.theme.fontFamily})),g=h.c.button(c||(c=Object(p.a)(["\n    background-color: ",";\n    color: #fff;\n    border: 1px solid transparent;\n    margin-right: 5px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    height: 28px;\n    font-weight: bold;\n    font-size: 12px;\n    padding: 6px 12px 7px 12px;\n    border-radius: 5px;\n    text-align: center;\n    cursor: pointer;\n    font-family: ",";\n"])),(function(t){return t.theme.second}),(function(t){return t.theme.fontFamily})),x=h.c.input(s||(s=Object(p.a)(["\n    border: hidden;\n    background-color: ",";\n    border-radius: 5px;\n    height: 25px;\n"])),(function(t){return t.theme.inputColor})),k=h.c.footer(r||(r=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    background-color: ",";\n    align-items: center;\n"])),(function(t){return t.theme.altColor})),v=Object(h.b)(o||(o=Object(p.a)(["\n    html {\n        height: 100%;\n    }\n    #root {\n        height: 100vh;\n    }\n    body {\n        font-family: ",";\n        background-color: ",";\n        height: 100%;\n    }\n    p, h1, h2, h3 {\n        color: ",";\n    }\n"])),(function(t){return t.theme.fontFamily}),(function(t){return t.theme.backgroundColor}),(function(t){return t.theme.fontColor})),y=n(3);var T,C=Object(h.c)((function(t){var e=t.className,n=t.setLogin,a=t.setToken,c=(t.setTaskState,Object(u.useState)("")),s=Object(b.a)(c,2),r=s[0],o=s[1],i=Object(u.useState)(""),d=Object(b.a)(i,2),l=d[0],j=d[1];return Object(y.jsxs)("div",{className:e,children:[Object(y.jsx)(g,{type:"button",onClick:function(){return n()},children:"Log in with an existing account"}),Object(y.jsx)("p",{children:"Register"}),Object(y.jsx)("p",{children:"Username"}),Object(y.jsx)(x,{onChange:function(t){return o(t.target.value)}}),Object(y.jsx)("p",{children:"Password"}),Object(y.jsx)(x,{onChange:function(t){return j(t.target.value)}}),Object(y.jsx)(m,{type:"button",onClick:function(){fetch("https://duit-api.herokuapp.com/auth/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:r,password:l})}).then((function(t){return t.json()})).then((function(t){a(t.token)}))},children:"Register"})]})}))(i||(i=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 6px 12px 7px 12px;\n    align-items:center;\n"])));var S,w=Object(h.c)((function(t){var e=t.className,n=t.setLogin,a=t.setToken,c=(t.setTaskState,Object(u.useState)("")),s=Object(b.a)(c,2),r=s[0],o=s[1],i=Object(u.useState)(""),d=Object(b.a)(i,2),l=d[0],j=d[1];return Object(y.jsxs)("div",{className:e,children:[Object(y.jsx)(g,{onClick:function(){return n()},children:"Create an account"}),Object(y.jsx)("p",{children:"Login"}),Object(y.jsx)("p",{children:"Username"}),Object(y.jsx)(x,{onChange:function(t){return o(t.target.value)}}),Object(y.jsx)("p",{children:"Password"}),Object(y.jsx)(x,{onChange:function(t){return j(t.target.value)}}),Object(y.jsx)(m,{type:"button",onClick:function(){fetch("https://duit-api.herokuapp.com/auth/login?username=".concat(r,"&password=").concat(l)).then((function(t){return 401!==t.status?t.json():(alert("Incorrect credentials"),{token:""})})).then((function(t){a(t.token)}))},children:"Log in"})]})}))(T||(T=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 6px 12px 7px 12px;\n    align-items:center;\n"]))),D=n(27),F=n(12);function M(t){var e,n=new Map,a=Object(F.a)(t);try{for(a.s();!(e=a.n()).done;){var c=e.value,s={time:c.time,remainingTime:c.remaining_time,title:c.title,desc:c.description,priority:c.priority,startDate:c.start_date,dueDate:c.due_date,taskId:c.task_id};n.has(c.due_date)?n.get(c.due_date).push(s):n.set(c.due_date,[s])}}catch(r){a.e(r)}finally{a.f()}return n=new Map(Object(D.a)(n.entries()).sort())}var N,I=Object(h.c)((function(t){var e=t.setToken,n=t.setTaskState;function a(t){var a=t.getAuthResponse().id_token;fetch("https://duit-api.herokuapp.com/auth/login-google",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:a})}).then((function(t){return t.json()})).then((function(t){return e(t.token),t.token})).then((function(t){return fetch("https://duit-api.herokuapp.com/update/tasks?token=".concat(t))})).then((function(t){return t.json()})).then((function(t){return n(M(t))}))}return Object(u.useEffect)((function(){window.gapi.signin2.render("g-signin2",{scope:"https://www.googleapis.com/auth/plus.login",width:120,height:36,longtitle:!1,theme:"light",onsuccess:a})})),Object(y.jsx)("div",{children:Object(y.jsx)("div",{id:"g-signin2","data-onsuccess":a})})}))(S||(S=Object(p.a)(["\n"]))),L=n.p+"static/media/logo.994c7676.png";var A,P=Object(h.c)((function(t){var e=t.className,n=t.setTokenState,a=t.setTasksState,c=Object(u.useState)(!0),s=Object(b.a)(c,2),r=s[0],o=s[1];return Object(y.jsxs)("div",{className:e,children:[Object(y.jsx)("img",{src:L,width:"20%",height:"20%",style:{margin:"10px"}}),Object(y.jsx)(I,{setToken:n,setTaskState:a}),r?Object(y.jsx)(w,{setLogin:function(){return o(!1)},setToken:n,setTaskState:a}):Object(y.jsx)(C,{setLogin:function(){return o(!0)},setToken:n,setTaskState:a})]})}))(N||(N=Object(p.a)(["\n    margin: 5% auto auto auto;\n    padding: 20px;\n    width: 250px;\n    display: flex;\n    flex-direction: column;\n    align-items:center;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n"]))),_=n(42);var E,R=Object(h.c)((function(t){var e=t.className,n=t.onClick;return Object(y.jsx)("div",{className:e,onClick:n})}))(A||(A=Object(p.a)(["\n    height: 12px;\n    width: 12px;\n    border: 1px solid gray;\n    border-radius: 2px;\n    cursor: pointer;\n    margin: 8px;\n"])));var J,z=Object(h.c)((function(t){var e=t.className,n=t.timeToComplete,a=(t.dueDate,t.title),c=(t.desc,t.priority,t.onClick);return t.taskId,Object(y.jsxs)("div",{className:e,children:[Object(y.jsx)(R,{onClick:c}),Object(y.jsx)("h3",{children:a}),Object(y.jsxs)("h3",{children:[n," min"]})]})}))(E||(E=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n"])));var B,U=Object(h.c)((function(t){var e=t.date,n=t.tasks,a=(t.completedState,t.setTasksState),c=(t.setCompletedState,t.token);return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:e}),n.map((function(t){return Object(y.jsx)(z,{timeToComplete:t.time,dueDate:e,title:t.title,desc:t.desc,priority:t.priority,onClick:function(){fetch("https://duit-api.herokuapp.com/update/deltask?token=".concat(c),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({taskId:t.taskId})}).then((function(t){return t.json()})).then((function(t){return a(M(t))}))},taskId:t.taskId},t.taskId)}))]})}))(J||(J=Object(p.a)(["\n    \n"]))),G=n(40),Y=n.n(G);n(61);function q(t){return t.getFullYear()+"/"+(t.getMonth()>8?""+(t.getMonth()+1):"0"+(t.getMonth()+1))+"/"+(t.getDate()>9?""+t.getDate():"0"+t.getDate())}var H=Object(h.c)((function(t){var e=t.className,n=t.minTime,a=t.setTasksState,c=t.token,s=Object(u.useState)(new Date),r=Object(b.a)(s,2),o=r[0],i=r[1],d=Object(u.useState)(new Date),l=Object(b.a)(d,2),j=l[0],p=l[1],h=Object(u.useState)(""),f=Object(b.a)(h,2),O=f[0],g=f[1],k=Object(u.useState)(0),v=Object(b.a)(k,2),T=v[0],C=v[1],S=Object(u.useState)(""),w=Object(b.a)(S,2),D=w[0],F=w[1],N=Object(u.useState)(0),I=Object(b.a)(N,2),L=I[0],A=I[1];return Object(y.jsxs)("div",{className:e,children:[Object(y.jsx)("p",{children:"Add new task"}),Object(y.jsx)(x,{onChange:function(t){return g(t.target.value)}}),Object(y.jsx)(x,{onChange:function(t){return F(t.target.value)}}),Object(y.jsx)(x,{type:"number",onChange:function(t){return C(parseInt(t.target.value))}}),Object(y.jsx)(x,{type:"number",onChange:function(t){return A(parseInt(t.target.value))}}),Object(y.jsx)("div",{children:Object(y.jsx)(Y.a,{selected:o,onChange:function(t){return i(t)}})}),Object(y.jsx)("div",{children:Object(y.jsx)(Y.a,{selected:j,onChange:function(t){return p(t)}})}),Object(y.jsx)(m,{type:"button",onClick:function(){var t=Date.now(),e=q(o),s=q(j);fetch("https://duit-api.herokuapp.com/update/addtask?token=".concat(c),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({time:Math.ceil(T/n)*n,remainingTime:Math.ceil(T/n)*n,title:O,desc:D,priority:L,startDate:e,dueDate:s,taskId:t})}).then((function(t){return t.json()})).then((function(t){return a(M(t))}))},children:"Add Task"})]})}))(B||(B=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"])));function K(t){return new Date(t.substring(5,7)+"/"+t.substring(8,10)+"/"+t.substring(0,4))}function Q(t,e){var n=K(t),a=K(e);return Math.ceil(Math.abs(a-n)/864e5)}function V(t,e){if(t.size>0){var n,a,c,s=new Map,r=[],o=new Map,i=new Map,u=Object(F.a)(t);try{for(u.s();!(c=u.n()).done;){var d,l=Object(b.a)(c.value,2),j=(l[0],l[1]),p=Object(F.a)(j);try{for(p.s();!(d=p.n()).done;){var h=d.value,f=Q(h.startDate,h.dueDate)+1;i.set(h.taskId,f),(void 0===n||n>h.startDate)&&(n=h.startDate),(void 0===a||a<h.dueDate)&&(a=h.dueDate);for(var O=0;O<f;O++){var m=K(h.startDate);m.setDate(m.getDate()+O),m=q(m),o.has(m)?o.set(m,o.get(m)+Math.round(h.time/e)):o.set(m,Math.round(h.time/e))}for(var g=0;g<Math.round(h.time/e);g++){var x=Object(_.a)({},h);x.time=e,delete x.onClick,r.push(x)}}}catch(P){p.e(P)}finally{p.f()}}}catch(P){u.e(P)}finally{u.f()}for(var k=Q(n,a)+1,v=0;v<k;v++){var y=K(n);y.setDate(y.getDate()+v),y=q(y),s.set(y,[])}r.sort((function(t,e){return i.get(t.taskId)>i.get(e.taskId)?1:-1})),o=new Map(Object(D.a)(o.entries()).sort((function(t,e){return t[1]>e[1]?1:-1})));for(var T=0;r.length>0;){var C=K(n);if(C.setDate(C.getDate()+T),C=q(C),o.has(C)&&o.get(C)>0){for(var S=0;S<r.length;S++)if(r[S].startDate<=C&&C<=r[S].dueDate){s.get(C).push(r[S]),r.splice(S,1);break}o.set(C,o.get(C)-1)}T=(T+1)%k}var w,M=new Map,N=Object(F.a)(s);try{for(N.s();!(w=N.n()).done;){var I=Object(b.a)(w.value,2),L=I[0],A=I[1];A.length>0&&M.set(L,A)}}catch(P){N.e(P)}finally{N.f()}return function(t){var e,n=new Map,a=Object(F.a)(t);try{for(a.s();!(e=a.n()).done;){var c=Object(b.a)(e.value,2),s=c[0],r=c[1];if(r.length>0){var o,i=new Map,u=Object(F.a)(r);try{for(u.s();!(o=u.n()).done;){var d=o.value;i.has(d.taskId)?i.set(d.taskId,[d,i.get(d.taskId)[1]+d.time]):i.set(d.taskId,[d,d.time])}}catch(P){u.e(P)}finally{u.f()}var l,j=[],p=Object(F.a)(i);try{for(p.s();!(l=p.n()).done;){var h=Object(b.a)(l.value,2),f=(h[0],h[1]),O=Object(_.a)({},f[0]);O.time=f[1],j.push(O)}}catch(P){p.e(P)}finally{p.f()}n.set(s,j)}}}catch(P){a.e(P)}finally{a.f()}return n}(M)}return new Map}var W,X=function(t){var e=t.tasks,n=t.roundTime,a=Object(u.useState)(new Map),c=Object(b.a)(a,2),s=c[0],r=c[1],o=[];return s.forEach((function(t,e){return o.push(Object(y.jsx)(U,{date:e,tasks:t},"s"+e))})),Object(y.jsxs)("div",{children:[Object(y.jsx)(m,{onClick:function(){return r(V(e,n))},children:"Generate new schedule"}),o]})};var Z,$=Object(h.c)((function(t){var e=t.tasks,n=t.completedTasks,a=t.setTasks,c=t.setCompletedTasks,s=t.token,r=t.minTime,o=t.className,i=[];return e.forEach((function(t,e){return i.push(Object(y.jsx)(U,{date:e,tasks:t,completedState:n,setTasksState:a,setCompletedState:c,token:s},e))})),Object(y.jsxs)("div",{className:o,children:[Object(y.jsx)(H,{minTime:r,setTasksState:a,token:s}),i]})}))(W||(W=Object(p.a)(["\n    width: 33%;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n"])));var tt,et=Object(h.c)((function(t){var e=t.tasks,n=t.setTasks,a=t.minTime,c=t.completedTasks,s=t.setCompletedTasks,r=(t.reminders,t.setReminders,t.token),o=(t.setToken,t.className);return Object(u.useEffect)((function(){fetch("https://duit-api.herokuapp.com/update/tasks?token=".concat(r)).then((function(t){return t.json()})).then((function(t){return n(M(t))}))}),[r,n]),Object(y.jsxs)("div",{className:o,children:[Object(y.jsx)($,{tasks:e,completedTasks:c,setTasks:n,setCompletedTasks:s,token:r,minTime:a}),Object(y.jsx)(X,{tasks:e,roundTime:a})]})}))(Z||(Z=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    margin: 5px;\n    height: 100%;\n    min-height: 0;\n"])));var nt=Object(h.c)((function(t){var e=t.className,n=Object(u.useState)(new Map),a=Object(b.a)(n,2),c=a[0],s=a[1],r=Object(u.useState)(30),o=Object(b.a)(r,2),i=o[0],d=(o[1],Object(u.useState)(new Map)),l=Object(b.a)(d,2),j=l[0],p=l[1],g=Object(u.useState)([]),x=Object(b.a)(g,2),T=x[0],C=x[1],S=Object(u.useState)(""),w=Object(b.a)(S,2),D=w[0],F=w[1],M=Object(u.useState)(!0),N=Object(b.a)(M,2),I=N[0],L=N[1];return Object(u.useEffect)((function(){return document.title="Duit"})),Object(y.jsx)("div",{className:e,children:Object(y.jsxs)(h.a,{theme:I?O:f,children:[Object(y.jsx)(v,{}),""===D?Object(y.jsx)(P,{setTokenState:F,setTasksState:s}):Object(y.jsx)(et,{tasks:c,setTasks:s,minTime:i,completedTasks:j,setCompletedTasks:p,reminders:T,setReminders:C,token:D,setToken:F}),Object(y.jsxs)(k,{children:[Object(y.jsx)("p",{children:"Alden Lau"}),Object(y.jsx)(m,{onClick:function(){return L(!I)},children:I?"Light mode":"Dark mode"})]})]})})}))(tt||(tt=Object(p.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]))),at=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),s(t),r(t)}))};j.a.render(Object(y.jsx)(d.a.StrictMode,{children:Object(y.jsx)(nt,{})}),document.getElementById("root")),at()},54:function(t,e,n){},55:function(t,e,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.22c2a0a5.chunk.js.map