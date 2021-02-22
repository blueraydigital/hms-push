# HMS Pushkit

## Table of Contents

 * [Installation](#installation)
 * [Configuration ](#configuration )
 * [Examples](#examples)
 * [License](#license)

## Installation

```bash
$ npm install --save @blueraydigital/hms-push
```

## Configuration 

Before using functions provided by packages in examples, you need to set parameters for initialization in config.js.


	
| Initialization Parameter | Description |
| ---- | ----- |
| AppId|App ID, which is obtained from app information. |
| AppSecret|Secret access key of an app, which is obtained from app information. |
| AuthUrl|URL for the Huawei OAuth 2.0 service to obtain a token, please refer to Generating an App-Level Access Token. |
| PushUrl|URL for accessing HUAWEI Push Kit, please refer to Sending Messages. |


| Request Parameter | Description |
| ---- | ----- |
| TargetTopic|Name of a topic to be subscribed to, unsubscribed from, or queried. |
| TargetCondition|Combination of condition expressions for a message. |
| TargetToken|Token of a destination device. |
| TargetTokenArray|Tokens of destination devices. |


## Examples
Call methods on object HmsNamespace: messaging and topic.

The following table lists methods in HmsNamespace.
| Method | Description |
| ---- | ---- |
| messaging | The entry of the Messaging object, and verify the initialization input parameters. |
| topic | The entry of the Topic object, and verify the initialization input parameters. |
---
The following table lists methods in Messaging.
| Method | Description |
| ---- | ---- |
| send | Verify if the token needs to be updated and call the method sendRequest. |
| sendRequest | Sends a message to a device. |
---
The following table lists methods in Topic.
| Method | Description |
| ---- | ---- |
| subScribeTopic | Subscribe to topic. |
| unSubScribeTopic | Unsubscribe topic. |
| queryTopicList | Query subject list. |

---

#### 1. Send data message.
```js 
const hms = require("@blueraydigital/hms-push").default;
const config = require("./config");

hms.init({
    appId: config.AppId,
    appSecret: config.AppSecret,
    authUrl: config.AuthUrl,
    pushUrl: config.PushUrl
});

let mc = hms.messaging().messaging;

let AndroidConfig = {
    collapse_key: -1,
    urgency: "HIGH",
    ttl: "10000s",
    bi_tag: "the_sample_bi_tag_for_receipt_service"
}
let message = {
    data: "test",
    android: AndroidConfig,
    token: config.AndroidTokenArray
            
};    
mc.send(message, false).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
```

#### 1. Send Test message.
```js 
const hcm = require("@blueraydigital/hms-push").default;
const config = require("./config");

hcm.init({
    appId: config.AppId,
    appSecret: config.AppSecret,
    authUrl: config.AuthUrl,
    pushUrl: config.PushUrl
});

let mc = hcm.messaging().messaging;

let notification = {
    title: "Test title",
    body: "Test body"
}
let androidNotification = {
    icon: '... .png',
    color: '#AACCDD',
    sound: '... .mp3',
    default_sound: true,
    tag: 'tagBoom',
    click_action: {
        type: 1,
        intent:"intent"
    },
    body_loc_key: 'M.String.body',
    body_loc_args: ['boy', 'dog'],
    title_loc_key: 'RingRing',
    title_loc_args: ["Girl", "Cat"],
    channel_id: 'Your Channel ID',
    notify_summary: 'some summary',
    multi_lang_key: {        
        title_key: {            
            en: "Foo Bar",            
            zh: "Foo Bar",            
            ru: "Foo Bar"        
        },        
        body_key: {            
            en: "My name is %s, I am from %s.",            
            zh: "My name is %s, I am from %s.",            
            ru: "My name is %s, I am from %s."        
        }
    },
    style: 1,
    big_title: 'test message',
    big_body: 'Big Boom Body',
    auto_clear: 86400000,
    notify_id: 486,
    group: 'Group1',
    importance: "HIGH",
    light_settings: {
        color: {
            alpha:0, red:0, green:1, blue:1
        }, 
        light_on_duration: "3.5", 
        light_off_duration: "5S"
    },
    badge:{
        add_num:99,
        set_num:99,
        class:"Classic"
    },
    ticker:"i am a ticker",
    auto_cancel:false,
    when:"2019-11-05",
    use_default_vibrate:true,
    use_default_light:false,
    visibility: 'PUBLIC',
    vibrate_config:[
        "1.5",
        "2.000000001",
        "3"
    ],
    foreground_show:true
}
let androidConfig = {
    collapse_key: -1,
    urgency:"HIGH",
    ttl: "10000s",
    bi_tag: "the_sample_bi_tag_for_receipt_service",
    notification: androidNotification
}
let message = {
    data:"{key1:value1}",
    notification: notification,
    android: androidConfig,
    token: config.AndroidTokenArray
            
};    

mc.send(message, false).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
```


#### 2. Send data message.
```js 
const hms = require("@blueraydigital/hms-push").default;
const config = require("./config");

hms.init({
    appId: config.AppId,
    appSecret: config.AppSecret,
    authUrl: config.AuthUrl,
    pushUrl: config.PushUrl
});

let mc = hms.messaging().messaging;

let AndroidConfig = {
    collapse_key: -1,
    urgency: "HIGH",
    ttl: "10000s",
    bi_tag: "the_sample_bi_tag_for_receipt_service"
}
let message = {
    data: "test",
    android: AndroidConfig,
    token: config.AndroidTokenArray
            
};    
mc.send(message, false).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
```

## License
HMS Pushkit is licensed under the [Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
