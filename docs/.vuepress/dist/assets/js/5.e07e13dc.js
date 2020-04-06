(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{212:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"public-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-api"}},[t._v("#")]),t._v(" Public API")]),t._v(" "),a("p",[t._v("Cronhub Public API is a REST API that supports basic CRUD operations on top of Cronhub monitors. Our API uses HTTP response codes to indicate any API errors. All API responses are JSON objects.")]),t._v(" "),a("p",[t._v("If you have any ideas or suggestions about the API "),a("a",{attrs:{href:"https://github.com/cronhub-app/backlog/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("let us know on Github"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("We reserve the right to rate-limit any access key if we feel you're not using the api fairly.")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#authentication"}},[t._v("Authentication")])]),a("li",[a("a",{attrs:{href:"#api-endpoints"}},[t._v("API Endpoints")]),a("ul",[a("li",[a("a",{attrs:{href:"#list-all-monitors"}},[t._v("List all monitors")])]),a("li",[a("a",{attrs:{href:"#get-an-existing-monitor"}},[t._v("Get an existing monitor")])]),a("li",[a("a",{attrs:{href:"#create-a-new-monitor"}},[t._v("Create a new monitor")])]),a("li",[a("a",{attrs:{href:"#update-an-existing-monitor"}},[t._v("Update an existing monitor")])]),a("li",[a("a",{attrs:{href:"#delete-a-monitor"}},[t._v("Delete a monitor")])]),a("li",[a("a",{attrs:{href:"#pause-a-monitor"}},[t._v("Pause a monitor")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),a("p",[t._v("All API requests must be authenticated by the API key that Cronhub provides. When you "),a("a",{attrs:{href:"https://cronhub.io/register",target:"_blank",rel:"noopener noreferrer"}},[t._v("create a new Cronhub account"),a("OutboundLink")],1),t._v(' you will get an API key. You can find it on the "Settings" page of the site. Here is an example how it may look '),a("code",[t._v("ch_5b73b46baf0c00.55022502")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("You can authenticate your requests by sending the API key in your HTTP request header. The name of the header should be "),a("code",[t._v("X-Api-Key")]),t._v(" and the value should be your key.")])]),t._v(" "),a("h2",{attrs:{id:"api-endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-endpoints"}},[t._v("#")]),t._v(" API Endpoints")]),t._v(" "),a("h3",{attrs:{id:"list-all-monitors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-all-monitors"}},[t._v("#")]),t._v(" List all monitors")]),t._v(" "),a("p",[a("code",[t._v("GET https://cronhub.io/api/v1/monitors")]),t._v(" Get the list of all your existing monitors.")]),t._v(" "),a("p",[t._v("Example Request")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Api-Key: api-key"')]),t._v(" https://cronhub.io/api/v1/monitors\n")])])]),a("p",[t._v("Example Response")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"response"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Daily database backup"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cbe02bb0-9e72-11e8-ba9d-2bd49279e066"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schedule"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 0 * * *"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"grace_period"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timezone"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"up"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"last_ping"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-08-12T21:01:08+00:00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"running_time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"running_time_unit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"minutes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-08-21T21:00:51+00:00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Daily Cron Monitor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b5e5e820-9945-11e8-8dd4-23e5bbe40518"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schedule"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 0 * * *"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"grace_period"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timezone"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"up"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"last_ping"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-08-12T21:01:08+00:00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"running_time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"running_time_unit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"minutes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-08-21T21:00:51+00:00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"get-an-existing-monitor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-an-existing-monitor"}},[t._v("#")]),t._v(" Get an existing monitor")]),t._v(" "),a("p",[a("code",[t._v("GET https://cronhub.io/api/v1/monitors/<monitor-uuid>")]),t._v(" Get an existing monitor by its uuid.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("<monitor-uuid>")]),t._v(' is the unique id that identifies your monitor. You can find it if you go to the monitor\'s\n"How to Integrate" page.')])]),t._v(" "),a("p",[t._v("Example Request")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Api-Key: api-key"')]),t._v(" https://cronhub.io/api/v1/monitors/b531e120-a018-11e8-93de-5b0f21d9156d\n")])])]),a("p",[t._v("Example Response")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"response"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cronhub minutely monitor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b531e120-a018-11e8-93de-5b0f21d9156d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schedule"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"* * * * *"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"grace_period"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timezone"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"up"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"last_ping"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-08-12T21:01:08+00:00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"running_time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"running_time_unit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-08-21T21:00:51+00:00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"create-a-new-monitor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-monitor"}},[t._v("#")]),t._v(" Create a new monitor")]),t._v(" "),a("p",[t._v("Create a new monitor with the given arguments.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),t._v(" --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Api-Key: api-key"')]),t._v(" \\\n  -d name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cronhub monitor example'")]),t._v(" \\\n  -d schedule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'* * * * *'")]),t._v(" \\\n  -d grace_period"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 \\\n  -d timezone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("UTC \\\n  https://cronhub.io/api/v1/monitors\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Argument")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}})])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("name")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The name of the monitor you want to create")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("schedule")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The cron schedule (e.g. 0 0 * * *)")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("timezone")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Your server timezone (e.g. UTC)")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("grace_period")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Grace period by minutes. The value should be between 1 and 60.")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("running_time")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The running time threshold. The value should be an integer.")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Optional")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("running_time_unit")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The running time unit. The value should be any of the following time units: "),a("code",[t._v("seconds")]),t._v(", "),a("code",[t._v("minutes")]),t._v(", "),a("code",[t._v("hours")]),t._v(", "),a("code",[t._v("days")]),t._v(", "),a("code",[t._v("weeks")])]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required only if "),a("code",[t._v("running_time")]),t._v(" is present.")])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("By default we will set "),a("code",[t._v("E-mail")]),t._v(" as the only notification channel for your monitor. You can always change it on Cronhub.")])]),t._v(" "),a("p",[t._v("Example Request")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),t._v(" --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Api-Key: ch_5b67f0d9ee835"')]),t._v("   -d  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cronhub monitor example'")]),t._v("   -d  schedule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'* * * * *'")]),t._v("   -d grace_period"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1   -d timezone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UTC'")]),t._v(" https://cronhub.io/api/v1/monitors\n")])])]),a("p",[t._v("Example Response")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"response"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cronhub monitor example"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"24b70a00-9fef-11e8-aec8-258e1cb2dfaa"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schedule"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"* * * * *"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"grace_period"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timezone"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"running_time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"running_time_unit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-08-21T21:00:51+00:00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"update-an-existing-monitor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-an-existing-monitor"}},[t._v("#")]),t._v(" Update an existing monitor")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PUT"')]),t._v(" --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Api-Key: api-key"')]),t._v(" \\\n  -d name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Daily Email Report'")]),t._v(" \\\n  -d schedule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0 0 * * *'")]),t._v(" \\\n  -d grace_period"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("20 \\\n  -d timezone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("UTC \\\n  https://cronhub.io/api/v1/monitors/ff722460-a026-11e8-b4f1-f5e50b7346a6\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Argument")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}})])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("name")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The name of the monitor you want to create")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("schedule")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The cron schedule (e.g. 0 0 * * *)")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("timezone")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Your server timezone (e.g. UTC)")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("grace_period")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Grace period by minutes. The value should be between 1 and 60.")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("running_time")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The running time threshold. The value should be an integer.")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Optional")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("running_time_unit")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("The running time unit. The value should be any of the following time units: "),a("code",[t._v("seconds")]),t._v(", "),a("code",[t._v("minutes")]),t._v(", "),a("code",[t._v("hours")]),t._v(", "),a("code",[t._v("days")]),t._v(", "),a("code",[t._v("weeks")])]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required only if "),a("code",[t._v("running_time")]),t._v(" is present.")])])])]),t._v(" "),a("p",[t._v("Example Request")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PUT"')]),t._v(" --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Api-Key: ch_5b67f0d9ee835"')]),t._v("   -d name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Daily Email Report'")]),t._v("   -d schedule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0 0 * * *'")]),t._v("   -d grace_period"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("20   -d timezone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("UTC   https://cronhub.io/api/v1/monitors/ff722460-a026-11e8-b4f1-f5e50b7346a6\n")])])]),a("p",[t._v("Example Response")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"response"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Daily Email Report"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ff722460-a026-11e8-b4f1-f5e50b7346a6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schedule"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 0 * * *"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"grace_period"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timezone"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"new"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"running_time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"running_time_unit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-08-21T21:00:51+00:00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"delete-a-monitor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-a-monitor"}},[t._v("#")]),t._v(" Delete a monitor")]),t._v(" "),a("p",[a("code",[t._v("DELETE https://cronhub.io/api/v1/monitors/<monitor-uuid>")]),t._v(" Delete an existing monitor.")]),t._v(" "),a("p",[t._v("Example request")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DELETE"')]),t._v(" --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Api-Key: api-key"')]),t._v(" https://cronhub.io/api/v1/monitors/4aa80130-995a-11e8-b107-1992dc48b7c2\n")])])]),a("p",[t._v("Example response")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"response"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"pause-a-monitor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pause-a-monitor"}},[t._v("#")]),t._v(" Pause a monitor")]),t._v(" "),a("p",[a("code",[t._v("PUT https://cronhub.io/api/v1/monitors/<monitor-uuid>/pause")]),t._v(" Pause an existing monitor.")]),t._v(" "),a("p",[t._v("Example request")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PUT"')]),t._v(" --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Api-Key: api-key"')]),t._v(" https://cronhub.io/api/v1/monitors/b5e5e820-9945-11e8-8dd4-23e5bbe40518/pause\n")])])]),a("p",[t._v("Example response")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"response"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Daily Cron Monitor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b5e5e820-9945-11e8-8dd4-23e5bbe40518"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schedule"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 0 * * *"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timezone"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paused"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"last_ping"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-08-12T21:01:08+00:00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"running_time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"running_time_unit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"minutes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-08-21T21:00:51+00:00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=n.exports}}]);