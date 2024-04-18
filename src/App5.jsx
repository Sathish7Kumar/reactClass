import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Register from './todo/Register'
import Login from './todo/Login'


const App5 = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App5