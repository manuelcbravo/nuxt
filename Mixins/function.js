export default {
    methods: {
        loading() {
            this.$swal.fire({
            title: 'Cargando...',
            didOpen: () => {
                this.$swal.showLoading();
            },
            willClose: () => {
                this.$swal.hideLoading();
            },
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false
            });
        },
        loadingClose(){
            this.$swal.close()
        },
        errorSwal(title,texto){
            var texto = (texto)? ((texto.responseText)? texto.responseText : texto ) : 'Algo salio mal, intente mas tarde.'
            var title = (title)?  title : 'Oops...'
            // }
    
            this.$swal.fire({
                icon: 'error',
                title: title,
                text: texto,
                confirmButtonColor: '#0d5afd'
            })
        },
        
        warningSwal(title, texto){
            var respuesta = (texto)?  texto: 'Oops...'
            var titulo = (title)?  title : 'Algo salio mal, intente mas tarde.'
            // }
    
            this.$swal.fire({
                icon: 'warning',
                title: titulo,
                text: respuesta,
                confirmButtonColor: '#0d5afd'
            })
        },
        successSwal(title, texto){
            var respuesta = (texto)?  texto: 'Oops...'
            var titulo = (title)?  title : 'Algo salio mal, intente mas tarde.'
            // }
    
            this.$swal.fire({
                icon: 'success',
                title: titulo,
                text: respuesta,
                confirmButtonColor: '#0d5afd'
            })
        },
    
    },
    mounted() {
        /*!
  * Bootstrap v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t="transitionend",e=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},i=t=>{const i=e(t);return i&&document.querySelector(i)?i:null},n=t=>{const i=e(t);return i?document.querySelector(i):null},s=e=>{e.dispatchEvent(new Event(t))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,a=t=>{if(!o(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},h=()=>{},d=t=>{t.offsetHeight},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],p=()=>"rtl"===document.documentElement.dir,g=t=>{var e;e=()=>{const e=u();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of f)t()})),f.push(e)):e()},m=t=>{"function"==typeof t&&t()},_=(e,i,n=!0)=>{if(!n)return void m(e);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(i)+5;let r=!1;const a=({target:n})=>{n===i&&(r=!0,i.removeEventListener(t,a),m(e))};i.addEventListener(t,a),setTimeout((()=>{r||s(i)}),o)},b=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,A={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${E++}`||t.uidEvent||E++}function x(t){const e=O(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function k(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function L(t,e,i){const n="string"==typeof e,s=n?i:e||i;let o=N(t);return C.has(o)||(o=t),[n,s,o]}function D(t,e,i,n,s){if("string"!=typeof e||!t)return;let[o,r,a]=L(e,i,n);if(e in T){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=x(t),c=l[a]||(l[a]={}),h=k(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=O(r,e.replace(v,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return j(s,{delegateTarget:r}),n.oneOff&&P.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,r):function(t,e){return function i(n){return j(n,{delegateTarget:t}),i.oneOff&&P.off(t,n.type,e),e.apply(t,[n])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function S(t,e,i,n,s){const o=k(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function I(t,e,i,n){const s=e[i]||{};for(const o of Object.keys(s))if(o.includes(n)){const n=s[o];S(t,e,i,n.callable,n.delegationSelector)}}function N(t){return t=t.replace(y,""),T[t]||t}const P={on(t,e,i,n){D(t,e,i,n,!1)},one(t,e,i,n){D(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=L(e,i,n),a=r!==e,l=x(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))I(t,l,i,e.slice(1));for(const i of Object.keys(c)){const n=i.replace(w,"");if(!a||e.includes(n)){const e=c[i];S(t,l,r,e.callable,e.delegationSelector)}}}else{if(!Object.keys(c).length)return;S(t,l,r,o,s?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=u();let s=null,o=!0,r=!0,a=!1;e!==N(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());let l=new Event(e,{bubbles:o,cancelable:!0});return l=j(l,i),a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function j(t,e){for(const[i,n]of Object.entries(e||{}))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}const M=new Map,H={set(t,e,i){M.has(t)||M.set(t,new Map);const n=M.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>M.has(t)&&M.get(t).get(e)||null,remove(t,e){if(!M.has(t))return;const i=M.get(t);i.delete(e),0===i.size&&M.delete(t)}};function $(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function W(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const B={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${W(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${W(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=$(t.dataset[n])}return e},getDataAttribute:(t,e)=>$(t.getAttribute(`data-bs-${W(e)}`))};class F{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=o(e)?B.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...o(e)?B.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const n of Object.keys(e)){const s=e[n],r=t[n],a=o(r)?"element":null==(i=r)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)}var i}}class z extends F{constructor(t,e){super(),(t=r(t))&&(this._element=t,this._config=this._getConfig(e),H.set(this._element,this.constructor.DATA_KEY,this))}dispose(){H.remove(this._element,this.constructor.DATA_KEY),P.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){_(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return H.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.2.0"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const R=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;P.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;const o=n(this)||this.closest(`.${s}`);t.getOrCreateInstance(o)[e]()}))};class q extends z{static get NAME(){return"alert"}close(){if(P.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),P.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}R(q,"close"),g(q);const V='[data-bs-toggle="button"]';class K extends z{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=K.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}P.on(document,"click.bs.button.data-api",V,(t=>{t.preventDefault();const e=t.target.closest(V);K.getOrCreateInstance(e).toggle()})),g(K);const Q={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!l(t)&&a(t)))}},X={endCallback:null,leftCallback:null,rightCallback:null},Y={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class U extends F{constructor(t,e){super(),this._element=t,t&&U.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return X}static get DefaultType(){return Y}static get NAME(){return"swipe"}dispose(){P.off(this._element,".bs.swipe")}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),m(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&m(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(P.on(this._element,"pointerdown.bs.swipe",(t=>this._start(t))),P.on(this._element,"pointerup.bs.swipe",(t=>this._end(t))),this._element.classList.add("pointer-event")):(P.on(this._element,"touchstart.bs.swipe",(t=>this._start(t))),P.on(this._element,"touchmove.bs.swipe",(t=>this._move(t))),P.on(this._element,"touchend.bs.swipe",(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const G="next",J="prev",Z="left",tt="right",et="slid.bs.carousel",it="carousel",nt="active",st={ArrowLeft:tt,ArrowRight:Z},ot={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},rt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class at extends z{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Q.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===it&&this.cycle()}static get Default(){return ot}static get DefaultType(){return rt}static get NAME(){return"carousel"}next(){this._slide(G)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(J)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?P.one(this._element,et,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void P.one(this._element,et,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?G:J;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&P.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&(P.on(this._element,"mouseenter.bs.carousel",(()=>this.pause())),P.on(this._element,"mouseleave.bs.carousel",(()=>this._maybeEnableCycle()))),this._config.touch&&U.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of Q.find(".carousel-item img",this._element))P.on(t,"dragstart.bs.carousel",(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(Z)),rightCallback:()=>this._slide(this._directionToOrder(tt)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new U(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=st[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=Q.findOne(".active",this._indicatorsElement);e.classList.remove(nt),e.removeAttribute("aria-current");const i=Q.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(nt),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===G,s=e||b(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>P.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r("slide.bs.carousel").defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",c=n?"carousel-item-next":"carousel-item-prev";s.classList.add(c),d(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add(nt),i.classList.remove(nt,c,l),this._isSliding=!1,r(et)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return Q.findOne(".active.carousel-item",this._element)}_getItems(){return Q.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===Z?J:G:t===Z?G:J}_orderToDirection(t){return p()?t===J?Z:tt:t===J?tt:Z}static jQueryInterface(t){return this.each((function(){const e=at.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}P.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(t){const e=n(this);if(!e||!e.classList.contains(it))return;t.preventDefault();const i=at.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");return s?(i.to(s),void i._maybeEnableCycle()):"next"===B.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),P.on(window,"load.bs.carousel.data-api",(()=>{const t=Q.find('[data-bs-ride="carousel"]');for(const e of t)at.getOrCreateInstance(e)})),g(at);const lt="show",ct="collapse",ht="collapsing",dt='[data-bs-toggle="collapse"]',ut={parent:null,toggle:!0},ft={parent:"(null|element)",toggle:"boolean"};class pt extends z{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const n=Q.find(dt);for(const t of n){const e=i(t),n=Q.find(e).filter((t=>t===this._element));null!==e&&n.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ut}static get DefaultType(){return ft}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>pt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(P.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(ct),this._element.classList.add(ht),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ht),this._element.classList.add(ct,lt),this._element.style[e]="",P.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(P.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,d(this._element),this._element.classList.add(ht),this._element.classList.remove(ct,lt);for(const t of this._triggerArray){const e=n(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ht),this._element.classList.add(ct),P.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(lt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=r(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(dt);for(const e of t){const t=n(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=Q.find(":scope .collapse .collapse",this._config.parent);return Q.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=pt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}P.on(document,"click.bs.collapse.data-api",dt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=i(this),n=Q.find(e);for(const t of n)pt.getOrCreateInstance(t,{toggle:!1}).toggle()})),g(pt);var gt="top",mt="bottom",_t="right",bt="left",vt="auto",yt=[gt,mt,_t,bt],wt="start",At="end",Et="clippingParents",Tt="viewport",Ct="popper",Ot="reference",xt=yt.reduce((function(t,e){return t.concat([e+"-"+wt,e+"-"+At])}),[]),kt=[].concat(yt,[vt]).reduce((function(t,e){return t.concat([e,e+"-"+wt,e+"-"+At])}),[]),Lt="beforeRead",Dt="read",St="afterRead",It="beforeMain",Nt="main",Pt="afterMain",jt="beforeWrite",Mt="write",Ht="afterWrite",$t=[Lt,Dt,St,It,Nt,Pt,jt,Mt,Ht];function Wt(t){return t?(t.nodeName||"").toLowerCase():null}function Bt(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Ft(t){return t instanceof Bt(t).Element||t instanceof Element}function zt(t){return t instanceof Bt(t).HTMLElement||t instanceof HTMLElement}function Rt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof Bt(t).ShadowRoot||t instanceof ShadowRoot)}const qt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];zt(s)&&Wt(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});zt(n)&&Wt(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function Vt(t){return t.split("-")[0]}var Kt=Math.max,Qt=Math.min,Xt=Math.round;function Yt(t,e){void 0===e&&(e=!1);var i=t.getBoundingClientRect(),n=1,s=1;if(zt(t)&&e){var o=t.offsetHeight,r=t.offsetWidth;r>0&&(n=Xt(i.width)/r||1),o>0&&(s=Xt(i.height)/o||1)}return{width:i.width/n,height:i.height/s,top:i.top/s,right:i.right/n,bottom:i.bottom/s,left:i.left/n,x:i.left/n,y:i.top/s}}function Ut(t){var e=Yt(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Gt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&Rt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Jt(t){return Bt(t).getComputedStyle(t)}function Zt(t){return["table","td","th"].indexOf(Wt(t))>=0}function te(t){return((Ft(t)?t.ownerDocument:t.document)||window.document).documentElement}function ee(t){return"html"===Wt(t)?t:t.assignedSlot||t.parentNode||(Rt(t)?t.host:null)||te(t)}function ie(t){return zt(t)&&"fixed"!==Jt(t).position?t.offsetParent:null}function ne(t){for(var e=Bt(t),i=ie(t);i&&Zt(i)&&"static"===Jt(i).position;)i=ie(i);return i&&("html"===Wt(i)||"body"===Wt(i)&&"static"===Jt(i).position)?e:i||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&zt(t)&&"fixed"===Jt(t).position)return null;var i=ee(t);for(Rt(i)&&(i=i.host);zt(i)&&["html","body"].indexOf(Wt(i))<0;){var n=Jt(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function se(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function oe(t,e,i){return Kt(t,Qt(e,i))}function re(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function ae(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const le={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=Vt(i.placement),l=se(a),c=[bt,_t].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return re("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:ae(t,yt))}(s.padding,i),d=Ut(o),u="y"===l?gt:bt,f="y"===l?mt:_t,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],g=r[l]-i.rects.reference[l],m=ne(o),_=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,b=p/2-g/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=oe(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Gt(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ce(t){return t.split("-")[1]}var he={top:"auto",right:"auto",bottom:"auto",left:"auto"};function de(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,g=void 0===p?0:p,m="function"==typeof h?h({x:f,y:g}):{x:f,y:g};f=m.x,g=m.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=bt,y=gt,w=window;if(c){var A=ne(i),E="clientHeight",T="clientWidth";A===Bt(i)&&"static"!==Jt(A=te(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===gt||(s===bt||s===_t)&&o===At)&&(y=mt,g-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,g*=l?1:-1),s!==bt&&(s!==gt&&s!==mt||o!==At)||(v=_t,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&he),x=!0===h?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:Xt(e*n)/n||0,y:Xt(i*n)/n||0}}({x:f,y:g}):{x:f,y:g};return f=x.x,g=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?g+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const ue={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:Vt(e.placement),variation:ce(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,de(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,de(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var fe={passive:!0};const pe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=Bt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,fe)})),a&&l.addEventListener("resize",i.update,fe),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,fe)})),a&&l.removeEventListener("resize",i.update,fe)}},data:{}};var ge={left:"right",right:"left",bottom:"top",top:"bottom"};function me(t){return t.replace(/left|right|bottom|top/g,(function(t){return ge[t]}))}var _e={start:"end",end:"start"};function be(t){return t.replace(/start|end/g,(function(t){return _e[t]}))}function ve(t){var e=Bt(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ye(t){return Yt(te(t)).left+ve(t).scrollLeft}function we(t){var e=Jt(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Ae(t){return["html","body","#document"].indexOf(Wt(t))>=0?t.ownerDocument.body:zt(t)&&we(t)?t:Ae(ee(t))}function Ee(t,e){var i;void 0===e&&(e=[]);var n=Ae(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=Bt(n),r=s?[o].concat(o.visualViewport||[],we(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Ee(ee(r)))}function Te(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Ce(t,e){return e===Tt?Te(function(t){var e=Bt(t),i=te(t),n=e.visualViewport,s=i.clientWidth,o=i.clientHeight,r=0,a=0;return n&&(s=n.width,o=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(r=n.offsetLeft,a=n.offsetTop)),{width:s,height:o,x:r+ye(t),y:a}}(t)):Ft(e)?function(t){var e=Yt(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Te(function(t){var e,i=te(t),n=ve(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=Kt(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=Kt(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+ye(t),l=-n.scrollTop;return"rtl"===Jt(s||i).direction&&(a+=Kt(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(te(t)))}function Oe(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?Vt(s):null,r=s?ce(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case gt:e={x:a,y:i.y-n.height};break;case mt:e={x:a,y:i.y+i.height};break;case _t:e={x:i.x+i.width,y:l};break;case bt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?se(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case wt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case At:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function xe(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.boundary,r=void 0===o?Et:o,a=i.rootBoundary,l=void 0===a?Tt:a,c=i.elementContext,h=void 0===c?Ct:c,d=i.altBoundary,u=void 0!==d&&d,f=i.padding,p=void 0===f?0:f,g=re("number"!=typeof p?p:ae(p,yt)),m=h===Ct?Ot:Ct,_=t.rects.popper,b=t.elements[u?m:h],v=function(t,e,i){var n="clippingParents"===e?function(t){var e=Ee(ee(t)),i=["absolute","fixed"].indexOf(Jt(t).position)>=0&&zt(t)?ne(t):t;return Ft(i)?e.filter((function(t){return Ft(t)&&Gt(t,i)&&"body"!==Wt(t)})):[]}(t):[].concat(e),s=[].concat(n,[i]),o=s[0],r=s.reduce((function(e,i){var n=Ce(t,i);return e.top=Kt(n.top,e.top),e.right=Qt(n.right,e.right),e.bottom=Qt(n.bottom,e.bottom),e.left=Kt(n.left,e.left),e}),Ce(t,o));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}(Ft(b)?b:b.contextElement||te(t.elements.popper),r,l),y=Yt(t.elements.reference),w=Oe({reference:y,element:_,strategy:"absolute",placement:s}),A=Te(Object.assign({},_,w)),E=h===Ct?A:y,T={top:v.top-E.top+g.top,bottom:E.bottom-v.bottom+g.bottom,left:v.left-E.left+g.left,right:E.right-v.right+g.right},C=t.modifiersData.offset;if(h===Ct&&C){var O=C[s];Object.keys(T).forEach((function(t){var e=[_t,mt].indexOf(t)>=0?1:-1,i=[gt,mt].indexOf(t)>=0?"y":"x";T[t]+=O[i]*e}))}return T}function ke(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?kt:l,h=ce(n),d=h?a?xt:xt.filter((function(t){return ce(t)===h})):yt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=xe(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[Vt(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const Le={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,g=i.allowedAutoPlacements,m=e.options.placement,_=Vt(m),b=l||(_!==m&&p?function(t){if(Vt(t)===vt)return[];var e=me(t);return[be(t),e,be(e)]}(m):[me(m)]),v=[m].concat(b).reduce((function(t,i){return t.concat(Vt(i)===vt?ke(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:g}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=Vt(O),k=ce(O)===wt,L=[gt,mt].indexOf(x)>=0,D=L?"width":"height",S=xe(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),I=L?k?_t:bt:k?mt:gt;y[D]>w[D]&&(I=me(I));var N=me(I),P=[];if(o&&P.push(S[x]<=0),a&&P.push(S[I]<=0,S[N]<=0),P.every((function(t){return t}))){T=O,E=!1;break}A.set(O,P)}if(E)for(var j=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},M=p?3:1;M>0&&"break"!==j(M);M--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function De(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Se(t){return[gt,_t,mt,bt].some((function(e){return t[e]>=0}))}const Ie={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=xe(e,{elementContext:"reference"}),a=xe(e,{altBoundary:!0}),l=De(r,n),c=De(a,s,o),h=Se(l),d=Se(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},Ne={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=kt.reduce((function(t,i){return t[i]=function(t,e,i){var n=Vt(t),s=[bt,gt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[bt,_t].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},Pe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=Oe({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},je={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,g=void 0===p?0:p,m=xe(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=Vt(e.placement),b=ce(e.placement),v=!b,y=se(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof g?g(Object.assign({},e.rects,{placement:e.placement})):g,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,D="y"===y?gt:bt,S="y"===y?mt:_t,I="y"===y?"height":"width",N=A[y],P=N+m[D],j=N-m[S],M=f?-T[I]/2:0,H=b===wt?E[I]:T[I],$=b===wt?-T[I]:-E[I],W=e.elements.arrow,B=f&&W?Ut(W):{width:0,height:0},F=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=F[D],R=F[S],q=oe(0,E[I],B[I]),V=v?E[I]/2-M-q-z-O.mainAxis:H-q-z-O.mainAxis,K=v?-E[I]/2+M+q+R+O.mainAxis:$+q+R+O.mainAxis,Q=e.elements.arrow&&ne(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=N+K-Y,G=oe(f?Qt(P,N+V-Y-X):P,N,f?Kt(j,U):j);A[y]=G,k[y]=G-N}if(a){var J,Z="x"===y?gt:bt,tt="x"===y?mt:_t,et=A[w],it="y"===w?"height":"width",nt=et+m[Z],st=et-m[tt],ot=-1!==[gt,bt].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=oe(t,e,i);return n>i?i:n}(at,et,lt):oe(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function Me(t,e,i){void 0===i&&(i=!1);var n,s,o=zt(e),r=zt(e)&&function(t){var e=t.getBoundingClientRect(),i=Xt(e.width)/t.offsetWidth||1,n=Xt(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=te(e),l=Yt(t,r),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==Wt(e)||we(a))&&(c=(n=e)!==Bt(n)&&zt(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:ve(n)),zt(e)?((h=Yt(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=ye(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function He(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var $e={placement:"bottom",modifiers:[],strategy:"absolute"};function We(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function Be(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?$e:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},$e,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:Ft(t)?Ee(t):t.contextElement?Ee(t.contextElement):[],popper:Ee(e)};var r,c,u=function(t){var e=He(t);return $t.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(We(e,i)){a.rects={reference:Me(e,ne(i),"fixed"===a.options.strategy),popper:Ut(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!We(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var Fe=Be(),ze=Be({defaultModifiers:[pe,Pe,ue,qt]}),Re=Be({defaultModifiers:[pe,Pe,ue,qt,Ne,Le,je,le,Ie]});const qe=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:Be,detectOverflow:xe,createPopperBase:Fe,createPopper:Re,createPopperLite:ze,top:gt,bottom:mt,right:_t,left:bt,auto:vt,basePlacements:yt,start:wt,end:At,clippingParents:Et,viewport:Tt,popper:Ct,reference:Ot,variationPlacements:xt,placements:kt,beforeRead:Lt,read:Dt,afterRead:St,beforeMain:It,main:Nt,afterMain:Pt,beforeWrite:jt,write:Mt,afterWrite:Ht,modifierPhases:$t,applyStyles:qt,arrow:le,computeStyles:ue,eventListeners:pe,flip:Le,hide:Ie,offset:Ne,popperOffsets:Pe,preventOverflow:je},Symbol.toStringTag,{value:"Module"})),Ve="dropdown",Ke="ArrowUp",Qe="ArrowDown",Xe="click.bs.dropdown.data-api",Ye="keydown.bs.dropdown.data-api",Ue="show",Ge='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Je=`${Ge}.show`,Ze=".dropdown-menu",ti=p()?"top-end":"top-start",ei=p()?"top-start":"top-end",ii=p()?"bottom-end":"bottom-start",ni=p()?"bottom-start":"bottom-end",si=p()?"left-start":"right-start",oi=p()?"right-start":"left-start",ri={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ai={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class li extends z{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=Q.findOne(Ze,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ri}static get DefaultType(){return ai}static get NAME(){return Ve}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!P.trigger(this._element,"show.bs.dropdown",t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))P.on(t,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ue),this._element.classList.add(Ue),P.trigger(this._element,"shown.bs.dropdown",t)}}hide(){if(l(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!P.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.off(t,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ue),this._element.classList.remove(Ue),this._element.setAttribute("aria-expanded","false"),B.removeDataAttribute(this._menu,"popper"),P.trigger(this._element,"hidden.bs.dropdown",t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Ve.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===qe)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:o(this._config.reference)?t=r(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=Re(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Ue)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return si;if(t.classList.contains("dropstart"))return oi;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ei:ti:e?ni:ii}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(B.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const i=Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>a(t)));i.length&&b(i,e,t===Qe,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=li.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=Q.find(Je);for(const i of e){const e=li.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Ke,Qe].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=Q.findOne(Ge,t.delegateTarget.parentNode),o=li.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}P.on(document,Ye,Ge,li.dataApiKeydownHandler),P.on(document,Ye,Ze,li.dataApiKeydownHandler),P.on(document,Xe,li.clearMenus),P.on(document,"keyup.bs.dropdown.data-api",li.clearMenus),P.on(document,Xe,Ge,(function(t){t.preventDefault(),li.getOrCreateInstance(this).toggle()})),g(li);const ci=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",hi=".sticky-top",di="padding-right",ui="margin-right";class fi{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,di,(e=>e+t)),this._setElementAttributes(ci,di,(e=>e+t)),this._setElementAttributes(hi,ui,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,di),this._resetElementAttributes(ci,di),this._resetElementAttributes(hi,ui)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&B.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=B.getDataAttribute(t,e);null!==i?(B.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(o(t))e(t);else for(const i of Q.find(t,this._element))e(i)}}const pi="show",gi="mousedown.bs.backdrop",mi={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},_i={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class bi extends F{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return mi}static get DefaultType(){return _i}static get NAME(){return"backdrop"}show(t){if(!this._config.isVisible)return void m(t);this._append();const e=this._getElement();this._config.isAnimated&&d(e),e.classList.add(pi),this._emulateAnimation((()=>{m(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(pi),this._emulateAnimation((()=>{this.dispose(),m(t)}))):m(t)}dispose(){this._isAppended&&(P.off(this._element,gi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),P.on(t,gi,(()=>{m(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const vi=".bs.focustrap",yi="backward",wi={autofocus:!0,trapElement:null},Ai={autofocus:"boolean",trapElement:"element"};class Ei extends F{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return wi}static get DefaultType(){return Ai}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),P.off(document,vi),P.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),P.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,P.off(document,vi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=Q.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===yi?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?yi:"forward")}}const Ti="hidden.bs.modal",Ci="show.bs.modal",Oi="modal-open",xi="show",ki="modal-static",Li={backdrop:!0,focus:!0,keyboard:!0},Di={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Si extends z{constructor(t,e){super(t,e),this._dialog=Q.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new fi,this._addEventListeners()}static get Default(){return Li}static get DefaultType(){return Di}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||P.trigger(this._element,Ci,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Oi),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(P.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(xi),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){for(const t of[window,this._dialog])P.off(t,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new bi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ei({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=Q.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),d(this._element),this._element.classList.add(xi),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,P.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){P.on(this._element,"keydown.dismiss.bs.modal",(t=>{if("Escape"===t.key)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),P.on(window,"resize.bs.modal",(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),P.on(this._element,"mousedown.dismiss.bs.modal",(t=>{t.target===t.currentTarget&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Oi),this._resetAdjustments(),this._scrollBar.reset(),P.trigger(this._element,Ti)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(P.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(ki)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(ki),this._queueCallback((()=>{this._element.classList.remove(ki),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=Si.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}P.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=n(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),P.one(e,Ci,(t=>{t.defaultPrevented||P.one(e,Ti,(()=>{a(this)&&this.focus()}))}));const i=Q.findOne(".modal.show");i&&Si.getInstance(i).hide(),Si.getOrCreateInstance(e).toggle(this)})),R(Si),g(Si);const Ii="show",Ni="showing",Pi="hiding",ji=".offcanvas.show",Mi="hidePrevented.bs.offcanvas",Hi="hidden.bs.offcanvas",$i={backdrop:!0,keyboard:!0,scroll:!1},Wi={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Bi extends z{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return $i}static get DefaultType(){return Wi}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||P.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new fi).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ni),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ii),this._element.classList.remove(Ni),P.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(P.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Pi),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(Ii,Pi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new fi).reset(),P.trigger(this._element,Hi)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new bi({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():P.trigger(this._element,Mi)}:null})}_initializeFocusTrap(){return new Ei({trapElement:this._element})}_addEventListeners(){P.on(this._element,"keydown.dismiss.bs.offcanvas",(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():P.trigger(this._element,Mi))}))}static jQueryInterface(t){return this.each((function(){const e=Bi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}P.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=n(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;P.one(e,Hi,(()=>{a(this)&&this.focus()}));const i=Q.findOne(ji);i&&i!==e&&Bi.getInstance(i).hide(),Bi.getOrCreateInstance(e).toggle(this)})),P.on(window,"load.bs.offcanvas.data-api",(()=>{for(const t of Q.find(ji))Bi.getOrCreateInstance(t).show()})),P.on(window,"resize.bs.offcanvas",(()=>{for(const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&Bi.getOrCreateInstance(t).hide()})),R(Bi),g(Bi);const Fi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),zi=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Ri=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,qi=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!Fi.has(i)||Boolean(zi.test(t.nodeValue)||Ri.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},Vi={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ki={allowList:Vi,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Qi={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Xi={entry:"(string|element|function|null)",selector:"(string|element)"};class Yi extends F{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Ki}static get DefaultType(){return Qi}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Xi)}_setContent(t,e,i){const n=Q.findOne(i,t);n&&((e=this._resolvePossibleFunction(e))?o(e)?this._putElementInTemplate(r(e),n):this._config.html?n.innerHTML=this._maybeSanitize(e):n.textContent=e:n.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)qi(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return"function"==typeof t?t(this):t}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Ui=new Set(["sanitize","allowList","sanitizeFn"]),Gi="fade",Ji="show",Zi=".modal",tn="hide.bs.modal",en="hover",nn="focus",sn={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},on={allowList:Vi,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},rn={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class an extends z{constructor(t,e){if(void 0===qe)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=!1,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners()}static get Default(){return on}static get DefaultType(){return rn}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled){if(t){const e=this._initializeOnDelegatedTarget(t);return e._activeTrigger.click=!e._activeTrigger.click,void(e._isWithActiveTrigger()?e._enter():e._leave())}this._isShown()?this._leave():this._enter()}}dispose(){clearTimeout(this._timeout),P.off(this._element.closest(Zi),tn,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=P.trigger(this._element,this.constructor.eventName("show")),e=(c(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this.tip&&(this.tip.remove(),this.tip=null);const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),P.trigger(this._element,this.constructor.eventName("inserted"))),this._popper?this._popper.update():this._popper=this._createPopper(i),i.classList.add(Ji),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.on(t,"mouseover",h);this._queueCallback((()=>{const t=this._isHovered;this._isHovered=!1,P.trigger(this._element,this.constructor.eventName("shown")),t&&this._leave()}),this.tip,this._isAnimated())}hide(){if(!this._isShown())return;if(P.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented)return;const t=this._getTipElement();if(t.classList.remove(Ji),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.off(t,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=!1,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||t.remove(),this._element.removeAttribute("aria-describedby"),P.trigger(this._element,this.constructor.eventName("hidden")),this._disposePopper())}),this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Gi,Ji),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Gi),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Yi({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._config.originalTitle}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Gi)}_isShown(){return this.tip&&this.tip.classList.contains(Ji)}_createPopper(t){const e="function"==typeof this._config.placement?this._config.placement.call(this,t,this._element):this._config.placement,i=sn[e.toUpperCase()];return Re(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"==typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)P.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>this.toggle(t)));else if("manual"!==e){const t=e===en?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===en?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");P.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?nn:en]=!0,e._enter()})),P.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?nn:en]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},P.on(this._element.closest(Zi),tn,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._config.originalTitle;t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=B.getDataAttributes(this._element);for(const t of Object.keys(e))Ui.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.originalTitle=this._element.getAttribute("title")||"","number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each((function(){const e=an.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(an);const ln={...an.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},cn={...an.DefaultType,content:"(null|string|element|function)"};class hn extends an{static get Default(){return ln}static get DefaultType(){return cn}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=hn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(hn);const dn="click.bs.scrollspy",un="active",fn="[href]",pn={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null},gn={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element"};class mn extends z{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return pn}static get DefaultType(){return gn}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=r(t.target)||document.body,t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(P.off(this._config.target,dn),P.on(this._config.target,dn,fn,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n,behavior:"smooth"});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:[.1,.5,1],rootMargin:this._getRootMargin()};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_getRootMargin(){return this._config.offset?`${this._config.offset}px 0px -30%`:this._config.rootMargin}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=Q.find(fn,this._config.target);for(const e of t){if(!e.hash||l(e))continue;const t=Q.findOne(e.hash,this._element);a(t)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(un),this._activateParents(t),P.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))Q.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(un);else for(const e of Q.parents(t,".nav, .list-group"))for(const t of Q.prev(e,".nav-link, .nav-item > .nav-link, .list-group-item"))t.classList.add(un)}_clearActiveClass(t){t.classList.remove(un);const e=Q.find("[href].active",t);for(const t of e)t.classList.remove(un)}static jQueryInterface(t){return this.each((function(){const e=mn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(window,"load.bs.scrollspy.data-api",(()=>{for(const t of Q.find('[data-bs-spy="scroll"]'))mn.getOrCreateInstance(t)})),g(mn);const _n="ArrowLeft",bn="ArrowRight",vn="ArrowUp",yn="ArrowDown",wn="active",An="fade",En="show",Tn='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Cn=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Tn}`;class On extends z{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),P.on(this._element,"keydown.bs.tab",(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?P.trigger(e,"hide.bs.tab",{relatedTarget:t}):null;P.trigger(t,"show.bs.tab",{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(wn),this._activate(n(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.focus(),t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),P.trigger(t,"shown.bs.tab",{relatedTarget:e})):t.classList.add(En)}),t,t.classList.contains(An)))}_deactivate(t,e){t&&(t.classList.remove(wn),t.blur(),this._deactivate(n(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),P.trigger(t,"hidden.bs.tab",{relatedTarget:e})):t.classList.remove(En)}),t,t.classList.contains(An)))}_keydown(t){if(![_n,bn,vn,yn].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[bn,yn].includes(t.key),i=b(this._getChildren().filter((t=>!l(t))),t.target,e,!0);i&&On.getOrCreateInstance(i).show()}_getChildren(){return Q.find(Cn,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=n(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=Q.findOne(t,i);s&&s.classList.toggle(n,e)};n(".dropdown-toggle",wn),n(".dropdown-menu",En),n(".dropdown-item",wn),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(wn)}_getInnerElement(t){return t.matches(Cn)?t:Q.findOne(Cn,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=On.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(document,"click.bs.tab",Tn,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||On.getOrCreateInstance(this).show()})),P.on(window,"load.bs.tab",(()=>{for(const t of Q.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))On.getOrCreateInstance(t)})),g(On);const xn="hide",kn="show",Ln="showing",Dn={animation:"boolean",autohide:"boolean",delay:"number"},Sn={animation:!0,autohide:!0,delay:5e3};class In extends z{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Sn}static get DefaultType(){return Dn}static get NAME(){return"toast"}show(){P.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(xn),d(this._element),this._element.classList.add(kn,Ln),this._queueCallback((()=>{this._element.classList.remove(Ln),P.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(P.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(Ln),this._queueCallback((()=>{this._element.classList.add(xn),this._element.classList.remove(Ln,kn),P.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(kn),super.dispose()}isShown(){return this._element.classList.contains(kn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){P.on(this._element,"mouseover.bs.toast",(t=>this._onInteraction(t,!0))),P.on(this._element,"mouseout.bs.toast",(t=>this._onInteraction(t,!1))),P.on(this._element,"focusin.bs.toast",(t=>this._onInteraction(t,!0))),P.on(this._element,"focusout.bs.toast",(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=In.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return R(In),g(In),{Alert:q,Button:K,Carousel:at,Collapse:pt,Dropdown:li,Modal:Si,Offcanvas:Bi,Popover:hn,ScrollSpy:mn,Tab:On,Toast:In,Tooltip:an}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
        var tns=function(){var t=window,Ai=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Ni=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Li(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function Bi(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Si(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function Hi(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Oi(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function Di(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function ki(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Ri(t){return("insertRule"in t?t.cssRules:t.rules).length}function Ii(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),Pi=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},zi=i?function(t,e){Pi(t,e)||t.classList.add(e)}:function(t,e){Pi(t,e)||(t.className+=" "+e)},Wi=i?function(t,e){Pi(t,e)&&t.classList.remove(e)}:function(t,e){Pi(t,e)&&(t.className=t.className.replace(e,""))};function qi(t,e){return t.hasAttribute(e)}function Fi(t,e){return t.getAttribute(e)}function r(t){return void 0!==t.item}function ji(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Vi(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Gi(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function Qi(t,e){"none"!==t.style.display&&(t.style.display="none")}function Xi(t,e){"none"===t.style.display&&(t.style.display="")}function Yi(t){return"none"!==window.getComputedStyle(t).display}function Ki(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function Ji(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var u=!!a&&{passive:!0};function Ui(t,e,n){for(var i in e){var a=0<=["touchstart","touchmove"].indexOf(i)&&!n&&u;t.addEventListener(i,e[i],a)}}function _i(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&u;t.removeEventListener(n,e[n],i)}}function Zi(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var $i=function(H){H=Li({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},H||{});var O=document,m=window,a={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},e={},n=H.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=m.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}var y=e.tC?Bi(e.tC):Si(e,"tC",function(){var t=document,e=Hi(),n=Oi(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(r=u[l],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?Di(e,n):i.remove(),a}(),n),g=e.tPL?Bi(e.tPL):Si(e,"tPL",function(){var t,e=document,n=Hi(),i=Oi(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?Di(n,i):a.remove(),t}(),n),D=e.tMQ?Bi(e.tMQ):Si(e,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=Hi(),i=Oi(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?Di(n,i):a.remove(),"absolute"===t}(),n),r=e.tTf?Bi(e.tTf):Si(e,"tTf",Ki("transform"),n),o=e.t3D?Bi(e.t3D):Si(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Hi(),a=Oi(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?Di(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(r),n),x=e.tTDu?Bi(e.tTDu):Si(e,"tTDu",Ki("transitionDuration"),n),u=e.tTDe?Bi(e.tTDe):Si(e,"tTDe",Ki("transitionDelay"),n),b=e.tADu?Bi(e.tADu):Si(e,"tADu",Ki("animationDuration"),n),l=e.tADe?Bi(e.tADe):Si(e,"tADe",Ki("animationDelay"),n),s=e.tTE?Bi(e.tTE):Si(e,"tTE",Ji(x,"Transition"),n),c=e.tAE?Bi(e.tAE):Si(e,"tAE",Ji(b,"Animation"),n),f=m.console&&"function"==typeof m.console.warn,d=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],v={};if(d.forEach(function(t){if("string"==typeof H[t]){var e=H[t],n=O.querySelector(e);if(v[t]=e,!n||!n.nodeName)return void(f&&console.warn("Can't find",H[t]));H[t]=n}}),!(H.container.children.length<1)){var k=H.responsive,R=H.nested,I="carousel"===H.mode;if(k){0 in k&&(H=Li(H,k[0]),delete k[0]);var p={};for(var h in k){var w=k[h];w="number"==typeof w?{items:w}:w,p[h]=w}k=p,p=null}if(I||function t(e){for(var n in e)I||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(H),!I){H.axis="horizontal",H.slideBy="page",H.edgePadding=!1;var P=H.animateIn,z=H.animateOut,C=H.animateDelay,W=H.animateNormal}var M,q,F="horizontal"===H.axis,T=O.createElement("div"),j=O.createElement("div"),V=H.container,E=V.parentNode,A=V.outerHTML,G=V.children,Q=G.length,X=rn(),Y=!1;k&&En(),I&&(V.className+=" tns-vpfix");var N,L,B,S,K,J,U,_,Z,$=H.autoWidth,tt=sn("fixedWidth"),et=sn("edgePadding"),nt=sn("gutter"),it=un(),at=sn("center"),rt=$?1:Math.floor(sn("items")),ot=sn("slideBy"),ut=H.viewportMax||H.fixedWidthViewportWidth,lt=sn("arrowKeys"),st=sn("speed"),ct=H.rewind,ft=!ct&&H.loop,dt=sn("autoHeight"),vt=sn("controls"),pt=sn("controlsText"),ht=sn("nav"),mt=sn("touch"),yt=sn("mouseDrag"),gt=sn("autoplay"),xt=sn("autoplayTimeout"),bt=sn("autoplayText"),wt=sn("autoplayHoverPause"),Ct=sn("autoplayResetOnVisibility"),Mt=(U=null,_=sn("nonce"),Z=document.createElement("style"),U&&Z.setAttribute("media",U),_&&Z.setAttribute("nonce",_),document.querySelector("head").appendChild(Z),Z.sheet?Z.sheet:Z.styleSheet),Tt=H.lazyload,Et=H.lazyloadSelector,At=[],Nt=ft?(K=function(){{if($||tt&&!ut)return Q-1;var t=tt?"fixedWidth":"items",e=[];if((tt||H[t]<Q)&&e.push(H[t]),k)for(var n in k){var i=k[n][t];i&&(tt||i<Q)&&e.push(i)}return e.length||e.push(0),Math.ceil(tt?ut/Math.min.apply(null,e):Math.max.apply(null,e))}}(),J=I?Math.ceil((5*K-Q)/2):4*K-Q,J=Math.max(K,J),ln("edgePadding")?J+1:J):0,Lt=I?Q+2*Nt:Q+Nt,Bt=!(!tt&&!$||ft),St=tt?_n():null,Ht=!I||!ft,Ot=F?"left":"top",Dt="",kt="",Rt=tt?function(){return at&&!ft?Q-1:Math.ceil(-St/(tt+nt))}:$?function(){for(var t=0;t<Lt;t++)if(N[t]>=-St)return t}:function(){return at&&I&&!ft?Q-1:ft||I?Math.max(0,Lt-Math.ceil(rt)):Lt-1},It=en(sn("startIndex")),Pt=It,zt=(tn(),0),Wt=$?null:Rt(),qt=H.preventActionWhenRunning,Ft=H.swipeAngle,jt=!Ft||"?",Vt=!1,Gt=H.onInit,Qt=new Zi,Xt=" tns-slider tns-"+H.mode,Yt=V.id||(S=window.tnsId,window.tnsId=S?S+1:1,"tns"+window.tnsId),Kt=sn("disable"),Jt=!1,Ut=H.freezable,_t=!(!Ut||$)&&Tn(),Zt=!1,$t={click:oi,keydown:function(t){t=pi(t);var e=[a.LEFT,a.RIGHT].indexOf(t.keyCode);0<=e&&(0===e?we.disabled||oi(t,-1):Ce.disabled||oi(t,1))}},te={click:function(t){if(Vt){if(qt)return;ai()}var e=hi(t=pi(t));for(;e!==Ae&&!qi(e,"data-nav");)e=e.parentNode;if(qi(e,"data-nav")){var n=Se=Number(Fi(e,"data-nav")),i=tt||$?n*Q/Le:n*rt,a=le?n:Math.min(Math.ceil(i),Q-1);ri(a,t),He===n&&(Pe&&fi(),Se=-1)}},keydown:function(t){t=pi(t);var e=O.activeElement;if(!qi(e,"data-nav"))return;var n=[a.LEFT,a.RIGHT,a.ENTER,a.SPACE].indexOf(t.keyCode),i=Number(Fi(e,"data-nav"));0<=n&&(0===n?0<i&&vi(Ee[i-1]):1===n?i<Le-1&&vi(Ee[i+1]):ri(Se=i,t))}},ee={mouseover:function(){Pe&&(li(),ze=!0)},mouseout:function(){ze&&(ui(),ze=!1)}},ne={visibilitychange:function(){O.hidden?Pe&&(li(),qe=!0):qe&&(ui(),qe=!1)}},ie={keydown:function(t){t=pi(t);var e=[a.LEFT,a.RIGHT].indexOf(t.keyCode);0<=e&&oi(t,0===e?-1:1)}},ae={touchstart:xi,touchmove:bi,touchend:wi,touchcancel:wi},re={mousedown:xi,mousemove:bi,mouseup:wi,mouseleave:wi},oe=ln("controls"),ue=ln("nav"),le=!!$||H.navAsThumbnails,se=ln("autoplay"),ce=ln("touch"),fe=ln("mouseDrag"),de="tns-slide-active",ve="tns-slide-cloned",pe="tns-complete",he={load:function(t){kn(hi(t))},error:function(t){e=hi(t),zi(e,"failed"),Rn(e);var e}},me="force"===H.preventScrollOnTouch;if(oe)var ye,ge,xe=H.controlsContainer,be=H.controlsContainer?H.controlsContainer.outerHTML:"",we=H.prevButton,Ce=H.nextButton,Me=H.prevButton?H.prevButton.outerHTML:"",Te=H.nextButton?H.nextButton.outerHTML:"";if(ue)var Ee,Ae=H.navContainer,Ne=H.navContainer?H.navContainer.outerHTML:"",Le=$?Q:Mi(),Be=0,Se=-1,He=an(),Oe=He,De="tns-nav-active",ke="Carousel Page ",Re=" (Current Slide)";if(se)var Ie,Pe,ze,We,qe,Fe="forward"===H.autoplayDirection?1:-1,je=H.autoplayButton,Ve=H.autoplayButton?H.autoplayButton.outerHTML:"",Ge=["<span class='tns-visually-hidden'>"," animation</span>"];if(ce||fe)var Qe,Xe,Ye={},Ke={},Je=!1,Ue=F?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};$||$e(Kt||_t),r&&(Ot=r,Dt="translate",o?(Dt+=F?"3d(":"3d(0px, ",kt=F?", 0px, 0px)":", 0px)"):(Dt+=F?"X(":"Y(",kt=")")),I&&(V.className=V.className.replace("tns-vpfix","")),function(){ln("gutter");T.className="tns-outer",j.className="tns-inner",T.id=Yt+"-ow",j.id=Yt+"-iw",""===V.id&&(V.id=Yt);Xt+=g||$?" tns-subpixel":" tns-no-subpixel",Xt+=y?" tns-calc":" tns-no-calc",$&&(Xt+=" tns-autowidth");Xt+=" tns-"+H.axis,V.className+=Xt,I?((M=O.createElement("div")).id=Yt+"-mw",M.className="tns-ovh",T.appendChild(M),M.appendChild(j)):T.appendChild(j);if(dt){var t=M||j;t.className+=" tns-ah"}if(E.insertBefore(T,V),j.appendChild(V),Ii(G,function(t,e){zi(t,"tns-item"),t.id||(t.id=Yt+"-item"+e),!I&&W&&zi(t,W),ji(t,{"aria-hidden":"true",tabindex:"-1"})}),Nt){for(var e=O.createDocumentFragment(),n=O.createDocumentFragment(),i=Nt;i--;){var a=i%Q,r=G[a].cloneNode(!0);if(zi(r,ve),Vi(r,"id"),n.insertBefore(r,n.firstChild),I){var o=G[Q-1-a].cloneNode(!0);zi(o,ve),Vi(o,"id"),e.appendChild(o)}}V.insertBefore(e,V.firstChild),V.appendChild(n),G=V.children}}(),function(){if(!I)for(var t=It,e=It+Math.min(Q,rt);t<e;t++){var n=G[t];n.style.left=100*(t-It)/rt+"%",zi(n,P),Wi(n,W)}F&&(g||$?(ki(Mt,"#"+Yt+" > .tns-item","font-size:"+m.getComputedStyle(G[0]).fontSize+";",Ri(Mt)),ki(Mt,"#"+Yt,"font-size:0;",Ri(Mt))):I&&Ii(G,function(t,e){var n;t.style.marginLeft=(n=e,y?y+"("+100*n+"% / "+Lt+")":100*n/Lt+"%")}));if(D){if(x){var i=M&&H.autoHeight?hn(H.speed):"";ki(Mt,"#"+Yt+"-mw",i,Ri(Mt))}i=cn(H.edgePadding,H.gutter,H.fixedWidth,H.speed,H.autoHeight),ki(Mt,"#"+Yt+"-iw",i,Ri(Mt)),I&&(i=F&&!$?"width:"+fn(H.fixedWidth,H.gutter,H.items)+";":"",x&&(i+=hn(st)),ki(Mt,"#"+Yt,i,Ri(Mt))),i=F&&!$?dn(H.fixedWidth,H.gutter,H.items):"",H.gutter&&(i+=vn(H.gutter)),I||(x&&(i+=hn(st)),b&&(i+=mn(st))),i&&ki(Mt,"#"+Yt+" > .tns-item",i,Ri(Mt))}else{I&&dt&&(M.style[x]=st/1e3+"s"),j.style.cssText=cn(et,nt,tt,dt),I&&F&&!$&&(V.style.width=fn(tt,nt,rt));var i=F&&!$?dn(tt,nt,rt):"";nt&&(i+=vn(nt)),i&&ki(Mt,"#"+Yt+" > .tns-item",i,Ri(Mt))}if(k&&D)for(var a in k){a=parseInt(a);var r=k[a],i="",o="",u="",l="",s="",c=$?null:sn("items",a),f=sn("fixedWidth",a),d=sn("speed",a),v=sn("edgePadding",a),p=sn("autoHeight",a),h=sn("gutter",a);x&&M&&sn("autoHeight",a)&&"speed"in r&&(o="#"+Yt+"-mw{"+hn(d)+"}"),("edgePadding"in r||"gutter"in r)&&(u="#"+Yt+"-iw{"+cn(v,h,f,d,p)+"}"),I&&F&&!$&&("fixedWidth"in r||"items"in r||tt&&"gutter"in r)&&(l="width:"+fn(f,h,c)+";"),x&&"speed"in r&&(l+=hn(d)),l&&(l="#"+Yt+"{"+l+"}"),("fixedWidth"in r||tt&&"gutter"in r||!I&&"items"in r)&&(s+=dn(f,h,c)),"gutter"in r&&(s+=vn(h)),!I&&"speed"in r&&(x&&(s+=hn(d)),b&&(s+=mn(d))),s&&(s="#"+Yt+" > .tns-item{"+s+"}"),(i=o+u+l+s)&&Mt.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",Mt.cssRules.length)}}(),yn();var _e=ft?I?function(){var t=zt,e=Wt;t+=ot,e-=ot,et?(t+=1,e-=1):tt&&(it+nt)%(tt+nt)&&(e-=1),Nt&&(e<It?It-=Q:It<t&&(It+=Q))}:function(){if(Wt<It)for(;zt+Q<=It;)It-=Q;else if(It<zt)for(;It<=Wt-Q;)It+=Q}:function(){It=Math.max(zt,Math.min(Wt,It))},Ze=I?function(){var e,n,i,a,t,r,o,u,l,s,c;Jn(V,""),x||!st?(ti(),st&&Yi(V)||ai()):(e=V,n=Ot,i=Dt,a=kt,t=Zn(),r=st,o=ai,u=Math.min(r,10),l=0<=t.indexOf("%")?"%":"px",t=t.replace(l,""),s=Number(e.style[n].replace(i,"").replace(a,"").replace(l,"")),c=(t-s)/r*u,setTimeout(function t(){r-=u,s+=c,e.style[n]=i+s+l+a,0<r?setTimeout(t,u):o()},u)),F||Ci()}:function(){At=[];var t={};t[s]=t[c]=ai,_i(G[Pt],t),Ui(G[It],t),ei(Pt,P,z,!0),ei(It,W,P),s&&c&&st&&Yi(V)||ai()};return{version:"2.9.4",getInfo:Ei,events:Qt,goTo:ri,play:function(){gt&&!Pe&&(ci(),We=!1)},pause:function(){Pe&&(fi(),We=!0)},isOn:Y,updateSliderHeight:Fn,refresh:yn,destroy:function(){if(Mt.disabled=!0,Mt.ownerNode&&Mt.ownerNode.remove(),_i(m,{resize:Cn}),lt&&_i(O,ie),xe&&_i(xe,$t),Ae&&_i(Ae,te),_i(V,ee),_i(V,ne),je&&_i(je,{click:di}),gt&&clearInterval(Ie),I&&s){var t={};t[s]=ai,_i(V,t)}mt&&_i(V,ae),yt&&_i(V,re);var r=[A,be,Me,Te,Ne,Ve];for(var e in d.forEach(function(t,e){var n="container"===t?T:H[t];if("object"==typeof n&&n){var i=!!n.previousElementSibling&&n.previousElementSibling,a=n.parentNode;n.outerHTML=r[e],H[t]=i?i.nextElementSibling:a.firstElementChild}}),d=P=z=C=W=F=T=j=V=E=A=G=Q=q=X=$=tt=et=nt=it=rt=ot=ut=lt=st=ct=ft=dt=Mt=Tt=N=At=Nt=Lt=Bt=St=Ht=Ot=Dt=kt=Rt=It=Pt=zt=Wt=Ft=jt=Vt=Gt=Qt=Xt=Yt=Kt=Jt=Ut=_t=Zt=$t=te=ee=ne=ie=ae=re=oe=ue=le=se=ce=fe=de=pe=he=L=vt=pt=xe=be=we=Ce=ye=ge=ht=Ae=Ne=Ee=Le=Be=Se=He=Oe=De=ke=Re=gt=xt=Fe=bt=wt=je=Ve=Ct=Ge=Ie=Pe=ze=We=qe=Ye=Ke=Qe=Je=Xe=Ue=mt=yt=null,this)"rebuild"!==e&&(this[e]=null);Y=!1},rebuild:function(){return $i(Li(H,v))}}}function $e(t){t&&(vt=ht=mt=yt=lt=gt=wt=Ct=!1)}function tn(){for(var t=I?It-Nt:It;t<0;)t+=Q;return t%Q+1}function en(t){return t=t?Math.max(0,Math.min(ft?Q-1:Q-rt,t)):0,I?t+Nt:t}function nn(t){for(null==t&&(t=It),I&&(t-=Nt);t<0;)t+=Q;return Math.floor(t%Q)}function an(){var t,e=nn();return t=le?e:tt||$?Math.ceil((e+1)*Le/Q-1):Math.floor(e/rt),!ft&&I&&It===Wt&&(t=Le-1),t}function rn(){return m.innerWidth||O.documentElement.clientWidth||O.body.clientWidth}function on(t){return"top"===t?"afterbegin":"beforeend"}function un(){var t=et?2*et-nt:0;return function t(e){if(null!=e){var n,i,a=O.createElement("div");return e.appendChild(a),i=(n=a.getBoundingClientRect()).right-n.left,a.remove(),i||t(e.parentNode)}}(E)-t}function ln(t){if(H[t])return!0;if(k)for(var e in k)if(k[e][t])return!0;return!1}function sn(t,e){if(null==e&&(e=X),"items"===t&&tt)return Math.floor((it+nt)/(tt+nt))||1;var n=H[t];if(k)for(var i in k)e>=parseInt(i)&&t in k[i]&&(n=k[i][t]);return"slideBy"===t&&"page"===n&&(n=sn("items")),I||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function cn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=F?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(F?u+" 0 0":"0 "+u+" 0")+";"}return!I&&a&&x&&i&&(r+=hn(i)),r}function fn(t,e,n){return t?(t+e)*Lt+"px":y?y+"("+100*Lt+"% / "+n+")":100*Lt/n+"%"}function dn(t,e,n){var i;if(t)i=t+e+"px";else{I||(n=Math.floor(n));var a=I?Lt:n;i=y?y+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==R?i+";":i+" !important;"}function vn(t){var e="";!1!==t&&(e=(F?"padding-":"margin-")+(F?"right":"bottom")+": "+t+"px;");return e}function pn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function hn(t){return pn(x,18)+"transition-duration:"+t/1e3+"s;"}function mn(t){return pn(b,17)+"animation-duration:"+t/1e3+"s;"}function yn(){if(ln("autoHeight")||$||!F){var t=V.querySelectorAll("img");Ii(t,function(t){var e=t.src;Tt||(e&&e.indexOf("data:image")<0?(t.src="",Ui(t,he),zi(t,"loading"),t.src=e):kn(t))}),Ai(function(){zn(Gi(t),function(){L=!0})}),ln("autoHeight")&&(t=In(It,Math.min(It+rt-1,Lt-1))),Tt?gn():Ai(function(){zn(Gi(t),gn)})}else I&&$n(),bn(),wn()}function gn(){if($&&1<Q){var i=ft?It:Q-1;!function t(){var e=G[i].getBoundingClientRect().left,n=G[i-1].getBoundingClientRect().right;Math.abs(e-n)<=1?xn():setTimeout(function(){t()},16)}()}else xn()}function xn(){F&&!$||(jn(),$?(St=_n(),Ut&&(_t=Tn()),Wt=Rt(),$e(Kt||_t)):Ci()),I&&$n(),bn(),wn()}function bn(){if(Vn(),T.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+Hn()+"</span>  of "+Q+"</div>"),B=T.querySelector(".tns-liveregion .current"),se){var t=gt?"stop":"start";je?ji(je,{"data-action":t}):H.autoplayButtonOutput&&(T.insertAdjacentHTML(on(H.autoplayPosition),'<button type="button" data-action="'+t+'">'+Ge[0]+t+Ge[1]+bt[0]+"</button>"),je=T.querySelector("[data-action]")),je&&Ui(je,{click:di}),gt&&(ci(),wt&&Ui(V,ee),Ct&&Ui(V,ne))}if(ue){if(Ae)ji(Ae,{"aria-label":"Carousel Pagination"}),Ii(Ee=Ae.children,function(t,e){ji(t,{"data-nav":e,tabindex:"-1","aria-label":ke+(e+1),"aria-controls":Yt})});else{for(var e="",n=le?"":'style="display:none"',i=0;i<Q;i++)e+='<button type="button" data-nav="'+i+'" tabindex="-1" aria-controls="'+Yt+'" '+n+' aria-label="'+ke+(i+1)+'"></button>';e='<div class="tns-nav" aria-label="Carousel Pagination">'+e+"</div>",T.insertAdjacentHTML(on(H.navPosition),e),Ae=T.querySelector(".tns-nav"),Ee=Ae.children}if(Ti(),x){var a=x.substring(0,x.length-18).toLowerCase(),r="transition: all "+st/1e3+"s";a&&(r="-"+a+"-"+r),ki(Mt,"[aria-controls^="+Yt+"-item]",r,Ri(Mt))}ji(Ee[He],{"aria-label":ke+(He+1)+Re}),Vi(Ee[He],"tabindex"),zi(Ee[He],De),Ui(Ae,te)}oe&&(xe||we&&Ce||(T.insertAdjacentHTML(on(H.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+Yt+'">'+pt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+Yt+'">'+pt[1]+"</button></div>"),xe=T.querySelector(".tns-controls")),we&&Ce||(we=xe.children[0],Ce=xe.children[1]),H.controlsContainer&&ji(xe,{"aria-label":"Carousel Navigation",tabindex:"0"}),(H.controlsContainer||H.prevButton&&H.nextButton)&&ji([we,Ce],{"aria-controls":Yt,tabindex:"-1"}),(H.controlsContainer||H.prevButton&&H.nextButton)&&(ji(we,{"data-controls":"prev"}),ji(Ce,{"data-controls":"next"})),ye=Qn(we),ge=Qn(Ce),Kn(),xe?Ui(xe,$t):(Ui(we,$t),Ui(Ce,$t))),An()}function wn(){if(I&&s){var t={};t[s]=ai,Ui(V,t)}mt&&Ui(V,ae,H.preventScrollOnTouch),yt&&Ui(V,re),lt&&Ui(O,ie),"inner"===R?Qt.on("outerResized",function(){Mn(),Qt.emit("innerLoaded",Ei())}):(k||tt||$||dt||!F)&&Ui(m,{resize:Cn}),dt&&("outer"===R?Qt.on("innerLoaded",Pn):Kt||Pn()),Dn(),Kt?Bn():_t&&Ln(),Qt.on("indexChanged",Wn),"inner"===R&&Qt.emit("innerLoaded",Ei()),"function"==typeof Gt&&Gt(Ei()),Y=!0}function Cn(t){Ai(function(){Mn(pi(t))})}function Mn(t){if(Y){"outer"===R&&Qt.emit("outerResized",Ei(t)),X=rn();var e,n=q,i=!1;k&&(En(),(e=n!==q)&&Qt.emit("newBreakpointStart",Ei(t)));var a,r,o,u,l=rt,s=Kt,c=_t,f=lt,d=vt,v=ht,p=mt,h=yt,m=gt,y=wt,g=Ct,x=It;if(e){var b=tt,w=dt,C=pt,M=at,T=bt;if(!D)var E=nt,A=et}if(lt=sn("arrowKeys"),vt=sn("controls"),ht=sn("nav"),mt=sn("touch"),at=sn("center"),yt=sn("mouseDrag"),gt=sn("autoplay"),wt=sn("autoplayHoverPause"),Ct=sn("autoplayResetOnVisibility"),e&&(Kt=sn("disable"),tt=sn("fixedWidth"),st=sn("speed"),dt=sn("autoHeight"),pt=sn("controlsText"),bt=sn("autoplayText"),xt=sn("autoplayTimeout"),D||(et=sn("edgePadding"),nt=sn("gutter"))),$e(Kt),it=un(),F&&!$||Kt||(jn(),F||(Ci(),i=!0)),(tt||$)&&(St=_n(),Wt=Rt()),(e||tt)&&(rt=sn("items"),ot=sn("slideBy"),(r=rt!==l)&&(tt||$||(Wt=Rt()),_e())),e&&Kt!==s&&(Kt?Bn():function(){if(!Jt)return;if(Mt.disabled=!1,V.className+=Xt,$n(),ft)for(var t=Nt;t--;)I&&Xi(G[t]),Xi(G[Lt-t-1]);if(!I)for(var e=It,n=It+Q;e<n;e++){var i=G[e],a=e<It+rt?P:W;i.style.left=100*(e-It)/rt+"%",zi(i,a)}Nn(),Jt=!1}()),Ut&&(e||tt||$)&&(_t=Tn())!==c&&(_t?(ti(Zn(en(0))),Ln()):(!function(){if(!Zt)return;et&&D&&(j.style.margin="");if(Nt)for(var t="tns-transparent",e=Nt;e--;)I&&Wi(G[e],t),Wi(G[Lt-e-1],t);Nn(),Zt=!1}(),i=!0)),$e(Kt||_t),gt||(wt=Ct=!1),lt!==f&&(lt?Ui(O,ie):_i(O,ie)),vt!==d&&(vt?xe?Xi(xe):(we&&Xi(we),Ce&&Xi(Ce)):xe?Qi(xe):(we&&Qi(we),Ce&&Qi(Ce))),ht!==v&&(ht?(Xi(Ae),Ti()):Qi(Ae)),mt!==p&&(mt?Ui(V,ae,H.preventScrollOnTouch):_i(V,ae)),yt!==h&&(yt?Ui(V,re):_i(V,re)),gt!==m&&(gt?(je&&Xi(je),Pe||We||ci()):(je&&Qi(je),Pe&&fi())),wt!==y&&(wt?Ui(V,ee):_i(V,ee)),Ct!==g&&(Ct?Ui(O,ne):_i(O,ne)),e){if(tt===b&&at===M||(i=!0),dt!==w&&(dt||(j.style.height="")),vt&&pt!==C&&(we.innerHTML=pt[0],Ce.innerHTML=pt[1]),je&&bt!==T){var N=gt?1:0,L=je.innerHTML,B=L.length-T[N].length;L.substring(B)===T[N]&&(je.innerHTML=L.substring(0,B)+bt[N])}}else at&&(tt||$)&&(i=!0);if((r||tt&&!$)&&(Le=Mi(),Ti()),(a=It!==x)?(Qt.emit("indexChanged",Ei()),i=!0):r?a||Wn():(tt||$)&&(Dn(),Vn(),Sn()),r&&!I&&function(){for(var t=It+Math.min(Q,rt),e=Lt;e--;){var n=G[e];It<=e&&e<t?(zi(n,"tns-moving"),n.style.left=100*(e-It)/rt+"%",zi(n,P),Wi(n,W)):n.style.left&&(n.style.left="",zi(n,W),Wi(n,P)),Wi(n,z)}setTimeout(function(){Ii(G,function(t){Wi(t,"tns-moving")})},300)}(),!Kt&&!_t){if(e&&!D&&(et===A&&nt===E||(j.style.cssText=cn(et,nt,tt,st,dt)),F)){I&&(V.style.width=fn(tt,nt,rt));var S=dn(tt,nt,rt)+vn(nt);u=Ri(o=Mt)-1,"deleteRule"in o?o.deleteRule(u):o.removeRule(u),ki(Mt,"#"+Yt+" > .tns-item",S,Ri(Mt))}dt&&Pn(),i&&($n(),Pt=It)}e&&Qt.emit("newBreakpointEnd",Ei(t))}}function Tn(){if(!tt&&!$)return Q<=(at?rt-(rt-1)/2:rt);var t=tt?(tt+nt)*Q:N[Q],e=et?it+2*et:it+nt;return at&&(e-=tt?(it-tt)/2:(it-(N[It+1]-N[It]-nt))/2),t<=e}function En(){for(var t in q=0,k)(t=parseInt(t))<=X&&(q=t)}function An(){!gt&&je&&Qi(je),!ht&&Ae&&Qi(Ae),vt||(xe?Qi(xe):(we&&Qi(we),Ce&&Qi(Ce)))}function Nn(){gt&&je&&Xi(je),ht&&Ae&&Xi(Ae),vt&&(xe?Xi(xe):(we&&Xi(we),Ce&&Xi(Ce)))}function Ln(){if(!Zt){if(et&&(j.style.margin="0px"),Nt)for(var t="tns-transparent",e=Nt;e--;)I&&zi(G[e],t),zi(G[Lt-e-1],t);An(),Zt=!0}}function Bn(){if(!Jt){if(Mt.disabled=!0,V.className=V.className.replace(Xt.substring(1),""),Vi(V,["style"]),ft)for(var t=Nt;t--;)I&&Qi(G[t]),Qi(G[Lt-t-1]);if(F&&I||Vi(j,["style"]),!I)for(var e=It,n=It+Q;e<n;e++){var i=G[e];Vi(i,["style"]),Wi(i,P),Wi(i,W)}An(),Jt=!0}}function Sn(){var t=Hn();B.innerHTML!==t&&(B.innerHTML=t)}function Hn(){var t=On(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function On(t){null==t&&(t=Zn());var n,i,a,r=It;if(at||et?($||tt)&&(i=-(parseFloat(t)+et),a=i+it+2*et):$&&(i=N[It],a=i+it),$)N.forEach(function(t,e){e<Lt&&((at||et)&&t<=i+.5&&(r=e),.5<=a-t&&(n=e))});else{if(tt){var e=tt+nt;at||et?(r=Math.floor(i/e),n=Math.ceil(a/e-1)):n=r+Math.ceil(it/e)-1}else if(at||et){var o=rt-1;if(at?(r-=o/2,n=It+o/2):n=It+o,et){var u=et*rt/it;r-=u,n+=u}r=Math.floor(r),n=Math.ceil(n)}else n=r+rt-1;r=Math.max(r,0),n=Math.min(n,Lt-1)}return[r,n]}function Dn(){if(Tt&&!Kt){var t=On();t.push(Et),In.apply(null,t).forEach(function(t){if(!Pi(t,pe)){var e={};e[s]=function(t){t.stopPropagation()},Ui(t,e),Ui(t,he),t.src=Fi(t,"data-src");var n=Fi(t,"data-srcset");n&&(t.srcset=n),zi(t,"loading")}})}}function kn(t){zi(t,"loaded"),Rn(t)}function Rn(t){zi(t,pe),Wi(t,"loading"),_i(t,he)}function In(t,e,n){var i=[];for(n||(n="img");t<=e;)Ii(G[t].querySelectorAll(n),function(t){i.push(t)}),t++;return i}function Pn(){var t=In.apply(null,On());Ai(function(){zn(t,Fn)})}function zn(n,t){return L?t():(n.forEach(function(t,e){!Tt&&t.complete&&Rn(t),Pi(t,pe)&&n.splice(e,1)}),n.length?void Ai(function(){zn(n,t)}):t())}function Wn(){Dn(),Vn(),Sn(),Kn(),function(){if(ht&&(He=0<=Se?Se:an(),Se=-1,He!==Oe)){var t=Ee[Oe],e=Ee[He];ji(t,{tabindex:"-1","aria-label":ke+(Oe+1)}),Wi(t,De),ji(e,{"aria-label":ke+(He+1)+Re}),Vi(e,"tabindex"),zi(e,De),Oe=He}}()}function qn(t,e){for(var n=[],i=t,a=Math.min(t+e,Lt);i<a;i++)n.push(G[i].offsetHeight);return Math.max.apply(null,n)}function Fn(){var t=dt?qn(It,rt):qn(Nt,Q),e=M||j;e.style.height!==t&&(e.style.height=t+"px")}function jn(){N=[0];var n=F?"left":"top",i=F?"right":"bottom",a=G[0].getBoundingClientRect()[n];Ii(G,function(t,e){e&&N.push(t.getBoundingClientRect()[n]-a),e===Lt-1&&N.push(t.getBoundingClientRect()[i]-a)})}function Vn(){var t=On(),n=t[0],i=t[1];Ii(G,function(t,e){n<=e&&e<=i?qi(t,"aria-hidden")&&(Vi(t,["aria-hidden","tabindex"]),zi(t,de)):qi(t,"aria-hidden")||(ji(t,{"aria-hidden":"true",tabindex:"-1"}),Wi(t,de))})}function Gn(t){return t.nodeName.toLowerCase()}function Qn(t){return"button"===Gn(t)}function Xn(t){return"true"===t.getAttribute("aria-disabled")}function Yn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Kn(){if(vt&&!ct&&!ft){var t=ye?we.disabled:Xn(we),e=ge?Ce.disabled:Xn(Ce),n=It<=zt,i=!ct&&Wt<=It;n&&!t&&Yn(ye,we,!0),!n&&t&&Yn(ye,we,!1),i&&!e&&Yn(ge,Ce,!0),!i&&e&&Yn(ge,Ce,!1)}}function Jn(t,e){x&&(t.style[x]=e)}function Un(t){return null==t&&(t=It),$?(it-(et?nt:0)-(N[t+1]-N[t]-nt))/2:tt?(it-tt)/2:(rt-1)/2}function _n(){var t=it+(et?nt:0)-(tt?(tt+nt)*Lt:N[Lt]);return at&&!ft&&(t=tt?-(tt+nt)*(Lt-1)-Un():Un(Lt-1)-N[Lt-1]),0<t&&(t=0),t}function Zn(t){var e;if(null==t&&(t=It),F&&!$)if(tt)e=-(tt+nt)*t,at&&(e+=Un());else{var n=r?Lt:rt;at&&(t-=Un()),e=100*-t/n}else e=-N[t],at&&$&&(e+=Un());return Bt&&(e=Math.max(e,St)),e+=!F||$||tt?"px":"%"}function $n(t){Jn(V,"0s"),ti(t)}function ti(t){null==t&&(t=Zn()),V.style[Ot]=Dt+t+kt}function ei(t,e,n,i){var a=t+rt;ft||(a=Math.min(a,Lt));for(var r=t;r<a;r++){var o=G[r];i||(o.style.left=100*(r-It)/rt+"%"),C&&u&&(o.style[u]=o.style[l]=C*(r-t)/1e3+"s"),Wi(o,e),zi(o,n),i&&At.push(o)}}function ni(t,e){Ht&&_e(),(It!==Pt||e)&&(Qt.emit("indexChanged",Ei()),Qt.emit("transitionStart",Ei()),dt&&Pn(),Pe&&t&&0<=["click","keydown"].indexOf(t.type)&&fi(),Vt=!0,Ze())}function ii(t){return t.toLowerCase().replace(/-/g,"")}function ai(t){if(I||Vt){if(Qt.emit("transitionEnd",Ei(t)),!I&&0<At.length)for(var e=0;e<At.length;e++){var n=At[e];n.style.left="",l&&u&&(n.style[l]="",n.style[u]=""),Wi(n,z),zi(n,W)}if(!t||!I&&t.target.parentNode===V||t.target===V&&ii(t.propertyName)===ii(Ot)){if(!Ht){var i=It;_e(),It!==i&&(Qt.emit("indexChanged",Ei()),$n())}"inner"===R&&Qt.emit("innerLoaded",Ei()),Vt=!1,Pt=It}}}function ri(t,e){if(!_t)if("prev"===t)oi(e,-1);else if("next"===t)oi(e,1);else{if(Vt){if(qt)return;ai()}var n=nn(),i=0;if("first"===t?i=-n:"last"===t?i=I?Q-rt-n:Q-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(Q-1,t))),i=t-n)),!I&&i&&Math.abs(i)<rt){var a=0<i?1:-1;i+=zt<=It+i-Q?Q*a:2*Q*a*-1}It+=i,I&&ft&&(It<zt&&(It+=Q),Wt<It&&(It-=Q)),nn(It)!==nn(Pt)&&ni(e)}}function oi(t,e){if(Vt){if(qt)return;ai()}var n;if(!e){for(var i=hi(t=pi(t));i!==xe&&[we,Ce].indexOf(i)<0;)i=i.parentNode;var a=[we,Ce].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(ct){if(It===zt&&-1===e)return void ri("last",t);if(It===Wt&&1===e)return void ri("first",t)}e&&(It+=ot*e,$&&(It=Math.floor(It)),ni(n||t&&"keydown"===t.type?t:null))}function ui(){Ie=setInterval(function(){oi(null,Fe)},xt),Pe=!0}function li(){clearInterval(Ie),Pe=!1}function si(t,e){ji(je,{"data-action":t}),je.innerHTML=Ge[0]+t+Ge[1]+e}function ci(){ui(),je&&si("stop",bt[1])}function fi(){li(),je&&si("start",bt[0])}function di(){Pe?(fi(),We=!0):(ci(),We=!1)}function vi(t){t.focus()}function pi(t){return mi(t=t||m.event)?t.changedTouches[0]:t}function hi(t){return t.target||m.event.srcElement}function mi(t){return 0<=t.type.indexOf("touch")}function yi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function gi(){return a=Ke.y-Ye.y,r=Ke.x-Ye.x,t=Math.atan2(a,r)*(180/Math.PI),e=Ft,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),n===H.axis;var t,e,n,i,a,r}function xi(t){if(Vt){if(qt)return;ai()}gt&&Pe&&li(),Je=!0,Xe&&(Ni(Xe),Xe=null);var e=pi(t);Qt.emit(mi(t)?"touchStart":"dragStart",Ei(t)),!mi(t)&&0<=["img","a"].indexOf(Gn(hi(t)))&&yi(t),Ke.x=Ye.x=e.clientX,Ke.y=Ye.y=e.clientY,I&&(Qe=parseFloat(V.style[Ot].replace(Dt,"")),Jn(V,"0s"))}function bi(t){if(Je){var e=pi(t);Ke.x=e.clientX,Ke.y=e.clientY,I?Xe||(Xe=Ai(function(){!function t(e){if(!jt)return void(Je=!1);Ni(Xe);Je&&(Xe=Ai(function(){t(e)}));"?"===jt&&(jt=gi());if(jt){!me&&mi(e)&&(me=!0);try{e.type&&Qt.emit(mi(e)?"touchMove":"dragMove",Ei(e))}catch(t){}var n=Qe,i=Ue(Ke,Ye);if(!F||tt||$)n+=i,n+="px";else{var a=r?i*rt*100/((it+nt)*Lt):100*i/(it+nt);n+=a,n+="%"}V.style[Ot]=Dt+n+kt}}(t)})):("?"===jt&&(jt=gi()),jt&&(me=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&me&&t.preventDefault()}}function wi(i){if(Je){Xe&&(Ni(Xe),Xe=null),I&&Jn(V,""),Je=!1;var t=pi(i);Ke.x=t.clientX,Ke.y=t.clientY;var a=Ue(Ke,Ye);if(Math.abs(a)){if(!mi(i)){var n=hi(i);Ui(n,{click:function t(e){yi(e),_i(n,{click:t})}})}I?Xe=Ai(function(){if(F&&!$){var t=-a*rt/(it+nt);t=0<a?Math.floor(t):Math.ceil(t),It+=t}else{var e=-(Qe+a);if(e<=0)It=zt;else if(e>=N[Lt-1])It=Wt;else for(var n=0;n<Lt&&e>=N[n];)e>N[It=n]&&a<0&&(It+=1),n++}ni(i,a),Qt.emit(mi(i)?"touchEnd":"dragEnd",Ei(i))}):jt&&oi(i,0<a?-1:1)}}"auto"===H.preventScrollOnTouch&&(me=!1),Ft&&(jt="?"),gt&&!Pe&&ui()}function Ci(){(M||j).style.height=N[It+rt]-N[It]+"px"}function Mi(){var t=tt?(tt+nt)*Q/it:Q/rt;return Math.min(Math.ceil(t),Q)}function Ti(){if(ht&&!le&&Le!==Be){var t=Be,e=Le,n=Xi;for(Le<Be&&(t=Le,e=Be,n=Qi);t<e;)n(Ee[t]),t++;Be=Le}}function Ei(t){return{container:V,slideItems:G,navContainer:Ae,navItems:Ee,controlsContainer:xe,hasControls:oe,prevButton:we,nextButton:Ce,items:rt,slideBy:ot,cloneCount:Nt,slideCount:Q,slideCountNew:Lt,index:It,indexCached:Pt,displayIndex:tn(),navCurrentIndex:He,navCurrentIndexCached:Oe,pages:Le,pagesCached:Be,sheet:Mt,isOn:Y,event:t||{}}}f&&console.warn("No slides found in",H.container)};return $i}();
        // =================================================================
// Template Name: Affan - PWA Mobile HTML Template
// Template Author: Designing World
// Template Author URL: https://themeforest.net/user/designing-world
// =================================================================

// ============================================
// 1.0 Template Features Code
//      1.1 Setting Button Trigger
//      1.2 Password Visibility
//      1.3 Prevent Default 'a' Click
// 2.0 Third Party Plugins Activation
//      2.1 Dropdown Menu
//      2.2 Tiny Slider
//      2.3 Isotope
//      2.4 Image Gallery
//      2.5 Countdown
//      2.6 Counter Up
//      2.7 Range Slider
//      2.8 Data Table
//      2.9 Password Meter
// 3.0 Bootstrap Toast & Tooltips Activation
// 4.0 Miscellaneous Features Code
// 5.0 Preloader Activation
// ============================================

// ====================================
// Chapter 1.0: Template Features Code
// ====================================

'use strict';

// 1.1 => Setting Button Trigger

let settingButton = document.getElementById('settingTriggerBtn');
let settingCard = document.getElementById('settingCard');
let settingOverlay = document.getElementById('setting-popup-overlay');
let settingCardClose = document.getElementById('settingCardClose');

if (settingButton) {
    settingButton.addEventListener('click', function () {
        settingCard.classList.toggle('active');
        settingOverlay.classList.toggle('active');
    });
}

if (settingCardClose) {
    settingCardClose.addEventListener('click', function () {
        settingCard.classList.remove('active');
        settingOverlay.classList.remove('active');
    });
}

// 1.2 => Password Visibility

let passWord = document.getElementById('password-visibility');

if (passWord) {
    passWord.addEventListener('click', passwordFunction);
}

function passwordFunction() {
    let passInput = document.getElementById('psw-input');
    passWord.classList.toggle('active');

    if (passInput.type === 'password') {
        passInput.type = 'text';
    } else {
        passInput.type = 'password';
    }
}

// 1.3 => Prevent Default 'a' Click

let aisEmpty = document.querySelectorAll('a[href="#"]');
let aisEmptyLen = aisEmpty.length;

if (aisEmptyLen > 0) {
    for (let i = 0; i < aisEmptyLen; i++) {
        aisEmpty[i].addEventListener('click', function (event) {
            event.preventDefault();
        });
    }
}

// 1.4 => Copyright Full Year

let CopyrightYear = document.getElementById("copyrightYear");

if (CopyrightYear) {
    const year = new Date().getFullYear();
    CopyrightYear.innerHTML = year;
}

// ============================================
// Chapter 2.0: Third Party Plugins Activation
// ============================================

// 2.1.0 => Dropdown Menu (This code is dependent on [slideToggle.min.js] plugin).

let dropdownTarget = document.querySelectorAll('.sidenav-nav li ul');
let dropdownTargetLen = dropdownTarget.length;

if (dropdownTargetLen > 0) {
    for (let i = 0; i < dropdownTargetLen; i++) {
        let classTarget = dropdownTarget[i].previousElementSibling;
        classTarget.classList.add('nav-url');
    }

    let navUrl = document.querySelectorAll('.nav-url');
    let navUrlLen = navUrl.length;

    for (let i = 0; i < navUrlLen; i++) {
        navUrl[i].insertAdjacentHTML('beforeend', '<span class="dropdown-icon"><i class="bi bi-chevron-down"></i></span>');
        navUrl[i].addEventListener('click', function () {
            this.classList.toggle('dd-open');
        });
    }

    let sidenavNav = document.querySelector('.sidenav-nav');
    sidenavNav.addEventListener('click', function (e) {
        if (e.target.classList.contains('nav-url')) {
            let nextTarget = e.target.nextElementSibling;
            slideToggle(nextTarget, 400);
        }
    });
}

// 2.2.1 => Tiny Slider One (This code is dependent on [tiny-slider.js] plugin).

if (document.querySelectorAll('.tiny-slider-one-wrapper').length > 0) {
    tns({
        container: '.tiny-slider-one',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 1000,
        mouseDrag: true,
        controlsText: [('<i class="bi bi-chevron-left"></i>'), ('<i class="bi bi-chevron-right"></i>')]
    });
}

// 2.2.2 => Tiny Slider Two (This code is dependent on [tiny-slider.js] plugin).

if (document.querySelectorAll('.tiny-slider-two-wrapper').length > 0) {
    tns({
        container: '.tiny-slider-two',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayButtonOutput: false,
        speed: 1000,
        mouseDrag: true,
        controls: false,
        nav: true
    });

    let tns3dots = document.querySelectorAll('.tiny-slider-two-wrapper .tns-nav > button');
    let dotLength = tns3dots.length;
    document.getElementById('totaltnsDotsCount').innerHTML = dotLength;

    for (let i = 0; i < dotLength; i++) {
        tns3dots[i].innerHTML = i + 1;
    }
}

// 2.1.3 => Tiny Slider Three (This code is dependent on [tiny-slider.js] plugin).

if (document.querySelectorAll('.tiny-slider-three-wrapper').length > 0) {
    tns({
        container: '.tiny-slider-three',
        items: 1,
        gutter: 10,
        center: true,
        slideBy: 'page',
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 1000,
        mouseDrag: true,
        controls: false,
        nav: false,
        edgePadding: 40
    });
}

// 2.2.4 => Testimonial Slides One (This code is dependent on [tiny-slider.js] plugin).

if (document.querySelectorAll('.testimonial-slide-one-wrapper').length > 0) {
    tns({
        container: '.testimonial-slide',
        items: 1,
        gutter: 10,
        slideBy: 'page',
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 800,
        mouseDrag: true,
        controls: false,
        nav: true
    });
}

// 2.2.5 => Testimonial Slides Two (This code is dependent on [tiny-slider.js] plugin).

if (document.querySelectorAll('.testimonial-slide-two-wrapper').length > 0) {
    tns({
        container: '.testimonial-slide2',
        items: 2,
        center: true,
        slideBy: 'page',
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 800,
        mouseDrag: true,
        controls: true,
        nav: false,
        controlsText: [('<i class="bi bi-chevron-left"></i>'), ('<i class="bi bi-chevron-right"></i>')]
    });
}

// 2.2.6 => Testimonial Slides Three (This code is dependent on [tiny-slider.js] plugin).

if (document.querySelectorAll('.testimonial-slide-three-wrapper').length > 0) {
    tns({
        container: '.testimonial-slide3',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 800,
        mouseDrag: true,
        controls: false,
        nav: true,
        navPosition: 'bottom'
    });
}

// 2.2.7 => Partner Slides One (This code is dependent on [tiny-slider.js] plugin).

if (document.querySelectorAll('.partner-logo-slide-wrapper').length > 0) {
    tns({
        container: '.partner-slide',
        items: 3,
        gutter: 12,
        slideBy: 'page',
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 1000,
        mouseDrag: true,
        controls: false,
        nav: true,
        navPosition: 'bottom'
    });
}

// 2.2.8 => Partner Slides Two (This code is dependent on [tiny-slider.js] plugin).

if (document.querySelectorAll('.partner-logo-slide-wrapper-2').length > 0) {
    tns({
        container: '.partner-slide2',
        items: 3,
        gutter: 12,
        slideBy: 'page',
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 1000,
        mouseDrag: true,
        controls: false,
        nav: true,
        navPosition: 'bottom'
    });
}

// 2.2.9 => Image Gallery Slides (This code is dependent on [tiny-slider.js] plugin).

if (document.querySelectorAll('.image-gallery-slides-wrapper').length > 0) {
    tns({
        container: '.image-gallery-carousel',
        center: true,
        items: 2,
        gutter: 16,
        slideBy: 'page',
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 750,
        mouseDrag: true,
        controls: false,
        nav: false
    });
}

// 2.2.10 => Product Gallery Slides (This code is dependent on [tiny-slider.js] plugin).

if (document.querySelectorAll('.product-gallery-wrapper').length > 0) {
    tns({
        container: '.product-gallery',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 750,
        mouseDrag: true,
        controls: false,
        nav: false
    });
}

// 2.2.11 => Chat Users Slides (This code is dependent on [tiny-slider.js] plugin).

if (document.querySelectorAll('.chat-user-status-slides-wrapper').length > 0) {
    tns({
        container: '.chat-user-status-slides',
        items: 5,
        gutter: 8,
        slideBy: 'page',
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 750,
        mouseDrag: true,
        controls: false,
        nav: false,
        responsive: {
            480: {
                items: 7
            },
            576: {
                items: 7
            },
            768: {
                items: 8
            },
            992: {
                items: 10
            },
            1200: {
                items: 10
            }
        }
    });
}

// 2.3 Isotope [This code depends on {Imagesloaded & Isotope} plugins.]

let masonryWrapper = document.querySelector('.masonry-content-wrapper');

if (masonryWrapper) {
    imagesLoaded(masonryWrapper, function () {
        let iso = new Isotope(masonryWrapper, {
            itemSelector: '.portfolio-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.portfolio-item'
            }
        });

        let filtersElem = document.querySelector('.filters-button-group');

        if (filtersElem) {
            filtersElem.addEventListener('click', function (event) {
                if (!matchesSelector(event.target, 'button')) {
                    return;
                }
                let filterValue = event.target.getAttribute('data-filter');
                iso.arrange({
                    filter: filterValue
                });
            });
        }

        let buttonGroups = document.querySelectorAll('.filters-button-group');
        let buttonGroupslen = buttonGroups.length;

        for (let i = 0; i < buttonGroupslen; i++) {
            let buttonGroup = buttonGroups[i];
            radioButtonGroup(buttonGroup);
        }

        function radioButtonGroup(buttonGroup) {
            buttonGroup.addEventListener('click', function (event) {
                if (!matchesSelector(event.target, 'button')) {
                    return;
                }
                buttonGroup.querySelector('.active').classList.remove('active');
                event.target.classList.add('active');
            });
        }
    });
}

// 2.4.1 => Image Gallery (This code is dependent on [baguetteBox.min.js] plugin).

if (document.querySelectorAll('.gallery-img').length > 0) {
    window.addEventListener('load', function () {
        baguetteBox.run('.gallery-img', {
            captions: false,
            fullScreen: false,
            animation: 'slideIn', // Also available 'fadeIn' or 'false' options
            overlayBackgroundColor: 'rgba(15,7,15,0.7)'
        });
    });
}

// 2.4.2 => Image Gallery (This code is dependent on [baguetteBox.min.js] plugin).

if (document.querySelectorAll('.product-gallery').length > 0) {
    window.addEventListener('load', function () {
        baguetteBox.run('.product-gallery', {
            captions: false,
            fullScreen: false,
            animation: 'slideIn', // Also available 'fadeIn' or 'false' options
            overlayBackgroundColor: 'rgba(15,7,15,0.7)'
        });
    });
}

// 2.6 => Counter Up (This code is dependent on [index.js] plugin).

if (document.querySelectorAll('.counter').length > 0) {
    let counterUp = window.counterUp.default;

    let callback = entries => {
        entries.forEach(entry => {
            let counterElement = entry.target
            if (entry.isIntersecting && !counterElement.classList.contains('is-visible')) {
                counterUp(counterElement, {
                    duration: 2000,
                    delay: 20
                });
                counterElement.classList.add('is-visible');
            }
        });
    }

    let IO = new IntersectionObserver(callback, {
        threshold: 1
    });

    let counterUpClass = document.querySelectorAll('.counter');
    let counterUpClassLen = counterUpClass.length;

    for (let i = 0; i < counterUpClassLen; i++) {
        IO.observe(counterUpClass[i]);
    }
}

// 2.7.1 => ion Range Slider One (This code is dependent on [rangeslider.min.js] plugin).

let ionRangeSlider1 = document.getElementById('ionRangeSlider1');

if (ionRangeSlider1) {
    ionRangeSlider(ionRangeSlider1);
}

// 2.7.2 => ion Range Slider Two (This code is dependent on [rangeslider.min.js] plugin).

let ionRangeSlider2 = document.getElementById('ionRangeSlider2');

if (ionRangeSlider2) {
    ionRangeSlider(ionRangeSlider2);
}

// 2.8 => Data Table (This code is dependent on [vanilla-dataTables.min.js] plugin).

let dataTable1 = document.getElementById('dataTable');

if (dataTable1) {
    new DataTable(dataTable1, {
        perPage: 10,
        perPageSelect: [10, 20, 30, 40, 50],
        searchable: true,
        sortable: true,
        fixedHeight: false,
        prevText: '<i class="bi bi-arrow-left-short"></i>',
        nextText: '<i class="bi bi-arrow-right-short"></i>',
        labels: {
            placeholder: 'Search',
            perPage: '{select}',
            noRows: 'No data!',
            info: '{start} to {end} entries'
        }
    });
}

// 2.9 => Password Meter (This code is dependent on [pswmeter.js] plugin).

let passwordInputId = document.getElementById('psw-input');
let pswmeter = document.getElementById('pswmeter');

if (passwordInputId && pswmeter) {
    pswmeter.style.display = 'none';

    passwordInputId.addEventListener('keyup', function () {
        pswmeter.style.display = 'block';
    });

    passwordStrengthMeter({
        containerElement: '#pswmeter',
        passwordInput: '#psw-input',
        height: 4,
        borderRadius: 4,
        pswMinLength: 10
    });
}

// =================================================
// Chapter 3.0 Bootstrap Toast & Tooltips Activation
// =================================================

// Tooltip Activation

let affanTooltip = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = affanTooltip.map(function (tooltip) {
    return new bootstrap.Tooltip(tooltip);
});

// Toast Activation

let affanToast = [].slice.call(document.querySelectorAll('.toast'));
let toastList = affanToast.map(function (toast) {
    return new bootstrap.Toast(toast);
});
toastList.forEach(toast => toast.show());

// ===========================
// Chapter 4.0 Miscellaneous
// ==========================

// Toast Showing Function

let toastBtn = document.getElementById('toast-showing-btn');

if (toastBtn) {
    toastBtn.addEventListener('click', function () {
        let affanToast = [].slice.call(document.querySelectorAll('.toast'));
        let toastList = affanToast.map(function (toast) {
            return new bootstrap.Toast(toast);
        });
        toastList.forEach(toast => toast.show());
    });
}

// Toast Animation: This function creates the line animation effect on a toast.

window.onload = function toastAnimation() {
    let x = document.querySelectorAll('.toast-autohide');
    let toastLen = x.length;

    for (let i = 0; i < toastLen; i++) {
        x[i].insertAdjacentHTML('beforeend', '<span class="toast-autohide-animation"></span>');
        let toastDuration = x[i].getAttribute('data-bs-delay');
        var toastAnimDuration = toastDuration + 'ms';
    }

    let y = document.querySelectorAll('.toast-autohide-animation');
    let autohideLen = y.length;

    for (let z = 0; z < autohideLen; z++) {
        y[z].style.animationDuration = toastAnimDuration;
    }
}

// Add "form-control-clicked" class, when the user clicks the input element.

let formcontrolInput = document.querySelectorAll('.form-control, .form-select');

for (let i = 0; i < formcontrolInput.length; i++) {
    formcontrolInput[i].addEventListener('click', function () {
        this.classList.add('form-control-clicked');
    });
}

// When the user clicks on the element, the active class is added to understand the active status.

let activeEffect = document.querySelectorAll('.active-effect');
let activeEffectLen = activeEffect.length;

for (let i = 0; i < activeEffectLen; i++) {
    activeEffect[i].addEventListener('click', function () {
        let element = activeEffect[0];
        while (element) {
            if (element.tagName === 'DIV') {
                element.classList.remove('active');
            }
            element = element.nextSibling;
        }
        this.classList.add('active');
    });
}

// Image gallery items favorite icon click function.

let favIcon = document.querySelectorAll('.single-gallery-item .fav-icon');
let favIconLen = favIcon.length;

for (let i = 0; i < favIconLen; i++) {
    favIcon[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
}

// Chat page calling button functions.

let chatWrapper = document.getElementById('chat-wrapper');

let videoButton = document.getElementById('videoCallingButton');
let videoPopup = document.getElementById('videoCallingPopup');
let videoDecline = document.getElementById('videoCallDecline');

let callingButton = document.getElementById('callingButton');
let callingPopup = document.getElementById('callingPopup');
let callDecline = document.getElementById('callDecline');

function callingScreenAdd() {
    chatWrapper.classList.add('calling-screen-active');
}

function callingScreenRemove() {
    chatWrapper.classList.remove('calling-screen-active');
}

if (videoButton && videoDecline) {
    videoButton.addEventListener('click', function () {
        videoPopup.classList.add('screen-active');
        callingScreenAdd();
    });

    videoDecline.addEventListener('click', function () {
        videoPopup.classList.remove('screen-active');
        callingScreenRemove();
    });
}

if (callingButton && callDecline) {
    callingButton.addEventListener('click', function () {
        callingPopup.classList.add('screen-active');
        callingScreenAdd();
    });

    callDecline.addEventListener('click', function () {
        callingPopup.classList.remove('screen-active');
        callingScreenRemove();
    });
}

// Offline/Online Detection Demo Button Code (Please remove this code, when your website is ready to go live.)

let offlineBtn = document.querySelector('.offline-detection');
let onlineBtn = document.querySelector('.online-detection');

if (offlineBtn || onlineBtn) {
    let alertShowingId = document.getElementById('internetStatus');

    offlineBtn.addEventListener('click', function () {
        alertShowingId.style.display = 'block';
        alertShowingId.style.backgroundColor = '#ea4c62';
        alertShowingId.innerText = 'Oops! No internet connection.';

        setTimeout(function () {
            alertShowingId.style.display = 'none';
        }, 5000);
    });

    onlineBtn.addEventListener('click', function () {
        alertShowingId.style.display = 'block';
        alertShowingId.style.backgroundColor = '#00b894';
        alertShowingId.innerText = 'Your internet connection is back.';

        setTimeout(function () {
            alertShowingId.style.display = 'none';
        }, 5000);
    });
}

// ======================
// Chapter 5.0 Preloader
// ======================

let preloader = document.getElementById('preloader');

if (preloader) {
    window.addEventListener('load', function () {
        let fadeOut = setInterval(function () {
            if (!preloader.style.opacity) {
                preloader.style.opacity = 1;
            }
            if (preloader.style.opacity > 0) {
                preloader.style.opacity -= 0.1;
            } else {
                clearInterval(fadeOut);
                preloader.remove();
            }
        }, 20);
    });
}
    }
}