import notImplementedException from "../notImplementedException.mjs";

export default class TableComponent {
    render(data) {
        throw new notImplementedException(this.render.name);
    }
} 