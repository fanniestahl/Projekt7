import React, { useState } from 'react'
import CsvItem from '../classes/CsvItem'
import FIFO from './FIFO';

interface Props {
    data: Array<CsvItem>;
}

const Dispatcher: React.FC<Props> = ({ data }) => {


    return (
        <div>
            {data.length > 0 ? data.map((item, index) => (<h3 key={index}>{item.name} - {item.time}</h3>)) : "No data in the dispatcher"}

            <FIFO />
        </div>

    )
}

export default Dispatcher
