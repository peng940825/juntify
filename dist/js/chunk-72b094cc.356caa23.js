(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72b094cc"],{"159b":function(t,e,c){var n=c("da84"),a=c("fdbc"),r=c("17c2"),i=c("9112");for(var l in a){var o=n[l],u=o&&o.prototype;if(u&&u.forEach!==r)try{i(u,"forEach",r)}catch(s){u.forEach=r}}},"17c2":function(t,e,c){"use strict";var n=c("b727").forEach,a=c("a640"),r=a("forEach");t.exports=r?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,c){var n=c("d039"),a=c("b622"),r=c("2d00"),i=a("species");t.exports=function(t){return r>=51||!n((function(){var e=[],c=e.constructor={};return c[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"5cdc":function(t,e,c){},"65f0":function(t,e,c){var n=c("861d"),a=c("e8b5"),r=c("b622"),i=r("species");t.exports=function(t,e){var c;return a(t)&&(c=t.constructor,"function"!=typeof c||c!==Array&&!a(c.prototype)?n(c)&&(c=c[i],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===e?0:e)}},"6fb5":function(t,e,c){},8418:function(t,e,c){"use strict";var n=c("c04e"),a=c("9bf2"),r=c("5c6c");t.exports=function(t,e,c){var i=n(e);i in t?a.f(t,i,r(0,c)):t[i]=c}},a434:function(t,e,c){"use strict";var n=c("23e7"),a=c("23cb"),r=c("a691"),i=c("50c4"),l=c("7b0b"),o=c("65f0"),u=c("8418"),s=c("1dde"),b=s("splice"),f=Math.max,d=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!b},{splice:function(t,e){var c,n,s,b,O,h,j=l(this),m=i(j.length),y=a(t,m),g=arguments.length;if(0===g?c=n=0:1===g?(c=0,n=m-y):(c=g-2,n=d(f(r(e),0),m-y)),m+c-n>p)throw TypeError(v);for(s=o(j,n),b=0;b<n;b++)O=y+b,O in j&&u(s,b,j[O]);if(s.length=n,c<n){for(b=y;b<m-n;b++)O=b+n,h=b+c,O in j?j[h]=j[O]:delete j[h];for(b=m;b>m-n+c;b--)delete j[b-1]}else if(c>n)for(b=m-n;b>y;b--)O=b+n-1,h=b+c-1,O in j?j[h]=j[O]:delete j[h];for(b=0;b<c;b++)j[b+y]=arguments[b+2];return j.length=m-n+c,s}})},a640:function(t,e,c){"use strict";var n=c("d039");t.exports=function(t,e){var c=[][t];return!!c&&n((function(){c.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,c){var n=c("23e7"),a=c("7b0b"),r=c("df75"),i=c("d039"),l=i((function(){r(1)}));n({target:"Object",stat:!0,forced:l},{keys:function(t){return r(a(t))}})},b727:function(t,e,c){var n=c("0366"),a=c("44ad"),r=c("7b0b"),i=c("50c4"),l=c("65f0"),o=[].push,u=function(t){var e=1==t,c=2==t,u=3==t,s=4==t,b=6==t,f=7==t,d=5==t||b;return function(p,v,O,h){for(var j,m,y=r(p),g=a(y),M=n(v,O,3),P=i(g.length),k=0,H=h||l,w=e?H(p,P):c||f?H(p,0):void 0;P>k;k++)if((d||k in g)&&(j=g[k],m=M(j,k,y),t))if(e)w[k]=m;else if(m)switch(t){case 3:return!0;case 5:return j;case 6:return k;case 2:o.call(w,j)}else switch(t){case 4:return!1;case 7:o.call(w,j)}return b?-1:u||s?s:w}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},e8b5:function(t,e,c){var n=c("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f2cc:function(t,e,c){"use strict";c("6fb5")},f97d:function(t,e,c){"use strict";c.r(e);var n=c("7a23");function a(t,e,c,a,r,i){var l=Object(n["z"])("Menu"),o=Object(n["z"])("router-view"),u=Object(n["z"])("Footer");return Object(n["s"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(l),Object(n["h"])(o),Object(n["h"])(u)],64)}var r=c("cf05"),i=c.n(r),l=Object(n["I"])("data-v-12f43d1b");Object(n["v"])("data-v-12f43d1b");var o={class:"menu"},u={class:"logo"},s=Object(n["h"])("img",{src:i.a},null,-1),b=Object(n["g"])("Juntify"),f=Object(n["h"])("span",null,"訂閱我",-1),d={class:"bi bi-house-door"},p={class:"bi bi-house-door-fill"},v=Object(n["h"])("span",null,"首頁",-1),O=Object(n["h"])("i",{class:"bi bi-plus-square-fill"},null,-1),h=Object(n["h"])("div",{class:"divider"},null,-1),j={class:"playlist"},m=Object(n["h"])("div",{class:"copyright"},[Object(n["h"])("span",null,"圖片版權屬於 Spotify 所有"),Object(n["h"])("span",null,"Copyright © 2021 Juntify")],-1);Object(n["t"])();var y=l((function(t,e,c,a,r,i){var y=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["d"])("div",o,[Object(n["h"])("div",u,[s,Object(n["h"])(y,{to:"/"},{default:l((function(){return[b]})),_:1})]),Object(n["h"])("div",{class:"subscribe subscribe-border",onClick:e[1]||(e[1]=function(){return a.toSubscribePage&&a.toSubscribePage.apply(a,arguments)})},[f]),Object(n["h"])("div",{class:["home",{"home-active":"/"===a.path}],onClick:e[2]||(e[2]=function(){return a.toHomePage&&a.toHomePage.apply(a,arguments)})},[Object(n["H"])(Object(n["h"])("i",d,null,512),[[n["F"],"/"!==a.path]]),Object(n["H"])(Object(n["h"])("i",p,null,512),[[n["F"],"/"===a.path]]),v],2),Object(n["h"])("div",{class:["create-playlist",{"create-playlist-active":a.createPlaylistHover}],onMouseenter:e[4]||(e[4]=function(){return a.handlePlaylistItemHover&&a.handlePlaylistItemHover.apply(a,arguments)}),onMouseleave:e[5]||(e[5]=function(){return a.handlePlaylistItemHover&&a.handlePlaylistItemHover.apply(a,arguments)})},[O,Object(n["h"])("span",{onClick:e[3]||(e[3]=function(){return a.createPlaylist&&a.createPlaylist.apply(a,arguments)})},"建立播放清單")],34),h,Object(n["h"])("div",j,[(Object(n["s"])(!0),Object(n["d"])(n["a"],null,Object(n["y"])(a.playlist,(function(t){return Object(n["s"])(),Object(n["d"])("div",{class:"link-container",key:t.title,onMouseover:function(e){return a.overRow(t)},onMouseleave:function(e){return a.leaveRow(t)}},[Object(n["h"])(y,{to:"/playlist/".concat(t.id),class:{"playlist-active":t.id===parseInt(a.id)||t.isHover}},{default:l((function(){return[Object(n["g"])(Object(n["C"])(t.title),1)]})),_:2},1032,["to","class"]),Object(n["H"])(Object(n["h"])("i",{class:["bi bi-x",{"playlist-active":t.isHover}],onClick:function(e){return a.removePlaylist(t)}},null,10,["onClick"]),[[n["F"],t.isHover]])],40,["onMouseover","onMouseleave"])})),128))]),m])})),g=(c("159b"),c("a434"),c("5502")),M=c("6c02"),P={setup:function(){var t=Object(g["b"])(),e=Object(M["c"])(),c=Object(M["d"])(),a=Object(n["x"])(""),r=Object(n["x"])(!1),i=Object(n["b"])((function(){return e.params.id})),l=Object(n["b"])((function(){return t.getters.localPlaylist})),o=function(){return r.value=!r.value},u=function(){var e=l.value.length+1,n={id:(new Date).getTime()+parseInt(10*Math.random()),title:"我的播放清單 ".concat(e>=10?e:"0".concat(e)),list:[]},a=l.value;a.push(n),t.commit("updateLocalPlaylist",a),localStorage.setItem("localPlaylist",JSON.stringify(a)),c.push({path:"/playlist/".concat(n.id)})},s=function(n){var a=e.path.indexOf(n.id);l.value.forEach((function(t,e){t.id===n.id&&l.value.splice(e,1)})),t.commit("updateLocalPlaylist",l.value),localStorage.setItem("localPlaylist",JSON.stringify(l.value)),a>0&&c.push({path:"/"})};Object(n["G"])((function(){return e.path}),(function(t){return a.value=t})),Object(n["o"])((function(){a.value=e.path;var c=JSON.parse(localStorage.getItem("localPlaylist"));c?t.commit("updateLocalPlaylist",c):localStorage.setItem("localPlaylist",JSON.stringify([]))}));var b=function(t){return t.isHover=!0},f=function(t){return t.isHover=!1},d=function(){return c.push({path:"/"})},p=function(){return c.push({path:"/subscribe"})},v=function(t){return c.push({path:"/playlist/".concat(t)})};return{path:a,toHomePage:d,createPlaylistHover:r,handlePlaylistItemHover:o,playlist:l,createPlaylist:u,toPlaylistPage:v,id:i,overRow:b,leaveRow:f,removePlaylist:s,toSubscribePage:p}}};c("f2cc");P.render=y,P.__scopeId="data-v-12f43d1b";var k=P,H=Object(n["I"])("data-v-b1d534f0");Object(n["v"])("data-v-b1d534f0");var w={class:"footer"},x={class:"left"},C={key:1,class:"content"},I={class:"title"},F={class:"middle"},E={class:"contorl"},S={class:"bi bi-skip-start-fill not-allowed"},B=Object(n["h"])("i",{class:"bi bi-play-fill"},null,-1),T=Object(n["h"])("i",{class:"bi bi-pause-fill"},null,-1),L={class:"bi bi-skip-end-fill not-allowed"},J={class:"time"},A={key:0},N={key:1},_={class:"right"},D={class:"bi bi-volume-mute"};Object(n["t"])();var z=H((function(t,e,c,a,r,i){var l=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["d"])("div",w,[Object(n["h"])("div",x,[a.haveCurrentMusic?(Object(n["s"])(),Object(n["d"])("img",{key:0,src:a.currentMusic.photo},null,8,["src"])):Object(n["e"])("",!0),a.haveCurrentMusic?(Object(n["s"])(),Object(n["d"])("div",C,[Object(n["h"])("span",I,Object(n["C"])(a.currentMusic.title),1),Object(n["h"])(l,{class:"artist",to:"/artist/".concat(a.currentMusic.artist)},{default:H((function(){return[Object(n["g"])(Object(n["C"])(a.currentMusic.artist),1)]})),_:1},8,["to"])])):Object(n["e"])("",!0)]),Object(n["h"])("div",F,[Object(n["h"])("div",E,[Object(n["H"])(Object(n["h"])("i",{class:"bi bi-skip-start-fill",onClick:e[1]||(e[1]=function(t){return a.playPreOrNextMusic("pre")})},null,512),[[n["F"],!a.musicLoading]]),Object(n["H"])(Object(n["h"])("i",S,null,512),[[n["F"],a.musicLoading]]),Object(n["H"])(Object(n["h"])("div",{class:"play",onClick:e[2]||(e[2]=function(){return a.play&&a.play.apply(a,arguments)})},[B],512),[[n["F"],!a.currentMusic.isPlaying]]),Object(n["H"])(Object(n["h"])("div",{class:"play",onClick:e[3]||(e[3]=function(){return a.pause&&a.pause.apply(a,arguments)})},[T],512),[[n["F"],a.currentMusic.isPlaying]]),Object(n["H"])(Object(n["h"])("i",{class:"bi bi-skip-end-fill",onClick:e[4]||(e[4]=function(t){return a.playPreOrNextMusic("next")})},null,512),[[n["F"],!a.musicLoading]]),Object(n["H"])(Object(n["h"])("i",L,null,512),[[n["F"],a.musicLoading]])]),Object(n["h"])("div",J,[a.isDragging?(Object(n["s"])(),Object(n["d"])("span",N,Object(n["C"])(a.secondFormat(a.dragTime)),1)):(Object(n["s"])(),Object(n["d"])("span",A,Object(n["C"])(a.secondFormat(a.currentTime)),1)),Object(n["H"])(Object(n["h"])("input",{type:"range","data-key":"progress-bar","onUpdate:modelValue":e[5]||(e[5]=function(t){return a.progressBarTime=t}),onMousedown:e[6]||(e[6]=function(){return a.progressBarMouseDown&&a.progressBarMouseDown.apply(a,arguments)}),onMouseup:e[7]||(e[7]=function(){return a.progressBarMouseUp&&a.progressBarMouseUp.apply(a,arguments)})},null,544),[[n["E"],a.progressBarTime]]),Object(n["h"])("span",null,Object(n["C"])(a.haveCurrentMusic?a.currentMusic.length:"0:00"),1)])]),Object(n["h"])("div",_,[Object(n["H"])(Object(n["h"])("input",{type:"range","data-key":"volume","onUpdate:modelValue":e[8]||(e[8]=function(t){return a.volume=t})},null,512),[[n["E"],a.volume]]),Object(n["H"])(Object(n["h"])("i",D,null,512),[[n["F"],0==a.volume]]),Object(n["H"])(Object(n["h"])("i",{class:"bi bi-volume-off",onClick:e[9]||(e[9]=function(){return a.mute&&a.mute.apply(a,arguments)})},null,512),[[n["F"],a.volume>0&&a.volume<=33]]),Object(n["H"])(Object(n["h"])("i",{class:"bi bi-volume-down",onClick:e[10]||(e[10]=function(){return a.mute&&a.mute.apply(a,arguments)})},null,512),[[n["F"],a.volume>33&&a.volume<=66]]),Object(n["H"])(Object(n["h"])("i",{class:"bi bi-volume-up",onClick:e[11]||(e[11]=function(){return a.mute&&a.mute.apply(a,arguments)})},null,512),[[n["F"],a.volume>66]])])])})),U=(c("b64b"),{setup:function(){var t=Object(g["b"])(),e=Object(n["x"])(50),c=Object(n["x"])(0),a=Object(n["x"])(0),r=Object(n["x"])(!1),i=Object(n["b"])((function(){return t.getters.currentMusic})),l=Object(n["b"])((function(){return t.getters.currentPlaylist})),o=Object(n["b"])((function(){return t.getters.musicLoading})),u=Object(n["b"])((function(){return Object.keys(i.value).length>0})),s=Object(n["b"])((function(){return t.state.audio?Math.floor(c.value/100*t.state.audio.duration):0})),b=function(){t.state.audio&&(t.dispatch("continue"),t.commit("handleIsPlaying",!0))},f=function(){t.commit("pause"),t.commit("clearInterval"),t.commit("handleIsPlaying",!1)},d=function(){return e.value=0},p=function(t){return t<10?"0:0".concat(t):"0:".concat(t)},v=function(){t.state.audio&&(r.value=!0,t.commit("clearInterval"))},O=function(){if(t.state.audio){a.value=s.value,r.value=!1;var e=Math.floor(c.value/100*t.state.audio.duration);t.dispatch("specifyPlay",e),t.commit("handleIsPlaying",!0)}},h=function(e){if(t.state.audio&&l.value.length>1){t.commit("pause"),t.commit("clearInterval"),t.commit("handleIsPlaying",!1);var c=null;l.value.forEach((function(t,e){t.title===i.value.title&&(c=e)})),"next"===e?c===l.value.length-1?c=0:c++:"pre"===e&&(0===c?c=l.value.length-1:c--),t.commit("setCurrentMusic",l.value[c]),t.dispatch("play",l.value[c].music),t.commit("handleIsPlaying",!0)}};return Object(n["G"])((function(){return t.state.currentTime}),(function(e){a.value=e,c.value=e/Math.floor(t.state.audio.duration)*100})),Object(n["G"])((function(){return e.value}),(function(e){t.commit("updateVolume",e/100),t.state.audio&&t.commit("updateAudioVolume",e/100)})),{volume:e,currentTime:a,currentMusic:i,play:b,pause:f,progressBarTime:c,progressBarMouseDown:v,progressBarMouseUp:O,secondFormat:p,haveCurrentMusic:u,dragTime:s,isDragging:r,playPreOrNextMusic:h,musicLoading:o,mute:d}}});c("f9ee");U.render=z,U.__scopeId="data-v-b1d534f0";var R=U,V={components:{Menu:k,Footer:R}};V.render=a;e["default"]=V},f9ee:function(t,e,c){"use strict";c("5cdc")}}]);
//# sourceMappingURL=chunk-72b094cc.356caa23.js.map