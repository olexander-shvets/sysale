(this.webpackJsonpsysale=this.webpackJsonpsysale||[]).push([[0],{42:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),i=a(12),n=a.n(i),l=(a(42),a(20)),m=a(21),o=a(27),d=a(25),r=a(33),h=a(2),j=[{value:"yellow",label:"\u0416\u0435\u043b\u0442\u044b\u0439"},{value:"red",label:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439"},{value:"green",label:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439"}],A=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={selectedOption:null},e.handleChange=function(t){e.setState({selectedOption:t},(function(){return console.log("Option selected:",e.state.selectedOption)}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.selectedOption;return Object(h.jsx)(r.a,{value:e,onChange:this.handleChange,options:j,placeholder:"\u0426\u0432\u0435\u0442"})}}]),a}(s.a.Component),u=a(24),O=a(34),x=a(28),k=a(5),p=a(84),b=a(86),q=a(85),T=Object(k.a)({root:{marginLeft:45,width:54,fontFamily:"SF UI Display",fontStyle:"normal",fontWeight:500,fontSize:16,lineHeight:19,color:"grey","&$checked":{color:"#CF9E1F"}},checked:{}})((function(e){return Object(h.jsx)(q.a,Object(x.a)({color:"default"},e))}));var f=function(){var e=s.a.useState({checkedA:!0}),t=Object(O.a)(e,2),a=t[0],c=t[1],i=function(e){c(Object(x.a)(Object(x.a)({},a),{},Object(u.a)({},e.target.name,e.target.checked)))};return Object(h.jsxs)(p.a,{column:!0,children:[Object(h.jsx)(b.a,{control:Object(h.jsx)(T,{checked:a.checkedA,onChange:i,name:"checkedA"}),label:"100 \u043c\u043b"}),Object(h.jsx)(b.a,{control:Object(h.jsx)(T,{checked:a.checkedB,onChange:i,name:"checkedB"}),label:"200 \u043c\u043b"}),Object(h.jsx)(b.a,{control:Object(h.jsx)(T,{checked:a.checkedC,onChange:i,name:"checkedC"}),label:"300 \u043c\u043b"})]})},N=(a(58),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).state={count:1},c}return Object(m.a)(a,[{key:"increment",value:function(){this.setState({count:this.state.count+1})}},{key:"decrement",value:function(){if(this.state.count<=1)return this.setState({count:1});this.setState({count:this.state.count-1})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"counter",children:[Object(h.jsx)("button",{className:"dec",onClick:function(t){return e.decrement(t)},children:"-\xa0\xa0"}),Object(h.jsxs)("p",{className:"count-dig",id:"count",children:[" ",this.state.count," "]}),Object(h.jsx)("button",{className:"inc",onClick:function(t){return e.increment(t)},children:"\xa0\xa0+"})]})}}]),a}(c.Component)),I=(a(59),a.p+"static/media/image1.019d887f.png");var K=function(){return Object(h.jsx)("div",{className:"items-wrapper",children:Object(h.jsxs)("div",{className:"item",children:[Object(h.jsxs)("div",{className:"item-header",children:[Object(h.jsx)("button",{className:"new-item",children:"New"}),Object(h.jsx)("img",{src:I,className:"item-image",alt:"product logo"}),Object(h.jsx)("img",{src:"data:image/png;base64,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",className:"compare-image",alt:"compare items"})]}),Object(h.jsxs)("div",{className:"item-content",children:[Object(h.jsx)("h1",{className:"item-name",children:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c"}),Object(h.jsx)("p",{className:"item-description",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."})]}),Object(h.jsxs)("div",{className:"select-color",children:[Object(h.jsx)(A,{}),Object(h.jsx)("h1",{className:"item-price",children:"200 \u0433\u0440\u043d."})]}),Object(h.jsx)(f,{}),Object(h.jsxs)("div",{className:"menu-bottom",children:[Object(h.jsx)(N,{}),Object(h.jsx)("button",{className:"cart",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]})]})})},U=(a(60),a.p+"static/media/image2.ac841b3e.png");var V=function(){return Object(h.jsx)("div",{className:"items-wrapper",children:Object(h.jsxs)("div",{className:"item",children:[Object(h.jsxs)("div",{className:"item-header",children:[Object(h.jsx)("button",{className:"new-item",children:"New"}),Object(h.jsx)("img",{src:U,className:"item-image2",alt:"product logo"}),Object(h.jsx)("img",{src:"data:image/png;base64,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",className:"compare-image",alt:"compare items"})]}),Object(h.jsxs)("div",{className:"item-content",children:[Object(h.jsx)("h1",{className:"item-name",children:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c"}),Object(h.jsx)("p",{className:"item-description",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."})]}),Object(h.jsxs)("div",{className:"select-color",children:[Object(h.jsx)(A,{}),Object(h.jsx)("h1",{className:"item-price",children:"180 \u0433\u0440\u043d."})]}),Object(h.jsx)(f,{}),Object(h.jsxs)("div",{className:"menu-bottom",children:[Object(h.jsx)(N,{}),Object(h.jsx)("button",{className:"cart",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]})]})})},g=(a(61),a.p+"static/media/image3.48939226.png");var W=function(){return Object(h.jsx)("div",{className:"items-wrapper",children:Object(h.jsxs)("div",{className:"item",children:[Object(h.jsxs)("div",{className:"item-header",children:[Object(h.jsx)("button",{className:"new-item",children:"New"}),Object(h.jsx)("img",{src:g,className:"item-image",alt:"product logo"}),Object(h.jsx)("img",{src:"data:image/png;base64,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",className:"compare-image",alt:"compare items"})]}),Object(h.jsxs)("div",{className:"item-content",children:[Object(h.jsx)("h1",{className:"item-name",children:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c"}),Object(h.jsx)("p",{className:"item-description",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."})]}),Object(h.jsxs)("div",{className:"select-color",children:[Object(h.jsx)(A,{}),Object(h.jsx)("h1",{className:"item-price",children:"150 \u0433\u0440\u043d."})]}),Object(h.jsx)(f,{}),Object(h.jsxs)("div",{className:"menu-bottom",children:[Object(h.jsx)(N,{}),Object(h.jsx)("button",{className:"cart",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]})]})})};a(62);var J=function(){return Object(h.jsxs)("div",{className:"app-content",children:[Object(h.jsx)(K,{}),Object(h.jsx)(V,{}),Object(h.jsx)(W,{})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,87)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),i(e),n(e)}))};n.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root")),v()}},[[63,1,2]]]);
//# sourceMappingURL=main.337b9835.chunk.js.map