(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1230:function(t,e,n){"use strict";function r(t){for(var e,n,r=0;r<t.length;r++){if("---"===t[r].trim()){if(void 0!==e){n=r;break}e=r}}return void 0!==n?{firstLine:e,lastLine:n}:void 0}function o(t){for(var e={},n=0;n<t.length;n++){var r=t[n].split(":").map(function(t){return t.trim()});2===r.length&&(e[r[0]]=r[1])}return e}function a(t,e){for(var n="\x3c!-- "+e+" --\x3e",r="\x3c!-- /"+e+" --\x3e",o=t,a=o.indexOf(n),c=o.indexOf(r);-1!==a&&-1!==c;)a=(o=o.substring(0,a)+o.substring(c+r.length)).indexOf(n),c=o.indexOf(r);return o}t.exports={getFrontMatter:function(t){var e=t.split("\n"),n=r(e);return n?o(e.slice(n.firstLine+1,n.lastLine)):{}},separateFrontMatter:function(t){var e=t.split("\n"),n=r(e);if(n){var a=o(e.slice(n.firstLine+1,n.lastLine)),c=e.slice(n.lastLine+1).join("\n");return{frontmatter:a,content:c}}return{frontmatter:{},content:t}},filterContent:function(t){var e="\x3c!-- \\/?(sonarqube|sonarcloud|static) --\x3e",r=n(88),o=r.isSonarCloud,c=r.getInstance,i=a(t.replace(/{instance}/gi,c()),"static");return(o()?a(i,"sonarqube"):a(i,"sonarcloud")).replace(new RegExp("^"+e+"(\n|\r|\r\n|$)","gm"),"").replace(new RegExp(""+e,"g"),"")}}},675:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n(591),o=n(594);function a(t){var e=t.className,n=t.fill,a=void 0===n?"currentColor":n,c=t.size;return r.createElement(o.a,{className:e,size:c},r.createElement("path",{d:"M11.596 8.28l-4.604 4.602a.382.382 0 0 1-.279.118.382.382 0 0 1-.279-.118l-1.03-1.03a.382.382 0 0 1-.117-.278c0-.108.04-.201.117-.28L8.7 8 5.404 4.706a.382.382 0 0 1-.117-.28c0-.108.04-.2.117-.279l1.03-1.03A.382.382 0 0 1 6.714 3c.107 0 .2.04.278.118l4.604 4.603a.382.382 0 0 1 .117.279c0 .108-.04.201-.117.28z",style:{fill:a}}))}},702:function(t,e,n){"use strict";n.r(e);var r,o=n(591),a=n(592),c=n(1097),i=n.n(c),l=n(1231),s=n.n(l),u=n(1103),p=n.n(u),f=n(1795),h=n.n(f),d=n(597),m=n(722),v=n(88),y=n(754),O=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),g=function(){return(g=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},b=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n},w="/#sonarcloud#/",j="/#sonarqube#/",_="/#sonarqube-admin#/",E=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleClickOnAnchor=function(t){var n=e.props,r=n.customProps,o=n.href,a=void 0===o?"#":o;r&&r.onAnchorClick&&r.onAnchorClick(a,t)},e}return O(e,t),e.prototype.render=function(){var t=this.props,e=t.children,n=t.href,r=(t.customProps,b(t,["children","href","customProps"]));if(n&&n.startsWith("#"))return o.createElement("a",{href:"#",onClick:this.handleClickOnAnchor},e);if(n&&n.startsWith("/")){if(n.startsWith(w))return o.createElement(k,{url:n},e);if(n.startsWith(j))return o.createElement(C,{url:n},e);if(n.startsWith(_))return o.createElement(x,{canAdmin:this.props.appState.canAdmin,url:n},e);var a="/documentation"+n;return o.createElement(d.Link,g({to:a},r),e)}return o.createElement(o.Fragment,null,o.createElement("a",g({href:n,rel:"noopener noreferrer",target:"_blank"},r),e),o.createElement(m.a,{className:"text-muted little-spacer-left little-spacer-right vertical-baseline",size:12}))},e}(o.PureComponent),P=Object(y.a)(E);function k(t){var e=t.children,n=t.url;if(Object(v.isSonarCloud)()){var r="/"+n.substr(w.length);return o.createElement(d.Link,{to:r},e)}return o.createElement(o.Fragment,null,e)}function C(t){var e=t.children,n=t.url;if(Object(v.isSonarCloud)())return o.createElement(o.Fragment,null,e);var r="/"+n.substr(j.length);return o.createElement(d.Link,{target:"_blank",to:r},e)}function x(t){var e=t.canAdmin,n=t.children,r=t.url;if(Object(v.isSonarCloud)()||!e)return o.createElement(o.Fragment,null,n);var a="/"+r.substr(_.length);return o.createElement(d.Link,{target:"_blank",to:a},n)}var A=n(599),N=function(){return(N=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},S=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n};function L(t){var e=t.alt,n=t.src,r=S(t,["alt","src"]);return o.createElement("img",N({alt:e,className:"max-width-100",src:Object(A.b)()+"/images/embed-doc"+n},r))}var z=n(90),D=n.n(z),F=n(652),H=n.n(F),M=n(745),W=n(1243),q=n.n(W);function T(){return this.use(p.a),function(t){var e=q()(t,{heading:"toc|table[ -]of[ -]contents?",maxDepth:2});null!==e.index&&-1!==e.index&&e.map?t.children=[e.map]:t.children=[]}}var R=n(17),I=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),J=function(t){function e(e){var n=t.call(this,e)||this;return n.node=null,n.state={anchors:[]},n.scrollHandler=function(){var t=Object(M.findDOMNode)(n);if(t&&t.parentNode){for(var e,r=t.parentNode.querySelectorAll("h2[id]"),o=window.pageYOffset||document.body.scrollTop,a=0,c=r.length;a<c&&!(r.item(a).offsetTop>o+120);a++)e="#"+r.item(a).id;n.setState({highlightAnchor:e})}},n.debouncedScrollHandler=H()(n.scrollHandler),n}return I(e,t),e.getDerivedStateFromProps=function(t){var n=t.content;return{anchors:e.getAnchors(n)}},e.prototype.componentDidMount=function(){window.addEventListener("scroll",this.debouncedScrollHandler,!0),this.scrollHandler()},e.prototype.componentWillUnmount=function(){window.removeEventListener("scroll",this.debouncedScrollHandler,!0)},e.prototype.render=function(){var t=this,e=this.state,n=e.anchors,r=e.highlightAnchor;return 0===n.length?null:o.createElement("div",{className:"markdown-toc"},o.createElement("div",{className:"markdown-toc-content"},o.createElement("h4",null,Object(R.l)("documentation.on_this_page")),n.map(function(e){return o.createElement("a",{className:a({active:r===e.href}),href:e.href,key:e.title,onClick:function(n){t.props.onAnchorClick(e.href,n)}},e.title)})))},e.getAnchors=D()(function(t){var e=i()().use(s.a).use(T).processSync(t);if(e&&e.contents.props.children){for(var n=e.contents,r=10;r&&n.props.children.length&&"ul"!==n.type;)n=n.props.children[0],r--;if("ul"===n.type&&n.props.children.length)return n.props.children.map(function(t){if("string"==typeof t)return null;var e=t.props.children[0];return{href:e.props.href,title:e.props.children[0]}}).filter(function(t){return t})}return[]}),e}(o.PureComponent),U=n(1094),Y=n.n(U),$=function(){return($=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},B=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n},G="/#sonarcloud#/";function K(t){var e=t.children,n=t.customProps,r=t.href,a=B(t,["children","customProps","href"]);return n&&Y()(n,function(t,e){r&&(r=r.replace("#"+e+"#",encodeURIComponent(t)))}),r&&r.startsWith("/")?(r=r.startsWith(G)?"/"+r.substr(G.length):"/documentation/"+r.substr(1),o.createElement(d.Link,$({rel:"noopener noreferrer",target:"_blank",to:r},a),e)):o.createElement(o.Fragment,null,o.createElement("a",$({href:r,rel:"noopener noreferrer",target:"_blank"},a),e),o.createElement(m.a,{className:"little-spacer-left little-spacer-right vertical-baseline",size:12}))}var Q="toc|table[ -]of[ -]contents?";function V(t){var e=t||{},n=e.heading||Q,r=e.maxDepth||6,o=e.tight;return this.use(p.a),function(t){var e=q()(t,{heading:n,maxDepth:r,tight:o});if(null===e.index||-1===e.index||!e.map)return;t.children=[].concat(t.children.slice(0,e.index),e.map,t.children.slice(e.index))}}var X=n(743),Z=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),tt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={open:!1},e.handleClick=function(t){e.setState(function(t){return{open:!t.open}}),t.stopPropagation(),t.preventDefault()},e}return Z(e,t),e.prototype.renderTitle=function(t){return o.createElement("a",{"aria-expanded":this.state.open,"aria-haspopup":!0,className:"link-no-underline",href:"#",onClick:this.handleClick},o.createElement(X.a,{className:"vertical-middle little-spacer-right",open:this.state.open}),t.props?t.props.children:t)},e.prototype.render=function(){var t=o.Children.toArray(this.props.children);if(t.length<1)return null;var e=o.Children.toArray(t[0].props.children);return e.length<2?null:o.createElement("div",{className:"collapse-container"},this.renderTitle(e[0]),this.state.open&&e.slice(1))},e}(o.PureComponent),et=n(1230),nt=n(733),rt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ot=function(){return(ot=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},at=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.node=null,e.handleAnchorClick=function(t,n){if(e.node){var r=e.node.querySelector(t);r&&(n.preventDefault(),Object(nt.a)(r,{bottomOffset:window.innerHeight-80}),history.pushState&&history.pushState(null,"",t))}},e}return rt(e,t),e.prototype.render=function(){var t=this,e=this.props,n=e.childProps,r=e.content,c=e.className,l=e.displayH1,u=e.stickyToc,f=e.isTooltip,d=Object(et.separateFrontMatter)(r||""),m=Object(et.filterContent)(d.content),v=m,y=i()();return y.use(h.a,{danger:{classes:"alert alert-danger"},warning:{classes:"alert alert-warning"},info:{classes:"alert alert-info"},success:{classes:"alert alert-success"},collapse:{classes:"collapse"}}).use(s.a,{remarkReactComponents:{div:it,a:f?ct(K,n):ct(P,{onAnchorClick:this.handleAnchorClick}),img:L},toHast:{},sanitize:!1}).use(p.a),u?m=m.replace(/#*\s*(toc|table[ -]of[ -]contents?).*/i,""):y.use(V,{maxDepth:3}),o.createElement("div",{className:a("markdown",c,{"has-toc":u}),ref:function(e){return t.node=e}},o.createElement("div",{className:"markdown-content"},l&&o.createElement("h1",{className:"documentation-title"},d.frontmatter.title),y.processSync(m).contents),u&&o.createElement(J,{content:v,onAnchorClick:this.handleAnchorClick}))},e}(o.PureComponent);e.default=at;function ct(t,e){return function(n){return o.createElement(t,ot({customProps:e},n))}}function it(t){return t.className?t.className.includes("collapse")?o.createElement(tt,null,t.children):o.createElement("div",{className:a("cut-margins",t.className)},t.children):t.children}},722:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n(591),o=n(594);function a(t){var e=t.className,n=t.fill,a=void 0===n?"currentColor":n,c=t.size;return r.createElement(o.a,{className:e,size:c},r.createElement("path",{d:"M12 9.25v2.5A2.25 2.25 0 0 1 9.75 14h-6.5A2.25 2.25 0 0 1 1 11.75v-6.5A2.25 2.25 0 0 1 3.25 3h5.5c.14 0 .25.11.25.25v.5c0 .14-.11.25-.25.25h-5.5C2.562 4 2 4.563 2 5.25v6.5c0 .688.563 1.25 1.25 1.25h6.5c.688 0 1.25-.563 1.25-1.25v-2.5c0-.14.11-.25.25-.25h.5c.14 0 .25.11.25.25zm3-6.75v4c0 .273-.227.5-.5.5a.497.497 0 0 1-.352-.148l-1.375-1.375L7.68 10.57a.27.27 0 0 1-.18.078.27.27 0 0 1-.18-.078l-.89-.89a.27.27 0 0 1-.078-.18.27.27 0 0 1 .078-.18l5.093-5.093-1.375-1.375A.497.497 0 0 1 10 2.5c0-.273.227-.5.5-.5h4c.273 0 .5.227.5.5z",style:{fill:a}}))}},743:function(t,e,n){"use strict";var r=n(591),o=n(594);function a(t){var e=t.className,n=t.fill,a=void 0===n?"currentColor":n,c=t.size;return r.createElement(o.a,{className:e,size:c},r.createElement("path",{d:"M7.72 11.596L3.119 6.992A.382.382 0 0 1 3 6.713c0-.108.04-.2.118-.279l1.03-1.03a.382.382 0 0 1 .278-.117c.108 0 .201.04.28.117L8 8.7l3.294-3.295a.382.382 0 0 1 .28-.117c.108 0 .2.04.279.117l1.03 1.03a.382.382 0 0 1 .117.28c0 .107-.04.2-.118.278L8.28 11.596a.382.382 0 0 1-.279.117.382.382 0 0 1-.28-.117z",style:{fill:a}}))}var c=n(675);n.d(e,"a",function(){return s});var i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n};function s(t){var e=t.open,n=l(t,["open"]);return e?r.createElement(a,i({},n)):r.createElement(c.a,i({},n))}},754:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r,o=n(591),a=n(600),c=n(603),i=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(){return(l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function s(t){var e=t.displayName||t.name||"Component",n=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return i(r,n),r.prototype.render=function(){return o.createElement(t,l({},this.props))},r.displayName="withAppState("+e+")",r}(o.Component);return Object(a.connect)(function(t){return{appState:Object(c.getAppState)(t)}})(n)}}}]);
//# sourceMappingURL=10.1548064679481.chunk.js.map