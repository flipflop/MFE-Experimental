import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

singleSpa.registerApplication('app1', () => SystemJS.import('@portal/app1'), isActive.navbar)

singleSpa.start()
