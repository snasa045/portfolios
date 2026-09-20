import { Link } from 'react-router-dom';

/** Content stays independent of the requested URL so the prerendered 404 hydrates cleanly. */
export default function NotFound() {
  return (
    <section className="section notfound">
      <h1>Page not found</h1>
      <p>That page doesn’t exist, or it has moved.</p>
      <Link className="btn btn-primary" to="/">
        Back to work
      </Link>
    </section>
  );
}
