import { useEffect, useState } from 'react';
import './App.css';
import { reviews } from './reviews';

const FACEBOOK_URL = 'https://www.facebook.com/share/1HgdWfGXxo/?mibextid=wwXIfr';

function Photo({ file, label, className = '' }) {
  const [missing, setMissing] = useState(false);
  return <div className={'photo ' + className}>
    {!missing && <img src={'/images/' + file} alt={label} onError={() => setMissing(true)} />}
    {missing && <div className="missing"><b>M.G.</b><span>Add photo: public/images/{file}</span></div>}
  </div>;
}

const Arrow = () => <span className="kunai" aria-hidden="true" />;

function ReviewCards({ duplicate = false }) {
  return <div className="review-set" aria-hidden={duplicate ? 'true' : undefined}>
    {reviews.map(({ name, text }) => <article className="review-card" key={name}>
      <b aria-hidden="true">“</b><p>{text}</p><strong>{name}</strong><small>RECOMMENDS MG COLLECTIBLES</small>
    </article>)}
  </div>;
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      if (menu || currentY < 60) setHeaderHidden(false);
      else if (currentY - lastY > 6) setHeaderHidden(true);
      else if (lastY - currentY > 6) setHeaderHidden(false);
      lastY = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menu]);
  useEffect(() => {
    const close = event => { if (event.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  useEffect(() => {
    const elements = document.querySelectorAll('.section-label, .story-grid, .feature-copy > *, .stats-grid, .delivery > *, .reviews h2, .closing .wrap > *');
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach(element => { element.classList.add('reveal'); observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  return <div>
    <header className={headerHidden && !menu ? 'is-hidden' : ''}>
      <div className="header-links" aria-label="Site sections"><a href="#story">Our Story</a><a href="#journey">Our Journey</a><a href="#community">Community</a><a href="#reviews">Reviews</a></div>
      <a className="brand" href="#top"><strong>M.G.</strong><small>COLLECTIBLES</small></a>
      <div className="header-actions">
        <button className="menu" onClick={() => setMenu(!menu)} aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} aria-controls="site-menu"><span className="menu-word">{menu ? 'CLOSE' : 'MENU'}</span><span className="menu-icon" aria-hidden="true">{menu ? '×' : '☰'}</span></button>
      </div>
      <nav className={menu ? 'open' : ''} id="site-menu" aria-label="Main navigation">
        <div className="menu-eyebrow">EXPLORE MG COLLECTIBLES</div>
        <a href="#story" onClick={() => setMenu(false)}>OUR STORY <Arrow /></a>
        <a href="#journey" onClick={() => setMenu(false)}>THE JOURNEY <Arrow /></a>
        <a href="#community" onClick={() => setMenu(false)}>COMMUNITY <Arrow /></a>
        <a href="#reviews" onClick={() => setMenu(false)}>REVIEWS <Arrow /></a>
        <a href="#contact" onClick={() => setMenu(false)}>CONTACT <Arrow /></a>
        <div className="menu-social"><span>OFFICIAL SOCIAL MEDIA</span><a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Visit MG Collectibles on Facebook">f</a></div>
      </nav>
    </header>
    <aside className="floating-social" aria-label="Official social media"><div className="floating-social-label">OFFICIAL<br />SOCIAL MEDIA</div><a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Visit MG Collectibles on Facebook">f</a></aside>
    <main id="top">
      <section className="hero"><div className="wrap hero-inner"><p className="kicker">FROM FAN TO FOUNDER <span>✦</span> EST. NOVEMBER 2025</p><h1>A STORY BUILT<br />ON <em>PASSION.</em></h1><p>From a love for Naruto figures to a community of collectors across the Philippines. This is the story behind MG Collectibles.</p><a className="button" href="#story">DISCOVER OUR STORY <Arrow /></a></div><div className="hero-mark">M.G.</div><div className="hero-foot wrap"><span>MANILA, PHILIPPINES</span><span>SCROLL TO EXPLORE ↓</span></div></section>
      <div className="ticker">AUTHENTIC COLLECTIBLES <b>✦</b> MADE FOR FANS <b>✦</b> SHIPPED NATIONWIDE <b>✦</b> AUTHENTIC COLLECTIBLES <b>✦</b> MADE FOR FANS</div>
      <section id="story" className="section wrap"><div className="section-label">THE BEGINNING</div><div className="story-grid"><h2>IT STARTED<br />WITH A <i>FAN.</i></h2><div className="prose"><p className="lead">Before MG Collectibles was a business, it was a shared love for anime.</p><p>Founded by Miko Gonio and his wife, the journey began with Miko’s love for collecting Naruto figures. That hobby grew into a passion driven business bringing authentic anime figures and collectibles from Japan to the Philippines.</p><p>Since November 2025, their mission has been simple: make the figures fans love more accessible, and make every collector feel part of the journey.</p><a className="link" href="#journey">FOLLOW THE JOURNEY <Arrow /></a></div></div></section>
      <section id="journey" className="feature"><Photo file="miko-shipping-boxes.png" label="Miko with boxes ready for shipping" /><div className="feature-copy"><div className="section-label">BEHIND EVERY PACKAGE</div><h2>PACKED WITH<br /><i>PASSION.</i></h2><p>Every box represents a collector waiting for something special. From San Andres Bukid, Manila, MG Collectibles ships nationwide so fellow fans across the Philippines can enjoy the collectibles they love.</p><div className="stamp">FROM MANILA<br />TO YOUR SHELF ↗</div></div></section>
      <section id="community" className="section stats"><img className="transition-toad toad-community" src="/images/toad-cutout.png" alt="" aria-hidden="true" /><div className="wrap"><div className="section-label">OUR COMMUNITY</div><div className="stats-grid"><div><div className="stat">1,400<span>+</span></div><div className="stat-caption">FOLLOWERS AS OF OCT 2026</div></div><div><h2>GROWING<br />TOGETHER.</h2><p>What started as one collector’s hobby has become a growing community. Every follow, message, and order is a reminder of the trust and support that keeps us going.</p></div></div></div></section>
      <section className="section delivery wrap" id="moments"><div className="delivery-copy"><div className="section-label">REAL MOMENTS</div><h2>THE JOURNEY<br />CONTINUES <i>↗</i></h2><p>From packed boxes to your display shelf, every order is part of a collector's story. Here are a few moments from behind the scenes.</p></div><div className="moments-collage"><Photo file="real-moments-shipping.jpg" label="Miko smiling beside a stack of boxed orders" className="moment-main" /><Photo file="real-moments-boxes.jpg" label="Miko giving a thumbs up beside packed shipping boxes" className="moment-overlap" /><Photo file="miko-lalamove.png" label="Miko with a delivery rider during a shipment handoff" className="moment-delivery" /><span className="moments-sticker">PACKED WITH<br />PASSION ✦</span></div></section>
      <section id="reviews" className="section reviews"><div className="wrap"><div className="section-label">WORD FROM THE COMMUNITY</div><h2>COLLECTORS<br /><i>HAVE SPOKEN.</i></h2><p className="review-hint">STORIES FROM OUR COLLECTORS · HOVER TO PAUSE</p></div><div className="review-viewport"><div className="review-track"><ReviewCards /><ReviewCards duplicate /></div></div></section>
      <section className="closing"><div className="wrap"><div className="section-label">THANK YOU FOR BEING PART OF OUR JOURNEY</div><h2>FOR THE LOVE<br />OF <em>COLLECTING.</em></h2><p>From our collection to yours — the story is only getting started.</p><a className="button" href="#contact">GET IN TOUCH <Arrow /></a></div></section>
      <section className="order-cta" id="orders"><div className="wrap order-inner"><div><div className="section-label">READY FOR YOUR NEXT FIND?</div><h2>YOUR NEXT FIGURE<br />STARTS WITH A <i>MESSAGE.</i></h2><p>Looking for an item or ready to order? Send MG Collectibles a message on Facebook and we'll help you find your next favorite piece.</p></div><a className="order-button" href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer"><span className="facebook-mark">f</span><span>MESSAGE US ON FACEBOOK</span><span aria-hidden="true">↗</span></a></div></section>
    </main>
    <footer id="contact"><div className="wrap footer-grid"><div><div className="footer-brand">M.G.<small>COLLECTIBLES</small></div><p>Authentic anime figures and collectibles from Japan to the Philippines. Built by fans, for fans.</p></div><div><h3>EXPLORE</h3><a href="#story">Our Story</a><a href="#journey">Our Journey</a><a href="#community">Community</a><a href="#reviews">Reviews</a></div><div><h3>FIND US</h3><p>San Andres Bukid, Manila<br />Philippines</p><p>Shipping nationwide</p></div><div><h3>CONNECT</h3><p>Follow MG Collectibles for updates, inquiries, and item orders.</p><a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">FACEBOOK ↗</a></div></div><div className="wrap copyright"><span>© 2026 MG COLLECTIBLES. ALL RIGHTS RESERVED.</span><span>MADE FOR COLLECTORS, BY COLLECTORS. ✦</span></div></footer>
  </div>;
}
