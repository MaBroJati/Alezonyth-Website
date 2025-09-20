# Alezonyth Website

Website carousel interaktif yang menampilkan berbagai platform social media dengan desain yang responsif dan modern.

## 🚀 Fitur Utama

- **Carousel Interaktif**: Slider yang menampilkan 6 platform social media
- **Desain Responsif**: Tampilan yang optimal di desktop, tablet, dan mobile
- **Touch Support**: Navigasi dengan gesture swipe di perangkat mobile
- **Keyboard Navigation**: Navigasi dengan arrow keys di desktop
- **Animasi Smooth**: Transisi yang halus antar slide
- **Mobile-First Design**: Dioptimalkan untuk perangkat mobile

## 📱 Platform yang Ditampilkan

1. **Saweria** - Platform donasi
2. **YouTube** - Channel video content
3. **Instagram** - Platform foto dan video
4. **Twitter (X)** - Platform microblogging
5. **TikTok** - Platform video pendek
6. **GitHub** - Platform development dan coding

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur website
- **CSS3** - Styling dan animasi
  - Media queries untuk responsivitas
  - Flexbox/Grid layout
  - CSS animations
- **Vanilla JavaScript** - Interaktivitas
  - Event listeners
  - Touch/swipe detection
  - DOM manipulation
- **Font Awesome** - Icon navigation

## 📁 Struktur File

```
/
├── index.html          # File utama HTML
├── styles.css          # Styling dan responsivitas
├── script.js           # JavaScript interaktivitas
├── favicon.ico         # Icon website
└── README.md           # Dokumentasi ini
```

## 🚀 Cara Menjalankan

### Opsi 1: Live Server (Recommended)
1. Install extension Live Server di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"
4. Website akan terbuka di browser

### Opsi 2: Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Opsi 3: Node.js HTTP Server
```bash
npx http-server
```

### Opsi 4: Direct File
Cukup buka file `index.html` langsung di browser (beberapa fitur mungkin terbatas)

## 📱 Responsivitas

Website ini mendukung berbagai ukuran layar:

- **Desktop** (> 768px): Layout penuh dengan carousel besar
- **Tablet** (768px - 480px): Layout medium dengan ukuran sedang
- **Mobile** (480px - 320px): Layout compact untuk smartphone
- **Small Mobile** (< 320px): Layout ultra-compact

### Breakpoints CSS:
- `@media screen and (max-width: 768px)` - Tablet
- `@media screen and (max-width: 480px)` - Mobile
- `@media screen and (max-width: 320px)` - Small mobile

## 🎮 Cara Penggunaan

### Desktop:
- Klik tombol panah kiri/kanan untuk navigasi
- Gunakan keyboard arrow keys (← →)
- Scroll mouse untuk navigasi

### Mobile:
- Swipe left/right untuk navigasi carousel
- Tap tombol panah untuk navigasi manual
- Touch gestures didukung penuh

## 🎨 Fitur Desain

- **Background gradient** dengan warna abu-abu modern
- **Box shadow** untuk efek depth
- **Smooth transitions** antar slide
- **Hover effects** pada navigation buttons
- **Responsive images** dengan background-size cover
- **Typography** yang scalable dan readable

## 🔧 Kustomisasi

### Menambah Platform Baru:
1. Tambahkan item baru di `index.html`:
```html
<div class="item" style="background-image: url('your-image-url');">
    <div class="content">
        <div class="name">Nama Platform</div>
        <div class="des">Deskripsi platform</div>
        <button onclick="window.open('your-url')">Click Untuk Membuka</button>
    </div>
</div>
```

2. Update JavaScript di `script.js` jika diperlukan:
```javascript
// Update length calculation if adding more items
document.querySelector('.slide').prepend(items[items.length - 1])
```

### Mengubah Styling:
Edit file `styles.css` dan modifikasi:
- Warna: Ubah nilai `background`, `color`, dll
- Ukuran: Modifikasi `width`, `height`, `font-size`
- Animasi: Edit `@keyframes animate`

## 🌐 Browser Support

- ✅ Chrome/Chromium (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Opera

## 📝 Lisensi

Website ini dibuat untuk keperluan pribadi/portfolio.

## 👨‍💻 Developer

Dibuat oleh **Alezonyth** / **MaBroJati**

## 📞 Kontak

- YouTube: [@AlzntyhCh](https://www.youtube.com/@AlzntyhCh)
- Instagram: [@mas.jati_](https://www.instagram.com/mas.jati_)
- Twitter: [@MaBroJati_](https://x.com/MaBroJati_)
- TikTok: [@mas.jati._](https://www.tiktok.com/@mas.jati._)
- GitHub: [MaBroJati](https://github.com/MaBroJati)
- Saweria: [AlezonythCH](https://saweria.co/AlezonythCH)

---

**Catatan**: Website ini dioptimalkan untuk performa dan user experience di semua perangkat. Pastikan untuk test di berbagai ukuran layar untuk hasil terbaik.

---

# 📄 Lisensi
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/
