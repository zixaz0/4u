const surat = [
    "Hai MUTIARA PUSPITA SARI yang aku cintai ❤️",
    "Aku bikin ini bukan cuma karena kangen...",
    "Tapi karena aku sadar, kehilangan kamu itu hal paling nyakitin di dalam hidup akuu.",
    "Teruss samaa akuuu yaaa bocillll. ✨",
    "Aku nggak janji jadi yang paling sempurna...",
    "Tapi aku janji akan terus belajar jadi yang terbaik buat kamu. 🤝",
    "Ayo kita perbaiki, Kalo ada kesalahan kita jangan sampe pisah kaya duluu. 🌸",
    "Aku beruntungg bisa kenal kamu sewaktu smp, sampai sekarang.",
    "Makasih udah kasih kesempatan kedua... kamu segalanya buat aku 😘",
    "Aku sayang kamu. Dulu, sekarang, dan nanti. Selalu. 💞",
    "I LOVE MUTIARA PUSPITA SARI ❤️"
  ];
  
  let i = 0;
  const isiSurat = document.getElementById("isiSurat");
  const suratDiv = document.querySelector(".surat");
  const overlay = document.querySelector(".overlay");
  const galeri = document.querySelector(".galeri");
  const lagu = document.getElementById("lagu");
  
  function mulaiSurat() {
    overlay.classList.add("hidden");
    suratDiv.classList.remove("hidden");
    galeri.classList.add("hidden");
    lagu.play();
    tampilkanKalimat();
  }
  
  function tampilkanKalimat() {
    if (i < surat.length) {
      ketikSatuPerSatu(surat[i], () => {
        i++;
        setTimeout(tampilkanKalimat, 2000);
      });
    } else {
      setTimeout(() => {
        galeri.classList.remove("hidden");
      }, 1500);
    }
  }
  
  function ketikSatuPerSatu(teks, callback) {
    let j = 0;
    isiSurat.innerHTML = "";
    const interval = setInterval(() => {
      isiSurat.innerHTML += teks[j];
      j++;
      if (j === teks.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, 50); // kecepatan huruf
  }

  const loveContainer = document.getElementById('love-container');

  function createLove() {
    const love = document.createElement('div');
    love.classList.add('love');
    love.textContent = '❤️';

    love.style.left = Math.random() * 100 + 'vw';
    love.style.animationDuration = 3 + Math.random() * 2 + 's';
    love.style.fontSize = 16 + Math.random() * 24 + 'px';

    loveContainer.appendChild(love);

    setTimeout(() => {
      love.remove();
    }, 5000);
  }

  setInterval(createLove, 300);
  