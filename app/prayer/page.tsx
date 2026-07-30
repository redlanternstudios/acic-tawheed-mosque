import { SiteChrome } from "../components/SiteChrome";
import { PrayerClock } from "../components/PrayerClock";

export default function PrayerPage() {
  return (
    <SiteChrome activeSlug="prayer">
      <main className="page page-route">
        <section className="hero prayer-hero">
          <div className="hero-copy">
            <span className="eyebrow">Prayer</span>
            <h1>A prayer board that feels alive.</h1>
            <p className="lead">
              The clock rolls forward in real time so people can see what is happening now, what is
              coming next, and how long remains before the next prayer.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="/visitors">
                First-time visitor guide
              </a>
              <a className="button secondary" href="/schedule">
                Weekly schedule
              </a>
            </div>
          </div>
          <div className="hero-aside">
            <PrayerClock />
          </div>
        </section>

        <section className="section grid-3 route-panels">
          <article className="feature-card">
            <h3>Current prayer</h3>
            <p>The active prayer should always be visible, not hidden in a static table.</p>
          </article>
          <article className="feature-card">
            <h3>Countdown</h3>
            <p>Every second counts down to the next prayer in a way people can actually watch.</p>
          </article>
          <article className="feature-card">
            <h3>Visitor guidance</h3>
            <p>Clear etiquette, calm language, and a welcoming tone for first-time guests.</p>
          </article>
        </section>

        <section className="section split route-section">
          <div className="section-copy">
            <span className="eyebrow">Prayer rhythm</span>
            <h2>Use the board to orient the whole day.</h2>
            <p>
              The prayer page should give members and visitors the same immediate answer: what is
              happening now, what comes next, and how to plan the rest of the day around it.
            </p>
            <ul className="feature-list">
              <li>Fajr, Dhuhr, Asr, Maghrib, and Isha all stay visible.</li>
              <li>The active row should highlight the current prayer window.</li>
              <li>The board should update automatically without a page refresh.</li>
            </ul>
          </div>
          <div className="grid-3 route-cards">
            <article className="info-card">
              <h3>Jummah</h3>
              <p>Keep Friday clear and obvious so no one has to guess.</p>
            </article>
            <article className="info-card">
              <h3>Adab</h3>
              <p>Arrival guidance should stay simple, respectful, and calm.</p>
            </article>
            <article className="info-card">
              <h3>Direction</h3>
              <p>Prayer should lead people back into the rest of the site, not trap them here.</p>
            </article>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
