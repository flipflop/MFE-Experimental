import tinyId from '../TinyId/TinyId'

class ScopedStorage {
  constructor (PORTLET_PREFIX = 'micro-portal') { 
    // this is a general Micro Frontend prefix
    this.PREFIX = 'micro-frontend'
    // this default will be overwritten by the Portlet Manifest app name
    this.PORTLET_PREFIX = PORTLET_PREFIX
  }

  sessionStorageSetItem (key, value) {
    window.sessionStorage.setItem(`${this.PREFIX}-${tinyId.uniqueId(this.PORTLET_PREFIX)}_${key}`, value)
  }

  sessionStorageGetItem (key) {
    return window.sessionStorage.getItem(`${this.PREFIX}-${tinyId.uniqueId(this.PORTLET_PREFIX)}_${key}`)
  }

  localStorageSetItem (key, value) {
    window.localStorage.setItem(`${this.PREFIX}-${tinyId.uniqueId(this.PORTLET_PREFIX)}_${key}`, value)
  }

  localStorageGetItem (key) {
    return window.localStorage.getItem(`${this.PREFIX}-${tinyId.uniqueId(this.PORTLET_PREFIX)}_${key}`)
  }
}

export default ScopedStorage
