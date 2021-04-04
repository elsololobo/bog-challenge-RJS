import './App.css'
import React from 'react'
import Header from './components/header/header'
import Home from './pages/home/home'
import Footer from './components/footer/footer'
import Toaster from './components/toaster/toaster'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className={'main-wrapper'}>
      <Header />
      <Home />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
