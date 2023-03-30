# Buat frontend untuk open ai

![api publik telah terhubung](https://user-images.githubusercontent.com/93715182/228727105-b2ce26ad-ab63-40ec-b7c1-802945d52ee7.png)

Itu adalah template spotify, kemudian ganti list lagu dengan api yang kita punya

Berikut adalah codingannya

```go
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

    <title>Multi-line Table by lvwzhen. </title>

            <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <div class="font-sans antialiased h-screen flex">
      <!-- Sidebar / channel list -->
      <div class="bg-gray-900 text-purple-lighter flex-none w-24 p-6 hidden md:block">
        <div class="cursor-pointer mb-4 border-b border-gray-600 pb-2">
          <div
            class="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
            <img src="https://cdn.discordapp.com/embed/avatars/0.png" alt="">
                </div>
          </div>
          <div class="cursor-pointer mb-4">
            <div
              class="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-xl mb-1 overflow-hidden">
              <img src="https://cdn.discordapp.com/embed/avatars/0.png" alt="">
                </div>
            </div>
            <div class="cursor-pointer mb-4">
              <div
                class="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
                <img src="https://cdn.discordapp.com/embed/avatars/1.png" alt="">
                </div>
              </div>
              <div class="cursor-pointer mb-4">
                <div
                  class="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
                  <img src="https://cdn.discordapp.com/embed/avatars/2.png" alt="">
                </div>
                </div>
                <div class="cursor-pointer mb-4">
                  <div
                    class="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
                    <img src="https://cdn.discordapp.com/embed/avatars/3.png" alt="">
                </div>
                  </div>
                  <div class="cursor-pointer mb-4">
                    <div
                      class="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
                      <img src="https://cdn.discordapp.com/embed/avatars/4.png" alt="">
                </div>
                    </div>
                    <div class="cursor-pointer">
                      <div
                        class="bg-white opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
                        <svg class="fill-current h-10 w-10 block" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20">
                          <path
                            d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
                        </svg>
                      </div>
                    </div>
    
    
    
                  </div>
                  <div class="bg-gray-800 text-purple-lighter flex-none w-64 pb-6 hidden md:block">
                    <div
                      class="text-white mb-2 mt-3 px-4 flex justify-between border-b border-gray-600 py-1 shadow-xl">
                      <div class="flex-auto">
                        <h1 class="font-semibold text-xl leading-tight mb-1 truncate">UTS</h1>
                      </div>
                      <div>
                        <svg class="arrow-gKvcEx icon-2yIBmh opacity-50 cursor-pointer" width="24"
                          height="24" viewBox="0 0 24 24">
                          <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
                            d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div class="mb-8">
                      <div class="px-4 mb-2 text-white flex justify-between items-center">
                        <div class="opacity-75 cursor-pointer">GENERAL</div>
                        <div>
                          <svg class="fill-current h-5 w-5 opacity-50 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                              d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
                          </svg>
                        </div>
                      </div>
                      <div class="bg-teal-dark cursor-pointer font-semibold py-1 px-4 text-gray-300">INI PUNYA RAUL GAIS</div>
                    </div>
                    <div class="mb-8">
                      <div class="px-4 mb-2 text-white flex justify-between items-center">
                        <div class="opacity-75 cursor-pointer">VOICE</div>
                        <div>
                          <svg class="fill-current h-5 w-5 opacity-50 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                              d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
                          </svg>
                        </div>
                      </div>
                      <div
                        class="bg-teal-dark hover:bg-gray-800 cursor-pointer font-semibold py-1 px-4 text-gray-300">
                        ? General</div>
                    </div>
                  </div>
                  <!-- Chat content -->
                  <div class="flex-1 flex flex-col bg-gray-700 overflow-hidden">
                    <!-- Top bar -->
                    <div class="border-b border-gray-600 flex px-6 py-2 items-center flex-none shadow-xl">
                      <div class="flex flex-col">
                        <h3 class="text-white mb-1 font-bold text-xl text-gray-100">
                          <span class="text-gray-400">INI UTS</span> PUNYA RAUL</h3>
                      </div>
                    </div>
                    <!-- Chat messages -->
                    <div class="px-6 py-4 flex-1 overflow-y-scroll">
                      <!-- A message -->
                      <body class="bg-gray-200">
                        <div class="fixed bottom-0 left-0 right-0 z-40 px-4 py-3 text-center text-white bg-gray-800">
                            This a Multi-line Table by lvwzhen. 
                            <a class="text-gray-200 underline" href="https://tailwindcomponents.com/component/multi-line-table">Component details</a>
                        </div>
                        <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                      <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead class="bg-gray-50">
                          <tr>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name</th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100 border-t border-gray-100" id="konten">
                    
                          
                        </tbody>
                        <tbody class="divide-y divide-gray-100 border-t border-gray-100" id="kontenz">
                    
                          
                        </tbody>
                      </table>
                    <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                    <script src="./crot.js"></script>
                    </body>
                      <!-- A message -->
                    </div>
                    <div class="pb-6 px-4 flex-none">
                      <div class="flex rounded-lg overflow-hidden">
                        <span class="text-3xl text-grey border-r-4 border-gray-600 bg-gray-600 p-2">
                        <svg class="h-6 w-6 block bg-gray-500 hover:bg-gray-400 cursor-pointer rounded-xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" fill="#FFFFFF"/></svg>
                      </span>
                        <input type="text" class="w-full px-4 bg-gray-600" placeholder="Message #PUNYA RAUL" />
                </div>
                      </div>
                    </div>
                  </div>
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
<script src="./crot.js"></script>
</body>
</html>
```

Kemudian berikutnya membuat javascript yang menghubungkan api ke frontend, berikut adalah code javascript yang digunakan

```go
var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

hasil=""
txt=""
txt1=""

fetch("https://cdn.statically.io/gh/lakuapik/jadwalsholatorg/master/adzan/semarang/2019/12.json", requestOptions)

// fetch("https://dev.farizdotid.com/api/daerahindonesia/provinsi/32", requestOptions)

  .then(response => response.text())
  .then(result => tampilkan(result))
  .catch(error => console.log('error', error));

function tampilkan(result){
  console.log(result);
  hasil=JSON.parse(result);
  txt=hasil.forEach(isitabel);
//   document.getElementById("nama").innerHTML(result);
}

function isitabel(value){
    const imsyak = "Imsyak:"
    const shubuh = "Subuh:"
    const dzuhur = "Dzuhur:"
    const tanggal = "Tanggal:"
    const terbit = "Terbit:"
    const magrib = "Magrib:"
    const isya = "Isya:"
    const dhuha = "Dhuha:"
    const ashr = "Ashr:"
    const pembatas = "--------------------------------------------------------------------------------------------------------------"
      txt= txt+trnyatabel.replace("#TEXT#",imsyak+value.imsyak+"");
      txt= txt+trnyatabel.replace("#TEXT#",shubuh+value.shubuh+"");
      txt= txt+trnyatabel.replace("#TEXT#",dzuhur+value.dzuhur+"");
      txt= txt+trnyatabel.replace("#TEXT#",tanggal+value.tanggal+"");
      txt= txt+trnyatabel.replace("#TEXT#",terbit+value.terbit+"");
      txt= txt+trnyatabel.replace("#TEXT#",magrib+value.magrib+"");
      txt= txt+trnyatabel.replace("#TEXT#",isya+value.isya+"");
      txt= txt+trnyatabel.replace("#TEXT#",dhuha+value.dhuha+"");
      txt= txt+trnyatabel.replace("#TEXT#",ashr+value.ashr+"");
      txt= txt+trnyatabel.replace("#TEXT#",pembatas);
      
      
    document.getElementById("konten").innerHTML=txt;
    }
    trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `
```

# Pengujian request catcher

![requestcatcher](https://user-images.githubusercontent.com/93715182/228728433-fc07bb21-f4bd-45c0-9699-a2445f6e0138.png)

# Membuat post sign up

Buat trigger pipedream terlebih dahulu

![trigger pipedream](https://user-images.githubusercontent.com/93715182/228728983-ba3175e7-6b46-48ba-8ce0-56b006d2e4d4.png)

Kemudian kita buat front end buat sign up nya

![coba login pipedream](https://user-images.githubusercontent.com/93715182/228729135-8c676110-d3d5-47c2-b382-30c06c22a909.png)

Berikut adalah codingannya

```go
<!DOCTYPE html>
<html class="border-l" lang="en">
<head>
    <meta charset="UTF-8">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .instagram-logo {
            background-position: 0 -130px;
            height: 51px;
            width: 175px;
            background-image: url(https://bit.ly/3v2LT17);
        }
        .facebook-logo {
            background-position: -414px -259px;
            background-image: url(https://bit.ly/3v2LT17);
            height: 16px;
            width: 16px;
        }
        .apple-store-logo {
            background-position: -132px -182px;
            height: 42px;
            width: 128px;
            background-image: url(https://bit.ly/3v2LT17);
        }
        .google-store-logo {
            background-position: 0 -182px;
            height: 42px;
            width: 130px;
            background-image: url(https://bit.ly/3v2LT17);
        }
    </style>
</head>
<body>
<div class="h-screen bg-gray-50 flex flex-col justify-center items-center">
    <div class="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
        <h1 class="bg-no-repeat instagram-logo"></h1>
        <form class="mt-8 w-64 flex flex-col">
            <input autofocus
                   class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                   id="email" placeholder="Email" type="text">
            <input autofocus
                   class="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                   id="password" placeholder="Password" type="password">
                   <div class="w-full px-3 mb-5">
                    <a onclick="PushButton()" class="block w-full max-w-xs mx-auto bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-black rounded-lg px-3 py-3 font-semibold"><center>Log In</center>
                    </a>        
                   </div>
        </form>
        <div class="flex justify-evenly space-x-2 w-64 mt-4">
            <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
            <span class="flex-none uppercase text-xs text-gray-400 font-semibold">or</span>
            <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
        </div>
        <button class="mt-4 flex">
            <div class="bg-no-repeat facebook-logo mr-1"></div>
            <span class="text-xs text-blue-900 font-semibold">Log in with Facebook</span>
        </button>
        <a class="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">Forgot password?</a>
    </div>
    <div class="bg-white border border-gray-300 text-center w-80 py-4">
        <span class="text-sm">Ingin melihat Open API?</span>
        <a href="../OpenAPI/api.html" class="text-blue-500 text-sm font-semibold">Tekan Di sini</a>
    </div>
    <div class="mt-3 text-center">
        <span class="text-xs">Get the app</span>
        <div class="flex mt-3 space-x-2">
            <div class="bg-no-repeat apple-store-logo"></div>
            <div class="bg-no-repeat google-store-logo"></div>
        </div>
    </div>
</div>
<script src="./gj.js"></script>
</body>
</html>
```

Setelah itu buat javascript untuk menghubungkan frontend dengan trigger pipedream yang sudah dibuat, berikut codingannya

```go
function PushButton(){
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    PostSignUp(email, password);
  }
  
  function PostSignUp(email, password){
    var myHeaders = new Headers();
myHeaders.append("Login", "bisaLogin");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": email,
  "password": password,
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://eo4tdlefcl79q8b.m.pipedream.net", requestOptions)
  .then(response => response.text())
  .then((result) => GetResponse(result))
  .catch(error => console.log('error', error));
  }
  
  function GetResponse(result) {
    document.getElementById("formsignup").innerHTML = result;
    console.log(result)
  }
```

Jangan lupa dengan fungsi PushButton

```go
function PushButton(){
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    PostSignUp(email, password);
  }
  
  function PostSignUp(email, password){
    var myHeaders = new Headers();
```

Dan fungsi onclick

```go
<div class="w-full px-3 mb-5">
                    <a onclick="PushButton()" class="block w-full max-w-xs mx-auto bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-black rounded-lg px-3 py-3 font-semibold"><center>Log In</center>
                    </a>        
                   </div>
```

Setelah itu mari kita coba apakah data akan terkirim ke pipedream menggunakan live server

![berhasil login pipedream](https://user-images.githubusercontent.com/93715182/228729410-67b9fd4c-4dd7-4cbc-af51-7b16a151fb05.png)

![berhasil login pipedream](https://user-images.githubusercontent.com/93715182/228729460-5828def5-7297-4f07-be72-bb31b5661803.png)

Dapat dilihat bahwa data telah masuk


## sertakan link githubpage

link dashboard(frondend)
https://ibrohim-mubarok-d4-ulbi.github.io/OpenAPI/
link sign up
https://ibrohim-mubarok-d4-ulbi.github.io/PostSignUp/
