import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Heroes } from './components/Heroes'
import { Navbar } from './components/Navbar'
import { Details } from './components/Details'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path ='/heroes' element={<Heroes />}/>
        <Route path = '/details/:id' element ={<Details />}/>
      </Routes>
    </>
  )
}

export default App
