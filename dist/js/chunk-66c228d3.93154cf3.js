(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66c228d3"],{"01e6":function(e,a,t){"use strict";t("45a7")},"159b":function(e,a,t){var c=t("da84"),o=t("fdbc"),n=t("17c2"),s=t("9112");for(var i in o){var r=c[i],d=r&&r.prototype;if(d&&d.forEach!==n)try{s(d,"forEach",n)}catch(l){d.forEach=n}}},"17c2":function(e,a,t){"use strict";var c=t("b727").forEach,o=t("a640"),n=o("forEach");e.exports=n?[].forEach:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}},"45a7":function(e,a,t){},"65f0":function(e,a,t){var c=t("861d"),o=t("e8b5"),n=t("b622"),s=n("species");e.exports=function(e,a){var t;return o(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!o(t.prototype)?c(t)&&(t=t[s],null===t&&(t=void 0)):t=void 0),new(void 0===t?Array:t)(0===a?0:a)}},a640:function(e,a,t){"use strict";var c=t("d039");e.exports=function(e,a){var t=[][e];return!!t&&c((function(){t.call(null,a||function(){throw 1},1)}))}},b727:function(e,a,t){var c=t("0366"),o=t("44ad"),n=t("7b0b"),s=t("50c4"),i=t("65f0"),r=[].push,d=function(e){var a=1==e,t=2==e,d=3==e,l=4==e,f=6==e,b=7==e,u=5==e||f;return function(p,g,m,j){for(var v,E,h=n(p),O=o(h),y=c(g,m,3),A=s(O.length),k=0,w=j||i,F=a?w(p,A):t||b?w(p,0):void 0;A>k;k++)if((u||k in O)&&(v=O[k],E=y(v,k,h),e))if(a)F[k]=E;else if(E)switch(e){case 3:return!0;case 5:return v;case 6:return k;case 2:r.call(F,v)}else switch(e){case 4:return!1;case 7:r.call(F,v)}return f?-1:d||l?l:F}};e.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6),filterOut:d(7)}},bb51:function(e,a,t){"use strict";t.r(a);var c=t("7a23"),o=Object(c["I"])("data-v-5dc37d51");Object(c["v"])("data-v-5dc37d51");var n={class:"j-home"},s={class:"page-control"},i=Object(c["h"])("i",{class:"bi bi-chevron-left"},null,-1),r=Object(c["h"])("i",{class:"bi bi-chevron-right"},null,-1),d={class:"video-container"},l={ref:"video",src:"https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E6%89%8B%E7%89%BD%E6%89%8B.mp4?alt=media&token=e4b93003-26ba-4d59-a3ea-e0ff56eee22a",controls:""},f={class:"row"},b={class:"j-theme"},u={class:"row"};Object(c["t"])();var p=o((function(e,a,t,o,p,g){var m=Object(c["z"])("ImageMosaic");return Object(c["s"])(),Object(c["d"])("div",n,[Object(c["h"])("div",s,[Object(c["h"])("div",{class:"pre",onClick:a[1]||(a[1]=function(){return o.prePage&&o.prePage.apply(o,arguments)})},[i]),Object(c["h"])("div",{class:"next",onClick:a[2]||(a[2]=function(){return o.nextPage&&o.nextPage.apply(o,arguments)})},[r])]),Object(c["h"])("div",d,[Object(c["h"])("video",l,null,512)]),Object(c["h"])("div",f,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(o.data,(function(e){return Object(c["s"])(),Object(c["d"])("div",{class:"theme-container col-xxl-6",key:e.theme},[Object(c["h"])("div",b,Object(c["C"])(e.theme),1),Object(c["h"])("div",u,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.artists,(function(e){return Object(c["s"])(),Object(c["d"])("div",{class:"col-lg-3 col-md-4 col-sm-6",key:e.artist},[Object(c["h"])("div",{class:"j-card",onClick:function(a){return o.toArtistPage(e.artist)}},[Object(c["h"])("img",{src:e.list[0].photo,onLoad:a[3]||(a[3]=function(){return o.handleloadedNum&&o.handleloadedNum.apply(o,arguments)})},null,40,["src"]),Object(c["h"])("span",null,Object(c["C"])(e.artist),1)],8,["onClick"])])})),128))])])})),128))]),Object(c["h"])(m)])})),g=(t("159b"),t("5502")),m=t("6c02"),j=Object(c["I"])("data-v-5644858a");Object(c["v"])("data-v-5644858a");var v={class:"image-mosaic"},E=Object(c["h"])("span",null,"本週新 Jun 榜歌手",-1),h=Object(c["h"])("div",{class:"mask"},null,-1);Object(c["t"])();var O=j((function(e,a,t,o,n,s){return Object(c["s"])(),Object(c["d"])("div",v,[E,(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(o.mosaicList,(function(e){return Object(c["s"])(),Object(c["d"])("div",{key:e.image,class:e.class,style:"background-image: url(".concat(e.image,")")},[h],6)})),128))])})),y={setup:function(){var e=[{class:"card card-tall card-wide",image:"https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FMAMAMOO.jpg?alt=media&token=f44d1046-fa4d-4317-9e14-05e32014524e"},{class:"card card-tall",image:"https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2F%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%AB.jpg?alt=media&token=d6f98300-0e7a-4548-91f9-5e6387db79f5"},{class:"card",image:"https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2F%E5%91%A8%E8%88%88%E5%93%B2.jpg?alt=media&token=44812c79-c807-4fad-8966-5b30cbc2b3b0"},{class:"card",image:"https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2F%E9%AB%98%E7%88%BE%E5%AE%A3.jpg?alt=media&token=8e90f800-0292-450c-8309-2541132902b8"},{class:"card",image:"https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FGD.png?alt=media&token=5e3bdb44-c4d6-4328-b6c6-91cccd2427c6"},{class:"card",image:"https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FLiSA.jpg?alt=media&token=80a2a577-02f6-4d0a-aa3e-6a10f4eb54d2"},{class:"card card-wide",image:"https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FONE%20OK%20ROCK.jpg?alt=media&token=ba1a9c19-6d97-4dda-9bc8-bc842524c85b"},{class:"card card-wide",image:"https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FSISTAR.png?alt=media&token=612006f3-a429-494e-a190-3ac152556410"},{class:"card",image:"https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2F%E9%98%BF%E5%A4%9C.jpg?alt=media&token=43a4b3e0-9744-48e3-b54b-fda71bd82e6d"},{class:"card card-tall",image:"https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FCamila%20Cabello.jpg?alt=media&token=6320f6ed-698f-4e58-9cd8-ef71084d2b7f"},{class:"card card-tall card-wide",image:"https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FBLACKPINK.jpg?alt=media&token=293739a7-f094-4f20-9ac4-0d8f746e361e"},{class:"card",image:"https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FDaddy%20Yankee.jpg?alt=media&token=c3b1c8d7-2b92-4a15-bfc9-9041d90de96b"},{class:"card",image:"https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FMachine%20Gun%20Kelly.jpg?alt=media&token=79c6d1c3-ac7c-4c3d-b2d7-69f505ad6924"},{class:"card",image:"https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FJulia.jpg?alt=media&token=a6f5c812-f66e-4ed0-a6b6-0535f0a3b9a5"}];return{mosaicList:e}}};t("01e6");y.render=O,y.__scopeId="data-v-5644858a";var A=y,k={components:{ImageMosaic:A},setup:function(){var e=Object(g["b"])(),a=Object(m["d"])(),t=Object(c["x"])(0),o=Object(c["x"])(null),n=Object(c["b"])((function(){return e.getters.data})),s=Object(c["b"])((function(){var e=0;return n.value.forEach((function(a){return e+=a.artists.length})),e})),i=function(){return t.value++},r=function(e){return a.push({path:"/artist/".concat(e)})},d=function(){return a.go(-1)},l=function(){return a.go(1)};return Object(c["G"])((function(){return t.value}),(function(a){a===s.value+1&&e.commit("handleImageLoading",!1)})),Object(c["o"])((function(){document.title="Juntify",e.commit("handleImageLoading",!0)})),Object(c["q"])((function(){o.value.addEventListener("canplay",(function(){return t.value++}))})),{data:n,video:o,handleloadedNum:i,toArtistPage:r,prePage:d,nextPage:l}}};t("df78");k.render=p,k.__scopeId="data-v-5dc37d51";a["default"]=k},debb:function(e,a,t){},df78:function(e,a,t){"use strict";t("debb")},e8b5:function(e,a,t){var c=t("c6b6");e.exports=Array.isArray||function(e){return"Array"==c(e)}}}]);
//# sourceMappingURL=chunk-66c228d3.93154cf3.js.map