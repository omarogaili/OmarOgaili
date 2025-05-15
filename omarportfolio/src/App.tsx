import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Portfolio from './components/portfolio'
import PostBody from './components/postBody'
import Footer from './components/footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
    <Header />
    <div className='flexPortfolio'>
    <Portfolio />
    </div>
    <div className='flexPost'>
    <PostBody />
    </div>g
    <div className='flexFooter'>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default App
