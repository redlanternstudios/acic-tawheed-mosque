type Section = { title: string; body: string; items?: string[] };

export function SitePage({ title, intro, sections }: { title: string; intro: string; sections: Section[] }) {
  return (
    <main className="site-shell">
      <header className="header">
        <a className="brand" href="/">
          <strong>Afghan Community Islamic Center</strong>
          <span>Tawheed Mosque · San Diego</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="/visit">Visit</a>
          <a href="/learn/open-masjid">Learn</a>
          <a href="/events">Events</a>
          <a href="/about">About</a>
        </nav>
        <div className="nav-actions">
          <a className="primary-button" href="/donate">
            Donate
          </a>
        </div>
      </header>
      <section className="page-hero">
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      {sections.map((section) => (
        <section className="section" key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
          {section.items && (
            <ul className="feature-list">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
      <footer className="footer">
        <strong>Afghan Community Islamic Center</strong>
        <p>Tawheed Mosque · 3333 Sandrock Road, San Diego, CA 92123</p>
        <p>Open daily from 5:00 AM to 11:00 PM</p>
      </footer>
    </main>
  );
}
