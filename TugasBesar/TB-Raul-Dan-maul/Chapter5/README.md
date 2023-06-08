# BAB V
# CARA INSTALL VUE JS DI WINDOWS

# CARA INSTALASI

Hal pertama yang harus Anda lakukan sebelum belajar Vue JS adalah menginstal Node.js. Node JS adalah virtual environment untuk framework lain, termasuk Vue JS. Setelah Anda menginstal Node.js, Anda akan bertemu dengan yang namanya NPM.NPM adalah sebuah tool untuk mengatur package Java Script. NPM diibaratkan sebagai Composer versi Node.js. NPM ini sangat dibutuhkan sebelum Anda menginstal Vue JS. Untuk lebih jelasnya, berikut ini adalah langkah-langkah Install Vue JS di Windows.

## Langkah 1: Download dan Install Node JS

Untuk mengunduh file installer Node JS Anda bisa klik disini. Sesuaikan tipe sistem operasi Windows Anda apakah menggunakan 64bit atau 32bit. Klik salah satu dan tunggu hingga proses download selesai.

![image](https://github.com/kerjabhakti/WS/assets/98022263/0c5117b2-204a-4f8b-9ff7-368462463980)

Setelah proses download selesai, buka setup instalasi Node JS dan ikuti instruksi instalasinya. Tunggu hingga proses instalasi selesai.

## Langkah 2: Cek Instalasi Node JS

Selanjutnya, cek apakah instalasi Node JS Anda berhasil atau tidak. Caranya dengan menggunakan cmd. Buka cmd dengan cara klik tombol windows lalu ketik cmd pada menu pencarian. Klik kanan pada aplikasi Command Prompt lalu pilih Run as Administrator. Seperti contoh gambar di bawah ini.

![image](https://github.com/kerjabhakti/WS/assets/98022263/6e9df790-8528-4bc6-850a-97c969ccd421)

Kemudian, masukkan perintah berikut untuk memastikan proses instalasi Node JS Anda berhasil.

```
node -v
```

Maka output dari perintah di atas akan seperti gambar di bawah ini:

![image](https://github.com/kerjabhakti/WS/assets/98022263/8ee4bc64-45b7-4cdd-9ce0-05f0feb03728)

## Langkah 3: Install Vue JS

Untuk menghindari terjadinya error saat proses instalasi Vue JS, bersihkan cache pada cmd menggunakan perintah berikut:

```
npm cache clean --force
```

Output dari perintah di atas akan menampilkan seperti gambar di bawah ini.

![image](https://github.com/kerjabhakti/WS/assets/98022263/3b2142db-2e6b-4a62-9cfe-f65d67812aa8)

Selanjutnya install Vue JS menggunakan perintah berikut. 

```
npm install -g @vue/cli
```

Pastikan saat proses install Anda terhubung ke dalam jaringan internet. Karena, proses install membutuhkan download file dari resource Vue JS yang ada di Node JS.
Tunggu hingga proses instalasi selesai, seperti contoh gambar di bawah ini:

![image](https://github.com/kerjabhakti/WS/assets/98022263/a20a7f99-6f20-4108-ad83-461f96d7f353)

## Langkah 4: Buat Project Vue JS

Setelah Anda selesai melakukan instalasi Vue JS, tidak lengkap rasanya apabila Anda tidak langsung mencoba langsung untuk membuat project menggunakan Vue JS.
Pertama, masuk ke direktori tempat Anda nanti akan menyimpan project Vue JS. Pada panduan ini menggunakan direktori Local Disk: D. 

![image](https://github.com/kerjabhakti/WS/assets/98022263/de492f73-8cbe-4e3f-978e-3f49bdd91d26)

Selanjutnya, untuk membuat project baru Vue JS Anda cukup jalankan perintah berikut ke dalam Command Prompt Anda. myproject adalah nama folder tempat menyimpan project Vue JS, Anda juga bisa menggunakan nama lain.

```
vue create myproject
```

Kemudian, Anda akan diminta untuk memilih opsi instalasi pada Vue CLI. Terdapat dua pilihan yaitu default dan manually. Pada panduan ini kami menggunakan pilihan default. Karena untuk menyesuaikan pengaturan project sesuai dengan Vue JS. Lalu tekan ENTER.

![image](https://github.com/kerjabhakti/WS/assets/98022263/38309392-900a-4a17-8617-ca5616a46f5b)

Setelah itu proses pembuatan project akan berjalan. Anda perlu tunggu hingga proses ini selesai. Apabila proses pembuatan project berhasil akan muncul pesan Successfully created project “myproject”.

![image](https://github.com/kerjabhakti/WS/assets/98022263/3c76f487-649d-415d-8b80-e858a8612c3a)

Selanjutnya Anda perlu masuk ke dalam direktori project. Gunakan perintah yang telah diberikan saat proses instalasi selesai. Pada panduan ini menggunakan perintah.

```
cd myprojects
```

Setelah Anda masuk ke dalam direktori project, jalankan Vue JS menggunakan perintah berikut:

```
npm run serve
```

Perintah diatas akan menghasilkan output seperti gambar di bawah ini.

![image](https://github.com/kerjabhakti/WS/assets/98022263/31026626-a840-4d9c-ab84-5da07d591d7e)

Yang terakhir buka browser Anda dan akses salah satu dari IP / localhost yang ada pada gambar di atas. Maka Anda akan mendapatkan tampilan halaman dari Vue JS.

![image](https://github.com/kerjabhakti/WS/assets/98022263/7db89712-f27e-4937-a1d9-f37f31e18087)

Setelah itu Anda bisa melakukan proses develop front-end dari website atau aplikasi.


