import RequestExecutorHelper from '../Helpers/RequestExecutorHelper'
import NotificationsStore, { NotificationTypes, NotificationEntity } from '../Stores/NotificationsStore'
import ConfigStore from '../Stores/ConfigStore'
import { history } from '../Routing'

export default class HttpActionsService {
    _instance;
    _config = ConfigStore.getInstance();
    _reqNum = 0;
    _notifications = [];

    constructor() {
        this._reqNum = 0;
        this._notifications = [];
    }

    static getInstance() {
        return this._instance || (this._instance = new this());
    }

    getEndPoint(url, https = false) {
        return (https ? this._apiHttpHost : this._apiHttpHost) + url;
    }

    incReqNum() {
        this._reqNum++;
    }

    decReqNum() {
        this._reqNum = this._reqNum ? this._reqNum - 1 : 0;
    }

    processNotification(msg, type, show = true) {
        show = undefined !== show ? show : true;
        
        let alert = new NotificationEntity(type, msg);
        
        if (show) {
            this._notifications.push(alert);
        }

        if (!this._reqNum) {
            NotificationsStore.getInstance().setList(this.notifications);
            this.notifications = [];
        }
    }

    getStations() {
        history.push('/stations');

        const self = this;
        self.incReqNum();

        const responseHandler = function(response) {
            this.decReqNum();
            if (response['ok'] && 200 === response.status) {
                response.json().then((data) => {
                    return data['data'];
                })
            } else {
                NotificationsStore.getInstance().setList(
                    [
                        new NotificationEntity(
                            NotificationTypes.DANGER,
                            `Can't get available stations`
                        )
                    ]
                )
            }
        }
        const errHandler = function(error) {
            self.decReqNum();
            self.processNotification(
                'Can\'t get available stations',
                NotificationTypes.DANGER,
                true
            );
        }

        let stations = new RequestExecutorHelper().get(self._config.apiHostStation);
        stations.then((response) => {
                responseHandler(self, response);
            })
            .catch((error) => {
                errHandler(error);
            });
        
        return stations;
    }
}
