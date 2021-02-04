import { unescapeLeadingUnderscores } from "typescript";
import CsvItem from "./CsvItem";

export default class Dispatcher {
    static data: Array<CsvItem>;
    static index: number;
    static listeners: Array<(item: CsvItem) => void>;
    static interval: NodeJS.Timeout | undefined;


    static setData(data: Array<CsvItem>) {
        Dispatcher.data = data;
    };

    static start() {
        if (Dispatcher.interval != undefined) {
            return;
        }

        Dispatcher.interval = setInterval(() => {

            if (Dispatcher.index >= Dispatcher.data.length) {
                clearInterval(Dispatcher.interval!);
                Dispatcher.interval = undefined;
                return;
            }

            for (let listener of Dispatcher.listeners) {
                listener(Dispatcher.data[Dispatcher.index]);
            }
            Dispatcher.index++;

        }, 1000)
    }


    static restart() {
        Dispatcher.index = 0;
        Dispatcher.stop();
        Dispatcher.start();
    }

    static stop() {
        clearInterval(Dispatcher.interval!);
        Dispatcher.interval = undefined;
    }

    static registerlistener(func: (item: CsvItem) => void) {
        if (Dispatcher.listeners == undefined) {
            Dispatcher.listeners = new Array<(item: CsvItem) => void>();
        }
        Dispatcher.listeners.push(func);
    }

}
