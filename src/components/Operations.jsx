import React from 'react'

const Operations = ({ operation, expression, setExpression }) => {

    const operate = () => {
        if (operation === '=') {
            try{
                eval(expression);
                setExpression((previous) => eval(previous));
            } catch (error) {
                console.log(error);
                setExpression('');
            }
        } else {
            setExpression((previous) => previous + "" + operation)
        }
    }

    return (
        <div
            className='bg-blue-700 text-white font-bold w-full h-1/5 border-2 border-separate border-spacing-2 hover:border-slate-500 flex items-center justify-center'
            onClick={operate}
        >
            {operation}
        </div>
    )

}

export default Operations