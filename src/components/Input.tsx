import React, { useState } from 'react';

interface Props {
    onSubmit: (csv: string) => void;
}

const Input: React.FC<Props> = ({ onSubmit }) => {

    const [csv, setCsv] = useState('');

    return (
        <div className="App">
            <input type="text" value={csv} onChange={(e) => setCsv(e.target.value)} />
            <input type="button" value="Skicka" onClick={(e) => onSubmit(csv)} />
        </div>
    );
}

export default Input; 