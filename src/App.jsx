import './App.css'
import Homepage from './pages/Homepage'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import Profilpage from './pages/Profilpage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profil' element={<Profilpage/>}/>
      </Routes>
    </div>
  )
}

export default App
