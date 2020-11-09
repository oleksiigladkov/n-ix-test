export default class ConfigStore {

    _instance = null;

    _overlayMode = false;
    _mockMode = true;
    _notificationsTimeout;

    // production server
    _apiHostStation = 'http://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json';
    get apiHostStation() {
        return this._mockMode ? this._apiMockHostStation : this._apiHostStation;
    }
    
    // mocked data nodejs server
    _apiMockHostStation = 'http://localhost:8990/api/station'
    get apiMockHostStation() {
        return this._apiMockHostStation;
    }

    constructor() {
        this._overlayMode = false;
        this._notificationsTimeout = 3000;
        this._mockMode = true;
    }
    
    static getInstance() {
        return this._instance || (this._instance = new this())
    }
    
    setOverlayMode(on = true) {
        this._overlayMode = on;
    }

    get notificationsTimeout () {
        return this._notificationsTimeout;
    }
    set notificationsTimeout (val) {
        return this._notificationsTimeout = val;
    }
}
