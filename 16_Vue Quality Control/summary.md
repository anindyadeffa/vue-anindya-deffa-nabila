# (16) Vue Quality Control

# Resume Materi

# Penguasaan Kualitas Aplikasi Vue

## Debugging

Debugging adalah proses mengidentifikasi dan menghilangkan kesalahan dari perangkat lunak komputer.
Cara Kerja Debugging:

1. Identifikasi kesalahan
2. Identifikasi solusi

Perkakas untuk Identifikasi Kesalahan

- Devtools
- Consoles
- Logs

Tips Identifikasi Kesalahan, antara lain:

1. Tenang dan fokus
2. Rasional dan kontekstual
3. Perhatian yang detail untuk petunjuk sekecil apapun
4. Tidak tergesa-gesa untuk bertanya

Sumber Identifikasi Solusi, antara lain:

1. Diri Sendiri (pengetahuan dan pengalaman)
2. Rekan Kerja (peer, senior, atau leader)
3. Google (Dokumentasi, Stackoverflow, Isu Repository, Blog/Vlog tutorial, dll.)
4. Komunitas (Forum, Telegram, Discord, Media Sosial, dll.)

## Unit Testing

Unit Testing adalah proses verifikasi bahwa kode kita benar-benar berperilaku seperti yang diharapkan dan validasi bahwa kode kita tetap benar sepanjang masa aplikasi.
Cara Kerja Unit Testing:
Unit Testing memberikan kita kesempatan untuk menguji potongan kode secara individual dan terisolasi dalam bentuk Test Assertion.
Test Assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada kesalahan atau perilaku yang tidak diharapkan di kode kita.

Perkakas Unit Testing
Unit Testing pada aplikasi Vue umumnya dilakukan oleh pustaka rangka kerja pendukung.
Tersedia 2 pilihan library: Jest dan Mocha.

Kenapa harus Unit Testing?

1. Meningkatkan rasa percaya diri
2. Meningkatkan standar kode
3. Mencegah kesalahan sebelum benar-benar terjadi
4. Memberi batasan dan kriteria yang jelas jika melakukan refactor.

## Jest

Jest adalah salah satu kerangka kerja untuk melakukan Unit Testing pada aplikasi yang berbasis Javascript.

## Matriks Ukur Kinerja

Matriks Ukur Kinerja adalah tolak ukur penting yang menunjukkan informasi seberapa baik kinerja aplikasi kita.
Cara Kerja Matriks Ukur Kinerja, dengan bantuan sebuah perkakas yang menjalankan serangkaian pemeriksaan sebelum menghasilkan laporan terperinci dan skor tentang seberapa baik kinerja halaman.

### Lighthouse Audit

Lighthouse Audit adalah perkakas yang membantu menentukan skor pada matriks ukur kinerja aplikasi web.

### Mengukur Matriks dengan Lighthouse Audit

Jalankan aplikasi pada peramban Google Chrome, buka Devtools pada tab Lighthouse kemudian "Generate Report".

## Mengoptimalkan Kinerja

Mengoptimalkan Kinerja adalah proses untuk meningkatkan kinerja aplikasi web berdasarkan informasi skor matriks ukur.

### Core Web Vitals

Kumpulan metrik website yang ditentukan oleh Google.
Kumpulan metrik ini ditetapkan sebagai bagian dari indikator ranking pencarian terbaru Google, yaitu page experience.

### 3 Indikator Core Web Vitals

1. LCP (Largest Contentful Paint) (Loading)
   Berkaitan dengan kecepatan website.
2. FID (First Input Delay) (Interactivity)
   Berkaitan dengan baik atau tidaknya respons elemen halaman website.
3. CLS (Cumulative Layout Shift) (Visual Stability)
   Berkaitan dengan stabilitas layout halaman website.

## Task

Buatlah sebuah file pembantu yang berisikan operasi aritmatika yang valid. Kemudian buatlah unit test yang meliputi 100% coverage dari file tersebut. (minimal 3 test case untuk masing-masing operasi)
Operasi yang harus ada:

1. Penjumlahan (2 Parameter)
2. Pengurangan (2 Parameter)
3. Pembagian (2 Parameter)
4. Perkalian (2 Parameter)
5. Rata-rata (5 Parameter)
6. Sisa bagi (2 Parameter)
7. Luas Persegi (2 Parameter)
8. Luas Lingkarang (2 Parameter)
9. Luas Kubus (3 Parameter)
10. Volume Kubus (3 Parameter)
