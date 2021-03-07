import { useState, useEffect } from 'react'
import { format } from 'date-fns'

import './App.css'
import Layout from 'component/layout'
import Calculator from 'component/calculator'
import History from 'component/history'

function App() {
  const [initalValue, setInitalValue] = useState([])
  const [historys, setHistorys] = useState([])
  const [calculator, setCalculator] = useState([
    {
      title: 'Calculator A',
      value: '0',
      displayValue: '0',
    },
    {
      title: 'Calculator B',
      value: '0',
      displayValue: '0',
    },
  ])

  useEffect(() => {
    const currentHistory = localStorage.getItem('history')
      ? JSON.parse(localStorage.getItem('history'))
      : []
    setHistorys(currentHistory)
    setInitalValue(currentHistory)
  }, [])

  const getData = async params => {
    try {
      const response = await fetch(`http://api.mathjs.org/v4/?expr=${params}`)
        .then(response => response.json())
        .then(data => {
          return { data: `${data}`, status: 200 }
        })

      return response
    } catch (err) {
      alert(err)
      console.log('err', err)
    }
  }

  const onSubmit = async (currentValue, displayValue, id) => {
    if (currentValue) {
      let arrCalculator = [...calculator]
      let currentHistory = [...historys]

      const currentDate = format(new Date(), 'MM/dd/yyyy - HH:mm.ss')
      const encodeValue = encodeURIComponent(currentValue)

      const response = await getData(encodeValue)

      let objHistory = {
        title: arrCalculator[id].title,
        timestamp: currentDate,
        value: 0,
        displayValue,
      }

      if (response.status === 200) {
        arrCalculator[id].value = response.data
        objHistory.value = response.data

        setCalculator(arrCalculator)
        setHistorys([...currentHistory, objHistory])
        setInitalValue([...currentHistory, objHistory])

        localStorage.setItem(
          'history',
          JSON.stringify([...currentHistory, objHistory])
        )
      }
    }
  }

  const filterByValue = (array, string) => {
    return array.filter(o =>
      Object.keys(o).some(k =>
        o[k].toLowerCase().includes(string.toLowerCase())
      )
    )
  }

  const onSearch = e => {
    const tempHistorys = [...initalValue]
    const result = filterByValue(tempHistorys, e.target.value)

    setHistorys(result)
  }

  const onFilter = e => {
    const tempHistorys = [...initalValue]
    let result = []

    if (e.target.value !== 'all') {
      result = filterByValue(tempHistorys, e.target.value)
    } else {
      result = filterByValue(tempHistorys, '')
    }

    setHistorys(result)
  }

  return (
    <div className='App'>
      <Layout>
        {calculator.map((cal, index) => {
          return (
            <Calculator
              key={index}
              id={index}
              title={cal.title}
              value={cal.value}
              onSubmit={onSubmit}
            />
          )
        })}
        <History
          title='Results'
          historys={historys}
          setHistorys={setHistorys}
          onSearch={onSearch}
          onFilter={onFilter}
        />
      </Layout>
    </div>
  )
}

export default App
