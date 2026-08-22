import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './rootLayout/RootLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Recipes from './pages/Recipes'
import ScrollToTop from './components/common/ScrollToTop'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>

       <ScrollToTop />

      <Routes>
        <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='Products' element={<Products/>}/>
        <Route path='recipes' element={<Recipes/>}/>
        <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
