import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import CustomerDetail from './pages/CustomerDetail'
import NewCustomer from './pages/NewCustomer'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import NewProduct from './pages/NewProduct'
import Login from './pages/Login'
import { useSelector } from 'react-redux'

const App = () => {
  const token = useSelector(store => store.reducer.user.loggedInUser?.accessToken)
  const isAdmin = useSelector(store => store.reducer.user.loggedInUser?.isAdmin)

  return (
    <>
      {(!token || isAdmin === false) ? <Login /> : (

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/:id" element={<CustomerDetail />} />
            <Route path="/customers/new" element={<NewCustomer />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/products/new" element={<NewProduct />} />
          </Routes>
        </Router>
      )}
    </>
  )
}

export default App
