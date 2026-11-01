import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <div className="card">
      <h2>404</h2>
      <p className="muted">There is no page at this address.</p>
      <Link to="/">Back to vendors</Link>
    </div>
  )
}

export default NotFoundPage