import React from 'react'
import EmployeeDetails from './page/EmployeeDetails'
import { EmployeeProvider } from './page/EmployeeContext'

const App2 = () => {
  return (
    <EmployeeProvider>
    <EmployeeDetails/>
    </EmployeeProvider>
  )
}

export default App2