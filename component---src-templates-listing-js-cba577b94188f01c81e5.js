"use strict";(self.webpackChunkpersonal_for_sale_website=self.webpackChunkpersonal_for_sale_website||[]).push([[656],{4968:function(e,t,n){n.r(t),n.d(t,{default:function(){return Te}});var r=n(7294),o=n(1597),a="contact-module--contact--MoOIw",i="contact-module--contactIcon--maUM6",c=function(){return r.createElement("div",null,r.createElement("div",{id:"contact-module--contactContainer--6sgk5"},r.createElement("div",null,r.createElement("a",{className:i,href:"tel:1-555-555-5555","aria-label":"Phone Number"},r.createElement("i",{className:"fa fa-phone"})),r.createElement("a",{className:i,href:"sms:1-555-555-5555","aria-label":"Text Number"},r.createElement("i",{className:"fa fa-comment"})),r.createElement("a",{className:a,href:"tel:1-555-555-5555"},"555-555-5555")),r.createElement("div",null,r.createElement("a",{className:i,href:"mailto:fake@email.com","aria-label":"Email"},r.createElement("i",{className:"fa fa-envelope"})),r.createElement("a",{className:a,href:"mailto:fake@email.com"},"fake@email.com"))))},u=n(4446),s=n(4942),l=n(885),f=n(5987);var d=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};function p(e){var t=d(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var m=function(e,t){var n=(0,r.useRef)(!0);(0,r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)};function v(e){var t,n,o=(t=e,(n=(0,r.useRef)(t)).current=t,n);(0,r.useEffect)((function(){return function(){return o.current()}}),[])}var h=Math.pow(2,31)-1;function b(e,t,n){var r=n-Date.now();e.current=r<=h?setTimeout(t,r):setTimeout((function(){return b(e,t,n)}),h)}function E(){var e=function(){var e=(0,r.useRef)(!0),t=(0,r.useRef)((function(){return e.current}));return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t.current}(),t=(0,r.useRef)();return v((function(){return clearTimeout(t.current)})),(0,r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(n(),o<=h?t.current=setTimeout(r,o):b(t,r,Date.now()+o))},clear:n}}),[])}var g=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product;"undefined"!=typeof document||g?r.useLayoutEffect:r.useEffect,new WeakMap;var x=n(5893),y=["as","disabled"];function O(e){var t=e.tagName,n=e.disabled,r=e.href,o=e.target,a=e.rel,i=e.role,c=e.onClick,u=e.tabIndex,s=void 0===u?0:u,l=e.type;t||(t=null!=r||null!=o||null!=a?"a":"button");var f={tagName:t};if("button"===t)return[{type:l||"button",disabled:n},f];var d=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==c||c(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:n?void 0:s,href:r,target:"a"===t?o:void 0,"aria-disabled":n||void 0,rel:"a"===t?a:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},f]}var N=r.forwardRef((function(e,t){var n=e.as,r=e.disabled,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,y),a=O(Object.assign({tagName:n,disabled:r},o)),i=(0,l.Z)(a,2),c=i[0],u=i[1].tagName;return(0,x.jsx)(u,Object.assign({},o,c,{ref:t}))}));N.displayName="Button";var w=["onKeyDown"];var k=r.forwardRef((function(e,t){var n,r=e.onKeyDown,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,w),a=O(Object.assign({tagName:"a"},o)),i=(0,l.Z)(a,1)[0],c=p((function(e){i.onKeyDown(e),null==r||r(e)}));return(n=o.href)&&"#"!==n.trim()&&"button"!==o.role?(0,x.jsx)("a",Object.assign({ref:t},o,{onKeyDown:r})):(0,x.jsx)("a",Object.assign({ref:t},o,i,{onKeyDown:c}))}));k.displayName="Anchor";var C=k,j=n(5900),S=n.n(j);function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}var P=n(3366);n(1143);function T(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function R(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function M(e,t){return Object.keys(t).reduce((function(n,o){var a,i=n,c=i[T(o)],u=i[o],s=(0,P.Z)(i,[T(o),o].map(R)),l=t[o],f=function(e,t,n){var o=(0,r.useRef)(void 0!==e),a=(0,r.useState)(t),i=a[0],c=a[1],u=void 0!==e,s=o.current;return o.current=u,!u&&s&&i!==t&&c(t),[u?e:i,(0,r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(u,c,e[l]),d=f[0],p=f[1];return D({},s,((a={})[o]=d,a[l]=p,a))}),e)}n(9712);var I=(0,n(8870).Z)("carousel-caption"),L=n(9541),Z=["as","bsPrefix","className"];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=r.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,o=e.bsPrefix,a=e.className,i=(0,f.Z)(e,Z),c=S()(a,(0,L.vE)(o,"carousel-item"));return(0,x.jsx)(r,K(K({ref:t},i),{},{className:c}))}));A.displayName="CarouselItem";var X=A;function U(e,t){var n=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?t(e,n++):e}))}function V(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var F=/([A-Z])/g;var W=/^ms-/;function q(e){return function(e){return e.replace(F,"-$1").toLowerCase()}(e).replace(W,"-ms-")}var z=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var G=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(q(t))||function(e,t){return V(e).getComputedStyle(e,t)}(e).getPropertyValue(q(t));Object.keys(t).forEach((function(o){var a=t[o];a||0===a?!function(e){return!(!e||!z.test(e))}(o)?n+=q(o)+": "+a+";":r+=o+"("+a+") ":e.style.removeProperty(q(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},H=!("undefined"==typeof window||!window.document||!window.document.createElement),B=!1,J=!1;try{var Y={get passive(){return B=!0},get once(){return J=B=!0}};H&&(window.addEventListener("test",Y,Y),window.removeEventListener("test",Y,!0))}catch(Re){}var $=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!J){var o=r.once,a=r.capture,i=n;!J&&o&&(i=n.__once||function e(r){this.removeEventListener(t,e,a),n.call(this,r)},n.__once=i),e.addEventListener(t,i,B?r:a)}e.addEventListener(t,n,r)};var Q=function(e,t,n,r){var o=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};var ee=function(e,t,n,r){return $(e,t,n,r),function(){Q(e,t,n,r)}};function te(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),a=ee(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),a()}}function ne(e,t,n,r){var o,a;null==n&&(o=G(e,"transitionDuration")||"",a=-1===o.indexOf("ms")?1e3:1,n=parseFloat(o)*a||0);var i=te(e,n,r),c=ee(e,"transitionend",t);return function(){i(),c()}}function re(e,t){var n=G(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function oe(e,t){var n=re(e,"transitionDuration"),r=re(e,"transitionDelay"),o=ne(e,(function(n){n.target===e&&(o(),t(n))}),n+r)}var ae=n(1721),ie=n(3935),ce=!1,ue=r.createContext(null),se="unmounted",le="exited",fe="entering",de="entered",pe="exiting",me=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o=le,r.appearStatus=fe):o=de:o=t.unmountOnExit||t.mountOnEnter?se:le,r.state={status:o},r.nextCallback=null,r}(0,ae.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===se?{status:le}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==fe&&n!==de&&(t=fe):n!==fe&&n!==de||(t=pe)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===fe){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:ie.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===le&&this.setState({status:se})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[ie.findDOMNode(this),r],a=o[0],i=o[1],c=this.getTimeouts(),u=r?c.appear:c.enter;!e&&!n||ce?this.safeSetState({status:de},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,i),this.safeSetState({status:fe},(function(){t.props.onEntering(a,i),t.onTransitionEnd(u,(function(){t.safeSetState({status:de},(function(){t.props.onEntered(a,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:ie.findDOMNode(this);t&&!ce?(this.props.onExit(r),this.safeSetState({status:pe},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:le},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:le},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:ie.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=o[0],i=o[1];this.props.addEndListener(a,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===se)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,P.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(ue.Provider,{value:null},"function"==typeof n?n(e,o):r.cloneElement(r.Children.only(n),o))},t}(r.Component);function ve(){}me.contextType=ue,me.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ve,onEntering:ve,onEntered:ve,onExit:ve,onExiting:ve,onExited:ve},me.UNMOUNTED=se,me.EXITED=le,me.ENTERING=fe,me.ENTERED=de,me.EXITING=pe;var he=me,be=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var Ee=function(e,t){return(0,r.useMemo)((function(){return function(e,t){var n=be(e),r=be(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};var ge=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"];function xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Oe=r.forwardRef((function(e,t){var n=e.onEnter,o=e.onEntering,a=e.onEntered,i=e.onExit,c=e.onExiting,u=e.onExited,s=e.addEndListener,l=e.children,d=e.childRef,p=(0,f.Z)(e,ge),m=(0,r.useRef)(null),v=Ee(m,d),h=function(e){var t;v((t=e)&&"setState"in t?ie.findDOMNode(t):null!=t?t:null)},b=function(e){return function(t){e&&m.current&&e(m.current,t)}},E=(0,r.useCallback)(b(n),[n]),g=(0,r.useCallback)(b(o),[o]),y=(0,r.useCallback)(b(a),[a]),O=(0,r.useCallback)(b(i),[i]),N=(0,r.useCallback)(b(c),[c]),w=(0,r.useCallback)(b(u),[u]),k=(0,r.useCallback)(b(s),[s]);return(0,x.jsx)(he,ye(ye({ref:t},p),{},{onEnter:E,onEntered:y,onEntering:g,onExit:O,onExited:w,onExiting:N,addEndListener:k,nodeRef:m,children:"function"==typeof l?function(e,t){return l(e,ye(ye({},t),{},{ref:h}))}:r.cloneElement(l,{ref:h})}))})),Ne=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ce={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,x.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,x.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var je=r.forwardRef((function(e,t){var n=M(e,{activeIndex:"onSelect"}),o=n.as,a=void 0===o?"div":o,i=n.bsPrefix,c=n.slide,u=n.fade,s=n.controls,v=n.indicators,h=n.indicatorLabels,b=n.activeIndex,g=n.onSelect,y=n.onSlide,O=n.onSlid,N=n.interval,w=n.keyboard,k=n.onKeyDown,j=n.pause,D=n.onMouseOver,P=n.onMouseOut,T=n.wrap,R=n.touch,I=n.onTouchStart,Z=n.onTouchMove,_=n.onTouchEnd,K=n.prevIcon,A=n.prevLabel,X=n.nextIcon,V=n.nextLabel,F=n.variant,W=n.className,q=n.children,z=(0,f.Z)(n,Ne),G=(0,L.vE)(i,"carousel"),H=(0,L.SC)(),B=(0,r.useRef)(null),J=(0,r.useState)("next"),Y=(0,l.Z)(J,2),$=Y[0],Q=Y[1],ee=(0,r.useState)(!1),te=(0,l.Z)(ee,2),ne=te[0],re=te[1],ae=(0,r.useState)(!1),ie=(0,l.Z)(ae,2),ce=ie[0],ue=ie[1],se=(0,r.useState)(b||0),le=(0,l.Z)(se,2),fe=le[0],de=le[1];(0,r.useEffect)((function(){ce||b===fe||(B.current?Q(B.current):Q((b||0)>fe?"next":"prev"),c&&ue(!0),de(b||0))}),[b,ce,fe,c]),(0,r.useEffect)((function(){B.current&&(B.current=null)}));var pe,me=0;!function(e,t){var n=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&t(e,n++)}))}(q,(function(e,t){++me,t===b&&(pe=e.props.interval)}));var ve=d(pe),he=(0,r.useCallback)((function(e){if(!ce){var t=fe-1;if(t<0){if(!T)return;t=me-1}B.current="prev",null==g||g(t,e)}}),[ce,fe,g,T,me]),be=p((function(e){if(!ce){var t=fe+1;if(t>=me){if(!T)return;t=0}B.current="next",null==g||g(t,e)}})),Ee=(0,r.useRef)();(0,r.useImperativeHandle)(t,(function(){return{element:Ee.current,prev:he,next:be}}));var ge=p((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(Ee.current)&&(H?he():be())})),xe="next"===$?"start":"end";m((function(){c||(null==y||y(fe,xe),null==O||O(fe,xe))}),[fe]);var ye="".concat(G,"-item-").concat($),we="".concat(G,"-item-").concat(xe),Ce=(0,r.useCallback)((function(e){!function(e){e.offsetHeight}(e),null==y||y(fe,xe)}),[y,fe,xe]),je=(0,r.useCallback)((function(){ue(!1),null==O||O(fe,xe)}),[O,fe,xe]),Se=(0,r.useCallback)((function(e){if(w&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(H?be(e):he(e));case"ArrowRight":return e.preventDefault(),void(H?he(e):be(e))}null==k||k(e)}),[w,k,he,be,H]),De=(0,r.useCallback)((function(e){"hover"===j&&re(!0),null==D||D(e)}),[j,D]),Pe=(0,r.useCallback)((function(e){re(!1),null==P||P(e)}),[P]),Te=(0,r.useRef)(0),Re=(0,r.useRef)(0),Me=E(),Ie=(0,r.useCallback)((function(e){Te.current=e.touches[0].clientX,Re.current=0,"hover"===j&&re(!0),null==I||I(e)}),[j,I]),Le=(0,r.useCallback)((function(e){e.touches&&e.touches.length>1?Re.current=0:Re.current=e.touches[0].clientX-Te.current,null==Z||Z(e)}),[Z]),Ze=(0,r.useCallback)((function(e){if(R){var t=Re.current;Math.abs(t)>40&&(t>0?he(e):be(e))}"hover"===j&&Me.set((function(){re(!1)}),N||void 0),null==_||_(e)}),[R,j,he,be,Me,N,_]),_e=null!=N&&!ne&&!ce,Ke=(0,r.useRef)();(0,r.useEffect)((function(){var e,t;if(_e){var n=H?he:be;return Ke.current=window.setInterval(document.visibilityState?ge:n,null!=(e=null!=(t=ve.current)?t:N)?e:void 0),function(){null!==Ke.current&&clearInterval(Ke.current)}}}),[_e,he,be,ve,N,ge,H]);var Ae=(0,r.useMemo)((function(){return v&&Array.from({length:me},(function(e,t){return function(e){null==g||g(t,e)}}))}),[v,me,g]);return(0,x.jsxs)(a,ke(ke({ref:Ee},z),{},{onKeyDown:Se,onMouseOver:De,onMouseOut:Pe,onTouchStart:Ie,onTouchMove:Le,onTouchEnd:Ze,className:S()(W,G,c&&"slide",u&&"".concat(G,"-fade"),F&&"".concat(G,"-").concat(F)),children:[v&&(0,x.jsx)("div",{className:"".concat(G,"-indicators"),children:U(q,(function(e,t){return(0,x.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=h&&h.length?h[t]:"Slide ".concat(t+1),className:t===fe?"active":void 0,onClick:Ae?Ae[t]:void 0,"aria-current":t===fe},t)}))}),(0,x.jsx)("div",{className:"".concat(G,"-inner"),children:U(q,(function(e,t){var n=t===fe;return c?(0,x.jsx)(Oe,{in:n,onEnter:n?Ce:void 0,onEntered:n?je:void 0,addEndListener:oe,children:function(t,o){return r.cloneElement(e,ke(ke({},o),{},{className:S()(e.props.className,n&&"entered"!==t&&ye,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&we)}))}}):r.cloneElement(e,{className:S()(e.props.className,n&&"active")})}))}),s&&(0,x.jsxs)(x.Fragment,{children:[(T||0!==b)&&(0,x.jsxs)(C,{className:"".concat(G,"-control-prev"),onClick:he,children:[K,A&&(0,x.jsx)("span",{className:"visually-hidden",children:A})]}),(T||b!==me-1)&&(0,x.jsxs)(C,{className:"".concat(G,"-control-next"),onClick:be,children:[X,V&&(0,x.jsx)("span",{className:"visually-hidden",children:V})]})]})]}))}));je.displayName="Carousel",je.defaultProps=Ce;var Se=Object.assign(je,{Caption:I,Item:X}),De=n(3639),Pe=0,Te=function(e){var t=e.data.dataJson,n=t.description,a=t.images,i=t.price,s=t.title,l=a.length,f=(0,r.useRef)(null),d=(0,r.useState)(a[Pe]),p=d[0],m=d[1],v=(0,r.useState)(0),h=v[0],b=v[1],E=(0,r.useState)(!1),g=E[0],x=E[1],y=(0,r.useRef)(null),O=0,N=0;function w(){x(!g)}function k(e){b("number"==typeof e?e:Number(e.target.dataset.imgIndex))}function C(){f.current.style.display="block"}function j(){f.current.style.display="none"}function S(){--Pe<0&&(Pe=l-1),m(a[Pe]),b(Pe)}function D(){++Pe>l-1&&(Pe=0),m(a[Pe]),b(Pe)}return r.createElement(u.Z,null,r.createElement(c,null),r.createElement(De.Z,{style:{marginTop:"60px"}},r.createElement(o.rU,{to:"/"},"Home"),r.createElement("h1",{className:"mt-3"},s," - ",i),r.createElement(Se,{slide:!1,interval:null,indicators:!1,controls:g,ref:y,activeIndex:h,onSelect:k,onMouseEnter:w,onMouseLeave:w,className:"listing-module--carousel--9-+gq mb-2"},a.map((function(e,t){return r.createElement(Se.Item,{key:"image"+t},r.createElement("img",{src:(0,o.dq)(e.src),alt:e.alt,className:"d-block w-100",style:{objectFit:"contain",objectPosition:"top",cursor:"zoom-in"},onClick:C}),r.createElement(Se.Caption,{className:"position-absolute top-0 pt-1",style:{cursor:"zoom-in"},onClick:C},r.createElement("p",{style:{visibility:g?"visible":"hidden"}},"Image ",t+1," of ",l)))}))),r.createElement(De.Z,{fluid:"true",id:"listing-module--thumbnailContainer--BGR9m"},a.map((function(e,t){return r.createElement("button",{className:"listing-module--thumbnailWrapper--wJ7GW",onClick:k,onMouseEnter:k,"data-img-index":t,key:"image"+t},r.createElement("img",{src:(0,o.dq)(e.src),alt:e.alt,className:"listing-module--thumbnail--Jze0p","data-img-index":t}))}))),r.createElement("p",{className:"pt-2 fs-5"},n)),r.createElement("div",{className:"listing-module--container--1y99y"},r.createElement("div",{id:"listing-module--imgModalContainer--lt57h",ref:f},r.createElement("div",{className:"listing-module--modalContent--cK6y7"},r.createElement("span",{className:"listing-module--closeModal--vCwAz",onClick:j,onKeyDown:j,role:"button",tabIndex:0},"×"),r.createElement("div",{className:"listing-module--imgNumber--wglLV"},"Image ",h+1," of ",l),r.createElement("img",{className:"listing-module--modalImg--lnriR",src:(0,o.dq)(p.src),alt:p.alt,onTouchStart:function(e){O=e.changedTouches[0].screenX},onTouchEnd:function(e){N=e.changedTouches[0].screenX,function(){N<O&&Math.abs(N-O)>20&&D();N>O&&Math.abs(N-O)>20&&S()}()}}),r.createElement("button",{className:"listing-module--previousImg--BCWg8",onClick:S},"❮"),r.createElement("button",{className:"listing-module--nextImage--RLStx",onClick:D},"❯")))))}}}]);
//# sourceMappingURL=component---src-templates-listing-js-cba577b94188f01c81e5.js.map