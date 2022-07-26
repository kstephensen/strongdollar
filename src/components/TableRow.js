import React from 'react'

function TableRow(props) {
  return (
    <> 
        <li className="row">
            <div className="row__rank">
                <p>1</p>
            </div>
            <div className="row__flag">
                <img src="public/images/flags/fr.png" />
            </div>
            <div className="row__name">
                <p>{props.name}</p>
            </div>
            <div className="row__parity">
                <i class="fa-solid fa-dollar-sign" />
                <p className="parity">$1.07</p>
            </div>
        </li>
    </>
  );
}

export default TableRow