# UTS ADAM GHAFARA UTS

## 1. Tampilan Frontend Menggunakan Tailwind

Untuk tampilan Frontend, kita ambil dari template saja, dan template seperti berikut:

![image](https://github.com/adam-ghafara/WS/blob/main/UTS/1214064_AdamGhafara_UTS/foto/Web%20tailwind.png?raw=true)

Ini adalah Form untuk Registrasi, Dibawahnya ditambahkan Link untuk menuju Tampilan Tes Public API.

Adapun tampilan tes public API, kita membuat satu html lagi yang menampilkan tampilan tabel. Berikut codingan yang digunakan:

```

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0ed3cf">
    <meta name="msapplication-TileColor" content="#0ed3cf">
    <meta name="theme-color" content="#0ed3cf">

    <meta property="og:image" content="http://tailwindcomponents.com/storage/8416/conversions/temp41738-ogimage.jpg?v=2023-02-13 07:30:00" />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="640" />
    <meta property="og:image:type" content="image/png" />

    <meta property="og:url" content="https://tailwindcomponents.com/component/multi-line-table/landing" />
    <meta property="og:title" content="Multi-line Table by lvwzhen" />
    <meta property="og:description" content="Multi-line Table design made using Tailwind CSS" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@TwComponents" />
    <meta name="twitter:title" content="Multi-line Table by lvwzhen" />
    <meta name="twitter:description" content="Multi-line Table design made using Tailwind CSS" />
    <meta name="twitter:image" content="http://tailwindcomponents.com/storage/8416/conversions/temp41738-ogimage.jpg?v=2023-02-13 07:30:00" />

    <title>HASIL TES API</title>

            <script src="https://cdn.tailwindcss.com"></script>
    </head>
<body class="bg-gray-200">
    <div class="fixed bottom-0 left-0 right-0 z-40 px-4 py-3 text-center text-white bg-gray-800">
        -=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-A D A M  G H A F A R A-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
        <a class="text-gray-200 underline" href="https://tailwindcomponents.com/component/multi-line-table">Component details</a>
    </div>
    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">INILAH HASIL TEST API</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 border-t border-gray-100" id="konten">

    </tbody>

    <tbody class="divide-y divide-gray-100 border-t border-gray-100" id="kontenz">

      
    </tbody>
  </table>
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
</body>
<script src="./get_api.js"></script>
</html>
```

## 2. Menghubungkan Javascript Dengan Tailwind

Berikutnya akan dilakukan sambungan Javascript dengan Tailwind.

Kita namakan Javascript sebagai get_api.js.
Kita buat codingan berikut:
```
var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

hasil=""
txt=""
txt1=""

function show_result(result){
}

function isitabel(value){
  document.getElementById("konten").innerHTML=txt;
}
trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `
```
Setelahnya, Save.
Selanjutnya kita perlu menyambungkan Javascript ini dengan HTML Tailwind yang tadi kita buat sebelumnya.
Yang perlu kita lakukan adalah menambahkan codingan berikut..

```
<script src="./get_api.js"></script>
```

Masukkan codingan ini diantara penutup ```</Body>``` dan ```</html>```.

## 3. Tes Public API

Sekarang kita akan test public API, cari saja public API yang tidak memakai AuthKey dan dapat HTTPS, CORS boleh yang ada atau tidak ada tapi direkomendasikan menggunakan yang tidak ada CORS.

Contoh, kita menggunakan API Berikut.
```
https://jsonplaceholder.typicode.com/todos
```
Test API tersebut menggunakan Postman, masukkan kedalam field berikut dan Run.

![image](https://github.com/adam-ghafara/WS/blob/main/UTS/1214064_AdamGhafara_UTS/foto/TES%20API%20(2).png?raw=true)

Hasilnya, harus memunculkan data berikut:

![image](https://github.com/adam-ghafara/WS/blob/main/UTS/1214064_AdamGhafara_UTS/foto/TES%20API%20(1).png?raw=true)

Jika berhasil, silahkan buka panel bergambar ```</>```, kemudian pilih Javascript - Fetch

Hasil ditampilkan seperti berikut:

![image](https://github.com/adam-ghafara/WS/blob/main/UTS/1214064_AdamGhafara_UTS/foto/TES%20API%20(3).png?raw=true)

copy bagian ini
```
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
```

Paste diantara ```myHeaders.append``` dan ```hasil=""```

Selanjutnya, copy bagian ini:
```
fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

Paste diantara ```txt1=""``` dan ```function show_result```

ubah ```.then(result => console.log(result))``` menjadi ```.then(result => show_result.log(result))```

Save dan test dengan live server, lihat hasil dalam Console pada browser, seharusnya terlihat seperti berikut..

![image](https://github.com/adam-ghafara/WS/blob/main/UTS/1214064_AdamGhafara_UTS/foto/TES%20API%20(5).png?raw=true)

Sekarang masukkan codingan berikut untuk membuat isi kedalam html nya.

```
  const id = "ID: "
  const str = "TITLE: "
  const cnt = "COMPLETED : "
  const pag = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"
  txt= txt+trnyatabel.replace("#TEXT#",id+value.userId + "");
    txt= txt+trnyatabel.replace("#TEXT#",str+value.title + "");
    txt= txt+trnyatabel.replace("#TEXT#",cnt+value.completed + "");
    txt= txt+trnyatabel.replace("#TEXT#",pag);
  document.getElementById("konten").innerHTML=txt;
```
Jika sudah, Save dan lihat hasilnya. Seharusnya terlihat seperti berikut:

![image](https://github.com/adam-ghafara/WS/blob/main/UTS/1214064_AdamGhafara_UTS/foto/TES%20API%20(4).png?raw=true)

## 4. Tes RequestCatcher

Selanjutnya kita akan mencoba Tes RequestCatcher.

Menuju http://requestcatcher.com/. Kita buat terlebih dahulu API yang ingin kita lakukan pengetesan, isi Apa saja didalam kotaknya lalu pilih ```Get Started```

Nanti, ada link yang muncul didalamnya. Copy link tersebut dan masukkan kedalam Postman. Coba jalankan dengan perintah GET atau POST dan lihat hasil didalam RequesCatcher.

Hasil ditampilakn seperti berikut..

![image](https://github.com/adam-ghafara/WS/blob/main/UTS/1214064_AdamGhafara_UTS/foto/catcher%20(1).png?raw=true)

## 5. Membuat Endpoint dengan PipeDream

Berikutnya kita akan membuat API Endpoint menggunakan Pipedream dan menyambungkannya dengan HTML kita.

### A. Membuat Endpoint

Silahkan Registrasi Pipedream, jika sudah punya silahkan login langsung.

Masuk ke dashboard dan pilih menu New + di kanan atas dengan tombol warna biru..
Nantinya kalian akan di arahkan untuk memilih trigger.

Silahkan pilih ``` New HTTPS / Webhook Requests ```

Biarkan config dalam keadaan default lalu Save and Continue.
