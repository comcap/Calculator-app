import { Main, Container, Header } from './layout.style'

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
