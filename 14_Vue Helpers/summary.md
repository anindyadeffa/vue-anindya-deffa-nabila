# (14) Vue Helpers

# Resume Materi

## Navigasi

Navigasi adalah kegiatan berpindah dari satu halaman ke halaman lain.
Pada dasarnya, Vue adalah Single Page Application yang berarti hanya ada satu entry halaman HTML saja namun konten dari halaman HTML tersebut dirender ulang (dengan bantuan Javascript) sehingga seolah-olah berganti halaman.
Cara Vue Melakukan Navagasi, antara lain:

1. Untuk dapat berpindah ke halaman yang diinginkan, pertama yang perlu dipastikan adalah halaman tersebut ada.
2. Katakanlah kita ingin berpindah halaman dari halaman Home ke halaman About.
3. Kemudian kita bisa membuka halaman About dengan mengetik manual di address bar:/about
4. Cara yang lebih layak sediakan opsi kontroler pengguna untuk mengakses halaman tersebut dengan link atau tombol.

### Navigasi Beranak

Navigasi beranak adalah sub-path dari path yang ada.
/user/setting/privacy

- user : Induk dari setting
- setting : Anak dari User dan Induk dari Privacy
- privacy : Anak dari Setting

### Navigasi Dinamis

Navigasi dinamis adalah dimana path tersebut memiliki nilai sembarang dan kita tidak perlu mendefinisikan nilainya satu-persatu.

- Navigasi Statis : path didefinisikan manual seperti user.
- Navigasi Dinamis : path tidak didefinisikan sesuai nilainya, namun sesuai key parameter seperti /user/:id
  Untuk mengambil nilai dinamis yang ada di path parameter dengan menggunakan route params.

## Layout Template Vue

Layout adalah susunan tata letak, sedangkan layout template pada Vue adalah komponen yang dapat dipakai sebagai susunan tata letak dasar yang membungkus masing-masing halaman.

- Layout: memuat susunan tata letak yang sama untuk setiap halaman, seperti halnya navbar atau footer.
- Halaman: memuat komponen yang berubah ubah sesuai konten halaman, namun sudah tidak perlu lagi menyertakan navbar di setiap komponen view halaman.

### Cara Kerja Layout Template

Pada dasarnya, layout hanyalah komponen biasa, yang membedakan adalah layout dapat meneruskan konten dari anak komponennya.

### Direktori Layout

Umumnya, layout memiliki direktori terpisah sejajar dengan direktori router atau sejajar dengan direktori view.

### Membuat dan Menggunakan Layout

Jika katakanlah kita memiliki 3 path, langkah pertama adalah membuat komponen layoutnya.

## Penyimpanan Global

Penyimpanan global adalah sebuah metode untuk menyimpan variabel yang dapat diakses dengan mudah di seluruh bagian aplikasi.

- State Komponen, hanya tersimpan dan valid pada satu komponen saja.
- Props, hanya tersimpan dan valid di induk atau anak komponen saja.
- Store, tersimpan dan valid di bagian manapun dari aplikasi.

## Penyimpanan Global dengan Vuex

Vuex adalah pola manajemen penyimpanan atau store yang berbentuk pustaka untuk aplikasi Vue.js.
Vuex adalah penyimpanan terpusat untuk semua komponen dalam aplikasi dengan aturan yang memastikan bahwa variabel yang tersimpan hanya dapat dimutasi dengan cara yang terstruktur dan terprediksi.
Untuk membuat store dengan Vuex dapat menggunakan sintaks sebagai berikut, kemudian sisipkan sotre ke dalam inisiasi Vue yang ada di main.js.
Untuk menggunakan state variabel yang telah tersimpan di Vuex Store, dapat menggunakan sintaks berikut.

### Direktori Vuex Store

Pada umumnya Vuex store memiliki direktori seniri bernama store yang sejajar dengan direktori main.js. Selain index.js, biasanya di dalam direktori store juga tersimpan modul-modul store untuk pengelompokkan state supaya lebih rapi dan terstruktur.

### Vuex Mutations

Untuk memodifikasi nilai dari state yang tersimpan di dalam store menggunakan sintaks mutation.
Kemudian dari komponen dapat memanggil fungsi mutations yang telah dibuat.
store.commit("setAngka",this.newInputValue);

- commit, key untuk melakukan mutation.
- "setAngka", nama mutation.
- this.newInputValue, payload/ mutation.

Berdasarkan praktek terbaik penggunaan mutations, hanya bertujuan untuk mengubah nilai variabel yang ada di dalam store tanpa ada logika pengolahan muatan di dalam fungsi mutation tersebut.
Jadi dari komponen Vue disarankan untuk terhubung ke Actions, sedangkan Actions akan berhubungan langsung dengan Mutations.

### Vuex Actions

Vuex Actions bertugas sebagai pintu masuk perintah yang menghubungkan komponen dengan store, Actions perlu memanggil fungsi di Mutations untuk memodifikasi nilai state yang ada di Store. Selain itu, Actions juga tempat untuk melakukan komunikasi dengan API.
store.dispatch("changeAngkaValue",this.newInputValue);

- dispatch, key untuk melakukan action.
- "changeAngkaValue", nama mutation.
- this.newInputValue, payload/ mutation.
  Memecah Store Sebagai Modul
  Salah satu praktik terbaik dalam penggunaan Vuex Store adalah dengan cara memisah atau mengisolasi state, mutations dan actions ke dalam modul-modul terpisah.

Nilai yang ada di dalam Vuex Store akan dihapus atau di setel ulang sesuai dengan nilai awal jika halaman dimuat ulang, karena nilai state yang ada di Store di simpan di dalam memory instance.

## Penyimpanan Global Permanen

Pada kasus pemakaian tertentu kita perlu mempermanenkan state yang ada di store supaya tidak hilang jika halaman dimuat ulang, konsep ini disebut dengan Penyimpanan Global Permanen.
Penyimpanan Permanen dengan vuex-persistedstate, dapat mempertahankan dan rehidrasi Vuex state kita di antara pemuatan ulang halaman, dengan menyimpannya di localstorage atau bahkan di dalam cookies.

## Task

List tidak boleh hilang meskipun halaman dimuat ulang, jika judul salah satu list di klik, maka navigasi ke halaman detail, deskripsi didalam halaman detail dapat diubah dan tidak boleh hilang.
