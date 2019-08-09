(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{AsEK:function(t,e,n){},KJde:function(t,e,n){"use strict";var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var s=n("cDcd"),a=n("LH3R"),r=a.canvasStyle,o=a.mirrorProps;function l(t,e){for(;t&&e--;)t=t.previousElementSibling;return t}var c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={text:t.text,clamped:!1},n.units=[],n.maxLine=0,n.canvas=null,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,s.PureComponent),i(e,[{key:"componentDidMount",value:function(){this.initCanvas(),this.reflow(this.props)}},{key:"componentWillReceiveProps",value:function(t){t.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.reflow(t)}},{key:"componentWillUnmount",value:function(){this.canvas.parentNode.removeChild(this.canvas)}},{key:"initCanvas",value:function(){if(!this.canvas){var t=this.canvas=document.createElement("div");t.className="LinesEllipsis-canvas "+this.props.className,this.copyStyleToCanvas(),Object.keys(r).forEach(function(e){t.style[e]=r[e]}),document.body.appendChild(t)}}},{key:"copyStyleToCanvas",value:function(){var t=this,e=window.getComputedStyle(this.target);o.forEach(function(n){t.canvas.style[n]=e[n]})}},{key:"reflow",value:function(t){var e=t.basedOn||/^[\x00-\x7F]+$/.test(t.text)?"words":"letters";switch(e){case"words":this.units=t.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(t.text);break;default:throw new Error("Unsupported options basedOn: "+e)}this.maxLine=+t.maxLine||1,this.canvas.innerHTML=this.units.map(function(t){return"<span class='LinesEllipsis-unit'>"+t+"</span>"}).join("");var n=this.putEllipsis(this.calcIndexes()),i=n>-1;this.setState({clamped:i,text:i?this.units.slice(0,n).join(""):t.text})}},{key:"calcIndexes",value:function(){var t=[0],e=this.canvas.firstElementChild;if(!e)return t;for(var n=0,i=1,s=e.offsetTop;(e=e.nextElementSibling)&&(e.offsetTop>s&&(i++,t.push(n),s=e.offsetTop),n++,!(i>this.maxLine)););return t}},{key:"putEllipsis",value:function(t){if(t.length<=this.maxLine)return-1;var e=t[this.maxLine],n=this.units.slice(0,e),i=this.canvas.children[e].offsetTop;this.canvas.innerHTML=n.map(function(t,e){return"<span class='LinesEllipsis-unit'>"+t+"</span>"}).join("")+"<wbr><span class='LinesEllipsis-ellipsis'>"+this.props.ellipsis+"</span>";for(var s=this.canvas.lastElementChild,a=l(s,2);a&&(s.offsetTop>i||s.offsetHeight>a.offsetHeight||s.offsetTop>a.offsetTop);)this.canvas.removeChild(a),a=l(s,2),n.pop();return n.length}},{key:"isClamped",value:function(){return this.state.clamped}},{key:"render",value:function(){var t=this,e=this.state,n=e.text,i=e.clamped,a=this.props,r=a.component,o=a.ellipsis,l=a.trimRight,c=a.className;return s.createElement(r,{className:"LinesEllipsis "+(i?"LinesEllipsis--clamped":"")+" "+c,ref:function(e){return t.target=e}},i&&l?n.replace(/[\s\uFEFF\xA0]+$/,""):n,s.createElement("wbr",null),i&&s.createElement("span",{className:"LinesEllipsis-ellipsis"},o))}}]),e}();c.defaultProps={component:"div",text:"",maxLine:1,ellipsis:"…",trimRight:!0,className:""},t.exports=c},LH3R:function(t,e,n){"use strict";t.exports={canvasStyle:{position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},mirrorProps:["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","padding-left","padding-right"]}},OGtf:function(t,e,n){var i=n("XKFU"),s=n("eeVq"),a=n("vhPU"),r=/"/g,o=function(t,e,n,i){var s=String(a(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(r,"&quot;")+'"'),o+">"+s+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*s(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},YZNL:function(t,e,n){"use strict";var i=n("pVnL"),s=n.n(i),a=n("QILm"),r=n.n(a),o=n("cDcd"),l=n.n(o),c=n("TSYQ"),u=n.n(c);n("AsEK");function p(t){var e=t.title,n=t.layer,i=t.active,a=t.className,o=t.children,c=r()(t,["title","layer","active","className","children"]);return l.a.createElement("div",s()({className:u()("ui-card",a,"ui-layer-".concat(n),{"active-card":i})},c),e&&l.a.createElement("h5",{className:"ui-title text-sec-headline-xs"},e),l.a.createElement("div",{className:"card-content"},o))}p.defaultProps={title:"",layer:2,active:!1},e.a=p},tUrg:function(t,e,n){"use strict";n("OGtf")("link",function(t){return function(e){return t(this,"a","href",e)}})}}]);
//# sourceMappingURL=https://staging.hackerrank.net/fcore-assets/sourcemaps/hackerrank_r_vendors~dashboard-802a1164.js.map