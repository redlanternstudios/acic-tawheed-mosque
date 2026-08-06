import Link from "next/link";
import { SiteChrome } from "@/app/components/SiteChrome";

type Section = { title: string; body: string; items?: string[] };

export function SitePage({ title, intro, sections }: { title: string; intro: string; sections: Section[] }) {
  return <SiteChrome activeSlug="visit"><main className="page page-route">
    <section className="page-hero"><span className="crumbs">ACIC / Community</span><h1>{title}</h1><p className="lead">{intro}</p><div className="hero-actions"><Link className="button primary" href="/contact">Contact us</Link><Link className="button secondary" href="/prayer">Prayer times</Link></div></section>
    <section className="section grid-3 route-panels"><article className="feature-card"><h3>Welcoming</h3><p>A calm, clear path for members, families, and first-time visitors.</p></article><article className="feature-card"><h3>Community-led</h3><p>Verified details and human follow-up stay at the center.</p></article><article className="feature-card"><h3>Open to all</h3><p>Rooted in Afghan heritage and welcoming to the entire Ummah.</p></article></section>
    {sections.map((section) => <section className="section split route-section" key={section.title}><div className="section-copy"><span className="eyebrow">ACIC</span><h2>{section.title}</h2><p>{section.body}</p>{section.items ? <ul className="feature-list">{section.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}</div><div className="panel"><span className="kicker">A clear next step</span><h3>We are here to help.</h3><p>Questions are welcome. Reach out to the mosque and a community member will help route your request.</p><Link className="button primary" href="/contact">Get directions</Link></div></section>)}
  </main></SiteChrome>;
}
