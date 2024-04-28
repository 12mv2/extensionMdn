{
"manifest_version": 3,
"name": "Minimal Manifest",
"version": "1.0.0",
"description": "A basic example extension with only required keys",
"icons": {
"48": "hello_extensions.png",
"128": "hello_extensions.png"
},

    "background": {
      "service_worker": "background.js"
    },

// "main_js": [
// {
// "matches": ["<all urls>"],
// "js": ["<main.js>"]
// }
// ],

    "permissions": [
        "history"
      ]

}

// hello world extension
// {
// "manifest_version": 3,
// "name": "Hello Extensions",
// "description": "Base Level Extension",
// "version": "1.0",
// "action": {
// "default_popup": "index.html",
// "default_icon": "hello_extensions.png"
// }
// }

/////////////////// version 2

{
"manifest_version": 3,
"name": "chrome extension MDN",
"version": "1.0.0",
"permissions": ["history"],
"description": "extension to display frequency of MDN searches",
"icons": {
"48": "hello_extensions.png",
"128": "hello_extensions.png"
},

"action": {
"default_popup": "index.html",
"default_icon": "hello_extensions.png"
},

"background": {
"service_worker": "script.js"
},

"content_security_policy": {
"extension_pages": "script-src 'self'; object-src 'self'"
}
}
