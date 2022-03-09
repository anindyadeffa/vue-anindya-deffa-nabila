# (8) Javascript Refreshment

# Resume Materi

## Pendahuluan

Javascript adalah bahasa pemrograman yang High-level, Scripting, Untyped dan interpreted.

##### Kenapa dengan Javascript?

Javascript adalah bahasa pemrogaman tingkat tinggi, yang dibuat untuk berinteraksi dengan halaman web, apapun itu web browsernya.
Javascript merupakan bahasa yang untyped atau bahasa yang tidak terpengaruh dengan tipe data.
Javacript adalah bahasa yang fleksibel, mudah untuk di uji, dan javascript sendiri memiliki beberapa framework library yaitu Bootstrap, Vue, React, dll.
Javascript adalah bahasa pemrograman yang mudah di pelajari, namun sulit untuk dikuasai, karena banyaknya library yang ada di javascript.

Machine -- Bahasa C -- C++ -- Python -- JavaScript -- Manusia
note : bahasa pemrograman yang semakin mendekati manusia, semakin mudah di mengerti oleh manusia, dan Javascript berada paling dekat atau merupakan bahasa paling tinggi.

## Values

### Declaration

Declaration adalah proses pembuatan variabel untuk menyimpan data. Declaration memiliki 3 cara untuk deklarasi, antara lain:

- Var, pada umumnya jarang digunakan.
- Let, digunakan saat kita membutuhkan nilai yang dapat diubah.
- Const, digunakan saat kita membutuhkan nilai yang tidak bisa di "reassign", dimana tidak dapat memberikan nilai baru saat variabel const tersebut sudah memiliki nilai sebelumnya. Saat kita mendeklarasikan variabel const, kita harus memberikan nilai pada variabel tersebut.

1. Redeclaration adalah mendeklarasikan kembali variabel dengan nama yang sama. Untuk Var disini bisa dilakukan deklarasi ulang, sedangkan Let dan Const tidak dapat dilakukan deklarasi ulang.
2. Reassignment adalah memberikan nilai baru ke dalam variabel yang sudah ada nilai sebelumnya. untuk Var dan Let dapat melakukan reassignment, sedangkan Const tidak.

### Scoping

Scoping adalah untuk menentukan dimana variabel, fungsi, dan objek diatur dan dapat diakses dalam kode kita. Ini berarti ruang lingkup variabel dikendalikan oleh lokasi deklarasi variabel.

1. Global Scope
2. Function Scope
3. Block Scope

### Hoisting

Hoisting adalah membuat beberapa jenis variabel atau fungsi yang dapat diakses atau digunakan dalam kode sebelum di deklarasikan.
Deklarasi Var dan function adalah hoisted, oleh karena itu mereka dapat digunakan bahkan sebelum deklarasi itu sendiri terjadi. Sedangkan Let dan const tidak hoisted, oleh karena itu mereka tidak dapat digunakan bahkan sebelum deklarasi terjadi.

### Values & References

1. Primitives, meneruskan nilai.
   Primitive dalam pemrograman adalah unit pemprosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman.
   Tipe data yang ada pada Primitive terdapat String, Boolean, Number, BigInt(ES11), Undefined, Null, dan Symbol (ES6).

2. Objects, juga disebut dengan collection atau reference type.
   Objects adalah unit yang menyimpan properti dan fungsi (method).
   Terdapat : Object, Array, Function, Date, Set, Map, Weak Set, dan Weak Map.

Aturan sederhana untuk meneruskan nilai adalah bahwa semua nilai primitif dalam JavaScript diteruskan oleh nilai.
Meneruskan References bagaimanapun, akan memberikan references yang sama.

### Destructuring

Destructuring adalah ekspresi dari JavaScript yang memungkinkan untuk menyalin nilai dari array, atau propeprt dari objek, ke dalam variabel yang berbeda.

1. Array, seperti assignment, maka kita harus mendeklarasikan variabel tersebut terlebih dahulu. Menggunakan const ketika data tersebut kosong atau undefined, tidak akan terjadi error.
2. Object, kita dapat menyalin nilai properti object ke dalam suatu variabel.

### Spread

Spread Syntax dapat digunakan ketika semua elemen dari object atau array perlu dimasukkan ke dalam semacam daftar. Spread terdiri dari Array dan Object.

### Method pada Array

Method adalah sebuah fungsi yang terkait dengan object, membuat programnya sesederhana mungkin, sesuai kegunaan masing-masing.

1. Concat, menghubungkan dua atau lebih array, dan mengembailkan salinan array yang digabungkan.
2. Map, membuat array baru dengan hasil memanggil fungsi untuk setiap elemen array.
3. Foreach, memanggil fungsi setiap elemen array.
4. Slice, memilih bagian dari array, dan mengembalikan array baru.
5. Filter, membuat array baru dengan setiap elemen, dalam array yang lulus seleksi.
6. Reduce, melakukan operasi pada setiap elemen array menjadi nilai tunggal (dari kiri ke kanan).

### Control Flow

1. Normal Flow adalah pengeksekusian statement dari atas ke bawah atau kiri ke kanan yang dilakukan secara berurutan.
2. Control Flow adalah untuk mengatur alur eksekusi pada statement atau jalannya program sesuai keinginan kita.
   - Pengulangan (Loop / Iterasi) (For, While, Do While)
   - Pengkondisian (Percabangan) (If ... Else, Switch, Block, Try Catch, Break, Continue, Throw)
   - Try ... Catch
     Try bertugas mengeksekusi statment di dalamnya, sedangkan catch bertugas menangkap error yang terjadi pada statment di dalam try.
   - Throw, terjadi didalam block try, bertugas melemparkan error sesuai kondisi yang diinginkan, error itu akan ditangkap oleh cathc.

### Function

Function di dalam Javascript adalah sebuah objek, karena memiliki properti dan juga method.
Function digunakan untuk melakukan serangkaian komputasi / produser yang dapat digunakan berulang kali.

### Async - Await

1. Synchronous, mengekeskusi setiap perintah satu persatu sesuai urutan kode yang dituliskan.
2. Asynchronous, hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses.
3. Callback adalah fungsi yang dikirimkan sebagai parameter pada fungsi lain atau Callback adalah fungsi yang dieksekusi setelah fungsi lain selesai dijalankan.
4. Promise adalah objek yang merepresentasikan keberhasilan atau kegagalan pada sebuah event yang asynchronous dimasa mendatang.
5. Asynchronous Function adalah sebuah function yang bekerja secara asynchronous yang menghasilkan promise sebagai return value-nya, tetapi cara penulisan code-nya menggunakan penulisan yang synchronous (standar).
6. Await adalah sebuah keyword yang terdapat pada async function yang tujuannya menghentikan eksekusi sambil menunggu promise-nya selesai.

## Task

### Question :

1. Melakukan penulisan ulang kode seperti pada contoh gambar, dan simpan dengan format javascript.
   a. Ambilah index ke 2 dalam array di baris 5 dan tampilkan dalam console.
   b. Ubah kode diatas sehingga dapat menampilkan baris 22 di dalam console.
   c. Lakukan pemanggilan untuk function perkenalan pada baris 31.
   d. Bebas untuk mengubah kode diatas sehingga menampilkan output pada console seperti pada contoh gambar.

2. Jawab pertanyaan dibawah sesuai dengan materi yang telah dijelaskan!

   a. Jelaskan kenapa baris 21, 22, 23 tidak dapat tampil?

   b. Jelaskan kenapa deklarasi pada baris 26 menyebabkan error?

   c. Dengan melakukan komen pada baris ke 26, apakah baris 28 dapat di eksekusi? Jelaskan.

3. Lakukan desctucturing pada kode di bawah sehingga Budi Tersimpan dalam variable bernama a, Sita tersimpan dalam variabel bernama b, dan Ayu terseimpan dalam variable bernama c.
4. Kalian memiliki sebuah variable berikut (let bdays = ['10-17','05-19','20-19']). Ubahlah tanda (-) dalam variabel tersebut menjadi (/) sehingga output yang akan keluar dalam console menjadi ['10/17','05/19','20/19']
5. Kalian memiliki variabel berikut (let value = [1,2,3,4,5,6]). Kalikan setiap value dalam array tersebut dengan dua. Sehingga, ketika dipanggil variable value mengeluarkan output berupa [ 2, 4, 6, 8, 10, 12 ]
6. Kalian memiliki variabel berikut (let arr = [1.5, 2.56,5.1,12.33]). Bulatkan ke atas variable tersebut sehingga output yang dihasilkan adalah [2, 3, 5, 12].

### Answer :

1. Untuk file source-code : [nomor-1](pratikum/nomor-1.js)
   a. Melakukan penambahan function untuk pendeklarasian variable 'lengkap_arr' dengan code "console.log(lengkap_arr[2]);".
   Hasil screenshot untuk nomor 1 a : ![nomor-1a](screenshots/nomor-1a.png)
   b. Melakukan pengubahan kondisi yang terdapat pada baris 4, yaitu mengubah dari false menjadi true.
   Hasil screenshot untuk nomor 1 b : ![nomor-1b](screenshots/nomor-1b.png)
   c. Melakukan pemanggilan untuk function perkenalan.
   Hasil screenshot untuk nomor 1 c : ![nomor-1c](screenshots/nomor-1c.png)
   d. Membuat variabel baru yaitu variabel data.
   Hasil screenshot untuk nomor 1 d : ![nomor-1d](screenshots/nomor-1d.png)

2. Jawab pertanyaan dibawah sesuai dengan materi yang telah dijelaskan!
   a. Jelaskan kenapa baris 21, 22, 23 tidak dapat tampil? Karena nilai awal atau
   kondisi sebelumnya adalah 'false', oleh karena itu baris 21, 22, 23 tidak dapat di eksekusi, dengan mengubahnya menjadi 'true' baris - baris menjadi dapat dieksekusi dan juga tampil dalam output console.

   b. Jelaskan kenapa deklarasi pada baris 26 menyebabkan error? Karena variabel nama menggunakan deklarasi variabel 'const', dimana 'const' memiliki nilai yang konstan atau fix, dan juga 'const' tidak bisa dilakukannya 'reassign' yang artinya tidak dapat memberikan nilai baru saat variabel const tersebut sudah memiliki nilai sebelumnya.

   c. Dengan melakukan komen pada baris ke 26, apakah baris 28 dapat di eksekusi? Jelaskan.
   Bisa, karena jika terdapat error pada baris sebelumnya, maka baris setelahnya tidak dapat dieksekusi.

   Dan untuk baris 28, yaitu "console.log("asal diakses = " + asal);", dilakukannya komen pada baris tersebut, karena ditemukannya error, karena tidak adanya pendeklarasian untuk variabel 'asal' tersebut, dan juga tidak adanya variabel 'asal' didalam array 'lengkap_arr'.

3. Untuk file source-code : [nomor-3](pratikum/nomor-3.js)
   Hasil screenshot nomor 3 : ![nomor-3](screenshots/nomor-3.png)
4. Untuk file source-code : [nomor-4](pratikum/nomor-4.js)
   Hasil screenshot nomor 4 : ![nomor-4](screenshots/nomor-4.png)
5. Untuk file source-code : [nomor-5](pratikum/nomor-5.js)
   Hasil screenshot nomor 5 : ![nomor-5](screenshots/nomor-5.png)
6. Untuk file source-code : [nomor-6](pratikum/nomor-6.js)
   Hasil screenshot nomor 6 : ![nomor-6](screenshots/nomor-6.png)
