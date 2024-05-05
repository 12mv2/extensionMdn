console.log('Hello from index.js file');

// returns an array
// objects in the array have the following 
/*


*/
const visits = chrome.history.getVisits(
  { url: "https://developer.mozilla.org" },
  function (details) {
    console.log("getVisited data returned", details);
  }
);

const title = document.getElementById('title');
title.innerHTML = 'Hello from index.js file';

// are interested in where the visit originated from
// where else the user when before..