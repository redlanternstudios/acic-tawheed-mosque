import { notFound } from "next/navigation";
import { PageLayout } from "../components/PageLayout";
import { SiteChrome } from "../components/SiteChrome";
import { routePages } from "../site-content";

export function generateStaticParams() {
  return Object.keys(routePages).map((slug) => ({ slug }));
}

export default function DynamicPage({ params }: Readonly<{ params: { slug: string } }>) {
  const content = routePages[params.slug];

  if (!content) {
    notFound();
  }

  if (params.slug === "login") {
    return (
      <SiteChrome activeSlug="login">
        <main className="page login-page">
          <section className="login-stage">
            <div className="login-copy">
              <span className="eyebrow">{content.eyebrow}</span>
              <h1>{content.title}</h1>
              <p className="lead">{content.lead}</p>
              <div className="hero-actions">
                {content.actions.map((action) => (
                  <a
                    key={action.href}
                    className={action.variant === "primary" ? "button primary" : "button secondary"}
                    href={action.href}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
            <form className="login-panel">
              <label>
                Username
                <input type="text" name="username" placeholder="Member ID or email" />
              </label>
              <label>
                Password
                <input type="password" name="password" placeholder="Enter your password" />
              </label>
              <button className="button primary" type="submit">
                Sign in
              </button>
            </form>
          </section>

          <section className="section grid-3 route-panels">
            {content.panels.map((panel) => (
              <article className="feature-card" key={panel.title}>
                <h3>{panel.title}</h3>
                <p>{panel.body}</p>
              </article>
            ))}
          </section>

          {content.sections.map((section) => (
            <section className="section split route-section" key={section.title}>
              <div className="section-copy">
                <span className="eyebrow">{content.eyebrow}</span>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.bullets ? (
                  <ul className="feature-list">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              {section.cards ? (
                <div className="grid-3 route-cards">
                  {section.cards.map((card) => (
                    <article className="info-card" key={card.title}>
                      <h3>{card.title}</h3>
                      <p>{card.body}</p>
                    </article>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </main>
      </SiteChrome>
    );
  }

  return <PageLayout activeSlug={params.slug} content={content} />;
}
