import Link from "next/link";
import { SiteChrome } from "./components/SiteChrome";

export default function NotFound() {
  return (
    <SiteChrome activeSlug="home">
      <main className="page page-route">
        <section className="page-hero">
          <div className="crumbs">Home / Not found</div>
          <h1>That screen is not here yet.</h1>
          <p className="lead">
            Use the navigation to get back to prayer, classes, visitors, or the home page.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/">
              Back home
            </Link>
            <Link className="button secondary" href="/prayer">
              Prayer times
            </Link>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
