import MainHead from './components/MainHead'

import './App.css'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'

function App() {
  return (
    <>
    <div className="container">
      <center>
      <MainHead />
      <ClockSlogan />
      <CurrentTime />
      </center>
    </div>
      
    </>
  )
}

export default App
