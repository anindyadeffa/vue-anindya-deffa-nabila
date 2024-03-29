# (6) CSS

# Resume Materi

## Cascading Style Sheets (CSS)

Cascading Style Sheets (CSS) adalah suatu bahasa yang digunakan untuk dapat menghias halaman (color, size, font, background, width, height, dll). Selain itu, juga dapat mengatur posisi pada halaman web (float, align, display, position, dll).

Ada 3 cara menambahkan file CSS ke dalam HTML, antara lain:

- External CSS, berupa link file yang disisipkan ke dalam tag head pada HTML. Ekstensi file CSS adalah .css
- Internal CSS, biasa digunakan di dalam satu file HTML, didalam bagian tag head maupun body HTML, di definisikan dengan tag style.
- Inline CSS, biasa digunakan untuk elemen tunggal pada HTML.

1. CSS Selector
   CSS Selector adalah pola yang digunakan untuk memilih element, yang ingin di styling.

   - Selector ID (#), setiap element hanya memiliki satu tag id, dan dalam satu halaman tidak boleh ada dua penamaan id yang berbeda.
   - Selector Class (.), tag class dengan nama yang sama dapat dipakai berulang, dan satu element boleh memiliki lebih dari satu Class yang berbeda.

2. CSS Grouping
   CSS Grouping adalah beberapa selector dapat dikelompokkan ke dalam satu deklarasi style, penggunaannya <selector>,<selector>.

   - contoh : h1,h2 {}.

3. CSS Font
   CSS Font adalah beberapa font style pada css. (font, font-family, font-size, font-weight, dan font-style).

4. CSS Margin & Padding adalah membuat ruang atau jarak disekitar element.

5. CSS Background adalah beberapa style background di CSS (background-color, image, repeat, size, dan position).

6. CSS Link Event adalah beberapa link event pada CSS (:hover, :active, :visited).

7. CSS Transisi adalah transisi CSS dapat mengubah value properti menjadi lebih halus dalam durasi yang ditentukan.

8. CSS Display adalah menentukan tampilan pada element (block, inline-block, dan none).

9. CSS Table adalah membuat style pada element table HTML.
   - border untuk menambahkan border pada table, th, dan td.
   - border-collapse untuk membuat border menjadi single border.
   - :nth-child(even) untuk membuat background stripe.

## Task

Membuat halaman HTML dengan nama file file1.html dengan ketentuan penggunaan font-family dan font-size yang telah ditentukan. Dan membuat sebuah file baru dengan nama file file2.html dengan contoh design yang sudah diberikan untuk memperbaiki bentuk tampilan website menggunakan CSS.

Berikut link file source code dari pratikum ini:

- Untuk halaman file-1 : [file-1](pratikum/file1.html)
- Untuk halaman file-2 : [file-2](pratikum/file2.html)

Dan berikut hasil screenshot dari halaman HTML yang telah dibuat :

![file](screenshots/file-1.png)
![file-2](screenshots/file-2.png)
![file-2-resp](screenshots/file-2-mobile-responsive.png)
