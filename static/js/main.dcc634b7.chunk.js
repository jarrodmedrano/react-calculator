(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(e,t,n){e.exports=n(617)},186:function(e,t,n){},188:function(e,t,n){},617:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(176),c=n.n(i),l=(n(186),n(18)),u=n(19),p=n(21),o=n(20),s=n(22),d=(n(188),n(93)),y=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"display"},this.props.display)}}]),t}(a.Component),b=Object(d.a)(function(e){return{display:e.display}})(y),f=n(27),v="UPDATE_DISPLAY",h="CLEAR",O="INPUT_NUMBER",m="INPUT_DECIMAL",j="EQUALS",E="INPUT_OPERATOR",T="REPLACE_FIRST_ZERO",k="UPDATE_POINTER",C="REPLACE_LAST_OPERATOR";function w(e){return function(t){t({type:v,payload:e}),t(N(e))}}function g(){return{type:h}}function A(e){return function(t){t({type:O,payload:e}),t(w(e))}}function N(e){return{type:k,payload:e}}function P(e){return function(t){t({type:E,payload:e}),t(w(e))}}var R=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){new RegExp("^([+\\-*/])$").test(n.props.pointer)?n.props.replaceLastOperator(e):n.props.inputOperator(e)},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.inputType,a=t.value;return r.a.createElement("div",null,r.a.createElement("button",{id:n,onClick:function(){return e.handleClick(a,n)}},a))}}]),t}(a.Component),D=Object(f.b)(function(e){return{pointer:e.pointer,display:e.display}},{inputOperator:P,replaceLastOperator:function(e){return function(t){t({type:C,payload:e}),t(P(e))}}})(R),L=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){0===n.props.pointer&&1===n.props.display.length?n.props.replaceFirstZero(e):n.props.inputNumber(e)},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.inputType,a=t.value;return r.a.createElement("div",null,r.a.createElement("button",{id:n,onClick:function(){return e.handleClick(a,n)}},a))}}]),t}(a.Component),_=Object(f.b)(function(e){return{pointer:e.pointer,display:e.display}},{inputNumber:A,replaceFirstZero:function(e){return function(t){t({type:T,payload:e}),t(N(e))}}})(L),I=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){n.props.clear()},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.inputType,a=t.value;return r.a.createElement("div",null,r.a.createElement("button",{id:n,onClick:function(){return e.handleClick()}},a))}}]),t}(a.Component),U=Object(f.b)(function(e){return{pointer:e.pointer,display:e.display}},{updateDisplay:w,clear:g,buttonPress:P})(I),x=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){0!==n.props.pointer&&n.props.display.length>=1&&n.props.inputNumber(e)},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.inputType,a=t.value;return r.a.createElement("div",null,r.a.createElement("button",{id:n,onClick:function(){return e.handleClick(a)}},a))}}]),t}(a.Component),B=Object(f.b)(function(e){return{pointer:e.pointer,display:e.display}},{updateDisplay:w,clear:g,buttonPress:P,inputNumber:A})(x),S=n(96),q=new RegExp("^([+\\-*/])$"),F=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).mapBackwards=function(e){var t=Object(S.a)(e).reverse().map(function(e,t){return q.test(e)?"operator":"."===e}),n=t.indexOf("operator"),a=t.slice(0,n);return!!a.length&&a.reduce(function(e,t){return!0===e||!0===t})},n.handleClick=function(e){var t=n.props,a=t.display;"."!==t.pointer&&(!0===n.mapBackwards(a)||n.props.inputDecimal(e))},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.inputType,a=t.value;return r.a.createElement("div",{className:"decimal"},r.a.createElement("button",{id:n,onClick:function(){return e.handleClick(a)}},a))}}]),t}(a.Component),M=Object(f.b)(function(e){return{pointer:e.pointer,display:e.display}},{inputDecimal:function(e){return function(t){t({type:m,payload:e}),t(w(e)),t(N(e))}}})(F),W=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){n.props.equals()},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.inputType,a=t.value;return r.a.createElement("div",null,r.a.createElement("button",{id:n,onClick:function(){return e.handleClick()}},a))}}]),t}(a.Component),Z=Object(f.b)(function(e){return{pointer:e.pointer,display:e.display}},{equals:function(){return function(e){e({type:j}),e(N())}}})(W),$=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"grid-2"},r.a.createElement(_,{inputType:"seven",value:"7"}),r.a.createElement(_,{inputType:"eight",value:"8"}),r.a.createElement(_,{inputType:"nine",value:"9"}),r.a.createElement(D,{inputType:"subtract",value:"-"}),r.a.createElement(_,{inputType:"four",value:"4"}),r.a.createElement(_,{inputType:"five",value:"5"}),r.a.createElement(_,{inputType:"six",value:"6"}),r.a.createElement(D,{inputType:"add",value:"+"}),r.a.createElement(_,{inputType:"one",value:"1"}),r.a.createElement(_,{inputType:"two",value:"2"}),r.a.createElement(_,{inputType:"three",value:"3"}),r.a.createElement(B,{inputType:"zero",value:"0"}),r.a.createElement(M,{inputType:"decimal",value:"."})),r.a.createElement("div",null,r.a.createElement(U,{inputType:"clear",value:"AC"}),r.a.createElement(D,{inputType:"divide",value:"/"}),r.a.createElement(D,{inputType:"multiply",value:"*"}),r.a.createElement(Z,{inputType:"equals",value:"="}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(67),z=n(178),Q=n(57),Y=n(179),G=n.n(Y),H={display:[0],pointer:0},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object.assign({},e,{display:e.display.concat(t.payload)});case k:return Object(Q.a)({},e,{pointer:e.display[e.display.length-1]});case C:return Object(Q.a)({},e,{display:Object(S.a)(e.display.slice(0,-1))});case j:return Object(Q.a)({},e,{display:[G.a.eval(e.display.join(""))]});case m:case E:return Object(Q.a)({},e);case T:return Object(Q.a)({},e,{display:[t.payload]});case h:return H;default:return e}},V=n(180),X=Object(J.createStore)(K,Object(V.composeWithDevTools)(Object(J.applyMiddleware)(z.a)));c.a.render(r.a.createElement(f.a,{store:X},r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[181,2,1]]]);
//# sourceMappingURL=main.dcc634b7.chunk.js.map