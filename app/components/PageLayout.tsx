import Link from "next/link";
import { SiteChrome } from "./SiteChrome";
import type { PageContent } from "../site-content";

export function PageLayout({
  activeSlug,
  content,
}: Readonly<{
  activeSlug: string;
  content: PageContent;
}>) {
  return (
    <SiteChrome activeSlug={activeSlug}>
      <main className="page page-route">
        <section className="page-hero">
          <div className="crumbs">Home / {content.eyebrow}</div>
          <h1>{content.title}</h1>
          <p className="lead">{content.lead}</p>
          <div className="hero-actions">
            {content.actions.map((action) => (
              <Link key={action.href} className={action.variant === "primary" ? "button primary" : "button secondary"} href={action.href}>
                {action.label}
              </Link>
            ))}
          </div>
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
