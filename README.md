# 📲 Auto Link Sender for WhatsApp

Bu proje, belirlenen linkleri sırayla **WhatsApp Web** üzerinde mesaj kutusuna ekleyip  
her eklemeden sonra **⏱️ 6 saniye bekleyerek Gönder butonuna tıklayan**  
tamamen otomatik bir JavaScript otomasyon scriptidir. 🚀  

---

## ✨ Özellikler
- 📌 Link listesini sırayla mesaj kutusuna yazar  
- ⏳ Her gönderim arasında 6 saniye bekler  
- 🖱️ WhatsApp Web üzerindeki **Gönder** butonuna otomatik tıklar  
- 📝 Konsolda her adımı loglar (ekleme + gönderme)  

---

## 🛠️ Kullanım
1. **WhatsApp Web**'i aç (https://web.whatsapp.com).  
2. Mesaj göndermek istediğin sohbeti seç.  
3. Tarayıcıda **Geliştirici Konsolu**nu aç (`F12 → Console`).  
4. `autoLinkSender.js` içeriğini yapıştır.  
5. Enter’a basarak scripti çalıştır. ✅  

---

## 🔗 Link Listesi
Scriptteki `links` dizisi aşağıdaki linkleri sırayla gönderecek şekilde hazırlanmıştır:  

- https://beykozunsesi.com.tr/kepez-belediye-baskani-mesut-kocagoez-cocuklarimiz-icin-ne-gerekiyorsa-yapacagiz  
- https://beykozunsesi.com.tr/sahne-kepez-yaz-etkinlikleri-finalini-aydogmus-mahallesinde-coskulu-kalabalikla-yapti  
- https://beykozunsesi.com.tr/gaziantep-buyuksehir-belediye-baskani-fatma-sahin-kucuk-bir-dokunusla-buyuk-hizmet-yapabilme-gucune-ulastik  
- https://beykozunsesi.com.tr/kepezde-emekliler-icin-acilan-lokaller-cay-sohbetleriyle-bulusma-noktasi-oldu  
- https://beykozunsesi.com.tr/kepez-belediye-baskani-mesut-kocagoez-temiz-enerjiyi-her-eve-ulastirmak-icin-el-ele-calisiyoruz  
- https://beykozunsesi.com.tr/kepezde-market-denetiminde-dana-kellesi-ve-tavuk-etleri-sagliksiz-kosullarda-yakalandi  
- https://beykozunsesi.com.tr/elazig-tso-baskani-idris-alan-egitim-kurumlarinin-sorunlarini-coezmek-onlarin-sesi-olmak-icin-buradayiz  
- https://beykozunsesi.com.tr/sincan-sofoerler-odasi-baskani-isa-yalcin-gezdik-goerduk-dinledik-ve-coezduk  
- https://beykozunsesi.com.tr/bogazin-yargiclarindan-siyah-celenkli-protesto-zeki-aksu-istifa-cagrisi-beykozlular-gununde-yukseldi  
- https://beykozunsesi.com.tr/bogazin-yargiclarindan-gurzele-sert-cikis-beykoz-1908-kendi-adi-ve-armasiyla-sahada-olmali  
- https://beykozunsesi.com.tr/beykoz-cayir-festivali-24-31-agustosta-kultur-muzik-ve-dayanisma-etkinlikleriyle-basliyor  
- https://beykozunsesi.com.tr/beykozda-misir-festivali-23-agustosta-basliyor-ekin-uzunlar-konseriyle-cosku-doruga-cikacak  
- https://beykozunsesi.com.tr/mhp-beykoz-ilce-baskani-emre-coemlekci-beykozdan-buyuk-koey-yoktur-burasi-bizim-her-seyimiz  
- https://beykozunsesi.com.tr/cinli-enerji-sirketi-longi-tarimsal-atiklardan-yilda-400-bin-ton-yesil-metanol-uretecek  
- https://beykozunsesi.com.tr/nvidia-app-buyuk-guncellemeyle-geliyor-global-dlss-smooth-motion-ve-yeni-kontrol-paneli-bir-arada  

---

## 💻 Örnek Kod

```javascript
// Link listesi
const links = [
  "https://beykozunsesi.com.tr/kepez-belediye-baskani-mesut-kocagoez-cocuklarimiz-icin-ne-gerekiyorsa-yapacagiz",
  "https://beykozunsesi.com.tr/sahne-kepez-yaz-etkinlikleri-finalini-aydogmus-mahallesinde-coskulu-kalabalikla-yapti",
  "https://beykozunsesi.com.tr/gaziantep-buyuksehir-belediye-baskani-fatma-sahin-kucuk-bir-dokunusla-buyuk-hizmet-yapabilme-gucune-ulastik",
  // ... diğer linkler ...
];

// Mesaj kutusu
const inputBox = document.querySelector(
  'div[class="x1hx0egp x6ikm8r x1odjw0f x1k6rcq7 x6prxxf"]'
);

// Gönder butonu
function getSendButton() {
  return document.querySelector('button[aria-label="Gönder"]');
}

// Linkleri sırayla gönderen fonksiyon
async function sendLinksSequentially() {
  for (let i = 0; i < links.length; i++) {
    inputBox.innerHTML = "";
    inputBox.focus();
    document.execCommand("insertText", false, links[i]);
    console.log(`✍️ Mesaja eklendi: ${links[i]}`);

    await new Promise(resolve => setTimeout(resolve, 6000));

    const sendButton = getSendButton();
    if (sendButton) {
      sendButton.click();
      console.log(`✅ Gönderildi: ${links[i]}`);
    } else {
      console.error("❌ Gönder butonu bulunamadı!");
    }
  }
}

// Başlat
sendLinksSequentially();
