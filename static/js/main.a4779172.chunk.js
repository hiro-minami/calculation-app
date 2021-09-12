(this["webpackJsonpcalculation-app"]=this["webpackJsonpcalculation-app"]||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(1),l=n.n(o),c=n(6),r=n.n(c),a=(n(11),n(5)),u=n(3),i=n(4),s=new Map;s.set("+",0),s.set("-",0),s.set("\xd7",1),s.set("\xf7",1),s.set("%",1),s.set("noOperator",-1);var b=function(){function t(){Object(u.a)(this,t)}return Object(i.a)(t,null,[{key:"canInputOperator",value:function(t,e){return("."!==e||!0!==this.hasPeriod(t))&&!0===this.isOperand(t[t.length-1])}},{key:"canCalculate",value:function(t){return!0===this.isOperand(t[t.length-1])}},{key:"hasPeriod",value:function(t){var e=t.split(/[+|\-|\xd7|\xf7|%]/g);return e[e.length-1].includes(".")}},{key:"isOperand",value:function(t){return!!t&&void 0===s.get(t)}}]),t}(),d=function(){function t(){Object(u.a)(this,t)}return Object(i.a)(t,null,[{key:"trimZero",value:function(t){return this.trimZeroHelper(t,t.length-1)}},{key:"trimZeroHelper",value:function(t,e){return e<=0||"0"!==t.charAt(e)&&"."!==t.charAt(e)?t:this.trimZeroHelper(t.substring(0,e),e-1)}},{key:"optimizeNumber",value:function(t){return t.includes(".")?this.trimZero(t):t}},{key:"operate",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"noOperator";if(0===e.length)return this.optimizeNumber(t[0].toFixed(5));for(var o=0;0!==e.length&&s.get(e[e.length-1])>=s.get(n);){var l=t.pop(),c=t.pop(),r=e.pop();"+"===r?o=c+l:"-"===r?o=c-l:"\xd7"===r?o=c*l:"\xf7"===r?o=c/l:"%"===r&&(o=c%l),t.push(o)}return Number.isInteger(o)?o.toString():this.trimZero(o.toFixed(5))}}]),t}(),g=(n(12),n(13),n(0)),h=function(){var t=Object(o.useState)(""),e=Object(a.a)(t,2),n=e[0],l=e[1],c=Object(o.useState)("0"),r=Object(a.a)(c,2),u=r[0],i=r[1],h=function(t){t.preventDefault(),!0===b.canInputOperator(n,t.target.value)&&l(n+t.target.value)},p=function(t){t.preventDefault(),l(n+t.target.value)};return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"col-sm-8 col-md-6 col-lg-3 m-5 bg-black rounded transparency",children:[Object(g.jsxs)("div",{className:"display-parent display",children:[Object(g.jsx)("div",{className:"text-end fs-3 font-light m-1",children:n}),Object(g.jsx)("div",{className:"text-end font-lg display-answer font-light m-1",children:u})]}),Object(g.jsxs)("div",{className:"buttons",children:[Object(g.jsx)("button",{type:"button",className:"bg-command btn-lg col-3 rounded transparency-button font-light",onClick:function(t){t.preventDefault(),l(""),i("0")},children:"AC"}),Object(g.jsx)("button",{type:"button",className:"bg-command btn-lg col-3 rounded transparency-button font-light",onClick:function(t){t.preventDefault(),i(d.optimizeNumber((-1*+u).toFixed(5)))},children:"+/-"}),Object(g.jsx)("button",{type:"button",className:"bg-command btn-lg col-3 rounded transparency-button font-light",value:"%",onClick:h,children:"%"}),Object(g.jsx)("button",{type:"button",className:"bg-operator btn-lg col-3 rounded font-light",value:"\xf7",onClick:h,children:"\xf7"}),Object(g.jsx)("button",{type:"button",className:"bg-secondary btn-lg col-3 rounded font-light",value:"7",onClick:p,children:"7"}),Object(g.jsx)("button",{type:"button",className:"bg-secondary btn-lg col-3 rounded font-light",value:"8",onClick:p,children:"8"}),Object(g.jsx)("button",{type:"button",className:"bg-secondary btn-lg col-3 rounded font-light",value:"9",onClick:p,children:"9"}),Object(g.jsx)("button",{type:"button",className:"bg-operator btn-lg col-3 rounded font-light",value:"\xd7",onClick:h,children:"\xd7"}),Object(g.jsx)("button",{type:"button",className:"bg-secondary btn-lg col-3 rounded font-light",value:"4",onClick:p,children:"4"}),Object(g.jsx)("button",{type:"button",className:"bg-secondary btn-lg col-3 rounded font-light",value:"5",onClick:p,children:"5"}),Object(g.jsx)("button",{type:"button",className:"bg-secondary btn-lg col-3 rounded font-light",value:"6",onClick:p,children:"6"}),Object(g.jsx)("button",{type:"button",className:"bg-operator btn-lg col-3 rounded font-light",value:"-",onClick:h,children:"-"}),Object(g.jsx)("button",{type:"button",className:"bg-secondary btn-lg col-3 rounded font-light",value:"1",onClick:p,children:"1"}),Object(g.jsx)("button",{type:"button",className:"bg-secondary btn-lg col-3 rounded font-light",value:"2",onClick:p,children:"2"}),Object(g.jsx)("button",{type:"button",className:"bg-secondary btn-lg col-3 rounded font-light",value:"3",onClick:p,children:"3"}),Object(g.jsx)("button",{type:"button",className:"bg-operator btn-lg col-3 rounded font-light",value:"+",onClick:h,children:"+"}),Object(g.jsx)("button",{type:"button",className:"bg-secondary btn-lg col-6 rounded font-light",value:"0",onClick:p,children:"0"}),Object(g.jsx)("button",{type:"button",className:"bg-secondary btn-lg col-3 rounded font-light",value:".",onClick:h,children:"."}),Object(g.jsx)("button",{type:"button",className:"bg-operator btn-lg col-3 rounded font-light",onClick:function(t){t.preventDefault(),""!==n&&!0===b.canCalculate(n[n.length-1])&&i(function(t){for(var e=[],n=[],o=0;o<t.length;)if(void 0===s.get(t.charAt(o))){for(var l="",c=0;void 0===s.get(t.charAt(o+c))&&o+c<t.length;)l+=t.charAt(o+c),c++;e.push(parseFloat(l)),o+=c}else 0===n.length||s.get(n[n.length-1])<s.get(t.charAt(o))||d.operate(e,n,t.charAt(o)),n.push(t.charAt(o)),o++;return null!==n[0]?d.operate(e,n):d.optimizeNumber(e[0].toFixed(5))}(n)),l("")},children:"="})]})]})})};r.a.render(Object(g.jsx)(l.a.StrictMode,{children:Object(g.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a4779172.chunk.js.map