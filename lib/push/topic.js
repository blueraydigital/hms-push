"use strict";
/*!
 * Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topic = void 0;
const api_request_1 = require("../utils/api-request");
const SEND_METHOD = "POST";
class Topic {
    constructor(conf, auth) {
        this.config = conf;
        this.authClient = auth;
        this._httpClient = new api_request_1.HttpClient();
    }
    // subscribeTopic
    // The developer server calls this interface to single or multiple users to complete the topic subscription operation
    subScribeTopic(req) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.authClient) {
                throw new Error("can't refresh token because getting auth client fail");
            }
            if (!this.authClient.token) {
                yield this.authClient.refreshToken();
            }
            let result = yield this.getSubscribeTopicReq(req);
            if (result.code === api_request_1.TOKENTIMEOUTERR) {
                yield this.authClient.refreshToken();
                result = yield this.getSubscribeTopicReq(req);
            }
            return result;
        });
    }
    getSubscribeTopicReq(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let option = {};
            let url = this.config.topicUrl ? this.config.topicUrl : api_request_1.ENDPOINT;
            option.uri = `${url}/${this.config.devappid}/topic:subscribe`;
            option.headers = {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: `Bearer ${this.authClient.token}`
            };
            option.body = req;
            option.method = SEND_METHOD;
            option.json = true;
            return this._httpClient.send(option).then(res => {
                let data = res.data;
                return data;
            });
        });
    }
    // unsubscribeTopic
    // The developer server calls this interface to single or multiple users to complete the topic unsubscription operation
    unSubScribeTopic(req) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.authClient) {
                throw new Error("can't refresh token because getting auth client fail");
            }
            if (!this.authClient.token) {
                yield this.authClient.refreshToken();
            }
            let result = yield this.getUnSubscribeTopicReq(req);
            if (result.code === api_request_1.TOKENTIMEOUTERR) {
                yield this.authClient.refreshToken();
                result = yield this.getUnSubscribeTopicReq(req);
            }
            return result;
        });
    }
    getUnSubscribeTopicReq(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let option = {};
            let url = this.config.topicUrl ? this.config.topicUrl : api_request_1.ENDPOINT;
            option.uri = `${url}/${this.config.devappid}/topic:unsubscribe`;
            option.headers = {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: `Bearer ${this.authClient.token}`
            };
            option.body = req;
            option.method = SEND_METHOD;
            option.json = true;
            return this._httpClient.send(option).then(res => {
                let data = res.data;
                return data;
            });
        });
    }
    // queryTopic
    // The developer server calls this interface to single or multiple users to complete the topic query operation
    queryTopicList(req) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.authClient) {
                throw new Error("can't refresh token because getting auth client fail");
            }
            if (!this.authClient.token) {
                yield this.authClient.refreshToken();
            }
            let result = yield this.getQueryTopic(req);
            if (result.code === api_request_1.TOKENTIMEOUTERR) {
                yield this.authClient.refreshToken();
                result = yield this.getQueryTopic(req);
            }
            return result;
        });
    }
    getQueryTopic(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let option = {};
            let url = this.config.topicUrl ? this.config.topicUrl : api_request_1.ENDPOINT;
            option.uri = `${url}/${this.config.devappid}/topic:list`;
            option.headers = {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: `Bearer ${this.authClient.token}`
            };
            option.body = req;
            option.method = SEND_METHOD;
            option.json = true;
            return this._httpClient.send(option).then(res => {
                let data = res.data;
                return data;
            });
        });
    }
}
exports.Topic = Topic;
//# sourceMappingURL=topic.js.map