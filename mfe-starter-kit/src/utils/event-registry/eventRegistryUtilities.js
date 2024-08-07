import eventRegistry from "./eventRegistry";

/**
* @module eventRegistry/eventRegistryUtilities 
* @author Rozario Chivers
* @Copyright 2024 Rozario Chivers
/*

/**
 * Utility method to convert registry keys and values
 * from template strings into deduped event registry objects
 * @param {string} registryKeysTmpl - CRLF delimeted event names
 * @return {undefined} - no return value defined
 */
let getRegistryKeys = (eventNames) => {
  // convert template string to an array
  // remove line feeds and empty strings
  let registry = {};
  let registryList = eventNames.split("\n").filter(function (str) {
    return str !== "";
  });

  registryList.map(function (item) {
    // convert template string keys into
    // camelCase event object key and hyphen delimeted value
    // remove tabs, spaces and CRLF
    registry[convertKeyToConstantSyntax(item)] = item.trim(); // populate registry objects // value

    return item;
  });

  return registry;
};

/**
 * Utility method to event value into event key constants
 * using capitalised and underscore delimeted syntax
 * @param {string} objValue - dash delimeted event name
 * @return {string} objValue - constant formatted string
 */
let convertKeyToConstantSyntax = (objValue) => {
  return objValue
    .trim()
    .toUpperCase()
    .replace(/\./g, "_") // key
    .replace(/\//g, "_"); // key
};

/**
 * Utility method to retrieve event name from registry
 * @param {string} eventLabel - camelcase event name
 * @return {string} - dot delimeted event name
 */
let getEventName = (eventLabel) => {
  return getRegistryKeys(eventRegistry)[eventLabel];
};

/**
 * Utility method to validate if any entry is in the registry
 * @param {eventKeyOrName} can be an event key or event name
 * @return {boolean} - true if a key or name is found
 */
let registryContains = (eventKeyOrName) => {
  return !!eventRegistry.match(eventKeyOrName);
};

/**
 * Utility method to retrieve event keys from event registry
 * @param {eventRegistry} template literal string of 'flattened' dot delimeted event names
 * @return {object} - converted registry keys
 */
export default getRegistryKeys(eventRegistry);