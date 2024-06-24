import TableComponent from "../../shared/base/tableComponent.mjs";

export default class TableBrowserComponent extends TableComponent {
    render(data) {
        const template = this.prepareData(data);

        document.body.insertAdjacentHTML('afterbegin', template);
    }

    prepareData(data) {
        const [firstItem] = data;

        const tableHeaders = Object.keys(firstItem)
                                .map(text => `<th>${text}</th>`);

        const joinLists = list => list.join('');
        const tableBodyValues = data.map(item => Object.values(item)
                                    .map(itemValue => `<td>${itemValue}</td>`))
                                    .map(tds => `<tr>${joinLists(tds)}</tr>`);
        const template = `
        <table class="table">
            <thead>
                <tr>${tableHeaders}</tr>
            </thead>
            <tbody>
                ${joinLists(tableBodyValues)}
            </tbody>
            </table>
        `

        return template;
    }
}