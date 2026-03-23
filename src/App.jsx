import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="site-title">Portfolyom</div>
        <nav>
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <div className="about-content">
            <figure>
              <img src="https://via.placeholder.com/200" alt="Profil Fotosu" />
            </figure>
            <div>
              <p>Merhaba! Ben bir web geliştiricisiyim. Modern web teknolojileriyle harika deneyimler oluşturmayı seviyorum.</p>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="E-Ticaret sitesi anasayfa ekran goruntusu" />
              <h3>E-Ticaret Sitesi</h3>
              <p>React ve Node.js ile gelistirilmis tam kapsamli bir e-ticaret uygulamasi.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="Blog uygulamasi yazi listesi gorunumu" />
              <h3>Blog Uygulamasi</h3>
              <p>Kisisel blog platformu. Markdown destekli yazi editoru.</p>
              <ul className="skill-tags">
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="Hava durumu uygulamasi arayuzu" />
              <h3>Hava Durumu</h3>
              <p>OpenWeather API ile anlik hava durumu bilgisi.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Adınız</label>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesajınız</label>
              <textarea id="message" rows="4"></textarea>
            </div>
            <button type="submit">Gönder</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Portfolyom. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;