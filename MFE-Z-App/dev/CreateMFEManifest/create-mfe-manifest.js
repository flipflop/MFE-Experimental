/**
* @module dev-tools/create-mfe-manifest Micro Frontend Manifest Configuration Creator
* @author Rozario Chivers
* @Copyright 2024 Rozario Chivers
* @return {object} - exports: "MICRO_FRONTEND_MANIFEST"
*/

// adapted from @jpillora/node-google-sheets/credentials-fill.js
// lightweight alternative to commander & enquirer
// const ssri = require('ssri');
let tinyId=(()=>{let t=null;function n(t,n){if("number"!=typeof n||n<=0||"number"!=typeof t&&"string"!=typeof t)return t;for(t+="";t.length<n;)t="0"+t;return t}function e(t){for(var n=0,e="string"==typeof t?t.length:0,r=0;r<e;)n=(n<<5)-n+t.charCodeAt(r++);return n<0?-1*n+4294967295:n}function r(r,o){var u=null;return void 0===r||"string"!=typeof r?(t?++t:t=0,u=r=new Date().getTime()+""+t):u=e(r),(o?"res:":"")+u.toString(32)+"-"+n((4*r.length).toString(16),3)}return{uniqueId:r}})();
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const question = async text =>
  new Promise((resolve, reject) => {
    rl.question(text, result =>
      result ? resolve(result) : resolve("")
    );
  });

async function fill() {

  console.log(`
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
`);

  console.info(`
  ✈️  Pre-flight check ✈️️ 

  Ensure you have the following ready:

  - Your Web Application Name
  - Your email contacts for support and feature requests

  `);
  
  const appId = await question("Please enter your application identifiee (namespaced by '<organisation-name><team-name><application-name>'): ");
  const appName = await question("Please enter your Web Application name here: ");
  const appDescription = await question("Please enter a description of your application and it's functionality: ");
  const appVersion = await question("Please enter your application version (using SemVer): ");
  const appTeam = await question("Please enter the name of your Agile team here: ");
  const appEntryScript = await question("Please enter the entry script path of your bundle.js (using a fully qualified URL path): ");
  const imagePath = question("Please enter the image path used by your application: ");
  const cssPath = question("Please enter the CSS path used by your application: ");
  const appEntryIframe = await question("Please enter the entry URL of your iframe application (using a fully qualified URL path): ");
  const appEmailContacts = await question("Please enter your contact email addresses for support, questions, feedback and suggestions: ");
  const appEnvironment = await question("Please identify environment: (e.g. 'production', 'staging' or 'development') ");
  const appRootRenderNode = await question("Please specific the root html node id: ");

  // create Manifest from questions
  const mappedResponses = {
    "id" : appId,
    "app_prefix" : tinyId.uniqueId(appId),
    "name" : appName,
    "description" : appDescription,
    "version" : appVersion,
    "team": appTeam,
    "entry_script" : appEntryScript,
    "image_path": imagePath,
    "css_path": cssPath,
    "entry_iframe" : appEntryIframe,
    "email_contacts" : appEmailContacts, 
    "environment" : appEnvironment,
    "rootRenderNode": appRootRenderNode, 
    "ssri" : "@todo",
    "resource" : "@todo",
    "region" : "@todo"
  };
  
  const jsonHeader = `const MICRO_FRONTEND_MANIFEST = `;
  const manifestStr = JSON.stringify(mappedResponses, true, 2);
  const jsonFooter = `\nexport default MICRO_FRONTEND_MANIFEST;`;
  let jsonTemplate = jsonHeader + manifestStr + jsonFooter;

  console.log(`Your 'micro-frontend-manifest' has been created with the following details: ${jsonTemplate}`);
  fs.writeFileSync("./micro-frontend-manifest.js", jsonTemplate);
}

fill().then(
  () => {
    console.log("Complete!");
    rl.close();
  },
  err => {
    console.error("ERR", err);
    rl.close();
  }
);