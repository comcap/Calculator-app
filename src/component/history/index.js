import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 700px;
  height: 600px;
  position: relative;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      width: 50%;
    }
    select {
      width: 25%;
    }

    input,
    select {
      border: none;
      height: 40px;
      font-size: 18px;
      background-color: #fff;
      padding: 0px 20px;
      border-radius: 14px;
      box-shadow: 0px 4px 7px 0px #00000052;
    }
  }

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
  height: 600px;
  overflow: auto;

  .btn-clear {
    display: inline;
    width: auto;
    background: #faa3a6;
    padding: 6px 10px;
    color: #fff;
    border-radius: 10px;
    font-size: 20px;
    box-shadow: 0px 4px 7px 0px #00000052;
    cursor: pointer;
    position: absolute;
    bottom: -120px;
    right: 20px;
  }
`

const HistoryLayout = styled.div`
  text-align: left;
  margin-bottom: 20px;
  .title {
    display: flex;
    justify-content: space-between;
  }

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

const renderDisplay = displayValue => {
  return displayValue.split(' ').map((str, index) => {
    if (str === 'X' || str === '-' || str === '+') {
      return <span key={index}> {str} </span>
    }
    return str
  })
}

const History = props => {
  const { title, historys, setHistorys, onSearch, onFilter } = props
  return (
    <Container>
      <div className='header'>
        <h3>{title}</h3>

        <input
          type='text'
          placeholder='Search by result, date'
          onChange={onSearch}
        />
        <select onChange={onFilter}>
          <option value='all'>All</option>
          <option value='Calculator A'>A</option>
          <option value='Calculator B'>B</option>
        </select>
      </div>
      <CalculatorLayout>
        <div
          onClick={() => {
            localStorage.clear()
            setHistorys([])
          }}
          className='btn-clear'
        >
          <span>Clear</span>
        </div>
        {historys.length > 0 &&
          historys
            .slice(0)
            .reverse()
            .map((history, index) => {
              return (
                <HistoryLayout key={index}>
                  <div className='title'>
                    <h3>{history.title}</h3>
                    <span>{history.timestamp}</span>
                  </div>
                  <h2>{history.value}</h2>
                  <hr />
                  <h3>{renderDisplay(history.displayValue)}</h3>
                </HistoryLayout>
              )
            })}
      </CalculatorLayout>
    </Container>
  )
}

export default History
