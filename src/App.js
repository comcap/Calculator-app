import { useState } from 'react'
import './App.css'
import Layout from 'component/layout'
import Calculator from 'component/calculator'

function App() {
  const [value, setValue] = useState([0, 0])
  const onSubmit = (currentValue, id) => {
    let arrValue = [...value]
    const encodeValue = encodeURIComponent(currentValue)

    fetch(`http://api.mathjs.org/v4/?expr=${encodeValue}`)
      .then(response => response.json())
      .then(data => {
        arrValue[id] = data
        setValue(arrValue)
      })
  }
  return (
    <div className='App'>
      <Layout>
        <Calculator
          id={0}
          title={'Calculator A'}
          value={value[0]}
          onSubmit={onSubmit}
        />
        <Calculator
          id={1}
          title={'Calculator B'}
          value={value[1]}
          onSubmit={onSubmit}
        />
      </Layout>
    </div>
  )
}

export default App
