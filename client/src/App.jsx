import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import './App.css'
import HomePage from './components/pages/Home'
import Nav from './components/Navbar'
import Login from './components/pages/Login2'
import SignUp from './components/pages/SignUp'
import Footer from './components/Footer'
import Recipe from './components/pages/Recipe'
import CheckboxList from './components/pages/list'
// import ErrorPage from './components/pages/ErrorPage'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Recipes/:id' element={<Recipe/>}/>
          <Route path='/checkbox' element={<CheckboxList/>}/>
          {/* <Route path='/Error' element={<ErrorPage/>}/> */}
          {/* <Route path="*" element={<Navigate to="/Error" replace />} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}