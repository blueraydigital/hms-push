import { Messaging } from "./push/messaging";
import { Topic } from "./push/topic";
import { MessagingConfig } from "./push/modle/message";
import { TopicConfig } from "./push/modle/topic";
import { AuthClient } from "./auth/auth";


export interface HmsServiceNamespace<T> {
    [key: string]: T;
}

export interface HmsConfig {
    appId: string;
    appSecret: string;
    authUrl?: string;
    pushUrl?: string
}


export class HmsNamespace {

    private authClient: AuthClient;
    private config: HmsConfig;

    public init(conf: HmsConfig) {
        this.config = conf;
        this.authClient = new AuthClient(conf);
    }

    public async auth() {
        this.checkInit();

        let token = await this.authClient.refreshToken();
        return token;
    }

    public messaging(conf?: MessagingConfig): HmsServiceNamespace<Messaging> {
        this.checkInit();

        if (!conf) {
            conf = {
                devappid: this.config.appId
            };
        }
        conf.devappid = conf.devappid ? conf.devappid : this.config.appId;
        conf.messagingUrl = conf.messagingUrl ? conf.messagingUrl : this.config.pushUrl;
        let messaging = new Messaging(conf, this.authClient);

        return { messaging };
    }

    public topic(tconf?: TopicConfig): HmsServiceNamespace<Topic> {
        this.checkInit();

        if (!tconf) {
            tconf = {
                devappid: this.config.appId
            };
        }
        tconf.devappid = tconf.devappid ? tconf.devappid : this.config.appId;
        tconf.topicUrl = tconf.topicUrl ? tconf.topicUrl : this.config.pushUrl;
        let topic = new Topic(tconf, this.authClient);

        return { topic };
    }

    private checkInit() {
        if (!this.config || !this.config.appId || !this.config.appSecret) {
            throw new Error("appId or appsecret is null, please init Hms first!");
        }
        return true;
    }
}
