(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{1019:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(591),o=n(592);n(1020);function a(e){var t=e.className,n=e.color,a=e.size;return r.createElement("i",{className:o("status-indicator",n,{"small-status-indicator":"small"===a,"big-status-indicator":"big"===a},t)})}},1020:function(e,t,n){var r=n(1021);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(596)(r,o);r.locals&&(e.exports=r.locals)},1021:function(e,t,n){(e.exports=n(595)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.status-indicator {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 16px;\n  height: 16px;\n  border-radius: 16px;\n  margin: 4px;\n}\n\n.status-indicator.small-status-indicator {\n  width: 8px;\n  height: 8px;\n  border-radius: 8px;\n  margin: 8px;\n}\n\n.status-indicator.big-status-indicator {\n  width: 24px;\n  height: 24px;\n  border-radius: 24px;\n  margin: 0;\n}\n\n.status-indicator.red {\n  position: relative;\n  z-index: 2;\n  background-color: #d4333f;\n}\n\n.status-indicator.red::after {\n  position: absolute;\n  z-index: 3;\n  display: block;\n  width: 6px;\n  height: 2px;\n  top: 3px;\n  left: 1px;\n  background-color: #fff;\n  content: '';\n}\n\n.status-indicator.yellow {\n  background-color: #eabe06;\n}\n\n.status-indicator.green {\n  background-color: #00aa00;\n}\n\n.status-indicator.orange {\n  background-color: #ed7d20;\n}\n\n.status-indicator.gray {\n  background-color: #b4b4b4;\n}\n",""])},1028:function(e,t,n){"use strict";var r,o=n(591),a=n(592),s=n(737),i=n(605),l=n(593),c=n(17),u=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={restarting:!1},t.handleFormSubmit=function(e){e.preventDefault(),t.state.restarting||(t.setState({restarting:!0}),Object(s.g)().then(function(){return document.location&&document.location.reload()},function(){return t.setState({restarting:!1})}))},t}return u(t,e),t.prototype.render=function(){var e=this.state.restarting,t=Object(c.l)("system.restart_server");return o.createElement(i.a,{contentLabel:t,onRequestClose:e?void 0:this.props.onClose},o.createElement("form",{id:"restart-form",onSubmit:this.handleFormSubmit},o.createElement("div",{className:"modal-head"},o.createElement("h2",null,t)),o.createElement("div",{className:"modal-body"},o.createElement("p",{className:a("spacer-top spacer-bottom",{"text-center":e})},Object(c.l)(e?"system.is_restarting":"system.are_you_sure_to_restart")),e&&o.createElement("p",{className:"big-spacer-top spacer-bottom text-center"},o.createElement("i",{className:"spinner"}))),!e&&o.createElement("div",{className:"modal-foot"},o.createElement(l.f,{id:"restart-server-submit"},Object(c.l)("restart")),o.createElement(l.e,{className:"js-modal-close",id:"restart-server-cancel",onClick:this.props.onClose},Object(c.l)("cancel")))))},t}(o.PureComponent);t.a=p},1092:function(e,t,n){"use strict";var r,o=n(591),a=n(592),s=n(743),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hoveringInner:!1},t.handleClick=function(){t.props.onClick(t.props.data)},t.onDetailEnter=function(){t.setState({hoveringInner:!0})},t.onDetailLeave=function(){t.setState({hoveringInner:!1})},t}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.open,r=e.renderHeader,i=e.title;return o.createElement("div",{className:a("boxed-group boxed-group-accordion",t,{"no-hover":this.state.hoveringInner})},o.createElement("div",{className:"boxed-group-header",onClick:this.handleClick,role:"listitem"},o.createElement("span",{className:"boxed-group-accordion-title"},o.createElement(s.a,{className:"little-spacer-right",open:n}),i),r&&r()),n&&o.createElement("div",{className:"boxed-group-inner",onMouseEnter:this.onDetailEnter,onMouseLeave:this.onDetailLeave},this.props.children))},t}(o.PureComponent);t.a=l},1094:function(e,t,n){var r=n(1095),o=n(885),a=n(1096),s=n(47);e.exports=function(e,t){return(s(e)?r:o)(e,a(t))}},1095:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}},1096:function(e,t){e.exports=function(e){return e}},1638:function(e,t,n){e.exports=n(1094)},1639:function(e,t,n){var r=n(1640);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(596)(r,o);r.locals&&(e.exports=r.locals)},1640:function(e,t,n){(e.exports=n(595)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.system-info-health-title {\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n\n.system-info-health-info {\n  margin-top: -12px;\n}\n\n.system-info-health-info .status-indicator {\n  position: relative;\n  top: 8px;\n}\n\n.system-info-health-info.no-margin .status-indicator {\n  margin: 0;\n}\n\n.system-info-section ~ .system-info-section {\n  margin-top: 16px;\n}\n\n.system-info-section-item-name {\n  width: 25vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.system-upgrade-version {\n  padding: 8px;\n}\n\n.system-upgrade-version ~ .system-upgrade-version {\n  margin-top: 10px;\n  padding-top: 18px;\n  border-top: solid 1px #e6e6e6;\n}\n\n.system-upgrade-intermediate {\n  padding: 6px 10px;\n}\n",""])},1870:function(e,t,n){"use strict";n.r(t);var r=n(591),o=n(597),a=n(607),s=n.n(a),i=n(608),l=n.n(i),c=n(633),u=n.n(c),p=n(592),m=n(737),f=n(611);function d(e){var t=e.className,n=e.health,o=e.healthCause;return r.createElement(f.a,{className:p("boxed-group-accordion-alert",t),display:"inline",variant:n===m.a.RED?"error":"warning"},o)}var h=n(1019),g=n(601),y=n(17);function v(e){var t=e.biggerHealth,n=e.className,o=e.name,a=e.health,s=e.healthCauses,i=s&&s.length>0&&a!==m.a.GREEN,l=r.createElement(h.a,{color:a.toLowerCase(),size:t?"big":void 0});return r.createElement("div",{className:p("system-info-health-info",n)},i&&s.map(function(e,t){return r.createElement(d,{className:"spacer-right",health:a,healthCause:e,key:t})}),o?r.createElement(g.a,{overlay:Object(y.m)("system.current_health_of_x",o)},r.createElement("span",null,l)):l)}var b=n(769),E=n(732),O=n(159),_=n.n(O),S=n(93),N=n.n(S),C=n(704),w=n.n(C),L=n(90),j=n.n(L),x=n(666),k=n.n(x),P=n(1638),F=n.n(P),I=n(683),A=n(602);function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var D=function(){return(D=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},R=["INFO","DEBUG","TRACE"],T="High Availability",M="Health",W="Health Causes",G="Plugins",q="Settings";function H(e){return w()(e,[M,W,"Name",G,q])}function z(e){return e[M]}function Y(e){return e[W]}function J(e){return e?e["Web Logging"]||e["Compute Engine Logging"]?l()([J(e["Web Logging"]),J(e["Compute Engine Logging"])],function(e){return R.indexOf(e)})[1]:e.System?J(e.System):e["Logs Level"]||R[0]:R[0]}function B(e){return e["Application Nodes"]}function Q(e){return void 0!==e&&e.System&&!0===e.System[T]}function V(e){return e&&e.System["Server ID"]}function K(e){var t=R[0];if(!e)return t;if(Q(e)){var n=l()(B(e).map(J),function(e){return R.indexOf(e)});return n.length>0?n[n.length-1]:t}return J(e)}function X(e){return e.Name}function Z(e){var t={},n=e.Statistics;return n&&(t["Lines of Code"]=Object(A.formatMeasure)(n.ncloc,"INT")),D({},e.System,t)}function $(e){return D({},Z(e),w()(e,["Application Nodes",G,"Search Nodes",q,"Statistics","System"]))}function ee(e){return D({},Z(e),N()(e,function(e,t){return null==e||[G,q,"Statistics","System"].includes(t)||t.startsWith("Compute Engine")||t.startsWith("Search")||t.startsWith("Web")}))}var te=j()(function(e){return{expandedCards:Object(I.b)(e.expand,I.g)}}),ne=j()(function(e){return Object(I.a)({expand:Object(I.m)(e.expandedCards)})});function re(e){return l()(e,[function(e){return-Number(e.version.split(".")[0])},function(e){return-Number(e.version.split(".")[1]||0)},function(e){return-Number(e.version.split(".")[2]||0)}])}function oe(e){var t=k()(e,function(e){return e.version.split(".")[0]});return l()(Object.keys(t),function(e){return-Number(e)}).map(function(e){return t[e]})}function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e){var t=e.name,n=e.value;if(t===M||"State"===t)return r.createElement(v,{className:"no-margin",health:n});if(n instanceof Array)return r.createElement("code",null,JSON.stringify(n));switch(ae(n)){case"boolean":return r.createElement(ie,{value:n});case"object":return r.createElement(le,{value:n});default:return r.createElement("code",null,n)}}function ie(e){return e.value?r.createElement(E.a,null):r.createElement(b.a,null)}function le(e){var t=e.value;return r.createElement("table",{className:"data"},r.createElement("tbody",null,u()(t,function(e,t){return r.createElement("tr",{key:t},r.createElement("td",{className:"thin nowrap"},t),r.createElement("td",null,r.createElement(se,{name:t,value:e})))})))}function ce(e){var t=e.name,n=e.items;return r.createElement("div",{className:"system-info-section"},t&&r.createElement("h4",{className:"spacer-bottom"},t),r.createElement("table",{className:"data zebra",id:t},r.createElement("tbody",null,u()(n,function(e,t){return r.createElement("tr",{key:t},r.createElement("td",{className:"thin"},r.createElement("div",{className:"system-info-section-item-name"},t)),r.createElement("td",{style:{wordBreak:"break-all"}},r.createElement(se,{name:t,value:e})))}))))}var ue=n(1092);function pe(e){var t=e.biggerHealth,n=e.health,o=e.healthCauses,a=e.onClick,s=e.open,i=e.name,l=e.sysInfoData,c=function(e){var t={},n={};return F()(e,function(e,r){"object"!==U(e)||e instanceof Array?t[r]=e:n[r]=e}),{mainSection:t,sections:n}}(l),p=c.mainSection,m=c.sections,d=s&&p&&Object.keys(p).length>0,h=s&&m,g=J(l),b=g&&g!==R[0];return r.createElement(ue.a,{data:i,onClick:a,open:s,renderHeader:function(){return r.createElement(r.Fragment,null,b&&r.createElement(f.a,{className:"boxed-group-accordion-alert spacer-left",display:"inline",variant:"warning"},Object(y.l)("system.log_level.warning.short")),n&&r.createElement(v,{biggerHealth:t,className:"pull-right",health:n,healthCauses:o,name:i}))},title:i},d&&r.createElement(ce,{items:p}),h&&u()(m,function(e,t){return r.createElement(ce,{items:e,key:t,name:t})}))}function me(e){var t=e.expandedCards,n=e.sysInfoData,o=e.toggleCard;return r.createElement(r.Fragment,null,r.createElement(pe,{biggerHealth:!0,health:z(n),healthCauses:Y(n),name:"System",onClick:o,open:t.includes("System"),sysInfoData:H($(n))}),r.createElement("li",{className:"note system-info-health-title"},Object(y.l)("system.application_nodes_title")),l()(B(n),X).map(function(e){return r.createElement(pe,{health:z(e),healthCauses:Y(e),key:X(e),name:X(e),onClick:o,open:t.includes(X(e)),sysInfoData:H(e)})}),r.createElement("li",{className:"note system-info-health-title"},Object(y.l)("system.search_nodes_title")),l()(function(e){return e["Search Nodes"]}(n),X).map(function(e){return r.createElement(pe,{health:z(e),healthCauses:Y(e),key:X(e),name:X(e),onClick:o,open:t.includes(X(e)),sysInfoData:H(e)})}))}var fe,de=n(605),he=n(593),ge=(fe=function(e,t){return(fe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}fe(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),ye=function(e){function t(t){var n=e.call(this,t)||this;return n.handleFormSubmit=function(e){e.preventDefault();var t=n.state.newLevel;n.state.updating||(n.setState({updating:!0}),Object(m.h)(t).then(function(){return n.props.onChange(t)},function(){return n.setState({updating:!1})}))},n.handleLevelChange=function(e){return n.setState({newLevel:e.currentTarget.value})},n.state={newLevel:t.logLevel,updating:!1},n}return ge(t,e),t.prototype.render=function(){var e=this,t=this.state,n=t.updating,o=t.newLevel,a=Object(y.l)("system.set_log_level");return r.createElement(de.a,{contentLabel:a,onRequestClose:this.props.onClose},r.createElement("form",{id:"set-log-level-form",onSubmit:this.handleFormSubmit},r.createElement("div",{className:"modal-head"},r.createElement("h2",null,a)),r.createElement("div",{className:"modal-body"},R.map(function(t){return r.createElement("p",{className:"spacer-bottom",key:t},r.createElement("input",{checked:t===o,className:"spacer-right text-middle",id:"loglevel-"+t,name:"system.log_levels",onChange:e.handleLevelChange,type:"radio",value:t}),r.createElement("label",{className:"text-middle",htmlFor:"loglevel-"+t},t))}),r.createElement(f.a,{className:"spacer-top",variant:"info"},this.props.infoMsg),"INFO"!==o&&r.createElement(f.a,{className:"spacer-top",variant:"warning"},Object(y.l)("system.log_level.warning"))),r.createElement("div",{className:"modal-foot"},n&&r.createElement("i",{className:"spinner spacer-right"}),r.createElement(he.f,{disabled:n,id:"set-log-level-submit"},Object(y.l)("save")),r.createElement(he.e,{id:"set-log-level-cancel",onClick:this.props.onClose},Object(y.l)("cancel")))))},t}(r.PureComponent),ve=n(1028),be=n(613),Ee=n(599),Oe=n(618),_e=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Se=function(e){function t(t){var n=e.call(this,t)||this;return n.handleLogsLevelOpen=function(){n.setState({openLogsLevelForm:!0})},n.handleLogsLevelChange=function(e){n.setState({logLevel:e}),n.props.onLogLevelChange(),n.handleLogsLevelClose()},n.handleLogsLevelClose=function(){n.setState({openLogsLevelForm:!1})},n.handleServerRestartOpen=function(){n.setState({openRestartForm:!0})},n.handleServerRestartClose=function(){n.setState({openRestartForm:!1})},n.removeElementFocus=function(e){e.currentTarget.blur()},n.state={logLevel:t.logLevel,openLogsLevelForm:!1,openRestartForm:!1},n}return _e(t,e),t.prototype.componentWillReceiveProps=function(e){e.logLevel!==this.state.logLevel&&this.setState({logLevel:e.logLevel})},t.prototype.render=function(){var e,t,n=Object(Ee.b)()+"/api/system/info",o=Object(Ee.b)()+"/api/system/logs";return r.createElement("div",{className:"page-actions"},r.createElement("span",null,r.createElement("span",{className:"text-middle"},Object(y.l)("system.logs_level"),":",r.createElement("strong",{className:"little-spacer-left"},this.state.logLevel)),r.createElement(he.d,{className:"spacer-left button-small",id:"edit-logs-level-button",onClick:this.handleLogsLevelOpen})),this.props.canDownloadLogs&&r.createElement(be.b,{className:"display-inline-block spacer-left",overlay:r.createElement("ul",{className:"menu"},r.createElement("li",null,r.createElement("a",{download:"sonarqube_app.log",href:o+"?process=app",id:"logs-link",target:"_blank"},"Main Process")),r.createElement("li",null,r.createElement("a",{download:"sonarqube_ce.log",href:o+"?process=ce",id:"ce-logs-link",target:"_blank"},"Compute Engine")),r.createElement("li",null,r.createElement("a",{download:"sonarqube_es.log",href:o+"?process=es",id:"es-logs-link",target:"_blank"},"Search Engine")),r.createElement("li",null,r.createElement("a",{download:"sonarqube_web.log",href:o+"?process=web",id:"web-logs-link",target:"_blank"},"Web Server")))},r.createElement(he.a,null,Object(y.l)("system.download_logs"),r.createElement(Oe.a,{className:"little-spacer-left"}))),r.createElement("a",{className:"button spacer-left",download:"sonarqube-support-info-"+(e=this.props.serverId,t=new Date,(e?e+"-":"")+t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+"-"+t.getHours()+"-"+t.getMinutes())+".json",href:n,id:"download-link",onClick:this.removeElementFocus,target:"_blank"},Object(y.l)("system.download_system_info")),this.props.canRestart&&r.createElement(he.a,{className:"spacer-left",id:"restart-server-button",onClick:this.handleServerRestartOpen},Object(y.l)("system.restart_server")),this.props.canRestart&&this.state.openRestartForm&&r.createElement(ve.a,{onClose:this.handleServerRestartClose}),this.state.openLogsLevelForm&&r.createElement(ye,{infoMsg:Object(y.l)(this.props.cluster?"system.cluster_log_level.info":"system.log_level.info"),logLevel:this.state.logLevel,onChange:this.handleLogsLevelChange,onClose:this.handleLogsLevelClose}))},t}(r.PureComponent);function Ne(e){return r.createElement("header",{className:"page-header"},r.createElement("h1",{className:"page-title"},Object(y.l)("system_info.page")),e.showActions&&r.createElement(Se,{canDownloadLogs:!e.isCluster,canRestart:!e.isCluster,cluster:e.isCluster,logLevel:e.logLevel,onLogLevelChange:e.onLogLevelChange,serverId:e.serverId}),e.loading&&r.createElement("div",{className:"page-actions"},r.createElement("i",{className:"spinner"})))}function Ce(e){var t=e.expandedCards,n=e.sysInfoData,o=e.toggleCard;return r.createElement(r.Fragment,null,r.createElement(pe,{biggerHealth:!0,health:z(n),healthCauses:Y(n),name:"System",onClick:o,open:t.includes("System"),sysInfoData:H(ee(n))}),u()(function(e){return{Web:_()(e,function(e,t){return t.startsWith("Web")}),"Compute Engine":_()(e,function(e,t){return t.startsWith("Compute Engine")}),"Search Engine":_()(e,function(e,t){return t.startsWith("Search")})}}(n),function(e,n){return r.createElement(pe,{key:n,name:n,onClick:o,open:t.includes(n),sysInfoData:H(e)})}))}var we=n(586),Le=n(624),je=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),xe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={showMore:!1},t.toggleIntermediatVersions=function(e){e.preventDefault(),e.stopPropagation(),t.setState(function(e){return{showMore:!e.showMore}})},t}return je(t,e),t.prototype.render=function(){var e=this.state.showMore,t=this.props.upgrades;return t.length<=0?null:r.createElement("div",{className:this.props.className},r.createElement("a",{className:"button-link little-spacer-bottom",href:"#",onClick:this.toggleIntermediatVersions},e?Object(y.l)("system.hide_intermediate_versions"):Object(y.l)("system.show_intermediate_versions"),r.createElement(Oe.a,{className:"little-spacer-left",turned:e})),e&&t.map(function(e){return r.createElement("div",{className:"note system-upgrade-intermediate",key:e.version},r.createElement(Le.a,{date:e.releaseDate,long:!0},function(t){return r.createElement("p",null,r.createElement("b",{className:"little-spacer-right"},"SonarQube ",e.version),t,e.changeLogUrl&&r.createElement("a",{className:"spacer-left",href:e.changeLogUrl,target:"_blank"},Object(y.l)("system.release_notes")))}),r.createElement("p",{className:"little-spacer-top"},e.description))}))},t}(r.PureComponent);function ke(e){var t=e.type,n=e.systemUpgrades,o=n[0];return r.createElement("div",{className:"system-upgrade-version"},t&&r.createElement("h1",{className:"spacer-bottom"},r.createElement("strong",null,t)),r.createElement("p",null,r.createElement(we.FormattedMessage,{defaultMessage:Object(y.l)("system.version_is_availble"),id:"system.version_is_availble",values:{version:r.createElement("b",null,"SonarQube ",o.version)}})),r.createElement("p",{className:"spacer-top"},o.description),r.createElement("div",{className:"big-spacer-top"},r.createElement(Le.a,{date:o.releaseDate,long:!0},function(e){return r.createElement("span",null,Object(y.m)("system.released_x",e))}),o.changeLogUrl&&r.createElement("a",{className:"spacer-left",href:o.changeLogUrl,target:"_blank"},Object(y.l)("system.release_notes"))),r.createElement(xe,{className:"spacer-top",upgrades:n.slice(1)}),r.createElement("div",{className:"big-spacer-top"},r.createElement("a",{className:"button",download:"sonarqube-"+o.version+".zip",href:o.downloadUrl,target:"blank"},Object(y.m)("system.download_x",o.version)),r.createElement("a",{className:"spacer-left",href:"https://redirect.sonarsource.com/doc/upgrading.html",target:"_blank"},Object(y.l)("system.how_to_upgrade"))))}var Pe=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Fe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={upgrading:!1},t.handleCancelClick=function(e){e.preventDefault(),e.stopPropagation(),t.props.onClose()},t}return Pe(t,e),t.prototype.render=function(){var e=this.state.upgrading,t=this.props.systemUpgrades,n=Object(y.l)("system.system_upgrade");return r.createElement(de.a,{contentLabel:n,onRequestClose:this.props.onClose},r.createElement("div",{className:"modal-head"},r.createElement("h2",null,n)),r.createElement("div",{className:"modal-body"},t.map(function(e,t){return r.createElement(ke,{key:e[e.length-1].version,systemUpgrades:e,type:0===t?Object(y.l)("system.latest_version"):Object(y.l)("system.lts_version")})})),r.createElement("div",{className:"modal-foot"},e&&r.createElement("i",{className:"spinner spacer-right"}),r.createElement("a",{className:"pull-left",href:"https://www.sonarqube.org/downloads/",target:"_blank"},Object(y.l)("system.see_sonarqube_downloads")),r.createElement("a",{href:"#",onClick:this.handleCancelClick},Object(y.l)("cancel"))))},t}(r.PureComponent),Ie=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Ae=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={openSystemUpgradeForm:!1,systemUpgrades:[]},t.fetchSystemUpgrade=function(){return Object(m.e)().then(function(e){var n=e.upgrades;t.mounted&&t.setState({systemUpgrades:oe(re(n))})},function(){})},t.handleOpenSystemUpgradeForm=function(){t.setState({openSystemUpgradeForm:!0})},t.handleCloseSystemUpgradeForm=function(){t.setState({openSystemUpgradeForm:!1})},t}return Ie(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchSystemUpgrade()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.state.systemUpgrades;return e.length<=0?null:r.createElement("div",{className:"page-notifs"},r.createElement(f.a,{variant:"info"},Object(y.l)("system.new_version_available"),r.createElement(he.a,{className:"spacer-left",onClick:this.handleOpenSystemUpgradeForm},Object(y.l)("learn_more"))),this.state.openSystemUpgradeForm&&r.createElement(Fe,{onClose:this.handleCloseSystemUpgradeForm,systemUpgrades:e}))},t}(r.PureComponent),Ue=n(614),De=(n(1639),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),Re=function(){return(Re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},Te=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0},t.fetchSysInfo=function(){t.setState({loading:!0}),Object(m.c)().then(function(e){t.mounted&&t.setState({loading:!1,sysInfoData:e})},function(){t.mounted&&t.setState({loading:!1})})},t.toggleSysInfoCards=function(e){var n,r=te(t.props.location.query);n=r.expandedCards.includes(e)?r.expandedCards.filter(function(t){return t!==e}):r.expandedCards.concat(e),t.updateQuery({expandedCards:n})},t.updateQuery=function(e){var n=ne(Re({},te(t.props.location.query),e));t.props.router.replace({pathname:t.props.location.pathname,query:n})},t}return De(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchSysInfo()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.renderSysInfo=function(){var e=this.state.sysInfoData;if(!e)return null;var t=te(this.props.location.query);return Q(e)?r.createElement(me,{expandedCards:t.expandedCards,sysInfoData:e,toggleCard:this.toggleSysInfoCards}):r.createElement(Ce,{expandedCards:t.expandedCards,sysInfoData:e,toggleCard:this.toggleSysInfoCards})},t.prototype.render=function(){var e=this.state,t=e.loading,n=e.sysInfoData;return r.createElement("div",{className:"page page-limited"},r.createElement(Ue.a,{suggestions:"system_info"}),r.createElement(s.a,{title:Object(y.l)("system_info.page")}),r.createElement(Ae,null),r.createElement(Ne,{isCluster:Q(n),loading:t,logLevel:K(n),onLogLevelChange:this.fetchSysInfo,serverId:V(n),showActions:void 0!==n}),this.renderSysInfo())},t}(r.PureComponent);t.default=Object(o.withRouter)(Te)},605:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(591),o=n(636),a=n(592),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e){return r.createElement(o,s({className:a("modal",{"modal-medium":e.medium,"modal-large":e.large,"modal-simple":e.simple}),isOpen:!0,overlayClassName:a("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}o.setAppElement("#content")},614:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r,o=n(591),a=n(641),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function i(e){var t=e.suggestions;return o.createElement(a.a.Consumer,null,function(e){var n=e.addSuggestions,r=e.removeSuggestions;return o.createElement(l,{addSuggestions:n,removeSuggestions:r,suggestions:t})})}var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t}(o.PureComponent)},624:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return c});var r=n(591),o=n(586),a=n(87),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i={year:"numeric",month:"short",day:"2-digit"},l={year:"numeric",month:"long",day:"numeric"};function c(e){var t=e.children,n=e.date,c=e.long;return r.createElement(o.FormattedDate,s({value:Object(a.f)(n)},c?l:i),t)}},633:function(e,t,n){var r=n(150),o=n(89),a=n(689),s=n(47);e.exports=function(e,t){return(s(e)?r:a)(e,o(t,3))}},666:function(e,t,n){var r=n(151),o=n(687),a=Object.prototype.hasOwnProperty,s=o(function(e,t,n){a.call(e,n)?e[n].push(t):r(e,n,[t])});e.exports=s},675:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(591),o=n(594);function a(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,s=e.size;return r.createElement(o.a,{className:t,size:s},r.createElement("path",{d:"M11.596 8.28l-4.604 4.602a.382.382 0 0 1-.279.118.382.382 0 0 1-.279-.118l-1.03-1.03a.382.382 0 0 1-.117-.278c0-.108.04-.201.117-.28L8.7 8 5.404 4.706a.382.382 0 0 1-.117-.28c0-.108.04-.2.117-.279l1.03-1.03A.382.382 0 0 1 6.714 3c.107 0 .2.04.278.118l4.604 4.603a.382.382 0 0 1 .117.279c0 .108-.04.201-.117.28z",style:{fill:a}}))}},737:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"h",function(){return s}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return l}),n.d(t,"e",function(){return c}),n.d(t,"b",function(){return u}),n.d(t,"f",function(){return p}),n.d(t,"g",function(){return d});var r,o=n(30),a=n(609);function s(e){return Object(o.post)("/api/system/change_log_level",{level:e}).catch(a.a)}function i(){return Object(o.getJSON)("/api/system/info").catch(a.a)}function l(){return Object(o.getJSON)("/api/system/status")}function c(){return Object(o.getJSON)("/api/system/upgrades")}function u(){return Object(o.getJSON)("/api/system/db_migration_status")}function p(){return Object(o.postJSON)("/api/system/migrate_db")}!function(e){e.RED="RED",e.YELLOW="YELLOW",e.GREEN="GREEN"}(r||(r={}));var m=2e3;function f(){return new Promise(function(e){return function e(t){setTimeout(function(){l().then(function(n){"UP"===n.status?t():e(t)}).catch(function(){return e(t)})},m)}(e)})}function d(){return Object(o.post)("/api/system/restart").catch(a.a).then(f)}},743:function(e,t,n){"use strict";var r=n(591),o=n(594);function a(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,s=e.size;return r.createElement(o.a,{className:t,size:s},r.createElement("path",{d:"M7.72 11.596L3.119 6.992A.382.382 0 0 1 3 6.713c0-.108.04-.2.118-.279l1.03-1.03a.382.382 0 0 1 .278-.117c.108 0 .201.04.28.117L8 8.7l3.294-3.295a.382.382 0 0 1 .28-.117c.108 0 .2.04.279.117l1.03 1.03a.382.382 0 0 1 .117.28c0 .107-.04.2-.118.278L8.28 11.596a.382.382 0 0 1-.279.117.382.382 0 0 1-.28-.117z",style:{fill:a}}))}var s=n(675);n.d(t,"a",function(){return c});var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function c(e){var t=e.open,n=l(e,["open"]);return t?r.createElement(a,i({},n)):r.createElement(s.a,i({},n))}}}]);
//# sourceMappingURL=284.1548064679481.chunk.js.map