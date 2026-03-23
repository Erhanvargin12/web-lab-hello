# Erhan Varğın | Portfolyo ve UI Kit (Web Programlama Lab-4)

Bu proje, React ve Tailwind CSS v4 kullanılarak Web Tasarımı ve Programlama Lab-3 ile Lab-4 yönergelerine uygun şekilde geliştirilmiştir. 

Utility-first (işlev-odaklı) tasarım kalıpları, karanlık tema (dark mode) ve Flexbox/Grid yapılarının harmanlandığı, modülerleştirilmiş yeniden kullanılabilir React bileşenlerinden oluşmaktadır. 

## 🚀 Projeyi Çalıştırma

Projenin yerel sunucuda (bilgisayarınızda) çalışabilmesi için terminalinizde şu komutları sırasıyla girin:

```bash
# Gerekli kütüphane bağımlılıklarını indirin
npm install

# Geliştirme (dev) sunucusunu başlatın
npm run dev
```

Terminal üzerinde beliren adrese (genellikle `http://localhost:5173`) tıklayarak projenizin arayüzüne erişebilirsiniz.

## 📁 Proje Özellikleri ve Teknolojiler

Uygulama içerisinde tasarım kararları **Tailwind v4** konseptiyle çalışmaktadır ve her bir birim (Component) `src/components/` dizini altında ayrıştırılmıştır.

### 🎨 1. Design Tokens ve Özel Tema Yapılandırması
`src/index.css` dosyası içerisinde `@theme` kullanılarak ana renk tayfları (`primary: #1E3A8A`, `secondary`, vb.) ve Spacing yapısı uyarlanmıştır. Fluid tipografi ile cihaz boyutuna göre dinamik ölçeklenen metin ayarları uygulanmıştır.

### 🌓 2. Dark Mode Esnekliği (Karanlık Tema)
Kullanıcı deneyimini güçlendirmek için Tailwind `dark:` sınıf ön eki kullanarak sistem karanlık teması desteklenmiştir. Hem Header üzerindeki `Güneş / Ay` geçiş butonu vasıtasıyla kodlanmış, hem de proje içindeki elementlere dinamik olarak entegre edilmiştir.

### 🧩 3. React Bileşenleri (Components) Kütüphanesi
Tasarımda UI kod israfını (tekrarlamayı) engellemek amacıyla:
- **Button.jsx:** `primary`, `secondary`, `danger`, `ghost` varyasyonları ile birlikte boyutlandırma (`sm`, `md`, `lg`) ve devre dışı (disabled) işlevselliği kazandırıldı.
- **Input.jsx:** Etiket, zorunlu e-posta hata yönetimi (aria) ve bilgilendirme metinlerine odaklanıldı. 
- **Card.jsx:** İçerisine görsel atılabilen `elevated` (gölgeli), `outlined` (çerçeveli) ve renk dolgulu (`filled`) proje vitrinleri eklendi.
- **Alert.jsx:** En az 4 aksiyon türünde (`info`, `success`, `warning`, `error`) kapanabilir (dismissible) iletişim panelleri hazırlandı.

### 🔍 4. UI Kit (Geliştirici Arayüzü)
Oluşturulan yukarıdaki 8'den fazla tasarım varyasyonu, sol üst köşede bulunan "UI Kit" menüsünden erişilebilecek tek bir `src/pages/UIKit.jsx` dokümantasyon sayfası içerisine yerleştirilmiştir. Bu sayede tüm bileşenlerin karanlık/aydınlık tepkimeleri kolayca test edilebilir.

---
**👨‍💻 Geliştirici:** Erhan Varğın
