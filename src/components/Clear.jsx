import React from 'react'

const Clear = ({ keyvalue, setExpression }) => {
    return (
        <div
            className='bg-red-600 text-white font-medium w-1/3 h-full border-2 border-separate border-spacing-2 hover:border-slate-500 flex items-center justify-center'
            onClick={() => {setExpression('')}}
        >
            {keyvalue}
        </div>
    )
}

export default Clear;