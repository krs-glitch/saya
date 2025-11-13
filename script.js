// Data sekolah contoh
const schools = [
  { name: "SD Negeri 1 Kediri", level: "SD", type: "Negeri", desc: "Sekolah dasar unggulan dengan fasilitas lengkap." },
  { name: "SMP Negeri 2 Kediri", level: "SMP", type: "Negeri", desc: "SMP favorit dengan prestasi akademik tinggi." },
  { name: "SMA Negeri 1 Kediri", level: "SMA", type: "Negeri", desc: "SMA unggulan dengan berbagai ekstrakurikuler." },
  { name: "SMK Negeri 1 Kediri", level: "SMK", type: "Negeri", desc: "SMK terbaik dengan jurusan Teknik dan Bisnis." },
  { name: "SMK Negeri 1 Semen", level: "SMK", type: "Negeri", desc: "Jurusan TKRO, TKJ, dan Akuntansi dengan fasilitas bagus." },
  { name: "SMA Bina Bangsa Kediri", level: "SMA", type: "Swasta", desc: "SMA swasta dengan fokus pada kreativitas siswa." },
  { name: "SMK PGRI Kediri", level: "SMK", type: "Swasta", desc: "SMK dengan jurusan Desain Grafis dan Informatika." },
  { name: "SMP Cendekia Kediri", level: "SMP", type: "Swasta", desc: "SMP modern dengan pembelajaran berbasis digital." },
];

// Fungsi tampilkan hasil
function tampilkanSekolah(list) {
  const hasil = document.getElementById("results");
  hasil.innerHTML = "";

  if (list.length === 0) {
    hasil.innerHTML = `<p class="no-result">😕 Tidak ditemukan sekolah yang cocok.</p>`;
    return;
  }

  list.forEach(s => {
    const card = document.createElement("div");
    card.className = "school-card";
    card.innerHTML = `
      <h3>${s.name}</h3>
      <p><strong>Jenjang:</strong> ${s.level} | <strong>Tipe:</strong> ${s.type}</p>
      <p>${s.desc}</p>
    `;
    hasil.appendChild(card);
  });
}

// Fungsi filter
function cariSekolah() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const level = document.getElementById("level").value;
  const type = document.getElementById("type").value;

  const hasilFilter = schools.filter(s =>
    (!keyword || s.name.toLowerCase().includes(keyword)) &&
    (!level || s.level === level) &&
    (!type || s.type === type)
  );

  tampilkanSekolah(hasilFilter);
}

// Event listener
document.getElementById("btnCari").addEventListener("click", cariSekolah);
document.getElementById("search").addEventListener("input", cariSekolah);




