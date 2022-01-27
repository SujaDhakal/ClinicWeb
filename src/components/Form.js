import React, {useState} from 'react'

function Form(props) {

const [enteredInfo, setEnteredInfo] =useState({
    info:"",
    amount:""
})

const handleChange =((event) => {
    const {name, value} = event.target;
    setEnteredInfo(prevValue => {
        return {...prevValue, [name]: value}
    })
})
    return (
        <div className="form">
        <h4 className="form-title"><span style={{color: "white"}}>Record New</span> Transaction</h4>
          {/* <div className="input-section"> */}
            <label >Transaction</label>
            <input onChange={handleChange} name="info" value={enteredInfo.info} placeholder="Enter info..." />
            {/* </div> */}
            {/* <div className="input-section"> */}
            <label >Amount</label>
            <input onChange={handleChange} name="amount" value={enteredInfo.amount} placeholder="Enter amount..." />
            {/* </div> */}
            <button onClick={()=>{
                props.onAdd(enteredInfo);
                setEnteredInfo({
                info:"",
                amount:""
               })
               
            }}>Add</button>
        </div>
    )
}

export default Form
