# Hat Hafızası

Montaj eğitimi kartlarındaki kuralları tekrar etmek için hazırlanmış, iPhone ana ekranına eklenebilen mobil quiz uygulaması.

## iPhone 11'de kullanma

1. Bilgisayar ve iPhone aynı Wi-Fi ağına bağlıyken bu klasörde PowerShell açın.
2. İlk kullanımda `npm install`, ardından `npm run dev` çalıştırın.
3. Komut ekranındaki **Network** adresini iPhone'da Safari ile açın (örnek: `http://192.168.1.20:5173`).
4. Safari paylaş menüsünden **Ana Ekrana Ekle** seçin ve `Hat Hafızası` olarak ekleyin.

Bu, iPhone'da tam ekran açılan bir web uygulamasıdır. Bilgisayar kapalıyken de açılması için projeyi HTTPS destekleyen bir statik barındırmaya yüklemek gerekir; `npm run build` komutu bunun için `dist` klasörünü üretir.

## İçerik ilkeleri

- Doğru cevaplar, sağlanan eğitim/kural kartlarındaki ifadelerin metne aktarılmış hâlidir.
- Yanlış seçenekler uydurma tanım değil; aynı kaynaklardaki diğer gerçek kurallardır.
- Fotoğraflar uygulamaya eklenmemiştir. Görsel dil özgün CSS arayüzü ve basit vektör ikondan oluşur.

## Doğrulama

`npm run build` üretim paketini oluşturur.

> Not: Yerel Windows bilgisayarda Apple imzalı `.ipa` üretilemez. App Store/TestFlight ile dağıtılan yerel iOS uygulaması için Apple Developer hesabı ve macOS/Xcode (ya da imzalı bir bulut derleme hesabı) gerekir. Bu proje bu gereksinim olmadan iPhone'a ana ekran uygulaması olarak kurulabilir.
