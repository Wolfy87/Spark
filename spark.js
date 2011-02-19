/*
 * Spark JavaScript library v2.3.2
 * http://sparkjs.co.uk/
 * 
 * Copyright 2011, Oliver Caldwell
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://github.com/Wolfy87/Spark
 * 
 * Includes sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Includes json2.js
 * http://www.json.org/json2.js
 */
window.SparkFn=new Object();window.SparkIn=function(){window.$=window.Spark=function(c,e){var b=new Object();if(c!==undefined){if(typeof c=="string"){b=(e)?Sizzle(c,e):Sizzle(c)}else{if(typeof HTMLElement==="object"?c instanceof HTMLElement:typeof c==="object"&&c.nodeType===1&&typeof c.nodeName=="string"){b={0:c}}else{b=c}}}var d=new Object();for(var g in SparkFn){d[g]=SparkFn[g]}d.elements=b;return d};if(window.SparkBk===undefined){window.SparkBk=window.$}for(var a in Spark()){$[a]=Spark[a]=Spark()[a]}};SparkFn.html=function(c,a){var b=null;for(var d in this.elements){if(this.elements.hasOwnProperty(d)){b=this.elements[d];if(c===undefined){return b.innerHTML}else{(!a)?b.innerHTML=c:b.innerHTML+=c}}}return this};SparkFn.text=function(c,a){var b=null;for(var d in this.elements){if(this.elements.hasOwnProperty(d)){b=this.elements[d];if(c===undefined){if(document.all){return b.innerText}else{return b.textContent}}else{if(document.all){(!a)?b.innerText=c:b.innerText+=c}else{(!a)?b.textContent=c:b.textContent+=c}}}}return this};SparkFn.fixEvent=function(d){var b=this.client().browser;if(b=="Explorer"){d.pageX=d.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;d.pageY=d.clientY+document.body.scrollTop+document.documentElement.scrollTop}if(d.target===undefined){d.target=d.srcElement}var c=d.target;if(c.offsetParent&&b=="Firefox"){var a=offsetY=0;do{a+=c.offsetLeft;offsetY+=c.offsetTop}while(c=c.offsetParent);d.offsetX=a;d.offsetY=offsetY}return d};SparkFn.ready=function(b){window.alreadyRunFlag=0;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){alreadyRunFlag=1;b()},false)}else{if(document.all&&!window.opera){document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"><\/script>');var a=document.getElementById("contentloadtag");a.onreadystatechange=function(){if(this.readyState=="complete"){alreadyrunflag=1;b()}}}}window.onload=function(){setTimeout("if(!alreadyRunFlag) callback()",0)}};SparkFn.event=function(c,g){var a=null;var b=null;var f=null;for(var d in this.elements){if(this.elements.hasOwnProperty(d)){a=this.elements[d];b=function(h){if(g(Spark.fixEvent(h))===false){if(h.preventDefault){h.preventDefault()}else{h.returnValue=false}}};f=this.data(a,"Spark.event."+c);this.data(a,"Spark.event."+c,b);if(a.addEventListener){if(f){a.removeEventListener(c,f,false)}a.addEventListener(c,b,false)}else{if(f){a.detachEvent(c,f)}a.attachEvent("on"+c,b)}}}return this};SparkFn.attribute=function(d){var c=null;for(var f in this.elements){if(this.elements.hasOwnProperty(f)){c=this.elements[f];if(d!==undefined){for(var b in d){c[b]=d[b]}}else{return c}}}return this};SparkFn.client=function(){var a={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.os=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(e){for(var b=0;b<e.length;b++){var c=e[b].string;var d=e[b].prop;this.versionSearchString=e[b].versionSearch||e[b].identity;if(c){if(c.indexOf(e[b].subString)!=-1){return e[b].identity}}else{if(d){return e[b].identity}}}},searchVersion:function(c){var b=c.indexOf(this.versionSearchString);if(b==-1){return}return parseFloat(c.substring(b+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};a.init();return a};SparkFn.computed=function(){if(window.getComputedStyle){return window.getComputedStyle(this.elements[0],null)}return this.elements[0].currentStyle};SparkFn.cookie=function(d,f,h){if(f===undefined){var g=d+"=";var a=document.cookie.split(";");for(var e in a){if(a.hasOwnProperty(e)){var j=a[e];while(j.charAt(0)==" "){j=j.substring(1,j.length)}if(j.indexOf(g)==0){return j.substring(g.length,j.length)}}}return false}else{var b=new Date();b.setTime(b.getTime()+((h!==undefined)?h:2628000000));document.cookie=d+"="+f+"; expires="+b.toGMTString()+"; path=/"}};SparkFn.css=function(b){var a=null;var d=null;var i=null;var g=null;for(var f in this.elements){if(this.elements.hasOwnProperty(f)){a=this.elements[f];if(b!==undefined){for(var h in b){if(h.indexOf("-")!==-1){a.style[h.replace(/-([a-z])/gi,function(e,c){return c.toUpperCase()})]=b[h]}else{a.style[h]=b[h]}if(h=="opacity"){a.style.MozOpacity=b[h];a.style.KhtmlOpacity=b[h];a.style.filter="alpha(opacity="+(b[h]*100)+")";a.style.zoom="1"}if(h=="rotation"){g=parseInt(b[h])*(Math.PI*2/360);d=Math.sin(g);i=Math.cos(g);a.style.filter="progid:DXImageTransform.Microsoft.Matrix(M11="+i+", M12=-"+d+",M21="+d+", M22="+i+', sizingMethod="auto expand", Dx=50, Dy=50)';a.style.left="-25px";a.style.top="-25px";a.style.position="relative";a.style.WebkitTransform="rotate("+b[h]+")";a.style.MozTransform="rotate("+b[h]+")";a.style.OTransform="rotate("+b[h]+")";a.style.transform="rotate("+b[h]+")";a.style.zoom="1"}}}else{return a.style}}}return this};SparkFn.data=(function(){var b={};var a=1;return function(e,d,f){var c=e.uniqueID||(e.uniqueID=a++);b[c]||(b[c]={});if(typeof f!="undefined"){b[c][d]=f}else{return b[c][d]}}})();SparkFn.each=function(c){var a=null;for(var b in this.elements){if(this.elements.hasOwnProperty(b)){a=this.elements[b];c(a)}}return this};SparkFn.json=function(b,a){if(b=="encode"){return JSON.stringify(a)}else{if(b=="decode"){return JSON.parse(a)}}};SparkFn.noConflict=function(){var a=Spark;window.$=SparkBk;return a};SparkFn.jsonp=function(a,c,b){a+="?callback="+c;if(b!==undefined){a+="&"+b}this.load(a)};SparkFn.load=function(c){var b=document.getElementsByTagName("head")[0];var a=document.createElement("script");a.type="text/javascript";a.src=c;b.appendChild(a)};SparkFn.stop=function(){var c=null;var f=null;for(var d in this.elements){if(this.elements.hasOwnProperty(d)){c=this.elements[d];if(this.data(c,"Spark.animations")===undefined){this.data(c,"Spark.animations","")}f=this.data(c,"Spark.animations").split(",");for(var b in f){clearTimeout(f[b])}}}return this};SparkFn.transition=function(h,a,g,f){var c=null;var b=null;if(f===undefined){f=new Function()}if(a===undefined){a=600}if(g===undefined){var g=false}if(!this.offset){this.offset=0}for(var d in this.elements){if(this.elements.hasOwnProperty(d)){c=this.elements[d];switch(h){case"slidedown":Spark(c).css({overflow:"hidden",display:"block"});b=Spark(c).attribute().offsetHeight;Spark(c).css({height:0});Spark(c).animate({height:b},a,g,f);break;case"slideup":b=Spark(c).attribute().offsetHeight;Spark(c).css({overflow:"hidden",height:b});Spark(c).animate({height:0},a,g,function(){Spark(c).css({height:b+"px",display:"none"});f()});break;case"fadein":Spark(c).css({display:"block",opacity:0});Spark(c).animate({opacity:1},a,g,f);break;case"fadeout":Spark(c).animate({opacity:0},a,g,function(){Spark(c).css({opacity:1,display:"none"});f()});break;case"sneakin":Spark(c).css({overflow:"hidden",display:"block",opacity:0});b=Spark(c).attribute().offsetHeight;Spark(c).css({height:0});Spark(c).animate({height:b,opacity:1},a,g,f);break;case"sneakout":b=Spark(c).attribute().offsetHeight;Spark(c).css({overflow:"hidden",height:b});Spark(c).animate({height:0,opacity:0},a,g,function(){Spark(c).css({height:b+"px",display:"none"});f()});break}}}this.offset+=a;return this};SparkFn.animate=function(h,a,o,g){var j={inQuad:function(i,e,w,p){return w*(i/=p)*i+e},outQuad:function(i,e,w,p){return -w*(i/=p)*(i-2)+e},inOutQuad:function(i,e,w,p){if((i/=p/2)<1){return w/2*i*i+e}return -w/2*((--i)*(i-2)-1)+e},inCubic:function(i,e,w,p){return w*(i/=p)*i*i+e},outCubic:function(i,e,w,p){return w*((i=i/p-1)*i*i+1)+e},inOutCubic:function(i,e,w,p){if((i/=p/2)<1){return w/2*i*i*i+e}return w/2*((i-=2)*i*i+2)+e},inQuart:function(i,e,w,p){return w*(i/=p)*i*i*i+e},outQuart:function(i,e,w,p){return -w*((i=i/p-1)*i*i*i-1)+e},inOutQuart:function(i,e,w,p){if((i/=p/2)<1){return w/2*i*i*i*i+e}return -w/2*((i-=2)*i*i*i-2)+e},inQuint:function(i,e,w,p){return w*(i/=p)*i*i*i*i+e},outQuint:function(i,e,w,p){return w*((i=i/p-1)*i*i*i*i+1)+e},inOutQuint:function(i,e,w,p){if((i/=p/2)<1){return w/2*i*i*i*i*i+e}return w/2*((i-=2)*i*i*i*i+2)+e},inSine:function(i,e,w,p){return -w*Math.cos(i/p*(Math.PI/2))+w+e},outSine:function(i,e,w,p){return w*Math.sin(i/p*(Math.PI/2))+e},inOutSine:function(i,e,w,p){return -w/2*(Math.cos(Math.PI*i/p)-1)+e},inExpo:function(i,e,w,p){return(i==0)?e:w*Math.pow(2,10*(i/p-1))+e},outExpo:function(i,e,w,p){return(i==p)?e+w:w*(-Math.pow(2,-10*i/p)+1)+e},inOutExpo:function(i,e,w,p){if(i==0){return e}if(i==p){return e+w}if((i/=p/2)<1){return w/2*Math.pow(2,10*(i-1))+e}return w/2*(-Math.pow(2,-10*--i)+2)+e},inCirc:function(i,e,w,p){return -w*(Math.sqrt(1-(i/=p)*i)-1)+e},outCirc:function(i,e,w,p){return w*Math.sqrt(1-(i=i/p-1)*i)+e},inOutCirc:function(i,e,w,p){if((i/=p/2)<1){return -w/2*(Math.sqrt(1-i*i)-1)+e}return w/2*(Math.sqrt(1-(i-=2)*i)+1)+e},inElastic:function(w,e,z,y,i,x){if(w==0){return e}if((w/=y)==1){return e+z}if(!x){x=y*0.3}if(i<Math.abs(z)){i=z;s=x/4}else{i=Math.abs(z);s:x/(2*Math.PI)*Math.asin(z/i)}return -(i*Math.pow(2,10*(w-=1))*Math.sin((w*y-s)*(2*Math.PI)/x))+e},outElastic:function(w,e,A,z,i,y){if(w==0){return e}if((w/=z)==1){return e+A}if(!y){y=z*0.3}if(i<Math.abs(A)){i=A;var x=y/4}else{i=Math.abs(A);var x=y/(2*Math.PI)*Math.asin(A/i)}return i*Math.pow(2,-10*w)*Math.sin((w*z-x)*(2*Math.PI)/y)+A+e},inOutElastic:function(w,e,A,z,i,y){if(w==0){return e}if((w/=z/2)==2){return e+A}if(!y){y=z*(0.3*1.5)}if(i<Math.abs(A)){i=A;var x=y/4}else{i=Math.abs(A);var x=y/(2*Math.PI)*Math.asin(A/i)}if(w<1){return -0.5*(i*Math.pow(2,10*(w-=1))*Math.sin((w*z-x)*(2*Math.PI)/y))+e}return i*Math.pow(2,-10*(w-=1))*Math.sin((w*z-x)*(2*Math.PI)/y)*0.5+A+e},inBack:function(i,e,x,w,p){if(p==undefined){p:1.70158}return x*(i/=w)*i*((p+1)*i-p)+e},outBack:function(i,e,x,w,p){if(p==undefined){p:1.70158}return x*((i=i/w-1)*i*((p+1)*i+p)+1)+e},inOutBack:function(i,e,x,w,p){if(p==undefined){p:1.70158}if((i/=w/2)<1){return x/2*(i*i*(((p*=(1.525))+1)*i-p))+e}return x/2*((i-=2)*i*(((p*=(1.525))+1)*i+p)+2)+e},inBounce:function(i,e,w,p){return w-this.outBounce(p-i,0,w,p)+e},outBounce:function(i,e,w,p){if((i/=p)<(1/2.75)){return w*(7.5625*i*i)+e}else{if(i<(2/2.75)){return w*(7.5625*(i-=(1.5/2.75))*i+0.75)+e}else{if(i<(2.5/2.75)){return w*(7.5625*(i-=(2.25/2.75))*i+0.9375)+e}else{return w*(7.5625*(i-=(2.625/2.75))*i+0.984375)+e}}}},inOutBounce:function(i,e,w,p){if(i<p/2){return this.inBounce(i*2,0,w,p)*0.5+e}return this.outBounce(i*2-p,0,w,p)*0.5+w*0.5+e}};if(!a){var a=600}if(!o){var o="outQuad"}if(!this.offset){this.offset=0}var f=60;var d=null;var q=null;var u=null;var l=null;var k=null;var m=null;var b=null;var v=null;var c=null;for(var t in this.elements){if(this.elements.hasOwnProperty(t)){c=this.elements[t];for(var n in h){if(c.style[n]===undefined||c.style[n]===""){d=Spark(c).computed()[n];c.style[n]=(d)?d:1}if(c.style[n]=="auto"&&n=="height"){c.style[n]=c.offsetHeight}else{if(c.style[n]=="auto"&&n=="width"){c.style[n]=c.offsetWidth}}q=(n=="opacity")?parseFloat(c.style[n]):parseInt(c.style[n]);u=((n=="opacity")?parseFloat(h[n]):parseInt(h[n]))-q;l=a/(1000/f);m=(isNaN(h[n]))?h[n].replace(/[0-9]/g,""):"px";if(n=="opacity"){m=""}this.data(c,"Spark.animations","START");v=new Object();for(var r=0;r<=l;r++){b=j[o](r,q,u,l)+m;this.data(c,"Spark.animations",this.data(c,"Spark.animations")+","+setTimeout((function(e,i,p,w){return function(){v[p]=w;Spark(i).css(v)}})(r,c,n,b),r*(1000/f)+this.offset,c,n,b))}this.data(c,"Spark.animations",this.data(c,"Spark.animations")+","+setTimeout((function(p,w,i,e){return function(){v[w]=h[w];Spark(p).css(v)}})(c,n,h,m),a+this.offset,c,n,h,m));this.data(c,"Spark.animations",this.data(c,"Spark.animations").replace("START,",""))}}}if(g){setTimeout(g,a)}this.offset+=a;return this};SparkFn.ajax=function(e,b,c,d){var a=(typeof XMLHttpRequest=="undefined")?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest;e=e.toUpperCase();if(e=="GET"&&c){b+="?"+c}if(d){a.onreadystatechange=function(){if(a.readyState==4){if(a.status==200){d(a.responseText)}else{d(false)}}}}a.open(e,b,(d)?true:false);if(e=="POST"){a.setRequestHeader("Content-type","application/x-www-form-urlencoded");a.send((c)?c:null)}else{a.send(null)}if(!d){if(a.status==200){return a.responseText}else{return false}}};SparkFn.classes=function(f,a){var c=null;for(var d in this.elements){if(this.elements.hasOwnProperty(d)){c=this.elements[d];switch(f){case"has":return new RegExp("\\b"+a+"\\b").test(c.className);break;case"add":if(!this.classes("has",a)){c.className+=(c.className)?" "+a:a}break;case"remove":var b=(c.className.match(" "+a))?" "+a:a;c.className=c.className.replace(b,"");break}}}return this};SparkFn.add=function(b,c,d){var a=document.createElement(b);if(c){Spark(a).attribute(c)}if(d){Spark(a).css(d)}for(var f in this.elements){if(this.elements.hasOwnProperty(f)){this.elements[f].appendChild(a)}}return this};(function(){var q=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,j=0,d=Object.prototype.toString,p=false,i=true;[0,0].sort(function(){i=false;return 0});var b=function(x,e,A,B){A=A||[];e=e||document;var D=e;if(e.nodeType!==1&&e.nodeType!==9){return[]}if(!x||typeof x!=="string"){return A}var u,F,I,t,E,H,G,z,w=true,v=b.isXML(e),y=[],C=x;do{q.exec("");u=q.exec(C);if(u){C=u[3];y.push(u[1]);if(u[2]){t=u[3];break}}}while(u);if(y.length>1&&k.exec(x)){if(y.length===2&&f.relative[y[0]]){F=h(y[0]+y[1],e)}else{F=f.relative[y[0]]?[e]:b(y.shift(),e);while(y.length){x=y.shift();if(f.relative[x]){x+=y.shift()}F=h(x,F)}}}else{if(!B&&y.length>1&&e.nodeType===9&&!v&&f.match.ID.test(y[0])&&!f.match.ID.test(y[y.length-1])){E=b.find(y.shift(),e,v);e=E.expr?b.filter(E.expr,E.set)[0]:E.set[0]}if(e){E=B?{expr:y.pop(),set:a(B)}:b.find(y.pop(),y.length===1&&(y[0]==="~"||y[0]==="+")&&e.parentNode?e.parentNode:e,v);F=E.expr?b.filter(E.expr,E.set):E.set;if(y.length>0){I=a(F)}else{w=false}while(y.length){H=y.pop();G=H;if(!f.relative[H]){H=""}else{G=y.pop()}if(G==null){G=e}f.relative[H](I,G,v)}}else{I=y=[]}}if(!I){I=F}if(!I){b.error(H||x)}if(d.call(I)==="[object Array]"){if(!w){A.push.apply(A,I)}else{if(e&&e.nodeType===1){for(z=0;I[z]!=null;z++){if(I[z]&&(I[z]===true||I[z].nodeType===1&&b.contains(e,I[z]))){A.push(F[z])}}}else{for(z=0;I[z]!=null;z++){if(I[z]&&I[z].nodeType===1){A.push(F[z])}}}}}else{a(I,A)}if(t){b(t,D,A,B);b.uniqueSort(A)}return A};b.uniqueSort=function(t){if(c){p=i;t.sort(c);if(p){for(var e=1;e<t.length;e++){if(t[e]===t[e-1]){t.splice(e--,1)}}}}return t};b.matches=function(e,t){return b(e,null,null,t)};b.matchesSelector=function(e,t){return b(t,null,null,[e]).length>0};b.find=function(z,e,A){var y;if(!z){return[]}for(var v=0,u=f.order.length;v<u;v++){var w,x=f.order[v];if((w=f.leftMatch[x].exec(z))){var t=w[1];w.splice(1,1);if(t.substr(t.length-1)!=="\\"){w[1]=(w[1]||"").replace(/\\/g,"");y=f.find[x](w,e,A);if(y!=null){z=z.replace(f.match[x],"");break}}}}if(!y){y=typeof e.getElementsByTagName!=="undefined"?e.getElementsByTagName("*"):[]}return{set:y,expr:z}};b.filter=function(D,C,G,w){var y,e,u=D,I=[],A=C,z=C&&C[0]&&b.isXML(C[0]);while(D&&C.length){for(var B in f.filter){if((y=f.leftMatch[B].exec(D))!=null&&y[2]){var H,F,t=f.filter[B],v=y[1];e=false;y.splice(1,1);if(v.substr(v.length-1)==="\\"){continue}if(A===I){I=[]}if(f.preFilter[B]){y=f.preFilter[B](y,A,G,I,w,z);if(!y){e=H=true}else{if(y===true){continue}}}if(y){for(var x=0;(F=A[x])!=null;x++){if(F){H=t(F,y,x,A);var E=w^!!H;if(G&&H!=null){if(E){e=true}else{A[x]=false}}else{if(E){I.push(F);e=true}}}}}if(H!==undefined){if(!G){A=I}D=D.replace(f.match[B],"");if(!e){return[]}break}}}if(D===u){if(e==null){b.error(D)}else{break}}u=D}return A};b.error=function(e){throw"Syntax error, unrecognized expression: "+e};var f=b.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")}},relative:{"+":function(y,t){var v=typeof t==="string",x=v&&!/\W/.test(t),z=v&&!x;if(x){t=t.toLowerCase()}for(var u=0,e=y.length,w;u<e;u++){if((w=y[u])){while((w=w.previousSibling)&&w.nodeType!==1){}y[u]=z||w&&w.nodeName.toLowerCase()===t?w||false:w===t}}if(z){b.filter(t,y,true)}},">":function(y,t){var x,w=typeof t==="string",u=0,e=y.length;if(w&&!/\W/.test(t)){t=t.toLowerCase();for(;u<e;u++){x=y[u];if(x){var v=x.parentNode;y[u]=v.nodeName.toLowerCase()===t?v:false}}}else{for(;u<e;u++){x=y[u];if(x){y[u]=w?x.parentNode:x.parentNode===t}}if(w){b.filter(t,y,true)}}},"":function(v,t,x){var w,u=j++,e=r;if(typeof t==="string"&&!/\W/.test(t)){t=t.toLowerCase();w=t;e=o}e("parentNode",t,u,v,w,x)},"~":function(v,t,x){var w,u=j++,e=r;if(typeof t==="string"&&!/\W/.test(t)){t=t.toLowerCase();w=t;e=o}e("previousSibling",t,u,v,w,x)}},find:{ID:function(t,u,v){if(typeof u.getElementById!=="undefined"&&!v){var e=u.getElementById(t[1]);return e&&e.parentNode?[e]:[]}},NAME:function(u,x){if(typeof x.getElementsByName!=="undefined"){var t=[],w=x.getElementsByName(u[1]);for(var v=0,e=w.length;v<e;v++){if(w[v].getAttribute("name")===u[1]){t.push(w[v])}}return t.length===0?null:t}},TAG:function(e,t){if(typeof t.getElementsByTagName!=="undefined"){return t.getElementsByTagName(e[1])}}},preFilter:{CLASS:function(v,t,u,e,y,z){v=" "+v[1].replace(/\\/g,"")+" ";if(z){return v}for(var w=0,x;(x=t[w])!=null;w++){if(x){if(y^(x.className&&(" "+x.className+" ").replace(/[\t\n\r]/g," ").indexOf(v)>=0)){if(!u){e.push(x)}}else{if(u){t[w]=false}}}}return false},ID:function(e){return e[1].replace(/\\/g,"")},TAG:function(t,e){return t[1].toLowerCase()},CHILD:function(e){if(e[1]==="nth"){if(!e[2]){b.error(e[0])}e[2]=e[2].replace(/^\+|\s*/g,"");var t=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2]==="even"&&"2n"||e[2]==="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=(t[1]+(t[2]||1))-0;e[3]=t[3]-0}else{if(e[2]){b.error(e[0])}}e[0]=j++;return e},ATTR:function(w,t,u,e,x,y){var v=w[1]=w[1].replace(/\\/g,"");if(!y&&f.attrMap[v]){w[1]=f.attrMap[v]}w[4]=(w[4]||w[5]||"").replace(/\\/g,"");if(w[2]==="~="){w[4]=" "+w[4]+" "}return w},PSEUDO:function(w,t,u,e,x){if(w[1]==="not"){if((q.exec(w[3])||"").length>1||/^\w/.test(w[3])){w[3]=b(w[3],null,null,t)}else{var v=b.filter(w[3],t,u,true^x);if(!u){e.push.apply(e,v)}return false}}else{if(f.match.POS.test(w[0])||f.match.CHILD.test(w[0])){return true}}return w},POS:function(e){e.unshift(true);return e}},filters:{enabled:function(e){return e.disabled===false&&e.type!=="hidden"},disabled:function(e){return e.disabled===true},checked:function(e){return e.checked===true},selected:function(e){e.parentNode.selectedIndex;return e.selected===true},parent:function(e){return !!e.firstChild},empty:function(e){return !e.firstChild},has:function(u,t,e){return !!b(e[3],u).length},header:function(e){return(/h\d/i).test(e.nodeName)},text:function(e){return"text"===e.type},radio:function(e){return"radio"===e.type},checkbox:function(e){return"checkbox"===e.type},file:function(e){return"file"===e.type},password:function(e){return"password"===e.type},submit:function(e){return"submit"===e.type},image:function(e){return"image"===e.type},reset:function(e){return"reset"===e.type},button:function(e){return"button"===e.type||e.nodeName.toLowerCase()==="button"},input:function(e){return(/input|select|textarea|button/i).test(e.nodeName)}},setFilters:{first:function(t,e){return e===0},last:function(u,t,e,v){return t===v.length-1},even:function(t,e){return e%2===0},odd:function(t,e){return e%2===1},lt:function(u,t,e){return t<e[3]-0},gt:function(u,t,e){return t>e[3]-0},nth:function(u,t,e){return e[3]-0===t},eq:function(u,t,e){return e[3]-0===t}},filter:{PSEUDO:function(u,z,y,A){var e=z[1],t=f.filters[e];if(t){return t(u,y,z,A)}else{if(e==="contains"){return(u.textContent||u.innerText||b.getText([u])||"").indexOf(z[3])>=0}else{if(e==="not"){var v=z[3];for(var x=0,w=v.length;x<w;x++){if(v[x]===u){return false}}return true}else{b.error(e)}}}},CHILD:function(e,v){var y=v[1],t=e;switch(y){case"only":case"first":while((t=t.previousSibling)){if(t.nodeType===1){return false}}if(y==="first"){return true}t=e;case"last":while((t=t.nextSibling)){if(t.nodeType===1){return false}}return true;case"nth":var u=v[2],B=v[3];if(u===1&&B===0){return true}var x=v[0],A=e.parentNode;if(A&&(A.sizcache!==x||!e.nodeIndex)){var w=0;for(t=A.firstChild;t;t=t.nextSibling){if(t.nodeType===1){t.nodeIndex=++w}}A.sizcache=x}var z=e.nodeIndex-B;if(u===0){return z===0}else{return(z%u===0&&z/u>=0)}}},ID:function(t,e){return t.nodeType===1&&t.getAttribute("id")===e},TAG:function(t,e){return(e==="*"&&t.nodeType===1)||t.nodeName.toLowerCase()===e},CLASS:function(t,e){return(" "+(t.className||t.getAttribute("class"))+" ").indexOf(e)>-1},ATTR:function(x,v){var u=v[1],e=f.attrHandle[u]?f.attrHandle[u](x):x[u]!=null?x[u]:x.getAttribute(u),y=e+"",w=v[2],t=v[4];return e==null?w==="!=":w==="="?y===t:w==="*="?y.indexOf(t)>=0:w==="~="?(" "+y+" ").indexOf(t)>=0:!t?y&&e!==false:w==="!="?y!==t:w==="^="?y.indexOf(t)===0:w==="$="?y.substr(y.length-t.length)===t:w==="|="?y===t||y.substr(0,t.length+1)===t+"-":false},POS:function(w,t,u,x){var e=t[2],v=f.setFilters[e];if(v){return v(w,u,t,x)}}}};var k=f.match.POS,g=function(t,e){return"\\"+(e-0+1)};for(var n in f.match){f.match[n]=new RegExp(f.match[n].source+(/(?![^\[]*\])(?![^\(]*\))/.source));f.leftMatch[n]=new RegExp(/(^(?:.|\r|\n)*?)/.source+f.match[n].source.replace(/\\(\d+)/g,g))}var a=function(t,e){t=Array.prototype.slice.call(t,0);if(e){e.push.apply(e,t);return e}return t};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType}catch(l){a=function(w,v){var u=0,t=v||[];if(d.call(w)==="[object Array]"){Array.prototype.push.apply(t,w)}else{if(typeof w.length==="number"){for(var e=w.length;u<e;u++){t.push(w[u])}}else{for(;w[u];u++){t.push(w[u])}}}return t}}var c,m;if(document.documentElement.compareDocumentPosition){c=function(t,e){if(t===e){p=true;return 0}if(!t.compareDocumentPosition||!e.compareDocumentPosition){return t.compareDocumentPosition?-1:1}return t.compareDocumentPosition(e)&4?-1:1}}else{c=function(A,z){var x,t,u=[],e=[],w=A.parentNode,y=z.parentNode,B=w;if(A===z){p=true;return 0}else{if(w===y){return m(A,z)}else{if(!w){return -1}else{if(!y){return 1}}}}while(B){u.unshift(B);B=B.parentNode}B=y;while(B){e.unshift(B);B=B.parentNode}x=u.length;t=e.length;for(var v=0;v<x&&v<t;v++){if(u[v]!==e[v]){return m(u[v],e[v])}}return v===x?m(A,e[v],-1):m(u[v],z,1)};m=function(t,e,u){if(t===e){return u}var v=t.nextSibling;while(v){if(v===e){return -1}v=v.nextSibling}return 1}}b.getText=function(e){var t="",v;for(var u=0;e[u];u++){v=e[u];if(v.nodeType===3||v.nodeType===4){t+=v.nodeValue}else{if(v.nodeType!==8){t+=b.getText(v.childNodes)}}}return t};(function(){var t=document.createElement("div"),u="script"+(new Date()).getTime(),e=document.documentElement;t.innerHTML="<a name='"+u+"'/>";e.insertBefore(t,e.firstChild);if(document.getElementById(u)){f.find.ID=function(w,x,y){if(typeof x.getElementById!=="undefined"&&!y){var v=x.getElementById(w[1]);return v?v.id===w[1]||typeof v.getAttributeNode!=="undefined"&&v.getAttributeNode("id").nodeValue===w[1]?[v]:undefined:[]}};f.filter.ID=function(x,v){var w=typeof x.getAttributeNode!=="undefined"&&x.getAttributeNode("id");return x.nodeType===1&&w&&w.nodeValue===v}}e.removeChild(t);e=t=null})();(function(){var e=document.createElement("div");e.appendChild(document.createComment(""));if(e.getElementsByTagName("*").length>0){f.find.TAG=function(t,x){var w=x.getElementsByTagName(t[1]);if(t[1]==="*"){var v=[];for(var u=0;w[u];u++){if(w[u].nodeType===1){v.push(w[u])}}w=v}return w}}e.innerHTML="<a href='#'></a>";if(e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"){f.attrHandle.href=function(t){return t.getAttribute("href",2)}}e=null})();if(document.querySelectorAll){(function(){var e=b,v=document.createElement("div"),u="__sizzle__";v.innerHTML="<p class='TEST'></p>";if(v.querySelectorAll&&v.querySelectorAll(".TEST").length===0){return}b=function(F,x,A,E){x=x||document;if(!E&&!b.isXML(x)){var D=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(F);if(D&&(x.nodeType===1||x.nodeType===9)){if(D[1]){return a(x.getElementsByTagName(F),A)}else{if(D[2]&&f.find.CLASS&&x.getElementsByClassName){return a(x.getElementsByClassName(D[2]),A)}}}if(x.nodeType===9){if(F==="body"&&x.body){return a([x.body],A)}else{if(D&&D[3]){var z=x.getElementById(D[3]);if(z&&z.parentNode){if(z.id===D[3]){return a([z],A)}}else{return a([],A)}}}try{return a(x.querySelectorAll(F),A)}catch(B){}}else{if(x.nodeType===1&&x.nodeName.toLowerCase()!=="object"){var y=x.getAttribute("id"),w=y||u,H=x.parentNode,G=/^\s*[+~]/.test(F);if(!y){x.setAttribute("id",w)}else{w=w.replace(/'/g,"\\$&")}if(G&&H){x=x.parentNode}try{if(!G||H){return a(x.querySelectorAll("[id='"+w+"'] "+F),A)}}catch(C){}finally{if(!y){x.removeAttribute("id")}}}}}return e(F,x,A,E)};for(var t in e){b[t]=e[t]}v=null})()}(function(){var e=document.documentElement,u=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector,t=false;try{u.call(document.documentElement,"[test!='']:sizzle")}catch(v){t=true}if(u){b.matchesSelector=function(w,y){y=y.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!b.isXML(w)){try{if(t||!f.match.PSEUDO.test(y)&&!/!=/.test(y)){return u.call(w,y)}}catch(x){}}return b(y,null,null,[w]).length>0}}})();(function(){var e=document.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>";if(!e.getElementsByClassName||e.getElementsByClassName("e").length===0){return}e.lastChild.className="e";if(e.getElementsByClassName("e").length===1){return}f.order.splice(1,0,"CLASS");f.find.CLASS=function(t,u,v){if(typeof u.getElementsByClassName!=="undefined"&&!v){return u.getElementsByClassName(t[1])}};e=null})();function o(t,y,x,B,z,A){for(var v=0,u=B.length;v<u;v++){var e=B[v];if(e){var w=false;e=e[t];while(e){if(e.sizcache===x){w=B[e.sizset];break}if(e.nodeType===1&&!A){e.sizcache=x;e.sizset=v}if(e.nodeName.toLowerCase()===y){w=e;break}e=e[t]}B[v]=w}}}function r(t,y,x,B,z,A){for(var v=0,u=B.length;v<u;v++){var e=B[v];if(e){var w=false;e=e[t];while(e){if(e.sizcache===x){w=B[e.sizset];break}if(e.nodeType===1){if(!A){e.sizcache=x;e.sizset=v}if(typeof y!=="string"){if(e===y){w=true;break}}else{if(b.filter(y,[e]).length>0){w=e;break}}}e=e[t]}B[v]=w}}}if(document.documentElement.contains){b.contains=function(t,e){return t!==e&&(t.contains?t.contains(e):true)}}else{if(document.documentElement.compareDocumentPosition){b.contains=function(t,e){return !!(t.compareDocumentPosition(e)&16)}}else{b.contains=function(){return false}}}b.isXML=function(e){var t=(e?e.ownerDocument||e:0).documentElement;return t?t.nodeName!=="HTML":false};var h=function(e,z){var x,v=[],w="",u=z.nodeType?[z]:z;while((x=f.match.PSEUDO.exec(e))){w+=x[0];e=e.replace(f.match.PSEUDO,"")}e=f.relative[e]?e+"*":e;for(var y=0,t=u.length;y<t;y++){b(e,u[y],v)}return b.filter(w,v)};window.Sizzle=b})();var JSON;if(!JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());SparkIn();