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
![image](https://user-images.githubusercontent.com/15622730/227806670-bcf6c3da-202e-422a-8198-e5124ad3714c.png)

## 
Penggunaan Framework JSCroot
Kita akan menggunakan framework frontent jscroot, bisa dilihat di situs : https://jscroot.github.io/
pertama kita edit file index.html kita tambahkan id dengan value namadivisi di salah satu judul tabel
```html
<p id="namadivisi" class="font-semibold text-xl text-coolGray-800">Karyawan</p>
```
kita coba isi croot.js dengan
```js
import { setInner } from "https://jscroot.github.io/element/croot.js";
setInner("namadivisi","Dari croot.js");
```
maka judul berubah, berarti JSCroot sudah berjalan dengan baik

![image](https://user-images.githubusercontent.com/11188109/224890410-27a737dd-ec0d-416d-9614-2a0fd913f090.png)
