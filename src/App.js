import { useState, useEffect } from 'react'
import { format } from 'date-fns'

import './App.css'
import Layout from 'component/layout'
import Calculator from 'component/calculator'
import History from 'component/history'

function App() {
  const [historys, setHistorys] = useState([])
  const [calculator, setCalculator] = useState([
    {
      title: 'Calculator A',
      data: {
        value: 0,
        displayValue: 0,
      },
    },
    {
      title: 'Calculator B',
      data: {
        value: 0,
        displayValue: 0,
      },
    },
  ])

  useEffect(() => {
    const currentHistory = localStorage.getItem('history')
      ? JSON.parse(localStorage.getItem('history'))
      : []
    setHistorys(currentHistory)
  }, [])

  useEffect(() => {
    if (historys.length > 0) {
      localStorage.setItem('history', JSON.stringify(historys))
    }
  }, [historys])

  const getData = async params => {
    try {
      const response = await fetch(`http://api.mathjs.org/v4/?expr=${params}`)
        .then(response => response.json())
        .then(data => {
          return { data: data, status: 200 }
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
        data: {
          value: 0,
          displayValue,
        },
      }

      if (response.status === 200) {
        arrCalculator[id].data.value = response.data
        objHistory.data.value = response.data

        setCalculator(arrCalculator)
        setHistorys([...currentHistory, objHistory])
      }
    }
  }

  return (
    <div className='App'>
      <Layout>
        {calculator.map((cal, index) => {
          return (
            <Calculator
              key={index}
              id={index}
              title='Calculator A'
              value={cal.data.value}
              onSubmit={onSubmit}
            />
          )
        })}
        <History
          title='Results'
          historys={historys}
          setHistorys={setHistorys}
        />
      </Layout>
    </div>
  )
}

export default App
