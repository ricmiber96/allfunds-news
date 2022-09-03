import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import NavBar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Archived from './pages/Archived'

function App () {
  document.title = 'Allfunds News'

  return (
    <div className='w-full h-full'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/archived' element={<Archived />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
