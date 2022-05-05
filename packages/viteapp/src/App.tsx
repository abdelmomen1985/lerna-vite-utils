import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { add } from '@knola-2/utils'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {add(5,2)}
    </div>
  )
}

export default App
