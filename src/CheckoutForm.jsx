
function CheckoutForm({ onPlaceOrder }) {
  return (
    <div className="card">
      <h3>Checkout</h3>
      <button
        type="button"
        className="btn"
        onClick={() => onPlaceOrder({ name: 'Test', mahallah: 'Ali', pickupTime: '12:00' })}
      >
        Place order (temporary)
      </button>
    </div>
  )
}

export default CheckoutForm