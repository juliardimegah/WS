# BAB VI
# CARA INSTALL GOLANG

# Apa Itu Golang?

Golang (atau biasa disebut dengan Go) adalah bahasa pemrograman yang dikembangkan di Google oleh Robert Griesemer, Rob Pike, dan Ken Thompson pada tahun 2007 dan mulai diperkenalkan ke publik tahun 2009.
Penciptaan bahasa Go didasari bahasa C dan C++, oleh karena itu gaya sintaksnya mirip.

## 1.	Kelebihan Go

Go memiliki kelebihan dibanding bahasa lainnya, beberapa di antaranya:

•	Mendukung konkurensi di level bahasa dengan pengaplikasian cukup mudah

•	Mendukung pemrosesan data dengan banyak prosesor dalam waktu yang bersamaan (pararel processing)

•	Memiliki garbage collector

•	Proses kompilasi sangat cepat

•	Bukan bahasa pemrograman yang hirarkial dan bukan strict OOP, memberikan kebebasan ke developer perihal bagaimana cara penulisan kode.

•	Dependensi dan tooling yang disediakan terbilang lengkap.

•	Dukungan komunitas sangat bagus. Banyak tools yang tersedia secara gratis dan open source yang bisa langsung dimanfaatkan.

Sudah banyak industri dan perusahaan yg menggunakan Go sampai level production, termasuk di antaranya adalah Google sendiri, dan juga tempat di mana penulis bekerja.

## 2.	INSTALASI GOLANG (STABLE & UNSTABLE)

Hal pertama yang perlu dilakukan sebelum bisa menggunakan Go adalah meng-install-nya terlebih dahulu. Panduan instalasi sebenarnya sudah disediakan di situs resmi Go ```http://golang.org/doc/install#install```.
Di sini penulis mencoba meringkas petunjuk instalasi pada link di atas, agar lebih mudah untuk diikuti terutama untuk pembaca yang baru belajar.
Go yang digunakan adalah versi 1.20, direkomendasikan menggunakan versi tersebut.
URL untuk mengunduh installer Go: ```https://golang.org/dl/``` . Silakan langsung unduh dari link tersebut lalu lakukan proses instalasi, atau bisa mengikuti petunjuk pada chapter ini.

# INSTALASI GO STABLE
## A.	INSTALASI GO DI WINDOWS

1. Download terlebih dahulu installer-nya di ```https://golang.org/dl/```. Pilih installer untuk sistem operasi Windows sesuai jenis bit yang digunakan.
2. Setelah ter-download, jalankan installer, klik next hingga proses instalasi selesai. By default jika anda tidak merubah path pada saat instalasi, Go akan ter-install di ```C:\go```. Path tersebut secara otomatis akan didaftarkan dalam PATH environment variable.
3. Buka Command Prompt / CMD, eksekusi perintah berikut untuk mengecek versi Go.
4. ```go version```
5. Jika output adalah sama dengan versi Go yang ter-install, menandakan proses instalasi berhasil.

Sering terjadi, command go version tidak bisa dijalankan meskipun instalasi sukses. Solusinya bisa dengan restart CMD (tutup CMD, kemudian buka lagi). Setelah itu coba jalankan ulang command di atas.

## B.	INSTALASI GO DI MACOS

Cara termudah instalasi Go di MacOS adalah menggunakan Homebrew.
1.	Install terlebih dahulu Homebrew (jika belum ada), caranya jalankan perintah berikut di terminal.
2.	``` $ ruby -e "$(curl -fsSL http://git.io/pVOl)" ```
3.	Install Go menggunakan command brew.
4.	``` $ brew install go ```
5.	Tambahkan path binary Go ke PATH environment variable.
6.	``` $ echo "export PATH=$PATH:/usr/local/go/bin" >> ~/.bash_profile ```
7.	``` $ source ~/.bash_profile ```
8.	Jalankan perintah berikut mengecek versi Go.
9.	``` go version ```
10.	Jika output adalah sama dengan versi Go yang ter-install, menandakan proses instalasi berhasil.

## C.	INSTALASI GO DI LINUX

1.	Unduh arsip installer dari https://golang.org/dl/, pilih installer untuk Linux yang sesuai dengan jenis bit komputer anda. Proses download bisa dilakukan lewat CLI, menggunakan wget atau curl.
2.	```$ wget https://storage.googleapis.com/golang/go1...```
3.	Buka terminal, extract arsip tersebut ke /usr/local.
4.	```$ tar -C /usr/local -xzf go1...```
5.	Tambahkan path binary Go ke PATH environment variable.
6.	```$ echo "export PATH=$PATH:/usr/local/go/bin" >> ~/.bashrc```
7.	```$ source ~/.bashrc```
8.	Selanjutnya, eksekusi perintah berikut untuk mengetes apakah Go sudah terinstal dengan benar.
9.	```go version```
10.	Jika output adalah sama dengan versi Go yang ter-install, menandakan proses instalasi berhasil.

## 3.	VARIABEL GOROOT

By default, setelah proses instalasi Go selesai, secara otomatis akan muncul environment variable GOROOT. Isi dari variabel ini adalah lokasi di mana Go ter-install.
Sebagai contoh di Windows, ketika Go di-install di C:\go, maka path tersebut akan menjadi isi dari GOROOT.
Silakan gunakan command go env untuk melihat informasi konfigurasi environment yang ada.

## 4.	INSTALASI GO UNSTABLE/DEVELOPMENT

Jika pembaca tertarik untuk mencoba versi development Go, ingin mencoba fitur yang belum dirilis secara official, ada beberapa cara:

•	Instalasi dengan build from source ```https://go.dev/doc/install/source```

•	Gunakan command go install, contohnya seperti go install ```golang.org/dl/go1.18beta1@latest```. Untuk melihat versi unstable yang bisa di-install silakan merujuk ke ```https://go.dev/dl/#unstable```

## 5.	GO MODULES

Pada bagian ini kita akan belajar cara inisialisasi project menggunakan Go Modules (atau Modules).

## 6.	PENJELASAN

Go modules merupakan manajemen dependensi resmi untuk Go. Modules ini diperkenalkan pertama kali di go1.11, sebelum itu pengembangan project Go dilakukan dalam GOPATH.
Modules digunakan untuk menginisialisasi sebuah project, sekaligus melakukan manajemen terhadap 3rd party atau library lain yang dipergunakan.
Modules penggunaannya adalah lewat CLI. Dan jika temen-temen sudah sukses meng-install Go, maka otomatis bisa mempergunakan Go Modules.
Modules atau Module di sini merupakan istilah untuk project ya. Jadi jangan bingung.

## 7.	INISIALISASI PROJECT MENGGUNAKAN GO MODULES

Command go mod init digunakan untuk menginisialisasi project baru.
Mari kita praktekan, buat folder baru, bisa via CLI atau lewat browser/finder.
```mkdir project-pertama```
```cd project-pertama```
```go mod init project-pertama```
```dir```
Bisa dilihat pada command di atas ada direktori project-pertama, dibuat. Setelah masuk ke direktori tersebut, perintah go mod init project-pertama dijalankan. Dengan ini maka kita telah menginisialisasi direktori project-pertama sebagai sebuah project Go dengan nama project-pertama (kebetulan di sini nama project sama dengan nama direktori-nya).

## 8.	Environtment Variable

![image](https://github.com/kerjabhakti/WS/assets/98022263/8d88a620-3269-4fac-8f1a-b1a01c02e234)

![image](https://github.com/kerjabhakti/WS/assets/98022263/a1e742fd-ad35-456f-9d63-de28a27b7fb0)

Skema penulisan command go mod:

```go mod init <nama-project>```

```go mod init project-pertama```

Untuk nama project, umumnya adalah disamakan dengan nama direktori, tapi bisa saja sebenarnya menggunakan nama yang lain.
Nama project dan Nama module merupakan istilah yang sama.
Eksekusi perintah ```go mod init``` menghasilkan satu buah file baru bernama ```go.mod```. File ini digunakan oleh Go toolchain untuk menandai bahwa folder di mana file tersebut berada adalah folder project. Jadi jangan di hapus ya file tersebut.

## 9.	GOPATH DAN WORKSPACE

PERINGATAN! Setup Go project menggunakan GOPATH kurang dianjurkan untuk Go versi terbaru. Lebih baik gunakan A.3. Setup Go Modules. Tapi meski demikian, bukan berarti GOPATH tidak berguna sama sekali, jadi silakan ikuti panduan berikut jika mau.

## 10.	VARIABEL GOPATH

GOPATH adalah variabel yang digunakan oleh Go sebagai rujukan lokasi di mana semua folder project disimpan, kecuali untuk yg diinisialisasi menggunakan Go Modules. GOPATH berisikan 3 buah sub-folder: src, bin, dan pkg.

Project di Go bisa ditempatkan dalam ```$GOPATH/src```. Sebagai contoh anda ingin membuat project dengan nama belajar, maka harus dibuatkan sebuah folder dengan nama belajar, ditempatkan dalam src ```($GOPATH/src/belajar)```.
Path separator yang digunakan sebagai contoh di buku ini adalah slash /. Khusus pengguna Windows, path separator adalah backslash \.

## 11.	SETUP WORKSPACE

Lokasi folder yang akan dijadikan sebagai workspace bisa ditentukan sendiri. Anda bisa menggunakan alamat folder mana saja, bebas, tapi jangan gunakan path tempat di mana Go ter-install (tidak boleh sama dengan GOROOT). Lokasi tersebut harus didaftarkan dalam path variable dengan nama GOPATH. Sebagai contoh, penulis memilih path ```$HOME/Documents/go```, maka saya daftarkan alamat tersebut. Caranya:

•	Bagi pengguna Windows, tambahkan path folder tersebut ke path variable dengan nama GOPATH. Setelah variabel terdaftar, cek apakah path sudah terdaftar dengan benar.
Sering terjadi GOPATH tidak dikenali meskipun variabel sudah didaftarkan. Jika hal seperti ini terjadi, restart CMD, lalu coba lagi.

•	Bagi pengguna Mac OS, export path ke ```~/.bash_profile```. Untuk Linux, export ke ```~/.bashrc```

•	 ```$ echo "export GOPATH=$HOME/Documents/go" >> ~/.bash_profile```

•	 ```$ source ~/.bash_profile```

Cek apakah path sudah terdaftar dengan benar.

![image](https://github.com/kerjabhakti/WS/assets/98022263/446590d9-110c-4b54-bb84-5a6b9c13734d)

Setelah GOPATH berhasil dikenali, perlu disiapkan 3 buah sub folder di dalamnya, dengan kriteria sebagai berikut:

•	Folder src, adalah path di mana project Go disimpan

•	Folder pkg, berisi file hasil kompilasi

•	Folder bin, berisi file executable hasil build

![image](https://github.com/kerjabhakti/WS/assets/98022263/f51618b5-75d6-4df1-8cec-0b0b963427ca)

Struktur di atas merupakan struktur standar workspace Go. Jadi pastikan penamaan dan hirarki folder adalah sama.
