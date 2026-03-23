# CSS Kararlari

## 1. Breakpoint Secimi
- Neden 640px ve 1024px sectim?
Mobil cihazlardan sonra tablet deneyimi için 640px'i, masaüstü görünüme geçiş için ise standart 1024px değerini uygun gördüm.
- Icerigim bu noktalarda nasil degisiyor?
640px'de form ve hakkında kısmı tek sütundan yatay hizalamaya geçerken, 1024px'de proje kartları 3 sütuna dönüşüyor ve büyük ekranlarda içerik 1200px genişliğinde ortalanıyor.

## 2. Layout Tercihleri
- Header icin neden Flexbox sectim?
Header içerisindeki logo ve navigasyonun yatay eksende eşit ve düzenli dağıtılması (space-between) için tek boyutlu layout sistemi olan Flexbox en ideal çözüm olduğu için seçtim.
- Proje kartlari icin neden Grid sectim?
Proje kartları hem satır hem sütun hizalamasına ihtiyaç duyan bir yapı sergilediği için Grid kullandım. Bu sayede karmaşık düzenleri tek satır kod ile responsive yapabildim.
- auto-fit mi auto-fill mi kullandim, neden?
auto-fit kullandım, çünkü boş kalan hücrelerin korunmasındansa, yer alan içeriklerin artan boş alanları dolduracak biçimde genişleyebilmesine ("fit") izin vermesini istedim.

## 3. Design Tokens
- Hangi renk paletini sectim ve neden?
Mavi tonları (primary #1E3A8A ve secondary #2563EB) ile temiz, okunabilir ve profesyonel bir arayüz profili yansıtan renkleri seçtim. Bu kurumsal ve teknik konseptlere iyi uyuyor.
- Spacing skalasini nasil belirledim?
4px (0.25rem) temelli artışlar ile standart boşluk kurallarına uyarak uyumlu, estetik ve sürdürülebilir bir dizgi hiyerarşisi elde ettim.
- Fluid typography icin clamp degerlerini nasil ayarladim?
Ekranın dar ya da geniş olması fark etmeksizin alt sınır (1rem vb.) ile üst sınır (1.125rem vb.) arasında akıcı şekilde büyüyüp küçülmesini `vw` birimini harmanlayarak ayarladım.

## 4. Responsive Stratejiler
- Mobile-first yaklasimini nasil uyguladim?
Varsayılan olarak media-query olmadan mobil (dar) ekranların dikey düzenlerine odaklı yazarak kodladım ve ardından `min-width` ile büyüyen ekranlara göre yatay düzen kuralları ekledim.
- Hangi elemanlar breakpoint'lerde degisiyor?
Header (tek sütundan yan yanaya), Nav linkleri, "Hakkımda" kısmındaki resim ve yazı yerleşimi ile Projeler kısmındaki kartların ızgara sütun sayıları doğrudan etkileniyor.
- Gorsel boyutlari nasil yonettim?
Maksimum genişliği kapsayıcının %100'ü olacak şekilde (`max-width: 100%`) yönettim. Kart içerisindeki boyutlandırmaların da orantılı crop alabilmesi adına `object-fit: cover` yapısını uyguladım.
