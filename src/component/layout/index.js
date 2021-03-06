import styled from 'styled-components'

const Main = styled.div`
  justify-content: space-between;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  margin-top: 60px;
`

const Header = styled.header`
  width: 100%;
  background-color: #fff;
  padding: 16px 30px;
  box-shadow: 0px -5px 12px -2px #000;

  h2 {
    margin: 0;
    color: #666;
    font-weight: 400;
    text-align: left;
  }
`

const Layout = ({ children }) => {
  return (
    <Main>
      <Header>
        <h2>Double Calculator</h2>
      </Header>
      <Container>{children}</Container>
    </Main>
  )
}

export default Layout
