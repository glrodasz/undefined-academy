import { Header, Menu, Home, Contact, Footer } from './components'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header>
        <Menu />
      </Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
