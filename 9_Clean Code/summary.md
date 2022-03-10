# (9) Clean Code

# Resume Materi

## Clean Code

Clean Code adalah istilah untuk kode yang mudah dibaca, difahami, dan diubah oleh programmer.

Kenapa harus melakukan 'Clean Code'?

- Work Collaboration, tidak memungkiri kita nantinya akan bekerja secara berkolaborasi, dimana bekerja secara team, bukan individual.
- Feature Development, membuat fitur baru menjadi mudah dibaca, difahami, dan memodifikasinya menjadi lebih mudah.
- Faster Development, memudahkan pengerjaan menjadi lebih cepat.

Karakteristik dari Clean Code, antara lain:

- Penamaan yang mudah difahami.
- Mudah dieja dan dicari.
- Singkat namun mendeskripsikan konteks.
- Konsisten.
- Hindari penambahan konteks yang tidak perlu.
- Komentar
- Function

Saran Formatting:

- Lebar baris code 80 - 120 karakter.
- Satu class 300 - 500 baris.
- Baris code yang berhubungan saling berdekatan.
- Deklarasi variabel berdekatan dengan penggunanya.
- Perhatikan indentasi.
- Menggunakan prettier atau formatter.

## Clean Code Principle

1. KISS (Keep It So Simple)
   Hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst.
   Tips dari KISS, antara lain:

   - Fungsi atau class harus kecil.
   - Fungsi dibuat untuk melakukan satu tugas saja.
   - Jangan gunakan terlalu banyak argumen pada fungsi.
   - Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil dan jumlahnya minimal.

2. DRY (Don't Repeat Yourself)
   Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang.

3. Refactoring
   Refactoring adalah proses restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY bisa dicapai dengan cara refactor.
   Teknik Refactoring, antara lain:
   - Membuat sebuah abstraksi.
   - Memecah kode dengan fungsi/class.
   - Perbaiki penamaan dan lokasi kode.
   - Deteksi kode yang memiliki duplikasi.

## Task

### Problem 1 - Analysis

Melakukan analisis dan menemukan kekurangan dalam penulisan kode yang telah diberikan.

File kode yang telah diberikan untuk di analisis : [problem-1](pratikum/problem-1.js)

Screenshot kode yang telah diberikan untuk di analisis : ![problem-1](pratikum/problem-1.png)

Hasil Analisis:
Berikut kekurangan yang telah ditemukan :

1. Pada class user,

   - Pemberian penamaan yang seharusnya dilakukan untuk penamaan id, menjadi 'userId' atau user_id, agar lebih jelas bahwa object tersebut milik class user.
   - Dan juga penggunaan deklarasi variabel yaitu var, yang biasanya menggunakan constructor didalam class untuk pemanggilan object-object pada class user tersebut.

2. Pada class user service,

   - Pemberian penamaan class dilakukan dengan menggunakan tanda hubung garis bawah, atau menggunakan huruf capital di setiap katanya, seperti 'userService' agar menjadi lebih dipahami.
   - Penamaan didalam method 'getallusers' dan juga 'getuserbyid', dilakukan menggunakan huruf kapital disetiap katanya, sebagai contoh menjadi 'getAllUsers'dan 'getUserById'.

### Problem 2 - Rewrite

Ubahlah penuisan kode berikut menjadi lebih terbaca dan rapi!
File kode yang telah diubah : [problem-2](pratikum/problem-2.js)
