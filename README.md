# 🧘 Sedona Method — Clean Up Procedure & Releasing App

Aplikasi web untuk latihan **Sedona Method / releasing** (melepas emosi & keinginan) berbahasa Indonesia, terinspirasi pendekatan **Coach Lia**. Berisi beberapa modul terpandu: membersihkan hubungan dengan orang lain (*Clean Up Procedure*), sesi *letting go* harian, *manifesting workbook*, hingga program 14 hari lepas dari resistensi.

Aplikasi ini berupa **situs statis** (HTML/CSS/JS murni, tanpa build step) dengan **backend opsional** berbasis Google Apps Script + Google Sheets untuk menyimpan riwayat sesi. Tanpa backend pun aplikasi tetap berjalan menggunakan `localStorage`.

---

## ✨ Modul

| Halaman | Modul | Deskripsi |
|---|---|---|
| `sedona-app.html` | **Hub** | Halaman utama / dashboard dengan tautan ke semua modul + ringkasan progres. |
| `cleanup-procedure.html` | **Clean Up Procedure** | Melepas resistensi terhadap satu orang melalui 4 wanting: Control, Approval, Security, Separation. |
| `letting-go.html` | **Letting Go** | Sesi *guided releasing* + skrip Sedona Method gaya Coach Lia (mental miskin, keberlimpahan, healing, dll). |
| `manifesting-workbook.html` | **Manifesting Workbook** | Goals, discover, release, action, dan log emosi untuk proses manifestasi. |
| `daily-release.html` | **Daily Emotional Release** | Pelepasan emosi harian. |
| `core-wanting-release.html` | **7 Core Wanting Release** | Pelepasan 7 keinginan inti. |
| `14-days-resistance.html` | **14 Days Free From Resistance** | Program 14 hari melepas resistensi per area kehidupan. |
| `area-session.html` | **Area Session** | Sesi per area resistensi (uang, hubungan, tubuh, pikiran, dll). |
| `resistance-session.html` | **Resistance Session** | Wizard sesi resistensi 8 langkah. |

---

## 🛠️ Teknologi

- **Frontend:** HTML, CSS, JavaScript (vanilla, tanpa framework / build tool)
- **Engine:** `releasing-engine.js` — mesin sesi terpandu (skrip langkah, modal, timer, callback)
- **Penyimpanan lokal:** `localStorage`
- **Backend (opsional):** Google Apps Script (`Code.gs`) + Google Sheets

---

## 📁 Struktur File

```
├── sedona-app.html            # Hub / halaman utama
├── cleanup-procedure.html     # Modul Clean Up Procedure
├── letting-go.html            # Modul Letting Go
├── manifesting-workbook.html  # Modul Manifesting Workbook
├── daily-release.html         # Daily Emotional Release
├── core-wanting-release.html  # 7 Core Wanting Release
├── 14-days-resistance.html    # Program 14 hari
├── area-session.html          # Sesi per area resistensi
├── resistance-session.html    # Wizard sesi resistensi
│
├── config.js                  # Konfigurasi terpusat (URL API & nama default)
├── common.js                  # Utilitas bersama (apiCall, toast, storage, timer)
├── releasing-engine.js        # Mesin sesi guided releasing + semua skrip
├── letting-go-app.js          # Logika halaman Letting Go
├── manifesting-app.js         # Logika halaman Manifesting Workbook
├── resistance-app.js          # Logika wizard resistensi
├── area-session.js            # Logika sesi per area
├── resistance-areas-data.js   # Data 8 area resistensi
├── styles.css                 # Style global
│
└── Code.gs                    # Backend Google Apps Script
```

---

## 🚀 Cara Menjalankan

### Frontend
Karena ini situs statis, cukup buka lewat web server statis apa pun:

```bash
# contoh dengan Python
python3 -m http.server 8000
# lalu buka http://localhost:8000/sedona-app.html
```

Atau host gratis di **GitHub Pages** (Settings → Pages → branch `main`).

### Backend (opsional, untuk simpan ke Google Sheets)
1. Buat Google Spreadsheet baru.
2. **Extensions → Apps Script**, hapus isi default, lalu **paste seluruh isi `Code.gs`**.
3. **Deploy → New deployment → Web app**
   - *Execute as:* **Me**
   - *Who has access:* **Anyone**
4. Salin **Web app URL** (berakhiran `/exec`).
5. Tempel URL tersebut ke `config.js` (lihat di bawah). Sheet akan dibuat otomatis saat data pertama disimpan.

> **Penting:** setiap kali `Code.gs` diubah, lakukan **Deploy → Manage deployments → Edit → New version** agar perubahan aktif.

---

## ⚙️ Konfigurasi

Semua pengaturan deployment ada di **`config.js`**:

```js
window.SEDONA_CONFIG = {
  apiUrl: 'https://script.google.com/macros/s/XXXX/exec', // URL Web App Apps Script
  defaultName: 'Nama Default'                              // nama default sesi (boleh '')
};
```

`common.js` dan `manifesting-app.js` membaca nilai ini; jika `config.js` tidak ada, keduanya jatuh ke nilai bawaan sehingga aplikasi tetap berfungsi. URL API juga bisa diubah per-perangkat lewat menu **Settings** di aplikasi (disimpan di `localStorage`).

> Ingin menjaga URL/nama tetap privat? Tambahkan `config.js` ke `.gitignore` dan commit `config.example.js` sebagai template.

---

## 📖 Cara Pakai Singkat

1. Buka `sedona-app.html`.
2. Pilih modul dari sidebar.
3. Ikuti sesi terpandu — setiap langkah memandu untuk **menyambut** perasaan/keinginan lalu **melepaskannya**.
4. Catat *insight* di akhir sesi; progres & riwayat tersimpan (lokal, dan ke server bila backend diaktifkan).

---

## 📝 Lisensi

Proyek personal untuk penggunaan edukatif/pribadi. Teknik Sedona Method © Hale Dwoskin / Sedona Training Associates; materi pendekatan terinspirasi dari Coach Lia.
