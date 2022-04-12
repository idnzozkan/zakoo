import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Orders from './pages/Orders'
import OrderDetail from './pages/OrderDetail/OrderDetail'
import Customers from './pages/Customers'
import CustomerDetail from './pages/CustomerDetail'
import NewCustomer from './pages/NewCustomer'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import NewProduct from './pages/NewProduct'
import Login from './pages/Login'
import { useSelector } from 'react-redux'

const App = () => {
  const isLoading = useSelector(state => state?.auth?.isLoading)
  const user = useSelector(state => state?.auth?.loggedInUser)
  const token = user?.accessToken
  const isAdmin = user?.isAdmin

  if (!token || isAdmin === false) {
    return <Login />
  }

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h1>Please Wait...</h1>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/:id" element={<CustomerDetail />} />
        <Route path="/customers/new" element={<NewCustomer />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/new" element={<NewProduct />} />
      </Routes>
    </Router>
  )
}

export default App
