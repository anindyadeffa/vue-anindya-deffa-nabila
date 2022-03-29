# (15) Vue Data

# Resume Materi

# Vue Data

## pengenalan Data di Vue

### Data Fetching

Data Fetching adalah pengambilan data oleh program perangkat lunak atau skrip. Setelah diambil, data dipindahkan ke lokasi alternatif atau ditampilkan di layar.
Cara Kerja Fetch API
Singkatan dari API (Application Programming Interface) yaitu sebuah protokl pada dasarnya menyediakan bahasa dan kontrak untuk bagaimana dua sistem berinteraksi.

### API Endpoint

API Endpoint, saat API berinteraksi dengan sistem lain, titik kontak dari komunikasi ini dianggap sebagai Endpoint, yang berbentuk Link.

### Fetch Data dengan Axios

Axios adalah sebuah pustaka yang dipakai front-end untuk melakukan HTTP Request kepada link API Endpoint.

### Request Queries

Request Queries, jika Request adalah permohonan pengambilan data, maka Request Queries adalah syarat yang menyatakan data seperti apa yang ingin diambil.
https://pokeapi.co/api/v2/pokemon?limit=20&offset=0

- https://pokeapi.co = Host Endpoint
- /api/v2/pokemon = Nama/Path Endpoint
- ?limit=20&offset=0 = String Query

### Pagination Dengan Queries

Salah satu contoh penggunaan string query pada endpoint adalah untuk pembagian/manajemen halaman.

- Limit: Batasan maksimal jumlah data yang diambil.
- Offset: index untuk memulai pengambilan data.

## Penanganan Data Error

Javascript adalah bahasa yang memiliki tipe data dinamis. Tidak memberikan kesalahan ketika kompillasi, jadi beberapa kali kita akan mendapatkan runtime-error untuk mengakses variabel atau fungsi yang undefined. Penanganan data error adalah konsep untuk mencegah terjadinya runtime-error.
Try Catch Finally adalah metode penanganan error bawaan dari Javascript.

### Cara Kerja Promise

Objek Promise mewakili penyelesaian (atau kegagalan) akhirnya dari operasi asinkrton dan nilai yang dihasilkannya. Aktivitas berkomunikasi dengan API pada umumnya berbentuk promise.
fungsiPromise().them(res=>{}).catch(err=>{});

- fungsiPromise() adalah nama fungsi
- .them(res=>{}) adalah handler jika fungsi sukses
- .catch(err=>{}); adalah handler jika fungsi gagal

## Validasi Data

Validasi Data adalah kkonsep untuk melakukan pengecekan terhadap data apakah sudah sesuai dengan kriteria atau belum, terutama pada input pengguna.
Fungsi validasi menerima nilai yang ingin dicek kemudian mengembalikan nilai keabsahan/validity berupa nilai boolean(true/false).

1. Validasi Manual dengan Javascript, tipe validasi ini sangat kustom, biasa menggunakan fungsi dengan if atau switch.
2. Validasi pada Form, tag form pada HTML5 memiliki fungsi bawaan untuk validasi input pengguna. HTML5 juga menyediakan validasi yang lebih mutakhir, seperti email.
3. Validasi dengan Regex
   Regex adalah singkatan dari Regular Expression. Regex merupakan sebuah teks (string) yang mendefinisikan sebuah pola pencarian sehingga dapat membantu kita untuk melakukan matching (pencocokan) dan locate (pencarian).

### Auntentikasi

Auntentikasi adalah suatu proses yang menjadi tindakan atau pembuktian (validasi) terhadap indentitas pengguna ketika ingin memasuki dan mengakses sistem tertentu.
Cara Kerja Autentikasi:
Pengguna A mengirimkan kredensial yang biasanya berupa kombinasi username atau password, jika cocok maka server akan mengirim akses token, dimana token tersebut adalah pembuktian mutlak kalau pengguna A adalah pengguna A, bukan pengguna lainnya.

### Otorisasi

Authentication adalah mengkonfirmasi pengguna sesuai dengan siapa yang dia claim, sedangkan Authotization adalah mengatur perizinan terhadap tindakan yang dapat dilakukan pengguna.
Cara Kerja Otorisasi:
Pengguna A mengirimkan kredensial yang biasanya berupa kombinasi username atau password, jika cocok maka server akan mengirim akses token, dimana token tersebut adalah pembuktian mutlak kalau pengguna A adalah pengguna A, bukan pengguna lainnya.

### Menerapkan Autentikasi

Sebagai keperluan demo kita akan menggunakan API Endpoint: http://restapi.adequatesshop.com
Dengan listpath:

- Registrati: /api/authaccount/registration [post]
- Login: /api/authaccount/login [post]
  Sedangkan untuk otorisasi kita akan membatasi akses terhadap akun hanya untuk pengguna yang sudah login saja.
  Detail pengguna: /api/user:id [get]

# Task

Buat sebuah aplikasi berita dengan bantuan https://newsapi.org/

- Register terlebih dahulu, setelah login akan mendapat ApiKey untuk bisa fetch data ke https://newsapi.org/
- Usahakan untuk sebaik mungkin menggunakan ilmu yang telah didapat di materi-materi sebelumnya, seperti Media Queries, store, persisted state, dll.
- Jika salah satu berita ditekan, maka akan mengarah ke detail berita, di mana terdapat konten.
- Tampilan tidak harus sama persis namun usahakan rapi. Data yang disajikan harus diambil dari API.
  Hint: Gunakan store untuk menampung detail berita.
