import { useState } from 'react'
import { useVendors } from './hooks/useVendors.js'
import { CartProvider } from './context/CartProvider.jsx'
import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'
import CategoryFilter from './components/CategoryFilter.jsx'
import MenuList from './components/MenuList.jsx'
import CartPage from './components/CartPage.jsx'
import Footer from './components/Footer.jsx'
import { Loading, ErrorMessage } from './components/Status.jsx'

function App() {
  const { vendors, loading, error, reload } = useVendors()
  const [selectedVendorId, setSelectedVendorId] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [view, setView] = useState('menu')
  const [lastOrder, setLastOrder] = useState(null)

  function handleSelectVendor(vendorId) {
    setSelectedVendorId(vendorId)
    setSelectedCategory('All')
  }

  function handleOrderPlaced(order) {
    setLastOrder(order)
    setView('done')
  }

  const selectedVendor = vendors.find((v) => v.id === selectedVendorId) ?? vendors[0]

  let content
  if (view === 'cart') {
    content = <CartPage onOrderPlaced={handleOrderPlaced} />
  } else if (view === 'done') {
    content = lastOrder && (
      <div className="card">
        <h2>Order placed</h2>
        <p>
          Thanks, {lastOrder.name}! Pick up at {lastOrder.pickupTime} from Mahallah{' '}
          {lastOrder.mahallah}.
        </p>
        <p className="cart-total">Total: RM {lastOrder.total.toFixed(2)}</p>
      </div>
    )
  } else if (loading) {
    content = <Loading />
  } else if (error) {
    content = <ErrorMessage message={error} onRetry={reload} />
  } else {
    const categories = ['All', ...new Set(selectedVendor.menu.map((item) => item.category))]
    const visibleItems =
      selectedCategory === 'All'
        ? selectedVendor.menu
        : selectedVendor.menu.filter((item) => item.category === selectedCategory)

    content = (
      <>
        <section>
          <h2 className="section-title">Choose a vendor</h2>
          <div className="vendor-grid">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                isSelected={vendor.id === selectedVendor.id}
                onSelect={handleSelectVendor}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="section-title">Menu: {selectedVendor.name}</h2>
          <CategoryFilter
            categories={categories}
            active={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <MenuList items={visibleItems} />
        </section>
      </>
    )
  }

  return (
    <CartProvider>
      <Header onShowMenu={() => setView('menu')} onShowCart={() => setView('cart')} />
      <main className="container">{content}</main>
      <Footer />
    </CartProvider>
  )
}

export default App
