(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"61sd":function(e,t,a){},AMLJ:function(e,t,a){"use strict";var n=a("pVnL"),i=a.n(n),s=(a("tUrg"),a("QILm")),r=a.n(s),o=a("cDcd"),c=a.n(o),l=a("17x9"),m=a.n(l),u=a("MGin"),p=a("TSYQ"),d=a.n(p),v=a("foLx"),b=a("OEX3");a("O4jn");function y(e){var t=e.primary,a=e.link,n=e.itemImage,s=e.title,o=e.subText,l=e.description,m=e.ctaContainer,p=e.buttonText,y=e.disabled,g=e.customHtml,f=e.active,h=r()(e,["primary","link","itemImage","title","subText","description","ctaContainer","buttonText","disabled","customHtml","active"]),k=l?"align-self-end":"align-self-center",E=t?"ui-btn-primary":"ui-btn-line-primary";return c.a.createElement(u.Link,i()({className:d()("base-list-item",{"base-list-item-primary":t,active:f}),disabled:y,to:a},h),c.a.createElement(v.a,{name:s,size:60,avatarClass:"base-list-item-image",avatar:n,alt:"".concat(s," logo")}),c.a.createElement("div",{className:"base-list-item-content"},s&&c.a.createElement("h3",{className:"base-list-item-title"},s),o&&c.a.createElement("div",{className:"base-list-item-text base-list-item-sub-text"},o),l&&c.a.createElement("div",{className:"base-list-item-text base-list-item-description"},l),g),m||p&&c.a.createElement(b.g,{className:d()("base-list-item-btn",E,k),disabled:y},p))}y.propTypes={primary:m.a.bool,disabled:m.a.bool,link:m.a.string,itemImage:m.a.string,title:m.a.oneOfType([m.a.string,m.a.element]),subText:m.a.oneOfType([m.a.string,m.a.element]),description:m.a.oneOfType([m.a.string,m.a.element]),ctaContainer:m.a.element,buttonText:m.a.string,customHtml:m.a.element,active:m.a.bool},t.a=y},O4jn:function(e,t,a){},vtt8:function(e,t,a){"use strict";var n=a("pVnL"),i=a.n(n),s=(a("V+eJ"),a("f3/d"),a("bWfx"),a("lwsE")),r=a.n(s),o=a("W8MJ"),c=a.n(o),l=a("a1gu"),m=a.n(l),u=a("Nsbk"),p=a.n(u),d=a("PJYZ"),v=a.n(d),b=a("7W2i"),y=a.n(b),g=a("lSNA"),f=a.n(g),h=a("cDcd"),k=a.n(h),E=a("17x9"),C=a.n(E),N=a("/MKj"),T=a("fvjX"),x=a("wd/R"),w=a.n(x),M=a("TSYQ"),_=a.n(M),L=a("AMLJ"),O=a("59NX"),H=a("5J+W"),J=(a("61sd"),function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return a=m()(this,(e=p()(t)).call.apply(e,[this].concat(i))),f()(v()(a),"activatedKeys",[]),a}return y()(t,e),c()(t,[{key:"isConversationEmpty",value:function(){return 0===this.props.conversations.length}},{key:"renderEmptyConversationMessage",value:function(){return k.a.createElement("div",{className:"empty-state"},k.a.createElement("h3",{className:"empty-heading"},"Nothing here yet."),k.a.createElement("p",{className:"empty-sub-heading"},"Messages from interested employers will appear here"))}},{key:"renderTimeStampBlock",value:function(e,t){var a=w()(e).local().format("MMMM Do, HH:mm A"),n=["indicator-icon",{"ui-icon-circle-filled":t,"ui-icon-circle":!t}];return k.a.createElement("div",{className:"timestamp"},k.a.createElement("span",null,a),k.a.createElement("i",{className:_()(n)}))}},{key:"isHacker",value:function(){return"hacker"===this.props.isomorphicCookies.get("user_type")}},{key:"isConversationActive",value:function(e){return this.props.currentConversationId===e}},{key:"renderConversationList",value:function(){var e=this;return this.props.conversations.map(function(t){var a=e.isHacker(),n=t.last_message_activity,s=t.unique_id,r=t.recruiter_fields,o=r.name,c=r.company_name,l=r.company_logo,m=t.hacker_fields.name,u=t.message_preview,p=u.has_unread_messages,d=u.headline,v=e.isConversationActive(s);v&&e.activatedKeys.push(s);var b=p&&!(e.activatedKeys.indexOf(s)>-1),y={title:a?"".concat(o," @ ").concat(c):m,subText:a?"Re: ".concat(d):"",link:a?"/jobs/dashboard/messages/".concat(s):"/work/sourcing/messages/".concat(s),customHtml:e.renderTimeStampBlock(n,b),itemImage:a?l:void 0,active:v&&!a};return k.a.createElement(L.a,i()({key:s},y,{"data-analytics":"ConversationView","data-attr1":s}))})}},{key:"render",value:function(){var e=this.isConversationEmpty();return k.a.createElement("div",{className:_()("conversation-component",{"no-messages":e})},e?this.renderEmptyConversationMessage():this.renderConversationList())}}]),t}(h.PureComponent));f()(J,"propTypes",{conversations:C.a.array.isRequired,currentConversationId:C.a.string}),t.a=Object(T.d)(Object(N.b)(null,null),O.a,H.a)(J)}}]);
//# sourceMappingURL=https://staging.hackerrank.net/fcore-assets/sourcemaps/hackerrank_r_commons~jobs~sourcing_messages-a3e46fe7.js.map