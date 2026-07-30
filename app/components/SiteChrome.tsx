import Link from "next/link";
import { navItems } from "../site-content";

export function SiteChrome({
  activeSlug,
  children,
}: Readonly<{
  activeSlug: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="shell">
      <div className="noise" aria-hidden="true" />
      <header className="topbar">
        <div className="topbar-inner">
          <Link className="brand" href="/" aria-label="Afghan Community Islamic Center home">
            <span className="brand-mark">A</span>
            <span className="brand-copy">
              <span className="brand-name">Afghan Community Islamic Center</span>
              <span className="brand-sub">Tawheed Mosque - San Diego</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                aria-current={activeSlug === item.slug ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <Link className="button secondary login-link" href="/login">
              Login
            </Link>
          </div>
        </div>

        <details className="mobile-menu">
          <summary className="menu-btn">Menu</summary>
          <div className="mobile-menu-inner">
            {navItems.map((item) => (
              <Link key={item.slug} href={item.href} aria-current={activeSlug === item.slug ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
            <Link className="button primary mobile-login" href="/login">
              Login
            </Link>
          </div>
        </details>
      </header>

      {children}

      <footer className="footer">
        <div>
          <strong>Afghan Community Islamic Center</strong>
          <p>Tawheed Mosque - San Diego</p>
        </div>
        <div>
          <p>Rooted in Afghan heritage and open to the entire Ummah.</p>
          <p>Open daily with prayer, learning, family, and community support.</p>
        </div>
        <p>Copyright (c) <span data-year /></p>
      </footer>
    </div>
  );
}
