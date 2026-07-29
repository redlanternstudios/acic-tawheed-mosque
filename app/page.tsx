const paths = [
  "I am visiting a mosque for the first time",
  "I want to learn about Islam",
  "I recently became Muslim",
  "I want to speak with an Imam",
  "I am bringing my children",
  "I need community support",
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="header">
        <a className="brand" href="#top" aria-label="Afghan Community Islamic Center home">
          <strong>Afghan Community Islamic Center</strong>
          <span>Tawheed Mosque · San Diego</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#visit">Visit</a>
          <a href="#learn">Learn</a>
          <a href="#families">Children & Families</a>
          <a href="#community">Community</a>
          <a className="primary-button" href="#donate">Donate</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div>
          <h1>Faith. Family. Community. For Everyone.</h1>
          <p>
            Rooted in Afghan heritage and open to the entire Ummah. A welcoming place to pray,
            learn, raise children, find support, and explore Islam.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#visit">Plan Your First Visit</a>
            <a className="secondary-button" href="#prayer-times">View Prayer Times</a>
          </div>
        </div>
        <div className="hero-media" role="img" aria-label="Community illustration placeholder">
          <p>
            Production hero illustration: preserve the complete ACIC community scene with the
            Shaykh, children, women’s learning group, and diverse brothers. No dark overlay and no
            subject cropping.
          </p>
        </div>
      </section>

      <section className="utility-band" id="prayer-times" aria-label="Today at ACIC">
        <div className="utility-item"><span>Next prayer</span><strong>Prayer times coming soon</strong></div>
        <div className="utility-item"><span>Weekday learning</span><strong>After Asr to Isha</strong></div>
        <div className="utility-item"><span>Open daily</span><strong>5:00 AM to 11:00 PM</strong></div>
        <div className="utility-item"><span>Location</span><strong>3333 Sandrock Road</strong></div>
      </section>

      <section className="section" id="learn">
        <h2>Come even if you only have 30 minutes.</h2>
        <p>
          Every weekday between Asr and Isha, the mosque is open for study, questions, Qur’an,
          Arabic, and direct access to trusted Shaykhs and community teachers. Adults and children
          learn side by side, from the basics toward fluency.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="/learn/open-masjid">Explore Open Masjid</a>
          <a className="secondary-button" href="/contact">Speak With Someone</a>
        </div>
      </section>

      <section className="section alt" id="visit">
        <h2>Your first visit should feel easy.</h2>
        <p>
          You do not need to know what to say, where to stand, or what to do. Someone from the
          community will likely notice you, greet you, and help you feel comfortable.
        </p>
        <div className="path-list">
          {paths.map((path) => <a href="/visit" key={path}>{path}</a>)}
        </div>
      </section>

      <section className="section" id="families">
        <h2>Children are welcome here.</h2>
        <p>
          Children age four and above are encouraged to learn alongside their parents. Families
          can attend for as little or as long as they are able. Private instruction and childcare
          availability may be discussed by request.
        </p>
      </section>

      <section className="section alt" id="community">
        <h2>Rooted in Afghan heritage. Open to the entire Ummah.</h2>
        <p>
          Founded in 1994 to serve San Diego’s Afghan and Afghan American community, ACIC has grown
          into a place for prayer, education, cultural continuity, community support, and welcome
          for Muslims and neighbors from every background.
        </p>
      </section>

      <section className="section" id="donate">
        <h2>Support the masjid.</h2>
        <p>
          Donation methods including Apple Pay, PayPal, Cash App, Zelle, and card payments will be
          added after board approval and account verification.
        </p>
        <a className="primary-button" href="/donate">View Donation Options</a>
      </section>

      <footer className="footer">
        <strong>Afghan Community Islamic Center</strong>
        <p>Tawheed Mosque · 3333 Sandrock Road, San Diego, CA 92123</p>
        <p>Open daily from 5:00 AM to 11:00 PM</p>
      </footer>
    </main>
  );
}
