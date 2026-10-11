# Alezonyth — Subscribe

Website link-in-bio sederhana untuk menemukan channel YouTube dan media sosial Alezonyth dalam satu halaman. Dibuat dengan HTML, CSS, dan JavaScript tanpa framework.

## 🚀 Fitur Utama

- **Semua Link dalam Satu Halaman**: Tautan ke channel dan media sosial ditampilkan sebagai kartu.
- **Desain Responsif**: Tampilan menyesuaikan ukuran layar desktop maupun mobile.
- **Animasi Interaktif**: Animasi pembuka, judul, kartu link, dan teks berjalan.
- **Mode Gelap**: Mengikuti pengaturan tema perangkat, dengan dukungan tema terang dan gelap.
- **Favicon dan Ikon Channel**: Ikon AL merah tersedia sebagai favicon dan file PNG.
- **Aksesibilitas**: Mendukung navigasi keyboard dan preferensi reduced motion.

## 🔗 Link yang Ditampilkan

1. **YouTube** — Subscribe dan video terbaru.
2. **Instagram** — Kegiatan harian dan cuplikan di balik layar.
3. **TikTok** — Video pendek.
4. **Grup komunitas** — Discord.
5. **Merchandise** — Coming soon.
6. **Kerja sama** — Kontak bisnis dan kolaborasi.

## 🛠️ Teknologi yang Digunakan

- **HTML5** — Struktur halaman.
- **CSS3** — Layout responsif, tema, dan animasi.
- **Vanilla JavaScript** — Menampilkan identitas channel dan membuat daftar link.
- **Google Fonts** — Archivo Black dan Plus Jakarta Sans.
- **SVG** — Ikon untuk tautan media sosial.

## 📁 Struktur File

```
/
├── index.html    # Halaman utama, termasuk CSS dan JavaScript
├── favicon.png       # Favicon dan ikon AL ukuran 800 × 800
└── README.md         # Dokumentasi proyek
```

## 🚀 Cara Menjalankan

### Opsi 1: Live Server (Recommended)

1. Buka folder proyek di VS Code.
2. Install extension **Live Server** jika belum tersedia.
3. Klik kanan `index.html`.
4. Pilih **Open with Live Server**.

### Opsi 2: Buka Langsung

Buka `index.html` di browser. Tidak perlu instalasi atau proses build. Koneksi internet diperlukan untuk memuat Google Fonts.

## 🎨 Kustomisasi

Di dalam `index.html`, cari objek `CHANNEL` pada bagian script untuk mengubah konten:

- `name`, `initials`, `handle`, dan `tagline` — identitas channel.
- `ticker` — teks yang tampil di bagian berjalan.
- `links` — daftar tautan; setiap item memiliki `icon`, `title`, `desc`, dan `url`.
- Tambahkan `primary: true` pada item link untuk memberi tampilan utama.

Ikon link yang tersedia: `youtube`, `play`, `instagram`, `tiktok`, `chat`, `bag`, dan `mail`.

Untuk menggunakan gambar favicon, simpan `favicon.png` di folder yang sama dengan `index.html`.

## 🌐 Dukungan Browser

Dapat digunakan pada browser modern seperti Chrome, Firefox, Safari, dan Edge. Tata letak menyesuaikan layar perangkat.

## 📝 Lisensi

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/
