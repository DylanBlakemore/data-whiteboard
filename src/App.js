import './App.scss'

import AppHeader from 'Navigation/AppHeader'
import Whiteboard from 'Whiteboard'

function App() {
  return <div className='app' >
    <AppHeader text={'Dive into ...'} />
    <Whiteboard />
  </div>
}

export default App
