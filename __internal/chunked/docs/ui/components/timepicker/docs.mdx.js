var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/timepicker/docs.mdx.js"]=function(e){function t(t){for(var n,a,c=t[0],s=t[1],r=t[2],d=0,m=[];d<c.length;d++)a=c[d],o[a]&&m.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);m.length;)m.shift()();return l.push.apply(l,r||[]),i()}function i(){for(var e,t=0;t<l.length;t++){for(var i=l[t],n=!0,c=1;c<i.length;c++){var s=i[c];0!==o[s]&&(n=!1)}n&&(l.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},o={76:0},l=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var r=0;r<c.length;r++)t(c[r]);var u=s;return l.push([276,0]),i()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},276:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),l=i(3),a=i(1),c=(i(16),i(21)),s=function(e){return o.a.createElement(c.c,{listboxClassName:"slds-dropdown slds-dropdown_fluid slds-dropdown_length-5",vertical:!0},o.a.createElement(c.d,null,o.a.createElement(c.e,{id:"listbox-option-unique-id-01",title:"6:00am",focused:e.optionFocused})),o.a.createElement(c.d,null,o.a.createElement(c.e,{id:"listbox-option-unique-id-02",title:"7:00am"})),o.a.createElement(c.d,null,o.a.createElement(c.e,{id:"listbox-option-unique-id-03",title:"8:00am",selected:e.optionSelected})),o.a.createElement(c.d,null,o.a.createElement(c.e,{id:"listbox-option-unique-id-04",title:"9:00am"})),o.a.createElement(c.d,null,o.a.createElement(c.e,{id:"listbox-option-unique-id-05",title:"10:00am"})),o.a.createElement(c.d,null,o.a.createElement(c.e,{id:"listbox-option-unique-id-06",title:"11:00am"})),o.a.createElement(c.d,null,o.a.createElement(c.e,{id:"listbox-option-unique-id-07",title:"12:00pm"})),o.a.createElement(c.d,null,o.a.createElement(c.e,{id:"listbox-option-unique-id-08",title:"1:00pm"})),o.a.createElement(c.d,null,o.a.createElement(c.e,{id:"listbox-option-unique-id-09",title:"2:00pm"})),o.a.createElement(c.d,null,o.a.createElement(c.e,{id:"listbox-option-unique-id-10",title:"3:00pm"})),o.a.createElement(c.d,null,o.a.createElement(c.e,{id:"listbox-option-unique-id-11",title:"4:00pm"})),o.a.createElement(c.d,null,o.a.createElement(c.e,{id:"listbox-option-unique-id-12",title:"5:00pm"})))},r=o.a.createElement(c.a,{label:"Time",className:"slds-combobox-picklist slds-timepicker",autocomplete:!0,inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:!1,placeholder:" ",listbox:o.a.createElement(s,null)}),u=[{id:"focused",label:"Focused",element:o.a.createElement(c.a,{label:"Time",className:"slds-combobox-picklist slds-timepicker",autocomplete:!0,isOpen:!0,inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:!1,placeholder:" ",listbox:o.a.createElement(s,null)})},{id:"open-item-focused",label:"Open - Item Focused",element:o.a.createElement(c.a,{label:"Time",className:"slds-combobox-picklist slds-timepicker",autocomplete:!0,isOpen:!0,inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:!1,placeholder:" ",listbox:o.a.createElement(s,{optionFocused:!0}),"aria-activedescendant":"listbox-option-unique-id-01"})},{id:"time-selection",label:"Open - Time selected",element:o.a.createElement(c.a,{label:"Time",className:"slds-combobox-picklist slds-timepicker",autocomplete:!0,isOpen:!0,inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:!1,placeholder:" ",value:"8:00am",listbox:o.a.createElement(s,{optionSelected:!0})})}],d=i(2);i.d(t,"getElement",function(){return y}),i.d(t,"getContents",function(){return O});var m=l.c.a,p=l.c.code,b=l.c.h2,h=l.c.h3,f=l.c.li,x=l.c.p,g=l.c.strong,E=l.c.ul,y=function(){return Object(n.createElement)(l.b,{},Object(n.createElement)("div",{className:"doc lead"},"A timepicker is an autocomplete text input to capture a time."),Object(n.createElement)(a.a,{exampleOnly:!0,style:{height:"16rem"}},Object(d.e)(u,"time-selection")),b({id:"About-Timepicker"},"About Timepicker"),h({id:"Implementation"},"Implementation"),x({},"A timepicker is used to select a single time. The component is using the combobox HTML structure and has the following markup requirements:"),x({},g({},"Desktop:")),E({},f({},"Add ",p({},".slds-is-open")," to the element with ",p({},".slds-dropdown-trigger")," to invoke the dropdown that contains the list of time options."),f({},"The ",p({},".slds-has-focus")," modifier class is required on the ",p({},".slds-listbox__option")," element that has focus."),f({},"The ",p({},".slds-is-selected")," modifier class is required on the ",p({},".slds-listbox__option")," element that has been selected.")),x({},g({},"Mobile:")),E({},f({},"When on mobile, we want to leverage the native timepicker by changing the ",p({},"input")," type from ",p({},"text")," to ",p({},"time")),f({},"When switching ",p({},'input type="text"')," to ",p({},'input type="time"')," for mobile, we need to remove the ARIA attributes. The native rendering doesn't require these.",E({},f({},"On the element with the class ",p({},"slds-combobox"),", please remove ",p({},'role="combobox"'),", ",p({},"aria-expanded"),", and ",p({},"aria-haspopup"),"."),f({},"On the ",p({},"input")," that we just added ",p({},'type="time"')," too, please remove ",p({},"aria-controls"),", ",p({},"aria-autocomplete"),", and ",p({},'role="textbox"'),".")))),h({id:"Accessibility"},"Accessibility"),x({},"Please follow the implementation guidelines found under ",m({href:"/components/combobox"},"Combobox")),b({id:"Base"},"Base"),Object(n.createElement)(a.a,{style:{height:"16rem"}},r),b({id:"States"},"States"),h({id:"Focused"},"Focused"),Object(n.createElement)(a.a,{style:{height:"16rem"}},Object(d.e)(u,"focused")),h({id:"Open-Item-Focused"},"Open - Item Focused"),Object(n.createElement)(a.a,{style:{height:"16rem"}},Object(d.e)(u,"open-item-focused")),h({id:"Open-Time-selected"},"Open - Time selected"),Object(n.createElement)(a.a,{style:{height:"16rem"}},Object(d.e)(u,"time-selection")))},O=function(){return Object(l.a)(y())}}});