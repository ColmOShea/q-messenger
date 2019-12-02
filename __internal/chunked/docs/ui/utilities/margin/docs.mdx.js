var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/utilities/margin/docs.mdx.js"]=function(e){function t(t){for(var i,n,l=t[0],s=t[1],m=t[2],p=0,d=[];p<l.length;p++)n=l[p],r[n]&&d.push(r[n][0]),r[n]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);for(c&&c(t);d.length;)d.shift()();return o.push.apply(o,m||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],i=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(i=!1)}i&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},r={96:0},o=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var c=s;return o.push([136,0]),a()}({0:function(e,t){e.exports=React},136:function(e,t,a){"use strict";a.r(t),a.d(t,"getElement",function(){return f}),a.d(t,"getContents",function(){return z});var i=a(0),r=a(3),o=a(17),n=a(9),l=r.c.a,s=r.c.code,m=r.c.h2,c=r.c.h3,p=r.c.li,d=r.c.p,u=r.c.strong,b=r.c.table,x=r.c.tbody,g=r.c.td,y=r.c.th,j=r.c.thead,O=r.c.tr,h=r.c.ul,f=function(){return Object(i.createElement)(r.b,{},Object(i.createElement)("div",{className:"doc lead"},"Adjust whitespace by applying horizontal and vertical margin helpers"),m({id:"About-Margin"},"About Margin"),d({},"The base unit of all of our spacing metrics is ",u({},"4"),"."),d({},u({},"Before using")),h({},p({},"Most components already come with spacing included. These utility classes are for added convenience in laying out components."),p({},"Classes prefixed by ",s({},"slds-m-")," are used for adding ",u({},"margins"),". Classes prefixed in ",s({},"slds-p-")," are used for adding ",l({href:"/utilities/padding"},"padding")),p({},"The directions available for the spacing classes are ",s({},"top"),", ",s({},"right"),", ",s({},"bottom"),", and ",s({},"left"),"."),p({},"You can use the ",s({},"vertical")," shortcut for both ",s({},"top")," and ",s({},"bottom"),", ",s({},"horizontal")," for both ",s({},"right")," and ",s({},"left"),", and ",s({},"around")," for all sides."),p({},"Use the ",s({},"_xxx-small")," through ",s({},"_xx-large")," scale to choose the size needed."),p({},"You can also use ",s({},"none")," as the size on any of the directions to enforce zero margin."),p({},"Where ",u({},"vertical centering")," is required, check out our ",l({href:"/utilities/media-objects"},"centered media object")," instead of applying extra ",s({},"margin")," or ",s({},"padding"),".")),m({id:"Examples"},"Examples"),c({id:"Location-Top"},"Location - Top"),Object(i.createElement)(n.a,{title:"top margins"},Object(i.createElement)(i.Fragment,null,Object(i.createElement)(o.a,{type:"m",size:"none",position:"top"}),Object(i.createElement)(o.a,{type:"m",size:"xxx-small",position:"top"}),Object(i.createElement)(o.a,{type:"m",size:"xx-small",position:"top"}),Object(i.createElement)(o.a,{type:"m",size:"x-small",position:"top"}),Object(i.createElement)(o.a,{type:"m",size:"small",position:"top"}),Object(i.createElement)(o.a,{type:"m",size:"medium",position:"top"}),Object(i.createElement)(o.a,{type:"m",size:"large",position:"top"}),Object(i.createElement)(o.a,{type:"m",size:"x-large",position:"top"}),Object(i.createElement)(o.a,{type:"m",size:"xx-large",position:"top"}))),c({id:"Location-Left"},"Location - Left"),Object(i.createElement)(n.a,{title:"left margins"},Object(i.createElement)(i.Fragment,null,Object(i.createElement)(o.a,{type:"m",size:"none",position:"left"}),Object(i.createElement)(o.a,{type:"m",size:"xxx-small",position:"left"}),Object(i.createElement)(o.a,{type:"m",size:"xx-small",position:"left"}),Object(i.createElement)(o.a,{type:"m",size:"x-small",position:"left"}),Object(i.createElement)(o.a,{type:"m",size:"small",position:"left"}),Object(i.createElement)(o.a,{type:"m",size:"medium",position:"left"}),Object(i.createElement)(o.a,{type:"m",size:"large",position:"left"}),Object(i.createElement)(o.a,{type:"m",size:"x-large",position:"left"}),Object(i.createElement)(o.a,{type:"m",size:"xx-large",position:"left"}))),c({id:"Location-Bottom"},"Location - Bottom"),Object(i.createElement)(n.a,{title:"bottom margins"},Object(i.createElement)(i.Fragment,null,Object(i.createElement)(o.a,{type:"m",size:"none",position:"bottom"}),Object(i.createElement)(o.a,{type:"m",size:"xxx-small",position:"bottom"}),Object(i.createElement)(o.a,{type:"m",size:"xx-small",position:"bottom"}),Object(i.createElement)(o.a,{type:"m",size:"x-small",position:"bottom"}),Object(i.createElement)(o.a,{type:"m",size:"small",position:"bottom"}),Object(i.createElement)(o.a,{type:"m",size:"medium",position:"bottom"}),Object(i.createElement)(o.a,{type:"m",size:"large",position:"bottom"}),Object(i.createElement)(o.a,{type:"m",size:"x-large",position:"bottom"}),Object(i.createElement)(o.a,{type:"m",size:"xx-large",position:"bottom"}))),c({id:"Location-Right"},"Location - Right"),Object(i.createElement)(n.a,{title:"right margins"},Object(i.createElement)(i.Fragment,null,Object(i.createElement)(o.a,{type:"m",size:"none",position:"right"}),Object(i.createElement)(o.a,{type:"m",size:"xxx-small",position:"right"}),Object(i.createElement)(o.a,{type:"m",size:"xx-small",position:"right"}),Object(i.createElement)(o.a,{type:"m",size:"x-small",position:"right"}),Object(i.createElement)(o.a,{type:"m",size:"small",position:"right"}),Object(i.createElement)(o.a,{type:"m",size:"medium",position:"right"}),Object(i.createElement)(o.a,{type:"m",size:"large",position:"right"}),Object(i.createElement)(o.a,{type:"m",size:"x-large",position:"right"}),Object(i.createElement)(o.a,{type:"m",size:"xx-large",position:"right"}))),c({id:"Location-Horizontal"},"Location - Horizontal"),Object(i.createElement)(n.a,{title:"horizontal margins"},Object(i.createElement)(i.Fragment,null,Object(i.createElement)(o.a,{type:"m",size:"none",position:"horizontal"}),Object(i.createElement)(o.a,{type:"m",size:"xxx-small",position:"horizontal"}),Object(i.createElement)(o.a,{type:"m",size:"xx-small",position:"horizontal"}),Object(i.createElement)(o.a,{type:"m",size:"x-small",position:"horizontal"}),Object(i.createElement)(o.a,{type:"m",size:"small",position:"horizontal"}),Object(i.createElement)(o.a,{type:"m",size:"medium",position:"horizontal"}),Object(i.createElement)(o.a,{type:"m",size:"large",position:"horizontal"}),Object(i.createElement)(o.a,{type:"m",size:"x-large",position:"horizontal"}),Object(i.createElement)(o.a,{type:"m",size:"xx-large",position:"horizontal"}))),c({id:"Location-Vertical"},"Location - Vertical"),Object(i.createElement)(n.a,{title:"vertical margins"},Object(i.createElement)(i.Fragment,null,Object(i.createElement)(o.a,{type:"m",size:"none",position:"vertical"}),Object(i.createElement)(o.a,{type:"m",size:"xxx-small",position:"vertical"}),Object(i.createElement)(o.a,{type:"m",size:"xx-small",position:"vertical"}),Object(i.createElement)(o.a,{type:"m",size:"x-small",position:"vertical"}),Object(i.createElement)(o.a,{type:"m",size:"small",position:"vertical"}),Object(i.createElement)(o.a,{type:"m",size:"medium",position:"vertical"}),Object(i.createElement)(o.a,{type:"m",size:"large",position:"vertical"}),Object(i.createElement)(o.a,{type:"m",size:"x-large",position:"vertical"}),Object(i.createElement)(o.a,{type:"m",size:"xx-large",position:"vertical"}))),c({id:"Location-Around"},"Location - Around"),Object(i.createElement)(n.a,{title:"around margins"},Object(i.createElement)(i.Fragment,null,Object(i.createElement)(o.a,{type:"m",size:"none",position:"around"}),Object(i.createElement)(o.a,{type:"m",size:"xxx-small",position:"around"}),Object(i.createElement)(o.a,{type:"m",size:"xx-small",position:"around"}),Object(i.createElement)(o.a,{type:"m",size:"x-small",position:"around"}),Object(i.createElement)(o.a,{type:"m",size:"small",position:"around"}),Object(i.createElement)(o.a,{type:"m",size:"medium",position:"around"}),Object(i.createElement)(o.a,{type:"m",size:"large",position:"around"}),Object(i.createElement)(o.a,{type:"m",size:"x-large",position:"around"}),Object(i.createElement)(o.a,{type:"m",size:"xx-large",position:"around"}))),m({id:"Variable-Density-Classes"},"Variable Density Classes"),d({},"In addition to the tokens we've created to support the ",l({href:"https://developer.salesforce.com/blogs/2018/08/new-density-settings-for-the-lightning-experience-ui-in-winter-19.html"},"new density settings"),", we have also created variable density classes for both margin and padding. The tables below show how the values change between the Comfy and Compact settings."),c({id:"Around"},"Around"),b({},j({},O({},y({},"Class Name"),y({},"Comfy Value"),y({},"Compact Value"))),x({},O({},g({},s({},"slds-var-m-around_xxx-small")),g({},"0.125rem"),g({},"0.125rem")),O({},g({},s({},"slds-var-m-around_xx-small")),g({},"0.25rem"),g({},"0.125rem")),O({},g({},s({},"slds-var-m-around_x-small")),g({},"0.5rem"),g({},"0.125rem")),O({},g({},s({},"slds-var-m-around_small")),g({},"0.75rem"),g({},"0.25rem")),O({},g({},s({},"slds-var-m-around_medium")),g({},"1rem"),g({},"0.5rem")),O({},g({},s({},"slds-var-m-around_large")),g({},"1.5rem"),g({},"0.75rem")),O({},g({},s({},"slds-var-m-around_x-large")),g({},"2rem"),g({},"1rem")),O({},g({},s({},"slds-var-m-around_xx-large")),g({},"3rem"),g({},"1.5rem")))),c({id:"Left-Right-Horizontal"},"Left, Right, Horizontal"),b({},j({},O({},y({},"Class Name"),y({},"Comfy Value"),y({},"Compact Value"))),x({},O({},g({},s({},"slds-var-m-*_xxx-small")),g({},"0.125rem"),g({},"0.125rem")),O({},g({},s({},"slds-var-m-*_xx-small")),g({},"0.25rem"),g({},"0.125rem")),O({},g({},s({},"slds-var-m-*_x-small")),g({},"0.5rem"),g({},"0.25rem")),O({},g({},s({},"slds-var-m-*_small")),g({},"0.75rem"),g({},"0.5rem")),O({},g({},s({},"slds-var-m-*_medium")),g({},"1rem"),g({},"0.75rem")),O({},g({},s({},"slds-var-m-*_large")),g({},"1.5rem"),g({},"0.75rem")),O({},g({},s({},"slds-var-m-*_x-large")),g({},"2rem"),g({},"1rem")),O({},g({},s({},"slds-var-m-*_xx-large")),g({},"3rem"),g({},"1.5rem")))),c({id:"Top-Bottom-Vertical"},"Top, Bottom, Vertical"),b({},j({},O({},y({},"Class Name"),y({},"Comfy Value"),y({},"Compact Value"))),x({},O({},g({},s({},"slds-var-m-*_xxx-small")),g({},"0.125rem"),g({},"0.125rem")),O({},g({},s({},"slds-var-m-*_xx-small")),g({},"0.25rem"),g({},"0.125rem")),O({},g({},s({},"slds-var-m-*_x-small")),g({},"0.5rem"),g({},"0.25rem")),O({},g({},s({},"slds-var-m-*_small")),g({},"0.75rem"),g({},"0.5rem")),O({},g({},s({},"slds-var-m-*_medium")),g({},"1rem"),g({},"0.5rem")),O({},g({},s({},"slds-var-m-*_large")),g({},"1.5rem"),g({},"0.75rem")),O({},g({},s({},"slds-var-m-*_x-large")),g({},"2rem"),g({},"1rem")),O({},g({},s({},"slds-var-m-*_xx-large")),g({},"3rem"),g({},"1.5rem")))))},z=function(){return Object(r.a)(f())}},18:function(e,t){e.exports=JSBeautify}});