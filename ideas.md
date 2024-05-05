console.log(chrome.history)

// // content script (script.js)
// chrome.runtime.sendMessage({action: "getVisitedInfo"}, function(response) {
//     console.log("Response from background script:", response);
//   });

// cant mute out json, so manifest necissitates no commenting

<!-- Manifest: 
self gives access / says all scripts in app are safe, so makes accessible 
unsafe inline makes inline scripts safe?-->
