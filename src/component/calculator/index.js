import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ButtonGrid from 'component/buttonGrid'

const Container = styled.div`
  width: 400px;
  height: 600px;
  h4 {
    text-align: left;
    font-size: 20px;
    margin: 0 0 16px 0;
  }
`

const CalculatorLayout = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0px 4px 7px 0px #00000052;
`

const ResultLayout = styled.div`
  text-align: left;
  margin-bottom: 20px;
  h2 {
    font-size: 34px;
  }
  h2,
  h3 {
    margin: 0;
    span {
      color: #e623cf;
    }
  }
`

const Calculator = props => {
  const { id, title, onSubmit, value } = props
  const [currentValue, setCurrentValue] = useState('')
  const [displayValue, setDisplayValue] = useState('')

  const HandleClick = {
    Multiple: '*',
    Minus: '-',
    Plus: '+',
    Seven: '7',
    Eight: '8',
    Nine: '9',
    Four: '4',
    Five: '5',
    Six: '6',
    One: '1',
    Two: '2',
    Three: '3',
    Zero: '0',
    Dot: '.',
  }

  const transformsMultiply = val => {
    if (val === HandleClick.Multiple) {
      return ' X '
    } else if (val === HandleClick.Minus) {
      return ' - '
    } else if (val === HandleClick.Plus) {
      return ' + '
    } else {
      return val
    }
  }

  const getLastString = val => {
    return val.substr(val.length - 1)
  }

  const renderDisplay = () => {
    return displayValue.split(' ').map(str => {
      if (
        str === 'X' ||
        str === HandleClick.Minus ||
        str === HandleClick.Plus
      ) {
        return <span> {str} </span>
      }
      return str
    })
  }

  const onClickCalculator = type => {
    let tempValue = currentValue
    let tempDisplayValue = displayValue
    const value = HandleClick[type]

    if (
      getLastString(tempValue) === HandleClick.Multiple ||
      getLastString(tempValue) === HandleClick.Minus ||
      getLastString(tempValue) === HandleClick.Plus ||
      getLastString(tempValue) === HandleClick.Dot
    ) {
      if (getLastString(tempValue) === value) {
        return
      }
    }

    tempValue = tempValue + value
    tempDisplayValue = tempDisplayValue + transformsMultiply(value)
    setDisplayValue(tempDisplayValue)
    setCurrentValue(tempValue)
  }

  return (
    <Container>
      <h4>{title}</h4>
      <CalculatorLayout>
        <ResultLayout>
          <h2>{value ? value : 0}</h2>
          <hr />
          <h3>{displayValue ? renderDisplay() : 0}</h3>
        </ResultLayout>
        <ButtonGrid
          onClick={onClickCalculator}
          onSubmit={() => onSubmit(currentValue, id)}
          onReset={() => {
            setDisplayValue('')
            setCurrentValue('')
          }}
        />
      </CalculatorLayout>
    </Container>
  )
}

export default Calculator
