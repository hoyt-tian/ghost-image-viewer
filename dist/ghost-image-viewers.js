!function(t,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define([],o);else{var n=o();for(var e in n)("object"==typeof exports?exports:t)[e]=n[e]}}(this,function(){return function(t){function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var n={};return o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},o.p="",o(o.s=0)}([function(t,o){!function(t,o){var n=function(t,o){this.construct(t||".content[role=main] img",o||document.body)};n.prototype.toolbar=function(t){return{component:o("<section/>").css({left:0,top:0,color:"#FFF",height:"10%"}).append(o("<button>放大</button>").click(function(o){t.css("height",parseInt(t.css("height"))+20+"px"),o.stopPropagation()}).css({cursor:"pointer",verticalAlign:"middle"})).append(o("<button>缩小</button>").click(function(o){var n=parseInt(t.css("height"))-20;t.css("height",(n<40?40:n)+"px"),o.stopPropagation()}).css({cursor:"pointer",verticalAlign:"middle"})).append(o("<button>退出</buton>").css({cursor:"pointer",verticalAlign:"middle"}))}},n.prototype.canvas=function(){var t=o("<img />");return{component:o("<section />").append(t).css({height:"90%",verticalAlign:"middle",overflow:"auto"}),img:t}},n.prototype.construct=function(t,e){var r=this.canvas(),i=this.toolbar(r.img),c=o("<section />").css(n.prototype.maskCSS||{position:"fixed",left:0,top:0,backgroundColor:"#000",textAlign:"center",width:"100%",height:"100%",zIndex:999,display:"none"}).click(function(t){t.target!=r.img[0]&&(c.hide(),document.scrollingElement.style.overflow="auto")});c.append(i.component).append(r.component),this.mountTo(e,c),this.queryAll(t).css("cursor","pointer").click(function(t){r.img.attr("src",this.src),document.scrollingElement.style.overflow="hidden",c.show()})},n.prototype.mountTo=function(t,n){o(t).append(n)},n.prototype.queryAll=function(t){return o(t)};new n(".content[role=main] img",document.body)}(window,jQuery)}])});