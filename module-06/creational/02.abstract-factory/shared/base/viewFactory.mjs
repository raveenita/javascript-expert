import notImplementedException from "../notImplementedException.mjs";

export default class ViewFactory {
    createTable() {
        throw new notImplementedException(this.createTable.name);
    }
}