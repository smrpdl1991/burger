import "@/index.scss";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Home, Contact } from "./components/pages";
import { PageLayout } from "./components/layout";
import Cart from "./components/pages/cart/Cart";
import { Shipping } from "./components/pages/cart/Shipping";
import { ConfirmOrder } from "./components/pages/cart/ConfirmOrder";
import { PaymentSuccess } from "./components/pages/cart/PaymentSuccess";
import Login from "./components/pages/login/Login";
import Profile from "./components/pages/profile/Profile";
import MyOrders from "./components/pages/my-orders/MyOrders";
import OrderDetails from "./components/pages/my-orders/OrderDetails";
import Dashboard from "./components/pages/admin/Dashboard";
import Orders from "./components/pages/admin/Orders";
import Users from "./components/pages/admin/Users";
import About from "./components/pages/about/About";
import NotFound from "./components/pages/page-not-found/PageNotFound";

function App() {
  return (
    <div className='app'>
      <Router>
          <PageLayout pageTitle="page">
            <Routes>
                <Route path={`/`} element={<Home />}></Route>
                <Route path={`/contact`} element={<Contact />}></Route>
                <Route path={`/cart`} element={<Cart />}></Route>
                <Route path="/shipping" element={<Shipping />}></Route>
                <Route path="/confirm-order" element={<ConfirmOrder />}></Route>
                <Route path="/payment-success" element={<PaymentSuccess />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/my-orders" element={<MyOrders />}></Route>
                <Route path="/my-orders/:id" element={<OrderDetails />}></Route>
                <Route path="/admin" element={< Dashboard/>}></Route>
                <Route path="/admin/orders" element={<Orders />}></Route>
                <Route path="/admin/users" element={<Users />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
          </PageLayout>
      </Router>
    </div>
  )
}

export default App
