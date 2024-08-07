/**
* @module event-bus/event-bus Global Custom Events
* @author Rozario Chivers
* @Copyright 2018 Rozario Chivers
* @return {object} - exports:
    registryContains,
    combineRegistry,
    addEventsToRegistry,
    getSubscribers,
    getRegistry,
    getEventName,
    publish,
    emit,
    trigger,
    subscribe,
    sub,
    on,
    unSubscribe,
    unsub,
    off,
    unSubscribeAll
*/
const eventBus = ((win, doc) => {

  const defaultEventNames = `
    macro-portal/system/generic-error
    macro-portal/system/error
    macro-portal/system/404
    macro-portal/system/service-unavailable
    macro-portal/system/unauthorized
    macro-portal/system/access-denied
    macro-portal/system/offline
    macro-portal/system/online
    macro-portal/system/module-load-intent
    macro-portal/layout-rendered
    macro-portal/system/module-load-failure
    macro-portal/portlet/resize
    macro-portal/iframe/async-event
    macro-portal/iframe/init
    macro-portal/async-event
  `;

  let registry = {}; // registry object for event name validation
  let subscribers = []; // track all subscriptions

  var getCallBackByEventName = (eventName) => {

    var matchedSubscribers = null;
    var functionCollection = [];

    try {
      matchedSubscribers = subscribers.filter(subscriber => (subscriber.eventName === eventName))
      matchedSubscribers.map(function(subscriber){
        functionCollection.push(subscriber.callBack);
        return subscriber;
      });
      
      return functionCollection;

      // return subscribers.filter(subscriber => (subscriber.eventName === eventName))[0].callBack;
    }
    catch(e) {
      return function() {};
    }
  }

  var publishToIframes = (eventName, detailsEvent) => {
    // detect if page is running in an iframe
    if ( window.location !== window.parent.location ) {
      // iframe page
      window.parent.postMessage(`{
        "detail": {
          "source" : "iframe",
          "eventName": "${eventName}",
          "timeStamp": "${detailsEvent.timeStamp}",
          "payload" : ${JSON.stringify(detailsEvent)}
        }
      }`);    
    } else {
      // not an iframe
      // publish to all available iframes DOM
      document.querySelectorAll('.macro-portal--iframe').forEach(function(elem) {
        elem.contentWindow.postMessage(`{
          "detail": {
            "source" : "iframe",
            "eventName": "${eventName}",
            "timeStamp": "${detailsEvent.timeStamp}",
            "payload" : ${JSON.stringify(detailsEvent)}
          }
        }`);
      });
    }
  }

  var forwardEventsFromIframes = () => {
    // iframe page
    window.addEventListener('message', function(e) {
      var data = null;
     
      // only convert to JSON if a macro-portal payload
      // avoid dev tools iframe events
      
      if (e.data.toString().match('macro-portal')) {

        data = JSON.parse(e.data).detail.payload;

        // lookup subsribers by eventName and invoke callBack with event data parameter
        if (data.hasOwnProperty('detail')) {
          if (data.detail.hasOwnProperty('payload')) {
            // loop through avaiable function callBacks
            getCallBackByEventName(data.detail.eventName)
              .map(function(callBack) {
                // console.log('CALLBACK ', callBack);
                callBack(data);
                return callBack;
              });
          }
        }
      }
    }); // window.addEventListener
  }

  /**
   * Event publish
   * @param {string} eventName - dash and slah delimeted event name
   * @param {object} eventObj - configuration object with optional details
   * @return {undefined} - no return value defined
   * @throws an error if no event registry name/key is found
   */
  let publish = (eventName, eventObj = {}) => {

    if (registryContains(eventName)) {

      let timeStamp = new Date().toLocaleString();
      // let eventDetail = eventObj.detail;
      let syntheticEvent = new CustomEvent(eventName,{
        bubbles: true, // bubbling to allow an event from a child element, to support an ancestor catching it (optionally, with data)
        detail: { 
          eventName, 
          eventSource : 'PORTAL',
          timeStamp, 
          payload : eventObj 
        }
      });

      // publish global event
      window.dispatchEvent(syntheticEvent);
  
      publishToIframes(eventName, { 
        detail : { 
            eventName, 
            eventSource : 'IFRAME',
            timeStamp, 
            payload : eventObj 
          } 
        }
      );
    } else {
      throw new Error('globalCustomEvents: event name not found in registry');
    }

  }

  /**
   * Event subscription
   * @param {string} eventName - dash and slah delimeted event name
   * @param {function} callBack - callback invoked when event is published
   * @return {undefined} - no return value defined
   * @throws an error if no event registry name/key is found
   */
  let subscribe = (eventName, callBack) => {

    if (registryContains(eventName)) {

      subscribers.push({
        eventName,
        callBack
      });
      window.addEventListener(eventName, callBack);

    } else {
      throw new Error('globalCustomEvents: event name not found in registry');
    }

  }

  /**
   * Event unSubscribe removes event listener
   * @param {string} eventName - dash and slash delimeted event name
   * @return {undefined} - no return value defined
   * @throws an error if no event registry name/key is found
   */
  let unSubscribe = (eventName) => {
    if (registryContains(eventName)) {
      // clone subscribers array
      let subscribersClone = subscribers.slice();
      // preserve all events apart from unsubscribed event
      let otherSubscribers = subscribers.filter(
            item => item.eventName !== eventName
          );

      subscribersClone.forEach((item, index) => {
        if (item.eventName === eventName) {
          // remove event listeners and callbacks
          window.removeEventListener(item.eventName, item.callBack);
          // update subscribers list
          subscribers = otherSubscribers;
        }
      });

    } else {
      throw new Error('globalCustomEvents: event name not found in registry');
    }

  }

  /**
   * Event unSubscribeAll removes all registered event listeners
   * and callbacks
   * empties list of subscribers
   * @return {undefined} - no return value defined
   */
  let unSubscribeAll = () => {

    subscribers.forEach((item) => {
        window.removeEventListener(item.eventName, item.callBack);
    });

    subscribers = [];
  }

  /**
   * Utility method to retrieve event name from registry
   * @param {string} eventLabel - camelcase event name
   * @return {string} - dash and slash delimeted event name
   */
  let getEventName = (eventLabel) => {

    return registry[eventLabel];
  }

  /**
   * Utility method to validate if any entry is in the registry
   * @param {eventKeyOrName} can be an event key or event name
   * @return {boolean} - true if a key or name is found
   */
  let registryContains = (eventKeyOrName) => {

    return !!JSON.stringify(registry).match(eventKeyOrName);
  }

  /**
   * Utility method to combine registry keys and values
   * from arguments into event registry
   * @param {...*} var_args
   * @return {undefined} - no return value defined
   */
  let combineRegistry = (...var_args) => {

    Object.assign(registry, ...var_args);
  }

  /**
   * Utility method to convert registry keys and values
   * from template strings into deduped event registry objects
   * @param {string} registryKeysTmpl - CRLF delimeted event names
   * @return {undefined} - no return value defined
   */
  let addEventsToRegistry = (eventNames) => {
    // convert template string to an array
    // remove line feeds and empty strings
    var registryList = eventNames
      .split('\n')
      .filter(function(str){ return str !== '' });

    registryList.map(function(item) {
      // convert template string keys into
      // camelCase event object key and hyphen delimeted value
      // remove tabs, spaces and CRLF
      registry[ // populate registry objects
        convertKeyToConstantSyntax(item)
      ] = item.trim(); // value

      return item;
    });
  }

  /**
   * Utility method to event value into event key constants
   * using capitalised and underscore delimeted syntax
   * @param {string} objValue - dash delimeted event name
   * @return {string} objValue - constant formatted string
   */
  let convertKeyToConstantSyntax = (objValue) => {
    return objValue.trim()
            .toUpperCase()
            .replace(/-/g, '_') // key
            .replace(/\//g, '_') // key
  }

  /**
   * List all current registered events
   * @return {object} - list of registered event names
   */
  let getRegistry = () => {

    return registry;
  }

  /**
   * List all current subsribers
   * @return {array} - JSON of evenName and callBack entries
   */
  let getSubscribers = () => {

    return subscribers;
  }

  // add default events into registry
  addEventsToRegistry(defaultEventNames);
  // listen for iframe PostMessage events
  forwardEventsFromIframes();
  
  return {
    registryContains,
    combineRegistry,
    addEventsToRegistry,
    getSubscribers,
    getRegistry,
    getEventName,
    publish,
    emit: publish,
    trigger: publish,
    subscribe,
    sub: subscribe,
    on: subscribe,
    unSubscribe,
    unsub: unSubscribe,
    off: unSubscribe,
    unSubscribeAll
  };

})(window, document); //globalCustomEvents

export default eventBus;