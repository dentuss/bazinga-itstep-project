import './App.css'

const exploreItems = [
  { label: 'Collection', icon: '📚' },
  { label: 'Library', icon: '🏛️' },
  { label: 'Characters', icon: '🦸‍♂️' },
  { label: 'Creators', icon: '✍️' },
  { label: 'Series', icon: '📖' },
  { label: 'Stories', icon: '🗂️' },
  { label: 'New Releases', icon: '✨' },
]

const weeklyComics = [
  {
    title: 'X-Men #100',
    cover:
      'https://i.annihil.us/u/prod/marvel/i/mg/6/90/64b979f8301a1/portrait_uncanny.jpg',
    price: '$4.99',
  },
  {
    title: 'Spider-Man: Web of Shadows',
    cover:
      'https://i.annihil.us/u/prod/marvel/i/mg/c/40/64d3f91261192/portrait_uncanny.jpg',
    price: '$3.99',
  },
  {
    title: 'Doctor Strange: Dark Mirror',
    cover:
      'https://i.annihil.us/u/prod/marvel/i/mg/a/10/64d500eac90db/portrait_uncanny.jpg',
    price: '$5.99',
  },
  {
    title: 'The Marvels #20',
    cover:
      'https://i.annihil.us/u/prod/marvel/i/mg/6/d0/60b7f2131d73d/portrait_uncanny.jpg',
    price: '$4.49',
  },
  {
    title: 'What If? Infinity',
    cover:
      'https://i.annihil.us/u/prod/marvel/i/mg/c/d0/57c5d7b89fae3/portrait_uncanny.jpg',
    price: '$3.99',
  },
  {
    title: 'Guardians of the Galaxy',
    cover:
      'https://i.annihil.us/u/prod/marvel/i/mg/6/40/64d4f93c0c8a3/portrait_uncanny.jpg',
    price: '$4.99',
  },
  {
    title: 'Ghost Rider: Inferno',
    cover:
      'https://i.annihil.us/u/prod/marvel/i/mg/c/80/64bdc3014de9f/portrait_uncanny.jpg',
    price: '$4.29',
  },
  {
    title: 'Captain America: Brave New World',
    cover:
      'https://i.annihil.us/u/prod/marvel/i/mg/4/03/64d4f9db1d4d9/portrait_uncanny.jpg',
    price: '$3.59',
  },
]

const digitalComics = [
  {
    title: 'X-Men Hellfire Gala',
    cover:
      'https://i.annihil.us/u/prod/marvel/i/mg/f/00/64c2c1c5c44b0/portrait_uncanny.jpg',
    price: '$3.99',
  },
  {
    title: 'Fantastic Four: True Story',
    cover:
      'https://i.annihil.us/u/prod/marvel/i/mg/f/70/5977cd4da7112/portrait_uncanny.jpg',
    price: '$2.99',
  },
  {
    title: 'Thanos Rising',
    cover:
      'https://i.annihil.us/u/prod/marvel/i/mg/9/e0/57fdce98b6d1b/portrait_uncanny.jpg',
    price: '$4.99',
  },
  {
    title: 'Amazing Spider-Man',
    cover:
      'https://i.annihil.us/u/prod/marvel/i/mg/9/90/5b1521300385a/portrait_uncanny.jpg',
    price: '$3.49',
  },
  {
    title: 'Guardians of the Galaxy Annual',
    cover:
      'https://i.annihil.us/u/prod/marvel/i/mg/2/20/58d142b954752/portrait_uncanny.jpg',
    price: '$3.99',
  },
  {
    title: 'Punisher War Journal',
    cover:
      'https://i.annihil.us/u/prod/marvel/i/mg/9/50/57fd7c77d8af0/portrait_uncanny.jpg',
    price: '$3.99',
  },
  {
    title: 'The Mighty Thor',
    cover:
      'https://i.annihil.us/u/prod/marvel/i/mg/6/60/56fa2a64ddf9d/portrait_uncanny.jpg',
    price: '$2.99',
  },
  {
    title: 'Doctor Strange: Sorcerer Supreme',
    cover:
      'https://i.annihil.us/u/prod/marvel/i/mg/6/40/4bb75a6e37bc1/portrait_uncanny.jpg',
    price: '$3.99',
  },
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="top-bar">
          <div className="brand">Bazinga Comics</div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#characters">Characters</a>
            <a href="#comics">Comics</a>
            <a href="#movies">Movies</a>
            <a href="#games">Games</a>
            <a href="#news">News</a>
          </nav>
          <div className="cta">
            <button className="primary">Sign in</button>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <p className="tag">New Comic Series</p>
            <h1>Launching This Month</h1>
            <p className="subtitle">
              Journey into the Bazinga Universe with brand new heroes, gripping stories, and digital exclusives crafted for super fans.
            </p>
            <div className="hero-actions">
              <button className="primary">Explore Titles</button>
              <button className="secondary">Digital Comics</button>
            </div>
          </div>
          <div className="hero-highlight">
            <div className="highlight-card">
              <p className="overline">Featured Story</p>
              <h3>Worlds Collide: Batman &amp; Superman</h3>
              <p className="details">Read the most awaited crossover of the season and unlock exclusive bonus art.</p>
              <button className="primary">Read Now</button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="explore" id="home">
          <h2>Explore Bazinga Universe</h2>
          <div className="explore-grid">
            {exploreItems.map((item) => (
              <button key={item.label} className="explore-card">
                <span className="icon" aria-hidden>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="comics" id="comics">
          <div className="section-header">
            <h2>New This Week</h2>
            <a href="#" className="view-all">
              View All
            </a>
          </div>
          <div className="comic-grid">
            {weeklyComics.map((comic) => (
              <article key={comic.title} className="comic-card">
                <img src={comic.cover} alt={comic.title} loading="lazy" />
                <div className="comic-info">
                  <p className="title">{comic.title}</p>
                  <p className="price">{comic.price}</p>
                  <button className="secondary">Details</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="comics" id="digital">
          <div className="section-header">
            <h2>Best Selling Digital Comics</h2>
            <a href="#" className="view-all">
              Browse More
            </a>
          </div>
          <div className="comic-grid">
            {digitalComics.map((comic) => (
              <article key={comic.title} className="comic-card">
                <img src={comic.cover} alt={comic.title} loading="lazy" />
                <div className="comic-info">
                  <p className="title">{comic.title}</p>
                  <p className="price">{comic.price}</p>
                  <button className="secondary">Details</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="badge">B!</div>
            <div>
              <p className="footer-title">Bazinga Unlimited</p>
              <p className="footer-subtitle">Access over 30,000 digital comics &amp; stories</p>
            </div>
            <button className="primary">Join Now</button>
          </div>
          <div className="footer-columns">
            <div>
              <p className="column-title">About Bazinga</p>
              <a href="#">About</a>
              <a href="#">Help/FAQs</a>
              <a href="#">Careers</a>
              <a href="#">Internships</a>
            </div>
            <div>
              <p className="column-title">Community</p>
              <a href="#">Creators</a>
              <a href="#">Events</a>
              <a href="#">Bazinga Blog</a>
              <a href="#">Merch Store</a>
            </div>
            <div>
              <p className="column-title">Digital</p>
              <a href="#">Bazinga App</a>
              <a href="#">Bazinga Unlimited</a>
              <a href="#">Redeem Codes</a>
              <a href="#">Advertising</a>
            </div>
            <div>
              <p className="column-title">Follow</p>
              <div className="socials">
                <a href="#" aria-label="Facebook">
                  fb
                </a>
                <a href="#" aria-label="Instagram">
                  ig
                </a>
                <a href="#" aria-label="Twitter">
                  tw
                </a>
                <a href="#" aria-label="YouTube">
                  yt
                </a>
                <a href="#" aria-label="TikTok">
                  tk
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <div className="links">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Interest-Based Ads</a>
            <a href="#">License Agreement</a>
            <a href="#">Cookie Policy</a>
            <a href="#">©2025 Bazinga</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
