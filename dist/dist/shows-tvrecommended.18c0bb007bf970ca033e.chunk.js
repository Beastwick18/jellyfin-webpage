(self.webpackChunk=self.webpackChunk||[]).push([[5240,7425,7282],{27282:function(e,t,n){"use strict";n.r(t),n.d(t,{getTabsElement:function(){return v},selectedTabIndex:function(){return b},setTabs:function(){return m}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(61013);var a,s,r,i=n(83094),o=n(47518),l=n(47005),d=(n(87861),n(78066),document.querySelector(".skinHeader"));function c(){this.selectedIndex(this.readySelectedIndex),this.readySelectedIndex=null}function u(e){function t(e){if(i.ZP.parentWithTag(e,"input"))return!1;var t=e.classList;return!t||!t.contains("scrollX")&&!t.contains("animatedScrollX")}for(var n=e;null!=n;){if(!t(n))return!1;n=n.parentNode}return!0}function m(e,t,i,m,b,v,h){if(s||(s=d.querySelector(".headerTabs")),!e)return a&&(document.body.classList.remove("withSectionTabs"),s.innerHTML="",s.classList.add("hide"),a=null),{tabsContainer:s,replaced:!1};var f=s;if(a||f.classList.remove("hide"),a!==e){var p=0,g='<div is="emby-tabs"'+(null==t?"":' data-index="'+t+'"')+' class="tabs-viewmenubar"><div class="emby-tabs-slider" style="white-space:nowrap;">'+i().map((function(e){var t,n="emby-tab-button";return!1===e.enabled&&(n+=" hide"),e.cssClass&&(n+=" "+e.cssClass),t=e.href?'<a href="'+e.href+'" is="emby-linkbutton" class="'+n+'" data-index="'+p+'"><div class="emby-button-foreground">'+e.name+"</div></a>":'<button type="button" is="emby-button" class="'+n+'" data-index="'+p+'"><div class="emby-button-foreground">'+e.name+"</div></button>",p++,t})).join("")+"</div></div>";return f.innerHTML=g,window.CustomElements.upgradeSubtree(f),document.body.classList.add("withSectionTabs"),a=e,function(e,t){if(o.Z.touch){var a=function(n,a){u(a)&&e.contains(a)&&t.selectNext()},s=function(n,a){u(a)&&e.contains(a)&&t.selectPrevious()};n.e(5344).then(n.bind(n,85344)).then((function(t){var n=new(0,t.default)(e.parentNode.parentNode);l.Events.on(n,"swipeleft",a),l.Events.on(n,"swiperight",s),e.addEventListener("viewdestroy",(function(){n.destroy()}))}))}}(e,r=f.querySelector('[is="emby-tabs"]')),r.addEventListener("beforetabchange",(function(e){var t=m();if(null!=e.detail.previousIndex){var n=t[e.detail.previousIndex];n&&n.classList.remove("is-active")}var a=t[e.detail.selectedTabIndex];a&&a.classList.add("is-active")})),b&&r.addEventListener("beforetabchange",b),v&&r.addEventListener("tabchange",v),!1!==h&&(r.selectedIndex?r.selectedIndex(t):(r.readySelectedIndex=t,r.addEventListener("ready",c))),{tabsContainer:f,tabs:r,replaced:!0}}return r.selectedIndex(t),{tabsContainer:f,tabs:r,replaced:!1}}function b(e){null!=e?r.selectedIndex(e):r.triggerTabChange()}function v(){return document.querySelector(".tabs-viewmenubar")}},94333:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}}),n(5769),n(32081),n(63238),n(61418),n(17460),n(14078),n(27471);var a=n(47005),s=n(12392),r=n(3319),i=n(78695),o=n(56705),l=n(83094),d=n(28978),c=n(61097),u=n(53218),m=n(27282),b=n(44614),v=(n(87201),n(32420),n(78066),n(76543)),h=n(6610);function f(){return[{name:b.ZP.translate("Shows")},{name:b.ZP.translate("Suggestions")},{name:b.ZP.translate("TabUpcoming")},{name:b.ZP.translate("Genres")},{name:b.ZP.translate("TabNetworks")},{name:b.ZP.translate("Episodes")}]}function p(){return!i.Z.desktop}function g(e,t){function g(e){var t;T(0,t=parseInt(e.detail.selectedTabIndex),(function(e){-1==P.indexOf(t)&&e.preRender&&e.preRender()}))}function y(e){var t,n=parseInt(e.detail.selectedTabIndex);L=t=n,T(0,t,(function(e){-1==P.indexOf(t)&&(P.push(t),e.renderTab())}))}function I(){return e.querySelectorAll(".pageTabContent")}function T(a,s,r){var i;switch(s){case 0:i="tvshows";break;case 1:i="tvrecommended";break;case 2:i="tvupcoming";break;case 3:i="tvgenres";break;case 4:i="tvstudios";break;case 5:i="episodes"}n(73210)("./".concat(i)).then((function(n){var a,i=n.default;1===s&&(a=e.querySelector(".pageTabContent[data-index='"+s+"']"),C.tabContent=a);var o=E[s];o||(a=e.querySelector(".pageTabContent[data-index='"+s+"']"),o=1===s?C:new i(e,t,a),E[s]=o,o.initTab&&o.initTab()),r(o)}))}function w(e,t){t.NowPlayingItem&&"Video"==t.NowPlayingItem.MediaType&&(P=[],m.getTabsElement().triggerTabChange())}function S(e,t){var n=t;"UserDataChanged"===n.MessageType&&n.Data.UserId==ApiClient.getCurrentUserId()&&(P=[])}function x(e){"search"===e.detail.command&&(e.preventDefault(),v.ZP.navigate("search.html?collectionType=tv&parentId="+t.topParentId))}var C=this,L=parseInt(t.tab||function(e){switch(d.get("landing-"+e)){case"suggestions":return 1;case"upcoming":return 2;case"genres":return 3;case"networks":return 4;case"episodes":return 5;default:return 0}}(t.topParentId));C.initTab=function(){!function(e,t){for(var n,a=t.querySelectorAll(".itemsContainer"),s=0,r=a.length;s<r;s++)n=a[s],p()?(n.classList.add("hiddenScrollX"),i.Z.tv&&n.classList.add("smoothScrollX"),n.classList.add("scrollX"),n.classList.remove("vertical-wrap")):(n.classList.remove("hiddenScrollX"),n.classList.remove("smoothScrollX"),n.classList.remove("scrollX"),n.classList.add("vertical-wrap"))}(0,e.querySelector(".pageTabContent[data-index='1']"))},C.renderTab=function(){var n=e.querySelector(".pageTabContent[data-index='1']");!function(e,t,n){var a=t.topParentId,s=ApiClient.getCurrentUserId();console.debug("loadSuggestionsTab"),function(e,t,n){var a=l.ZP.getWindowSize().innerWidth,s={SortBy:"DatePlayed",SortOrder:"Descending",IncludeItemTypes:"Episode",Filters:"IsResumable",Limit:a>=1920||a>=1600?5:3,Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",CollapseBoxSetItems:!1,ParentId:n,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getItems(t,s).then((function(t){t.Items.length?e.querySelector("#resumableSection").classList.remove("hide"):e.querySelector("#resumableSection").classList.add("hide");var n=!p(),a=e.querySelector("#resumableItems");c.default.buildCards(t.Items,{itemsContainer:a,preferThumb:!0,inheritThumb:!d.useEpisodeImagesInNextUpAndResume(),shape:p()?"overflowBackdrop":"backdrop",scalable:!0,overlayPlayButton:!0,allowBottomPadding:n,cardLayout:!1,showTitle:!0,showYear:!0,centerText:!0}),o.ZP.hide(),h.default.autoFocus(e)}))}(n,s,a),function(e,t,n){var a={userId:t,IncludeItemTypes:"Episode",Limit:30,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",ParentId:n,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb"};ApiClient.getLatestItems(a).then((function(t){var n=e.querySelector("#latestItemsSection"),a=!p(),s=n.querySelector("#latestEpisodesItems");c.default.buildCards(t,{parentContainer:n,itemsContainer:s,items:t,shape:"backdrop",preferThumb:!0,showTitle:!0,showSeriesYear:!0,showParentTitle:!0,overlayText:!1,cardLayout:!1,allowBottomPadding:a,showUnplayedIndicator:!1,showChildCountIndicator:!0,centerText:!0,lazy:!0,overlayPlayButton:!0,lines:2}),o.ZP.hide(),h.default.autoFocus(e)}))}(n,s,a),function(e,t,n){var a={userId:t,Limit:24,Fields:"PrimaryImageAspectRatio,DateCreated,BasicSyncInfo,MediaSourceCount",ParentId:n,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",EnableTotalRecordCount:!1};a.ParentId=r.Z.getTopParentId(),ApiClient.getNextUpEpisodes(a).then((function(t){t.Items.length?e.querySelector(".noNextUpItems").classList.add("hide"):e.querySelector(".noNextUpItems").classList.remove("hide");var n=e.querySelector("#nextUpItemsSection"),a=n.querySelector("#nextUpItems");c.default.buildCards(t.Items,{parentContainer:n,itemsContainer:a,preferThumb:!0,inheritThumb:!d.useEpisodeImagesInNextUpAndResume(),shape:"backdrop",scalable:!0,showTitle:!0,showParentTitle:!0,overlayText:!1,centerText:!0,overlayPlayButton:!0,cardLayout:!1}),o.ZP.hide(),h.default.autoFocus(e)}))}(n,s,a)}(0,t,n)};var E=[],P=[];e.addEventListener("viewshow",(function(){if(m.setTabs(e,L,f,I,g,y),!e.getAttribute("data-title")){var n=t.topParentId;n?ApiClient.getItem(ApiClient.getCurrentUserId(),n).then((function(t){e.setAttribute("data-title",t.Name),r.Z.setTitle(t.Name)})):(e.setAttribute("data-title",b.ZP.translate("Shows")),r.Z.setTitle(b.ZP.translate("Shows")))}a.Events.on(u.O,"playbackstop",w),a.Events.on(ApiClient,"message",S),s.default.on(window,x)})),e.addEventListener("viewbeforehide",(function(){s.default.off(window,x),a.Events.off(u.O,"playbackstop",w),a.Events.off(ApiClient,"message",S)})),e.addEventListener("viewdestroy",(function(){E.forEach((function(e){e.destroy&&e.destroy()}))}))}},87861:function(e,t,n){"use strict";n(32081),n(67752);var a=n(83094),s=n(13800),r=n(47518),i=n(27515),o=n(78695),l=n(1892),d=n.n(l),c=n(95760),u=n.n(c),m=n(38311),b=n.n(m),v=n(58192),h=n.n(v),f=n(38060),p=n.n(f),g=n(54865),y=n.n(g),I=n(1841),T={};T.styleTagTransform=y(),T.setAttributes=h(),T.insert=b().bind(null,"head"),T.domAPI=u(),T.insertStyleElement=p(),d()(I.Z,T),I.Z&&I.Z.locals&&I.Z.locals,n(87201);var w=Object.create(HTMLDivElement.prototype),S="emby-tab-button",x=S+"-active";function C(e){e.classList.add(x)}function L(e,t,n){var a;e.dispatchEvent(new CustomEvent("beforetabchange",{detail:{selectedTabIndex:t,previousIndex:n}})),null!=n&&n!==t&&(a=null)&&a.classList.remove("is-active")}function E(e){var t=this,n=t.querySelector("."+x),s=a.ZP.parentWithClass(e.target,S);if(s&&s!==n){n&&n.classList.remove(x);var r=n?parseInt(n.getAttribute("data-index")):null;C(s);var i=parseInt(s.getAttribute("data-index"));L(t,i,r),setTimeout((function(){t.selectedTabIndex=i,t.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:i,previousIndex:r}}))}),120),t.scroller&&t.scroller.toCenter(s,!1)}}function P(e){var t=a.ZP.parentWithClass(e.target,S);t&&this.scroller&&this.scroller.toCenter(t,!1)}function Z(e){var t=e.target.parentNode.querySelector(".lastFocused");t&&t.classList.remove("lastFocused"),e.target.classList.add("lastFocused")}function k(e){return e.querySelector("."+x)}function q(e,t){for(var n=e[t];n;){if(n.classList.contains(S)&&!n.classList.contains("hide"))return n;n=n[t]}return null}w.createdCallback=function(){this.classList.contains("emby-tabs")||(this.classList.add("emby-tabs"),this.classList.add("focusable"),a.ZP.addEventListener(this,"click",E,{passive:!0}),o.Z.tv&&a.ZP.addEventListener(this,"focusin",P,{passive:!0}),a.ZP.addEventListener(this,"focusout",Z))},w.focus=function(){var e=this.querySelector("."+x),t=this.querySelector(".lastFocused");t?i.Z.focus(t):e?i.Z.focus(e):i.Z.autoFocus(this)},w.refresh=function(){this.scroller&&this.scroller.reload()},w.attachedCallback=function(){!function(e){if(!e.scroller){var t=e.querySelector(".emby-tabs-slider");t?(e.scroller=new s.Z(e,{horizontal:1,itemNav:0,mouseDragging:1,touchDragging:1,slidee:t,smart:!0,releaseSwing:!0,scrollBy:200,speed:120,elasticBounds:1,dragHandle:1,dynamicHandle:1,clickBar:1,hiddenScroll:!0,requireAnimation:!r.Z.safari,allowNativeSmoothScroll:!0}),e.scroller.init()):(e.classList.add("scrollX"),e.classList.add("hiddenScrollX"),e.classList.add("smoothScrollX"))}}(this);var e=this.querySelector("."+x),t=e?parseInt(e.getAttribute("data-index")):parseInt(this.getAttribute("data-index")||"0");if(-1!==t){this.selectedTabIndex=t;var n=this.querySelectorAll("."+S)[t];n&&C(n)}this.readyFired||(this.readyFired=!0,this.dispatchEvent(new CustomEvent("ready",{})))},w.detachedCallback=function(){this.scroller&&(this.scroller.destroy(),this.scroller=null),a.ZP.removeEventListener(this,"click",E,{passive:!0}),o.Z.tv&&a.ZP.removeEventListener(this,"focusin",P,{passive:!0})},w.selectedIndex=function(e,t){var n=this;if(null==e)return n.selectedTabIndex||0;var a=n.selectedIndex();n.selectedTabIndex=e;var s=n.querySelectorAll("."+S);if(a===e||!1===t){L(n,e,a),n.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:e}}));var r=s[a];C(s[e]),a!==e&&r&&r.classList.remove(x)}else E.call(n,{target:s[e]})},w.selectNext=function(){var e=q(k(this),"nextSibling");e&&E.call(this,{target:e})},w.selectPrevious=function(){var e=q(k(this),"previousSibling");e&&E.call(this,{target:e})},w.triggerBeforeTabChange=function(){L(this,this.selectedIndex())},w.triggerTabChange=function(){this.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:this.selectedIndex()}}))},w.setTabEnabled=function(e,t){var n=this.querySelector('.emby-tab-button[data-index="'+e+'"]');t?n.classList.remove("hide"):n.classList.remove("add")},document.registerElement("emby-tabs",{prototype:w,extends:"div"})},1841:function(e,t,n){"use strict";var a=n(54933),s=n.n(a),r=n(93476),i=n.n(r)()(s());i.push([e.id,".emby-tab-button{background:transparent;border-radius:0;box-shadow:none;box-sizing:border-box;cursor:pointer;display:inline-block;-webkit-flex-shrink:0;flex-shrink:0;font-family:inherit;font-size:inherit;font-weight:600;height:auto;line-height:1.25;margin:0;min-width:0;min-width:auto;outline:none;overflow:hidden;padding:1.5em;position:relative;vertical-align:middle;width:auto}.emby-tab-button.show-focus:focus{background:0!important;-webkit-transform:scale(1.3)!important;transform:scale(1.3)!important}.emby-tabs-slider{position:relative}.tabContent:not(.is-active){display:none}",""]),t.Z=i},73210:function(e,t,n){var a={"./episodes":[99639,294,6056,3064],"./episodes.js":[99639,294,6056,3064],"./tvgenres":[99531,9322],"./tvgenres.js":[99531,9322],"./tvrecommended":[94333],"./tvrecommended.html":[26623,8601],"./tvrecommended.js":[94333],"./tvshows":[62216,294,6056,5815],"./tvshows.js":[62216,294,6056,5815],"./tvstudios":[39313,858],"./tvstudios.js":[39313,858],"./tvupcoming":[61479,8541],"./tvupcoming.js":[61479,8541]};function s(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],s=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(s)}))}s.keys=function(){return Object.keys(a)},s.id=73210,e.exports=s}}]);