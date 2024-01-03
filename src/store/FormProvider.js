import React, {useState} from "react";
import FormContext from "./formcontext";

const FormProvider = (props) => {
    const addItemHandler = (item)=>{
        formcontext.items.push({...item})
        setformdetails({...formcontext})
    }
    const formcontext = {
        items: [],
        addToItems: addItemHandler
    }  
    const [formdetails, setformdetails] = useState(formcontext)

  return <FormContext.Provider value={formdetails}>{props.children}</FormContext.Provider>;
};

export default FormProvider;
