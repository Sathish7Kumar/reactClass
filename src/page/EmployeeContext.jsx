import { createContext, useContext, useReducer } from "react";

const EmployeeContext = createContext()

const initialState = {
    employees : [
        // {name:"satz",position:"mern"},
        // {name:"sachin",position:"fsd"},
    ]
}

const reducer = (state,action) =>{
    switch (action.type){
        case "ADD_EMP" : 
        return {
            ...state,
            employees : [...state.employees,action.payload]
        }
        case "Del_EmP" :
        return{
            ...state,
            employees: state.employees.filter((x)=> x.id !== action.payload)
        }
        default :
        return state
    }
}

export const EmployeeProvider = ({children})=> {
    const [state,dispatch] =useReducer(reducer,initialState)
    return(
        <EmployeeContext.Provider value={{state,dispatch}}>
            {children}
        </EmployeeContext.Provider>
    )
}

export const useEmployeeContext = () =>{
    const context = useContext(EmployeeContext)
    if(!context){
        throw new Error ("Error Occured")
    }
    return context
}

