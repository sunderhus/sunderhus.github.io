(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,e,n){"use strict";var s=n(4);const i=new class{handleAttributeExpressions(t,e,n,i){const r=e[0];return"."===r?new s.e(t,e.slice(1),n).parts:"@"===r?[new s.c(t,e.slice(1),i.eventContext)]:"?"===r?[new s.b(t,e.slice(1),n)]:new s.a(t,e,n).parts}handleTextExpression(t){return new s.d(t)}};var r=n(8),o=n(10),a=(n(6),n(5),n(11));n(9),n(13),n(2);n.d(e,"d",function(){return c}),n.d(e,"c",function(){return o.a}),n.d(e,"a",function(){return s.d}),n.d(e,"e",function(){return a.b}),n.d(e,"b",function(){return r.b}),(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const c=(t,...e)=>new r.b(t,e,"html",i)},function(t,e,n){"use strict";var s=n(0),i=n(6),r=n(2);const o=133;function a(t,e){const{element:{content:n},parts:s}=t,i=document.createTreeWalker(n,o,null,!1);let r=l(s),a=s[r],c=-1,u=0;const h=[];let d=null;for(;i.nextNode();){c++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(h.push(t),null===d&&(d=t)),null!==d&&u++;void 0!==a&&a.index===c;)a.index=null!==d?-1:a.index-u,a=s[r=l(s,r)]}h.forEach(t=>t.parentNode.removeChild(t))}const c=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,o,null,!1);for(;n.nextNode();)e++;return e},l=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(Object(r.d)(e))return n}return-1};var u=n(11),h=n(9),d=n(13),p=n(8);const f=(t,e)=>`${t}--${e}`;let m=!0;void 0===window.ShadyCSS?m=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),m=!1);const v=t=>e=>{const n=f(e.type,t);let s=h.a.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},h.a.set(n,s));let i=s.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(r.f);if(void 0===(i=s.keyString.get(o))){const n=e.getTemplateElement();m&&window.ShadyCSS.prepareTemplateDom(n,t),i=new r.a(e,n),s.keyString.set(o,i)}return s.stringsArray.set(e.strings,i),i},g=["html","svg"],b=new Set,_=(t,e,n)=>{b.add(n);const s=t.querySelectorAll("style"),{length:i}=s;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(e.element,n);const r=document.createElement("style");for(let t=0;t<i;t++){const e=s[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{g.forEach(e=>{const n=h.a.get(f(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),a(t,n)})})})(n);const u=e.element.content;!function(t,e,n=null){const{element:{content:s},parts:i}=t;if(null==n)return void s.appendChild(e);const r=document.createTreeWalker(s,o,null,!1);let a=l(i),u=0,h=-1;for(;r.nextNode();)for(h++,r.currentNode===n&&(u=c(e),n.parentNode.insertBefore(e,n));-1!==a&&i[a].index===h;){if(u>0){for(;-1!==a;)i[a].index+=u,a=l(i,a);return}a=l(i,a)}}(e,r,u.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,n);const d=u.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==d)t.insertBefore(d.cloneNode(!0),t.firstChild);else{u.insertBefore(r,u.firstChild);const t=new Set;t.add(r),a(e,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const w={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},y=(t,e)=>e!==t&&(e==e||t==t),x={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:y},S=Promise.resolve(!0),C=1,P=4,T=8,N=16,O=32;class k extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=S,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const s=this._attributeNameForProperty(n,e);void 0!==s&&(this._attributeToPropertyMap.set(s,n),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=x){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const s=this[t];this[n]=e,this._requestUpdate(t,s)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=y){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,s=e.converter||w,i="function"==typeof s?s:s.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,s=e.converter;return(s&&s.toAttribute||w.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|O,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=x){const s=this.constructor,i=s._attributeNameForProperty(t,n);if(void 0!==i){const t=s._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=this._updateState|T,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=this._updateState&~T}}_attributeToProperty(t,e){if(this._updateState&T)return;const n=this.constructor,s=n._attributeToPropertyMap.get(t);if(void 0!==s){const t=n._classProperties.get(s)||x;this._updateState=this._updateState|N,this[s]=n._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~N}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const s=this.constructor,i=s._classProperties.get(t)||x;s._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||this._updateState&N||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|P;const n=this._updatePromise;this._updatePromise=new Promise((n,s)=>{t=n,e=s});try{await n}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&O}get _hasRequestedUpdate(){return this._updateState&P}get hasUpdated(){return this._updateState&C}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&C||(this._updateState=this._updateState|C,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~P}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}k.finalized=!0;const j=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:s}=e;return{kind:n,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),E=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}}:Object.assign({},e,{finisher(n){n.createProperty(e.key,t)}}),A=(t,e,n)=>{e.constructor.createProperty(n,t)};function V(t){return(e,n)=>void 0!==n?A(t,e,n):E(t,e)}const z="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,M=Symbol();class R{constructor(t,e){if(e!==M)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const H=(t,...e)=>{const n=e.reduce((e,n,s)=>e+(t=>{if(t instanceof R)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[s+1],t[0]);return new R(n,M)};n.d(e,"a",function(){return B}),n.d(e,"c",function(){return j}),n.d(e,"e",function(){return V}),n.d(e,"d",function(){return s.d}),n.d(e,"b",function(){return H}),(window.litElementVersions||(window.litElementVersions=[])).push("2.2.0");const I=t=>t.flat?t.flat(1/0):function t(e,n=[]){for(let s=0,i=e.length;s<i;s++){const i=e[s];Array.isArray(i)?t(i,n):n.push(i)}return n}(t);class B extends k{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){I(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?z?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof s.b&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}B.finalized=!0,B.render=(t,e,n)=>{const s=n.scopeName,r=u.a.has(e),o=m&&11===e.nodeType&&!!e.host&&t instanceof p.b,a=o&&!b.has(s),c=a?document.createDocumentFragment():e;if(Object(u.b)(t,c,Object.assign({templateFactory:v(s)},n)),a){const t=u.a.get(c);u.a.delete(c),t.value instanceof d.a&&_(c,t.value.template,s),Object(i.b)(e,e.firstChild),e.appendChild(c),u.a.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)}},function(t,e,n){"use strict";n.d(e,"f",function(){return s}),n.d(e,"g",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return a}),n.d(e,"d",function(){return l}),n.d(e,"c",function(){return u}),n.d(e,"e",function(){return h});const s=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${s}--\x3e`,r=new RegExp(`${s}|${i}`),o="$lit$";class a{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],a=document.createTreeWalker(e.content,133,null,!1);let l=0,d=-1,p=0;const{strings:f,values:{length:m}}=t;for(;p<m;){const t=a.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let s=0;for(let t=0;t<n;t++)c(e[t].name,o)&&s++;for(;s-- >0;){const e=f[p],n=h.exec(e)[2],s=n.toLowerCase()+o,i=t.getAttribute(s);t.removeAttribute(s);const a=i.split(r);this.parts.push({type:"attribute",index:d,name:n,strings:a}),p+=a.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,i=e.split(r),a=i.length-1;for(let e=0;e<a;e++){let n,r=i[e];if(""===r)n=u();else{const t=h.exec(r);null!==t&&c(t[2],o)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-o.length)+t[3]),n=document.createTextNode(r)}s.insertBefore(n,t),this.parts.push({type:"node",index:++d})}""===i[a]?(s.insertBefore(u(),t),n.push(t)):t.data=i[a],p+=a}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&d!==l||(d++,e.insertBefore(u(),t)),l=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(n.push(t),d--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const c=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},l=t=>-1!==t.index,u=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e,n){var s;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var s=arguments[e];if(s){var r=typeof s;if("string"===r||"number"===r)t.push(s);else if(Array.isArray(s)&&s.length){var o=i.apply(null,s);o&&t.push(o)}else if("object"===r)for(var a in s)n.call(s,a)&&s[a]&&t.push(a)}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(s=function(){return i}.apply(e,[]))||(t.exports=s)}()},function(t,e,n){"use strict";n.d(e,"f",function(){return l}),n.d(e,"a",function(){return h}),n.d(e,"d",function(){return p}),n.d(e,"b",function(){return f}),n.d(e,"e",function(){return m}),n.d(e,"c",function(){return b});var s=n(10),i=n(6),r=n(5),o=n(13),a=n(8),c=n(2);const l=t=>null===t||!("object"==typeof t||"function"==typeof t),u=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class h{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new d(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let s=0;s<e;s++){n+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(l(t)||!u(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class d{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r.a||l(t)&&t===this.value||(this.value=t,Object(s.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(s.b)(this.value);){const t=this.value;this.value=r.a,t(this)}this.value!==r.a&&this.committer.commit()}}class p{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(c.c)()),this.endNode=t.appendChild(Object(c.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=Object(c.c)()),t.__insert(this.endNode=Object(c.c)())}insertAfterPart(t){t.__insert(this.startNode=Object(c.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;Object(s.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.a,t(this)}const t=this.__pendingValue;t!==r.a&&(l(t)?t!==this.value&&this.__commitText(t):t instanceof a.b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):u(t)?this.__commitIterable(t):t===r.b?(this.value=r.b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this.__commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof o.a&&this.value.template===e)this.value.update(t.values);else{const n=new o.a(e,t.processor,this.options),s=n._clone();n.update(t.values),this.__commitNode(s),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const i of t)void 0===(n=e[s])&&(n=new p(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(i),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(t=this.startNode){Object(i.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class f{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;Object(s.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.a,t(this)}if(this.__pendingValue===r.a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=r.a}}class m extends h{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new v(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class v extends d{}let g=!1;try{const t={get capture(){return g=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class b{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;Object(s.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.a,t(this)}if(this.__pendingValue===r.a)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=_(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=r.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const _=t=>t&&(g?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return i});const s={},i={}},function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"c",function(){return i}),n.d(e,"b",function(){return r});const s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,n=null,s=null)=>{for(;e!==n;){const n=e.nextSibling;t.insertBefore(e,s),e=n}},r=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}}},function(t,e,n){t.exports={footer:"_1ysb2",name:"_3CjQP",contactMe:"BIV_T",icons:"_1TIM_",logo:"_2RMk4",icon:"_36CFI"}},function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o});var s=n(6),i=n(2);class r{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let s=0;s<t;s++){const t=this.strings[s],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const o=i.e.exec(t);e+=null===o?t+(n?i.f:i.g):t.substr(0,o.index)+o[1]+o[2]+i.b+o[3]+i.f}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class o extends r{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),Object(s.c)(e,n.firstChild),t}}},function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return r});var s=n(2);function i(t){let e=r.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},r.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(s.f);return void 0===(n=e.keyString.get(i))&&(n=new s.a(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const r=new Map},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r});const s=new WeakMap,i=t=>(...e)=>{const n=t(...e);return s.set(n,!0),n},r=t=>"function"==typeof t&&s.has(t)},function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a});var s=n(6),i=n(4),r=n(9);const o=new WeakMap,a=(t,e,n)=>{let a=o.get(e);void 0===a&&(Object(s.b)(e,e.firstChild),o.set(e,a=new i.d(Object.assign({templateFactory:r.b},n))),a.appendInto(e)),a.setValue(t),a.commit()}},function(t,e,n){t.exports={eventContent:"_10cgp",strv:"_2h0HN"}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var s=n(6),i=n(2);class r{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let o,a=0,c=0,l=r.nextNode();for(;a<n.length;)if(o=n[a],Object(i.d)(o)){for(;c<o.index;)c++,"TEMPLATE"===l.nodeName&&(e.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=e.pop(),l=r.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return s.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},,function(t,e,n){t.exports={title:"_3H-1X",uppercase:"_2JVT8",subTitle:"_1moez",text:"G0NZV",caption:"_2C9Yl",section:"_2zya1",about:"_2aRmI",sectionHeader:"_-1jfj",experience:"_1ZrFv",education:"_2FZXl",sectionHeaderText:"BCPLa",slide:"_2fo6P",innerSection:"_14ZIM",event:"_34Mvx",mainSection:"_18zjR",baseTheme:"_35fk8"}},function(t,e,n){t.exports={header:"_3NWuO"}},function(t,e,n){t.exports=n.p+"images/32e8c.png"},function(t){t.exports={}},,,function(t,e){t.exports='<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="0" y="0" width="100" height="100" id="background" stroke-width="5" stroke="currentColor" fill="none"></rect><text x="95" y="90" id="text" font-size="50" text-anchor="end" font-weight="bold" fill="currentColor" font-family="NeutraText-Bold, Neutra Text">BS</text></svg>'},function(t,e){t.exports='<svg id="instagram" aria-hidden="true" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>'},function(t,e){t.exports='<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>'},function(t,e){t.exports='<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>'},function(t,e){t.exports='<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>'},function(t,e){t.exports='<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>'},function(t,e,n){t.exports={list:"_3rwVB",sectionItem:"_3vjBP",avatar:"_3MbjJ"}},,function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(15),r=n.n(i),o=(n(18),n(16)),a=n.n(o);function c(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(['<header id="header" class="','"><a href="','"><h1>BSunderhus</h1></a></header>']);return c=function(){return t},t}var l=Object(s.d)(c(),a.a.header,location.href),u=n(4);const h=new WeakMap,d=Object(s.c)(t=>e=>{if(!(e instanceof s.a))throw new Error("unsafeHTML can only be used in text bindings");const n=h.get(e);if(void 0!==n&&Object(u.f)(t)&&t===n.value&&e.value===n.fragment)return;const i=document.createElement("template");i.innerHTML=t;const r=document.importNode(i.content,!0);e.setValue(r),h.set(e,{value:t,fragment:r})});var p=n(7),f=n.n(p),m=n(21),v=n.n(m),g=n(22),b=n.n(g),_=n(23),w=n.n(_),y=n(24),x=n.n(y),S=n(25),C=n.n(S),P=n(26),T=n.n(P);function N(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(['<footer id="footer" class="','"><div class="','">','</div><h3 class="','"><i>Bernardo Sunderhus</i></h3>\x3c!-- <p class=','>Feel free to contact me</p> --\x3e<div class="','"><a class="','" aria-label="E-mail link" target="__blank" href="mailto:bernardo.sunderhus@gmail.com">',' </a>\x3c!-- <a target="__blank" href="https://wa.me/5527992844701">\n        <Whatsapp class=','/>\n      </a> --\x3e <a class="','" aria-label="Github link" target="__blank" href="https://github.com/bsunderhus">',' </a><a class="','" aria-label="Linkedin link" target="__blank" href="https://www.linkedin.com/in/bsunderhus">',' </a><a class="','" aria-label="Facebook icon" target="__blank" href="https://www.facebook.com/bsunderhus">',' </a><a class="','" aria-label="Instagram icon" target="__blank" href="https://www.instagram.com/bsunderhus/">',"</a></div></footer>"]);return N=function(){return t},t}var O=Object(s.d)(N(),f.a.footer,f.a.logo,d(v.a),f.a.name,f.a.contactMe,f.a.icons,f.a.icon,d(T.a),f.a.icon,f.a.icon,d(C.a),f.a.icon,d(x.a),f.a.icon,d(w.a),f.a.icon,d(b.a)),k=(n(14),n(27)),j=n.n(k),E=n(3),A=n.n(E);function V(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(['<port-details class="','" id="','" open sticky><header class="','" slot="summary"><h2 class="','">About me</h2></header><section class="','" id="about"><div class="',"\"></div>\x3c!-- <img src={avatarURL} class={cn(locals.avatar)} alt=\"My perfil photo\"/> --\x3e<p>Hi I'm Bernardo, I'm a Brazilian who is passionate about working with innovations.</p><p>As web development is currently in the midst of a big storm of changes I see myself as a constant student, always interested and dedicated to keep up (and also improve).</p><p>I love to spend time with my family, to travel and to go to the movies and I simply can't live without a decent headphone!</p></section></port-details>"]);return V=function(){return t},t}var z=Object(s.d)(V(),r.a.section,r.a.about,A()(r.a.sectionHeader),A()(r.a.uppercase,r.a.sectionHeaderText),A()(r.a.innerSection),A()(j.a.avatar)),M=(n(19),n(20),new Intl.DateTimeFormat("default",{year:"2-digit",month:"2-digit"})),R=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];return t.map(function(t,e){return e<n.length?"".concat(t).concat(M.format(n[e])):t}).join("")};function H(){var t=U(["< "," - "," >"]);return H=function(){return t},t}function I(){var t=U(["< "," - "," >"]);return I=function(){return t},t}function B(){var t=U(['<port-details class="','" id="','" sticky><div class="','" slot="summary"><h2 class="','">Education</h2></div><section class="','"><port-event class="','"><h3 slot="title">Bachelor of Computer Science</h3><a rel="noopener" class="','" target="_blank" href="http://www.ufes.br" slot="location"><abbr title="Universidade Federal do Espirito Santo">UFES</abbr></a><highlight-text class="','" slot="timestamp" text="','"></highlight-text><p>Research on structural supporting the development of Situation-awareness applications based on Context-awareness concepts. Motivated by the increasing number of data to support the development of applications that are more sensible to an user.</p></port-event><port-event class="','"><h3 slot="title">Meaningful Data and Automation</h3><a rel="noopener" target="_blank" href="https://www.hanze.nl" class="','" slot="location">Hanze</a><highlight-text class="','" slot="timestamp" text="','"></highlight-text><p>One year exchange experience on Netherlands sponsored by the Brazilian government with the program <abbr title="Brazil Netherlands Technology">BRANETEC</abbr>.</p><p>I\'ve learned a lot about automation and the utilization of big data in the sense of sensors and embedded systems.</p></port-event></section></port-details>']);return B=function(){return t},t}function U(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var F=Object(s.d)(B(),r.a.section,r.a.education,r.a.sectionHeader,A()(r.a.uppercase,r.a.sectionHeaderText),r.a.innerSection,r.a.event,r.a.caption,r.a.caption,R(I(),new Date(2012,0),new Date(2018,6)),r.a.event,A()(r.a.caption),r.a.caption,R(H(),new Date(2015,0),new Date(2016,0))),W=(n(28),n(12)),L=n.n(W),D=n(17),q=n.n(D);function J(){var t=K(["< "," - "," >"]);return J=function(){return t},t}function $(){var t=K(["< "," - "," >"]);return $=function(){return t},t}function Z(){var t=K(["< "," - "," >"]);return Z=function(){return t},t}function X(){var t=K(["< "," - "," >"]);return X=function(){return t},t}function G(){var t=K(['<port-details class="','" id="','" sticky><div class="','" slot="summary"><h2 class="','">Experience</h2></div><section class="','"><port-event class="','"><h3 slot="title">Front-end Web Engineer</h3><a rel="noopener" href="https://www.strv.com/" target="__blank" class="','" slot="location">STRV</a><highlight-text class="','" slot="timestamp" text="','"></highlight-text><div><div class="','"><img class="','" src="','" srcset="','"><p>I\'m currently working on <span class="','">STRV</span> as an Front-End Web Engineer.</p><p>Whether you are fortune 500 or a startup <span class="','">STRV</span> can help you to unlock opportunity by creating human-centered products.</p><p>Some of <span class="','">STRV</span> collaborations have been featured on TechCrunch, Mashable or Wired; incubated in top US accelerators, or crowd-funded via Kickstarter.</p></div><port-list class="','"><port-list-item class="','">React-Native Application development for clients across the world!</port-list-item><port-list-item class="','">Web based internal applications development with liberty to develop the best</port-list-item></port-list></div></port-event><port-event class="','"><h3 slot="title">Lead Front-end Web Engineer</h3><span class="','" slot="location">Evológica</span><highlight-text class="','" slot="timestamp" text="','"></highlight-text><div class="','"><p>Evológica is a company with expertise in the modeling, development, and support of Insurance Systems. My activities at Evológica involves:</p></div><port-list class="','"><port-list-item class="','">Development of tools to improve communication between Curio (Evologica’s internal framework) and web applications.</port-list-item><port-list-item class="','">Mentor Front-End web development to other colleagues. With side projects to learn from HTML5, CSS and Javascript to Typescript, React, Redux, MobX, RxJS, Unstated and React’s Context <abbr title="Application Programming Interface">API</abbr>.</port-list-item><port-list-item class="','">Maintain and create robust and complete environment (production and development ready), to ensure that most developers don’t have to worry about this.</port-list-item><port-list-item class="','">As the only full time front-end of the company I was also charged with decisions in technologies and strategies for both the development of applications and the progress of the team as a whole.</port-list-item></port-list></port-event><port-event class="','"><h3 slot="title">Front-end Web Engineer</h3><p class="','" slot="location">Multicast</p><highlight-text class="','" slot="timestamp" text="','"></highlight-text><p class="','">Multicast is a young <abbr title="Internet of Things">IoT</abbr> company who provides an end-to-end solution for monitoring products, equipment, supplies, environments, etc,. My roles were:</p><port-list class="','"><port-list-item class="','">Develop the <abbr title="Progressive Web Application">PWA</abbr> that both user and administrator have access to interact with. Being this application robust, offline-first, mobile-first and available in all platforms (for <abbr>IOS</abbr> I had to introduce Phonegap to the project)</port-list-item><port-list-item class="','">Manage the environment used for production and development, ensuring the lightest possible application with tree shaking, code splitting and multiple modules entry points, with the help of Webpack</port-list-item></port-list></port-event><port-event class="','"><h3 slot="title">Fullstack Web Developer</h3><a rel="noopener" href="https://www.resultate.com.br/" target="__blank" class="','" slot="location">Resultate</a><highlight-text class="','" slot="timestamp" text="','"></highlight-text><port-list class="','"><port-list-item class="','">Worked with Wordpress to fast deliver applications</port-list-item><port-list-item class="','">Learned Laravel and other <abbr title="Hypertext Preprocessor">PHP</abbr> technologies that ensured me a good remote environment</port-list-item></port-list></port-event></section></port-details>']);return G=function(){return t},t}function K(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var Q=Object(s.d)(G(),r.a.section,r.a.experience,r.a.sectionHeader,A()(r.a.uppercase,r.a.sectionHeaderText),A()(r.a.innerSection),r.a.event,r.a.caption,A()(r.a.caption),R(X(),new Date(2018,9),new Date),L.a.eventContent,L.a.strv,q.a,q.a,A()(r.a.caption),A()(r.a.caption),A()(r.a.caption),L.a.eventContent,r.a.text,r.a.text,r.a.event,r.a.caption,A()(r.a.caption),R(Z(),new Date(2016,0),new Date(2018,9)),L.a.eventContent,L.a.eventContent,r.a.text,r.a.text,r.a.text,r.a.text,r.a.event,r.a.caption,A()(r.a.caption),R($(),new Date(2017,5),new Date(2018,11)),A()(r.a.text,L.a.eventContent),L.a.eventContent,r.a.text,r.a.text,r.a.event,A()(r.a.caption),A()(r.a.caption),R(J(),new Date(2016,2),new Date(2016,6)),L.a.eventContent,r.a.text,r.a.text);function Y(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["",'<main class="','">'," "," ","</main>",""]);return Y=function(){return t},t}var tt=Object(s.d)(Y(),l,r.a.mainSection,z,Q,F,O);document.body.classList.add(r.a.baseTheme),Object(s.e)(tt,document.body)}],[[29,1,2]]]);
//# sourceMappingURL=0.102fe.js.map