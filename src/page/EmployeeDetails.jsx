import React, { useState } from 'react'
import { useEmployeeContext } from './EmployeeContext'


const EmployeeDetails = () => {
    const {state,dispatch} = useEmployeeContext()

    const [name, setname] = useState("")
    const [position, setposition] = useState('')

    const handleAdd = () =>{


        const newEmployee = {

            // id: state.employees.length +1,
            
            name:name,
            position:position
        }

        if(!name || !position){
            return null
        }
        dispatch( {type:"ADD_EMP",payload:newEmployee})
        setname("")
        setposition('')
    }

    const handleDelete = (id) =>{
        dispatch({type:"Del_EmP",payload:id})
    }

  return (
    <>
    <h2>Employee Details</h2>
    <div>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)}  placeholder='Enter Name' />
        <input type="text" value={position} onChange={(e)=>setposition(e.target.value)} placeholder='Enter Position' />
        <button onClick={handleAdd}>Add</button>
    </div>
    <div>
        <ul>
            {state.employees.map((x,i)=>{
                return(
                    <li key={i}>
                        {/* Emp ID: {x.id} */}
                         Name : {x.name} , Position : {x.position} 
                        <button onClick={()=>handleDelete(x.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    </div>
    </>
  )
}

export default EmployeeDetails