import React, { useEffect, useState } from 'react';
import './App.css'
import CsvItem from './classes/CsvItem';
import Dataprocessor from './classes/Dataprocessor';
import Dispatcher from './components/Dispatcher';
import DispatcherTS from './classes/Dispatcher';
import Input from './components/Input';

function App() {

  const [data, setData] = useState(new Array<CsvItem>());

  useEffect(() => {
    DispatcherTS.setData(data);
    DispatcherTS.restart();
  }, [data]);

  return (
    <div className="App">
      <Input onSubmit={csv => setData(Dataprocessor.process(csv))} />
      <Dispatcher data={data} />

    </div>
  );
}

export default App;          
