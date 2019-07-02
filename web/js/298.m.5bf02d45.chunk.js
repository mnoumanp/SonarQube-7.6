(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{1649:function(e,t,n){"use strict";n.r(t);var o=n(352),r=n(358),a=n(369),l=n.n(a),i=n(712),c=n(658),s=n(420),u=n(0);function p({severity:e}){return o.createElement("div",{className:"nowrap"},Object(u.l)("quality_profiles.severity_set_to")," ",o.createElement(s.a,{severity:e}))}function d({name:e,value:t}){return o.createElement("div",{className:"quality-profile-changelog-parameter"},null==t?Object(u.m)("quality_profiles.changelog.parameter_reset_to_default_value",e):Object(u.m)("quality_profiles.parameter_set_to",e,t))}function h({changes:e}){return o.createElement("ul",null,Object.keys(e).map(t=>o.createElement("li",{key:t},"severity"===t?(t=>{const n=e[t];return n?o.createElement(p,{severity:n}):null})(t):o.createElement(d,{name:t,value:e[t]}))))}var m=n(401),b=n(360),f=n(10);function g(e){let t=!1;const n=l()(e.events,e=>-Number(c(Object(f.f)(e.date))),e=>e.action),a=n.map((a,l)=>{const c=l>0?n[l-1]:null,s=null!=c&&i(Object(f.f)(c.date),Object(f.f)(a.date)),p=null!=c&&s&&c.authorName===a.authorName&&c.action===a.action;p||(t=!t);const d="js-profile-changelog-event "+(t?"even":"odd");return o.createElement("tr",{className:d,key:l},o.createElement("td",{className:"thin nowrap"},!p&&o.createElement(m.a,{date:a.date})),o.createElement("td",{className:"thin nowrap"},!p&&(a.authorName?o.createElement("span",null,a.authorName):o.createElement("span",{className:"note"},"System"))),o.createElement("td",{className:"thin nowrap"},!p&&Object(u.l)("quality_profiles.changelog",a.action)),o.createElement("td",{className:"quality-profile-changelog-rule-cell"},o.createElement(r.Link,{to:Object(b.C)({rule_key:a.ruleKey},e.organization)},a.ruleName)),o.createElement("td",null,a.params&&o.createElement(h,{changes:a.params})))});return o.createElement("table",{className:"data zebra-hover"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",{className:"thin nowrap"},Object(u.l)("date")),o.createElement("th",{className:"thin nowrap"},Object(u.l)("user")),o.createElement("th",{className:"thin nowrap"},Object(u.l)("action")),o.createElement("th",null,Object(u.l)("rule")),o.createElement("th",null,Object(u.l)("parameters")))),o.createElement("tbody",null,a))}var v=n(602),S=n(354);class x extends o.PureComponent{render(){return o.createElement("div",{className:"display-inline-block",id:"quality-profile-changelog-form"},o.createElement(v.a,{onChange:this.props.onDateRangeChange,value:this.props.dateRange}),o.createElement(S.a,{className:"spacer-left vertical-top",onClick:this.props.onReset},Object(u.l)("reset_verb")))}}function y(){return o.createElement("div",{className:"big-spacer-top"},Object(u.l)("no_results"))}var j=n(395),w=n(455);t.default=Object(r.withRouter)(class extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0},this.handleDateRangeChange=(({from:e,to:t})=>{const n=Object(w.a)(this.props.profile.name,this.props.profile.language,this.props.organization,{since:e&&Object(f.i)(e),to:t&&Object(f.i)(t)});this.props.router.push(n)}),this.handleReset=(()=>{const e=Object(w.a)(this.props.profile.name,this.props.profile.language,this.props.organization);this.props.router.push(e)})}componentDidMount(){this.mounted=!0,this.loadChangelog()}componentDidUpdate(e){e.location!==this.props.location&&this.loadChangelog()}componentWillUnmount(){this.mounted=!1}loadChangelog(){this.setState({loading:!0});const e=this.props.location.query,t={profileKey:this.props.profile.key};e.since&&(t.since=e.since),e.to&&(t.to=e.to),Object(j.p)(t).then(e=>{this.mounted&&this.setState({events:e.events,total:e.total,page:e.p,loading:!1})})}loadMore(e){if(e.preventDefault(),e.currentTarget.blur(),null!=this.state.page){this.setState({loading:!0});const e=this.props.location.query,t={profileKey:this.props.profile.key,p:this.state.page+1};e.since&&(t.since=e.since),e.to&&(t.to=e.to),Object(j.p)(t).then(e=>{this.mounted&&this.state.events&&this.setState({events:[...this.state.events,...e.events],total:e.total,page:e.p,loading:!1})})}}render(){const e=this.props.location.query,t=null!=this.state.events&&null!=this.state.total&&this.state.events.length<this.state.total;return o.createElement("div",{className:"boxed-group boxed-group-inner js-profile-changelog"},o.createElement("header",{className:"spacer-bottom"},o.createElement(x,{dateRange:{from:e.since?Object(f.f)(e.since):void 0,to:e.to?Object(f.f)(e.to):void 0},onDateRangeChange:this.handleDateRangeChange,onReset:this.handleReset}),this.state.loading&&o.createElement("i",{className:"spinner spacer-left"})),null!=this.state.events&&0===this.state.events.length&&o.createElement(y,null),null!=this.state.events&&this.state.events.length>0&&o.createElement(g,{events:this.state.events,organization:this.props.organization}),t&&o.createElement("footer",{className:"text-center spacer-top small"},o.createElement("a",{href:"#",onClick:this.loadMore.bind(this)},Object(u.l)("show_more"))))}})},373:function(e,t,n){"use strict";n.d(t,"c",function(){return m}),n.d(t,"b",function(){return b}),n.d(t,"a",function(){return f});var o=n(352),r=n(359),a=n(392),l=n(354),i=n(367),c=(n(383),function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n});const s=n.e(356).then(n.bind(null,427)),u=Object(i.a)(()=>s),p=Object(i.a)(()=>s.then(e=>({default:e.Creatable}))),d=Object(i.a)(()=>s.then(e=>({default:e.Async})));function h(){return o.createElement(l.b,{className:"button-tiny spacer-left text-middle",color:r.gray60},o.createElement(a.a,{size:12}))}function m(e){var t=e.innerRef,n=c(e,["innerRef"]);const r=u,a=!!n.clearable&&Boolean(n.value);return o.createElement(r,Object.assign({},n,{clearRenderer:h,clearable:a,ref:t}))}function b(e){const t=p;return o.createElement(t,Object.assign({},e,{clearRenderer:h}))}function f(e){return o.createElement(d,Object.assign({},e))}},383:function(e,t,n){var o=n(384);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(356)(o,r);o.locals&&(e.exports=o.locals)},384:function(e,t,n){(e.exports=n(355)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.Select {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n  text-align: left;\n}\n\n.Select,\n.Select div,\n.Select input,\n.Select span {\n  box-sizing: border-box;\n}\n\n.Select.is-disabled > .Select-control {\n  background-color: #ebebeb !important;\n  border-color: #ddd !important;\n}\n\n.Select.is-disabled > .Select-control:hover {\n  box-shadow: none !important;\n}\n\n.Select.is-disabled .Select-arrow-zone {\n  cursor: not-allowed !important;\n  pointer-events: none !important;\n}\n\n.Select.is-disabled .Select-placeholder,\n.Select.is-disabled .Select-value {\n  color: #bbb !important;\n}\n\n.Select-control {\n  position: relative;\n  display: table;\n  width: 100%;\n  height: 24px;\n  line-height: 22px;\n  border: 1px solid #cdcdcd;\n  border-collapse: separate;\n  border-radius: 2px;\n  background-color: #fff;\n  color: #444;\n  cursor: default;\n  outline: none;\n  overflow: hidden;\n}\n\n.is-searchable.is-open > .Select-control {\n  cursor: text;\n}\n\n.is-open > .Select-control {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background: #fff;\n}\n\n.is-open > .Select-control > .Select-arrow {\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px;\n}\n\n.is-searchable.is-focused:not(.is-open) > .Select-control {\n  cursor: text;\n}\n\n.is-focused:not(.is-open) > .Select-control {\n  border-color: #4b9fd5;\n}\n\n.Select-placeholder {\n  color: #777;\n}\n\n.Select-placeholder,\n:not(.Select--multi) > .Select-control .Select-value {\n  bottom: 0;\n  left: 0;\n  line-height: 23px;\n  padding-left: 8px;\n  padding-right: 24px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.Select-value [class^='icon-'] {\n  padding-top: 5px;\n}\n\n.Select-value svg,\n.Select-value img {\n  padding-top: 4px;\n}\n\n.Select-value .outline-badge,\n.Select-option .outline-badge {\n  height: 20px;\n  line-height: 19px;\n  margin-top: 1px;\n}\n\n.Select-option svg,\n.Select-option img,\n.Select-option [class^='icon-'] {\n  padding-top: 2px;\n}\n\n.has-value:not(.Select--multi) > .Select-control > .Select-value .Select-value-label,\n.has-value.is-pseudo-focused:not(.Select--multi)\n  > .Select-control\n  > .Select-value\n  .Select-value-label {\n  color: #444;\n}\n\n.has-value:not(.Select--multi) > .Select-control > .Select-value a.Select-value-label,\n.has-value.is-pseudo-focused:not(.Select--multi)\n  > .Select-control\n  > .Select-value\n  a.Select-value-label {\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.has-value:not(.Select--multi) > .Select-control > .Select-value a.Select-value-label:hover,\n.has-value.is-pseudo-focused:not(.Select--multi)\n  > .Select-control\n  > .Select-value\n  a.Select-value-label:hover,\n.has-value:not(.Select--multi) > .Select-control > .Select-value a.Select-value-label:focus,\n.has-value.is-pseudo-focused:not(.Select--multi)\n  > .Select-control\n  > .Select-value\n  a.Select-value-label:focus {\n  color: #007eff;\n  outline: none;\n  text-decoration: underline;\n}\n\n.Select-input {\n  vertical-align: top;\n  height: 22px;\n  padding-left: 8px;\n  padding-right: 8px;\n  outline: none;\n}\n\n.Select-input > input {\n  background: none transparent;\n  border: 0 none;\n  cursor: default;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 12px;\n  height: 22px;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n}\n\n.is-focused .Select-input > input {\n  cursor: text;\n}\n\n.has-value.is-pseudo-focused .Select-input {\n  opacity: 0;\n}\n\n.Select-control:not(.is-searchable) > .Select-input {\n  outline: none;\n}\n\n.Select-loading-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n}\n\n.Select-loading {\n  animation: Select-animation-spin 400ms infinite linear;\n  width: 16px;\n  height: 16px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-right-color: #444;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n\n.Select-clear-zone {\n  animation: Select-animation-fadeIn 200ms;\n  color: #999;\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n  height: 16px;\n  padding-right: 4px;\n}\n\n.Select-clear-zone:hover .Select-clear {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxNCAxNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNDE0MjE7Ij4gICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMjM0Mzc1LDAsMCwwLjAyMzQzNzUsLTUuMDE1NjIsLTUuMDE1NjIpIj4gICAgICAgIDxwYXRoIGQ9Ik04MTAsMjc0TDU3Miw1MTJMODEwLDc1MEw3NTAsODEwTDUxMiw1NzJMMjc0LDgxMEwyMTQsNzUwTDQ1Miw1MTJMMjE0LDI3NEwyNzQsMjE0TDUxMiw0NTJMNzUwLDIxNEw4MTAsMjc0WiIgc3R5bGU9ImZpbGw6cmdiKDIzMSwyMCw1Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+ICAgIDwvZz48L3N2Zz4=);\n}\n\n.Select-clear {\n  display: block;\n  width: 9px;\n  height: 9px;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxNCAxNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNDE0MjE7Ij4gICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMjM0Mzc1LDAsMCwwLjAyMzQzNzUsLTUuMDE1NjIsLTUuMDE1NjIpIj4gICAgICAgIDxwYXRoIGQ9Ik04MTAsMjc0TDU3Miw1MTJMODEwLDc1MEw3NTAsODEwTDUxMiw1NzJMMjc0LDgxMEwyMTQsNzUwTDQ1Miw1MTJMMjE0LDI3NEwyNzQsMjE0TDUxMiw0NTJMNzUwLDIxNEw4MTAsMjc0WiIgc3R5bGU9ImZpbGw6cmdiKDE1MywxNTMsMTUzKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4gICAgPC9nPjwvc3ZnPg==);\n  background-size: 9px 9px;\n  text-indent: -9999px;\n}\n\n.Select--multi .Select-clear-zone {\n  width: 17px;\n}\n\n.Select-arrow-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 20px;\n  padding-right: 5px;\n}\n\n.Select-arrow {\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 4px 4px 2px;\n  display: inline-block;\n  height: 0;\n  width: 0;\n}\n\n.is-open .Select-arrow,\n.Select-arrow-zone:hover > .Select-arrow {\n  border-top-color: #666;\n}\n\n@keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.Select-menu-outer {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top-color: #e6e6e6;\n  box-sizing: border-box;\n  margin-top: -1px;\n  max-height: 200px;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 7500;\n  -webkit-overflow-scrolling: touch;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n}\n\n.Select-menu {\n  max-height: 198px;\n  padding: 5px 0;\n  overflow-y: auto;\n}\n\n.Select-option {\n  display: block;\n  line-height: 20px;\n  padding: 0 8px;\n  box-sizing: border-box;\n  color: #444;\n  font-size: 12px;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.Select-option:last-child {\n  border-bottom-right-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n\n.Select-option.is-focused {\n  background-color: #f3f3f3;\n}\n\n.Select-option.is-disabled {\n  font-weight: 600;\n  cursor: default;\n}\n\n.Select-noresults {\n  box-sizing: border-box;\n  color: #999;\n  cursor: default;\n  display: block;\n  padding: 8px 10px;\n}\n\n.Select--multi .Select-value {\n  background-color: rgba(0, 126, 255, 0.08);\n  border-radius: 2px;\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  color: #444;\n  display: inline-block;\n  font-size: 12px;\n  line-height: 14px;\n  margin: 1px 4px 1px 1px;\n  vertical-align: top;\n}\n\n.Select-value-label {\n  font-size: 12px;\n}\n\n.is-searchable.is-open .Select-value-label {\n  opacity: 0.5;\n}\n\n.Select-big .Select-control {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.Select-big .Select-placeholder {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.Select-big .Select-value-label {\n  display: inline-block;\n  margin-top: 7px;\n  line-height: 16px;\n}\n\n.Select-big .Select-option {\n  padding: 7px 8px;\n  line-height: 16px;\n}\n\n.Select-big img,\n.Select-big svg {\n  padding-top: 0;\n}\n\n.Select--multi .Select-value-icon,\n.Select--multi .Select-value-label {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.Select--multi .Select-value-label {\n  display: inline-block;\n  max-width: 200px;\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  cursor: default;\n  padding: 2px 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.Select--multi a.Select-value-label {\n  color: #007eff;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.Select--multi a.Select-value-label:hover {\n  text-decoration: underline;\n}\n\n.Select--multi .Select-value-icon {\n  cursor: pointer;\n  border-bottom-left-radius: 2px;\n  border-top-left-radius: 2px;\n  border-right: 1px solid rgba(0, 126, 255, 0.24);\n  padding: 1px 5px;\n}\n\n.Select--multi .Select-value-icon:hover,\n.Select--multi .Select-value-icon:focus {\n  background-color: rgba(0, 113, 230, 0.08);\n  color: #0071e6;\n}\n\n.Select--multi .Select-value-icon:active {\n  background-color: rgba(0, 126, 255, 0.24);\n}\n\n.Select--multi.is-disabled .Select-value {\n  background-color: #fcfcfc;\n  border: 1px solid #e3e3e3;\n  color: #444;\n}\n\n.Select--multi.is-disabled .Select-value-icon {\n  cursor: not-allowed;\n  border-right: 1px solid #e3e3e3;\n}\n\n.Select--multi.is-disabled .Select-value-icon:hover,\n.Select--multi.is-disabled .Select-value-icon:focus,\n.Select--multi.is-disabled .Select-value-icon:active {\n  background-color: #fcfcfc;\n}\n\n.Select-aria-only {\n  display: none;\n}\n\n@keyframes Select-animation-spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n",""])},395:function(e,t,n){"use strict";n.d(t,"y",function(){return c}),n.d(t,"s",function(){return s}),n.d(t,"j",function(){return u}),n.d(t,"w",function(){return p}),n.d(t,"r",function(){return d}),n.d(t,"q",function(){return h}),n.d(t,"A",function(){return m}),n.d(t,"v",function(){return b}),n.d(t,"i",function(){return f}),n.d(t,"l",function(){return g}),n.d(t,"g",function(){return v}),n.d(t,"o",function(){return S}),n.d(t,"n",function(){return x}),n.d(t,"p",function(){return y}),n.d(t,"h",function(){return j}),n.d(t,"d",function(){return w}),n.d(t,"m",function(){return O}),n.d(t,"z",function(){return N}),n.d(t,"x",function(){return E}),n.d(t,"c",function(){return M}),n.d(t,"u",function(){return z}),n.d(t,"b",function(){return I}),n.d(t,"t",function(){return C}),n.d(t,"e",function(){return k}),n.d(t,"f",function(){return D}),n.d(t,"a",function(){return T}),n.d(t,"k",function(){return L});var o=n(396),r=n.n(o),a=n(473),l=n(4),i=n(370);function c(e){return Object(l.getJSON)("/api/qualityprofiles/search",e).catch(i.a)}function s(e){return Object(l.getJSON)("/api/qualityprofiles/show",e)}function u(e){return Object(l.request)("/api/qualityprofiles/create").setMethod("post").setData(e).submit().then(l.checkStatus).then(l.parseJSON).catch(i.a)}function p(e){return Object(l.request)("/api/qualityprofiles/restore").setMethod("post").setData(e).submit().then(l.checkStatus).then(l.parseJSON).catch(i.a)}function d(e){return Object(l.getJSON)("/api/qualityprofiles/projects",e).catch(i.a)}function h(e){return Object(l.getJSON)("/api/qualityprofiles/inheritance",{profileKey:e}).catch(i.a)}function m(e){return Object(l.post)("/api/qualityprofiles/set_default",{profileKey:e})}function b(e,t){return Object(l.post)("/api/qualityprofiles/rename",{key:e,name:t}).catch(i.a)}function f(e,t){return Object(l.postJSON)("/api/qualityprofiles/copy",{fromKey:e,toName:t}).catch(i.a)}function g(e){return Object(l.post)("/api/qualityprofiles/delete",{profileKey:e}).catch(i.a)}function v(e,t){return Object(l.post)("/api/qualityprofiles/change_parent",{profileKey:e,parentKey:t}).catch(i.a)}function S(){return Object(l.getJSON)("/api/qualityprofiles/importers").then(e=>e.importers,i.a)}function x(){return Object(l.getJSON)("/api/qualityprofiles/exporters").then(e=>e.exporters)}function y(e){return Object(l.getJSON)("/api/qualityprofiles/changelog",e)}function j(e,t){return Object(l.getJSON)("/api/qualityprofiles/compare",{leftKey:e,rightKey:t})}function w(e,t){return Object(l.post)("/api/qualityprofiles/add_project",{key:e,project:t}).catch(i.a)}function O(e,t){return Object(l.post)("/api/qualityprofiles/remove_project",{key:e,project:t}).catch(i.a)}function N(e){return Object(l.getJSON)("/api/qualityprofiles/search_users",e).catch(i.a)}function E(e){return Object(l.getJSON)("/api/qualityprofiles/search_groups",e).catch(i.a)}function M(e){return Object(l.post)("/api/qualityprofiles/add_user",e).catch(i.a)}function z(e){return Object(l.post)("/api/qualityprofiles/remove_user",e).catch(i.a)}function I(e){return Object(l.post)("/api/qualityprofiles/add_group",e).catch(i.a)}function C(e){return Object(l.post)("/api/qualityprofiles/remove_group",e).catch(i.a)}function k(e){return Object(l.postJSON)("/api/qualityprofiles/activate_rules",e)}function D(e){return Object(l.postJSON)("/api/qualityprofiles/deactivate_rules",e)}function T(e){const t=e.params&&r()(e.params,(e,t)=>`${t}=${Object(a.a)(e)}`).join(";");return Object(l.post)("/api/qualityprofiles/activate_rule",Object.assign({},e,{params:t})).catch(i.a)}function L(e){return Object(l.post)("/api/qualityprofiles/deactivate_rule",e).catch(i.a)}},396:function(e,t,n){var o=n(48),r=n(12),a=n(449),l=n(6);e.exports=function(e,t){return(l(e)?o:a)(e,r(t,3))}},401:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n(352),r=n(347),a=n(10);const l={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};function i({children:e,date:t}){return o.createElement(r.FormattedDate,Object.assign({value:Object(a.f)(t)},l),e)}},420:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n(352),r=n(499),a=n(0);function l({className:e,severity:t}){return t?o.createElement("span",{className:e},o.createElement(r.a,{className:"little-spacer-right",severity:t}),Object(a.l)("severity",t)):null}},473:function(e,t,n){"use strict";function o(e){return`"${e.replace(/"/g,'\\"')}"`}n.d(t,"a",function(){return o})},499:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n(352),r=n(357),a=n(359);const l={blocker:function({className:e,size:t}){return o.createElement(r.a,{className:e,size:t},o.createElement("path",{d:"M8 14c-3.311 0-6-2.689-6-6s2.689-6 6-6 6 2.689 6 6-2.689 6-6 6zM7 9h2V4H7v5zm0 3h2v-2H7v2z",style:{fill:a.red,fillRule:"nonzero"}}))},critical:function({className:e,size:t}){return o.createElement(r.a,{className:e,size:t},o.createElement("path",{d:"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm1 10V7.414l1.893 1.893c.13.124.282.216.457.261a1.006 1.006 0 0 0 1.176-.591 1.01 1.01 0 0 0 .01-.729 1.052 1.052 0 0 0-.229-.355c-1.212-1.212-2.394-2.456-3.638-3.636a1.073 1.073 0 0 0-.169-.123 1.05 1.05 0 0 0-.448-.133h-.104a1.053 1.053 0 0 0-.493.16 1.212 1.212 0 0 0-.162.132C6.08 5.505 4.836 6.687 3.656 7.932a.994.994 0 0 0-.051 1.275c.208.271.548.42.888.389.198-.019.378-.098.535-.218.041-.035.04-.034.079-.071L7 7.414V12h2z",style:{fill:a.red,fillRule:"nonzero"}}))},major:function({className:e,size:t}){return o.createElement(r.a,{className:e,size:t},o.createElement("path",{d:"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm.08 2.903c.071.008.14.019.208.039.138.042.26.114.37.205 1.244 1.146 2.426 2.357 3.639 3.536.1.103.181.218.234.352a1.01 1.01 0 0 1 .001.728 1.002 1.002 0 0 1-1.169.609 1.042 1.042 0 0 1-.46-.255L8 7.295l-2.903 2.822c-.039.036-.039.036-.08.07a1.002 1.002 0 0 1-1.604-.947c.032-.196.122-.37.253-.519C4.847 7.51 6.09 6.362 7.303 5.183c.052-.048.106-.093.167-.131a1.041 1.041 0 0 1 .61-.149z",style:{fill:a.red}}))},minor:function({className:e,size:t}){return o.createElement(r.a,{className:e,size:t},o.createElement("path",{d:"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm1 6.586V4H7v4.586L5.107 6.693a1.178 1.178 0 0 0-.165-.134 1.041 1.041 0 0 0-.662-.152 1 1 0 0 0-.587 1.7c1.212 1.212 2.394 2.456 3.638 3.636.094.08.195.146.311.191a1.008 1.008 0 0 0 1.065-.227c1.213-1.212 2.457-2.394 3.637-3.639a.994.994 0 0 0 .051-1.275 1.012 1.012 0 0 0-.888-.389 1.041 1.041 0 0 0-.535.218c-.04.034-.04.034-.079.071L9 8.586z",style:{fill:a.lightGreen}}))},info:function({className:e,size:t}){return o.createElement(r.a,{className:e,size:t},o.createElement("path",{d:"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm1 5H7v5h2V7zm0-3H7v2h2V4z",style:{fill:a.blue}}))}};function i(e){if(!e.severity)return null;const t=e.severity.toLowerCase(),n=l[t];return n?o.createElement(n,{className:e.className}):null}},602:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n(352),r=n(353),a=n(621),l=n(0);class i extends o.PureComponent{constructor(){super(...arguments),this.handleFromChange=(e=>{this.props.onChange({from:e,to:this.to}),setTimeout(()=>{e&&!this.to&&this.toDateInput&&this.toDateInput.focus()},0)}),this.handleToChange=(e=>{this.setState({to:e}),this.props.onChange({from:this.from,to:e})})}get from(){return this.props.value&&this.props.value.from}get to(){return this.props.value&&this.props.value.to}render(){return o.createElement("div",{className:r("display-inline-flex-center",this.props.className)},o.createElement(a.a,{currentMonth:this.to,"data-test":"from",highlightTo:this.to,maxDate:this.to,onChange:this.handleFromChange,placeholder:Object(l.l)("start_date"),value:this.from}),o.createElement("span",{className:"note little-spacer-left little-spacer-right"},Object(l.l)("to_")),o.createElement(a.a,{currentMonth:this.from,"data-test":"to",highlightFrom:this.from,minDate:this.from,onChange:this.handleToChange,placeholder:Object(l.l)("end_date"),ref:e=>this.toDateInput=e,value:this.to}))}}},658:function(e,t,n){var o=n(2);e.exports=function(e){var t=o(e);return t.setSeconds(0,0),t}},712:function(e,t,n){var o=n(658);e.exports=function(e,t){var n=o(e),r=o(t);return n.getTime()===r.getTime()}}}]);
//# sourceMappingURL=298.m.5bf02d45.chunk.js.map