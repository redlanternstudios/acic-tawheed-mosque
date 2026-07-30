import Link from "next/link";
import { PrayerClock } from "./components/PrayerClock";
import { SiteChrome } from "./components/SiteChrome";
import { homeScreens } from "./site-content";

const pillars = [
  { title: "1994", body: "Community founded with a shared purpose." },
  { title: "2008", body: "Permanent San Diego home." },
  { title: "Family first", body: "Children, parents, and elders all belong here." },
  { title: "Easy to use", body: "Prayer, events, classes, and support stay visible." },
];

export default function HomePage() {
  return (
    <SiteChrome activeSlug="home">
      <main className="page page-home">
        <section className="hero hero-home">
          <div className="hero-copy">
            <span className="eyebrow">Serving San Diego with Afghan hospitality</span>
            <h1>A masjid where your family can grow.</h1>
            <p className="lead">
              Rooted in Afghan heritage and open to the entire Ummah, ACIC is built to feel calm,
              easy to navigate, and welcoming from the first tap.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/prayer">
                View prayer
              </Link>
              <Link className="button secondary" href="/classes">
                Explore classes
              </Link>
              <Link className="button secondary" href="/contact">
                Visit us
              </Link>
            </div>
          </div>
          <div className="hero-aside">
            <PrayerClock compact />
          </div>
        </section>

        <section className="hero-strip">
          {pillars.map((pillar) => (
            <article className="tile" key={pillar.title}>
              <div className="kicker">{pillar.title}</div>
              <strong>{pillar.body}</strong>
            </article>
          ))}
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <span className="eyebrow">Why this feels different</span>
              <h2>Built like a real site, not a landing page.</h2>
              <p>
                Every major action has its own route so people can get what they need without
                hunting through one long scroll.
              </p>
            </div>
          </div>
          <div className="grid-3">
            <article className="feature-card">
              <h3>Prayer</h3>
              <p>Daily prayer information, visitor guidance, and the etiquette first-time guests need.</p>
              <div className="feature-meta">
                <span><span className="dot" /> Live prayer board slot</span>
                <span><span className="dot" /> Directions and parking</span>
                <span><span className="dot" /> Visitor-friendly guidance</span>
              </div>
            </article>
            <article className="feature-card">
              <h3>Classes</h3>
              <p>Arabic, Farsi, Quran, and family learning organized in one place.</p>
              <div className="feature-meta">
                <span><span className="dot" /> Weeknight learning</span>
                <span><span className="dot" /> Youth and beginner friendly</span>
                <span><span className="dot" /> Revert welcome</span>
              </div>
            </article>
            <article className="feature-card">
              <h3>Resources</h3>
              <p>Quran links, books, marriage help, prayer notes, and forms get a proper library feel.</p>
              <div className="feature-meta">
                <span><span className="dot" /> Resource center layout</span>
                <span><span className="dot" /> Clear categories</span>
                <span><span className="dot" /> Easy mobile access</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section split">
          <div className="quote">
            <strong>What the site should feel like</strong>
            <p>
              Warm, reverent, family-centered, and calm. Afghan hospitality, Islamic geometry, and
              Apple-level clarity should all show up at once.
            </p>
          </div>
          <div className="panel">
            <h3>At a glance</h3>
            <div className="mini-list">
              <span><span className="dot" /> Established in 1994</span>
              <span><span className="dot" /> Permanent location since 2008</span>
              <span><span className="dot" /> Open to the entire Ummah</span>
              <span><span className="dot" /> Children, elders, and visitors welcome</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <span className="eyebrow">More screens in the system</span>
              <h2>These pages give the site room to breathe.</h2>
              <p>
                The homepage should act like a gateway into the rest of the experience, not the
                whole experience.
              </p>
            </div>
          </div>
          <div className="screen-grid">
            {homeScreens.map((screen) => (
              <Link className="screen-card" href={screen.href} key={screen.title}>
                <h3>{screen.title}</h3>
                <p>{screen.body}</p>
                <div className="small">Open the screen</div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
