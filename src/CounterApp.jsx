import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value )

    const handleAdd = () => {
        // setCounter( counter + 1 )
        setCounter( (c) => c + 1 )
    }
    const handleSubstract = () => {
        setCounter( counter - 1 )
    }
    const handleReset = () => {
        setCounter( value )
    }

    return (
    <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button className='btn btn-secondary' onClick={ handleSubstract }>-1</button>
        <button className='btn btn-danger' onClick={ handleReset }>Reset</button>
        <button className='btn btn-primary' onClick={ handleAdd }>+1</button>
    </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number,
}