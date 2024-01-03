import React from "react";

const FormContext = React.createContext({
    items:[],
    addToItems:(item)=>{}
})

export default FormContext