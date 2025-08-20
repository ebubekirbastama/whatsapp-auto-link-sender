// Tüm link listesi
const links = [
  "https://beykozunsesi.com.tr/kepez-belediye-baskani-mesut-kocagoez-cocuklarimiz-icin-ne-gerekiyorsa-yapacagiz",
  "https://beykozunsesi.com.tr/sahne-kepez-yaz-etkinlikleri-finalini-aydogmus-mahallesinde-coskulu-kalabalikla-yapti",
  "https://beykozunsesi.com.tr/gaziantep-buyuksehir-belediye-baskani-fatma-sahin-kucuk-bir-dokunusla-buyuk-hizmet-yapabilme-gucune-ulastik",
  "https://beykozunsesi.com.tr/kepezde-emekliler-icin-acilan-lokaller-cay-sohbetleriyle-bulusma-noktasi-oldu",
  "https://beykozunsesi.com.tr/kepez-belediye-baskani-mesut-kocagoez-temiz-enerjiyi-her-eve-ulastirmak-icin-el-ele-calisiyoruz",
  "https://beykozunsesi.com.tr/kepezde-market-denetiminde-dana-kellesi-ve-tavuk-etleri-sagliksiz-kosullarda-yakalandi",
  "https://beykozunsesi.com.tr/elazig-tso-baskani-idris-alan-egitim-kurumlarinin-sorunlarini-coezmek-onlarin-sesi-olmak-icin-buradayiz",
  "https://beykozunsesi.com.tr/sincan-sofoerler-odasi-baskani-isa-yalcin-gezdik-goerduk-dinledik-ve-coezduk",
  "https://beykozunsesi.com.tr/bogazin-yargiclarindan-siyah-celenkli-protesto-zeki-aksu-istifa-cagrisi-beykozlular-gununde-yukseldi",
  "https://beykozunsesi.com.tr/bogazin-yargiclarindan-gurzele-sert-cikis-beykoz-1908-kendi-adi-ve-armasiyla-sahada-olmali",
  "https://beykozunsesi.com.tr/beykoz-cayir-festivali-24-31-agustosta-kultur-muzik-ve-dayanisma-etkinlikleriyle-basliyor",
  "https://beykozunsesi.com.tr/beykozda-misir-festivali-23-agustosta-basliyor-ekin-uzunlar-konseriyle-cosku-doruga-cikacak",
  "https://beykozunsesi.com.tr/mhp-beykoz-ilce-baskani-emre-coemlekci-beykozdan-buyuk-koey-yoktur-burasi-bizim-her-seyimiz",
  "https://beykozunsesi.com.tr/cinli-enerji-sirketi-longi-tarimsal-atiklardan-yilda-400-bin-ton-yesil-metanol-uretecek",
  "https://beykozunsesi.com.tr/nvidia-app-buyuk-guncellemeyle-geliyor-global-dlss-smooth-motion-ve-yeni-kontrol-paneli-bir-arada"
];

// Mesaj kutusu (verdiğin class selector ile)
const inputBox = document.querySelector(
  'div[class="x1hx0egp x6ikm8r x1odjw0f x1k6rcq7 x6prxxf"]'
);

// Gönder butonu seçici
function getSendButton() {
  return document.querySelector('button[aria-label="Gönder"]');
}

// Linkleri sırayla gönderen fonksiyon
async function sendLinksSequentially() {
  for (let i = 0; i < links.length; i++) {
    if (!inputBox) {
      console.error("Mesaj kutusu bulunamadı!");
      return;
    }

    // Mesaj kutusunu temizle ve linki ekle
    inputBox.innerHTML = "";
    inputBox.focus();
    document.execCommand("insertText", false, links[i]);
    console.log(`Mesaja eklendi: ${links[i]}`);

    // 6 saniye bekle
    await new Promise(resolve => setTimeout(resolve, 6000));

    // Gönder butonuna tıkla
    const sendButton = getSendButton();
    if (sendButton) {
      sendButton.click();
      console.log(`Gönderildi: ${links[i]}`);
    } else {
      console.error("Gönder butonu bulunamadı!");
    }
  }
}

// Scripti çalıştır
sendLinksSequentially();
