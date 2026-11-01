import { useCart } from '../hooks/useCart.js'

function OrdersPage() {
  const { orders } = useCart()

  if (orders.length === 0) {
    return <p className="muted">No orders yet.</p>
  }

  return (
    <section>
      <h2 className="section-title">My orders</h2>
      <ul className="cart-list">
        {orders.map((order) => (
          <li key={order.id} className="card">
            <p className="cart-name">
              Pick up at {order.pickupTime} from Mahallah {order.mahallah}
            </p>
            <p className="muted">
              Placed {new Date(order.placedAt).toLocaleString()} for {order.name}
            </p>
            <ul>
              {order.lines.map((line) => (
                <li key={line.item.id}>
                  {line.qty} × {line.item.name}
                </li>
              ))}
            </ul>
            <p className="cart-total">Total: RM {order.total.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OrdersPage