# BAB 1
# Pengantar Go Programming

## A. Instalasi Program Go
Menginstall program Go tergolong mudah, pertama yang harus dilakukan yaitu kunjugi situs web Go https://go.dev/

![Screenshot 2023-05-31 094620](https://github.com/Rachma-Nurhaliza-Parindra/tubes-kel-2/assets/98588309/ce873c17-53ce-4ed2-8a09-05a63dd9649d)

Kemudian klik download dan pilih OS (Sistem Operasi) pada laptop yang digunakan, Go mendukung OS berupa Windows, macOS dan Linux, Berikut tampilan awal pada Go Programming :

![Screenshot 2023-05-31 095637](https://github.com/Rachma-Nurhaliza-Parindra/tubes-kel-2/assets/98588309/ae4b52f8-d4b8-49b5-933b-5c1891db9990)

Kemudian klik next hingga ada pemberitahuan install, kemudian install

![Screenshot 2023-05-31 100419](https://github.com/Rachma-Nurhaliza-Parindra/tubes-kel-2/assets/98588309/b80ed88b-4249-4d22-b99e-3d9d864c2009)

Setelah program selesai di install, Program Go siap digunakan

![Screenshot 2023-05-31 100744](https://github.com/Rachma-Nurhaliza-Parindra/tubes-kel-2/assets/98588309/74211733-c5ac-41f9-b32e-9807ad41028e)

Untuk memeriksa versi Go yang terpasang, Buka terminal atau Command Prompt (CMD) kemudian ketikan "go version" setelah itu dapat terlihat versi pada perangkat anda

![Screenshot 2023-05-31 101942](https://github.com/Rachma-Nurhaliza-Parindra/tubes-kel-2/assets/98588309/1bf6350b-198c-41aa-a92c-77503e98f395)

## B. Code editor
Code editor yang biasa digunakan yaitu Notepad. Namun pemrograman Go dapat diolah pada code editor apapun. Berikut beberapa daftar code editor yang biasa digunakan :
1. Visual Studio Code (VSCode)
2. Notepad
3. Notepad++
4. Sublime Text 
5. vim
6. nano
7. Intellij IDEA

Berikut code editor yang akan digunakan yaitu Visual Studio Code (VSCode) :

![Screenshot 2023-05-31 104111](https://github.com/Rachma-Nurhaliza-Parindra/tubes-kel-2/assets/98588309/8d1acde5-0a92-490f-b47d-27e55645e22b)

## C. Hello World
Untuk memulai memogram bahasa pemrograman Go dapat dimulai dengan menampilkan hello word. Anda dapat menggunakan code editor yang ingin digunakan. Pertama buatlah folder bernama hello. Kedua buatlah file "hello.go" di dalam folder yang telah dibuat. Kemudian ketikan code program seperti berikut :

![Screenshot 2023-05-31 110438](https://github.com/Rachma-Nurhaliza-Parindra/tubes-kel-2/assets/98588309/14e808f8-7796-4f44-9098-d7c808d3b2c9)

Kemudian buka terminal atau command prompt (CMD) kemudian ketikan "go run hello.go. Kemudian hasilnya akan keluar seperti berikut :

![Screenshot 2023-05-31 111931](https://github.com/Rachma-Nurhaliza-Parindra/tubes-kel-2/assets/98588309/44bcc208-a20d-4a23-88bb-62eae4b2b834)

## D. Library Go
Go memiliki banyak sekali library yang dapat digunakan. Berikut merupakan halaman yang berisi library Go https://pkg.go.dev/std. Pada buku ini akan menjelaskan beberapa library standart yang ada pada Go dan beberapa library yang akan dibuat anda. Berikut beberapa library Go yang akan ditampilkan pada gambar dibawah ini :

![Screenshot 2023-06-07 213217](https://github.com/Rachma-Nurhaliza-Parindra/tubes-kel-2/assets/98588309/3744a53e-f52b-42ca-a537-50315b293cb9)

Beberapa library standard Go dari halaman https://pkg.go.dev/std yang dapat dipakai.

1. Archive : Mendukung untuk membaca dan menulis package .tar dan .zip
2. Bufio : Mengimplementasikan buffered I/O. Itu membungkus objek io.Reader atau io.Writer, membuat objek lain (Reader atau Writer) yang juga mengimplementasikan antarmuka tetapi menyediakan buffering dan beberapa bantuan untuk I/O tekstual.
3. Builtin : Menyediakan dokumentasi untuk pengidentifikasi Go yang telah dideklarasikan sebelumnya.
4. Bytes : Mengimplementasikan fungsi untuk manipulasi irisan byte.
5. Compress : Mengompres data dengan file berformat bzip2, flate, gzip, lzw dan zlib.
6. Container : Terdiri dari beberapa library lain yaitu heap, list dan ring.
7. Context : Paket context mendefinisikan context type, yang membawa deadlines, pembatalan sinyal, dan nilai cakupan permintaan lainnya melintasi batas API dan diantara proses.
8. Crypto : Kumpulan konstanta kriptografi secara umum.
9. Database : Terdiri dari sql dan sql driver yang berkaitan dengan database tersebut.
10. Debug : Terdiri dari paket akses menuju beberapa objek yaitu dwarf, elf, goysm, macho, pe dan plan9obj.
11. Embed : menyediakan akses ke file yang disematkan dalam program Go yang sedang berjalan.
12. Encoding : Antarmuka yang digunakan bersama oleh paket lain yang mengonversi data ke dan dari representasi tingkat byte dan tekstual.
13. Errors : Fungsi untuk memanipulasi kesalahan.
14. Expvar : Menyediakan antarmuka standar untuk variabel publik, seperti penghitung operasi di server.
15. Flag : Mengimplementasikan penguraian bendera baris perintah.
16. Fmt : Mengimplementasikan  I/O terformat dengan fungsi yang serupa dengan printf dan scanf C.
17. Go : Package go mempunyai beberapa library lainnya yaitu ast, build, build/constraint, constant, doc, format, importer, parser, printer, scanner, token dan types.
18. Hash : Menyediakan antarmuka untuk fungsi- fungsi hash.
19. Html : Menyediakan fungsi - fungsi untuk menghindari teks HTML.
20. Image : Mengimplementasikan perpustakaan gambar 2-D dasar.
21. Index : memiliki beberapa library lain yaitu suffixarray.
22. Io : Interface dasar untuk primitif I/O.
23. Log : Mengimplementasikan package logging sederhana.
24. Math : Menyediakan konstanta dasar dan fungsi matematika.
25. Mime : Mengimplementasikan bagian dari spesifikasi MIME.
26. Net : Menyediakan interface portabel untuk IO jaringan, termasuk TCP/IP, UDP, resolusi nama domain dan soket domain Unix.
27. OS : Menyediakan interface platform independen untuk fungsionalitas sistem operasi.
28. Path : Mengimplementasikan rutinitas utilitas untuk memanipulasi jalur yang dipisahkan garis miring.
29. Plugin : Mengimplementasikan pemuatan dan resolusi simbol dari plugin Go. Dan lain – lain.

## E. Rangkuman 
1. Go yaitu bahasa pemrograman open source berfungsi untuk memudahkan membangun perangkat lunak yang sederhana, andar dan efisien.
2.	Instalasi Go tergolong mudah dan untuk mendownload dapat melalui akses halaman https://go.dev/doc/install dengan ukuran file kurang lebih dari 125 MB
3.	Code editor yang dapat digunakan oleh semua code editor dan disesuaikan dengan keinginan para pelanggan, Yang saya gunakan yaitu Visual Studio Code (VSCode).
4.	Perintah ”fmt” dapat digunakan menampilkan teks di layar .
5.	Library Go terdiri dari fungsi – fungsi dalam package.
