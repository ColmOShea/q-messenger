var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/split-view/base/example.jsx.js"]=function(e){function l(l){for(var s,o,r=l[0],c=l[1],i=l[2],m=0,u=[];m<r.length;m++)o=r[m],a[o]&&u.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);for(d&&d(l);u.length;)u.shift()();return n.push.apply(n,i||[]),t()}function t(){for(var e,l=0;l<n.length;l++){for(var t=n[l],s=!0,r=1;r<t.length;r++){var c=t[r];0!==a[c]&&(s=!1)}s&&(n.splice(l--,1),e=o(o.s=t[0]))}return e}var s={},a={141:0,6:0,13:0,14:0,22:0,24:0,26:0,35:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},n=[];function o(l){if(s[l])return s[l].exports;var t=s[l]={i:l,l:!1,exports:{}};return e[l].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=s,o.d=function(e,l,t){o.o(e,l)||Object.defineProperty(e,l,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,l){if(1&l&&(e=o(e)),8&l)return e;if(4&l&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&l&&"string"!=typeof e)for(var s in e)o.d(t,s,function(l){return e[l]}.bind(null,s));return t},o.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(l,"a",l),l},o.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},o.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=r.push.bind(r);r.push=l,r=r.slice();for(var i=0;i<r.length;i++)l(r[i]);var d=c;return n.push([213,0]),t()}({0:function(e,l){e.exports=React},213:function(e,l,t){"use strict";t.r(l),t.d(l,"states",function(){return u});var s=t(0),a=t.n(s),n=t(9),o=t(2),r=t.n(o),c=t(4),i=[{unread:!0,colOne:"Riley Shultz",colTwo:"99",colThree:"Biotech, Inc.",colFour:"Nurturing"},{unread:!0,colOne:"Jason A. - VP of Sales",colTwo:"92",colThree:"Case Management Solutions",colFour:"Contacted"},{unread:!0,colOne:"Josh Smith",colTwo:"90",colThree:"Acme, Inc.",colFour:"Contacted"},{unread:!0,colOne:"Bobby Tree",colTwo:"89",colThree:"Salesforce, Inc.",colFour:"Closing"},{selected:!0,colOne:"Riley Shultz",colTwo:"74",colThree:"Tesla",colFour:"Contacted"},{unread:!0,colOne:"Andy Smith",colTwo:"72",colThree:"Universal Technologies",colFour:"New"},{colOne:"Jim Steele",colTwo:"71",colThree:"BigList, Inc.",colFour:"New"},{colOne:"John Gardner",colTwo:"70",colThree:"3C Systems",colFour:"Contacted"},{colOne:"Sarah Loehr",colTwo:"68",colThree:"MedLife, Inc.",colFour:"New"}],d=function(e){return a.a.createElement("div",{className:r()("slds-split-view_container",e.hidden?"slds-is-closed":"slds-is-open")},a.a.createElement(c.b,{"aria-controls":"split-view-id","aria-expanded":e.hidden?"false":"true",className:r()("slds-button_icon slds-split-view__toggle-button",e.hidden?"slds-is-closed":"slds-is-open"),iconClassName:"slds-button__icon_x-small",symbol:"left",assistiveText:e.hidden?"Open Split View":"Close Split View",title:e.hidden?"Open Split View":"Close Split View"}),a.a.createElement("article",{"aria-hidden":e.hidden?"true":"false",id:"split-view-id",className:r()("slds-split-view slds-grid slds-grid_vertical slds-grow",e.className)},a.a.createElement("header",{className:"slds-split-view__header"},a.a.createElement("div",{className:"slds-grid slds-grid_vertical-align-center slds-m-bottom_xx-small"},a.a.createElement("div",{className:"slds-has-flexi-truncate"},a.a.createElement("div",{className:"slds-media slds-media_center"},a.a.createElement("div",{className:"slds-media__figure"},a.a.createElement("div",{className:"slds-icon_container slds-icon-standard-lead"},a.a.createElement(n.a,{className:"slds-icon",sprite:"standard",symbol:"lead"}),a.a.createElement("span",{className:"slds-assistive-text"},"Leads"))),a.a.createElement("div",{className:"slds-media__body"},a.a.createElement("h1",{className:"slds-text-heading_small slds-text-color_default slds-p-right_x-small"},a.a.createElement("button",{className:"slds-button slds-button_reset slds-type-focus slds-truncate","aria-haspopup":"true",title:""},a.a.createElement("span",{className:"slds-grid slds-has-flexi-truncate slds-grid_vertical-align-center"},a.a.createElement("span",{className:"slds-truncate",title:"My Leads"},"My Leads"),a.a.createElement(n.a,{className:"slds-button__icon slds-button__icon_right slds-no-flex",sprite:"utility",symbol:"down"}))))))),a.a.createElement("div",{className:"slds-no-flex slds-grid"},a.a.createElement(c.b,{className:"slds-button_icon-border-filled",symbol:"down","aria-haspopup":"true",assistiveText:"More Actions",title:"More Actions"}))),a.a.createElement("div",{className:"slds-grid slds-grid_vertical-align-center"},a.a.createElement("p",{className:"slds-text-body_small slds-text-color_weak"},"42 items • Updated just now"),a.a.createElement("div",{className:"slds-no-flex slds-grid slds-col_bump-left"},a.a.createElement("div",{className:"slds-button-group"},a.a.createElement(c.b,{hasDropdown:!0,className:"slds-button_icon slds-button_icon-container-more",symbol:"side_list",title:"Display As Split View",assistiveText:"Display As Split View"})),a.a.createElement("div",{className:"slds-button-group"},a.a.createElement(c.b,{className:"slds-button_icon slds-button_icon-container",symbol:"refresh",title:"Refresh List",assistiveText:"Refresh List"}))))),a.a.createElement("div",{className:"slds-grid slds-grid_vertical"},a.a.createElement("div",{className:"slds-split-view__list-header slds-grid"},a.a.createElement("span",{className:"slds-assistive-text"},"Sorted by:"),a.a.createElement("span",null,"Lead Score",a.a.createElement(n.a,{className:"slds-icon slds-icon_xx-small slds-icon-text-default slds-align-top",sprite:"utility",symbol:"arrowdown"})),a.a.createElement("span",{className:"slds-assistive-text"},"- Descending")),a.a.createElement("ul",{"aria-multiselectable":"true",className:"slds-scrollable_y",role:"listbox","aria-label":"Select an item to open it in a new workspace tab."},e.children))))},m=function(e){return a.a.createElement("li",{className:r()("slds-split-view__list-item",e.className,e.unread?"slds-is-unread":null),role:"presentation"},a.a.createElement("a",{href:"javascript:void(0);","aria-selected":!!e.selected,role:"option",className:"slds-split-view__list-item-action slds-grow slds-has-flexi-truncate",tabIndex:e.tabIndex},e.unread?a.a.createElement("abbr",{className:"slds-indicator_unread",title:"Unread Item","aria-label":"Unread Item"},a.a.createElement("span",{className:"slds-assistive-text"},"●")):null,a.a.createElement("div",{className:"slds-grid slds-wrap"},a.a.createElement("span",{className:"slds-truncate slds-text-body_regular slds-text-color_default",title:e.colOne||"Object Name"},e.colOne||"Column 1"),a.a.createElement("span",{className:"slds-truncate slds-col_bump-left",title:e.colTwo||"Column 2"},e.colTwo||"Column 2")),a.a.createElement("div",{className:"slds-grid slds-wrap"},a.a.createElement("span",{className:"slds-truncate",title:e.colThree||"Column 3"},e.colThree||"Column 3"),a.a.createElement("span",{className:"slds-truncate slds-col_bump-left",title:e.colFour||"Column 4"},e.colFour||"Column 4"))))};l.default=a.a.createElement("div",{className:"demo-only",style:{display:"flex",width:"20rem",height:"37.5rem"}},a.a.createElement(d,null,i.slice(0,5).map(function(e,l){return a.a.createElement(m,{key:l,colOne:e.colOne,colTwo:e.colTwo,colThree:e.colThree,colFour:e.colFour,tabIndex:0===l?0:-1})})));var u=[{id:"selected-item",label:"Selected Item",element:a.a.createElement("div",{className:"demo-only",style:{display:"flex",width:"20rem",height:"37.5rem"}},a.a.createElement(d,null,i.slice(0,5).map(function(e,l){return a.a.createElement(m,{key:l,selected:e.selected,colOne:e.colOne,colTwo:e.colTwo,colThree:e.colThree,colFour:e.colFour,tabIndex:0===l?0:-1})})))},{id:"overflow",label:"Overflow",element:a.a.createElement("div",{className:"demo-only",style:{display:"flex",width:"20rem",height:"37.5rem"}},a.a.createElement(d,null,i.map(function(e,l){return a.a.createElement(m,{key:l,colOne:e.colOne,colTwo:e.colTwo,colThree:e.colThree,colFour:e.colFour,tabIndex:0===l?0:-1})})))},{id:"unread",label:"Unread Items",element:a.a.createElement("div",{className:"demo-only",style:{display:"flex",width:"20rem",height:"37.5rem"}},a.a.createElement(d,null,i.map(function(e,l){return a.a.createElement(m,{key:l,unread:e.unread,colOne:e.colOne,colTwo:e.colTwo,colThree:e.colThree,colFour:e.colFour,tabIndex:0===l?0:-1})})))},{id:"panel-collapsed",label:"Collapsed Panel",element:a.a.createElement("div",{className:"demo-only",style:{display:"flex",width:"20rem",height:"37.5rem"}},a.a.createElement(d,{hidden:!0},i.map(function(e,l){return a.a.createElement(m,{key:l,unread:e.unread,colOne:e.colOne,colTwo:e.colTwo,colThree:e.colThree,colFour:e.colFour,tabIndex:0===l?0:-1})})))}]}});