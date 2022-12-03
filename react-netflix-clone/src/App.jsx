import { useState } from 'react'

// Components
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
