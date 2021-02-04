import React from 'react'
import CsvItem from '../classes/CsvItem'

interface Props {
    data: Array<CsvItem>;
}

const Dispatcher: React.FC<Props> = ({ data }) => {
    return (
        <div>
            {data.length > 0 ? data.map((item, index) => (<h3 key={index}>{item.name} - {item.time}</h3>)) : "No data in the dispatcher"}
        </div>
    )
}

export default Dispatcher
