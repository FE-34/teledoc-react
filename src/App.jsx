import './App.css'
import Homepage from './pages/Homepage'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
