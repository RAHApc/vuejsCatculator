(function(e){function t(t){for(var n,o,a=t[0],i=t[1],s=t[2],l=0,p=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&p.push(u[o][0]),u[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);b&&b(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==u[i]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},u={app:0},c=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var b=i;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2fc4":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),u={class:"keys"},c=Object(n["c"])("span",null,null,-1);function o(e,t,r,o,a,i){return Object(n["d"])(),Object(n["b"])("main",null,[Object(n["f"])(Object(n["c"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.currentNumber=e})},null,512),[[n["e"],a.currentNumber]]),Object(n["c"])("div",u,[Object(n["c"])("button",{class:"op__key",onClick:t[2]||(t[2]=function(){return i.clear&&i.clear.apply(i,arguments)})},"C"),Object(n["c"])("button",{class:"op__key",onClick:t[3]||(t[3]=function(){return i.plusMinusNumber&&i.plusMinusNumber.apply(i,arguments)})},"+/-"),Object(n["c"])("button",{class:"op__key",onClick:t[4]||(t[4]=function(e){return i.handleOperation("%")})},"%"),Object(n["c"])("button",{class:"op__key",onClick:t[5]||(t[5]=function(e){return i.handleOperation("/")})},"/"),Object(n["c"])("button",{class:"num__key",onClick:t[6]||(t[6]=function(e){return i.addNumber("7")})},"7"),Object(n["c"])("button",{class:"num__key",onClick:t[7]||(t[7]=function(e){return i.addNumber("8")})},"8"),Object(n["c"])("button",{class:"num__key",onClick:t[8]||(t[8]=function(e){return i.addNumber("9")})},"9"),Object(n["c"])("button",{class:"op__key",onClick:t[9]||(t[9]=function(e){return i.handleOperation("*")})},"x"),Object(n["c"])("button",{class:"num__key",onClick:t[10]||(t[10]=function(e){return i.addNumber("4")})},"4"),Object(n["c"])("button",{class:"num__key",onClick:t[11]||(t[11]=function(e){return i.addNumber("5")})},"5"),Object(n["c"])("button",{class:"num__key",onClick:t[12]||(t[12]=function(e){return i.addNumber("6")})},"6"),Object(n["c"])("button",{class:"op__key",onClick:t[13]||(t[13]=function(e){return i.handleOperation("-")})},"-"),Object(n["c"])("button",{class:"num__key",onClick:t[14]||(t[14]=function(e){return i.addNumber("1")})},"1"),Object(n["c"])("button",{class:"num__key",onClick:t[15]||(t[15]=function(e){return i.addNumber("2")})},"2"),Object(n["c"])("button",{class:"num__key",onClick:t[16]||(t[16]=function(e){return i.addNumber("3")})},"3"),Object(n["c"])("button",{class:"op__key",onClick:t[17]||(t[17]=function(e){return i.handleOperation("+")})},"+"),c,Object(n["c"])("button",{class:"num__key",onClick:t[18]||(t[18]=function(e){return i.addNumber("0")})},"0"),Object(n["c"])("button",{class:"num__key",onClick:t[19]||(t[19]=function(){return i.addDot&&i.addDot.apply(i,arguments)})},"."),Object(n["c"])("button",{class:"eq__key",onClick:t[20]||(t[20]=function(){return i.equal&&i.equal.apply(i,arguments)})},"=")])])}r("caad"),r("2532"),r("d3b7"),r("25f0");var a={name:"App",data:function(){return{currentNumber:"",prevNumber:"",operation:""}},methods:{addNumber:function(e){0==this.currentNumber&&0==e||(this.currentNumber+=e)},clear:function(){this.currentNumber=""},plusMinusNumber:function(){this.currentNumber>0?this.currentNumber="-"+this.currentNumber:this.currentNumber=this.currentNumber.substring(1)},addDot:function(){this.currentNumber.includes(".")||""!=this.currentNumber&&(this.currentNumber+=".")},handleOperation:function(e){this.prevNumber=this.currentNumber,this.currentNumber="",this.operation=e},equal:function(){switch(this.operation){case"+":this.currentNumber=parseFloat(this.prevNumber)+parseFloat(this.currentNumber);break;case"-":this.currentNumber=parseFloat(this.prevNumber)-parseFloat(this.currentNumber);break;case"/":this.currentNumber=parseFloat(this.prevNumber)/parseFloat(this.currentNumber);break;case"%":this.currentNumber=parseFloat(this.prevNumber)%parseFloat(this.currentNumber);break;case"*":this.currentNumber=parseFloat(this.prevNumber)*parseFloat(this.currentNumber);break}this.currentNumber=this.currentNumber.toString()}}};a.render=o;var i=a;r("2fc4");Object(n["a"])(i).mount("#app")}});
//# sourceMappingURL=app.4a8278ea.js.map