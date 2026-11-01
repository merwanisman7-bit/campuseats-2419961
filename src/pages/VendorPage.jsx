import { Link, useParams, useSearchParams } from 'react-router'
import { useVendors } from '../hooks/useVendors.js'
import CategoryFilter from '../components/CategoryFilter.jsx'
import MenuList from '../components/MenuList.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

function VendorPage() {
  const { id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const { vendors, loading, error, reload } = useVendors()

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
  const requested = searchParams.get('cat')
  const active = categories.includes(requested) ? requested : 'All'
  const visibleItems =
    active === 'All'
      ? vendor.menu
      : vendor.menu.filter((item) => item.category === active)

  function handleSelectCategory(category) {
    if (category === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ cat: category })
    }
  }

  return (
    <>
      <p><Link to="/">← All vendors</Link></p>
      <h2 className="section-title">{vendor.name}</h2>
      <p className="muted">{vendor.location} · {vendor.openHours}</p>
      <CategoryFilter
        categories={categories}
        active={active}
        onSelect={handleSelectCategory}
      />
      <MenuList items={visibleItems} />
    </>
  )
}

export default VendorPage
