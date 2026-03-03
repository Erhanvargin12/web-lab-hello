import './App.css'

function App() {
  return (
    <>
      {/* 1. Klavye kullanıcıları için navigasyonu atlama bağlantısı */}
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      {/* 2. Semantik Header ve Navigasyon - Flexbox ile hizalanır */}
      <header>
        <div className="site-title">Yazılım Portfolyosu</div> 
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* 3. Ana İçerik Alanı */}
      <main id="main-content">
        
        {/* Hakkımda Bölümü */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          
          <div className="about-content">
            {/* Semantik Görsel Alanı */}
            <figure>
              <img 
                src="https://via.placeholder.com/200" 
                alt="Fırat Üniversitesi yazılım mühendisliği öğrencisi profil fotoğrafı" 
              />
              <figcaption>Yazılım Mühendisi Adayı</figcaption>
            </figure>

            <div className="about-text">
              <p>Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. Modern web teknolojileri ve yazılım geliştirme süreçleri üzerine çalışmalar yürütüyorum.</p>
              
              {/* Uygulama-5: Flexbox Beceri Etiketleri */}
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>React</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>CSS Grid/Flexbox</li>
                <li>Git</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Uygulama-6: Projeler Bölümü - Grid Yapısı */}
        <section id="projeler">
          <h2>Projelerim</h2>
          
          <div className="project-grid">
            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="Go Taksi uygulama ekran görüntüsü" />
              <div className="project-info">
                <h3>Go Taksi</h3>
                <p>React ve TypeScript tabanlı profesyonel taksi yönetim ve çağırma uygulaması.</p>
                <ul className="skill-tags">
                  <li>React</li>
                  <li>TypeScript</li>
                </ul>
              </div>
            </article>

            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="QR Menü uygulama ekran görüntüsü" />
              <div className="project-info">
                <h3>QR Menü</h3>
                <p>Restoran ve kafeler için geliştirilmiş dijital menü sistemi.</p>
                <ul className="skill-tags">
                  <li>JavaScript</li>
                  <li>CSS Grid</li>
                </ul>
              </div>
            </article>

            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="Endemik Türler uygulama ekran görüntüsü" />
              <div className="project-info">
                <h3>Endemik Türler</h3>
                <p>Nesli tehlike altındaki türlerin takibi için geliştirilen web projesi.</p>
                <ul className="skill-tags">
                  <li>HTML5</li>
                  <li>React</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* 4. Erişilebilir İletişim Formu */}
        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength="2" 
                  aria-describedby="name-error" 
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-describedby="email-error" 
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required 
                  minLength="10" 
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>

      </main>

      {/* 5. Alt Bilgi Alanı */}
      <footer>
        <p>&copy; 2026 Tüm hakları saklıdır. | Yazılım Tasarımı ve Programlama LAB-3</p>
      </footer>
    </>
  )
}

export default App