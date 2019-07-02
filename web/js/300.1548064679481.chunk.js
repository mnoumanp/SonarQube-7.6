(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{1027:function(e,t,n){"use strict";n.d(t,"b",function(){return a});var r=n(591),a={installing:[],removing:[],updating:[]},i=r.createContext({fetchPendingPlugins:function(){},pendingPlugins:a});t.a=i},1028:function(e,t,n){"use strict";var r,a=n(591),i=n(592),c=n(737),o=n(605),s=n(593),l=n(17),u=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={restarting:!1},t.handleFormSubmit=function(e){e.preventDefault(),t.state.restarting||(t.setState({restarting:!0}),Object(c.g)().then(function(){return document.location&&document.location.reload()},function(){return t.setState({restarting:!1})}))},t}return u(t,e),t.prototype.render=function(){var e=this.state.restarting,t=Object(l.l)("system.restart_server");return a.createElement(o.a,{contentLabel:t,onRequestClose:e?void 0:this.props.onClose},a.createElement("form",{id:"restart-form",onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("p",{className:i("spacer-top spacer-bottom",{"text-center":e})},Object(l.l)(e?"system.is_restarting":"system.are_you_sure_to_restart")),e&&a.createElement("p",{className:"big-spacer-top spacer-bottom text-center"},a.createElement("i",{className:"spinner"}))),!e&&a.createElement("div",{className:"modal-foot"},a.createElement(s.f,{id:"restart-server-submit"},Object(l.l)("restart")),a.createElement(s.e,{className:"js-modal-close",id:"restart-server-cancel",onClick:this.props.onClose},Object(l.l)("cancel")))))},t}(a.PureComponent);t.a=p},1899:function(e,t,n){"use strict";n.r(t);var r,a=n(591),i=n(607),c=n.n(i),o=n(600),s=n(1027),l=n(592),u=n(597),p=n(586),m=n(684),f=n(1028),d=n(904),g=n(593),h=n(17),v=n(611),b=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={openRestart:!1},t.handleOpenRestart=function(){t.setState({openRestart:!0})},t.hanleCloseRestart=function(){t.setState({openRestart:!1})},t.handleRevert=function(){Object(d.a)().then(t.props.refreshPending,function(){})},t}return b(t,e),t.prototype.render=function(){var e=this.props.pending,t=e.installing,n=e.updating,r=e.removing;return t.length||n.length||r.length?a.createElement(v.a,{className:"js-pending",display:"banner",variant:"info"},a.createElement("div",{className:"display-flex-center"},a.createElement("span",{className:"little-spacer-right"},a.createElement(m.a,{message:Object(h.l)("marketplace.instance_needs_to_be_restarted_to")})),[{length:t.length,msg:"marketplace.install_x_plugins"},{length:n.length,msg:"marketplace.update_x_plugins"},{length:r.length,msg:"marketplace.uninstall_x_plugins"}].filter(function(e){return e.length>0}).map(function(e,t){var n=e.length,r=e.msg;return a.createElement("span",{key:r},t>0&&"; ",a.createElement(p.FormattedMessage,{defaultMessage:Object(h.l)(r),id:r,values:{nb:a.createElement("strong",null,n)}}))}),a.createElement(g.a,{className:"spacer-left js-restart",onClick:this.handleOpenRestart},Object(h.l)("marketplace.restart")),a.createElement(g.a,{className:"spacer-left js-cancel-all button-red",onClick:this.handleRevert},Object(h.l)("marketplace.revert")),this.state.openRestart&&a.createElement(f.a,{onClose:this.hanleCloseRestart}))):null},t}(a.PureComponent),y=n(598),E=n(946),j=n(613),_=n(889),N=n(618),P=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderExtension=function(e){var t=e.key,n=e.name;return a.createElement("li",{key:t},a.createElement(u.Link,{activeClassName:"active",to:"/admin/extension/"+t},n))},t}return P(t,e),t.prototype.isSomethingActive=function(e){var t=window.location.pathname;return e.some(function(e){return 0===t.indexOf(window.baseUrl+e)})},t.prototype.isSecurityActive=function(){return this.isSomethingActive(["/admin/users","/admin/groups","/admin/permissions","/admin/permission_templates"])},t.prototype.isProjectsActive=function(){return this.isSomethingActive(["/admin/projects_management","/admin/background_tasks"])},t.prototype.isSystemActive=function(){return this.isSomethingActive(["/admin/system"])},t.prototype.isMarketplace=function(){return this.isSomethingActive(["/admin/marketplace"])},t.prototype.renderConfigurationTab=function(){var e=this,t=this.props.organizationsEnabled,n=this.props.extensions.filter(function(e){return"license/support"!==e.key});return a.createElement(j.b,{overlay:a.createElement("ul",{className:"menu"},a.createElement("li",null,a.createElement(u.IndexLink,{activeClassName:"active",to:"/admin/settings"},Object(h.l)("settings.page"))),a.createElement("li",null,a.createElement(u.IndexLink,{activeClassName:"active",to:"/admin/settings/encryption"},Object(h.l)("property.category.security.encryption"))),a.createElement("li",null,a.createElement(u.IndexLink,{activeClassName:"active",to:"/admin/custom_metrics"},Object(h.l)("custom_metrics.page"))),!t&&a.createElement("li",null,a.createElement(u.IndexLink,{activeClassName:"active",to:"/admin/webhooks"},Object(h.l)("webhooks.page"))),n.map(this.renderExtension)),tagName:"li"},function(t){var n=t.onToggleClick,r=t.open;return a.createElement("a",{"aria-expanded":r,"aria-haspopup":"true",className:l("dropdown-toggle",{active:r||!e.isSecurityActive()&&!e.isProjectsActive()&&!e.isSystemActive()&&!e.isSomethingActive(["/admin/extension/license/support"])&&!e.isMarketplace()}),href:"#",id:"settings-navigation-configuration",onClick:n},Object(h.l)("sidebar.project_settings"),a.createElement(N.a,{className:"little-spacer-left"}))})},t.prototype.renderProjectsTab=function(){var e=this,t=this.props.organizationsEnabled;return a.createElement(j.b,{overlay:a.createElement("ul",{className:"menu"},!t&&a.createElement("li",null,a.createElement(u.IndexLink,{activeClassName:"active",to:"/admin/projects_management"},Object(h.l)("management"))),a.createElement("li",null,a.createElement(u.IndexLink,{activeClassName:"active",to:"/admin/background_tasks"},Object(h.l)("background_tasks.page")))),tagName:"li"},function(t){var n=t.onToggleClick,r=t.open;return a.createElement("a",{"aria-expanded":r,"aria-haspopup":"true",className:l("dropdown-toggle",{active:r||e.isProjectsActive()}),href:"#",onClick:n},Object(h.l)("sidebar.projects"),a.createElement(N.a,{className:"little-spacer-left"}))})},t.prototype.renderSecurityTab=function(){var e=this,t=this.props.organizationsEnabled;return a.createElement(j.b,{overlay:a.createElement("ul",{className:"menu"},a.createElement("li",null,a.createElement(u.IndexLink,{activeClassName:"active",to:"/admin/users"},Object(h.l)("users.page"))),!t&&a.createElement("li",null,a.createElement(u.IndexLink,{activeClassName:"active",to:"/admin/groups"},Object(h.l)("user_groups.page"))),!t&&a.createElement("li",null,a.createElement(u.IndexLink,{activeClassName:"active",to:"/admin/permissions"},Object(h.l)("global_permissions.page"))),!t&&a.createElement("li",null,a.createElement(u.IndexLink,{activeClassName:"active",to:"/admin/permission_templates"},Object(h.l)("permission_templates")))),tagName:"li"},function(t){var n=t.onToggleClick,r=t.open;return a.createElement("a",{"aria-expanded":r,"aria-haspopup":"true",className:l("dropdown-toggle",{active:r||e.isSecurityActive()}),href:"#",onClick:n},Object(h.l)("sidebar.security"),a.createElement(N.a,{className:"little-spacer-left"}))})},t.prototype.render=function(){var e,t=this.props,n=t.extensions,r=t.pendingPlugins,i=n.find(function(e){return"license/support"===e.key});return r.installing.length+r.removing.length+r.updating.length>0&&(e=a.createElement(O,{pending:r,refreshPending:this.props.fetchPendingPlugins})),a.createElement(E.a,{height:e?y.contextNavHeightRaw+30:y.contextNavHeightRaw,id:"context-navigation",notif:e},a.createElement("header",{className:"navbar-context-header"},a.createElement("h1",null,Object(h.l)("layout.settings"))),a.createElement(_.a,null,this.renderConfigurationTab(),this.renderSecurityTab(),this.renderProjectsTab(),a.createElement("li",null,a.createElement(u.IndexLink,{activeClassName:"active",to:"/admin/system"},Object(h.l)("sidebar.system"))),a.createElement("li",null,a.createElement(u.IndexLink,{activeClassName:"active",to:"/admin/marketplace"},Object(h.l)("marketplace.page"))),i&&a.createElement("li",null,a.createElement(u.IndexLink,{activeClassName:"active",to:"/admin/extension/license/support"},Object(h.l)("support")))))},t.defaultProps={extensions:[]},t}(a.PureComponent),S=n(603),x=n(793),C=n(765),w=n(794),A=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),R=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={pendingPlugins:s.b},t.fetchNavigationSettings=function(){Object(x.c)().then(function(e){return t.props.setAdminPages(e.extensions)},function(){})},t.fetchPendingPlugins=function(){Object(d.e)().then(function(e){t.mounted&&t.setState({pendingPlugins:e})},function(){})},t}return A(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.props.appState.canAdmin?(this.fetchNavigationSettings(),this.fetchPendingPlugins()):Object(w.a)()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.appState,t=e.adminPages,n=e.organizationsEnabled;if(!t)return null;var r=Object(h.l)("layout.settings");return a.createElement("div",null,a.createElement(c.a,{defaultTitle:r,titleTemplate:"%s - "+r}),a.createElement(k,{extensions:t,fetchPendingPlugins:this.fetchPendingPlugins,location:this.props.location,organizationsEnabled:n,pendingPlugins:this.state.pendingPlugins}),a.createElement(s.a.Provider,{value:{fetchPendingPlugins:this.fetchPendingPlugins,pendingPlugins:this.state.pendingPlugins}},this.props.children))},t}(a.PureComponent),L={setAdminPages:C.d};t.default=Object(o.connect)(function(e){return{appState:Object(S.getAppState)(e)}},L)(R)},605:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(591),a=n(636),i=n(592),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function o(e){return r.createElement(a,c({className:i("modal",{"modal-medium":e.medium,"modal-large":e.large,"modal-simple":e.simple}),isOpen:!0,overlayClassName:i("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}a.setAppElement("#content")},615:function(e,t,n){var r=n(619),a=1/0,i=1.7976931348623157e308;e.exports=function(e){return e?(e=r(e))===a||e===-a?(e<0?-1:1)*i:e==e?e:0:0===e?e:0}},674:function(e,t,n){var r=n(615);e.exports=function(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}},711:function(e,t){e.exports=function(e,t,n,r){for(var a=e.length,i=n+(r?1:-1);r?i--:++i<a;)if(t(e[i],i,e))return i;return-1}},737:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"h",function(){return c}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return s}),n.d(t,"e",function(){return l}),n.d(t,"b",function(){return u}),n.d(t,"f",function(){return p}),n.d(t,"g",function(){return d});var r,a=n(30),i=n(609);function c(e){return Object(a.post)("/api/system/change_log_level",{level:e}).catch(i.a)}function o(){return Object(a.getJSON)("/api/system/info").catch(i.a)}function s(){return Object(a.getJSON)("/api/system/status")}function l(){return Object(a.getJSON)("/api/system/upgrades")}function u(){return Object(a.getJSON)("/api/system/db_migration_status")}function p(){return Object(a.postJSON)("/api/system/migrate_db")}!function(e){e.RED="RED",e.YELLOW="YELLOW",e.GREEN="GREEN"}(r||(r={}));var m=2e3;function f(){return new Promise(function(e){return function e(t){setTimeout(function(){s().then(function(n){"UP"===n.status?t():e(t)}).catch(function(){return e(t)})},m)}(e)})}function d(){return Object(a.post)("/api/system/restart").catch(i.a).then(f)}},793:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return o});var r=n(30),a=n(609);function i(e){return Object(r.getJSON)("/api/navigation/component",e).catch(a.a)}function c(){return Object(r.getJSON)("/api/navigation/marketplace").catch(a.a)}function o(){return Object(r.getJSON)("/api/navigation/settings").catch(a.a)}},794:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(667),a=n(694),i=n(765);function c(){var e=Object(r.default)(),t=Object(a.a)(),n=window.location.pathname+window.location.search+window.location.hash;e.dispatch(Object(i.c)()),t.replace({pathname:"/sessions/new",query:{return_to:n}})}},904:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"e",function(){return u}),n.d(t,"c",function(){return f}),n.d(t,"d",function(){return d}),n.d(t,"f",function(){return g}),n.d(t,"g",function(){return h}),n.d(t,"h",function(){return v}),n.d(t,"i",function(){return b}),n.d(t,"a",function(){return O});var r=n(905),a=n.n(r),i=n(30),c=n(609),o=n(748),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function l(){return Object(i.getJSON)("/api/plugins/available").catch(c.a)}function u(){return Object(i.getJSON)("/api/plugins/pending").catch(c.a)}function p(e){return e?["COMPATIBLE","REQUIRES_SYSTEM_UPGRADE","DEPS_REQUIRE_SYSTEM_UPGRADE"].map(function(t){var n=a()(e,function(e){return e.status===t});return n>-1?e[n]:void 0}).filter(o.a):[]}function m(e,t){if(!t)return e;var n=t.indexOf(e),r=n>0?t.slice(0,n):[];return s({},e,{previousUpdates:r})}function f(){return Object(i.getJSON)("/api/plugins/installed",{f:"category"}).then(function(e){return e.plugins},c.a)}function d(){return Promise.all([Object(i.getJSON)("/api/plugins/installed",{f:"category"}),Object(i.getJSON)("/api/plugins/updates")]).then(function(e){var t=e[0],n=e[1];return t.plugins.map(function(e){var t=n.plugins.find(function(t){return t.key===e.key});return t?s({},t,e,{updates:p(t.updates).map(function(e){return m(e,t.updates)})}):e})}).catch(c.a)}function g(){return Promise.all([Object(i.getJSON)("/api/plugins/updates"),Object(i.getJSON)("/api/plugins/installed")]).then(function(e){var t=e[0],n=e[1];return t.plugins.map(function(e){var t=p(e.updates).map(function(t){return m(t,e.updates)}),r=n.plugins.find(function(t){return t.key===e.key});return r?s({},r,e,{updates:t}):s({},e,{updates:t})})}).catch(c.a)}function h(e){return Object(i.post)("/api/plugins/install",e).catch(c.a)}function v(e){return Object(i.post)("/api/plugins/uninstall",e).catch(c.a)}function b(e){return Object(i.post)("/api/plugins/update",e).catch(c.a)}function O(){return Object(i.post)("/api/plugins/cancel_all").catch(c.a)}},905:function(e,t,n){var r=n(711),a=n(89),i=n(674),c=Math.max,o=Math.min;e.exports=function(e,t,n){var s=null==e?0:e.length;if(!s)return-1;var l=s-1;return void 0!==n&&(l=i(n),l=n<0?c(s+l,0):o(l,s-1)),r(e,a(t,3),l,!0)}}}]);
//# sourceMappingURL=300.1548064679481.chunk.js.map