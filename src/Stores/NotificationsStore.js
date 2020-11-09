import ConfigStore from './ConfigStore'

export const NotificationTypes = {
    DANGER: 'danger',
    WARNING: 'warning',
    SUCCESS: 'success',
    INFO: 'info'
}

export class NotificationEntity {
    constructor(type, msg, opened = true, time = 3000) {
        this.type = type || NotificationTypes.SUCCESS;
        this.message = msg
        this.isOpen = Boolean(opened)
    }
}

export default class NotificationsStore {

    _instance = null;
    _list = [];

    // constructor() {
    // }

    static getInstance() {
        return this._instance || (this._instance = new this())
    }

    addAlert(alert) {
        this._list.push(alert)
    }

    setList(list) {
        this._list = list || [];

        for (let i = 0; i < this._list.length; ++i) {
            setTimeout(
                () => {
                    this.removeAlert(i)
                },
                ConfigStore.getInstance().notificationsTimeout
            )
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    get list() {
        return this._list
    }

    removeAlert(alertIndex = 0) {
        let self = this
        self.list.forEach((item, index) => {
            if (index === alertIndex) {
                self.list.splice(index, 1)
            }
        })
    }
}
