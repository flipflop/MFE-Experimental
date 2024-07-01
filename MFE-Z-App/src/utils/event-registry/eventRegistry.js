/*
 * Default event names
 * delimeted by feature or component and action
 * namespaced by '< owner or component > / < action or operation >'
 *
 * Individual components should manage their own event name files
 * within component folders
 */

const eventRegistry = `
    host.module.load.success
    host.module.load.failure
    system.application.error
    system.auth.authorized
    system.auth.unauthorized
    system.auth.denied
    system.network.offline
    system.network.online
`;

export default eventRegistry;