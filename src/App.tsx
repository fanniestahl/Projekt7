import React, { useState } from 'react';
import CsvItem from './classes/CsvItem';
import Dataprocessor from './classes/Dataprocessor';
import Dispatcher from './components/Dispatcher';
import Input from './components/Input';

function App() {

  const [data, setData] = useState(new Array<CsvItem>());

  return (
    <div className="App">
      <Input onSubmit={csv => setData(Dataprocessor.process(csv))} />
      <Dispatcher data={data} />

    </div>
  );
}

export default App;          
