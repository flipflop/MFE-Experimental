/*
 * Default event names
 * delimeted by feature or component and action
 * namespaced by '< owner or component > / < action or operation >'
 *
 * Individual components should manage their own event name files
 * within component folders
 */

const defaultEventNames = `
  system/application-error
  system/micro-frontend-error
  system/error
  system/404
  system/service-unavailable
  system/connection-timeout-error
  system/unauthorized
  system/access-denied
  system/offline
  system/online
`;

export default defaultEventNames;