# Deployment Aplikasi Frontend

Kita akan membuat frontend yang sudah kita buat berkomunikasi dengan backend yang sudah dibuat sebelumnya. Contoh : https://gocroot.herokuapp.com/presensi Adapun langkah yang akan kita lakukan :

1. Membuat tabel di dalam kontainer dari tampilan yang sudah kita buat
2. Menambahkan jscroot di dalam file html yang kita buat
3. Membuat dan mengisi kerangka jscroot

## Kontainer, Tabel, tag, Content
Pertama pakai frontend yang sudah kemaren kita buat, deploy di github pages. Kita buat di dalam kontainer sebuah tabel untuk mengkonsumsi API. Contoh frontend : https://github.com/learning022/presensi dengan alamat github pages : https://learning022.github.io/presensi/ . Hal yang pertama kali kita lakukan adalah membuka file index.html dan menambahkan tag di dalam section head untuk memanggil file js/croot.js.

```html
<script type="module" src="js/croot.js"></script>
```
