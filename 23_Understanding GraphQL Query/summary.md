# (23) Understanding GraphQL Query

# Resume Materi

## Query

Dengan graphQL kita bisa mendapatkan data sesuai dengan apa yang kita butuhkan. Kita bisa menentukan field apa saja yang diinginkan dan graphQL dapat memberikan data berdasarkan dari data yang telah kita tentukan.

1. Query - multiple related data sources / collections
   Kita dapat menggunakan query untuk mendapatkan data dari beberapa multiple collections.
2. Query - multiple ubrelated data sources / collections
   Kita dapat menggunakan query untuk mendapatkan data dari multiple unrelated collections untuk meminimalisir network request. Dengan REST kita membutuhkan setidaknya 2 request ke 2 endpoint yang berbeda. Dengan GraphQL kita bisa melakukan 1 request untuk mendapatkan data tersebut.
3. Query - fragments
   GraphQL fragment adalah sebuah potongan logic dimana kita bisa berbagi antara beberapa query dan mutation. Kita juga bisa menggunakan fragment untuk mempersingkat query atau mutation tersebut.
