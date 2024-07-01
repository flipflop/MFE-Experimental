System.register([],(function(e){"use strict";return{execute:function(){function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n;if("function"!=typeof(n=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(a(n)));return function(){var e=n(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(a(e)));return e}}e("default",(function(t){if("object"!==o(t))throw new Error("single-spa-react requires a configuration object");var r,a=n(n({},i),t);if(!a.React)throw new Error("single-spa-react must be passed opts.React");if(!a.ReactDOM&&!a.ReactDOMClient)throw new Error("single-spa-react must be passed opts.ReactDOM or opts.ReactDOMClient");a.renderType||(null!==(r=a.ReactDOMClient)&&void 0!==r&&r.createRoot?a.renderType="createRoot":a.renderType="render");if(!a.rootComponent&&!a.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(a.errorBoundary&&"function"!=typeof a.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!u&&a.React.createContext&&e("SingleSpaContext",u=a.React.createContext());a.SingleSpaRoot=function(e){function t(e){t.displayName="SingleSpaRoot(".concat(e.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},t.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},t.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},t}(a);var c={bootstrap:s.bind(null,a),mount:p.bind(null,a),unmount:l.bind(null,a)};a.parcelCanUpdate&&(c.update=m.bind(null,a));return c}));var u=e("SingleSpaContext",null);try{e("SingleSpaContext",u=require("react").createContext())}catch(e){}var i={React:null,ReactDOM:null,ReactDOMClient:null,rootComponent:null,loadRootComponent:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{},unmountResolves:{}};function s(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function p(e,t){return new Promise((function(n,o){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||e.errorBoundaryClass||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var r=y(e,t,(function(){n(this)})),a=c(e,t)(),u=function(e){var t=e.reactDom,n=e.renderType,o=e.elementToRender,r=e.domElement,a=t[n];if("function"!=typeof a)throw new Error('renderType "'.concat(n,'" did not return a function.'));switch(n){case"createRoot":case"unstable_createRoot":case"createBlockingRoot":case"unstable_createBlockingRoot":var c=a(r);return c.render(o),c;case"hydrateRoot":return a(r,o);case"hydrate":default:return a(o,r),null}}({elementToRender:r,domElement:a,reactDom:d(e),renderType:f(e)});e.domElements[t.name]=a,e.renderResults[t.name]=u}))}function l(e,t){return new Promise((function(n){e.unmountResolves[t.name]=n;var o=e.renderResults[t.name];o&&o.unmount?o.unmount():d(e).unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function m(e,t){return new Promise((function(n){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(n);var o=y(e,t,null),r=e.renderResults[t.name];if(r&&r.render)r.render(o);else{var a=c(e,t)();d(e).render(o,a)}}))}function d(e){return e.ReactDOMClient||e.ReactDOM}function f(e){return"function"==typeof e.renderType?e.renderType():e.renderType}function y(e,t,o){var r=e.React.createElement(e.rootComponent,t),a=u?e.React.createElement(u.Provider,{value:t},r):r;return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function n(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},n.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return n.prototype=Object.create(e.React.Component.prototype),n.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},n.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},n}(e,t),a=e.React.createElement(e.errorBoundaryClass,t,a)),a=e.React.createElement(e.SingleSpaRoot,n(n({},t),{},{mountFinished:o,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){e.unmountResolves[t.name]&&(e.unmountResolves[t.name](),delete e.unmountResolves[t.name])}}),a)}}}}));
//# sourceMappingURL=single-spa-react.js.map
