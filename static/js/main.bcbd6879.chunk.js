(this["webpackJsonpsecond-project"]=this["webpackJsonpsecond-project"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={mathBlock:"select_mathBlock__3mXvm",blockImg:"select_blockImg__15bqI",answer:"select_answer__27Pvc"}},function(e,t,a){e.exports={sectionConvert:"app_sectionConvert__3BBqy",meanBlock:"app_meanBlock__2tstP"}},,,function(e,t,a){e.exports={input:"input_input__1tgLT"}},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABHUlEQVRoge3Yv0kEQRSA8R+CiJhoaKiRVmAB2oBmVmELtmBoKjZgA/4BxUDOHgwvOzARFMfEA1lO2Z3jfN76PnjxfN+yM8wuSZIkSZIk/55LPGI7WmRayuc84zDYZSpKY86wHGpUSTOkYIDNSKkaJoUUjHAQ6NWZ70IK3nGCxTC7DvwUMp4brEcJtqVNSMEQe0GOrWgbUvCGYyzULnbXccFZzwXWakKixSfNE3b6EFLwgqM+hIznHCt9CCm4b0pXnwjzQPTT7v2r1YvNXnX83v4B8a9zgdWuEbOmS8CrKa8os6RtxBC7QY6taBNxbc6v8b34sBphP9CrM5MiBtiIlKqhGXGKpVCjSsYBc/+D7goP2IoWSZIkSZIk+QU+AO3v31ki+8PiAAAAAElFTkSuQmCC"},function(e,t,a){e.exports={h1:"header_h1__Bi84Y"}},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(17),a(18),a(1)),i=a(2),s=a(4),u=a(3),m=a(9),p=a.n(m),v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={term:null,error:!1},e.updateValue=function(t){var a=t.target.value;e.setState({term:a}),e.props.updateValue(a)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("input",{className:p.a.input,type:"number",placeholder:"\u0423\u0432\u0435\u0434\u0456\u0442\u044c \u0447\u0438\u0441\u043b\u043e...",onChange:this.updateValue})}}]),a}(n.Component),f=a(5),h=a.n(f),d=a(10),A=a.n(d),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={firstSelect:2,secondSelect:2},e.updateState=function(t){var a=t.target,n=+a.id,r=+a.options[a.selectedIndex].value;1===n?e.setState({firstSelect:r}):e.setState({secondSelect:r}),e.doing()},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){this.doing()}},{key:"doing",value:function(){var e=this.state,t=e.firstSelect,a=e.secondSelect,n=[],r=this.props.number,c=0;if(10===t&&2===a)for(;0!==r;){var o=r%2;r=Math.trunc(r/2),n.unshift(o)}else if(10===t&&8===a)for(;0!==r;){var l=r%8;r=Math.trunc(r/8),n.unshift(l)}else{if(2===t&&10===a){r+="";for(var i=0;i<r.length;i++){var s=+r[i];console.log(s,"-b"),c=2*c+s}return c}if(8===t&&10===a){r+="";for(var u=0;u<r.length;u++){var m=+r[u];console.log(m,"-b"),c=8*c+m}return c}if(2===t&&8===a){r+="";for(var p=0;p<r.length;p++){var v=+r[p];console.log(v,"-b"),c=2*c+v}for(;0!==c;){var f=c%8;c=Math.trunc(c/8),n.unshift(f)}}else{if(8!==t||2!==a)return 0;r+="";for(var h=0;h<r.length;h++){var d=+r[h];console.log(d,"-b"),c=8*c+d}for(;0!==c;){var A=c%2;c=Math.trunc(c/2),n.unshift(A)}}}return n}},{key:"render",value:function(){var e=this.props.number?this.doing():0;return r.a.createElement("div",{className:h.a.mathBlock},r.a.createElement("select",{id:"1",onInput:this.updateState},r.a.createElement("option",{value:"2"},"\u0414\u0432\u0456\u0439\u043a\u043e\u0432\u0430"),r.a.createElement("option",{value:"8"},"\u0412\u0456\u0441\u0456\u043c\u043a\u043e\u0432\u0430"),r.a.createElement("option",{value:"10"},"\u0414\u0435\u0441\u044f\u0442\u043a\u043e\u0432\u0430")),r.a.createElement("div",{className:h.a.blockImg},r.a.createElement("img",{src:A.a,alt:"arrow"})),r.a.createElement("select",{id:"2",onInput:this.updateState},r.a.createElement("option",{value:"2"},"\u0414\u0432\u0456\u0439\u043a\u043e\u0432\u0430"),r.a.createElement("option",{value:"8"},"\u0412\u0456\u0441\u0456\u043c\u043a\u043e\u0432\u0430"),r.a.createElement("option",{value:"10"},"\u0414\u0435\u0441\u044f\u0442\u043a\u043e\u0432\u0430")),r.a.createElement("div",{className:h.a.answer},r.a.createElement("span",null,"\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c: ")," \xa0 ",e))}}]),a}(n.Component),b=a(11),E=a.n(b);var S=function(){return r.a.createElement("h1",{className:E.a.h1},"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0456\u044f \u0441\u0438\u0441\u0442\u0435\u043c \u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044f")},k=a(6),B=a.n(k),C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={term:0},e.updateValue=function(t){e.setState({term:+t})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:B.a.sectionConvert},r.a.createElement(S,null),r.a.createElement("div",{className:B.a.meanBlock},r.a.createElement(v,{updateValue:this.updateValue}),r.a.createElement(g,{number:this.state.term}))))}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.bcbd6879.chunk.js.map