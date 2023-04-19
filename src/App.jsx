import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ProductList from './components/ProductList'
import CreateProduct from './components/CreateProduct'
import EditProduct from './components/EditProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link to={"/"} className='navbar-brand text-white'>
            React & Laravel CRUD App
          </Link>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row>
          <Col md={12}>
            <Routes>
              <Route exact path='/' element={<ProductList/>}/>
              <Route exact path='/product/create' element={<CreateProduct/>}/>
              <Route exact path='/product/edit/:id' element={<EditProduct/>}/>
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}

export default App
