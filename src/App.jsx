import './App.css'
import Homepage from './pages/Homepage'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </div>
  )
}

export default App
