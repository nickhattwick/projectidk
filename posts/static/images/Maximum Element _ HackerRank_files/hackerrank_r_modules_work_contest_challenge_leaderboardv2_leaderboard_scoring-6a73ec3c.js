(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{eqDc:function(e,n,r){},kDgx:function(e,n,r){"use strict";r.d(n,"b",function(){return D}),r.d(n,"a",function(){return S});r("2Spj"),r("f3/d"),r("rGqo"),r("8+KV"),r("xfY5"),r("DNiP"),r("0l/t"),r("bWfx"),r("LK8F");var a=r("PJYZ"),t=r.n(a),l=r("lwsE"),o=r.n(l),u=r("W8MJ"),c=r.n(u),s=r("a1gu"),i=r.n(s),d=r("Nsbk"),m=r.n(d),f=r("7W2i"),p=r.n(f),h=r("pVnL"),v=r.n(h),C=r("MVZn"),y=r.n(C),w=r("lSNA"),b=r.n(w),N=r("cDcd"),g=r.n(N),E=r("TSYQ"),x=r.n(E),k=r("LD1s"),H=r("2Ica"),P=r("hF3m"),R=(r("eqDc"),function(){}),S=function(e){function n(){return o()(this,n),i()(this,m()(n).apply(this,arguments))}return p()(n,e),c()(n,[{key:"render",value:function(){return null}}]),n}(N.PureComponent);b()(S,"defaultProps",{renderCell:function(e){return e},renderHeaderCell:function(e){return e},onColumnSelect:R});var D=function(e){function n(e){var r;return o()(this,n),r=i()(this,m()(n).call(this,e)),b()(t()(r),"columnsConfig",void 0),b()(t()(r),"getColumnsConfig",function(e){var n=e.children,r=e.flexLayout;if(!n)return[];Array.isArray(n)||(n=[n]);var a=n.filter(function(e){return!!e}).map(function(e){return y()({},e.props)});if(r){var t=a.reduce(function(e,n){return e+Number(n.flex)},0);a.forEach(function(e){e.flexRule="".concat(e.flex," 1 ").concat(100*Number(e.flex)/t,"%")})}return a}),b()(t()(r),"getColumnStyle",function(e){var n={},a=r.props.flexLayout?"flex":"width",t="width"===a?a:"flexRule";return n[a]=e[t],n}),b()(t()(r),"renderHeaderDropdown",function(e){var n=e.columnKey,r=e.onColumnSelect,a=e.columnOptions,t=e.header,l=e.dropdownProps;return g.a.createElement(k.a,v()({className:"header-dropdown",closeHandleSelector:".header-item"},l),g.a.createElement(H.a,null,g.a.createElement("span",{className:"selected-column"},t),g.a.createElement("i",{className:"ui-icon-chevron-down"})),g.a.createElement(P.a,null,g.a.createElement("ul",{className:"header-list"},a.map(function(e,a){var t=e.key,l=e.name;return g.a.createElement("li",{key:a,className:x()("header-item",{selected:t===n}),onClick:r.bind(null,t,l)},l)}))))}),b()(t()(r),"layoutClass",function(){return r.props.flexLayout?"flex":"table clearfix"}),b()(t()(r),"renderHeader",function(){var e=t()(r).columnsConfig;return g.a.createElement("div",{className:"table-header-wrapper"},g.a.createElement("header",{className:x()("table-header",r.layoutClass())},e.map(function(e,n){var a=e.headerClass,t=e.columnOptions,l=e.header,o=e.renderHeaderCell;return g.a.createElement("div",{key:n,className:x()("table-header-column",a),style:r.getColumnStyle(e)},t?r.renderHeaderDropdown(e):g.a.createElement("div",{className:"ellipsis"},o(l,e)))})))}),b()(t()(r),"renderRow",function(e,n,a){var l=t()(r).columnsConfig,o=a?a.className:null;return g.a.createElement("div",v()({key:n},a,{className:x()("table-row-wrapper",o)}),g.a.createElement("div",{className:x()("table-row",r.layoutClass())},l.map(function(n,t){var l=n.columnClass,o=n.columnKey,u=n.renderCell;return g.a.createElement("div",{key:t,className:x()("table-row-column ellipsis",l),style:r.getColumnStyle(n)},u(e[o],e,n,a))})))}),b()(t()(r),"renderBody",function(){var e=r.props,n=e.data,a=e.getRowProps;return g.a.createElement("div",{className:"table-body"},n.map(function(e,n){var t=a(e,n);return r.renderRow(e,n,t)}))}),r.columnsConfig=r.getColumnsConfig(e),r}return p()(n,e),c()(n,[{key:"componentWillReceiveProps",value:function(e){this.columnsConfig=this.getColumnsConfig(e)}},{key:"render",value:function(){var e=this.props,n=e.tableClass,r=e.noHeader,a=e.hover,t=e.data,l={"ui-table-hover":a,"first-col-raised":e.firstColRaised&&t.length};return g.a.createElement("div",{className:x()("ui-table",n,l)},!r&&this.renderHeader(),this.renderBody())}}]),n}(N.Component);b()(D,"defaultProps",{data:[],noHeader:!1,flexLayout:!0,hover:!1,getRowProps:R,firstColRaised:!0})}}]);
//# sourceMappingURL=https://staging.hackerrank.net/fcore-assets/sourcemaps/hackerrank_r_modules~work~contest~challenge~leaderboardv2~leaderboard~scoring-6a73ec3c.js.map