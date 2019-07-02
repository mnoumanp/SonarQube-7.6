(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1631:function(e,t,s){"use strict";s.r(t);var a=s(362),n=s(352),r=s(368),i=s.n(r),l=s(365),o=s(385),m=s(0),c=s(354);class p extends n.PureComponent{constructor(e){super(e),this.mounted=!1,this.handleSubmit=(()=>this.props.onSubmit({description:this.state.description,name:this.state.name,projectKeyPattern:this.state.projectKeyPattern}).then(this.props.onClose)),this.handleNameChange=(e=>{this.setState({name:e.currentTarget.value})}),this.handleDescriptionChange=(e=>{this.setState({description:e.currentTarget.value})}),this.handleProjectKeyPatternChange=(e=>{this.setState({projectKeyPattern:e.currentTarget.value})}),this.state={description:e.permissionTemplate&&e.permissionTemplate.description||"",name:e.permissionTemplate&&e.permissionTemplate.name||"",projectKeyPattern:e.permissionTemplate&&e.permissionTemplate.projectKeyPattern||""}}render(){return n.createElement(o.a,{header:this.props.header,onClose:this.props.onClose,onSubmit:this.handleSubmit},({onCloseClick:e,onFormSubmit:t,submitting:s})=>n.createElement("form",{id:"permission-template-form",onSubmit:t},n.createElement("header",{className:"modal-head"},n.createElement("h2",null,this.props.header)),n.createElement("div",{className:"modal-body"},n.createElement("div",{className:"modal-field"},n.createElement("label",{htmlFor:"permission-template-name"},Object(m.l)("name"),n.createElement("em",{className:"mandatory"},"*")),n.createElement("input",{autoFocus:!0,id:"permission-template-name",maxLength:256,name:"name",onChange:this.handleNameChange,required:!0,type:"text",value:this.state.name}),n.createElement("div",{className:"modal-field-description"},Object(m.l)("should_be_unique"))),n.createElement("div",{className:"modal-field"},n.createElement("label",{htmlFor:"permission-template-description"},Object(m.l)("description")),n.createElement("textarea",{id:"permission-template-description",name:"description",onChange:this.handleDescriptionChange,value:this.state.description})),n.createElement("div",{className:"modal-field"},n.createElement("label",{htmlFor:"permission-template-project-key-pattern"},Object(m.l)("permission_template.key_pattern")),n.createElement("input",{id:"permission-template-project-key-pattern",maxLength:500,name:"projectKeyPattern",onChange:this.handleProjectKeyPatternChange,type:"text",value:this.state.projectKeyPattern}),n.createElement("div",{className:"modal-field-description"},Object(m.l)("permission_template.key_pattern.description")))),n.createElement("footer",{className:"modal-foot"},n.createElement(l.a,{className:"spacer-right",loading:s}),n.createElement(c.f,{disabled:s,id:"permission-template-submit"},this.props.confirmButtonText),n.createElement(c.e,{disabled:s,id:"permission-template-cancel",onClick:e},Object(m.l)("cancel")))))}}var h=s(501),u=s(411);var d=Object(u.a)(class extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={createModal:!1},this.handleCreateClick=(()=>{this.setState({createModal:!0})}),this.handleCreateModalClose=(()=>{this.mounted&&this.setState({createModal:!1})}),this.handleCreateModalSubmit=(e=>{const t=this.props.organization&&this.props.organization.key;return Object(h.f)(Object.assign({},e,{organization:t})).then(e=>{this.props.refresh().then(()=>{const s=t?`/organizations/${t}/permission_templates`:"/permission_templates";this.props.router.push({pathname:s,query:{id:e.permissionTemplate.id}})})})})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return n.createElement("header",{className:"page-header",id:"project-permissions-header"},n.createElement("h1",{className:"page-title"},Object(m.l)("permission_templates.page")),!this.props.ready&&n.createElement("i",{className:"spinner"}),n.createElement("div",{className:"page-actions"},n.createElement(c.a,{onClick:this.handleCreateClick},Object(m.l)("create")),this.state.createModal&&n.createElement(p,{confirmButtonText:Object(m.l)("create"),header:Object(m.l)("permission_template.new_template"),onClose:this.handleCreateModalClose,onSubmit:this.handleCreateModalSubmit})),n.createElement("p",{className:"page-description"},Object(m.l)("permission_templates.page.description")))}}),f=s(371),g=s(445),b=s(372);class E extends n.PureComponent{renderTooltip(e){return"user"===e.key||"codeviewer"===e.key?n.createElement("div",null,n.createElement(g.a,{message:Object(m.l)("projects_role",e.key,"desc")}),n.createElement(b.a,{className:"spacer-top",variant:"warning"},Object(m.l)("projects_role.public_projects_warning"))):n.createElement(g.a,{message:Object(m.l)("projects_role",e.key,"desc")})}render(){const e=this.props.permissions.map(e=>n.createElement("th",{className:"permission-column",key:e.key},n.createElement("div",{className:"permission-column-inner"},n.createElement("span",{className:"text-middle"},Object(m.l)("projects_role",e.key)),n.createElement(f.a,{className:"spacer-left",overlay:this.renderTooltip(e)}))));return n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null," "),e,n.createElement("th",{className:"thin nowrap text-right"}," ")))}}var v=s(358),C=s(369),z=s.n(C);function y({organization:e,template:t}){const s=e&&!e.isDefault?["TRK"]:t.defaultFor,a=z()(s).map(e=>Object(m.l)("qualifiers",e)).join(", ");return n.createElement("div",null,n.createElement("span",{className:"badge spacer-right"},Object(m.m)("permission_template.default_for",a)))}function N({template:e,organization:t}){const s=t?`/organizations/${t.key}/permission_templates`:"/permission_templates";return n.createElement("td",null,n.createElement(v.Link,{to:{pathname:s,query:{id:e.id}}},n.createElement("strong",{className:"js-name"},e.name)),e.defaultFor.length>0&&n.createElement("div",{className:"spacer-top js-defaults"},n.createElement(y,{organization:t,template:e})),!!e.description&&n.createElement("div",{className:"spacer-top js-description"},e.description),!!e.projectKeyPattern&&n.createElement("div",{className:"spacer-top js-project-key-pattern"},"Project Key Pattern: ",n.createElement("code",null,e.projectKeyPattern)))}var j=s(11);function S({permission:e}){return n.createElement("td",{className:"permission-column","data-permission":e.key},n.createElement("div",{className:"permission-column-inner"},n.createElement("ul",null,e.withProjectCreator&&n.createElement("li",{className:"little-spacer-bottom display-flex-center"},Object(m.l)("permission_templates.project_creators"),n.createElement(f.a,{className:"little-spacer-left",overlay:Object(m.l)(Object(j.isSonarCloud)()?"permission_templates.project_creators.explanation.sonarcloud":"permission_templates.project_creators.explanation")})),n.createElement("li",{className:"little-spacer-bottom"},n.createElement("strong",null,e.usersCount),"  user(s)"),n.createElement("li",null,n.createElement("strong",null,e.groupsCount)," group(s)"))))}var k=s(451),O=s.n(k);function H({onClose:e,onSubmit:t,permissionTemplate:s}){const a=Object(m.l)("permission_template.delete_confirm_title");return n.createElement(o.a,{header:a,onClose:e,onSubmit:t},({onCloseClick:e,onFormSubmit:t,submitting:r})=>n.createElement("form",{onSubmit:t},n.createElement("header",{className:"modal-head"},n.createElement("h2",null,a)),n.createElement("div",{className:"modal-body"},Object(m.m)("permission_template.do_you_want_to_delete_template_xxx",s.name)),n.createElement("footer",{className:"modal-foot"},n.createElement(l.a,{className:"spacer-right",loading:r}),n.createElement(c.f,{className:"button-red",disabled:r},Object(m.l)("delete")),n.createElement(c.e,{disabled:r,onClick:e},Object(m.l)("cancel")))))}var T=s(407),_=s(394);var P=Object(u.a)(class extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={deleteForm:!1,updateModal:!1},this.handleUpdateClick=(()=>{this.setState({updateModal:!0})}),this.handleCloseUpdateModal=(()=>{this.mounted&&this.setState({updateModal:!1})}),this.handleSubmitUpdateModal=(e=>Object(h.y)(Object.assign({id:this.props.permissionTemplate.id},e)).then(this.props.refresh)),this.handleDeleteClick=(()=>{this.setState({deleteForm:!0})}),this.handleCloseDeleteForm=(()=>{this.mounted&&this.setState({deleteForm:!1})}),this.handleDeleteSubmit=(()=>Object(h.g)({templateId:this.props.permissionTemplate.id}).then(()=>{const e=this.props.organization?`/organizations/${this.props.organization.key}/permission_templates`:"/permission_templates";this.props.router.replace(e),this.props.refresh()})),this.setDefault=(e=>()=>{Object(h.x)(this.props.permissionTemplate.id,e).then(this.props.refresh,()=>{})})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}getAvailableQualifiers(){const e=this.props.organization&&!this.props.organization.isDefault?["TRK"]:this.props.topQualifiers;return O()(e,this.props.permissionTemplate.defaultFor)}renderSetDefaultsControl(){const e=this.getAvailableQualifiers();return 0===e.length?null:1===this.props.topQualifiers.length?this.renderIfSingleTopQualifier(e):this.renderIfMultipleTopQualifiers(e)}renderSetDefaultLink(e,t){return n.createElement(T.b,{className:"js-set-default","data-qualifier":e,key:e,onClick:this.setDefault(e)},t)}renderIfSingleTopQualifier(e){return e.map(e=>this.renderSetDefaultLink(e,n.createElement("span",null,Object(m.l)("permission_templates.set_default"))))}renderIfMultipleTopQualifiers(e){return e.map(e=>this.renderSetDefaultLink(e,n.createElement("span",null,Object(m.l)("permission_templates.set_default_for")," ",n.createElement(_.a,{qualifier:e})," ",Object(m.l)("qualifiers",e))))}render(){const e=this.props,t=e.permissionTemplate,s=e.organization,a=s?`/organizations/${s.key}/permission_templates`:"/permission_templates";return n.createElement(n.Fragment,null,n.createElement(T.c,null,this.renderSetDefaultsControl(),!this.props.fromDetails&&n.createElement(T.b,{to:{pathname:a,query:{id:t.id}}},Object(m.l)("edit_permissions")),n.createElement(T.b,{className:"js-update",onClick:this.handleUpdateClick},Object(m.l)("update_details")),0===t.defaultFor.length&&n.createElement(T.b,{className:"js-delete",destructive:!0,onClick:this.handleDeleteClick},Object(m.l)("delete"))),this.state.updateModal&&n.createElement(p,{confirmButtonText:Object(m.l)("update_verb"),header:Object(m.l)("permission_template.edit_template"),onClose:this.handleCloseUpdateModal,onSubmit:this.handleSubmitUpdateModal,permissionTemplate:t}),this.state.deleteForm&&n.createElement(H,{onClose:this.handleCloseDeleteForm,onSubmit:this.handleDeleteSubmit,permissionTemplate:t}))}});function M(e){const t=e.template.permissions.map(e=>n.createElement(S,{key:e.key,permission:e}));return n.createElement("tr",{"data-id":e.template.id,"data-name":e.template.name},n.createElement(N,{organization:e.organization,template:e.template}),t,n.createElement("td",{className:"nowrap thin text-right"},n.createElement(P,{organization:e.organization,permissionTemplate:e.template,refresh:e.refresh,topQualifiers:e.topQualifiers})))}function V(e){const t=e.permissionTemplates.map(t=>n.createElement(M,{key:t.id,organization:e.organization,refresh:e.refresh,template:t,topQualifiers:e.topQualifiers}));return n.createElement("div",{className:"boxed-group boxed-group-inner"},n.createElement("table",{className:"data zebra permissions-table",id:"permission-templates"},n.createElement(E,{organization:e.organization,permissions:e.permissions}),n.createElement("tbody",null,t)))}function x(e){return n.createElement("div",{className:"page page-limited"},n.createElement(i.a,{title:Object(m.l)("permission_templates.page")}),n.createElement(d,{organization:e.organization,ready:e.ready,refresh:e.refresh}),n.createElement(V,{organization:e.organization,permissionTemplates:e.permissionTemplates,permissions:e.permissions,refresh:e.refresh,topQualifiers:e.topQualifiers}))}function L(e){const t=e.template,s=e.organization,a=s?`/organizations/${s.key}/permission_templates`:"/permission_templates";return n.createElement("header",{className:"page-header",id:"project-permissions-header"},n.createElement("div",{className:"note spacer-bottom"},n.createElement(v.Link,{className:"text-muted",to:a},Object(m.l)("permission_templates.page"))),n.createElement("h1",{className:"page-title"},t.name),e.loading&&n.createElement("i",{className:"spinner"}),n.createElement("div",{className:"pull-right"},n.createElement(P,{fromDetails:!0,organization:s,permissionTemplate:t,refresh:e.refresh,topQualifiers:e.topQualifiers})))}function w({organization:e,template:t}){return n.createElement("div",{className:"big-spacer-bottom"},t.defaultFor.length>0&&n.createElement("div",{className:"spacer-top js-defaults"},n.createElement(y,{organization:e,template:t})),!!t.description&&n.createElement("div",{className:"spacer-top js-description"},t.description),!!t.projectKeyPattern&&n.createElement("div",{className:"spacer-top js-project-key-pattern"},"Project Key Pattern: ",n.createElement("code",null,t.projectKeyPattern)))}var q=s(868),D=s(845),F=s(584);class Q extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={filter:"all",groups:[],loading:!1,query:"",users:[]},this.requestHolders=(e=>{this.setState({loading:!0});const t=this.props.template,s=this.state,a=s.query,n=s.filter,r=s.selectedPermission,i=[],l=null!=e?e:a;return"groups"!==n?i.push(h.k(t.id,l,r)):i.push(Promise.resolve([])),"users"!==n?i.push(h.j(t.id,l,r)):i.push(Promise.resolve([])),Promise.all(i).then(e=>{this.mounted&&this.setState({users:e[0],groups:e[1],loading:!1})})}),this.handleToggleUser=((e,t)=>{if("<creator>"===e.login)return this.handleToggleProjectCreator(e,t);const s=this.props,a=s.template,n=s.organization,r=e.permissions.includes(t),i={templateId:a.id,login:e.login,permission:t};return n&&(i.organization=n.key),(r?h.w(i):h.r(i)).then(()=>this.requestHolders()).then(this.props.refresh)}),this.handleToggleProjectCreator=((e,t)=>{const s=this.props.template;return(e.permissions.includes(t)?h.s(s.id,t):h.a(s.id,t)).then(()=>this.requestHolders()).then(this.props.refresh)}),this.handleToggleGroup=((e,t)=>{const s=this.props,a=s.template,n=s.organization,r=e.permissions.includes(t),i={templateId:a.id,groupName:e.name,permission:t};return n&&Object.assign(i,{organization:n.key}),(r?h.v(i):h.q(i)).then(()=>this.requestHolders()).then(this.props.refresh)}),this.handleSearch=(e=>{this.setState({query:e}),this.requestHolders(e)}),this.handleFilter=(e=>{this.setState({filter:e},this.requestHolders)}),this.handleSelectPermission=(e=>{e===this.state.selectedPermission?this.setState({selectedPermission:void 0},this.requestHolders):this.setState({selectedPermission:e},this.requestHolders)}),this.shouldDisplayCreator=(e=>{const t=this.state,s=t.filter,a=t.query,n=t.selectedPermission,r=Object(m.l)("permission_templates.project_creators"),i="all"!==s,l=!a||r.toLocaleLowerCase().includes(a.toLowerCase()),o=void 0===n||e.includes(n);return!i&&l&&o})}componentDidMount(){this.mounted=!0,this.requestHolders()}componentWillUnmount(){this.mounted=!1}render(){const e=Object(F.e)(F.b,"projects_role"),t=[...this.state.users],s=this.props.template.permissions.filter(e=>e.withProjectCreator).map(e=>e.key);if(this.shouldDisplayCreator(s)){const e={login:"<creator>",name:Object(m.l)("permission_templates.project_creators"),permissions:s};t.unshift(e)}return n.createElement("div",{className:"page page-limited"},n.createElement(i.a,{title:this.props.template.name}),n.createElement(L,{loading:this.state.loading,organization:this.props.organization,refresh:this.props.refresh,template:this.props.template,topQualifiers:this.props.topQualifiers}),n.createElement(w,{organization:this.props.organization,template:this.props.template}),n.createElement(q.a,{groups:this.state.groups,onSelectPermission:this.handleSelectPermission,onToggleGroup:this.handleToggleGroup,onToggleUser:this.handleToggleUser,permissions:e,selectedPermission:this.state.selectedPermission,showPublicProjectsWarning:!0,users:t},n.createElement(D.a,{filter:this.state.filter,onFilter:this.handleFilter,onSearch:this.handleSearch,query:this.state.query})))}}var U=s(665),A=s(374);const K=["user","codeviewer","issueadmin","securityhotspotadmin","admin","scan"];s(846);var I=s(564),R=s(364);t.default=Object(I.a)(Object(a.connect)(e=>({topQualifiers:Object(R.getAppState)(e).qualifiers}))(class extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={ready:!1,permissions:[],permissionTemplates:[]},this.requestPermissions=(()=>{const e=this.props.organization;return(e?Object(h.l)(e.key):Object(h.l)()).then(e=>{if(this.mounted){const t=function(e){return z()(e,e=>K.indexOf(e.key))}(e.permissions),s=function(e,t=[]){return e.map(e=>{const s=[];return t.forEach(t=>{t.templateId===e.id&&s.push(t.qualifier)}),Object.assign({},e,{defaultFor:s})})}(function(e,t){return e.map(e=>{const s=t.map(t=>{const s=e.permissions.find(e=>e.key===t.key);return Object.assign({usersCount:0,groupsCount:0},t,s)});return Object.assign({},e,{permissions:s})})}(e.permissionTemplates,t),e.defaultTemplates);this.setState({ready:!0,permissionTemplates:s,permissions:t})}})})}componentDidMount(){this.mounted=!0,this.requestPermissions()}componentWillUnmount(){this.mounted=!1}renderTemplate(e){if(!this.state.ready)return null;const t=this.state.permissionTemplates.find(t=>t.id===e);return t?n.createElement(Q,{organization:this.props.organization,refresh:this.requestPermissions,template:t,topQualifiers:this.props.topQualifiers}):null}renderHome(){return n.createElement(x,{organization:this.props.organization,permissionTemplates:this.state.permissionTemplates,permissions:this.state.permissions,ready:this.state.ready,refresh:this.requestPermissions,topQualifiers:this.props.topQualifiers})}render(){const e=this.props.location.query.id;return n.createElement("div",null,n.createElement(A.a,{suggestions:"permission_templates"}),n.createElement(U.a,{organization:this.props.organization,title:Object(m.l)("permission_templates.page")}),e&&this.renderTemplate(e),!e&&this.renderHome())}}))},366:function(e,t,s){"use strict";s.d(t,"a",function(){return i});var a=s(352),n=s(397),r=s(353);function i(e){return a.createElement(n,Object.assign({className:r("modal",{"modal-medium":e.medium,"modal-large":e.large,"modal-simple":e.simple}),isOpen:!0,overlayClassName:r("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}n.setAppElement("#content")},371:function(e,t,s){"use strict";s.d(t,"a",function(){return o});var a=s(352),n=s(353),r=s(363),i=s(413),l=s(359);s(381);function o(e){const t=e.children,s=void 0===t?a.createElement(i.a,{fill:l.gray71,size:12}):t,o=e.tagName,m=void 0===o?"div":o;return a.createElement(m,{className:n("help-tooltip",e.className)},a.createElement(r.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},a.createElement("span",{className:"display-inline-flex-center"},s)))}},374:function(e,t,s){"use strict";s.d(t,"a",function(){return r});var a=s(352),n=s(400);function r({suggestions:e}){return a.createElement(n.a.Consumer,null,({addSuggestions:t,removeSuggestions:s})=>a.createElement(i,{addSuggestions:t,removeSuggestions:s,suggestions:e}))}class i extends a.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},381:function(e,t,s){var a=s(382);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s(356)(a,n);a.locals&&(e.exports=a.locals)},382:function(e,t,s){(e.exports=s(355)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.help-tooltip {\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n\n.help-toolip-link {\n  display: block;\n  width: 12px;\n  height: 12px;\n  border: none;\n}\n",""])},385:function(e,t,s){"use strict";s.d(t,"a",function(){return r});var a=s(352),n=s(366);class r extends a.Component{constructor(){super(...arguments),this.mounted=!1,this.state={submitting:!1},this.stopSubmitting=(()=>{this.mounted&&this.setState({submitting:!1})}),this.handleCloseClick=(e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.props.onClose()}),this.handleFormSubmit=(e=>{e.preventDefault(),this.submit()}),this.handleSubmitClick=(e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.submit()}),this.submit=(()=>{const e=this.props.onSubmit();e&&(this.setState({submitting:!0}),e.then(this.stopSubmitting,this.stopSubmitting))})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return a.createElement(n.a,{contentLabel:this.props.header,onRequestClose:this.props.onClose},this.props.children({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))}}},389:function(e,t,s){"use strict";s.d(t,"a",function(){return i});var a=s(352),n=s(353),r=s(365);class i extends a.PureComponent{constructor(){super(...arguments),this.handleClick=(e=>{e.preventDefault(),e.currentTarget.blur(),this.props.disabled||this.props.onCheck(!this.props.checked,this.props.id)})}render(){const e=n("icon-checkbox",{"icon-checkbox-checked":this.props.checked,"icon-checkbox-single":this.props.thirdState,"icon-checkbox-disabled":this.props.disabled});return this.props.children?a.createElement("a",{className:n("link-checkbox",this.props.className,{note:this.props.disabled,disabled:this.props.disabled}),href:"#",id:this.props.id,onClick:this.handleClick},a.createElement(r.a,{loading:Boolean(this.props.loading)},a.createElement("i",{className:e})),this.props.children):this.props.loading?a.createElement(r.a,null):a.createElement("a",{className:n(e,this.props.className),href:"#",id:this.props.id,onClick:this.handleClick})}}i.defaultProps={thirdState:!1}},394:function(e,t,s){"use strict";s.d(t,"a",function(){return l});var a=s(352),n=s(357),r=s(359);const i={app:function({className:e,fill:t=r.blue,size:s}){return a.createElement(n.a,{className:e,size:s},a.createElement("path",{d:"M3.014 10.986a2 2 0 1 1-.001 4.001 2 2 0 0 1 .001-4.001zm9.984 0a2 2 0 1 1-.001 4.001 2 2 0 0 1 .001-4.001zm-5.004-.021c1.103 0 2 .896 2 2s-.897 2-2 2a2 2 0 0 1 0-4zm-4.98 1.021a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9.984 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.004-.021a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM2.984 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 2.984 6zm9.984 0a2 2 0 1 1-.001 4.001A2 2 0 0 1 12.968 6zm-5.004-.021c1.103 0 2 .897 2 2a2 2 0 1 1-2-2zM2.984 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9.984 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.004-.021a1.001 1.001 0 0 1 0 2 1 1 0 0 1 0-2zM3 1.025a2 2 0 1 1-.001 4.001A2 2 0 0 1 3 1.025zm9.984 0a2 2 0 1 1-.001 4.001 2 2 0 0 1 .001-4.001zM7.98 1.004c1.103 0 2 .896 2 2s-.897 2-2 2a2 2 0 0 1 0-4zM3 2.025a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9.984 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM7.98 2.004a1.001 1.001 0 0 1 0 2 1 1 0 0 1 0-2z",style:{fill:t}}))},brc:function({className:e,fill:t=r.blue,size:s}){return a.createElement(n.a,{className:e,size:s},a.createElement("path",{d:"M8 9V8h6v1h1v1h1v6H6v-6h1V9h1zm7 2H7v4h8v-4zm-1-7v3h-1V5H1v7h4v1H0V4h14zm-1-2v1.5h-1V3H2v.5H1V2h12zm-1-2v1.5h-1V1H3v.5H2V0h10z",style:{fill:t}}))},dev:function({className:e,fill:t=r.blue,size:s}){return a.createElement(n.a,{className:e,size:s},a.createElement("path",{d:"M7.974 8.02a3.5 3.5 0 0 1-2.482-1.017 3.428 3.428 0 0 1-1.028-2.455c0-.927.365-1.8 1.028-2.455a3.505 3.505 0 0 1 2.482-1.017 3.5 3.5 0 0 1 2.482 1.017 3.434 3.434 0 0 1 1.027 2.455c0 .928-.365 1.8-1.027 2.455A3.504 3.504 0 0 1 7.974 8.02zm0-5.778c-1.286 0-2.332 1.034-2.332 2.306s1.046 2.307 2.332 2.307c1.285 0 2.332-1.035 2.332-2.307S9.258 2.242 7.974 2.242zm3.534 6.418c.127.016.243.045.348.086.17.066.302.146.406.246.132.124.253.282.36.47.126.218.226.442.3.668.08.253.15.535.206.838.056.313.095.604.113.867.02.28.03.57.03.862 0 .532-.174.758-.306.882-.142.132-.397.31-.973.31H3.948c-.233 0-.437-.03-.606-.09-.14-.05-.26-.123-.366-.222-.13-.123-.306-.35-.306-.88 0-.294.01-.584.03-.863.018-.263.056-.554.112-.867a6.5 6.5 0 0 1 .207-.838c.073-.226.173-.45.298-.667.108-.19.23-.347.36-.47.106-.1.238-.18.407-.247.105-.04.22-.07.348-.086.202.13.432.277.683.435.342.217.756.4 1.265.564.523.166 1.06.25 1.59.25a5.25 5.25 0 0 0 1.592-.25c.51-.164.923-.348 1.266-.565.25-.158.48-.304.682-.435l-.002.002zm-.244-1.18c-.055 0-.184.066-.387.196-.202.13-.43.276-.685.437-.255.16-.586.307-.994.437-.408.13-.818.196-1.23.196-.41 0-.82-.065-1.228-.196a4.303 4.303 0 0 1-.993-.437c-.255-.16-.484-.306-.686-.437-.202-.13-.33-.196-.386-.196-.374 0-.716.06-1.026.183-.31.12-.572.283-.787.487a3.28 3.28 0 0 0-.57.737 4.662 4.662 0 0 0-.395.888c-.098.303-.18.633-.244.988a9.652 9.652 0 0 0-.128.992c-.02.306-.032.62-.032.942 0 .73.224 1.304.672 1.726.448.42 1.043.632 1.785.632h8.044c.743 0 1.34-.21 1.787-.633.447-.42.67-.996.67-1.725 0-.32-.01-.635-.03-.942a9.159 9.159 0 0 0-.374-1.98c-.098-.304-.23-.6-.395-.888a3.23 3.23 0 0 0-.57-.737 2.404 2.404 0 0 0-.788-.487 2.779 2.779 0 0 0-1.026-.183h-.004z",style:{fill:t}}))},dir:o,fil:function({className:e,fill:t=r.blue,size:s}){return a.createElement(n.a,{className:e,size:s},a.createElement("path",{d:"M14 15H2V1l7.997.02c1 .034 1.759.758 2.428 1.42.667.663 1.561 1.605 1.574 2.555H14V15zM9 2H3v12h10V6H9V2zm3 10H4v-1h8v1zm0-2H4V9h8v1zm-1.988-5h3.008c-.012-.674-.714-1.443-1.204-1.937-.488-.495-1.039-1.058-1.816-1.055v2.96l.012.032z",style:{fill:t}}))},svw:function({className:e,fill:t=r.blue,size:s}){return a.createElement(n.a,{className:e,size:s},a.createElement("path",{d:"M14 7h2v9H7v-2H0V0h14v7zM8 8v7h7V8H8zm3 6H9v-2h2v2zm3 0h-2v-2h2v2zm-1-7V1H1v12h6V7h6zm-7 5H2V8h4v4zm5-1H9V9h2v2zm3 0h-2V9h2v2zM5 9H3v2h2V9zm1-3H2V2h4v4zm6 0H8V2h4v4zM5 3H3v2h2V3zm6 0H9v2h2V3z",style:{fill:t}}))},trk:m,uts:c,vw:function({className:e,fill:t=r.blue,size:s}){return a.createElement(n.a,{className:e,size:s},a.createElement("path",{d:"M14.97 14.97H1.016V1.015H14.97V14.97zm-1-12.955H2.015V13.97H13.97V2.015zm-.973 10.982H9V9h3.997v3.997zM7 12.996H3.004V9H7v3.996zM11.997 10H10v1.997h1.997V10zM6 10H4.004v1.996H6V10zm1-3H3.006V3.006H7V7zm5.985 0H9V3.015h3.985V7zM6 4.006H4.006V6H6V4.006zm5.985.009H10V6h1.985V4.015z",style:{fill:t}}))},cla:c,dev_prj:m,lib:function({className:e,fill:t=r.blue,size:s}){return a.createElement(n.a,{className:e,size:s},a.createElement("path",{d:"M1 13h4V3H1v10zm3-1H2v-2h2v2zM2 4h2v4H2V4zm4 9h4V3H6v10zm3-1H7v-2h2v2zM7 4h2v4H7V4zm4 9h4V3h-4v10zm3-1h-2v-2h2v2zm-2-8h2v4h-2V4z",style:{fill:t}}))},pac:o};function l(e){if(!e.qualifier)return null;const t=e.qualifier.toLowerCase(),s=i[t];return s?a.createElement(s,{className:e.className,fill:e.fill}):null}function o({className:e,fill:t=r.orange,size:s}){return a.createElement(n.a,{className:e,size:s},a.createElement("path",{d:"M14 12.286V5.703a.673.673 0 0 0-.195-.5.644.644 0 0 0-.49-.203H6.704a.686.686 0 0 1-.5-.214.707.707 0 0 1-.203-.51v-.57c0-.2-.07-.363-.207-.502A.679.679 0 0 0 5.29 3H2.707a.672.672 0 0 0-.5.204.683.683 0 0 0-.206.5v8.582c0 .2.07.367.206.506.137.14.304.208.5.208h10.61a.66.66 0 0 0 .49-.208.685.685 0 0 0 .194-.506H14zm1-6.598v6.65c0 .458-.152.83-.475 1.16-.324.326-.7.502-1.15.502H2.647c-.452 0-.84-.175-1.162-.503a1.572 1.572 0 0 1-.486-1.158V3.654a1.6 1.6 0 0 1 .486-1.17A1.578 1.578 0 0 1 2.648 2h2.7c.45 0 .84.157 1.164.485.324.328.488.714.488 1.17V4h6.373c.452 0 .83.174 1.152.5.323.33.475.73.475 1.187v.001z",style:{fill:t}}))}function m({className:e,fill:t=r.blue,size:s}){return a.createElement(n.a,{className:e,size:s},a.createElement("path",{d:"M14.985 13.988L1 14.005 1.02 5h13.966v8.988h-.001zM1.998 5.995l.006 7.02L14.022 13 14 6.004l-12.002-.01v.001zM3 4.5V4h9.996l.004.5h1l-.005-1.497-11.98.003L2 4.5h1zm1-2v-.504h8.002L12 2.5h1l-.004-1.495H3.003L3 2.5h1z",style:{fill:t}}))}function c({className:e,fill:t=r.blue,size:s}){return a.createElement(n.a,{className:e,size:s},a.createElement("path",{d:"M14 15H2V1l7.997.02c1.013-.03 1.57.893 2.239 1.555.667.663 1.75 1.47 1.763 2.42H14V15zM9 2H3v12h10V6H9V2zM7 8l-3 2.5L7 13V8zm1 5l3-2.5L8 8v5zm2.012-8h3.008c-.012-.674-.78-1.258-1.27-1.752-.488-.495-.973-1.243-1.75-1.24v2.96l.012.032z",style:{fill:t}}))}},407:function(e,t,s){"use strict";var a=s(352),n=s(353),r=s(358),i=s(375),l=s(379),o=s(357);function m({className:e,fill:t="currentColor",size:s=14}){return a.createElement(o.a,{className:e,size:s,viewBox:"0 0 14 14"},a.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},a.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:t}})))}var c=s(354);function p(e){return a.createElement(i.b,{className:e.className,onOpen:e.onOpen,overlay:a.createElement("ul",{className:"menu"},e.children)},a.createElement(c.a,{className:n("dropdown-toggle",e.toggleClassName,{"button-small":e.small})},a.createElement(m,{size:e.small?12:14}),a.createElement(l.a,{className:"little-spacer-left"})))}s.d(t,"c",function(){return p}),s.d(t,"b",function(){return h}),s.d(t,"a",function(){return u});class h extends a.PureComponent{constructor(){super(...arguments),this.handleClick=(e=>{e.preventDefault(),e.currentTarget.blur(),this.props.onClick&&this.props.onClick()})}render(){const e=n(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?a.createElement("li",null,a.createElement("a",{className:e,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?a.createElement("li",null,a.createElement(r.Link,{className:e,id:this.props.id,to:this.props.to},this.props.children)):a.createElement("li",null,a.createElement("a",{className:e,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))}}function u(){return a.createElement("li",{className:"divider"})}},438:function(e,t,s){"use strict";s.d(t,"a",function(){return i});var a=s(352),n=s(353),r=s(363);class i extends a.PureComponent{constructor(){super(...arguments),this.handleChange=(e=>{const t=e.currentTarget.value;this.props.onCheck(t)}),this.renderOption=(e=>{const t=e.value===this.props.value,s=this.props.name+"__"+e.value;return a.createElement("li",{key:e.value},a.createElement("input",{checked:t,disabled:e.disabled,id:s,name:this.props.name,onChange:this.handleChange,type:"radio",value:e.value}),a.createElement(r.a,{overlay:e.tooltip||void 0},a.createElement("label",{htmlFor:s},e.label)))})}render(){return a.createElement("ul",{className:n("radio-toggle",this.props.className)},this.props.options.map(this.renderOption))}}i.defaultProps={disabled:!1,value:null}},451:function(e,t,s){var a=s(525),n=s(448),r=s(480),i=s(491),l=r(function(e,t){return i(e)?a(e,n(t,1,i,!0)):[]});e.exports=l},564:function(e,t,s){"use strict";s.d(t,"a",function(){return o});var a=s(352),n=s(362),r=s(358),i=s(364),l=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(s[a[n]]=e[a[n]])}return s};function o(e){class t extends a.Component{render(){const t=this.props,s=t.customOrganizations,n=t.router,r=l(t,["customOrganizations","router"]);return!r.params.organizationKey&&s?(n.replace("/not_found"),null):a.createElement(e,Object.assign({},r))}}t.displayName=`forSingleOrganization(${e.displayName})}`;return Object(n.connect)(e=>({customOrganizations:Object(i.areThereCustomOrganizations)(e)}))(Object(r.withRouter)(t))}},665:function(e,t,s){"use strict";s.d(t,"a",function(){return i});var a=s(352),n=s(368),r=s.n(n);function i({title:e,organization:t}){const s=e+(t?" - "+t.name:"");return a.createElement(r.a,{defaultTitle:s,titleTemplate:"%s - "+s})}}}]);
//# sourceMappingURL=19.m.3881dba4.chunk.js.map