"use strict";
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
exports.HmsNamespace = void 0;
const messaging_1 = require("./push/messaging");
const topic_1 = require("./push/topic");
const auth_1 = require("./auth/auth");
class HmsNamespace {
    init(conf) {
        this.config = conf;
        this.authClient = new auth_1.AuthClient(conf);
    }
    auth() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkInit();
            let token = yield this.authClient.refreshToken();
            return token;
        });
    }
    messaging(conf) {
        this.checkInit();
        if (!conf) {
            conf = {
                devappid: this.config.appId
            };
        }
        conf.devappid = conf.devappid ? conf.devappid : this.config.appId;
        conf.messagingUrl = conf.messagingUrl ? conf.messagingUrl : this.config.pushUrl;
        let messaging = new messaging_1.Messaging(conf, this.authClient);
        return { messaging };
    }
    topic(tconf) {
        this.checkInit();
        if (!tconf) {
            tconf = {
                devappid: this.config.appId
            };
        }
        tconf.devappid = tconf.devappid ? tconf.devappid : this.config.appId;
        tconf.topicUrl = tconf.topicUrl ? tconf.topicUrl : this.config.pushUrl;
        let topic = new topic_1.Topic(tconf, this.authClient);
        return { topic };
    }
    checkInit() {
        if (!this.config || !this.config.appId || !this.config.appSecret) {
            throw new Error("appId or appsecret is null, please init Hms first!");
        }
        return true;
    }
}
exports.HmsNamespace = HmsNamespace;
//# sourceMappingURL=hms-namespace.js.map