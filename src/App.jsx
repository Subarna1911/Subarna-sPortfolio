import React from 'react'
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import CustomCursor from './components/CustomCursor';
import Body from './components/Body';


const App = () => {
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">
      <CustomCursor />
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default App
