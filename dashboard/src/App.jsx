import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Products from './pages/Products'
import Customers from './pages/Customers'
import CustomerDetail from './pages/CustomerDetail'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/:id" element={<CustomerDetail />} />
      </Routes>
    </Router>
  )
}

export default App
