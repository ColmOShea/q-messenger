var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/drop-zone/docs.mdx.js"]=function(e){function t(t){for(var a,r,s=t[0],o=t[1],i=t[2],d=0,u=[];d<s.length;d++)r=s[d],l[r]&&u.push(l[r][0]),l[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(m&&m(t);u.length;)u.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,s=1;s<n.length;s++){var o=n[s];0!==l[o]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},l={30:0},c=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var m=o;return c.push([295,0]),n()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},295:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(3),r=n(1),s=(n(23),n(16),n(9)),o=n(5),i=n.n(o),m=n(12),d=n(59),u=n(6),p=n(48),b=n(13),E=n(4),h=n.n(E),O=function(e){return l.a.createElement("div",{className:"demo-only",style:{paddingTop:"2rem"}},e.children)};O.propTypes={children:h.a.node};var j=function(e){return l.a.createElement("div",{className:"demo-only demo-component",style:{width:"100%",height:"10rem"}},e.children)};j.propTypes={children:h.a.node};var g=function(e){return l.a.createElement("div",{className:i()("slds-drop-zone",{"slds-drop-zone_drag":e.isDragging})},e.children)};g.propTypes={isDragging:h.a.bool,children:h.a.node};var f=function(e){return l.a.createElement("div",{className:"slds-drop-zone_drag__slot"})},v=function(e){return l.a.createElement("div",{className:i()("slds-drop-zone__container",{"slds-is-hovered":e.isHovered}),tabIndex:"-1"},l.a.createElement(x,{isContainer:!0,headerText:"Component Name"}),e.children,e.hasActions&&l.a.createElement("div",{className:"slds-drop-zone__actions"},l.a.createElement(p.a,null,l.a.createElement(u.b,{className:"slds-button_icon-x-small",theme:"brand",symbol:"move",assistiveText:"Move",title:"Move"}),l.a.createElement(u.b,{className:"slds-button_icon-x-small",theme:"brand",symbol:"close",assistiveText:"Close",title:"Close"}))))};v.propTypes={hasActions:h.a.bool,isHovered:h.a.bool,children:h.a.node};var y=function(e){return l.a.createElement(m.a,{symbol:e.isContainer?"connected_apps":"builder",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-current-color",title:!1,assistiveText:!1})};y.propTypes={isContainer:h.a.bool};var x=function(e){return l.a.createElement("div",{className:i()("slds-drop-zone__label",{"slds-drop-zone__label_container":e.isContainer})},l.a.createElement(d.a,{figureLeft:l.a.createElement(y,{isContainer:e.isContainer}),flavor:"center"},e.isContainer?l.a.createElement("h2",null,l.a.createElement("button",{className:"slds-drop-zone__label_button slds-button_reset"},l.a.createElement("span",{className:"slds-assistive-text"},"Edit: "),l.a.createElement("span",null,e.headerText))):l.a.createElement("h2",null,e.headerText)))};x.propTypes={isContainer:h.a.bool,headerText:h.a.string};l.a.createElement(g,null,l.a.createElement(j,null)),l.a.createElement(O,null,l.a.createElement(g,{isDragging:!0},l.a.createElement(x,{headerText:"Content"}),l.a.createElement(j,null),l.a.createElement(f,null),l.a.createElement(j,null))),l.a.createElement(O,null,l.a.createElement(g,null,l.a.createElement(j,null),l.a.createElement(v,{isHovered:!0},l.a.createElement(j,null)))),l.a.createElement(O,null,l.a.createElement(g,null,l.a.createElement(j,null),l.a.createElement(v,{hasActions:!0,isHovered:!0},l.a.createElement(j,null)))),l.a.createElement(O,null,l.a.createElement(g,null,l.a.createElement(v,{hasActions:!0},l.a.createElement(b.d,{className:"slds-m-bottom_small"},l.a.createElement(b.c,{title:"Accounts",showIcon:!0,symbol:"account"}),l.a.createElement(b.a,{hasPadding:!0},"Card Body"),l.a.createElement(b.b,{linkTabIndex:"-1"},"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Accounts")))),l.a.createElement(v,{hasActions:!0},l.a.createElement(b.d,{className:"slds-m-top_small"},l.a.createElement(b.c,{title:"Accounts",showIcon:!0,symbol:"account"}),l.a.createElement(b.a,{hasPadding:!0},"Card Body"),l.a.createElement(b.b,{linkTabIndex:"-1"},"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Accounts")))))),l.a.createElement(O,null,l.a.createElement(g,{isDragging:!0},l.a.createElement(x,{headerText:"Content"}),l.a.createElement(v,{hasActions:!0},l.a.createElement(b.d,{className:"slds-m-bottom_small"},l.a.createElement(b.c,{title:"Accounts",showIcon:!0,symbol:"account"}),l.a.createElement(b.a,{hasPadding:!0},"Card Body"),l.a.createElement(b.b,{linkTabIndex:"-1"},"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Accounts")))),l.a.createElement(f,null),l.a.createElement(v,{hasActions:!0},l.a.createElement(b.d,{className:"slds-m-top_small"},l.a.createElement(b.c,{title:"Accounts",showIcon:!0,symbol:"account"}),l.a.createElement(b.a,{hasPadding:!0},"Card Body"),l.a.createElement(b.b,{linkTabIndex:"-1"},"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Accounts")))))),n(32),n(2);n.d(t,"getElement",function(){return D}),n.d(t,"getContents",function(){return I});var _=c.c.h2,A=c.c.h3,C=c.c.li,w=c.c.p,T=c.c.strong,N=c.c.ul,D=function(){return Object(a.createElement)(c.b,{},Object(a.createElement)("div",{className:"lead doc"},"Screen building elements that surround areas where components can be placed. Drop Zones visually indicate to users where they may drag and drop components onto a page."),Object(a.createElement)(r.a,{exampleOnly:!0},Object(a.createElement)(g,null,Object(a.createElement)(j,null),Object(a.createElement)(v,{hasActions:!0,isHovered:!0},Object(a.createElement)(j,null)))),_({id:"Base-Drop-Zone"},"Base Drop Zone"),w({},"A Base Drop Zone outlines areas within a page where users may drag and drop a component. These create a template to guide users within a screen building experience."),Object(a.createElement)(s.a,{title:"Drop Zone - Base"},Object(a.createElement)(r.a,{toggleCode:!1},Object(a.createElement)(g,null,Object(a.createElement)(j,null)))),_({id:"Drag-Over-Drop-Zone"},"Drag Over Drop Zone"),w({},"When dragging a component, use the drag over drop zone to indicate to the user where the component will be placed when dropped."),Object(a.createElement)(s.a,{title:"Drop Zone - Drag Over"},Object(a.createElement)(r.a,null,Object(a.createElement)(O,null,Object(a.createElement)(g,{isDragging:!0},Object(a.createElement)(x,{headerText:"Content"}),Object(a.createElement)(j,null),Object(a.createElement)(f,null),Object(a.createElement)(j,null))))),A({id:"Insertion-Point"},"Insertion Point"),w({},"An insertion point is used to futher communicate to the user the exact slot the component is being placed."),Object(a.createElement)(r.a,{toggleCode:!1},Object(a.createElement)(f,null)),w({},"The position of this element should be controlled by your implementation."),N({},C({},w({},T({},"When there are no components in the drop zone"),": The insertion point should be placed in the center.")),C({},w({},T({},"When there are components in the drop zone"),": The insertion point should be placed before or after components, to indicate where a new component will be placed relative to the ones already in the the drop zone."))),_({id:"Drop-Zone-Container"},"Drop Zone Container"),w({},"Use a drop zone container to highlight components within a drop zone. This provides a label for the component, as well as Button Icons to perform actions, such as moving the component and deleting the component from the screen."),Object(a.createElement)(s.a,{title:"Drop Zone - Container"},Object(a.createElement)(r.a,null,Object(a.createElement)(g,null,Object(a.createElement)(j,null),Object(a.createElement)(v,{hasActions:!0,isHovered:!0},Object(a.createElement)(j,null))))),_({id:"Example-Cards"},"Example - Cards"),Object(a.createElement)(s.a,{title:"Drop Zone - Cards Example"},Object(a.createElement)(r.a,null,Object(a.createElement)(O,null,Object(a.createElement)(g,null,Object(a.createElement)(v,{hasActions:!0},Object(a.createElement)(b.d,{className:"slds-m-bottom_small"},Object(a.createElement)(b.c,{title:"Accounts",showIcon:!0,symbol:"account"}),Object(a.createElement)(b.a,{hasPadding:!0},"Card Body"),Object(a.createElement)(b.b,{linkTabIndex:"-1"},"View All ",Object(a.createElement)("span",{className:"slds-assistive-text"},"Accounts")))),Object(a.createElement)(v,{hasActions:!0},Object(a.createElement)(b.d,{className:"slds-m-top_small"},Object(a.createElement)(b.c,{title:"Accounts",showIcon:!0,symbol:"account"}),Object(a.createElement)(b.a,{hasPadding:!0},"Card Body"),Object(a.createElement)(b.b,{linkTabIndex:"-1"},"View All ",Object(a.createElement)("span",{className:"slds-assistive-text"},"Accounts")))))))),_({id:"Example-Cards-Insertion"},"Example - Cards Insertion"),Object(a.createElement)(s.a,{title:"Drop Zone - Cards Insert Example"},Object(a.createElement)(r.a,null,Object(a.createElement)(O,null,Object(a.createElement)(g,{isDragging:!0},Object(a.createElement)(x,{headerText:"Content"}),Object(a.createElement)(v,{hasActions:!0},Object(a.createElement)(b.d,{className:"slds-m-bottom_small"},Object(a.createElement)(b.c,{title:"Accounts",showIcon:!0,symbol:"account"}),Object(a.createElement)(b.a,{hasPadding:!0},"Card Body"),Object(a.createElement)(b.b,{linkTabIndex:"-1"},"View All ",Object(a.createElement)("span",{className:"slds-assistive-text"},"Accounts")))),Object(a.createElement)(f,null),Object(a.createElement)(v,{hasActions:!0},Object(a.createElement)(b.d,{className:"slds-m-top_small"},Object(a.createElement)(b.c,{title:"Accounts",showIcon:!0,symbol:"account"}),Object(a.createElement)(b.a,{hasPadding:!0},"Card Body"),Object(a.createElement)(b.b,{linkTabIndex:"-1"},"View All ",Object(a.createElement)("span",{className:"slds-assistive-text"},"Accounts")))))))))},I=function(){return Object(c.a)(D())}}});