
import Accordion from './Components/accordion.component';
import ReactLogo from './assets/react.svg'
import accordionItems from './data';

function App() {
  

  return (
      <div className='flex justify-center items-center flex-col'>
          <h1 className="text-3xl font-bold">What a wonderful day</h1>
          <img src={ReactLogo} alt='react-logo'/>
          <Accordion data={accordionItems}/>
      </div>
  )
}

export default App
