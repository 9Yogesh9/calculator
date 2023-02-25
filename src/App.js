import { useState } from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {

  const [expression, setExpression] = useState('');

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
      <Calculator expression={expression} setExpression={setExpression}/>
    </div>
  );
}

export default App;
