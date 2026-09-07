# Changelog

Bu projedeki tüm önemli değişiklikler bu dosyada listelenir.
Format [Keep a Changelog](https://keepachangelog.com/) temel alınmıştır; sürümleme [Semantic Versioning](https://semver.org/) kurallarına uyar.

## [1.0.3] - 2026-09-07

### Changed
- WordPress.org isim/permalink kuralı "woocommerce" kelimesine hiçbir şekilde izin vermediği için, eklenti adından/slug'ından bu kelime tamamen kaldırıldı: `order-checkout-page-agreement`.

## [1.0.2] - 2026-09-07

### Changed
- WordPress.org incelemesi sonrası eklenti adı/slug'ı `order-checkout-page-agreement-for-woocommerce` olarak değiştirildi (önceki isim çok jenerik bulundu).
- `readme.txt` Contributors alanı gerçek WordPress.org kullanıcı adıyla (`mehmetalicakmak`) düzeltildi.

### Fixed
- `wp_footer`'a doğrudan basılan Fatura Tipi göster/gizle `<script>`'i, `wp_enqueue_script` ile yüklenen ayrı bir dosyaya taşındı.

## [1.0.1] - 2026-09-04

### Changed
- Eklenti slug'ı ve text domain'i `sozlesme-yonetimi-for-woocommerce` olarak değiştirildi (WordPress.org marka/isimlendirme kuralı gereği).
- WordPress.org dizini için `readme.txt` eklendi.

### Fixed
- Birkaç form işleyicide nonce ve girdi sanitizasyonu sıkılaştırıldı.

## [1.0.0] - 2026-09-04

### Added
- Sözleşme yönetimi için özel içerik tipi (`sozlesme_wce`) ve admin ekranı.
- Sözleşme başına "zorunlu / isteğe bağlı" ayarı.
- WooCommerce checkout'ta ödeme yöntemi kutusunun üstünde onay kutuları ve okuma popup'ı.
- Zorunlu sözleşmeler onaylanmadan siparişin tamamlanmasını engelleyen istemci ve sunucu tarafı doğrulama.
- Sipariş bilgileriyle doldurulan WooCommerce değişkenleri: `{siparis_no}`, `{siparis_tarihi}`, `{musteri_adi}`, `{musteri_email}`, `{musteri_telefon}`, `{fatura_adresi}`, `{teslimat_adresi}`, `{odeme_yontemi}`, `{sepet_urunleri}` (ürün/KDV/toplam tablosu), `{sepet_toplami}`, `{site_adi}`, `{tarih}`.
- Onaylanan sözleşmelerin, gerçek sipariş bilgileriyle doldurulmuş hâlinin sipariş kaydına (meta) not düşülmesi.
- Sipariş tamamlandığında (processing/completed) müşteri e-postasına, onaylanan sözleşmelerin PDF hâlinin otomatik eklenmesi (dompdf).
- Fatura Tipi (Bireysel/Kurumsal) checkout alanlarının temadan bu eklentiye taşınması ve ayarlar sayfasından açılıp kapatılabilmesi; `{fatura_tipi}`, `{sirket_unvani}`, `{vergi_numarasi}`, `{vergi_dairesi}` değişkenleri ve kurumsal seçildiğinde `{musteri_adi}`'nin şirket ünvanını göstermesi.
