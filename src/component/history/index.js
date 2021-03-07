import { CalculatorLayout, Container, HistoryLayout } from './history.style'

const History = props => {
  const { title, historys, setHistorys, onSearch, onFilter } = props

  const confirmClean = () => {
    const isConfirm = confirm('Confirm clearing ?')
    if (isConfirm) {
      localStorage.clear()
      setHistorys([])
    }
  }

const History = props => {
  const { title, historys, setHistorys, onSearch, onFilter } = props

  const renderDisplay = displayValue => {
    return displayValue.split(' ').map((str, index) => {
      if (str === 'X' || str === '-' || str === '+') {
        return <span key={index}> {str} </span>
      }
      return str
    })
  }

  const confirmClean = () => {
    const isConfirm = confirm('Confirm clearing ?')
    if (isConfirm) {
      localStorage.clear()
      setHistorys([])
    }
  }

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
        <div onClick={() => confirmClean()} className='btn-clear'>
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
