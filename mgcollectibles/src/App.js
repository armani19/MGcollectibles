import { useEffect, useState } from 'react';
import './App.css';
import { reviews } from './reviews';

function Photo({ file, label, className = '' }) {
  const [missing, setMissing] = useState(false);
  return <div className={'photo ' + className}>
    {!missing && <img src={'/images/' + file} alt={label} onError={() => setMissing(true)} />}
    {missing && <div className="missing"><b>M.G.</b><span>Add photo: public/images/{file}</span></div>}
  </div>;
}

const Arrow = () => <span aria-hidden="true">━━➤</span>;

function ReviewCards({ duplicate = false }) {
  return <div className="review-set" aria-hidden={duplicate ? 'true' : undefined}>
    {reviews.map(({ name, text }) => <article className="review-card" key={name}>
      <b aria-hidden="true">“</b><p>{text}</p><strong>{name}</strong><small>RECOMMENDS MG COLLECTIBLES</small>
    </article>)}
  </div>;
}

export default function App() {
  const [menu, setMenu] = useState(false);
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
    <header>
      <a className="brand" href="#top"><strong>M.G.</strong><small>COLLECTIBLES</small></a>
      <nav className={menu ? 'open' : ''}>
        <a href="#story" onClick={() => setMenu(false)}>◉<span>OUR STORY</span></a>
        <a href="#journey" onClick={() => setMenu(false)}>✦<span>JOURNEY</span></a>
        <a href="#community" onClick={() => setMenu(false)}>✺<span>COMMUNITY</span></a>
        <a href="#reviews" onClick={() => setMenu(false)}>❝<span>REVIEWS</span></a>
        <a href="#contact" onClick={() => setMenu(false)}>➤<span>CONTACT</span></a>
      </nav>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu}>{menu ? '✕' : '☰'}</button>
    </header>
    <main id="top">
      <section className="hero"><div className="wrap hero-inner"><p className="kicker">FROM FAN TO FOUNDER <span>✦</span> EST. NOVEMBER 2025</p><h1>A STORY BUILT<br />ON <em>PASSION.</em></h1><p>From a love for Naruto figures to a community of collectors across the Philippines. This is the story behind MG Collectibles.</p><a className="button" href="#story">DISCOVER OUR STORY <Arrow /></a></div><div className="hero-mark">M.G.</div><div className="hero-foot wrap"><span>MANILA, PHILIPPINES</span><span>SCROLL TO EXPLORE ↓</span></div></section>
      <div className="ticker">AUTHENTIC COLLECTIBLES <b>✦</b> MADE FOR FANS <b>✦</b> SHIPPED NATIONWIDE <b>✦</b> AUTHENTIC COLLECTIBLES <b>✦</b> MADE FOR FANS</div>
      <section id="story" className="section wrap"><div className="section-label">01 / THE BEGINNING</div><div className="story-grid"><h2>IT STARTED<br />WITH A <i>FAN.</i></h2><div className="prose"><p className="lead">Before MG Collectibles was a business, it was a shared love for anime.</p><p>Founded by Miko Gonio and his wife, the journey began with Miko’s love for collecting Naruto figures. That hobby grew into a passion driven business bringing authentic anime figures and collectibles from Japan to the Philippines.</p><p>Since November 2025, their mission has been simple: make the figures fans love more accessible, and make every collector feel part of the journey.</p><a className="link" href="#journey">FOLLOW THE JOURNEY <Arrow /></a></div></div></section>
      <section id="journey" className="feature"><Photo file="miko-shipping-boxes.png" label="Miko with boxes ready for shipping" /><div className="feature-copy"><div className="section-label">02 / BEHIND EVERY PACKAGE</div><h2>PACKED WITH<br /><i>PASSION.</i></h2><p>Every box represents a collector waiting for something special. From San Andres Bukid, Manila, MG Collectibles ships nationwide so fellow fans across the Philippines can enjoy the collectibles they love.</p><div className="stamp">FROM MANILA<br />TO YOUR SHELF ↗</div></div></section>
      <section id="community" className="section stats"><div className="wrap"><div className="section-label">03 / OUR COMMUNITY</div><div className="stats-grid"><div><div className="stat">1,400<span>+</span></div><div className="stat-caption">FOLLOWERS AS OF OCT 2026</div></div><div><h2>GROWING<br />TOGETHER.</h2><p>What started as one collector’s hobby has become a growing community. Every follow, message, and order is a reminder of the trust and support that keeps us going.</p></div></div></div></section>
      <section className="section delivery wrap"><div><div className="section-label">04 / REAL MOMENTS</div><h2>THE JOURNEY<br />CONTINUES <i>↗</i></h2><p>Friendly service, authentic items, and a reliable experience are at the heart of MG Collectibles. We’re grateful to be part of your collecting journey.</p></div><Photo file="miko-lalamove.png" label="Miko with a delivery rider during a shipment handoff" /></section>
      <section id="reviews" className="section reviews"><div className="wrap"><div className="section-label">05 / WORD FROM THE COMMUNITY</div><h2>COLLECTORS<br /><i>HAVE SPOKEN.</i></h2><p className="review-hint">STORIES FROM OUR COLLECTORS · HOVER TO PAUSE</p></div><div className="review-viewport"><div className="review-track"><ReviewCards /><ReviewCards duplicate /></div></div></section>
      <section className="closing"><div className="wrap"><div className="section-label">THANK YOU FOR BEING PART OF OUR JOURNEY</div><h2>FOR THE LOVE<br />OF <em>COLLECTING.</em></h2><p>From our collection to yours — the story is only getting started.</p><a className="button" href="#contact">GET IN TOUCH <Arrow /></a></div></section>
    </main>
    <footer id="contact"><div className="wrap footer-grid"><div><div className="footer-brand">M.G.<small>COLLECTIBLES</small></div><p>Authentic anime figures and collectibles from Japan to the Philippines. Built by fans, for fans.</p></div><div><h3>EXPLORE</h3><a href="#story">Our Story</a><a href="#journey">Our Journey</a><a href="#community">Community</a><a href="#reviews">Reviews</a></div><div><h3>FIND US</h3><p>San Andres Bukid, Manila<br />Philippines</p><p>Shipping nationwide</p></div><div><h3>CONNECT</h3><p>Follow MG Collectibles on Facebook for updates and inquiries.</p></div></div><div className="wrap copyright"><span>© 2026 MG COLLECTIBLES. ALL RIGHTS RESERVED.</span><span>MADE FOR COLLECTORS, BY COLLECTORS. ✦</span></div></footer>
  </div>;
}
