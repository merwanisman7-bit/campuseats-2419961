import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { useVendors } from '../hooks/useVendors.js'
import CategoryFilter from '../components/CategoryFilter.jsx'
import MenuList from '../components/MenuList.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

function VendorPage() {
  const { id } = useParams()
  const { vendors, loading, error, reload } = useVendors()
  const [category, setCategory] = useState('All')

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  const vendor = vendors.find((v) => v.id === id)

  if (!vendor) {
    return (
      <div className="card">
        <h2>Vendor not found</h2>
        <p className="muted">There is no vendor with the id "{id}".</p>
        <Link to="/">Back to vendors</Link>
      </div>
    )
  }

  const categories = ['All', ...new Set(vendor.menu.map((item) => item.category))]
  const visibleItems =
    category === 'All'
      ? vendor.menu
      : vendor.menu.filter((item) => item.category === category)

  return (
    <>
      <p><Link to="/">← All vendors</Link></p>
      <h2 className="section-title">{vendor.name}</h2>
      <p className="muted">{vendor.location} · {vendor.openHours}</p>
      <CategoryFilter categories={categories} active={category} onSelect={setCategory} />
      <MenuList items={visibleItems} />
    </>
  )
}

export default VendorPage