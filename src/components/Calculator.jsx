import React from 'react';
import Clear from './Clear';
import Display from './Display';
import Key from './Key';
import Operations from './Operations';

const Calculator = ({ expression, setExpression }) => {
  return (
    <div className='flex flex-col items-start w-full max-w-screen-md h-4/5 text-xl font-medium rounded'>
      <Display expression={expression} setExpression={setExpression} />
      <div className="flex flex-row justify-between w-full h-5/6">

        <div className='w-full h-full flex flex-col '>
          {/* KeysContainer */}
          <div className="flex flex-row w-full h-1/4">
            <Key keyvalue={7} setExpression={setExpression}/>
            <Key keyvalue={8} setExpression={setExpression}/>
            <Key keyvalue={9} setExpression={setExpression}/>
          </div>
          <div className="flex flex-row w-full h-1/4">
            <Key keyvalue={4} setExpression={setExpression}/>
            <Key keyvalue={5} setExpression={setExpression}/>
            <Key keyvalue={6} setExpression={setExpression}/>
          </div>
          <div className="flex flex-row w-full h-1/4">
            <Key keyvalue={1} setExpression={setExpression}/>
            <Key keyvalue={2} setExpression={setExpression}/>
            <Key keyvalue={3} setExpression={setExpression}/>
          </div>
          <div className="flex flex-row w-full h-1/4">
            <Clear keyvalue={'C'} setExpression={setExpression}/>
            <Key keyvalue={0} setExpression={setExpression}/>
            <Key keyvalue={'.'} setExpression={setExpression}/>
          </div>

        </div>

        <div className="w-1/5 h-full" >
          <Operations operation={'/'} setExpression={setExpression}/>
          <Operations operation={'*'} setExpression={setExpression}/>
          <Operations operation={'-'} setExpression={setExpression}/>
          <Operations operation={'+'} setExpression={setExpression}/>
          <Operations operation={'='} expression={expression} setExpression={setExpression}/>
        </div>

      </div>
    </div>
  )
}

export default Calculator