(this.webpackJsonpphonebook2019=this.webpackJsonpphonebook2019||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},19:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=(n(19),n(2)),l=function(e){var t=e.persons,n=e.search,a=e.handleDelete,o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return r.a.createElement("li",{key:e.id},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return a(e.id)}},"Delete"))}));return r.a.createElement("div",null,o)},i=n(3),m=n.n(i),s="http://localhost:3001/persons",d=function(){return m.a.get(s).then((function(e){return e.data}))},f=function(e){return m.a.post(s,e).then((function(e){return e.data}))},h=function(e){return m.a.delete("".concat(s,"/").concat(e))},v=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},b=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),m=i[0],s=i[1],b=Object(a.useState)(""),E=Object(u.a)(b,2),p=E[0],w=E[1],g=Object(a.useState)(""),j=Object(u.a)(g,2),O=j[0],k=j[1],y=Object(a.useState)(""),S=Object(u.a)(y,2),C=S[0],N=S[1];Object(a.useEffect)((function(){d().then((function(e){o(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(v,{message:C}),r.a.createElement("div",null,r.a.createElement("div",null,"Search:",r.a.createElement("input",{type:"text",value:O,onChange:function(e){k(e.target.value)}}))),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:m,number:p,id:n.length+1,important:Math.random()>.5};N("Person ".concat(t.name," was added")),setTimeout((function(){N(null)}),5e3),f(t).then((function(e){o(n.concat(e)),s(""),w(""),k("")}));var a=m;return n.map((function(e){return e.name})).includes(a)?alert("Name is already in the list"):o(n.concat(t))}},r.a.createElement("h4",null,"Add new"),r.a.createElement("div",null,"Name:",r.a.createElement("input",{value:m,onChange:function(e){s(e.target.value)}})),r.a.createElement("div",null,"Number:",r.a.createElement("input",{value:p,onChange:function(e){w(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Add"))),r.a.createElement("h2",null,"Names and numbers:"),r.a.createElement(l,{search:O,persons:n,handleDelete:function(e){var t=n.filter((function(t){return t.id!==e}));window.confirm("Really????")&&(h(e),o(t),N("Person was removed"),setTimeout((function(){N(null)}),5e3))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.80619f28.chunk.js.map