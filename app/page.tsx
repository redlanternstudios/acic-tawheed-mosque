import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, HeartHandshake, MapPin, MessageCircleQuestion, UsersRound } from "lucide-react";
import { PrayerClock } from "./components/PrayerClock";
import { SiteChrome } from "./components/SiteChrome";

const explore = [
  ["Visit Guide", "Plan a comfortable first visit.", MapPin, "/visit"],
  ["Classes & Learning", "Grow at every stage.", BookOpen, "/learn"],
  ["Events", "Stay close to the community.", CalendarDays, "/events"],
  ["Children & Families", "A home for every generation.", UsersRound, "/community"],
  ["Support", "Find a human path to help.", HeartHandshake, "/community/support"],
  ["Donate", "Give with purpose.", HeartHandshake, "/donate"],
  ["Media", "Watch, learn, and stay connected.", BookOpen, "/media"],
  ["Leadership", "Meet the people serving.", UsersRound, "/about"],
];

export default function HomePage() {
  return <SiteChrome activeSlug="home"><main className="page page-home">
    <section className="hero hero-home">
      <div className="hero-copy"><span className="eyebrow">A home for prayer, family, and community</span><h1>A masjid where your family can grow.</h1><p className="lead">Rooted in Afghan heritage and open to the entire Ummah, ACIC Tawheed Mosque welcomes you with warmth, clarity, and a place to belong.</p><div className="hero-actions"><Link className="button primary" href="/visit">Plan your visit</Link><Link className="button secondary" href="/prayer">View prayer times</Link></div></div>
      <div className="hero-art" role="img" aria-label="A quiet architectural welcome for ACIC Tawheed Mosque"><span className="hero-art-label">A welcoming place to return to.</span></div>
    </section>

    <section className="section" style={{ paddingTop: 18 }}><div className="section-head"><div><span className="eyebrow">Today at ACIC</span><h2>Make room for what matters.</h2></div><p>Prayer, learning, and the small moments that bring a community together.</p></div><div className="split"><PrayerClock compact /><div className="panel"><span className="kicker">Next at the masjid</span><h3>Open Masjid Learning</h3><p>Come by for questions, reading, and direct access to teachers. Beginners and returning learners are welcome.</p><div className="hero-actions"><Link className="button primary" href="/learn">Explore learning</Link><Link className="button secondary" href="/events">See what&apos;s happening</Link></div></div></div></section>

    <section className="section" style={{ paddingTop: 24 }}><div className="section-head"><div><span className="eyebrow">Explore ACIC</span><h2>Find your place.</h2></div><p>One clear next step for every member, family, visitor, and neighbor.</p></div><div className="grid-3">{explore.map(([title, body, Icon, href]) => { const ItemIcon = Icon as typeof MapPin; return <Link className="feature-card" href={href as string} key={title as string}><ItemIcon aria-hidden="true" /><h3>{title as string}</h3><p>{body as string}</p><ArrowRight aria-hidden="true" /></Link>; })}</div></section>

    <section className="section split"><div><span className="eyebrow">First time here?</span><h2>You are welcome before you know what to do.</h2><p>No one should have to know mosque etiquette before they arrive. Come as you are, ask a question, observe, or stay for prayer.</p><Link className="button primary" href="/visit">What to expect <ArrowRight data-icon="inline-end" /></Link></div><div className="quote"><strong>“A place for every generation.”</strong><p>Children, parents, elders, and visitors all have a place in the rhythm of the masjid.</p></div></section>

    <section className="section"><div className="section-head"><div><span className="eyebrow">Learning for every age</span><h2>Every step of learning belongs here.</h2></div><p>Start small, keep it clear, and make the next lesson obvious.</p></div><div className="grid-3"><article className="feature-card"><BookOpen aria-hidden="true" /><h3>Quran & Arabic</h3><p>Connect with the Quran, Arabic, and lifelong learning.</p><Link className="small" href="/learn">Learn more <ArrowRight data-icon="inline-end" /></Link></article><article className="feature-card"><UsersRound aria-hidden="true" /><h3>Children & Families</h3><p>Programs and support for parents to help children grow together.</p><Link className="small" href="/community">Find family space <ArrowRight data-icon="inline-end" /></Link></article><article className="feature-card"><MessageCircleQuestion aria-hidden="true" /><h3>Ask the Mosque</h3><p>Have a question? We will help route you to the right person.</p><Link className="small" href="/contact">Ask a question <ArrowRight data-icon="inline-end" /></Link></article></div></section>

    <section className="section" style={{ paddingTop: 24 }}><div className="quote"><span className="eyebrow">Support your masjid</span><strong>Every contribution builds a stronger community.</strong><p>Give with purpose and help keep a welcoming home for prayer, learning, and family.</p><Link className="button primary" href="/donate">Support ACIC</Link></div></section>
  </main></SiteChrome>;
}
