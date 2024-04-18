import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Login from './blog/Login'
import Register from './blog/Register'
import Home from './blog/Home'
import Navbar from './blog/Navbar'
import CreateBlog from './blog/CreateBlog'
import SavedBlog from './blog/SavedBlog'


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/createblog' element={<CreateBlog/>} />
      <Route path='/savedblog' element={<SavedBlog/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
