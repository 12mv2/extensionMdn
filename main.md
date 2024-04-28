// document.addEventListener("DOMContentLoaded", () => {
// const title = document.createElement("h1");
// title.innerText = "Online Chatroom";
// document.querySelector("body").appendChild(title);
// // make AJAX call here....
// // https://ohwuvawrw4.execute-api.us-west-2.amazonaws.com/messages
// fetch("https://ohwuvawrw4.execute-api.us-west-2.amazonaws.com/messages")
// .then((data) => data.json())
// .then((data) => {
// //console.log(data[0]);

// const messageWindow = document.createElement("div");
// document.body.appendChild(messageWindow);

// for (let i = 0; i < 10; i++) {
// const element = data[i];
// //console.log(element, "element line 17 main.js")
// const message = document.createElement("div");
// message.innerHTML = `MESSAGE: ${element.message}<br/> CREATED: ${element.created_at}<br/> BY: ${element.created_by}<br/> CHALLENGE: ${element.challenge}<br/><br/>`;
// message.id = `${element.created_at}`;
// message.className = "messages";
// console.log(message);
// messageWindow.appendChild(message);
// }
// });

// iterate over AJAX response to build out messageContainer, like in calendar
// });

// get/fetch data from chrome.history api using getVisited method // hardcode with mdn

// limit last number of searches in last hour/ms
// return number in string template literal

// console.log("main.js");

chrome.history.getVisits(
{
url: "https://developer.mozilla.org",
},
function (details) {
console.log("getVisited info:", details);
}
);
