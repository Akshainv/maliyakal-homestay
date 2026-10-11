import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFoundPage() {
  return (
    <main id="main" className="notfound">
      <Seo path="/404" title="Page not found | Maliyakal Homestay" description="This page could not be found." noindex />
      <div className="container container--narrow">
        <p className="eyebrow">Error 404</p>
        <h1 className="h2">This page <em>could not be found</em></h1>
        <p className="body body--center">The page you are looking for may have moved. Head back to the homestay.</p>
        <Link className="btn btn--primary" to="/">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
