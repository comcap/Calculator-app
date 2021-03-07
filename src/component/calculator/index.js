import { useState } from 'react'

import { Container, CalculatorLayout, ResultLayout } from './calculator.style'
import ButtonGrid from 'component/buttonGrid'

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

  const validationOperator = (fullText, typeValue) => {
    if (
      getLastString(fullText) === '' ||
      getLastString(fullText) === HandleClick.Multiple ||
      getLastString(fullText) === HandleClick.Minus ||
      getLastString(fullText) === HandleClick.Plus ||
      getLastString(fullText) === HandleClick.Dot
    ) {
      if (
        typeValue === HandleClick.Multiple ||
        typeValue === HandleClick.Minus ||
        typeValue === HandleClick.Plus ||
        typeValue === HandleClick.Dot
      ) {
        return true
      }
    }
  }

  const getLastString = val => {
    return val.substr(val.length - 1)
  }

  const renderDisplay = () => {
    return displayValue.split(' ').map((str, index) => {
      if (
        str === 'X' ||
        str === HandleClick.Minus ||
        str === HandleClick.Plus
      ) {
        return <span key={index}> {str} </span>
      }
      return str
    })
  }

  const onClickCalculator = type => {
    let tempValue = currentValue
    let tempDisplayValue = displayValue
    const valueCal = HandleClick[type]

    if (validationOperator(tempValue, valueCal)) return

    tempValue = tempValue + valueCal
    tempDisplayValue = tempDisplayValue + transformsMultiply(valueCal)
    setDisplayValue(tempDisplayValue)
    setCurrentValue(tempValue)
  }

  return (
    <Container>
      <h3>{title}</h3>
      <CalculatorLayout>
        <ResultLayout>
          <h2>{value ? value : 0}</h2>
          <hr />

          <h3>{displayValue ? renderDisplay() : 0}</h3>
        </ResultLayout>
        <ButtonGrid
          onClick={onClickCalculator}
          onSubmit={() => onSubmit(currentValue, displayValue, id)}
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
