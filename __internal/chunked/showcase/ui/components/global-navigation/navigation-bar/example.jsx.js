var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/global-navigation/navigation-bar/example.jsx.js"]=function(e){function t(t){for(var a,o,s=t[0],c=t[1],i=t[2],p=0,m=[];p<s.length;p++)o=s[p],r[o]&&m.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);m.length;)m.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={91:0,6:0,13:0,14:0,22:0,24:0,26:0,35:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},l=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=c;return l.push([236,0]),n()}({0:function(e,t){e.exports=React},236:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1),o=n.n(l),s=n(2),c=n.n(s),i=n(9),u=n(14),p=n(4),m=n(62);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var g=r.a.createElement(u.Menu,{className:"slds-dropdown_right"},r.a.createElement(u.MenuList,null,r.a.createElement(u.MenuItem,{title:"Main action"},r.a.createElement(i.a,{className:"slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small",sprite:"utility",symbol:"add"}),"Main action"),r.a.createElement("li",{className:"slds-dropdown__header slds-has-divider_top-space",role:"separator"},r.a.createElement("span",null,"Menu header")),r.a.createElement(u.MenuItem,null,"Menu Item One"),r.a.createElement(u.MenuItem,null,"Menu Item Two"),r.a.createElement(u.MenuItem,null,"Menu Item Three"))),y=function(e){var t=e.label,n=e.isActive,a=e.hasNavMenu,l=e.hasNavMenuOpen,o=e.hasMenuDropdown,s=c()("slds-context-bar__item",{"slds-is-active":n,"slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click":a,"slds-is-open":l});return r.a.createElement("li",{className:s},r.a.createElement("a",{href:"javascript:void(0);",className:"slds-context-bar__label-action",title:t},n&&r.a.createElement("span",{className:"slds-assistive-text"},"Current Page:"),r.a.createElement("span",{className:"slds-truncate",title:t},t)),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{onClick:e.onClick}),o&&g))};y.defaultProps={lable:"Menu Item",hasMenuDropdown:!0},y.propTypes={label:o.a.string.isRequired,isActive:o.a.bool,hasNavMenu:o.a.bool,hasNavMenuOpen:o.a.bool,hasMenuDropdown:o.a.bool};var M=function(e){return r.a.createElement("div",{className:"slds-context-bar__icon-action slds-p-left_none"},r.a.createElement(p.b,_({className:"slds-button_icon slds-context-bar__button",symbol:"chevrondown","aria-haspopup":"true",assistiveText:"Open menu item submenu",title:"Open menu item submenu"},e)))},E=function(e){var t=e.appName,n=e.homeItemIsActive,a=e.hasNavMenuOpen,l=e.children;return r.a.createElement("div",{className:"slds-context-bar"},r.a.createElement("div",{className:"slds-context-bar__primary"},r.a.createElement("div",{className:"slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover"},r.a.createElement("div",{className:"slds-context-bar__icon-action"},r.a.createElement(m.a,{className:"slds-context-bar__button"})),r.a.createElement("span",{className:"slds-context-bar__label-action slds-context-bar__app-name"},r.a.createElement("span",{className:"slds-truncate",title:t||"App Name"},t||"App Name")))),r.a.createElement("nav",{className:"slds-context-bar__secondary",role:"navigation"},r.a.createElement("ul",{className:"slds-grid"},r.a.createElement(y,{label:"Home",isActive:n}),l||r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{label:"Menu Item",hasNavMenu:!0,hasNavMenuOpen:a,onClick:function(){return e.toggleNavMenu()}}),r.a.createElement(y,{label:"Menu Item"}),r.a.createElement(y,{label:"Menu Item"}),r.a.createElement(y,{label:"Menu Item"})))))};E.propTypes={appName:o.a.string,homeItemIsActive:o.a.bool,hasNavMenuOpen:o.a.bool,children:o.a.node};var N=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(a=b(t).call(this))||"object"!==d(a)&&"function"!=typeof a?v(n):a).toggleNavMenu=e.toggleNavMenu.bind(v(e)),e.state={hasNavMenuOpen:!1},e}var n,l,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a["Component"]),n=t,(l=[{key:"toggleNavMenu",value:function(){this.setState({hasNavMenuOpen:!this.state.hasNavMenuOpen})}},{key:"render",value:function(){return r.a.createElement(E,{homeItemIsActive:!0,toggleNavMenu:this.toggleNavMenu,hasNavMenuOpen:this.props.hasNavMenuOpen||this.state.hasNavMenuOpen})}}])&&f(n.prototype,l),o&&f(n,o),t}();n.d(t,"Context",function(){return O}),n.d(t,"states",function(){return w});var O=function(e){return r.a.createElement("div",{style:{height:"16rem"}},e.children)},w=(t.default=r.a.createElement(N,null),[{id:"item-active",label:"Item Active",element:r.a.createElement(E,null,r.a.createElement(y,{label:"Menu Item",hasNavMenu:!0}),r.a.createElement(y,{label:"Menu Item"}),r.a.createElement(y,{label:"Menu Item",isActive:!0}),r.a.createElement(y,{label:"Menu Item"}))},{id:"item-menu-open",label:"Item Menu Open",element:r.a.createElement(N,{hasNavMenuOpen:!0})}])}});