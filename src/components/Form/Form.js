import React, {useContext, useState} from "react";
import FormContext from "../../store/formcontext";
import './Form.css'
const Form = ()=>{
    const formData= useContext(FormContext);
    const [name,setName] = useState('')
    const [price , setPrice] = useState(0)
    const [desc , setDesc] = useState('')
    const nameHandler =(event)=>{
        setName(event.target.value)
    }
    const descriptionHandler = (event) =>{
        setDesc(event.target.value)
    }
    const priceHandler = (event) =>{
        let value = Number(event.target.value)
        setPrice(value)
    }
    const submitHandler = (event) =>{
        event.preventDefault()
        const medicinedetails = {
            id: Math.random(),
            name : name,
            price: price,
            description: desc
        }
        console.log(medicinedetails)
        console.log(formData.items)
        formData.addToItems(medicinedetails)
    }
    return (
        <React.Fragment>
            <form onSubmit={submitHandler} className="form-control">
                <label htmlFor="medname">Medicine Name:</label>
                <input id="medname" type="text" onChange={nameHandler}/>
                <label htmlFor="desc">Description:</label>
                <input id="desc" type="text" onChange={descriptionHandler}/>
                <label htmlFor="price">Price:</label>
                <input id="price" type="number" onChange={priceHandler}/>
                <button type="submit">Add Medicine</button>
            </form>
        </React.Fragment>
    )
}

export default Form