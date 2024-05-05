console.log("background.js is loading");

chrome.history.getVisits(
  { url: "https://developer.mozilla.org" },
  function (details) {
    console.log("getVisited data returned", details);
  }
);


// have tried replacing /chrome/ with /browser/
// chrome.history.getVisits(
//   {
//   url: "https://developer.mozilla.org",
//   },
//   function (details) {
//   console.log("getVisited info:", details);
//   }
//   );

// // background script (background.js)
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.action === "getVisitedInfo") {
//       chrome.history.getVisits({url: "https://developer.mozilla.org"}, function (details) {
//         sendResponse(details);
//       });
//       // Return true to indicate that sendResponse will be called asynchronously
//       return true;
//     }
//   });
