import Login from './pages/Login'
import UploadImage from './pages/UploadImage'
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<UploadImage />} />
      </Routes>
    </div>
  )
}

export default App
