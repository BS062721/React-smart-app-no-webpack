(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(31)},22:function(e,t,n){},24:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(15),i=n.n(c),r=(n(22),n(5)),l=n(6),u=n(8),s=n(7),p=n(9),d=(n(24),n(25),n(10)),h=n.n(d),m=(n(14),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.FHIR.oauth2.ready(function(t){console.log("smart in demo"),console.log(t),e.setState({smartData:JSON.parse(JSON.stringify(t)).patient.id})})}},{key:"render",value:function(){return console.log("render called"),o.a.createElement("div",null,o.a.createElement("h1",null,"Demo!!"),o.a.createElement("p",null,"patient id: ",this.state.smartData))}}]),t}(a.Component)),f=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("in launch..."),window.$=window.parent.$,h.a.FHIR.oauth2.authorize({client_id:"a8ba127e-8adf-4f03-9916-efee885a5cab",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",redirect_uri:"https://bs062721.github.io/React-smart-app-no-webpack/#/demo"})}},{key:"render",value:function(){return o.a.createElement("div",null,"error")}}]),t}(a.Component),b=n(30),w=b.HashRouter,O=b.Route,j=b.Switch,v=(b.Redirect,function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(w,null,o.a.createElement(j,null,o.a.createElement(O,{path:"/launch",component:f}),o.a.createElement(O,{path:"/demo",component:m})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.704ffa43.chunk.js.map