(function(t){function e(e){for(var i,a,r=e[0],c=e[1],h=e[2],l=0,p=[];l<r.length;l++)a=r[l],o[a]&&p.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,h||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var h=0;h<r.length;h++)e(r[h]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("c21b"),o=n.n(i);o.a},"1ff8":function(t,e,n){"use strict";var i=n("570a"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i,o,s=n("2b0e"),a=(n("c5f6"),n("c93e")),r=Object(a["a"])({},n("9fc0"),n("202b")),c=10,h=27,u={props:{center:{type:Array,default:function(){return[-7.584838,33.561041]}},initialZoom:{type:[Number,String],default:20}},data:function(){return{width:0,height:0,translateX:0,translateY:0,touchStarted:!1,touchLastX:0,touchLastY:0,zoom:+this.initialZoom,scale:1<<+this.initialZoom}},computed:{projection:function(){return r.geoMercator().scale(+this.scale/(2*Math.PI)).translate([this.translateX,this.translateY]).center(this.center)},tiles:function(){return r.tile().size([this.width,this.height]).scale(+this.scale).translate(this.projection([0,0]))()}},watch:{zoom:function(t,e){var n=t-e>0?2:.5;this.scale=1<<t,this.translateY=this.height/2-n*(this.height/2-this.translateY),this.translateX=this.width/2-n*(this.width/2-this.translateX)}},mounted:function(){var t=this.$el.getBoundingClientRect();this.width=t.width,this.height=t.height,this.translateX=this.width/2,this.translateY=this.height/2},methods:{onTouchStart:function(t){this.touchStarted=!0,this.touchLastX=t.clientX,this.touchLastY=t.clientY},onTouchEnd:function(){this.touchStarted=!1},onTouchMove:function(t){this.touchStarted&&(this.translateX=this.translateX+t.clientX-this.touchLastX,this.translateY=this.translateY+t.clientY-this.touchLastY,this.touchLastX=t.clientX,this.touchLastY=t.clientY)},zoomIn:function(){this.zoom=Math.min(this.zoom+1,h)},zoomOut:function(){this.zoom=Math.max(this.zoom-1,c)}},render:function(){var t=this,e=arguments[0];return this.width<=0||this.height<=0?e("div",{class:"map"}):e("div",{class:"map"},[e("div",{class:"map__controls"},[e("button",{class:"map__button",attrs:{disabled:this.zoom>=h},on:{click:this.zoomIn}},["+"]),e("button",{class:"map__button",attrs:{disabled:this.zoom<=c},on:{click:this.zoomOut}},["-"])]),e("svg",{attrs:{viewBox:"0 0 ".concat(this.width," ").concat(this.height)},on:{mousedown:this.onTouchStart,mousemove:this.onTouchMove,mouseup:this.onTouchEnd,mouseleave:this.onTouchEnd}},[e("g",[this.tiles.map(function(n,i){return e("image",{class:"map__tile",key:"".concat(n.x,"_").concat(n.y,"_").concat(n.z,"_").concat(i),attrs:{"xlink:href":"https://a.tile.openstreetmap.org/".concat(n.z,"/").concat(n.x,"/").concat(n.y,".png "),x:(n.x+t.tiles.translate[0])*t.tiles.scale,y:(n.y+t.tiles.translate[1])*t.tiles.scale,width:t.tiles.scale,height:t.tiles.scale}})})])]),e("div",{class:"map__copyright"},["© ",e("a",{attrs:{href:"https://www.openstreetmap.org/copyright",target:"_blank"}},["OpenStreetMap "]),"contributors"])])}},l=u,p=(n("1ff8"),n("2877")),f=Object(p["a"])(l,i,o,!1,null,"de476432",null);f.options.__file="MapViewer.vue";var d,m,v=f.exports,g={name:"app",render:function(){var t=arguments[0];return t(v)}},b=g,w=(n("034f"),Object(p["a"])(b,d,m,!1,null,null,null));w.options.__file="App.vue";var y=w.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(y)}}).$mount("#app")},"570a":function(t,e,n){},c21b:function(t,e,n){}});
//# sourceMappingURL=app.68abc514.js.map