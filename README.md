# Local Studio Media

LM Studio ile yerel prompt üretimi ve yerel görsel/video servislerine bağlanmak için Electron masaüstü istemcisi.

## Durum

- LM Studio OpenAI uyumlu `/v1/chat/completions` ile prompt yardımcısı
- LM Studio model listesi, model load ve eject/unload yönetimi
- Linux AppImage paketleme
- Windows NSIS `.exe` paketleme workflow'u
- Flux için önemli: Flux modeli LM Studio sohbet endpointiyle görüntü üretmez. Gerçek görsel üretiminde ComfyUI, Forge/Stable Diffusion WebUI veya Flux Diffusers API kullanılmalıdır.

## Kurulum ve çalıştırma

```bash
npm install
npm start
```

Varsayılan LM Studio adresi: `http://localhost:1234/v1`.

Sohbet modeli prompt hazırlar. Görsel/video modelleri gerçek backend API'sine göre yapılandırılmalıdır; sıradan bir `chat/completions` cevabı gerçek medya çıktısı değildir.

## Paketleme

Linux AppImage: `npm run dist:linux`

Windows kurulum paketi: `npm run dist:win`

GitHub Actions workflow'u Linux AppImage ve Windows NSIS çıktısını artifact olarak yükler.

## LM Studio model yönetimi

Uygulama model sekmesi değişince `/api/v1/models` ve `/api/v0/models` üzerinden yüklü modeli bulur, unload/eject etmeyi dener ve seçilen modeli yükler. LM Studio sürümüne göre API v0/v1 desteği değişebileceği için teknik günlük kontrol edilmelidir.

## Gerçek Flux üretimi

Flux bir sohbet modeli değildir. LM Studio'da Flux'ın `chat/completions` üzerinden boş veya anlamsız metin döndürmesi normaldir. Gerçek çıktı için ComfyUI (`http://localhost:8188`), Forge/Stable Diffusion WebUI (`http://localhost:7860`) veya Flux Diffusers API çalıştırılmalıdır. Uygulama, gerçek image/video backend endpointi ve workflow'u bağlanmadan base64/URL üretildiğini varsaymamalıdır.

## GitHub Actions

`main` veya `master` dalına push edildiğinde Linux AppImage ve Windows `.exe` paketleri oluşturulur. Çıktılar Actions sayfasındaki artifacts bölümünden indirilebilir.
