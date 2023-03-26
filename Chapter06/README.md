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
![image](https://user-images.githubusercontent.com/15622730/227806860-b128c140-4917-4328-bdb5-71e00d9c4989.png)

kita coba isi croot.js dengan
```js
import { setInner } from "https://jscroot.github.io/element/croot.js";
setInner("namadivisi","Dari croot.js");
```
![image](https://user-images.githubusercontent.com/15622730/227806895-abcdbd62-7b73-4e52-8573-bb62e9dce331.png)

maka judul berubah, berarti JSCroot sudah berjalan dengan baik
![image](https://user-images.githubusercontent.com/15622730/227806920-543410a9-0f10-4fe4-b4df-4ef9b550f37e.png)

## Pengambilan Data dari Backend
Kita buat file croot.js di dalam folder js yang berisi.
```js
import { get } from "https://jscroot.github.io/api/croot.js";
import { setInner } from "https://jscroot.github.io/element/croot.js";

let URLPresensi = "https://gocroot.herokuapp.com/presensi";

get(URLPresensi,isiTablePresensi);

function isiTablePresensi(results){
    console.log(results);
}
setInner("namadivisi","Dari croot.js");
```

