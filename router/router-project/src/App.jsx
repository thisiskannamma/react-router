import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Post from './Post'
import Datascience from './Datascience'
import Cyber from './cyber'
import Career from './Career'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}></Route>
          <Route exact path='/full stack' element={<Post/>}></Route>
          <Route exact path='/datascience' element={<Datascience/>}></Route>
          <Route exact path='/cyber security' element={<Cyber/>}></Route>
          <Route exact path='/career' element={<Career/>}></Route>

        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
