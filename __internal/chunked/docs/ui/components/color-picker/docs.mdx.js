var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/color-picker/docs.mdx.js"]=function(e){function t(t){for(var o,s,l=t[0],i=t[1],c=t[2],u=0,m=[];u<l.length;u++)s=l[u],n[s]&&m.push(n[s][0]),n[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(d&&d(t);m.length;)m.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,l=1;l<r.length;l++){var i=r[l];0!==n[i]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var o={},n={21:0},a=[];function s(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=o,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=i;return a.push([219,0]),r()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},219:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),a=r(3),s=r(1),l=(r(26),r(41),r(16)),i=r(2),c=r(5),d=r.n(c),u=r(11),m=r(14),h=r(31),p=r(33),f=r(8),b=r(15);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=["#e3abec","#c2dbf7","#9fd6ff","#9de7da","#9df0c0","#fff099","#fed49a","#d073e0","#86baf3","#5ebbff","#44d8be","#3be282","#ffe654","#ffb758","#bd35bd","#5779c1","#5ebbff","#00aea9","#3cba4c","#f5bc25","#f99221","#580d8c","#001970","#0a2399","#0b7477","#0b6b50","#b67e11","#b85d0d"],O=function(e){return n.a.createElement("span",{key:i.c.uniqueId("swatch-"),className:"slds-swatch",style:{background:e.color}},n.a.createElement("span",{className:"slds-assistive-text","aria-hidden":e.ariaHidden},e.color))},w=function(e){var t=e.hasSummaryError,r="color-picker-summary-error";return n.a.createElement(f.b,{formElementClassName:"slds-color-picker__summary",labelContent:"Choose Color",labelClassName:"slds-color-picker__summary-label",inputId:"color-picker-summary-input",hasError:t},n.a.createElement(m.a,{className:"slds-color-picker__summary-button slds-button_icon slds-button_icon-more",title:"Choose Color"},n.a.createElement(O,{color:"hsl(220, 46%, 55%)",suppressAssistiveText:!0}),n.a.createElement(u.a,{className:"slds-button__icon slds-button__icon_small slds-m-left_xx-small",sprite:"utility",symbol:"down"}),n.a.createElement("span",{className:"slds-assistive-text"},"Choose a color. Current color: #5679C0")),n.a.createElement("div",{className:"slds-color-picker__summary-input"},n.a.createElement(b.a,{id:"color-picker-summary-input",defaultValue:"#5679C0","aria-describedby":t?r:null})),t?n.a.createElement("p",{className:"slds-form-error",id:r},"Please ensure value is correct"):null)},S=function(e){var t=e.isMenuRole,r=t?"menu":"listbox",o=t?"menuitem":"option";return n.a.createElement("ul",{className:"slds-color-picker__swatches",role:r},g.map(function(e,t){return n.a.createElement("li",{key:i.c.uniqueId("color-picker-swatch-"),className:"slds-color-picker__swatch",role:"presentation"},n.a.createElement("a",{className:"slds-color-picker__swatch-trigger",href:"#",role:o,tabIndex:0===t?0:-1},n.a.createElement(O,{color:e,index:t})))}))},x=function(e){var t=i.c.uniqueId("color-picker-input-range-"),r=i.c.uniqueId("color-picker-input-hex-"),o=i.c.uniqueId("color-picker-input-r-"),a=i.c.uniqueId("color-picker-input-g-"),s=i.c.uniqueId("color-picker-input-b-"),l=e.hasCustomError;return n.a.createElement("div",{className:"slds-color-picker__custom"},n.a.createElement("p",{id:"color-picker-instructions",className:"slds-assistive-text"},"Use arrow keys to select a saturation and brightness, on an x and y axis."),n.a.createElement("div",{className:"slds-color-picker__custom-range",style:{background:"hsl(220, 100%, 50%)"}},n.a.createElement("a",{className:"slds-color-picker__range-indicator",style:{bottom:"45%",left:"46%"},href:"#","aria-live":"assertive","aria-atomic":"true","aria-describedby":"color-picker-instructions"},n.a.createElement("span",{className:"slds-assistive-text"},"Saturation: 46%. Brightness: 45%."))),n.a.createElement("div",{className:"slds-color-picker__hue-and-preview"},n.a.createElement("label",{className:"slds-assistive-text",htmlFor:t},"Select Hue"),n.a.createElement("input",{type:"range",className:"slds-color-picker__hue-slider",min:"0",max:"360",defaultValue:"208",id:t}),n.a.createElement(O,{color:"#5679C0",ariaHidden:!0})),n.a.createElement("div",{className:"slds-color-picker__custom-inputs"},n.a.createElement(f.b,{labelContent:"Hex",formElementClassName:"slds-color-picker__input-custom-hex",hasError:l,inputId:r},n.a.createElement(b.a,{id:r,defaultValue:"#5679C0","aria-describedby":l?"color-picker-custom-error":null})),n.a.createElement(f.b,{labelContent:n.a.createElement("abbr",{title:"Red"},"R"),inputId:o},n.a.createElement(b.a,{defaultValue:"86",id:o})),n.a.createElement(f.b,{labelContent:n.a.createElement("abbr",{title:"Green"},"G"),inputId:a},n.a.createElement(b.a,{defaultValue:"121",id:a})),n.a.createElement(f.b,{labelContent:n.a.createElement("abbr",{title:"blue"},"B"),inputId:s},n.a.createElement(b.a,{defaultValue:"192",id:s}))),l?n.a.createElement("p",{className:"slds-form-error",id:"color-picker-custom-error"},"Please ensure value is correct"):null)},j=function(){return n.a.createElement("div",{className:"slds-color-picker__selector-footer"},n.a.createElement(m.a,{isNeutral:!0},"Cancel"),n.a.createElement(m.a,{isBrand:!0},"Done"))},C=function(e){return n.a.createElement(h.a,{selectedIndex:e.selectedTabIndex},n.a.createElement(h.a.Item,{title:"Default",id:"color-picker-default"},n.a.createElement(S,null)),n.a.createElement(h.a.Item,{title:"Custom",id:"color-picker-custom"},n.a.createElement(x,{hasCustomError:e.hasCustomError})))},T=function(e){function t(e){var r,o,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(r=!(n=v(t).call(this))||"object"!==y(n)&&"function"!=typeof n?E(o):n).state={selectedTabIndex:e.selectedTabIndex||0},r.isFullFeatureMode=r.isFullFeatureMode.bind(E(r)),r.isPredefinedMode=r.isPredefinedMode.bind(E(r)),r.isCustomOnlyMode=r.isCustomOnlyMode.bind(E(r)),r.isSwatchesOnlyMode=r.isSwatchesOnlyMode.bind(E(r)),r}var r,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,n.a.Component),r=t,(o=[{key:"isFullFeatureMode",value:function(){var e=this.props,t=e.hasPredefined,r=e.hasCustom;return!(!t||!r)}},{key:"isPredefinedMode",value:function(){var e=this.props,t=e.hasPredefined,r=e.hasCustom;return!(!t||r)}},{key:"isCustomOnlyMode",value:function(){var e=this.props,t=e.hasPredefined,r=e.hasCustom;return!(t||!r)}},{key:"isSwatchesOnlyMode",value:function(){var e=this.props,t=e.hasPredefined,r=e.hasCustom;return!(t||r)}},{key:"render",value:function(){var e=this.state.selectedTabIndex,t=this.props,r=t.isOpen,o=t.hasSummaryError,a=t.hasCustomError,s=r?"slds-show":"slds-hide",l=this.isSwatchesOnlyMode()?null:n.a.createElement(w,{hasSummaryError:o}),i=this.isSwatchesOnlyMode()?null:n.a.createElement(j,null),c=null;return this.isFullFeatureMode()?c=n.a.createElement(C,{hasCustomError:a,selectedTabIndex:e}):this.isPredefinedMode()?c=n.a.createElement(S,null):this.isCustomOnlyMode()?c=n.a.createElement(x,{hasCustomError:a}):this.isSwatchesOnlyMode()&&(c=n.a.createElement(C,{selectedTabIndex:e})),n.a.createElement("div",{className:"slds-color-picker"},l,n.a.createElement(p.a,{title:"Choose a color",className:d()("slds-color-picker__selector",s),footer:i},c))}}])&&k(r.prototype,o),a&&k(r,a),t}();T.defaultProps={selectedTabIndex:0,isOpen:!1,hasPredefined:!0,hasCustom:!0};var I=T,P=n.a.createElement(I,null),N=[{id:"summary-error",label:"Summary Error",element:n.a.createElement(I,{hasSummaryError:!0})},{id:"color-picker-open",label:"Open, default tab selected",element:n.a.createElement(I,{isOpen:!0})},{id:"custom-tab-selected",label:"Open, custom tab selected",element:n.a.createElement(I,{isOpen:!0,selectedTabIndex:1})},{id:"custom-tab-selected-error",label:"Open, custom tab selected, error state",element:n.a.createElement(I,{isOpen:!0,hasCustomError:!0,selectedTabIndex:1})}],M=n.a.createElement(I,{hasPredefined:!1}),A=[{id:"custom-color-picker-open",label:"Open",element:n.a.createElement(I,{isOpen:!0,hasPredefined:!1})},{id:"custom-color-picker-open-error",label:"Open with Error",element:n.a.createElement(I,{isOpen:!0,hasCustomError:!0,hasPredefined:!1})}],F=n.a.createElement(I,{hasCustom:!1}),H=[{id:"predefined-color-picker-open",label:"Open",element:n.a.createElement(I,{isOpen:!0,hasCustom:!1})}],B=r(10),D=n.a.createElement(B.l,null,n.a.createElement("div",{className:"slds-dropdown slds-dropdown_left"},n.a.createElement("div",{className:"slds-color-picker slds-color-picker_swatches-only"},n.a.createElement("div",{className:"slds-color-picker__selector"},n.a.createElement(S,{isMenuRole:!0}))))),R=[{id:"open-swatches-only-color-picker",label:"Open",element:n.a.createElement("div",{style:{height:"12rem"}},n.a.createElement(B.l,{className:"slds-is-open"},n.a.createElement("div",{className:"slds-dropdown slds-dropdown_left"},n.a.createElement("div",{className:"slds-color-picker slds-color-picker_swatches-only"},n.a.createElement("div",{className:"slds-color-picker__selector"},n.a.createElement(S,{isMenuRole:!0}))))))}];r.d(t,"getElement",function(){return Q}),r.d(t,"getContents",function(){return X});var q=a.c.code,L=a.c.em,V=a.c.h2,G=a.c.h3,U=a.c.h4,K=a.c.li,J=a.c.p,W=a.c.strong,z=a.c.ul,Q=function(){return Object(o.createElement)(a.b,{},Object(o.createElement)("div",{className:"doc lead"},"A configurable interface for color selection"),Object(o.createElement)(s.a,{exampleOnly:!0},Object(i.e)(N,"color-picker-open")),V({id:"About-Color-Picker"},"About Color Picker"),J({},"The Unified Color Picker component allows for a fully accessible and configurable color picker, allowing the user to pick from a set of predefined colors (swatches), or to pick a custom color using a HSB selection interface."),J({},"It can be configured to show one or both of those color selection interfaces."),J({},"The Unified Color Picker component allows for a fully accessible and configurable","color picker, allowing the user to pick from a set of predefined colors","(swatches), or to pick a custom color using a HSB selection interface."),J({},"It can be configured to show one or both of those color selection interfaces."),G({id:"Accessibility"},"Accessibility"),J({},"This component makes use of other components, such as Popovers, Tabs, and Input.","All accessibility rules and guidelines for those components ",L({},"need")," to be followed","for proper accessibility support."),J({},"As this is a highly interactive component, there are some key accessibility","guidelines that must be followed for specific elements:"),J({},W({},".slds-color-picker__summary-label")),J({},"This element ",L({},"needs")," a for attribute with the value of the",q({},".slds-color-picker__summary-input"),"'s ID"),J({},W({},".slds-color-picker__swatches")),J({},"This element ",L({},"needs")," a ",q({},"role")," of ",q({},"listbox"),"."),J({},W({},".slds-color-picker__swatch")),J({},"This element ",L({},"needs")," a ",q({},"role")," of ",q({},"presentation"),"."),J({},W({},".slds-color-picker__swatch-trigger")),J({},"This element ",L({},"needs")," a ",q({},"role")," of ",q({},"option"),"."),J({},W({},".slds-color-picker__range-indicator")),J({},"Since this element is focused and moved to indicate the ",L({},"working color")," it ",L({},"needs"),"proper aria tags to indicate its job and value. First, an ",q({},"aria-live")," attribute",L({},"needs")," to be set to ",q({},"assertive"),", ",q({},"aria-atomic")," ",L({},"needs")," to be set to ",q({},"true"),", and",q({},"aria-describedby")," needs to reference the instructions text for the custom color","picker range, which in our example is the hidden ",q({},"#color-picker-instructions"),"element."),V({id:"Base"},"Base"),Object(o.createElement)(s.a,null,P),G({id:"States"},"States"),U({id:"Summary-Error"},"Summary Error"),Object(o.createElement)(s.a,null,Object(i.e)(N,"summary-error")),U({id:"Open-default-tab-selected"},"Open, default tab selected"),Object(o.createElement)(s.a,null,Object(i.e)(N,"color-picker-open")),U({id:"Open-custom-tab-selected"},"Open, custom tab selected"),Object(o.createElement)(s.a,null,Object(i.e)(N,"custom-tab-selected")),U({id:"Open-custom-tab-selected-error-state"},"Open, custom tab selected, error state"),Object(o.createElement)(s.a,null,Object(i.e)(N,"custom-tab-selected-error")),V({id:"Custom-Only"},"Custom Only"),J({},"The Custom-Only variant should only render the custom color selection tool in the Color Picker popover. It should not be inside a tabset."),Object(o.createElement)(s.a,null,M),G({id:"States-2"},"States"),U({id:"Open"},"Open"),Object(o.createElement)(s.a,null,Object(i.e)(A,"custom-color-picker-open")),U({id:"Open-with-Error"},"Open with Error"),Object(o.createElement)(s.a,null,Object(i.e)(A,"custom-color-picker-open-error")),V({id:"Predefined-Only"},"Predefined Only"),J({},"The Predefined Only variant should only render the predefined colors selection in the Color Picker popover. It should not be inside a tabset."),Object(o.createElement)(s.a,null,F),G({id:"States-3"},"States"),U({id:"Open-2"},"Open"),Object(o.createElement)(s.a,null,Object(i.e)(H,"predefined-color-picker-open")),V({id:"Swatches-Only"},"Swatches Only"),J({},"The Swatches Only variant should only render a group of individual swatches. It should not render any of the main chrome of the color picker UI (no Summary section, no Popover, no Tabset), it should only render the Color Picker swatches selector. This component should be rendered inside a menu."),Object(o.createElement)(l.a,{type:"a11y",header:"Accessibility Note"},"The accessibility requirements for this Variant are slightly different from the others:",Object(o.createElement)("ul",{className:"slds-list_dotted"},Object(o.createElement)("li",null,Object(o.createElement)("code",null,".slds-color-picker__swatches")," ",Object(o.createElement)("em",null,"needs")," a ",Object(o.createElement)("code",null,"role")," of ",Object(o.createElement)("code",null,"menu"),"."),Object(o.createElement)("li",null,Object(o.createElement)("code",null,".slds-color-picker__swatch-trigger")," ",Object(o.createElement)("em",null,"needs")," a ",Object(o.createElement)("code",null,"role")," of ",Object(o.createElement)("code",null,"option")))),Object(o.createElement)(s.a,null,D),G({id:"States-4"},"States"),U({id:"Open-3"},"Open"),Object(o.createElement)(s.a,null,Object(i.e)(R,"open-swatches-only-color-picker")),V({id:"Implementation-Guidelines"},"Implementation Guidelines"),J({},"The Color Picker is a dynamic component with several 'live' areas. These areas need to update when certain user interactions occur."),G({id:"Terms"},"Terms"),J({},"Several terms are used in this document, each with particular meaning. Please take note of the following:"),z({},K({},L({},W({},"Need/s"))," This rule must be implemented for the component to appear or function as expected."),K({},L({},W({},"Current color"))," The current selected, submitted, and validated color."),K({},L({},W({},"Working color"))," The working, unsubmitted color, built with the custom-range tool.")),G({id:"Functionality"},"Functionality"),J({},"When creating an implementation of this UI component, please take note to include the following functionality:"),J({},W({},".slds-color-picker__button")),J({},"Aside from the 'swatches-only' variant, all Color Picker variants have a summary section with a clickable button. This button ",L({},"needs")," to toggle the visibility of the ",q({},".slds-color-picker__selector")," popover."),J({},W({},".slds-color-picker__button .slds-swatch")),J({},"This swatch ",L({},"needs")," an inline style of ",q({},"background"),", set to the ",L({},"current color"),". It ",L({},"needs")," to update whenever the ",L({},"current color")," is updated."),J({},W({},".slds-color-picker__summary-input")),J({},"This input ",L({},"needs")," to display the hex value of the ",L({},"current color"),". It should update whenever ",L({},"current color")," is updated. The user can enter a hex color manually. The implementation should check for the validity of the submitted value before setting the color to be the ",L({},"current color"),"."),J({},W({},".slds-color-picker__hue-slider")),J({},"In the custom picker, the hue slider is a range input element that allows the user to select a hue base for a ",L({},"working color"),". Its value ranges from 0 - 360, and represents the hue in an expected hsv color format."),J({},"When the user updates the ",L({},"current color"),", the value on this slider ",L({},"needs")," to be adjusted to the ",L({},"current color"),"'s hue."),J({},W({},".slds-color-picker__custom-range")),J({},"The custom range represents a matrix of all saturation and brightness combinations of the ",L({},"working color"),"'s hue. The x axis of the form represents saturation, and goes from 0% to 100%. On the y axis, brightness is represented, with 0% brightness at the bottom, and 100% brightness at the top."),J({},"Keep in mind that when implementing color conversions, this custom range picker is utilizing the HSB/HSV color model, and not the HSL model."),J({},"This element ",L({},"needs")," an inline style, with the ",q({},"background")," property set to the ",L({},"working color"),"'s hue, as defined by the hue range input element desctibed above. As this element is meant to represent the current ",L({},"working color"),"'s hue's saturation and lightness matrix, css's hsl() syntax is the most appropriate format here, with the hue being the current ",L({},"working color"),"'s hue, the saturation set to 100% and the lightness set to 50% (the 50% lightness is to adjust this HSL range for the HSB color model)."),J({},"A gradient overlay will produce the effect of the saturation and brightness matrix automatically."),J({},"Any mouse clicks on the custom range ",L({},"need")," to set the position of the ",q({},".slds-color-picker__range-indicator")," to the clicked coordinates, and also ",L({},"need")," to update the saturation and brightness values on the working color."),J({},W({},".slds-color-picker__range-indicator")),J({},"This is the targeting element inside the custom range, and represents the current brightness and saturation values of the ",L({},"working color"),"."),J({},"It ",L({},"needs")," declarations for ",q({},"bottom")," and ",q({},"left")," positioning, so it will be properly placed over the correct area of the ",q({},".slds-color-picker__custom-range"),"."),J({},"Conveniently, the values are uniformly represented. The ",q({},"left")," declaration indicates the saturation value, from 0% to 100%, and the ",q({},"bottom")," declaration indicates the brightness value, from 0% to 100%."),J({},W({},".slds-color-picker__hue-and-preview .slds-swatch")),J({},"This swatch is a preview element of the ",L({},"working color")," value from the hue slider and range indicator above. It ",L({},"needs")," an inline style for ",q({},"background"),", set to the completed ",L({},"working color")," value."),J({},W({},".slds-color-picker__custom-inputs")),J({},"The Hex, R(ed), G(reen), and B(lue) text inputs included in this section are representative of the current ",L({},"working color"),"'s converted Hex or RGB values, and ",L({},"need")," to display those as their value."),J({},"Users can, however, directly input into these elements. A valid entry ",L({},"needs")," to update the working color and update related elements. The implementation should protect against invalid submissions."),G({id:"Keyboard-Interactions"},"Keyboard Interactions"),J({},W({},".slds-color-picker__swatches")),J({},"This element has the role of ",q({},"listbox"),", and keyboard interactions when its <a> children are focused ",L({},"needs")," to behave in a menu-like fashion. Keypresses ",L({},"need")," to move the actively focused element in the appropriate direction (left/up will move to the previous item, down/right will move to the next item)."),J({},"Additionally, when focused on the first or last item, the appropriate key action ",L({},"needs")," to move the focus to the last or first item, respectively. It is expected to behave in a cyclical fashion."),J({},W({},".slds-color-picker__range-indicator")),J({},"The range indicator, when focused, ",L({},"needs")," to respond to arrow keypresses by moving 1% in the appropriate direction, unless prohibited by a boundary."),J({},"For an additional effect, if an arrow key is pressed in combination with shift, the indicator can move 10% in the given direction, unless prohibited by a boundary."),J({},W({},"Other Interactions")),J({},"Other expected keyboard interactions (such as input field updates) and their effects on UI can be found in the Implementation Guidelines section above."))},X=function(){return Object(a.a)(Q())}}});