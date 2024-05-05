
import ReactLogo from './assets/react.svg'

import './App.css'

function App() {
  

  return (
      <div className='flex justify-center items-center flex-col'>
          <h1 className="text-3xl font-bold underline">What a wonderful day</h1>
          <img src={ReactLogo} alt='react-logo'/>
      </div>
  )
}

export default App
