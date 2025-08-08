# DymsQuotes

A modern Single Page Application (SPA) built with **Vue 3**, **TypeScript**, and **Vite**.  
DymsQuotes menampilkan kutipan inspiratif dari [ZenQuotes API](https://zenquotes.io/) dengan tampilan responsif, tema dark/light mode, dan navigasi yang mudah.

---

## ✨ Fitur

- **Random Quote**: Tampilkan kutipan inspiratif acak.
- **Quotes List**: Lihat daftar 50 kutipan acak.
- **Quotes Image**: Lihat gambar kutipan inspiratif acak.
- **Dark/Light Mode**: Ganti tema secara manual atau otomatis mengikuti sistem.
- **Responsive Design**: Tampilan optimal di HP, tablet, dan desktop.

## 🚀 Tech Stack

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- [ZenQuotes API](https://zenquotes.io/)

## 📂 Struktur Proyek

```
src/
  assets/         # Aset statis (ikon, gambar)
  components/     # Komponen Vue (Home, QuotesRandom, QuotesList, QuotesImage)
  App.vue         # Root component
  main.ts         # Entry point aplikasi
  router.ts       # Konfigurasi Vue Router
  style.css       # Global style & CSS variable tema
```

## 🔗 API Endpoints

- `https://zenquotes.io/api/random` — Mendapatkan 1 kutipan acak
- `https://zenquotes.io/api/quotes` — Mendapatkan 50 kutipan acak
- `https://zenquotes.io/api/image` — Mendapatkan gambar kutipan inspiratif acak

## 🛠️ Cara Menjalankan

1. **Install dependencies**
    ```sh
    npm install
    ```

2. **Jalankan development server**
    ```sh
    npm run dev
    ```
    Buka [http://localhost:5173](http://localhost:5173) di browser.

3. **Build untuk produksi**
    ```sh
    npm run build
    ```

## 🎨 Tema & Responsif

- Semua warna dan layout menggunakan CSS variable di `src/style.css`.
- Mendukung dark mode & light mode, bisa diubah manual lewat tombol di halaman Home.
- Desain responsif otomatis untuk mobile, tablet, dan desktop.

## Versi API

- 🚀 [quote-api-typescript-bun (GitHub)](https://github.com/DimasVSuper/quote-api-typescript-bun)
- 🌐 [ZenQuotes API (Official)](https://zenquotes.io/)

## 📄 Lisensi

MIT

---

> Made with ❤️ by DimasVSuper — Vue 3 + Vite