webpackJsonp([0xd2a57dc1d883],{78:function(n,e){"use strict";function o(n,e,o){var t=u.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function t(n,e,o){return u.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=t;var u=[]},196:function(n,e,o){"use strict";var t;e.components={"component---src-templates-docs-content-jsx":o(319),"component---src-templates-docs-content-no-card-jsx":o(320),"component---src-templates-docs-content-no-subnav-jsx":o(321),"component---src-pages-404-jsx":o(317),"component---src-pages-index-jsx":o(318)},e.json=(t={"layout-index.json":o(6),"brand-brandassets.json":o(325)},t["layout-index.json"]=o(6),t["brand-brandvoice.json"]=o(326),t["layout-index.json"]=o(6),t["brand-creativefilters.json"]=o(327),t["layout-index.json"]=o(6),t["brand.json"]=o(324),t["layout-index.json"]=o(6),t["components.json"]=o(328),t["layout-index.json"]=o(6),t["components-mup-web.json"]=o(329),t["layout-index.json"]=o(6),t["content-basics.json"]=o(330),t["layout-index.json"]=o(6),t["content-capitalization.json"]=o(331),t["layout-index.json"]=o(6),t["content-prounouns.json"]=o(332),t["layout-index.json"]=o(6),t["content-punctuation.json"]=o(333),t["layout-index.json"]=o(6),t["content-socialmedia.json"]=o(334),t["layout-index.json"]=o(6),t["content-spellingandglossary.json"]=o(335),t["layout-index.json"]=o(6),t["content-timeanddate.json"]=o(336),t["layout-index.json"]=o(6),t["design-buttons.json"]=o(337),t["layout-index.json"]=o(6),t["design-color.json"]=o(338),t["layout-index.json"]=o(6),t["design-forms.json"]=o(339),t["layout-index.json"]=o(6),t["design-icons.json"]=o(340),t["layout-index.json"]=o(6),t["design-typography.json"]=o(350),t["layout-index.json"]=o(6),t["resources.json"]=o(354),t["layout-index.json"]=o(6),t["design-layout-bounds.json"]=o(341),t["layout-index.json"]=o(6),t["design-layout-breakpoints.json"]=o(342),t["layout-index.json"]=o(6),t["design-layout-chunk.json"]=o(343),t["layout-index.json"]=o(6),t["design-layout-flex.json"]=o(344),t["layout-index.json"]=o(6),t["design-layout-layout-basics.json"]=o(345),t["layout-index.json"]=o(6),t["design-layout-section.json"]=o(346),t["layout-index.json"]=o(6),t["design-layout-sizing.json"]=o(347),t["layout-index.json"]=o(6),t["design-layout-spacing.json"]=o(348),t["layout-index.json"]=o(6),t["design-layout-stripe.json"]=o(349),t["layout-index.json"]=o(6),t["design-usability-a-11-y.json"]=o(351),t["layout-index.json"]=o(6),t["design-usability-i-18-n.json"]=o(352),t["layout-index.json"]=o(6),t["404.json"]=o(322),t["layout-index.json"]=o(6),t["index.json"]=o(353),t["layout-index.json"]=o(6),t["404-html.json"]=o(323),t),e.layouts={"layout---index":o(316)}},197:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function u(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function r(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},c=o(1),i=t(c),l=o(2),d=t(l),p=o(129),f=t(p),m=o(59),h=t(m),y=o(78),g=function(n){var e=n.children;return i.default.createElement("div",null,e())},x=function(n){function e(o){u(this,e);var t=a(this,n.call(this)),r=o.location;return f.default.getPage(r.pathname)||(r=s({},r,{pathname:"/404.html"})),t.state={location:r,pageResources:f.default.getResourcesForPathname(r.pathname)},t}return r(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=f.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;f.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),f.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){f.default.getPage(n.state.location.pathname)&&e.page.path===f.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){var n=(0,y.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,c.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:g,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(i.default.Component);x.propTypes={page:d.default.bool,layout:d.default.bool,location:d.default.object},e.default=x,n.exports=e.default},59:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(413),a=t(u),r=(0,a.default)();n.exports=r},198:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(77),a=o(130),r=t(a),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),a=(0,r.default)(t,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),s[a])return s[a];var c=void 0;return n.some(function(n){if(n.matchPath){if((0,u.matchPath)(a,{path:n.path})||(0,u.matchPath)(a,{path:n.matchPath}))return c=n,s[a]=n,!0}else{if((0,u.matchPath)(a,{path:n.path,exact:!0}))return c=n,s[a]=n,!0;if((0,u.matchPath)(a,{path:n.path+"index.html"}))return c=n,s[a]=n,!0}return!1}),c}}},199:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(100),a=t(u),r=o(78),s=(0,r.apiRunner)("replaceHistory"),c=s[0],i=c||(0,a.default)();n.exports=i},323:function(n,e,o){o(4),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(372)})})}},322:function(n,e,o){o(4),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(373)})})}},325:function(n,e,o){o(4),n.exports=function(n){return o.e(0x69015f2f9687,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(374)})})}},326:function(n,e,o){o(4),n.exports=function(n){return o.e(0xc4c19e4da93,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(375)})})}},327:function(n,e,o){o(4),n.exports=function(n){return o.e(0x72769cb251bd,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(376)})})}},324:function(n,e,o){o(4),n.exports=function(n){return o.e(56623861458364,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(377)})})}},329:function(n,e,o){o(4),n.exports=function(n){return o.e(40355075734387,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(378)})})}},328:function(n,e,o){o(4),n.exports=function(n){return o.e(67716065813132,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(379)})})}},330:function(n,e,o){o(4),n.exports=function(n){return o.e(0x9a71c99e3753,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(380)})})}},331:function(n,e,o){o(4),n.exports=function(n){return o.e(0x7833cd0f9795,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(381)})})}},332:function(n,e,o){o(4),n.exports=function(n){return o.e(0x98bacaa686e4,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(382)})})}},333:function(n,e,o){o(4),n.exports=function(n){return o.e(0xfdb6251d605b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(383)})})}},334:function(n,e,o){o(4),n.exports=function(n){return o.e(4990552357909,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(384)})})}},335:function(n,e,o){o(4),n.exports=function(n){return o.e(0xbd2f13062f5c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(385)})})}},336:function(n,e,o){o(4),n.exports=function(n){return o.e(82424811014877,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(386)})})}},337:function(n,e,o){o(4),n.exports=function(n){return o.e(0x5e460689d2d8,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(387)})})}},338:function(n,e,o){o(4),n.exports=function(n){return o.e(0x5ba362f76b98,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(388)})})}},339:function(n,e,o){o(4),n.exports=function(n){return o.e(0xc1c0c357e0e5,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(389)})})}},340:function(n,e,o){o(4),n.exports=function(n){return o.e(68997215990931,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(390)})})}},341:function(n,e,o){o(4),n.exports=function(n){return o.e(55267989666574,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(391)})})}},342:function(n,e,o){o(4),n.exports=function(n){return o.e(56802176689444,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(392)})})}},343:function(n,e,o){o(4),n.exports=function(n){return o.e(0xa1cc121230b8,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(393)})})}},344:function(n,e,o){o(4),n.exports=function(n){return o.e(0xa4de25fbbe4f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(394)})})}},345:function(n,e,o){o(4),n.exports=function(n){return o.e(56963097375012,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(395)})})}},346:function(n,e,o){o(4),n.exports=function(n){return o.e(0x9e8cbd196218,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(396)})})}},347:function(n,e,o){o(4),n.exports=function(n){return o.e(26196309395251,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(397)})})}},348:function(n,e,o){o(4),n.exports=function(n){return o.e(0x9943993a94c3,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(398)})})}},349:function(n,e,o){o(4),n.exports=function(n){return o.e(25815475738245,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(399)})})}},350:function(n,e,o){o(4),n.exports=function(n){return o.e(0xeddad8a28f86,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(400)})})}},351:function(n,e,o){o(4),n.exports=function(n){return o.e(0x6102f49abc2c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(401)})})}},352:function(n,e,o){o(4),n.exports=function(n){return o.e(27213339488200,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(402)})})}},353:function(n,e,o){o(4),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(403)})})}},6:function(n,e,o){o(4),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(102)})})}},354:function(n,e,o){o(4),n.exports=function(n){return o.e(0xa0a3f3734aef,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(404)})})}},316:function(n,e,o){o(4),n.exports=function(n){return o.e(79611799117203,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(200)})})}},129:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var u=o(1),a=(t(u),o(198)),r=t(a),s=o(59),c=t(s),i=o(130),l=t(i),d=void 0,p={},f={},m={},h={},y={},g=[],x=[],j={},b="",v=[],C={},N=function(n){return n&&n.default||n},k=void 0,R=!0,w=[],P={},_={},E=5;k=o(201)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(n){T(n,function(){v=v.filter(function(e){return e!==n}),k.onResourcedFinished(n)})}}),c.default.on("onPreLoadPageResources",function(n){k.onPreLoadPageResources(n)}),c.default.on("onPostLoadPageResources",function(n){k.onPostLoadPageResources(n)});var O=function(n,e){return C[n]>C[e]?1:C[n]<C[e]?-1:0},L=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},T=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){o(null,h[e])});else{var t=void 0;t="component---"===e.slice(0,12)?f.components[e]:"layout---"===e.slice(0,9)?f.layouts[e]:f.json[e],t(function(n,t){h[e]=t,w.push({resource:e,succeeded:!n}),_[e]||(_[e]=n),w=w.slice(-E),o(n,t)})}},S=function(e,o){y[e]?n.nextTick(function(){o(null,y[e])}):_[e]?n.nextTick(function(){o(_[e])}):T(e,function(n,t){if(n)o(n);else{var u=N(t());y[e]=u,o(n,u)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=w.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),P[n]||(P[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},U=1,M={empty:function(){x=[],j={},C={},v=[],g=[],b=""},addPagesArray:function(n){g=n,b="/swarm-design-system",d=(0,r.default)(n,b)},addDevRequires:function(n){p=n},addProdRequires:function(n){f=n},dequeue:function(){return x.pop()},enqueue:function(n){var e=(0,l.default)(n,b);if(!g.some(function(n){return n.path===e}))return!1;var o=1/U;U+=1,j[e]?j[e]+=1:j[e]=1,M.has(e)||x.unshift(e),x.sort(L);var t=d(e);return t.jsonName&&(C[t.jsonName]?C[t.jsonName]+=1+o:C[t.jsonName]=1+o,v.indexOf(t.jsonName)!==-1||h[t.jsonName]||v.unshift(t.jsonName)),t.componentChunkName&&(C[t.componentChunkName]?C[t.componentChunkName]+=1+o:C[t.componentChunkName]=1+o,v.indexOf(t.componentChunkName)!==-1||h[t.jsonName]||v.unshift(t.componentChunkName)),v.sort(O),k.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:C}},getPages:function(){return{pathArray:x,pathCount:j}},getPage:function(n){return d(n)},has:function(n){return x.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(d(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var u;if(o){if(t>=e.length)break;u=e[t++]}else{if(t=e.next(),t.done)break;u=t.value}var a=u;a.unregister()}window.location.reload()}})),R=!1;if(P[e])return D(e,'Previously detected load failure for "'+e+'"'),o();var t=d(e);if(!t)return D(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),c.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];c.default.emit("onPreLoadPageResources",{path:e});var u=void 0,a=void 0,r=void 0,s=function(){if(u&&a&&(!t.layoutComponentChunkName||r)){m[e]={component:u,json:a,layout:r,page:t};var n={component:u,json:a,layout:r,page:t};o(n),c.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return S(t.componentChunkName,function(n,e){n&&D(t.path,"Loading the component for "+t.path+" failed"),u=e,s()}),S(t.jsonName,function(n,e){n&&D(t.path,"Loading the JSON for "+t.path+" failed"),a=e,s()}),void(t.layoutComponentChunkName&&S(t.layout,function(n,e){n&&D(t.path,"Loading the Layout for "+t.path+" failed"),r=e,s()}))},peek:function(n){return x.slice(-1)[0]},length:function(){return x.length},indexOf:function(n){return x.length-x.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,o(70))},405:function(n,e){n.exports=[{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"brand-brandassets.json",path:"/brand/brandassets/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"brand-brandvoice.json",path:"/brand/brandvoice/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"brand-creativefilters.json",path:"/brand/creativefilters/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"brand.json",path:"/brand/"},{componentChunkName:"component---src-templates-docs-content-no-card-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"components.json",path:"/components/"},{componentChunkName:"component---src-templates-docs-content-no-card-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"components-mup-web.json",path:"/components/mup-web/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"content-basics.json",path:"/content/basics/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"content-capitalization.json",path:"/content/capitalization/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"content-prounouns.json",path:"/content/prounouns/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"content-punctuation.json",path:"/content/punctuation/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"content-socialmedia.json",path:"/content/socialmedia/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"content-spellingandglossary.json",path:"/content/spellingandglossary/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"content-timeanddate.json",path:"/content/timeanddate/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"design-buttons.json",path:"/design/buttons/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"design-color.json",path:"/design/color/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"design-forms.json",path:"/design/forms/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"design-icons.json",path:"/design/icons/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"design-typography.json",path:"/design/typography/"},{componentChunkName:"component---src-templates-docs-content-no-subnav-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"resources.json",path:"/resources/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"design-layout-bounds.json",path:"/design/layout/bounds/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"design-layout-breakpoints.json",path:"/design/layout/breakpoints/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"design-layout-chunk.json",path:"/design/layout/chunk/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"design-layout-flex.json",path:"/design/layout/flex/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"design-layout-layout-basics.json",path:"/design/layout/layoutBasics/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"design-layout-section.json",path:"/design/layout/section/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"design-layout-sizing.json",path:"/design/layout/sizing/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"design-layout-spacing.json",path:"/design/layout/spacing/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"design-layout-stripe.json",path:"/design/layout/stripe/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"design-usability-a-11-y.json",path:"/design/usability/a11y/"},{componentChunkName:"component---src-templates-docs-content-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"design-usability-i-18-n.json",path:"/design/usability/i18n/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404-html.json",path:"/404.html"}]},201:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],u=[],a=function(){var n=e();n&&(u.push(n),o(n))},r=function(n){switch(n.type){case"RESOURCE_FINISHED":u=u.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===u.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(n){r({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:u}},empty:function(){t=[],u=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},a=o(78),r=o(1),s=t(r),c=o(71),i=t(c),l=o(77),d=o(358),p=o(301),f=t(p),m=o(199),h=t(m),y=o(59),g=t(y),x=o(405),j=t(x),b=o(406),v=t(b),C=o(197),N=t(C),k=o(196),R=t(k),w=o(129),P=t(w);o(288),window.___history=h.default,window.___emitter=g.default,P.default.addPagesArray(j.default),P.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=P.default,window.matchPath=l.matchPath;var _=v.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),E=function(n){var e=_[n];return null!=e&&(h.default.replace(e.toPath),!0)};E(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&c!==!1||(window.___history=n,c=!0,n.listen(function(n,e){E(n.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var o=e.location.pathname,t=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var u=n.location.pathname;if(u===o)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&o(202);var t=function(n){function e(o){o.page.path===P.default.getPage(n).path&&(g.default.off("onPostLoadPageResources",e),clearTimeout(t),window.___history.push(n))}var o=_[n];if(o&&(n=o.toPath),window.location.pathname!==n){var t=setTimeout(function(){g.default.off("onPostLoadPageResources",e),g.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);P.default.getResourcesForPathname(n)?(clearTimeout(t),window.___history.push(n)):g.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,a.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var c=!1,p=(0,a.apiRunner)("replaceRouterComponent",{history:h.default})[0],m=function(n){var e=n.children;return s.default.createElement(l.Router,{history:h.default},e)},y=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,r.createElement)(p?p:m,null,(0,r.createElement)(d.ScrollContext,{shouldUpdateScroll:e},(0,r.createElement)(y,{layout:!0,children:function(e){return(0,r.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return P.default.getPage(t.location.pathname)?(0,r.createElement)(N.default,u({page:!0},t)):(0,r.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,a.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,f.default)(function(){return i.default.render(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},406:function(n,e){n.exports=[{fromPath:"/swarm-design-system/brand",isPermanent:!1,redirectInBrowser:!0,toPath:"/swarm-design-system/brand/"},{fromPath:"/swarm-design-system/content",isPermanent:!1,redirectInBrowser:!0,toPath:"/swarm-design-system/content/basics/"},{fromPath:"/swarm-design-system/design",isPermanent:!1,redirectInBrowser:!0,toPath:"/swarm-design-system/design/color/"}]},202:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(59),a=t(u),r="/";r="/swarm-design-system/","serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},130:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},301:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,u="DOMContentLoaded",a=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return a||o.addEventListener(u,n=function(){for(o.removeEventListener(u,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},4:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),u=o.e,a=o.s;o.e=function(t,r){var s=!1,c=!0,i=function(n){r&&(r(o,n),r=null)};return!a&&e&&e[t]?void i(!0):(u(t,function(){s||(s=!0,c?setTimeout(function(){i()}):i())}),void(s||(c=!1,n(function(){s||(s=!0,a?a[t]=void 0:(e||(e={}),e[t]=!0),i(!0))}))))}}t()},413:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).map(function(n){n(o)}),(n["*"]||[]).map(function(n){n(e,o)})}}}n.exports=o},70:function(n,e){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function u(n){if(l===setTimeout)return setTimeout(n,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(d===clearTimeout)return clearTimeout(n);if((d===t||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(n);try{return d(n)}catch(e){try{return d.call(null,n)}catch(e){return d.call(this,n)}}}function r(){h&&f&&(h=!1,f.length?m=f.concat(m):y=-1,m.length&&s())}function s(){if(!h){var n=u(r);h=!0;for(var e=m.length;e;){for(f=m,m=[];++y<e;)f&&f[y].run();y=-1,e=m.length}f=null,h=!1,a(n)}}function c(n,e){this.fun=n,this.array=e}function i(){}var l,d,p=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(n){l=o}try{d="function"==typeof clearTimeout?clearTimeout:t}catch(n){d=t}}();var f,m=[],h=!1,y=-1;p.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];m.push(new c(n,e)),1!==m.length||h||u(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=i,p.addListener=i,p.once=i,p.off=i,p.removeListener=i,p.removeAllListeners=i,p.emit=i,p.prependListener=i,p.prependOnceListener=i,p.listeners=function(n){return[]},p.binding=function(n){
throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(n){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},317:function(n,e,o){o(4),n.exports=function(n){return o.e(0xa6bc690a59e9,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(213)})})}},318:function(n,e,o){o(4),n.exports=function(n){return o.e(0xc23565d713b7,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(214)})})}},319:function(n,e,o){o(4),n.exports=function(n){return o.e(0xa0282432e851,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(215)})})}},320:function(n,e,o){o(4),n.exports=function(n){return o.e(0x9fed5305dede,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(216)})})}},321:function(n,e,o){o(4),n.exports=function(n){return o.e(0xcee54425cb1f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(217)})})}}});
//# sourceMappingURL=app-69c421eeb96826d0a7fb.js.map