import React from 'react'

function Balance(props) {
    return (
        <div className={props.balanceAmount < 0 ? "expense-box" : "income-box"}>
          <h4>{props.balanceHeading}</h4>
          <p className={props.balanceAmount < 0? "expense-pay" : "income-pay"} > {props.balanceAmount < 0 && "-"} ${(Math.abs(props.balanceAmount)).toLocaleString()}</p>
        </div>
    )
}

export default Balance
