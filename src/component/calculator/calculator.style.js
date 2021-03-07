import styled from 'styled-components'

export const Container = styled.div`
  width: 400px;
  height: 600px;
  h4 {
    text-align: left;
    font-size: 20px;
    margin: 0 0 16px 0;
  }
`

export const CalculatorLayout = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0px 4px 7px 0px #00000052;
`

export const ResultLayout = styled.div`
  text-align: left;
  margin-bottom: 20px;
  h2 {
    font-size: 34px;
  }
  h2,
  h3 {
    margin: 0;
    overflow: hidden;
    span {
      color: #e623cf;
    }
  }
`
