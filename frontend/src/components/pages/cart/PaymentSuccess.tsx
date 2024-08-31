import { Link } from 'react-router-dom'
import './payment-success.scss'

export const PaymentSuccess = () => {
  return (
    <section className="paymentsuccess">
      <main>
        <h1>Order Confirmed</h1>
        <p>Order Placed Successfully, You can check order status below</p>
        <Link to="/my-orders">Check Status</Link>
      </main>
    </section>
  )
}