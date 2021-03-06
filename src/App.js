import './App.css'
import Layout from 'component/layout'
import Calculator from 'component/calculator'

function App() {
  const onSubmit = () => {
    console.log('onSubmit')
  }
  return (
    <div className='App'>
      <Layout>
        <Calculator title={'Calculator A'} onSubmit={onSubmit} />
        <Calculator title={'Calculator B'} onSubmit={onSubmit} />
      </Layout>
    </div>
  )
}

export default App
