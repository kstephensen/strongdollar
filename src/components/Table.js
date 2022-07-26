import React from 'react'
import './Table.css'
import TableRow from './TableRow'

function Table() {
  return (
    <div className="table">
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
            <TableRow 
                name="France"
            />
        </div>
    </div>
  )
}

export default Table