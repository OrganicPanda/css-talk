!function e(t,n,a){function i(o,s){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(r)return r(o,!0);throw new Error("Cannot find module '"+o+"'")}var c=n[o]={exports:{}};t[o][0].call(c.exports,function(e){var n=t[o][1][e];return i(n?n:e)},c,c.exports,e,t,n,a)}return n[o].exports}for(var r="function"==typeof require&&require,o=0;o<a.length;o++)i(a[o]);return i}({1:[function(e,t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=n.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var i in e)e.hasOwnProperty(i)&&(a[i]=t.util.clone(e[i]));return a;case"Array":return e.map&&e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var i in n)a[i]=n[i];return a},insertBefore:function(e,n,a,i){i=i||t.languages;var r=i[e];if(2==arguments.length){a=arguments[1];for(var o in a)a.hasOwnProperty(o)&&(r[o]=a[o]);return r}var s={};for(var l in r)if(r.hasOwnProperty(l)){if(l==n)for(var o in a)a.hasOwnProperty(o)&&(s[o]=a[o]);s[l]=r[l]}return t.languages.DFS(t.languages,function(t,n){n===i[e]&&t!=e&&(this[t]=s)}),i[e]=s},DFS:function(e,n,a){for(var i in e)e.hasOwnProperty(i)&&(n.call(e,i,e[i],a||i),"Object"===t.util.type(e[i])?t.languages.DFS(e[i],n):"Array"===t.util.type(e[i])&&t.languages.DFS(e[i],n,i))}},highlightAll:function(e,n){for(var a,i=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),r=0;a=i[r++];)t.highlightElement(a,e===!0,n)},highlightElement:function(i,r,o){for(var s,l,c=i;c&&!e.test(c.className);)c=c.parentNode;if(c&&(s=(c.className.match(e)||[,""])[1],l=t.languages[s]),i.className=i.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,c=i.parentNode,/pre/i.test(c.nodeName)&&(c.className=c.className.replace(e,"").replace(/\s+/g," ")+" language-"+s),l){var p=i.textContent;if(p){p=p.replace(/^(?:\r?\n|\r)/,"");var u={element:i,language:s,grammar:l,code:p};if(t.hooks.run("before-highlight",u),r&&n.Worker){var f=new Worker(t.filename);f.onmessage=function(e){u.highlightedCode=a.stringify(JSON.parse(e.data),s),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,o&&o.call(u.element),t.hooks.run("after-highlight",u)},f.postMessage(JSON.stringify({language:u.language,code:u.code}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,o&&o.call(i),t.hooks.run("after-highlight",u)}}},highlight:function(e,n,i){var r=t.tokenize(e,n);return a.stringify(t.util.encode(r),i)},tokenize:function(e,n){var a=t.Token,i=[e],r=n.rest;if(r){for(var o in r)n[o]=r[o];delete n.rest}e:for(var o in n)if(n.hasOwnProperty(o)&&n[o]){var s=n[o];s="Array"===t.util.type(s)?s:[s];for(var l=0;l<s.length;++l){var c=s[l],p=c.inside,u=!!c.lookbehind,f=0,d=c.alias;c=c.pattern||c;for(var g=0;g<i.length;g++){var b=i[g];if(i.length>e.length)break e;if(!(b instanceof a)){c.lastIndex=0;var h=c.exec(b);if(h){u&&(f=h[1].length);var m=h.index-1+f,h=h[0].slice(f),v=h.length,k=m+v,y=b.slice(0,m+1),w=b.slice(k+1),x=[g,1];y&&x.push(y);var E=new a(o,p?t.tokenize(h,p):h,d);x.push(E),w&&x.push(w),Array.prototype.splice.apply(i,x)}}}}}return i},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var i,r=0;i=a[r++];)i(n)}}},a=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(a.stringify=function(e,n,i){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return a.stringify(t,n,e)}).join("");var r={type:e.type,content:a.stringify(e.content,n,i),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:i};if("comment"==r.type&&(r.attributes.spellcheck="true"),e.alias){var o="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,o)}t.hooks.run("wrap",r);var s="";for(var l in r.attributes)s+=l+'="'+(r.attributes[l]||"")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'" '+s+">"+r.content+"</"+r.tag+">"},!n.document)return n.addEventListener?(n.addEventListener("message",function(e){var a=JSON.parse(e.data),i=a.language,r=a.code;n.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[i])))),n.close()},!1),n.Prism):n.Prism;var i=document.getElementsByTagName("script");return i=i[i.length-1],i&&(t.filename=i.src,document.addEventListener&&!i.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),n.Prism}();"undefined"!=typeof t&&t.exports&&(t.exports=a),a.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.util.clone(a.languages.css),a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:a.languages.markup.tag.inside},rest:a.languages.css},alias:"language-css"}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/(?!\d)[a-z0-9_$]+(?=\()/i}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),a.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:a.languages.markup.tag.inside},rest:a.languages.javascript},alias:"language-javascript"}}),function(){self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,i=t.getAttribute("data-src"),r=t,o=/\blang(?:uage)?-(?!\*)(\w+)\b/i;r&&!o.test(r.className);)r=r.parentNode;if(r&&(n=(t.className.match(o)||[,""])[1]),!n){var s=(i.match(/\.(\w+)$/)||[,""])[1];n=e[s]||s}var l=document.createElement("code");l.className="language-"+n,t.textContent="",l.textContent="Loading…",t.appendChild(l);var c=new XMLHttpRequest;c.open("GET",i,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,a.highlightElement(l)):l.textContent=c.status>=400?"✖ Error "+c.status+" while fetching file: "+c.statusText:"✖ Error: File does not exist or is empty")},c.send(null)})},self.Prism.fileHighlight())}()},{}],2:[function(e,t){t.exports=function(){return function(e){function t(t){var n=t.getAttribute("data-bespoke-backdrop");if(n){var a=document.createElement("div");return a.className=n,a.classList.add("bespoke-backdrop"),e.parent.appendChild(a),a}}function n(t){if(t){var n=r.indexOf(t),o=e.slide();a(t,"active"),a(t,"inactive"),a(t,"before"),a(t,"after"),n!==o?(i(t,"inactive"),i(t,o>n?"before":"after")):i(t,"active")}}function a(e,t){e.classList.remove("bespoke-backdrop-"+t)}function i(e,t){e.classList.add("bespoke-backdrop-"+t)}var r;r=e.slides.map(t),e.on("activate",function(){r.forEach(n)})}}},{}],3:[function(e,t){t.exports=function(e){return function(t){var n,a,i=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),r=function(){var e=n+1;return l(1)?(s(n,a+1),!1):(i[e]&&s(e,0),void 0)},o=function(){var e=n-1;return l(-1)?(s(n,a-1),!1):(i[e]&&s(e,i[e].length-1),void 0)},s=function(e,t){n=e,a=t,i.forEach(function(n,a){n.forEach(function(n,i){n.classList.add("bespoke-bullet"),e>a||a===e&&t>=i?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),a===e&&i===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},l=function(e){return void 0!==i[n][a+e]};t.on("next",r),t.on("prev",o),t.on("slide",function(e){s(e.index,0)}),s(0,0)}}},{}],4:[function(e,t){t.exports=function(){return function(e){e.slides.forEach(function(e){e.addEventListener("keydown",function(e){(/INPUT|TEXTAREA|SELECT/.test(e.target.nodeName)||"true"===e.target.contentEditable)&&e.stopPropagation()})})}}},{}],5:[function(e,t){t.exports=function(){return function(e){var t=function(){var t=window.location.hash.slice(1),a=parseInt(t,10);t&&(a?n(a-1):e.slides.forEach(function(e,a){e.getAttribute("data-bespoke-hash")===t&&n(a)}))},n=function(t){var n=t>-1&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)};setTimeout(function(){t(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash");window.location.hash=t||e.index+1}),window.addEventListener("hashchange",t)},0)}}},{}],6:[function(e,t){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which&&!e.shiftKey||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||32==e.which&&e.shiftKey||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],7:[function(e,t){t.exports=function(e){return function(t){var n=document.createElement("div"),a=document.createElement("div"),i="vertical"===e?"height":"width";n.className="bespoke-progress-parent",a.className="bespoke-progress-bar",n.appendChild(a),t.parent.appendChild(n),t.on("activate",function(e){a.style[i]=100*e.index/(t.slides.length-1)+"%"})}}},{}],8:[function(e,t){t.exports=function(e){return function(t){var n=t.parent,a=t.slides[0],i=a.offsetHeight,r=a.offsetWidth,o="zoom"===e||"zoom"in n.style&&"transform"!==e,s=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t},l=o?t.slides:t.slides.map(s),c=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,a){return a+e in n.style?a+e:t},e.toLowerCase())}("Transform"),p=o?function(e,t){t.style.zoom=e}:function(e,t){t.style[c]="scale("+e+")"},u=function(){var e=n.offsetWidth/r,t=n.offsetHeight/i;l.forEach(p.bind(null,Math.min(e,t)))};window.addEventListener("resize",u),u()}}},{}],9:[function(e,t,n){(function(a){!function(e){if("object"==typeof n)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var i;"undefined"!=typeof window?i=window:"undefined"!=typeof a?i=a:"undefined"!=typeof self&&(i=self);var r=i;r=r.bespoke||(r.bespoke={}),r=r.themes||(r.themes={}),r.cube=e()}}(function(){return function t(n,a,i){function r(s,l){if(!a[s]){if(!n[s]){var c="function"==typeof e&&e;if(!l&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var p=a[s]={exports:{}};n[s][0].call(p.exports,function(e){var t=n[s][1][e];return r(t?t:e)},p,p.exports,t,n,a,i)}return a[s].exports}for(var o="function"==typeof e&&e,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,t){var n=e("bespoke-classes"),a=e("insert-css");t.exports=function(){var e="*{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}@media print{*{-webkit-print-color-adjust:exact}}@page{size:landscape;margin:0}.bespoke-parent{-webkit-transition:background .6s ease;transition:background .6s ease;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden}@media print{.bespoke-parent{overflow:visible;position:static}}.bespoke-theme-cube-slide-parent{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-perspective:600px;perspective:600px;pointer-events:none}.bespoke-slide{pointer-events:auto;-webkit-transition:-webkit-transform .6s ease,opacity .6s ease,background .6s ease;transition:transform .6s ease,opacity .6s ease,background .6s ease;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;width:640px;height:480px;position:absolute;top:50%;margin-top:-240px;left:50%;margin-left:-320px;background:#eaeaea;padding:40px;border-radius:0}@media print{.bespoke-slide{zoom:1!important;height:743px;width:100%;page-break-before:always;position:static;margin:0;-webkit-transition:none;transition:none}}.bespoke-before{-webkit-transform:translateX(100px)translateX(-320px)rotateY(-90deg)translateX(-320px);transform:translateX(100px)translateX(-320px)rotateY(-90deg)translateX(-320px)}@media print{.bespoke-before{-webkit-transform:none;transform:none}}.bespoke-after{-webkit-transform:translateX(-100px)translateX(320px)rotateY(90deg)translateX(320px);transform:translateX(-100px)translateX(320px)rotateY(90deg)translateX(320px)}@media print{.bespoke-after{-webkit-transform:none;transform:none}}.bespoke-inactive{opacity:0;pointer-events:none}@media print{.bespoke-inactive{opacity:1}}.bespoke-active{opacity:1}.bespoke-bullet{-webkit-transition:all .3s ease;transition:all .3s ease}@media print{.bespoke-bullet{-webkit-transition:none;transition:none}}.bespoke-bullet-inactive{opacity:0}li.bespoke-bullet-inactive{-webkit-transform:translateX(16px);transform:translateX(16px)}@media print{li.bespoke-bullet-inactive{-webkit-transform:none;transform:none}}@media print{.bespoke-bullet-inactive{opacity:1}}.bespoke-bullet-active{opacity:1}.bespoke-scale-parent{-webkit-perspective:600px;perspective:600px;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}@media print{.bespoke-scale-parent{-webkit-transform:none!important;transform:none!important}}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:2px}@media only screen and (min-width:1366px){.bespoke-progress-parent{height:4px}}@media print{.bespoke-progress-parent{display:none}}.bespoke-progress-bar{-webkit-transition:width .6s ease;transition:width .6s ease;position:absolute;height:100%;background:#0089f3;border-radius:0 4px 4px 0}.emphatic{background:#eaeaea}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:opacity .6s ease;transition:opacity .6s ease;opacity:0;z-index:-1}.bespoke-backdrop-active{opacity:1}pre{padding:26px!important;border-radius:8px}body{font-family:helvetica,arial,sans-serif;font-size:18px;color:#404040}h1{font-size:72px;line-height:82px;letter-spacing:-2px;margin-bottom:16px}h2{font-size:42px;letter-spacing:-1px;margin-bottom:8px}h3{font-size:24px;font-weight:400;margin-bottom:24px;color:#606060}hr{visibility:hidden;height:20px}ul{list-style:none}li{margin-bottom:12px}p{margin:0 100px 12px;line-height:22px}a{color:#0089f3;text-decoration:none}";return a(e,{prepend:!0}),function(e){n()(e);var t=function(e){var t=document.createElement("div");t.className="bespoke-theme-cube-slide-parent",e.parentNode.insertBefore(t,e),t.appendChild(e)};e.slides.forEach(t)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},a=function(a,i){var r=e.slides[e.slide()],o=i-e.slide(),s=o>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,a)),a!==r&&["inactive",s,s+"-"+Math.abs(o)].map(t.bind(null,a))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(i){e.slides.map(a),t(i.slide,"active"),n(i.slide,"inactive")})}}},{}],3:[function(e,t){var n={};t.exports=function(e,t){if(!n[e]){n[e]=!0;var a=document.createElement("style");a.setAttribute("type","text/css"),"textContent"in a?a.textContent=e:a.styleSheet.cssText=e;var i=document.getElementsByTagName("head")[0];t&&t.prepend?i.insertBefore(a,i.childNodes[0]):i.appendChild(a)}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t){t.exports=function(e){return function(t){var n,a,i="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+i],a=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),a=e.touches[0]["page"+i]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(a)>50&&t[a>0?"prev":"next"]()})}}},{}],11:[function(e,t){var n=function(e,t){var n=1===e.nodeType?e:document.querySelector(e),a=[].filter.call(n.children,function(e){return"SCRIPT"!==e.nodeName}),i=a[0],r={},o=function(e,t){a[e]&&(p("deactivate",u(i,t)),i=a[e],p("activate",u(i,t)))},s=function(e,t){return arguments.length?(p("slide",u(a[e],t))&&o(e,t),void 0):a.indexOf(i)},l=function(e,t){var n=a.indexOf(i)+e;p(e>0?"next":"prev",u(i,t))&&o(n,t)},c=function(e,t){return(r[e]||(r[e]=[])).push(t),function(){r[e]=r[e].filter(function(e){return e!==t})}},p=function(e,t){return(r[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},u=function(e,t){return t=t||{},t.index=a.indexOf(e),t.slide=e,t},f={on:c,fire:p,slide:s,next:l.bind(null,1),prev:l.bind(null,-1),parent:n,slides:a};return(t||[]).forEach(function(e){e(f)}),o(0),f};t.exports={from:n}},{}],12:[function(e){var t=e("bespoke"),n=e("bespoke-theme-cube"),a=e("bespoke-keys"),i=e("bespoke-touch"),r=e("bespoke-bullets"),o=e("bespoke-backdrop"),s=(e("bespoke-scale"),e("bespoke-hash")),l=e("bespoke-progress"),c=e("bespoke-forms");t.from("article",[n(),a(),i(),r("li, .bullet"),o(),s(),l(),c()]),e("./../../bower_components/prism/prism.js")},{"./../../bower_components/prism/prism.js":1,bespoke:11,"bespoke-backdrop":2,"bespoke-bullets":3,"bespoke-forms":4,"bespoke-hash":5,"bespoke-keys":6,"bespoke-progress":7,"bespoke-scale":8,"bespoke-theme-cube":9,"bespoke-touch":10}]},{},[12]);