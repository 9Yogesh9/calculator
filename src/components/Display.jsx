import React from 'react'

const Display = ({ expression }) => {
    return (
        <div className='h-1/6 font-bold font-xl bg-slate-400 w-full px-6 py-8 text-right overflow-auto rounded-t'>
            {expression}
        </div>
    )
}

export default Display