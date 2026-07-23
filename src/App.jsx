import Dock from './components/Dock'
import Nav from './components/Nav'
import './app.scss'
import MacWindow from './components/windows/MacWindow'
import Github from './components/windows/Github'
import Note from './components/windows/Note'

function App() {
  
  return (
    <main>
      <Nav/>
      <Dock/>
      <Github/>
      <Note/>
    
    
    </main>
  )
}

export default App
