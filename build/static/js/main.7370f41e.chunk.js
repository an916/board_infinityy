(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(6),r=n.n(s),i=(n(11),n(3)),j=n.n(i),l=n(5),d=n(2),o=(n(13),n(0));var b=function(){var t=Object(c.useState)(""),e=Object(d.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(""),r=Object(d.a)(s,2),i=r[0],b=r[1],h=Object(c.useState)(""),u=Object(d.a)(h,2),O=u[0],x=u[1],p=Object(c.useState)(""),f=Object(d.a)(p,2),g=f[0],m=f[1],v=Object(c.useState)([]),y=Object(d.a)(v,2),k=y[0],w=y[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("header",{className:"card",style:{backgroundColor:"black",marginTop:"0px"},children:["// ",Object(o.jsxs)("div",{className:"card",style:{backgroundColor:"black",marginTop:"0px"},children:[Object(o.jsx)("center",{children:Object(o.jsx)("h1",{style:{color:"white"},children:"Board Infinity "})}),"// "]})]}),Object(o.jsx)("center",{children:Object(o.jsxs)("div",{className:"card",style:{width:"70%",padding:"20px"},children:[Object(o.jsx)("input",{placeholder:"Task Name",id:"first_name",type:"text",class:"validate",value:n,onChange:function(t){a(t.target.value)},style:{width:"50%"}}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{placeholder:"Description",id:"first_name",type:"text",class:"validate",value:i,onChange:function(t){b(t.target.value)},style:{width:"50%"}}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{placeholder:"Creator",id:"first_name",type:"text",class:"validate",value:O,onChange:function(t){x(t.target.value)},style:{width:"50%"}}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{placeholder:"Duration(minutes)",id:"first_name",type:"text",class:"validate",value:g,onChange:function(t){m(t.target.value)},style:{width:"50%"}}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{class:"btn waves-effect waves-light",style:{marginRight:"10px"},type:"submit",name:"action",onClick:function(){fetch("/add",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({taskName:n,taskDescription:i,creator:O,duration:g})}).then((function(t){return t.json()})),a(""),b(""),m(""),x("")},children:"Submit"}),Object(o.jsx)("button",{class:"btn waves-effect waves-light",type:"submit",name:"action",onClick:Object(l.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("/list",{}).then(function(){var t=Object(l.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:n=t.sent,w(n),console.log(JSON.stringify(k));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)}))),children:"List"})]})}),Object(o.jsx)("br",{}),Object(o.jsx)("center",{children:Object(o.jsxs)("table",{style:{width:"80%"},children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Task Name"}),Object(o.jsx)("th",{children:"Task Description"}),Object(o.jsx)("th",{children:"Creator "}),Object(o.jsx)("th",{children:"Duration"}),Object(o.jsx)("th",{children:"Created At"})]})}),0!==k.length?k.map((function(t){return Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t.taskName}),Object(o.jsx)("td",{children:t.taskDescription}),Object(o.jsx)("td",{children:t.creator}),Object(o.jsx)("td",{children:t.duration}),Object(o.jsx)("td",{children:t.createdAt})]})})})):null]})})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.7370f41e.chunk.js.map