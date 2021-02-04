import React, { useState } from 'react'
import CsvItem from '../classes/CsvItem'
import SinglyList from '../classes/singlylist';
import DispatcherTS from '../classes/Dispatcher';
import { ListNode } from '../classes/nodelists';

const FIFO: React.FC<{}> = (props) => {

    const [list, setList] = useState(new SinglyList());

    const [hasRegListener, setHasRegListener] = useState<boolean>(false);

    if (!hasRegListener) {
        setHasRegListener(true);

        DispatcherTS.registerlistener((item: CsvItem) => {
            list.insertFirst(new ListNode(item));
            setList(list);
        });

    }

    return (
        <div>

        </div>
    )
}


export default FIFO
