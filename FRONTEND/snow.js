function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.innerHTML = "❄"; // Karakter salju
  snowflake.classList.add("snowflake");
  document.body.appendChild(snowflake);

  // Atur ukuran salju secara random
  let size = Math.random() * 20 + 5;
  snowflake.style.fontSize = `${size}px`;

  // Atur posisi random di layar
  let leftPosition = Math.random() * window.innerWidth;
  snowflake.style.left = `${leftPosition}px`;

  // Atur durasi jatuh secara random
  let duration = Math.random() * 5 + 3;
  snowflake.style.animationDuration = `${duration}s`;

  // Hapus elemen setelah selesai animasi
  setTimeout(() => {
    snowflake.remove();
  }, duration * 1000);
}

// Buat efek salju muncul setiap 200ms
setInterval(createSnowflake, 200);
