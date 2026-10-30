import Link from "next/link";
import { navItems } from "../site-content";

export function SiteChrome({ activeSlug, children }: Readonly<{ activeSlug: string; children: React.ReactNode }>) {
  const year = new Date().getFullYear();
  return (
    <div className="shell">
      <div className="noise" aria-hidden="true" />
      <header className="topbar">
        <div className="topbar-inner">
          <Link className="brand" href="/" aria-label="ACIC Tawheed Mosque home">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span className="brand-copy"><span className="brand-name">Afghan Community</span><span className="brand-sub">Tawheed Mosque</span></span>
          </Link>
          <nav className="nav" aria-label="Primary">
            {navItems.map((item) => <Link key={item.slug} href={item.href} aria-current={activeSlug === item.slug ? "page" : undefined}>{item.label}</Link>)}
          </nav>
          <div className="nav-actions"><span className="language"><strong>EN</strong> / دَری</span><Link className="button primary" href="/donate">Donate</Link><details className="mobile-menu"><summary className="menu-btn">Menu</summary><div className="mobile-menu-inner">{navItems.map((item) => <Link key={item.slug} href={item.href}>{item.label}</Link>)}<Link className="button primary mobile-login" href="/donate">Donate</Link></div></details></div>
        </div>
      </header>
      {children}
      <footer className="footer">
        <div><strong>ACIC Tawheed Mosque</strong><p>Afghan Community Islamic Center</p><p>San Diego, California</p></div>
        <div><b>Visit</b><p>Open daily for prayer and community.</p><p>Everyone is welcome.</p></div>
        <div><b>Explore</b><Link href="/visit">Plan your visit</Link><Link href="/prayer">Prayer times</Link><Link href="/contact">Contact us</Link></div>
        <div><b>Support</b><p>Help keep a welcoming home for the Ummah.</p><Link className="button primary" href="/donate">Support the masjid</Link></div>
        <div><p>© {year} ACIC</p></div>
      </footer>
    </div>
  );
}
