import React from 'react'

const Key = ({ keyvalue, setExpression }) => {
  return (
    <div
      className='bg-slate-900 text-white font-medium w-1/3 h-full border-2 border-separate border-spacing-2 hover:border-slate-500 flex items-center justify-center'
      onClick={() => setExpression((previous) => previous + "" + keyvalue)}
    >
      {keyvalue}
    </div>
  )
}

export default Key;