(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"5T8g":function(t,e,n){"use strict";n.r(e);n("bWfx");var a=n("lwsE"),r=n.n(a),c=n("W8MJ"),l=n.n(c),i=n("a1gu"),s=n.n(i),u=n("Nsbk"),o=n.n(u),m=n("7W2i"),p=n.n(m),f=n("lSNA"),g=n.n(f),h=(n("f3/d"),n("cDcd")),d=n.n(h),b=n("17x9"),v=n.n(b),k=n("/MKj"),j=n("MGin"),O=n("eOGF"),y=n("5J+W"),C=n("3ESS");n("nq5B");function E(t){var e=t.tutorial,n=t.assetPath;return d.a.createElement("div",{className:"col-md-6"},d.a.createElement(j.Link,{to:"/domains/tutorials/".concat(e.slug),className:"tutorial-tile"},d.a.createElement("img",{src:n("dashboard/".concat(e.slug,".svg")),alt:"Track Image",className:"tutorial-img"}),d.a.createElement("span",{className:"tutorial-name bold"},e.name)))}Object(O.O)("dashboard/.*.svg");var N=function(t){function e(){return r()(this,e),s()(this,o()(e).apply(this,arguments))}return p()(e,t),l()(e,[{key:"render",value:function(){var t=this.props,e=t.track,n=t.chapters,a=t.appUtil.assetPath;return d.a.createElement("div",{className:"b4 tutorials-list-page"},d.a.createElement("div",{className:"container"},d.a.createElement(C.a,{track:e}),d.a.createElement("div",{className:"tutorials-list row"},n.map(function(t){return d.a.createElement(E,{key:t.slug,tutorial:t,assetPath:a})}))))}}]),e}(h.PureComponent);g()(N,"propTypes",{chapters:v.a.arrayOf(v.a.object),track:v.a.object,appUtil:v.a.object}),N=Object(k.b)(function(t){var e=t.community.domains.dict.tutorials;return{chapters:e.chapters,track:{id:e.id,slug:e.slug,name:e.name}}})(N),N=Object(y.a)(N),e.default=N},HfZf:function(t,e,n){"use strict";var a=n("lwsE"),r=n.n(a),c=n("W8MJ"),l=n.n(c),i=n("a1gu"),s=n.n(i),u=n("Nsbk"),o=n.n(u),m=n("7W2i"),p=n.n(m),f=n("lSNA"),g=n.n(f),h=n("cDcd"),d=n.n(h),b=n("eOGF"),v=n("0e0P"),k=function(t){function e(){return r()(this,e),s()(this,o()(e).apply(this,arguments))}return p()(e,t),l()(e,[{key:"getHtml",value:function(){var t=this.props,e=t.html,n=t.id,a=t.isAppMounted;if(Object(b.H)()||a)return e;var r=document.getElementById(n);return r?r.innerHTML:e}},{key:"render",value:function(){var t=this.props,e=t.element,n=t.id,a=t.className,r=this.getHtml();return d.a.createElement(e,{id:n,className:a,dangerouslySetInnerHTML:{__html:r}})}}]),e}(h.PureComponent);g()(k,"defaultProps",{element:"div"}),e.a=Object(v.a)(k)},Vdmo:function(t,e,n){"use strict";n.r(e),n.d(e,"makeTrackChallengesProps",function(){return k}),n.d(e,"mapDispatchToProps",function(){return j}),n.d(e,"mergeProps",function(){return O});var a=n("MVZn"),r=n.n(a),c=(n("0l/t"),n("bWfx"),n("/MKj")),l=n("fvjX"),i=n("peh1"),s=n("iGQG"),u=n("5J+W"),o=n("cK/l"),m=n("LNHK"),p=n("rw7i"),f=n("Z/B0"),g=function(t){return t.community.profile},h=function(t,e){return e.appUtil.params},d=Object(i.createSelector)([function(t,e){return e.appUtil.location},h],function(t,e){var n=e.trackSlug,a=e.chapterSlug;return Object(o.i)(t,n,a)}),b=function(t){return t.community.challenges.challengeList},v=function(t){return t.community.domains.dict},k=function(){return Object(i.createSelector)([g,o.g,b,d,h,v],function(t,e,n,a,r,c){var l=r.trackSlug,i=r.chapterSlug,s=n.challengePages,u=n.current_track,m=s[Object(o.j)(l,a)]||{list:[],firstUnsolvedChallenge:null,total:0},p=m.list,g=m.firstUnsolvedChallenge,h=m.total,d=p.length,b=p.map(function(t){return e[Object(o.k)(t,"master")]});g&&(b=b.filter(function(t){return t.slug!==g.slug}));var v=c[u.slug],k=v.chapterDict;return{challenges:b,currentChallengesCount:d,totalChallenges:h||0,chapters:v.chapters,chapter:k[i],profile:t,filters:a,track:u,firstUnsolvedChallenge:g,listType:f.a.TRACK}})},j=function(t){return{challengeActions:Object(l.b)(m.a,t)}},O=function(t,e,n){var a=t.track,c=void 0===a?{}:a,l=t.filters,i=t.currentChallengesCount,s=t.chapter,u=void 0===s?{}:s;return r()({},t,e,n,{loadChallenges:function(){return e.challengeActions.getTrackChallengeList({trackSlug:c.slug,filters:l,offset:i,limit:Object(o.h)(u.slug)})}})},y=Object(l.d)(u.a,s.b,Object(c.b)(k(),j,O))(p.a);e.default=y},nq5B:function(t,e,n){}}]);
//# sourceMappingURL=https://staging.hackerrank.net/fcore-assets/sourcemaps/hackerrank_r_challenge_list-ca4d3bda.js.map