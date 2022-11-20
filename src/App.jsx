import './App.css'
import Homepage from './pages/Homepage'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Profilpage from './pages/Profilpage'
import Chatpage from './pages/Chatpage'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profil' element={<Profilpage/>}/>
        <Route path='/chat/:id' element={<Chatpage/>}/>
      </Routes>
    </div>
  )
}

export default App