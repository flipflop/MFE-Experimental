	                                                           
              ************              
          ********************          
       **************************       
     ******************************     
    *****                    *******    
   *****                    *********   
  ******  **********      ************  
 ****** **********       ************** 
*****************       ****************
***************       ******************
**************       *******************
*************       ********************
***********       **********************
**********       ***********************
 ********      ***************** ****** 
  *****       ****************  ******  
   ***              *******    ******   
                              ******    
     ******************************     
       **************************       
          ********************          
              ************                
 ________  ________  ________  ________   
|\_____  \|\   __  \|\   __  \|\   __  \  
 \|___/  /\ \  \|\  \ \  \|\  \ \  \|\  \ 
     /  / /\ \   __  \ \   ____\ \   ____\
    /  /_/__\ \  \ \  \ \  \___|\ \  \___|
   |\________\ \__\ \__\ \__\    \ \__\   
    \|_______|\|__|\|__|\|__|     \|__|  

# Welcome to the Zurich Micro Frontend Platform

This project was bootstrapped with:



## Goals



## Getting Started

### `npm run server`

Runs the app via Python http server.<br>
Open [http://localhost:3001](http://localhost:8000) to view it in the browser.

You application will be hosted alongside many other applications within the same runtime environment. To ensure consistency, stability and performance a number of considerations are required to ensure applications do not interfere with each other.

Before getting started you will need to consider:

- ```USE:``` __CSS Modules__ or __Styled Components__ (e.g. Material UI). To avoid global CSS styling the Main Portal. Note: standalone CSS files will create global styles.
- ```USE:``` __routePrefix__ (from the Main Portal initial props - covered in repo in routes.js). Required to mitigate Route collision of Portlet URLs.
- ```USE:``` the Max __ScopedStorage__ library instead of localStorage or sessionStorage directly to mitigate key collision.

```Note:``` If you are using Material UI Components for Micro Frontend Applications, please ensure your CSS is prefixed using the following in your App.js:

```
const generateClassName = createGenerateClassName({
  productionPrefix: PortletManifest.PORTLET_MANIFEST.id,
  disabledGlobal: true
})
```


### Portlet Registry

Individal Apps will have to be registered with the main portal by submitting a Pull Request to the [Macro-Portal-Admin-Dashboard](https://stash.internal.macquarie.com/projects/INFRA/repos/macro-portal-admin-dashboard/browse) project to this specific file:

For convenience a CLI tool is provided in this project to make Portlet Manifest Creation simpler prior to PRs being submitted to the main Macro Portal repository.

In your CLI run:

```
node dev/CreateManifest/create-manifest.js
```
This script will ask a series of questions in regard to the application meta data you would like to make available within the portal. Once complete it will generate a portlet-manifest.js in the same directory, which can be used when updating the loadModules file in the main Macro Portal repository.  

Currently this is an MVP solution, which is planned to become a standalone Portlet Registry Service with Arturo integration in later phases.

Please ensure the Portlet ids are unique.

### Configuration

- src/portlet-manifest.js (Portlet configuration)
	
```
export default {
    "PORTLET_MANIFEST": {
        "id"                : "<organisation>--<team name>--<application name>"
    }
}
```
The Micro Frontend manifest id is used to provide a centralised reference which is used when registering each application within the Main Host's Application Registry.

### Images

Images will be Base64 encoded by the Main Portal to mitigate file path resolution issues.
In order to support this feature, please load images using an ES6 import, for example:

```
import companyLogo from './logo.png';
```

You can reference this image in your JSX as follows:

```
<img src={companyLogo} alt="" />
```

As an alternative, if manual base64 images are required for your project, a base64 image reference utility is also provided. This can contain a list of base64 encoded strings converted online using an [image to base64 conversion tool](https://www.base64-image.de/) and added to the utility file in:

```
src/utils/base-64-images.js
```

### Routes

To avoid route collision within Micro Frontend applications routes are prefixed with a hash of the application id (from the Portlet Manifest) using a utility from:

```
src/utils/tiny-id.js
```
On initialisation of child applications by the Micro Frontend framework, props are passed contain Application prefixes and other meta data.

The ```appPrefix``` property is stubbed within the starter kit project and made available via initial props and React Context e.g.

```
usePageContext.appPrefix
```

Example usage can be found in:

```
src/App.js
src/routes.js
```

### Event Bus

An event bus is used by the Micro Frontend framework which also has support for PostMessage API for iframes.

An event registry is used to track all event names with a standard Pub/Sub interface for event handling.

### Event Registry

A default event registry of event names are provided in the event bus. Events can not be published or subscribed to without a relevant key in the event registry.

Additional registry 'event name' files can be provided with each React Component independently via Carrigage Return delimeted event name 'keys' within a template literal string. 

It is recommended that event names are namespaced and delimeted to ensure uniqueness.

For example:

```
const headerEventNames = `
    retailapp.claim.open  
    retailapp.claim.active
    retailapp.claim.closed
`;

export default headerEventNames;
```

## Learn More

