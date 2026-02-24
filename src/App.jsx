import './App.css'

function App() {
  return (
    <>
      {/* 1. Klavye kullanıcıları için navigasyonu atlama bağlantısı */}
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      {/* 2. Semantik Header ve Navigasyon */}
      <header>
        <h1>Yazılım Geliştirici Portfolyosu</h1> 
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
          
          {/* Semantik Görsel Alanı */}
          <figure>
            <img 
              src="https://via.placeholder.com/150" 
              alt="Fırat Üniversitesi yazılım mühendisliği öğrencisi profil fotoğrafı" 
            />
            <figcaption>Yazılım Mühendisi Adayı</figcaption>
          </figure>

          <p>Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. Modern web teknolojileri ve yazılım geliştirme süreçleri üzerine çalışmalar yürütüyorum.</p>
        </section>

        {/* Projeler Bölümü - Article kullanımı */}
        <section id="projeler">
          <h2>Projelerim</h2>
          
          <article>
            <h3>Go Taksi</h3>
            <p>React ve TypeScript tabanlı profesyonel taksi yönetim ve çağırma uygulaması.</p>
          </article>

          <article>
            <h3>QR Menü</h3>
            <p>Restoran ve kafeler için geliştirilmiş dijital menü sistemi.</p>
          </article>

          <article>
            <h3>Endemik Türler</h3>
            <p>Nesli tehlike altındaki türlerin takibi için geliştirilen web projesi.</p>
          </article>
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
        <p>&copy; 2026 Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App