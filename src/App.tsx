import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Main from './components/Main'
import Article from './pages/Article'
import About from './pages/About'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="flex flex-col justify-center">
        <header className="fixed top-0 z-50 w-full">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<main className="flex-grow h-[300px]"><Hero /><Main /></main>} />
          <Route path="/articles/:id"
            element={<div className="flex justify-center py-[100px] min-h-screen">
            <main className='flex-grow pt-8 max-w-3xl w-full'><Article /></main>
            </div>}></Route>
          <Route path="/about" element={<div className="flex justify-center py-[100px] min-h-screen">
            <main className="flex-grow pt-8 max-w-3xl w-full"><About ></About></main></div>}></Route>
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
