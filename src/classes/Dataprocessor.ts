import CsvItem from "./CsvItem"

export default class Dataprocessor {

    static process(csv: string): Array<CsvItem> {
        let commaSeparated = csv.split(',');
        let items: Array<CsvItem> = new Array<CsvItem>();
        for (let i = 0; i < commaSeparated.length; i += 2) {
            items.push(new CsvItem(commaSeparated[i].trim(), parseFloat(commaSeparated[i + 1])));
        }
        return items;
    }
}