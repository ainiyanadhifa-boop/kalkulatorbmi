function hitungBMI() {
  const berat = parseFloat(document.getElementById("berat").value);
  const tinggiCm = parseFloat(document.getElementById("tinggi").value);

  const tinggiM = tinggiCm / 100;
  const bmi = berat / (tinggiM * tinggiM);

  const minIdeal = 18.5 * (tinggiM * tinggiM);
  const maxIdeal = 24.9 * (tinggiM * tinggiM);

  let kategori = "";
  let selisihText = "";
  let saranText = "";

  if (bmi < 18.5) {
    kategori = "Kurus";
    const kurang = minIdeal - berat;
    selisihText = "Berat badan kurang sekitar " + kurang.toFixed(1) + " kg";
    saranText =
      "🍚 Perbanyak protein, karbohidrat sehat, dan sayur.<br>" +
      "🏃 Olahraga ringan: jalan kaki, yoga, latihan otot ringan.";
  } 
  else if (bmi <= 24.9) {
    kategori = "Normal (Ideal)";
    selisihText = "Berat badan kamu sudah ideal 🎉";
    saranText =
      "🥗 Pertahankan pola makan seimbang.<br>" +
      "🚴 Olahraga rutin 3–4 kali seminggu.";
  } 
  else {
    kategori = "Berlebih";
    const lebih = berat - maxIdeal;
    selisihText = "Berat badan berlebih sekitar " + lebih.toFixed(1) + " kg";
    saranText =
      "🥦 Kurangi gorengan & gula, perbanyak sayur.<br>" +
      "🔥 Cardio: jalan cepat, lari ringan, skipping.";
  }

  document.getElementById("bmi").innerHTML = "BMI: <b>" + bmi.toFixed(2) + "</b>";
  document.getElementById("kategori").innerHTML = "Kategori: <b>" + kategori + "</b>";
  document.getElementById("selisih").innerText = selisihText;
  document.getElementById("saran").innerHTML = saranText;
}
