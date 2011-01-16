/*
 * Spark JavaScript library v1.4.0
 * http://sparkjs.co.uk/
 * 
 * Copyright 2010, Oliver Caldwell
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://github.com/Wolfy87/Spark
 * 
 * Includes sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 * 
 * Includes json2.js
 * http://www.json.org/json2.js
 */
window.SparkFn=new Object();window.SparkIn=function(){window.Spark=window.$=function(c,e){var b=new Object();if(c!==undefined){b=(e)?Sizzle(c,e):Sizzle(c)}var d={fps:60,selector:c,elements:b};for(var f in SparkFn){d[f]=SparkFn[f]}return d};Spark.fixEvents=function(c){if(c.pageX===undefined){var b=(document.documentElement&&document.documentElement.scrollLeft!=null)?document.documentElement:document.body;docX=c.clientX+b.scrollLeft;docY=c.clientY+b.scrollTop;c.pageX=docX;c.pageY=docY}if(!c.target){c.target=c.srcElement}return c};for(var a in Spark()){Spark[a]=$[a]=Spark()[a]}};SparkFn.ajax=function(e,b,c,d){var a=(!XMLHttpRequest)?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest;e=e.toUpperCase();if(e=="GET"&&c){b+="?"+c}if(d){a.onreadystatechange=function(){if(a.readyState==4){d(a.responseText)}}}a.open(e,b,(d)?true:false);if(e=="POST"){a.setRequestHeader("Content-type","application/x-www-form-urlencoded");a.send((c)?c:null)}else{a.send(null)}if(!d){return a.responseText}};SparkFn.attribute=function(c){for(var d in this.elements){for(var b in c){this.elements[d][b]=c[b]}}if(c===undefined){return this.elements[0]}return this};SparkFn.content=function(b,a){for(var c in this.elements){if(!b){return this.elements[c].innerHTML}else{(!a)?this.elements[c].innerHTML=b:this.elements[c].innerHTML+=b}}return this};SparkFn.cookie=function(d,f,h){if(!f){var g=d+"=";var a=document.cookie.split(";");for(var e in a){var j=a[e];while(j.charAt(0)==" "){j=j.substring(1,j.length)}if(j.indexOf(g)==0){return j.substring(g.length,j.length)}}return false}else{var b=new Date();b.setTime(b.getTime()+((h)?h:31536000000));document.cookie=d+"="+f+"; expires="+b.toGMTString()+"; path=/"}};SparkFn.css=function(a){for(var b in this.elements){for(var d in a){this.elements[b].style[d]=a[d];if(d=="opacity"){this.elements[b].style.MozOpacity=a[d];this.elements[b].style.KhtmlOpacity=a[d];this.elements[b].style.filter="alpha(opacity="+(a[d]*100)+")";this.elements[b].style.zoom="1"}}}if(a===undefined){return this.elements[0].style}return this};SparkFn.event=function(a,c){for(var b in this.elements){if(this.elements[b].addEventListener){this.elements[b].addEventListener(a,function(d){c(Spark.fixEvents(d))},false)}else{if(this.elements[b].attachEvent){this.elements[b].attachEvent("on"+a,function(d){c(Spark.fixEvents(d))})}}}return this};SparkFn.json=function(b,a){if(b=="encode"){return JSON.stringify(a)}return JSON.parse(a)};SparkFn.ready=function(b){window.alreadyrunflag=0;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){alreadyrunflag=1;b()},false)}else{if(document.all&&!window.opera){document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"><\/script>');var a=document.getElementById("contentloadtag");a.onreadystatechange=function(){if(this.readyState=="complete"){alreadyrunflag=1;b()}}}}window.onload=function(){setTimeout("if(!alreadyrunflag) callback()",0)}};SparkFn.browser=function(){var a={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.os=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(e){for(var b=0;b<e.length;b++){var c=e[b].string;var d=e[b].prop;this.versionSearchString=e[b].versionSearch||e[b].identity;if(c){if(c.indexOf(e[b].subString)!=-1){return e[b].identity}}else{if(d){return e[b].identity}}}},searchVersion:function(c){var b=c.indexOf(this.versionSearchString);if(b==-1){return}return parseFloat(c.substring(b+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};a.init();return a};SparkFn.animate=function(k,l,n){if(l===undefined){l=800}if(k.opacity){k.MozOpacity=k.opacity;k.KhtmlOpacity=k.opacity;k.filter=k.opacity*100}for(var h in this.elements){for(var a in k){this.elements[h].style[a]=(window.getComputedStyle)?window.getComputedStyle(this.elements[h],null)[a]:this.elements[h].currentStyle[a];if(this.elements[h].style[a]=="auto"){this.elements[h].style[a]=0}this.elements[h].style.zoom="1";if(a=="filter"&&!this.elements[h].style[a]){this.elements[h].style[a]="alpha(opacity=100)"}var b=(a=="opacity"||a=="MozOpacity"||a=="KhtmlOpacity")?parseFloat(this.elements[h].style[a]):parseInt(this.elements[h].style[a].replace("alpha(opacity=","").replace(")",""));var c=(a=="opacity"||a=="MozOpacity"||a=="KhtmlOpacity")?parseFloat(k[a])-b:parseInt(k[a])-b;var j=l/(1000/this.fps);var d=c/j;var m=(isNaN(k[a]))?k[a].replace(/[0-9]/g,""):"px";var g="";if(a=="opacity"||a=="MozOpacity"||a=="KhtmlOpacity"){m=""}else{if(a=="filter"){m=")";g="alpha(opacity="}}for(var f=0;f<=j;f++){setTimeout((function(q,r,t,s,o,i,e){return function(){r.style[t]=e+(s+(o*q))+i}})(f,this.elements[h],a,b,d,m,g),f*(1000/this.fps),this.elements[h],a,b,d,m,g)}setTimeout((function(q,r,s,o,i,e){return function(){r.style[s]=e+o[s]+i}})(f,this.elements[h],a,k,m,g),l,this.elements[h],a,k,m,g)}}if(n!==undefined){setTimeout(n,l)}return this};SparkFn.jsonp=function(a,c,b){a+="?callback="+c;if(b!==undefined){for(p in b){a+="&"+b[p]}}this.load(a)};SparkFn.transition=function(f,a,d){if(d===undefined){d=new Function()}if(a===undefined){a=800}for(var c in this.elements){this.css({overflow:"hidden"});switch(f){case"slidedown":this.css({display:"block"});var b=(window.getComputedStyle)?window.getComputedStyle(this.elements[c],null).height:this.elements[c].currentStyle.height;this.css({height:0});this.animate({height:parseInt(b)},a,d);break;case"slideup":var b=(window.getComputedStyle)?window.getComputedStyle(this.elements[c],null).height:this.elements[c].currentStyle.height;this.animate({height:0},a,function(){this.css({height:parseInt(b)});this.css({display:"none"});d()});break;case"fadein":this.css({display:"block"});this.css({opacity:0});this.animate({opacity:1},a,d);break;case"fadeout":this.animate({opacity:0},a,function(){this.css({opacity:1});this.css({display:"none"});d()});break}}return this};SparkFn.load=function(c){var b=document.getElementsByTagName("head")[0];var a=document.createElement("script");a.type="text/javascript";a.src=c;b.appendChild(a)};(function(){var r=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,j=0,d=Object.prototype.toString,q=false,i=true;[0,0].sort(function(){i=false;return 0});var b=function(x,e,A,B){A=A||[];e=e||document;var D=e;if(e.nodeType!==1&&e.nodeType!==9){return[]}if(!x||typeof x!=="string"){return A}var u,F,I,t,E,H,G,z,w=true,v=b.isXML(e),y=[],C=x;do{r.exec("");u=r.exec(C);if(u){C=u[3];y.push(u[1]);if(u[2]){t=u[3];break}}}while(u);if(y.length>1&&k.exec(x)){if(y.length===2&&f.relative[y[0]]){F=h(y[0]+y[1],e)}else{F=f.relative[y[0]]?[e]:b(y.shift(),e);while(y.length){x=y.shift();if(f.relative[x]){x+=y.shift()}F=h(x,F)}}}else{if(!B&&y.length>1&&e.nodeType===9&&!v&&f.match.ID.test(y[0])&&!f.match.ID.test(y[y.length-1])){E=b.find(y.shift(),e,v);e=E.expr?b.filter(E.expr,E.set)[0]:E.set[0]}if(e){E=B?{expr:y.pop(),set:a(B)}:b.find(y.pop(),y.length===1&&(y[0]==="~"||y[0]==="+")&&e.parentNode?e.parentNode:e,v);F=E.expr?b.filter(E.expr,E.set):E.set;if(y.length>0){I=a(F)}else{w=false}while(y.length){H=y.pop();G=H;if(!f.relative[H]){H=""}else{G=y.pop()}if(G==null){G=e}f.relative[H](I,G,v)}}else{I=y=[]}}if(!I){I=F}if(!I){b.error(H||x)}if(d.call(I)==="[object Array]"){if(!w){A.push.apply(A,I)}else{if(e&&e.nodeType===1){for(z=0;I[z]!=null;z++){if(I[z]&&(I[z]===true||I[z].nodeType===1&&b.contains(e,I[z]))){A.push(F[z])}}}else{for(z=0;I[z]!=null;z++){if(I[z]&&I[z].nodeType===1){A.push(F[z])}}}}}else{a(I,A)}if(t){b(t,D,A,B);b.uniqueSort(A)}return A};b.uniqueSort=function(t){if(c){q=i;t.sort(c);if(q){for(var e=1;e<t.length;e++){if(t[e]===t[e-1]){t.splice(e--,1)}}}}return t};b.matches=function(e,t){return b(e,null,null,t)};b.matchesSelector=function(e,t){return b(t,null,null,[e]).length>0};b.find=function(z,e,A){var y;if(!z){return[]}for(var v=0,u=f.order.length;v<u;v++){var w,x=f.order[v];if((w=f.leftMatch[x].exec(z))){var t=w[1];w.splice(1,1);if(t.substr(t.length-1)!=="\\"){w[1]=(w[1]||"").replace(/\\/g,"");y=f.find[x](w,e,A);if(y!=null){z=z.replace(f.match[x],"");break}}}}if(!y){y=e.getElementsByTagName("*")}return{set:y,expr:z}};b.filter=function(D,C,G,w){var y,e,u=D,I=[],A=C,z=C&&C[0]&&b.isXML(C[0]);while(D&&C.length){for(var B in f.filter){if((y=f.leftMatch[B].exec(D))!=null&&y[2]){var H,F,t=f.filter[B],v=y[1];e=false;y.splice(1,1);if(v.substr(v.length-1)==="\\"){continue}if(A===I){I=[]}if(f.preFilter[B]){y=f.preFilter[B](y,A,G,I,w,z);if(!y){e=H=true}else{if(y===true){continue}}}if(y){for(var x=0;(F=A[x])!=null;x++){if(F){H=t(F,y,x,A);var E=w^!!H;if(G&&H!=null){if(E){e=true}else{A[x]=false}}else{if(E){I.push(F);e=true}}}}}if(H!==undefined){if(!G){A=I}D=D.replace(f.match[B],"");if(!e){return[]}break}}}if(D===u){if(e==null){b.error(D)}else{break}}u=D}return A};b.error=function(e){throw"Syntax error, unrecognized expression: "+e};var f=b.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")}},relative:{"+":function(y,t){var v=typeof t==="string",x=v&&!/\W/.test(t),z=v&&!x;if(x){t=t.toLowerCase()}for(var u=0,e=y.length,w;u<e;u++){if((w=y[u])){while((w=w.previousSibling)&&w.nodeType!==1){}y[u]=z||w&&w.nodeName.toLowerCase()===t?w||false:w===t}}if(z){b.filter(t,y,true)}},">":function(y,t){var x,w=typeof t==="string",u=0,e=y.length;if(w&&!/\W/.test(t)){t=t.toLowerCase();for(;u<e;u++){x=y[u];if(x){var v=x.parentNode;y[u]=v.nodeName.toLowerCase()===t?v:false}}}else{for(;u<e;u++){x=y[u];if(x){y[u]=w?x.parentNode:x.parentNode===t}}if(w){b.filter(t,y,true)}}},"":function(v,t,x){var w,u=j++,e=s;if(typeof t==="string"&&!/\W/.test(t)){t=t.toLowerCase();w=t;e=o}e("parentNode",t,u,v,w,x)},"~":function(v,t,x){var w,u=j++,e=s;if(typeof t==="string"&&!/\W/.test(t)){t=t.toLowerCase();w=t;e=o}e("previousSibling",t,u,v,w,x)}},find:{ID:function(t,u,v){if(typeof u.getElementById!=="undefined"&&!v){var e=u.getElementById(t[1]);return e&&e.parentNode?[e]:[]}},NAME:function(u,x){if(typeof x.getElementsByName!=="undefined"){var t=[],w=x.getElementsByName(u[1]);for(var v=0,e=w.length;v<e;v++){if(w[v].getAttribute("name")===u[1]){t.push(w[v])}}return t.length===0?null:t}},TAG:function(e,t){return t.getElementsByTagName(e[1])}},preFilter:{CLASS:function(v,t,u,e,y,z){v=" "+v[1].replace(/\\/g,"")+" ";if(z){return v}for(var w=0,x;(x=t[w])!=null;w++){if(x){if(y^(x.className&&(" "+x.className+" ").replace(/[\t\n\r]/g," ").indexOf(v)>=0)){if(!u){e.push(x)}}else{if(u){t[w]=false}}}}return false},ID:function(e){return e[1].replace(/\\/g,"")},TAG:function(t,e){return t[1].toLowerCase()},CHILD:function(e){if(e[1]==="nth"){if(!e[2]){b.error(e[0])}e[2]=e[2].replace(/^\+|\s*/g,"");var t=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2]==="even"&&"2n"||e[2]==="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=(t[1]+(t[2]||1))-0;e[3]=t[3]-0}else{if(e[2]){b.error(e[0])}}e[0]=j++;return e},ATTR:function(w,t,u,e,x,y){var v=w[1].replace(/\\/g,"");if(!y&&f.attrMap[v]){w[1]=f.attrMap[v]}if(w[2]==="~="){w[4]=" "+w[4]+" "}return w},PSEUDO:function(w,t,u,e,x){if(w[1]==="not"){if((r.exec(w[3])||"").length>1||/^\w/.test(w[3])){w[3]=b(w[3],null,null,t)}else{var v=b.filter(w[3],t,u,true^x);if(!u){e.push.apply(e,v)}return false}}else{if(f.match.POS.test(w[0])||f.match.CHILD.test(w[0])){return true}}return w},POS:function(e){e.unshift(true);return e}},filters:{enabled:function(e){return e.disabled===false&&e.type!=="hidden"},disabled:function(e){return e.disabled===true},checked:function(e){return e.checked===true},selected:function(e){e.parentNode.selectedIndex;return e.selected===true},parent:function(e){return !!e.firstChild},empty:function(e){return !e.firstChild},has:function(u,t,e){return !!b(e[3],u).length},header:function(e){return(/h\d/i).test(e.nodeName)},text:function(e){return"text"===e.type},radio:function(e){return"radio"===e.type},checkbox:function(e){return"checkbox"===e.type},file:function(e){return"file"===e.type},password:function(e){return"password"===e.type},submit:function(e){return"submit"===e.type},image:function(e){return"image"===e.type},reset:function(e){return"reset"===e.type},button:function(e){return"button"===e.type||e.nodeName.toLowerCase()==="button"},input:function(e){return(/input|select|textarea|button/i).test(e.nodeName)}},setFilters:{first:function(t,e){return e===0},last:function(u,t,e,v){return t===v.length-1},even:function(t,e){return e%2===0},odd:function(t,e){return e%2===1},lt:function(u,t,e){return t<e[3]-0},gt:function(u,t,e){return t>e[3]-0},nth:function(u,t,e){return e[3]-0===t},eq:function(u,t,e){return e[3]-0===t}},filter:{PSEUDO:function(u,z,y,A){var e=z[1],t=f.filters[e];if(t){return t(u,y,z,A)}else{if(e==="contains"){return(u.textContent||u.innerText||b.getText([u])||"").indexOf(z[3])>=0}else{if(e==="not"){var v=z[3];for(var x=0,w=v.length;x<w;x++){if(v[x]===u){return false}}return true}else{b.error(e)}}}},CHILD:function(e,v){var y=v[1],t=e;switch(y){case"only":case"first":while((t=t.previousSibling)){if(t.nodeType===1){return false}}if(y==="first"){return true}t=e;case"last":while((t=t.nextSibling)){if(t.nodeType===1){return false}}return true;case"nth":var u=v[2],B=v[3];if(u===1&&B===0){return true}var x=v[0],A=e.parentNode;if(A&&(A.sizcache!==x||!e.nodeIndex)){var w=0;for(t=A.firstChild;t;t=t.nextSibling){if(t.nodeType===1){t.nodeIndex=++w}}A.sizcache=x}var z=e.nodeIndex-B;if(u===0){return z===0}else{return(z%u===0&&z/u>=0)}}},ID:function(t,e){return t.nodeType===1&&t.getAttribute("id")===e},TAG:function(t,e){return(e==="*"&&t.nodeType===1)||t.nodeName.toLowerCase()===e},CLASS:function(t,e){return(" "+(t.className||t.getAttribute("class"))+" ").indexOf(e)>-1},ATTR:function(x,v){var u=v[1],e=f.attrHandle[u]?f.attrHandle[u](x):x[u]!=null?x[u]:x.getAttribute(u),y=e+"",w=v[2],t=v[4];return e==null?w==="!=":w==="="?y===t:w==="*="?y.indexOf(t)>=0:w==="~="?(" "+y+" ").indexOf(t)>=0:!t?y&&e!==false:w==="!="?y!==t:w==="^="?y.indexOf(t)===0:w==="$="?y.substr(y.length-t.length)===t:w==="|="?y===t||y.substr(0,t.length+1)===t+"-":false},POS:function(w,t,u,x){var e=t[2],v=f.setFilters[e];if(v){return v(w,u,t,x)}}}};var k=f.match.POS,g=function(t,e){return"\\"+(e-0+1)};for(var n in f.match){f.match[n]=new RegExp(f.match[n].source+(/(?![^\[]*\])(?![^\(]*\))/.source));f.leftMatch[n]=new RegExp(/(^(?:.|\r|\n)*?)/.source+f.match[n].source.replace(/\\(\d+)/g,g))}var a=function(t,e){t=Array.prototype.slice.call(t,0);if(e){e.push.apply(e,t);return e}return t};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType}catch(l){a=function(w,v){var u=0,t=v||[];if(d.call(w)==="[object Array]"){Array.prototype.push.apply(t,w)}else{if(typeof w.length==="number"){for(var e=w.length;u<e;u++){t.push(w[u])}}else{for(;w[u];u++){t.push(w[u])}}}return t}}var c,m;if(document.documentElement.compareDocumentPosition){c=function(t,e){if(t===e){q=true;return 0}if(!t.compareDocumentPosition||!e.compareDocumentPosition){return t.compareDocumentPosition?-1:1}return t.compareDocumentPosition(e)&4?-1:1}}else{c=function(A,z){var x,t,u=[],e=[],w=A.parentNode,y=z.parentNode,B=w;if(A===z){q=true;return 0}else{if(w===y){return m(A,z)}else{if(!w){return -1}else{if(!y){return 1}}}}while(B){u.unshift(B);B=B.parentNode}B=y;while(B){e.unshift(B);B=B.parentNode}x=u.length;t=e.length;for(var v=0;v<x&&v<t;v++){if(u[v]!==e[v]){return m(u[v],e[v])}}return v===x?m(A,e[v],-1):m(u[v],z,1)};m=function(t,e,u){if(t===e){return u}var v=t.nextSibling;while(v){if(v===e){return -1}v=v.nextSibling}return 1}}b.getText=function(e){var t="",v;for(var u=0;e[u];u++){v=e[u];if(v.nodeType===3||v.nodeType===4){t+=v.nodeValue}else{if(v.nodeType!==8){t+=b.getText(v.childNodes)}}}return t};(function(){var t=document.createElement("div"),u="script"+(new Date()).getTime(),e=document.documentElement;t.innerHTML="<a name='"+u+"'/>";e.insertBefore(t,e.firstChild);if(document.getElementById(u)){f.find.ID=function(w,x,y){if(typeof x.getElementById!=="undefined"&&!y){var v=x.getElementById(w[1]);return v?v.id===w[1]||typeof v.getAttributeNode!=="undefined"&&v.getAttributeNode("id").nodeValue===w[1]?[v]:undefined:[]}};f.filter.ID=function(x,v){var w=typeof x.getAttributeNode!=="undefined"&&x.getAttributeNode("id");return x.nodeType===1&&w&&w.nodeValue===v}}e.removeChild(t);e=t=null})();(function(){var e=document.createElement("div");e.appendChild(document.createComment(""));if(e.getElementsByTagName("*").length>0){f.find.TAG=function(t,x){var w=x.getElementsByTagName(t[1]);if(t[1]==="*"){var v=[];for(var u=0;w[u];u++){if(w[u].nodeType===1){v.push(w[u])}}w=v}return w}}e.innerHTML="<a href='#'></a>";if(e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"){f.attrHandle.href=function(t){return t.getAttribute("href",2)}}e=null})();if(document.querySelectorAll){(function(){var e=b,v=document.createElement("div"),u="__sizzle__";v.innerHTML="<p class='TEST'></p>";if(v.querySelectorAll&&v.querySelectorAll(".TEST").length===0){return}b=function(D,x,z,C){x=x||document;D=D.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!C&&!b.isXML(x)){if(x.nodeType===9){try{return a(x.querySelectorAll(D),z)}catch(A){}}else{if(x.nodeType===1&&x.nodeName.toLowerCase()!=="object"){var y=x.getAttribute("id"),w=y||u,F=x.parentNode,E=/^\s*[+~]/.test(D);if(!y){x.setAttribute("id",w)}else{w=w.replace(/'/g,"\\$&")}if(E&&F){x=x.parentNode}try{if(!E||F){return a(x.querySelectorAll("[id='"+w+"'] "+D),z)}}catch(B){}finally{if(!y){x.removeAttribute("id")}}}}}return e(D,x,z,C)};for(var t in e){b[t]=e[t]}v=null})()}(function(){var e=document.documentElement,u=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector,t=false;try{u.call(document.documentElement,"[test!='']:sizzle")}catch(v){t=true}if(u){b.matchesSelector=function(w,y){y=y.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!b.isXML(w)){try{if(t||!f.match.PSEUDO.test(y)&&!/!=/.test(y)){return u.call(w,y)}}catch(x){}}return b(y,null,null,[w]).length>0}}})();(function(){var e=document.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>";if(!e.getElementsByClassName||e.getElementsByClassName("e").length===0){return}e.lastChild.className="e";if(e.getElementsByClassName("e").length===1){return}f.order.splice(1,0,"CLASS");f.find.CLASS=function(t,u,v){if(typeof u.getElementsByClassName!=="undefined"&&!v){return u.getElementsByClassName(t[1])}};e=null})();function o(t,y,x,B,z,A){for(var v=0,u=B.length;v<u;v++){var e=B[v];if(e){var w=false;e=e[t];while(e){if(e.sizcache===x){w=B[e.sizset];break}if(e.nodeType===1&&!A){e.sizcache=x;e.sizset=v}if(e.nodeName.toLowerCase()===y){w=e;break}e=e[t]}B[v]=w}}}function s(t,y,x,B,z,A){for(var v=0,u=B.length;v<u;v++){var e=B[v];if(e){var w=false;e=e[t];while(e){if(e.sizcache===x){w=B[e.sizset];break}if(e.nodeType===1){if(!A){e.sizcache=x;e.sizset=v}if(typeof y!=="string"){if(e===y){w=true;break}}else{if(b.filter(y,[e]).length>0){w=e;break}}}e=e[t]}B[v]=w}}}if(document.documentElement.contains){b.contains=function(t,e){return t!==e&&(t.contains?t.contains(e):true)}}else{if(document.documentElement.compareDocumentPosition){b.contains=function(t,e){return !!(t.compareDocumentPosition(e)&16)}}else{b.contains=function(){return false}}}b.isXML=function(e){var t=(e?e.ownerDocument||e:0).documentElement;return t?t.nodeName!=="HTML":false};var h=function(e,z){var x,v=[],w="",u=z.nodeType?[z]:z;while((x=f.match.PSEUDO.exec(e))){w+=x[0];e=e.replace(f.match.PSEUDO,"")}e=f.relative[e]?e+"*":e;for(var y=0,t=u.length;y<t;y++){b(e,u[y],v)}return b.filter(w,v)};window.Sizzle=b})();if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());SparkIn();