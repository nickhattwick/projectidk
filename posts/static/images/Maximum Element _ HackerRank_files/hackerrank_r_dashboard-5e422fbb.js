(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"5/Ko":function(e,a,t){},Gkn0:function(e,a,t){},NgMQ:function(e,a,t){},S7zJ:function(e,a,t){},V9bm:function(e,a,t){},ndSB:function(e,a,t){},rO8H:function(e,a,t){"use strict";t.r(a);t("2Spj");var r=t("pVnL"),n=t.n(r),i=(t("xfY5"),t("MVZn")),s=t.n(i),o=(t("f3/d"),t("rGqo"),t("8+KV"),t("0l/t"),t("bWfx"),t("lwsE")),l=t.n(o),c=t("W8MJ"),u=t.n(c),d=t("a1gu"),m=t.n(d),p=t("Nsbk"),b=t.n(p),f=t("PJYZ"),v=t.n(f),h=t("7W2i"),k=t.n(h),g=t("lSNA"),y=t.n(g),E=t("cDcd"),T=t.n(E),N=t("fvjX"),R=t("17x9"),w=t.n(R),_=t("/MKj"),P=t("xeH2"),I=t.n(P),j=t("Uz+i"),A=t("V7ES"),S=t("fe33"),C=t("BtRI"),O=t("TSYQ"),x=t.n(O),q=t("5J+W"),J=t("7lYa"),V=t("CFIE");function G(e){var a=e.badge,t=Object(V.i)(a);return T.a.createElement("div",{className:"skill-progress-bar"},T.a.createElement(J.a,{value:t,theme:"theme-m"}),T.a.createElement("div",{className:"progress-count text-content"},T.a.createElement("span",{className:"percentage"},t,"%"),T.a.createElement("span",{className:"points-left"},Object(V.a)(a,"dashboard"))))}G.propTypes={badge:w.a.object};var K=t("paQg"),M=t("eUGL"),W=t("eOGF"),B=t("oBtd"),L=t.n(B),U=t("Z/B0"),D=(t("V9bm"),t("ndSB"),function(e){function a(){var e,t;l()(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=m()(this,(e=b()(a)).call.apply(e,[this].concat(n))),y()(v()(t),"sendMetrics",function(e){var a,r=t.props,n=r.track,i=r.position,o=n.type,l=n.slug,c=n.badge_type,u=n.level,d=n.stars,m=!!I()(e.target).closest("button").length?"button":"card";a="badge"===o?{attribute1:c,attribute2:u,attribute3:d}:{attribute1:l},L.a.batch_track("Click","BadgeTrackResumePractice",s()({},a,{attribute4:m,attribute8:i}))}),t}return k()(a,e),u()(a,[{key:"getLink",value:function(){var e=this.props.track,a=e.type,t=e.slug,r=e.taxonomy;return e.slug===U.c.INTERVIEW_PREPARATION_KIT?"/interview/".concat(U.c.INTERVIEW_PREPARATION_KIT):"badge"===a?Object(V.e)(e):Object(W.b)("/domains/".concat("tutorial"===r?"tutorials/":"").concat(t),{filters:{status:["unsolved"]}})}},{key:"trackToBadgeConverter",value:function(e){var a=e.slug===U.c.INTERVIEW_PREPARATION_KIT;return s()({},e,{badge_type:e.slug,badge_name:e.name,stars:0,level:0,total_challenges:e.total_challenges||e.challenges_count,category_name:a?"Interview Preparation":e.category_name})}},{key:"render",value:function(){var e=this.props,a=e.track,t=e.primary,r=e.className,n=e.appUtil,i=a.type,s=this.getLink(),o="track"===i?this.trackToBadgeConverter(a):a,l=o.slug===U.c.INTERVIEW_PREPARATION_KIT;return T.a.createElement("div",{className:x()("skill-progress-card",r,{"interview-promotion-card":l})},T.a.createElement(M.a,{cardTitle:o.category_name,primaryCard:t,title:o.badge_name,detail:T.a.createElement(G,{badge:o}),buttonText:"Continue Practice",buttonClass:x()("ui-btn-large",t?"ui-btn-primary":"ui-btn-line-primary"),onClick:this.sendMetrics,link:s}),"badge"===o.type&&T.a.createElement("div",{className:"badge-wrap"},T.a.createElement(K.a,{badge:o,shadow:!0})),l&&T.a.createElement("div",{className:"interview-banner"},T.a.createElement("img",{className:"new-banner-svg",alt:"New",src:n.assetPath("svgs/new-banner.svg")})))}}]),a}(E.PureComponent));y()(D,"propTypes",{track:w.a.object,primary:w.a.bool,appUtil:w.a.object.isRequired,position:w.a.number});var z=D=Object(q.a)(D),Y=function(e){function a(){return l()(this,a),m()(this,b()(a).apply(this,arguments))}return k()(a,e),u()(a,[{key:"getContent",value:function(){return this.props.hasRecent?"HackerRank offers a variety of skills for you to practice. Feel free to choose an additional programming language too.":"Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve."}},{key:"render",value:function(){var e=this.props,a=e.text,t=e.hasRecent,r=e.className,n=e.position,i=this.getContent();return T.a.createElement("div",{className:x()("explore-skill-card",r)},T.a.createElement(M.a,{cardTitle:a,title:t?"Add another skill":"Add your first skill",detail:i,buttonText:"Explore Skills",buttonClass:"ui-btn-large ui-btn-line-primary",onClick:this.props.animateToSkills,"data-analytics":t?"AddAnotherSkill":"AddFirstSkill","data-attr8":n}))}}]),a}(E.PureComponent);y()(Y,"propTypes",{text:w.a.string.isRequired,hasRecent:w.a.bool.isRequired,animateToSkills:w.a.func.isRequired,position:w.a.number}),y()(Y,"defaultProps",{text:"",hasRecent:!1});var F=Y,H=function(e){function a(){var e,t;l()(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=m()(this,(e=b()(a)).call.apply(e,[this].concat(n))),y()(v()(t),"updateInterviewTryStatus",function(){var e=t.props,a=e.profile,r=e.profileActions;a&&a.username&&!a.tried_interview_prep&&r.updateProfile("me",{tried_interview_prep:!0})}),t}return k()(a,e),u()(a,[{key:"render",value:function(){var e=this.props,a=e.className,t=e.appUtil,r=e.position;return T.a.createElement("div",{className:x()("interview-promotion-card",a),onClick:this.updateInterviewTryStatus},T.a.createElement("div",{className:"interview-banner"},T.a.createElement("img",{className:"new-banner-svg",alt:"New",src:t.assetPath("svgs/new-banner.svg")})),T.a.createElement(M.a,{cardTitle:"Interview Preparation",title:"Interview Preparation Kit",detail:"Curated challenges and tips based on learnings from 1000+ companies to help you prepare for your upcoming interviews.",buttonText:"View",buttonClass:"ui-btn-large ui-btn-primary",link:"/interview/".concat(U.c.INTERVIEW_PREPARATION_KIT),"data-analytics":"InterviewPromotionCard","data-attr8":r}))}}]),a}(T.a.Component);y()(H,"propTypes",{className:w.a.string,profileActions:w.a.object.isRequired,profile:w.a.object.isRequired,appUtil:w.a.object.isRequired,position:w.a.number});var Q=H=Object(N.d)(q.a,Object(_.b)(null,function(e){return{profileActions:Object(N.b)(S.a,e)}}))(H),Z=t("KJde"),X=t.n(Z),$=(t("NgMQ"),function(e){function a(){return l()(this,a),m()(this,b()(a).apply(this,arguments))}return k()(a,e),u()(a,[{key:"getInterviewPreparationDetails",value:function(){return{short_description:"Curated challenges and tips based on learnings from 1000+ companies to help you prepare",short_name:"Interview Preparation Kit",title:"Interview Preparation",slug:U.c.INTERVIEW_PREPARATION_KIT}}},{key:"renderTutorialCard",value:function(e){var a,t,r,n=e.title,i=e.slug,s=e.short_description,o=e.tagline,l=e.is_recent,c=e.short_name,u=e.name;i===U.c.INTERVIEW_PREPARATION_KIT?(r="/interview",t="ViewTutorial",a="View Tutorial"):(r="/domains/tutorials/".concat(i),t=l?"ResumeTutorial":"StartTutorial",a=l?"Resume Tutorial":"Start Tutorial");var d=T.a.createElement("div",null,T.a.createElement("div",{className:"tutorial-content text-content"},T.a.createElement(X.a,{text:s||o,maxLine:"2",ellipsis:"...",basedOn:"letters"})),T.a.createElement("div",{className:"start-tutorial bold"},a));return T.a.createElement("div",{key:i,className:"tutorial-card-box"},T.a.createElement("div",{className:"tutorial-card-tile"},T.a.createElement(M.a,{cardTitle:n||"Tutorial","data-analytics":t,"data-attr1":i,title:c||u,detail:d,link:r})))}},{key:"render",value:function(){var e=this.props.tracks;return T.a.createElement("div",{className:"tutorials-section"},T.a.createElement("div",{className:"tutorial-row"},this.renderTutorialCard(this.getInterviewPreparationDetails()),e.map(this.renderTutorialCard)))}}]),a}(E.PureComponent));y()($,"propTypes",{tracks:w.a.array.isRequired});var ee=$,ae=t("MGin"),te=t("YZNL"),re=(t("Gkn0"),function(e){function a(){return l()(this,a),m()(this,b()(a).apply(this,arguments))}return k()(a,e),u()(a,[{key:"renderCategory",value:function(e){return e.tracks.map(function(a){return T.a.createElement("div",{className:"".concat(e.slug,"-info"),key:a.name},T.a.createElement(ae.Link,{to:"/domains/"+a.slug,"data-analytics":"TrackLink","data-attr1":e.slug,"data-attr2":a.slug},T.a.createElement("div",{className:"track-item bold"},T.a.createElement("div",{className:"track-name"},a.name))))})}},{key:"renderSkillSection",value:function(){var e=this;return this.props.tracks.map(function(a){return"Tutorials"===a.name?null:T.a.createElement(te.a,{title:a.name,key:a.name},T.a.createElement("div",{className:"skills-category"},e.renderCategory(a)))})}},{key:"render",value:function(){return T.a.createElement("div",{className:"skills-section"},T.a.createElement("div",{className:"skills-wrapper"},this.renderSkillSection()))}}]),a}(E.PureComponent));y()(re,"propTypes",{tracks:w.a.array.isRequired});var ne=re,ie=t("OEX3");t("S7zJ");function se(e){var a=e.className,t=e.appUtil.assetPath,r=e.hideElement,n=e.sendVerification,i=e.sentStatus,s=e.sendingVerification,o=e.position;if(r)return null;var l=i?"svgs/mail-sent.svg":"svgs/mail-not-sent.svg";return T.a.createElement(te.a,{layer:-1,className:x()("email-verification-card",a,{"mail-sent":i})},T.a.createElement("img",{src:t(l),className:"email-verification-card-status",alt:i?"mail sent":"resend mail"}),T.a.createElement("div",{className:"email-verification-card-content"},T.a.createElement("h3",{className:"email-verification-card-title"},"Confirm your",T.a.createElement("span",{className:"email-verification-card-title-highlight"}," ","email address"),"."),T.a.createElement("p",{className:"email-verification-card-description"},"Please check your Inbox. We’ve sent a link to confirm your email address. Once you confirm, you will be able to access all the features of our site, including",T.a.createElement("span",{className:"email-verification-card-description-highlight"}," "," Jobs, Leaderboard, Recommendations and more"),"."),T.a.createElement("div",{className:"email-verification-card-btns"},i&&!s&&T.a.createElement("span",{className:"email-verification-card-message"},"Email Sent ",T.a.createElement("i",{className:"ui-icon-success"})),T.a.createElement(ie.g,{className:"email-verification-card-cta",size:"large",loading:s,onClick:n,"data-analytics":"ResendConfirmationEmail","data-attr3":"card","data-attr8":o},s?"Sending Confirmation Email":"Resend Confirmation Email"))))}se.PropTypes={className:w.a.string,appUtil:w.a.shape({assetPath:w.a.func.isRequired,isRouteActive:w.a.func.isRequired}),selfProfile:w.a.shape({showVerifiedBanner:w.a.bool,confirmed:w.a.bool}).isRequired,sentStatus:w.a.number,sendVerification:w.a.func.isRequired,sendingVerification:w.a.bool,hideElement:w.a.bool,position:w.a.number};var oe=Object(q.a)(se),le=t("6gid"),ce=t("HeyA"),ue=t("wEfs"),de=t("iGQG"),me=t("xaeT"),pe=t("cSw4");t("5/Ko"),t("se4s");t.d(a,"PureDashboard",function(){return be}),t.d(a,"mapStateToProps",function(){return fe}),t.d(a,"mapDispatchToProps",function(){return ve});var be=function(e){function a(){var e,t;l()(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=m()(this,(e=b()(a)).call.apply(e,[this].concat(n))),y()(v()(t),"mySkills",void 0),t}return k()(a,e),u()(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.profile,t=e.abTest.isNotJobsPromoVariant,r=e.recommendedJobs,n=r.jobs,i=r.didInvalidate;!Object(me.B)(a)||t()||n&&!i||this.fetchRecommendedJobs("dashboard")}},{key:"fetchRecommendedJobs",value:function(e){var a=this,t=this.props,r=t.jobsActions,n=t.profile,i=n.country,s=n.work_start_year,o={role:n.jobs_prefered_roles,country_name:i,min_experience:s?(new Date).getFullYear()-s:0,recommended:!0};r.loadRecommendedJobs(o,e).then(function(){var e=a.props.recommendedJobs.jobs,t=(void 0===e?[]:e).map(function(e){return e.unique_id});L.a.batch_track("View","JobCard",{attribute1:t})})}},{key:"animateToSkills",value:function(){I()("body, html").animate({scrollTop:I()(this.mySkills).offset().top-20},300)}},{key:"getTutorialTracks",value:function(){return(this.props.trackGroups.filter(function(e){return"tutorials"===e.slug})[0]||{}).tracks}},{key:"getCategorizedMyTracks",value:function(){var e=this.props,a=e.trackGroups,t=e.myTracks,r={};return a.forEach(function(e){e.tracks.forEach(function(a){r[a.slug]=e.name})}),t.map(function(e){return s()({},e,{category_name:e.category_name||e.badge_name||r[e.slug]})})}},{key:"renderMyTracks",value:function(){var e=this.props.profile,a=e.tried_interview_prep,t=e.confirmed,r=this.getCategorizedMyTracks(),i=!t,s=Number(!a)+Number(i),o=4-s;return T.a.createElement("div",{className:"my-tracks"},T.a.createElement(j.a,{category:"yourSkills"}),T.a.createElement("div",{className:"tracks-row"},!a&&T.a.createElement(Q,{className:"card-box",profile:e,position:0}),i&&T.a.createElement(ue.a,null,function(e){return T.a.createElement(oe,n()({},e,{className:"card-box",position:a?0:1}))}),r.slice(0,o).map(function(e,t){return T.a.createElement(z,{primary:!!a&&0===t,className:"card-box",key:e.badge_type||e.slug,track:e,position:s++})}),!r.length&&T.a.createElement(F,{text:"New Skill",className:"card-box",hasRecent:r.length>0,animateToSkills:this.animateToSkills.bind(this),position:s})))}},{key:"renderTutorials",value:function(){var e=this.getTutorialTracks();return e?T.a.createElement("div",{className:"my-tutorials"},T.a.createElement(j.a,{category:"tutorials"}),T.a.createElement(ee,{tracks:e})):null}},{key:"renderAllSkills",value:function(){var e=this,a=this.props.trackGroups;return T.a.createElement("div",{className:"my-skills",ref:function(a){e.mySkills=a}},T.a.createElement(j.a,{category:"exploreSkills"}),T.a.createElement(ne,{tracks:a}))}},{key:"renderRecommendedJobs",value:function(){var e=this.props,a=e.recommendedJobs,t=e.profile,r=e.abTest.isNotJobsPromoVariant,n=a.jobs;if(Object(me.B)(t)&&n&&n.length&&!r()){var i={h_referrer:"jobs_card",h_location:"dashboard",h_version:"jobs_promotion"};return T.a.createElement("div",{className:"recommended-jobs"},T.a.createElement(j.a,{category:"recommendedJobs"}),T.a.createElement("div",{className:"jobs-list"},n.map(function(e,a){return T.a.createElement(le.a,{key:e.unique_id,job:e,position:a,query:i})}),T.a.createElement(ce.default,{query:i,"data-attr2":"dashboard","data-attr8":n&&n.length})))}}},{key:"render",value:function(){return T.a.createElement("div",{className:"container dashboard-page dashboard-v2"},this.renderRecommendedJobs(),this.renderMyTracks(),this.renderAllSkills(),this.renderTutorials())}}]),a}(E.Component);y()(be,"propTypes",{profile:w.a.object.isRequired,dashboardActions:w.a.object,myTracks:w.a.array.isRequired,trackGroups:w.a.array.isRequired,showAllTracks:w.a.bool.isRequired,abTest:w.a.shape({isNotJobsPromoVariant:w.a.func.isRequired}).isRequired,jobsActions:w.a.shape({loadRecommendedJobs:w.a.func.isRequired}).isRequired,recommendedJobs:w.a.shape({jobs:w.a.arrayOf(w.a.object),didInvalidate:w.a.bool})});var fe=function(e){var a=e.community,t=a.profile,r=a.dashboard;return{profile:t,myTracks:r.myTracks,trackGroups:r.trackGroups,showAllTracks:r.showAllTracks,recommendedJobs:Object(pe.b)("dashboard")(e)}},ve=function(e){return{dashboardActions:Object(N.b)(A.a,e),profileActions:Object(N.b)(S.a,e),jobsActions:Object(N.b)(C.a,e)}};a.default=Object(N.d)(de.b,Object(_.b)(fe,ve))(be)}}]);
//# sourceMappingURL=https://staging.hackerrank.net/fcore-assets/sourcemaps/hackerrank_r_dashboard-5e422fbb.js.map