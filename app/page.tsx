const visitPaths = [
  ["First time at a mosque", "Know where to enter, what to wear, and what to expect."],
  ["Exploring Islam", "Come with questions. No pressure and no prior knowledge required."],
  ["Bringing children", "Families and children age four and above are welcome to learn together."],
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="header">
        <a className="brand" href="#top" aria-label="Afghan Community Islamic Center home">
          <span className="brand-mark" aria-hidden="true">ACIC</span>
          <span className="brand-copy">
            <strong>Afghan Community Islamic Center</strong>
            <small>Tawheed Mosque · San Diego</small>
          </span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="/visit">Visit</a>
          <a href="/learn/open-masjid">Learn</a>
          <a href="/community">Community</a>
          <a href="/events">Events</a>
          <a className="primary-button nav-cta" href="/donate">Donate</a>
        </nav>
        <a className="mobile-menu" href="/visit" aria-label="Open visitor information">Menu</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Serving San Diego since 1994</p>
          <h1>A masjid where your family can grow.</h1>
          <p className="hero-lead">
            Rooted in Afghan hospitality and open to the entire Ummah. Come to pray, learn,
            ask questions, bring your children, or simply find community.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="/visit">Plan your first visit</a>
            <a className="text-link" href="/visit/prayer-times">View prayer times <span>→</span></a>
          </div>
          <div className="trust-row" aria-label="Mosque highlights">
            <span>Open daily</span><span>Family learning</span><span>English · Dari · Arabic</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Tawheed Mosque community illustration area">
          <div className="visual-glow" />
          <div className="arch arch-one" />
          <div className="arch arch-two" />
          <div className="community-card">
            <p className="card-kicker">Today at Tawheed Mosque</p>
            <strong>Open Masjid</strong>
            <p>Weekdays after Asr until Isha</p>
            <div className="card-rule" />
            <p>Adults and children learn side by side.</p>
          </div>
          <div className="visual-note">Approved community illustration will replace this art panel without changing the layout.</div>
        </div>
      </section>

      <section className="today-strip" aria-label="Today at ACIC">
        <div><span>Open daily</span><strong>5:00 AM–11:00 PM</strong></div>
        <div><span>Weekday learning</span><strong>After Asr until Isha</strong></div>
        <div><span>Address</span><strong>3333 Sandrock Road</strong></div>
      </section>

      <section className="intro-section" id="learn">
        <div className="section-label">Open Masjid</div>
        <div>
          <h2>Come for prayer. Stay to learn. Even for 30 minutes.</h2>
          <p>Every weekday, trusted Shaykhs and community teachers are available for Qur’an, Arabic, questions, and steady learning from the basics toward fluency.</p>
          <a className="text-link" href="/learn/open-masjid">Explore weekday learning <span>→</span></a>
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-heading">
          <p className="eyebrow light">New here?</p>
          <h2>Your first visit should feel easy.</h2>
          <p>You do not need to know what to say, where to stand, or what to do. Someone will help you feel comfortable.</p>
        </div>
        <div className="visit-grid">
          {visitPaths.map(([title, body]) => (
            <a className="visit-card" href="/visit" key={title}>
              <span>01</span>
              <strong>{title}</strong>
              <p>{body}</p>
              <b>Learn more →</b>
            </a>
          ))}
        </div>
      </section>

      <section className="family-section">
        <div className="family-copy">
          <p className="eyebrow">Children & families</p>
          <h2>Learning belongs in family life.</h2>
          <p>Children age four and above are encouraged to learn alongside their parents. Families can attend for as little or as long as they are able.</p>
          <a className="primary-button" href="/learn/children-families">Explore family learning</a>
        </div>
        <div className="family-stat"><strong>4+</strong><span>Children welcomed into learning</span></div>
      </section>

      <section className="community-section">
        <p className="eyebrow light">Our community</p>
        <h2>Afghan roots. A home for the whole Ummah.</h2>
        <p>ACIC carries the warmth, language, and hospitality of Afghan community life while welcoming Muslims and neighbors from every background.</p>
        <a className="text-link light-link" href="/community">Discover our community <span>→</span></a>
      </section>

      <section className="donate-section">
        <div>
          <p className="eyebrow">Support the masjid</p>
          <h2>Help keep the doors open for every prayer, child, and visitor.</h2>
        </div>
        <a className="primary-button" href="/donate">View donation options</a>
      </section>

      <footer className="footer">
        <div><strong>Afghan Community Islamic Center</strong><p>Tawheed Mosque · San Diego</p></div>
        <div><p>3333 Sandrock Road<br />San Diego, CA 92123</p></div>
        <div><p>Open daily<br />5:00 AM–11:00 PM</p></div>
      </footer>
    </main>
  );
}
