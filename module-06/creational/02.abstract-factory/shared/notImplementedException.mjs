export default class notImplementedException extends Error {
    constructor(message) {
        super(`The ${message} function was not implemented`);
        this.name = 'notImplementedException';
    }
}