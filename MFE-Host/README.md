	                                                           
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

- React
- React Shadow
- PubSubJS
- ZDS
- SingleSpa

## Goals

- Demonstate the loading of JavaScript module from a remote URL
    - Via SingleSpa
    - Via Vanilla JS dynamic script loading
- Demonstrate the use of Shadow DOM to sandbox CSS
- Demonstrate route handling via Route Prefix
- Demonstate the mitigation of storage collision via Local and Session Storage wrapper class
- Demonstate the integration of SurveyJS, ZDS
- Demonstate a Micro Frontend Event Bus with iframe PostMessage support (for Salesforce, Guidewire and Mendix augmentation solutions)

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
  productionPrefix: APP_MANIFEST.id,
  disabledGlobal: true
})
```

### Images

Images can be Base64 encoded by the Main Portal to mitigate file path resolution issues.
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

Additional registry 'event name' files can be provided with each React Component independently.

It is recommended that event names are namespaced and delimeted to ensure uniqueness.

For example:

```
const appEventNames = [
    'retailapp.claim.open',  
    'retailapp.claim.active',
    'retailapp.claim.closed'
];

export default appEventNames;
```

## Getting Started

In MFE-Host use:

```yarn run server```

In mfe-starter-kit use:

```yarn run start```

In MFE-Z-App use:

```yarn run start```

Open the main Micro Frontend host on localhost:8000 to view examples of:

- Login from an iframe using PostMessage API events
- SurveyJS example Micro Frontend application
- ZDS example Micro Frontend using ShadowDOM

This project also contains a reference implmentation of a VanillaJS Micro Frontend Script Tag Loader.
